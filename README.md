# tarzantrimming.ca

Static site for Tarzan Trimming, an owner-led tree care business serving south Ontario. Built with Astro 5 + Tailwind 3, hosted on Cloudflare Pages.

## Stack

- Astro 5 (static SSG)
- Tailwind 3 (custom forest / bark / sky / moss / cream palette)
- Cormorant Garamond (display) + Inter (body)
- Single language: English (en-CA)

## Quick start

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npm run preview  # serves dist/ locally
```

## Repo layout

```
src/
  components/         Reusable Astro sections (Hero, FAQ, FinalCTA, etc.)
  data/               site.json + services.json + faq.json + reviews.json
  layouts/            BaseLayout (shared head, header, footer, phone float)
  pages/              index, services, about, contact
  styles/             global.css
public/               Static assets (favicons, photos to be added)
```

## Where the content lives

Single source of truth files in `src/data/`:

- `site.json`, brand, contact, location, hours, service cities, SEO defaults
- `services.json`, service catalog with descriptions, process, good-for lists
- `faq.json`, front-of-funnel FAQ items
- `reviews.json`, testimonials (gated by `showOnHomepage` flag)

Edit those, rebuild, deploy. Every component reads from there.

## Brand voice rules

- **No em dashes (, ) or en dashes (-) anywhere.** Use periods, commas, or "to" for ranges. Enforced workspace-wide.
- Plain English, owner-led tone, honest by default.
- Never claim certifications the owner does not have (ISA, etc).
- Never claim "24/7 service" or "always available". Owner has a Davey day job; evenings and weekends are the actual availability.
- Cleanup, insurance, and pricing language is fact-only.

## Deploy

Hosted on Cloudflare Pages (to be connected once GitHub repo is created):

1. Push repo to GitHub
2. Connect Pages project to repo
3. Build command: `npm run build`
4. Build output: `dist`
5. Custom domain: `tarzantrimming.ca` + `www.tarzantrimming.ca`

## See also

- `HANDOFF.md`, full project state, design decisions, friend-input TODOs
- `../vicjimassage-site/`, sister project this was scaffolded from (architecture reference)
- `../theontarioarborist-site/`, predecessor brand for the same friend's business (kept live during transition, will 301 redirect later)
