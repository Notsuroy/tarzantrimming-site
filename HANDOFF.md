# tarzantrimming.ca: HANDOFF

> Source of truth for project state. Read before making any non-trivial change.

## Project context

Personal-brand website for a friend rebranding his arborist side-business from "The Ontario Arborist" to "Tarzan Trimming". Built as a gift / practice project by Suroy.

- **Domain:** `tarzantrimming.ca` (purchased 2026-05-29 by friend, ~$18/yr)
- **DNS:** Cloudflare zone (to be connected; friend's account or Suroy's TBD)
- **Hosting:** Cloudflare Pages (to be connected to GitHub repo)
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
- [x] `/services/`: Detailed service menu (pruning, limb removal, full removal as "coming soon")
- [x] `/about/`: Owner-led story + what-we-will-and-will-not-do
- [x] `/contact/`: Phone, text, email, service area

JSON-LD `LocalBusiness` schema on homepage with `areaServed` covering the 7 service cities.

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
- **No sitemap.xml route.** Should add before launch (~10 min).
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
