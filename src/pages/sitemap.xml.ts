import type { APIRoute } from 'astro';

// Static-page sitemap. This site has no blog or dynamic routes (see HANDOFF),
// so the page list is enumerated here. Add a route below if a new page ships.
// lastmod is a fixed honest build date, not new Date(), to avoid inflating the
// freshness signal Google reads from sitemaps.
const PAGES = [
  '',
  'services/',
  'services/tree-pruning/',
  'services/limb-removal/',
  'about/',
  'contact/',
];
const LASTMOD = '2026-06-09';

export const GET: APIRoute = ({ site }) => {
  const base = (site?.toString() ?? 'https://tarzantrimming.ca/').replace(/\/$/, '');
  const urls = PAGES.map(
    (p) => `  <url>\n    <loc>${base}/${p}</loc>\n    <lastmod>${LASTMOD}</lastmod>\n  </url>`,
  ).join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
