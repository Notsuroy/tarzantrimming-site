import type { APIRoute } from 'astro';
import blog from '~/data/blog.json';

// Static-page sitemap PLUS the /blog/ system (hub + per-post dynamic routes).
// Static pages are enumerated below; blog posts are derived from blog.json so a
// new post appears here automatically when it is added to that file.
//
// lastmod is a PER-PAGE honest last-content-change date, NOT a single shared
// build date. A uniform sitemap lastmod (the old `LASTMOD` constant) misreports
// freshness: it understates pages that genuinely changed (home + both service
// pages were edited 2026-06-13) and overstates pages that did not, so Google's
// recrawl prioritization gets a flat, low-quality signal. Each date below is the
// git last-commit date of that page's content source. Never use new Date().
//
// Hub-from-leaf rule: a hub page's date must be >= its newest child so the hub
// is never reported as staler than content it links to. `/services/` therefore
// inherits the max of its two service detail pages (both 2026-06-13), even
// though services.astro itself last changed 2026-06-10.
//
// MAINTENANCE: when a page's content changes (P-REFRESH, schema add, copy edit),
// bump that page's date here in the same commit, or the freshness signal decays
// to a stale fixed date.
const PAGE_LASTMOD: Record<string, string> = {
  '': '2026-07-20',
  'services/': '2026-07-17',
  'services/tree-pruning/': '2026-07-17',
  'services/limb-removal/': '2026-07-17',
  'service-areas/': '2026-06-13',
  'guide/when-to-prune-trees-southern-ontario/': '2026-06-29',
  'about/': '2026-07-18',
  'contact/': '2026-07-20',
};

// Date the /blog/ system shipped. The hub's lastmod is the max of this and the
// newest post (hub-from-leaf rule), so the hub is never reported staler than a
// post it links to. Bump only if the hub layout itself changes.
const BLOG_HUB_BASE = '2026-06-15';

export const GET: APIRoute = ({ site }) => {
  const base = (site?.toString() ?? 'https://tarzantrimming.ca/').replace(/\/$/, '');

  // Per-post entries with honest per-post lastmod (updatedAt falls back to
  // publishedAt). Never a shared build date.
  const posts = (blog as { slug: string; publishedAt: string; updatedAt?: string }[]).map((p) => ({
    path: `blog/${p.slug}/`,
    lastmod: p.updatedAt || p.publishedAt,
  }));

  // Hub date = max(base, newest post date).
  const blogHubLastmod = posts.reduce(
    (max, p) => (p.lastmod > max ? p.lastmod : max),
    BLOG_HUB_BASE,
  );

  const entries = [
    ...Object.entries(PAGE_LASTMOD).map(([p, lastmod]) => ({ path: p, lastmod })),
    { path: 'blog/', lastmod: blogHubLastmod },
    ...posts,
  ];

  const urls = entries
    .map(
      ({ path, lastmod }) =>
        `  <url>\n    <loc>${base}/${path}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`,
    )
    .join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
