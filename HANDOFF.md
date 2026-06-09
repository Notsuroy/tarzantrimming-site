# tarzantrimming.ca: HANDOFF

> Source of truth for project state. Read before making any non-trivial change.

## Project context

Personal-brand website for a friend rebranding his arborist side-business from "The Ontario Arborist" to "Tarzan Trimming". Built as a gift / practice project by Suroy.

- **Domain:** `tarzantrimming.ca` (registered at Porkbun 2026-05-29 by friend, ~$18/yr; nameservers pointed at Cloudflare, zone active)
- **DNS:** Cloudflare zone `8dccf00d34ed0f68f554bc24a66a54ad` (Suroy's account `d5cadc4c53223e8b3ef7846fdbbffd8e`). Apex + `www` CNAME both proxied at `tarzantrimming.pages.dev`.
- **Hosting:** Cloudflare Pages project `tarzantrimming`, deployed via direct-upload (wrangler), NOT linked to GitHub yet. To enable auto-deploy on push, connect the repo in the CF dashboard later.
- **GitHub:** [Notsuroy/tarzantrimming-site](https://github.com/Notsuroy/tarzantrimming-site) (public)
- **Live URLs:**
  - https://tarzantrimming.pages.dev (always works, auto-issued cert)
  - https://tarzantrimming.ca + https://www.tarzantrimming.ca (custom domain, SSL provisioning ~5-30 min after first DNS attachment)
- **Stack:** Astro 5 + Tailwind 3
- **Predecessor:** `theontarioarborist.ca` (kept live during transition, will 301 redirect to new domain in 6-12 months once new domain has authority)

## Brand positioning

> "Owner-led tree pruning and limb removal across south Ontario. Trained at Davey Tree commercial, working for residential customers on evenings and weekends. Honest quotes, clean work, no high-pressure pitch."

## Design system

Carried over from vicjimassage with a new palette suited to outdoor / arborist context.

**Palette** (see `tailwind.config.cjs`):
- Primary: deep forest green `#2D4A36`
- Warm accent: bark brown `#8B6F47`
- Cool secondary: canopy-sky blue `#5B7B8C`
- Highlight: soft moss green `#9DAE7F`
- Background: warm cream `#FAF7F0`
- Text: deep slate `#2A2E2A`

**Typography:**
- Display: Cormorant Garamond (serif, headings)
- Body: Inter (sans, paragraphs)

**Copy rules (non-negotiable):**
- Never use em dashes (U+2014) or en dashes (U+2013). Use periods, commas, or "to" for ranges. Run `grep -rPn "[\xe2\x80\x94\xe2\x80\x93]" src/` to verify zero hits before pushing.
- No certification claims (ISA, etc) that the owner does not actually hold.
- No "24/7" or "always available" claims. Owner works at Davey during the day.
- Pricing language is fact-only; "Quote on site" placeholders until friend picks pricing strategy.

## Pages built (v1)

- [x] `/`: Funnel homepage (Hero, ProblemPromise, MiniAbout, ServicesGrid, PhotoGallery, ReviewsWall, FAQ, FinalCTA)
- [x] `/services/`: Detailed service menu (pruning, limb removal, full removal as "coming soon"). Offered-service cards now link to their dedicated detail pages.
- [x] `/services/tree-pruning/`: Dedicated indexable service page (focus keyword "tree pruning"). Built 2026-06-09 (cron).
- [x] `/services/limb-removal/`: Dedicated indexable service page (focus keyword "limb removal"). Built 2026-06-09 (cron).
- [x] `/about/`: Owner-led story + what-we-will-and-will-not-do
- [x] `/contact/`: Phone, text, email, service area
- [x] `/404/`: Custom not-found page (recovery links to home, both service pages, services menu, about, contact). Built 2026-06-09 (cron). Astro emits `dist/404.html`, which Cloudflare Pages serves with a proper 404 status for unmatched routes (replaces the previous soft-404 homepage fallback).

JSON-LD `LocalBusiness` schema on homepage with `areaServed` covering the 7 service cities. Each service detail page emits `Service` + `BreadcrumbList` JSON-LD.

**Service detail page architecture:** `src/pages/services/[slug].astro` generates one page per non-`comingSoon` service in `services.json` (via `getStaticPaths`). It reuses the already-approved `description` / `process` / `goodFor` copy from `services.json`; per-page H1 + meta-description live in a `seoMap` inside the route file (kept out of `services.json` so the `/services/` menu rendering is untouched). Full tree removal is intentionally NOT given a page (it is `comingSoon` and not actually offered, so no rankable page is published for it). When full removal becomes a real service, flip `comingSoon: false` in `services.json` and add its H1 + meta to the `seoMap`; the page and sitemap entry will follow.

## Components inherited from vicjimassage-site (rebranded)

- `Header` (sticky, with phone CTA chip)
- `Hero` (gradient + headline + dual CTA)
- `ProblemPromise` (3 you/us pairs)
- `MiniAbout` (owner photo placeholder + story)
- `ServicesGrid` (3 services from `services.json`)
- `PhotoGallery` (6 photo placeholder slots, awaiting friend's shots)
- `FAQ` (8 front-of-funnel items in `faq.json`)
- `FinalCTA` (forest section with call + text-photo CTAs)
- `Footer` (3-column: brand, contact, service area)
- `PhoneFloat` (floating mobile-friendly call CTA; replaces vicjimassage's `WhatsAppFloat`)

## TODOs before launch (blocking on friend's input)

1. **Phone number** · currently using TOA's `(647) 788-8733`. Confirm friend wants to keep it or use a different number.
2. **Service cities** · currently inheriting TOA's 7-city list. Confirm with friend.
3. **Pricing strategy** · `services.json` is set to `quote-only` (no public ranges). Friend can switch to `public-ranges` for stronger CTR if comfortable committing to ranges.
4. **Hours** · currently labeled "By appointment. Evenings and weekends." Confirm exact availability given Davey day-job schedule.
5. **Tagline** · placeholder is `"Tree pruning and limb removal across south Ontario."` Friend can swap to his own one-liner.
6. **Insurance claim** · FAQ states "carries commercial general liability insurance". Confirm before publishing. If not yet bound, change the FAQ answer to "Insurance is being bound; certificate available before any job".
7. **Day-job employer** · copy now says "commercial tree crews" generically. If friend confirms he actually works at a specific named company AND is comfortable naming it, swap "commercial crews" / "a commercial crew" back to the real name. Initial 2026-05-29 draft had Davey Tree by name; removed when Suroy could not confirm whether the friend works there or it was second-hand info.
8. **Owner photo** · `MiniAbout` has a placeholder block where the owner photo goes. Friend to send.
9. **Job photos** · `PhotoGallery` has 6 placeholder cards. Friend to send before/after pruning shots.
10. *(Reviews section removed entirely in v1 since friend has no reviews yet. To re-add later: copy `ReviewsWall.astro` and `reviews.json` back from `vicjimassage-site` reference, simplify, and re-import in `pages/index.astro`. Honest path: only re-add when there are at least 3 real customer reviews.)*

## TODOs Suroy needs to do (infrastructure)

1. Create GitHub repo (`Notsuroy/tarzantrimming-site`?). Push initial commit.
2. Cloudflare: add `tarzantrimming.ca` zone, point NS at Cloudflare, create Pages project, connect to GitHub repo.
3. DNS records: apex + `www` to Pages, MX records for email forwarding (or Migadu mailbox).
4. Email: set up `info@tarzantrimming.ca` (Cloudflare Email Routing to friend's inbox, OR Migadu mailbox with SPF/DKIM if friend wants real outbound).
5. Update `src/data/site.json` `contact.email` from `TODO_EMAIL` to the real address.
6. Google Search Console verification (DNS TXT or HTML file).
7. Submit sitemap to GSC and Bing once `tarzantrimming.ca/sitemap.xml` exists.
8. Eventually: 301 redirect `theontarioarborist.ca` → `tarzantrimming.ca` once new domain has authority (~6 months out).

## Things this site does NOT have (yet) vs vicjimassage

Intentionally trimmed for v1 scope:

- **No blog.** Astro content collection deleted. Can re-add later if friend wants long-form posts.
- **No bilingual setup.** vicjimassage runs PT root + EN at `/en/`. Tarzan is English-only.
- **No WhatsApp integration.** Canadian customers prefer phone/SMS. `WhatsAppFloat` replaced with `PhoneFloat`.
- ~~**No sitemap.xml route.**~~ DONE 2026-06-09 (cron, commit `5d4ae95`). Custom `src/pages/sitemap.xml.ts` endpoint emits the 4 static pages; `public/robots.txt` references it. Live at `https://tarzantrimming.ca/sitemap.xml`. Add a route to the `PAGES` array in the endpoint when a new page ships.
- **No /quote/ form.** v1 funnels to phone + text. If form conversion data later supports it, can add (using the same /api/quote pattern as the rank-and-rent sites).

## Architecture principles

- **`src/data/site.json` is the source of truth** for brand, contact, location, hours. Every component reads from there. Update once, everything reflects.
- **No certifications or claims that cannot be backed up.** Honest by default. Saves us from having to undo a banned-claim sweep later.
- **The vicjimassage component shapes work.** Don't reinvent the funnel architecture; reuse what's already tested.

## Changelog

| Date | Action | Notes |
|---|---|---|
| 2026-05-29 | Initial scaffold | Cloned vicjimassage architecture, stripped bilingual + blog scope, rebranded palette (forest/bark/sky/moss/cream), wrote new English-only components, built 4 pages (home, services, about, contact), 88K dist, zero em/en dashes. Awaiting friend's input on the 9 TODOs above before launch. |
| 2026-05-29 | Removed ReviewsWall + reviews.json | Friend has no real customer reviews yet. Section dropped from homepage rather than left dormant. Will re-add only when there are at least 3 real reviews to show. |
| 2026-05-29 | Soften day-job copy, no named employer | Suroy could not verify if friend works at Davey Tree or that was second-hand info. Customer-visible copy now says "commercial tree crews" generically. Easy to swap to a named employer once confirmed. |
| 2026-05-29 | Hide all contact CTAs | Phone fields in site.json blanked; Header/Hero/FinalCTA/Footer/PhoneFloat/contact.astro all conditional-render based on presence. Once friend confirms phone + email, populate src/data/site.json contact block and the whole site lights back up. |
| 2026-05-29 | First deploy to Cloudflare Pages | Project `tarzantrimming` created via API, dist/ direct-uploaded via wrangler. Apex + www CNAME records created and attached to Pages project. Repo is on GitHub but NOT yet wired to auto-deploy. Live at https://tarzantrimming.pages.dev. Custom domain SSL provisioning. |
| 2026-06-04 | Competitor name conflict noted + proactive partnership plan documented | Discovered Tarzan Tree Removal (Barrie/Simcoe County, ON, Mark Mederak, 5+ years operating, Landscape Ontario Young Entrepreneur 2019, Barrie Advance Readers Choice 2020-2022, ISA Certified Arborist). Friend Nathan reviewed the conflict and chose to proceed with Tarzan Trimming. Strategy: proactive partnership outreach BEFORE any cease-and-desist letter, framed as new-entrant introduction with referral exchange offer (we focus pruning + limb removal west-GTA / Kitchener corridor; they focus full removal + Barrie/Simcoe). Outreach deferred until tarzantrimming.ca has 60-90 days of authority + a few demonstrated leads to back the partnership credibility. Risk profile (with proactive outreach folded in): cease-and-desist ~10%, forced rebrand ~3-5%, real referral partnership ~25-35%. Sudbury, Fort Mac, etc rank-and-rent sites' lead-handoff playbook (e.g. Moira / Valley / Fort Repairs) provides the operational template. |
| 2026-06-04 | nathan@tarzantrimming.ca via Migadu planned, awaiting DNS records from Suroy's Migadu dashboard | Friend's email will be `nathan@tarzantrimming.ca` (not `info@` -- explicitly requested). Plan: Migadu mailbox (uses existing Micro plan, tarzantrimming would be 7th domain), DNS records added to Cloudflare zone, Nathan hooks up via Gmail Settings -> "Check mail from other accounts" (IMAP) + "Send mail as" (SMTP) so he never leaves his Gmail inbox. Blocked on Suroy adding the domain in Migadu dashboard and pasting the 3 DNS records (MX + SPF TXT + DKIM TXT) for the Cloudflare API to set up. Cloudflare Email Routing alternative considered and rejected because Nathan's replies would come from his personal Gmail address rather than nathan@tarzantrimming.ca, breaking the brand. |
| 2026-06-09 | SEO launch foundation: canonical URL fix + sitemap + robots.txt (cron, commit `5d4ae95`) | First autonomous-routine deliverable after tarzantrimming entered cron scope. (1) **Critical fix:** `astro.config.mjs` `site` was still the vicjimassage clone value `https://vicjimassage.com.br`, so every page emitted `<link rel="canonical" href="https://vicjimassage.com.br/...">` and the homepage JSON-LD `url` pointed at the Brazilian massage site. Changed to `https://tarzantrimming.ca`. Verified dist: all 4 canonicals + JSON-LD url now correct, zero vicjimassage refs remain. (2) Added custom `src/pages/sitemap.xml.ts` (4 static pages, fixed honest lastmod) + `public/robots.txt` with Sitemap directive. (3) Shipped via wrangler direct-upload (deploy `b3e3e075`, GitHub auto-deploy still not connected), apex poll OK attempt 1, 6-URL deploy-state sweep 6/6 HTTP 200 BAD=0, CF zone `8dccf00d34ed0f68f554bc24a66a54ad` purged. **Unblocks** infra TODO #6/#7 (GSC verification + sitemap submission now possible). Note: CF Managed robots.txt prepends AI-bot blocks above our content, but the `Sitemap:` line is present (Google reads it anywhere in the file). |
| 2026-06-09 | Dedicated service detail pages: tree-pruning + limb-removal (cron, commit `7b80ac9`) | **P2 structural-gap deliverable.** The two launch services had rich, friend-approved copy in `services.json` but only rendered inside the single combined `/services/` menu, so neither had a dedicated indexable URL to rank. Added `src/pages/services/[slug].astro` (getStaticPaths over non-`comingSoon` services) producing `/services/tree-pruning/` and `/services/limb-removal/`. Each page: focus-keyword H1, 143/145-char meta description, reused description/process/goodFor copy, "Where we work" + "What it costs" + "Related service" + closing sections, sticky CTA aside, 5 unique internal-link targets (home, /services/, /about/, /contact/, sibling service), and `Service` + `BreadcrumbList` JSON-LD. Linked the `/services/` menu cards to the new pages ("Full details" + name link) for crawl. Added both URLs to `sitemap.xml.ts` PAGES (6 pages now). Build clean 6pg, dist sweep em=0/en=0/24-7=0, meta lengths 143/145 in range. Shipped via wrangler direct-upload (deploy `640dcb7e`, GitHub auto-deploy still not connected), apex content-match poll attempt 1 (~10s), 6-URL deploy-state sweep 6/6 HTTP 200 all ≥5KB BAD=0, CF zone `8dccf00d34ed0f68f554bc24a66a54ad` purged. No IndexNow (vicjimassage-derived site has no indexnow script, by design). Site is 11 days old + not yet GSC-verified, so no GSC demand data drove keyword choice; structural-gap rule applied. |
| 2026-06-09 | P0 health audit + head-meta completeness fix (cron, commit `58727fe`) | First P0 audit on tarzantrimming since entering cron scope. **Audit result: clean** — all 4 live pages 200, correct titles, canonical fix from `5d4ae95` confirmed live (every canonical = `tarzantrimming.ca`, 0 vicjimassage leftovers), 0 em/en dashes, 0 banned 24/7 claims, sitemap + robots live. **One gap found + fixed:** `theme-color` meta was absent site-wide (not in src or dist), and `og:url` was missing from the OG block. Added both to `src/layouts/BaseLayout.astro` head: `<meta name="theme-color" content="#2D4A36">` (brand forest green) + `<meta property="og:url" content={canonical}>`. Build clean 4pg; dist sweep theme-color 4/4 + og:url 4/4 (correct per-page URLs) + em=0/en=0/24-7=0. Shipped via wrangler direct-upload (deploy `0835bcbe`, GitHub auto-deploy still not connected), apex content-match poll 1 (~10s), 4-URL deploy-state sweep 4/4 HTTP 200 ≥4KB theme-color present BAD=0, CF zone `8dccf00d34ed0f68f554bc24a66a54ad` purged. P0 GSC pipeline/cannibalization sub-checks intentionally skipped: domain is 11 days old, not yet GSC-verified, so NULL `seo_*_daily_kpi` = no-data-yet (expected), not a stale-pipeline failure — no false flag raised. No quote form exists (phone/text funnel) so qf-email/markFieldError P0 checks are N/A by design. |
| 2026-06-09 | Custom 404 page (cron, commit `f4ea7f4`, wrangler deploy `34390b03`) | **P4/UX deliverable.** No 404 page existed, so any unmatched URL returned the homepage at HTTP 200 (CF Pages soft-404 fallback per `feedback_cloudflare_pages_unknown_url_serves_home.md`) — bad for SEO (soft 404s) and gives lost visitors no recovery path. Added `src/pages/404.astro` (BaseLayout, brand-coherent: cream bg, forest H1 "This branch leads nowhere.", 6 recovery cards linking home + both service detail pages + services menu + about + contact, "Back to home" button). Astro built `dist/404.html` (7.2KB); CF Pages now serves it with a proper 404 status for unmatched routes. Build clean 7pg; dist sweep em=0/en=0/24-7=0; all 6 links resolve to real built pages. Shipped via wrangler direct-upload (GitHub auto-deploy still not connected). Also folded in the T04:14 P2 run's uncommitted HANDOFF changelog edits (the `7b80ac9` service-detail-pages doc rows that prior run left dirty in the working tree). |
| 2026-06-04 | GitHub + Cloudflare Pages deploy live with hidden contact info | Repo `Notsuroy/tarzantrimming-site` created and pushed (5 commits as of session end). Cloudflare Pages project `tarzantrimming` connected via direct upload (not yet linked to GitHub for auto-deploy -- user can flip that on later via dashboard). Custom domains `tarzantrimming.ca` + `www.tarzantrimming.ca` attached, CF auto-created the CNAME records, SSL provisioned. All contact CTAs (Header phone chip, Hero buttons, FinalCTA, PhoneFloat, Footer column, contact page) conditional-render based on `site.contact.phoneE164`/`email` being non-empty; right now they're blank so the site shows "Launching soon" framing instead of bad/wrong contact info. Once Suroy populates `src/data/site.json` contact block, every CTA lights up. Davey Tree reference softened from explicit "trained at Davey" to generic "commercial tree crews" since Suroy couldn't confirm whether Nathan actually works at Davey or it was friend-of-friend info. ReviewsWall component + reviews.json deleted entirely (rather than left dormant) since Nathan has no real customer reviews yet. |
