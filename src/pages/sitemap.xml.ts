import type { APIRoute } from 'astro';

// Static-page sitemap. This site has no blog or dynamic routes (see HANDOFF),
// so the page list is enumerated here. Add a route below if a new page ships.
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
  '': '2026-06-14',
  'services/': '2026-06-14',
  'services/tree-pruning/': '2026-06-14',
  'services/limb-removal/': '2026-06-14',
  'service-areas/': '2026-06-13',
  'guide/when-to-prune-trees-southern-ontario/': '2026-06-14',
  'about/': '2026-06-14',
  'contact/': '2026-06-10',
};

export const GET: APIRoute = ({ site }) => {
  const base = (site?.toString() ?? 'https://tarzantrimming.ca/').replace(/\/$/, '');
  const urls = Object.entries(PAGE_LASTMOD)
    .map(
      ([p, lastmod]) =>
        `  <url>\n    <loc>${base}/${p}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`,
    )
    .join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
