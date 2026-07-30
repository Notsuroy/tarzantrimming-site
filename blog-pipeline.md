# Tarzan Trimming Blog Pipeline

Candidate blog posts for `tarzantrimming.ca`, sequenced by commercial
closeness and topical fit. Generated 2026-06-10 (cron P5). These are
**proposals awaiting Nathan's approval**, not GSC-backed picks: the domain
is only ~12 days old and not yet verified in Google Search Console, so
there is no impression data to drive selection yet. Topic choice here is
grounded in the niche (south Ontario residential tree care), the two
services actually offered (tree pruning + limb removal), and real regional
tree issues. Once GSC verification lands and impressions accumulate, future
candidates should be GSC-discovered the same way the rank-and-rent sites do.

## Blog system status (read first)

**The blog system is BUILT (2026-06-15, commit `015a805`).** `src/pages/blog/`
now has the hub `index.astro` + `[slug].astro` post template (`BlogPosting` +
`BreadcrumbList` + optional `FAQPage` JSON-LD, forest/cream brand-coherent),
`src/data/blog.json` exists as an empty array `[]`, and `/blog/` is wired into
both `sitemap.xml.ts` (per-post lastmod) and the Header nav. So the two-run
sequence is now on its SECOND leg: the next eligible P-PIPELINE / P-PIPELINE-AUTO
run DRAFTS the first post (no more infra build needed) into `blog.json` through
Phase 0 keyword qualifier + the 3-phase protocol + Phase 4 on-page audit. The
hub currently features the standalone `/guide/when-to-prune-trees-southern-ontario/`
as its flagship resource and shows a "more guides on the way" empty state; the
first drafted post replaces that empty state with a real grid card automatically.

## How to approve

The cron's P-PIPELINE stage only acts on a candidate whose Status line is
ticked `[x] approve`. Every candidate below is `[ ] approve` right now, so
P-PIPELINE will keep skipping this file until you tick one. For each
candidate pick one:

- **Approve as written.** Tick `[x] approve`. The next eligible cron run
  builds the blog system (if not built) or drafts the highest-priority
  approved candidate through Phase 0 keyword qualifier + the 3-phase
  protocol (initial draft, de-AI voice rewrite, format pass) + Phase 4
  on-page audit. 60-day per-topic cooldown after drafting.
- **Approve with notes.** Tick `[x] approve` and add a line under Notes.
- **Skip.** Tick `[x] skip` and add "skip" under Notes.

## Owner-led honesty discipline (this is a real business, not rank-and-rent)

Tarzan Trimming is Nathan's real side-business, so the drafts-ship-with-
defaults convention is tighter here than on the rank-and-rent sites. Every
candidate carries a **Friend verifies** line naming the factual claim the
post leans on (seasonal availability, whether a service is actually offered,
pricing language, insurance status). Drafts ship with the "last known"
default plus an inline `<!-- FRIEND-VERIFY -->` comment and a MORNING_TASKS
flag; Nathan confirms or corrects before any outreach or citation points at
the post. No claim of full tree removal as an offered service (it is
`comingSoon` in `services.json` and not actually performed yet). No "24/7" /
"always available" claims: arborist work is not a middle-of-the-night
service and Nathan works a commercial day job.

## Content-type discipline (read before approving)

Broad commercial head terms ("tree removal Toronto", "arborist near me")
return commercial service pages and Google Local Pack listings, not blog
posts. A 12-day-old owner-led domain will not win those with a blog. So
every candidate below targets an **informational, seasonal, or cost**
intent (when-to, signs-of, what-it-costs, how-pros-do-X) where blog posts
genuinely rank, and routes the bare commercial term to the matching service
page (`/services/tree-pruning/` or `/services/limb-removal/`) rather than
competing with it.

## Existing corpus reference

Zero blog posts as of 2026-06-10. Live pages that posts should link into:
`/services/tree-pruning/`, `/services/limb-removal/`, `/services/`,
`/service-areas/`, `/about/`, `/contact/`. Service cities (still
friend-unconfirmed, launch TODO #2): Toronto, Mississauga, Oakville,
Burlington, Hamilton, Kitchener, Whitby.

**Suggested priority (cron drafts highest approved first):** Candidate 1
(when to prune) is the cleanest seasonal informational win and maps directly
to the pruning service. Candidate 2 (dangerous limbs) maps directly to limb
removal. Candidates 3 to 5 follow.

---

## Candidate 1 (suggested highest priority): When to prune trees in Ontario

> **[x] SKIP, DO NOT DRAFT (cron 2026-07-16 T14:08). Reason: this topic is
> already live as the site's flagship page at
> `/guide/when-to-prune-trees-southern-ontario/` (~1,876 words, in the sitemap
> at `PAGE_LASTMOD`, featured on the `/blog/` hub as `featuredGuide`).** The
> T14:08 run took this candidate through Phase 0, got a GO WITH MODIFIER, drafted
> the full post, and only caught the duplication at the pre-commit stage because
> the mechanical G6 check cross-references `blog.json` / `services.json` /
> `areas.json` only, and the guide lives in `src/pages/guide/` (outside all three).
> The draft was reverted unpublished. Shipping it would have cannibalized the
> flagship for an identical keyword, which is exactly what the P0(e)
> cannibalization detector exists to prevent. **Any future run: G6 for this site
> must grep `src/pages/**` too, not just the JSON data files.**
>
> The Phase 0 data below is real and paid for. It says the EXISTING guide is
> aimed at a good keyword and is worth protecting, not competing with. If this
> topic ever comes up again, the move is a P-REFRESH of the guide, never a new
> blog post.
- **Status:** [x] skip (duplicate of live `/guide/` page, cron 2026-07-16)
- **Focus keyword:** `when to prune trees in Ontario`
- **Tier:** informational, seasonal, top-of-funnel feeding the pruning service
- **Content type:** clean informational / seasonal intent. Low mismatch
  risk. Routes the commercial "tree pruning Ontario" term to
  `/services/tree-pruning/`.
- **Demand rationale (no GSC yet):** seasonal "when to prune" queries are a
  perennial homeowner question in Ontario and pair naturally with the one
  service the site most wants to sell. Strong topical anchor for the pruning
  cluster.
- **Hook / angle:** Calendar-by-goal. Late winter to early spring (dormant
  season) is the general window for structural pruning on most species
  because cuts heal fast and the canopy is bare to read. Light shaping and
  deadwooding can happen most of the year. Two species cautions worth
  stating plainly: avoid heavy pruning on spring-flowering trees until after
  they bloom, and do not prune oaks in the warm months (see Candidate 3).
  Honest "tell us the tree and your goal and we will tell you the right
  window" close.
- **Suggested H2 outline:** the short answer (dormant season for most
  trees); why late winter works (fast healing, readable canopy, dormant
  pests); when light pruning is fine year-round; the spring-bloomers
  exception; the oak warning (link to Candidate 3 once live); a south
  Ontario month-by-month quick guide; when to just book a look.
- **Internal link targets:** `/services/tree-pruning/` (primary),
  `/services/limb-removal/`, `/service-areas/`, `/about/`, `/contact/`.
- **Estimated word count:** 1,200 to 1,500.
- **Friend verifies:** seasonal availability ("we book pruning year-round,
  with structural work concentrated in late winter") matches Nathan's actual
  evenings-and-weekends schedule around the day job.
- **Notes:**

---

## Candidate 2: Signs a tree branch is dangerous and should come down

- **Status:** [ ] approve  [ ] skip  [ ] adjust
- **Focus keyword:** `signs a tree branch is dangerous`
- **Tier:** informational / safety, mid-funnel feeding limb removal
- **Content type:** informational / decision intent. Routes the commercial
  "limb removal" term to `/services/limb-removal/`.
- **Demand rationale (no GSC yet):** homeowner safety worry that maps one to
  one onto the limb-removal service. Reassurance plus a clear "call us"
  trigger.
- **Hook / angle:** A homeowner checklist they can run from the ground.
  Cracks where a limb meets the trunk, included bark in a tight V-shaped
  union, dead limbs that have lost bark or hold no leaves in summer, hanging
  or partly broken limbs after wind, heavy limbs overhanging a roof, deck,
  or driveway, and limbs touching or growing into hydro lines (which are
  utility territory, not ours, and we will say so). Quick-check framing:
  "if it is over something you care about and you are not sure, that is the
  one to ask about."
- **Suggested H2 outline:** the quick ground check; cracks and weak unions
  (included bark); dead vs alive (the summer leaf test); storm-damaged and
  hanging limbs; limbs over a roof, car, or walkway; the hydro-line line we
  will not cross; what a limb removal visit looks like; when to book.
- **Internal link targets:** `/services/limb-removal/` (primary),
  `/services/tree-pruning/`, `/service-areas/`, `/contact/`.
- **Estimated word count:** 1,200 to 1,500.
- **Friend verifies:** the hydro-line boundary ("we do not touch limbs on or
  near hydro lines, that is the utility's job") is how Nathan actually
  operates, and the response framing does not imply emergency same-day
  service.
- **Notes:**

---

## Candidate 3: Why you should not prune oak trees in summer (Ontario)

- **Status:** [x] approve (auto)  [x] drafted
- **Focus keyword:** `when to prune oak trees Ontario`
- **Tier:** informational, niche-authority, feeds the pruning service
- **Content type:** informational. Builds expertise signal and links back to
  Candidate 1 and the pruning service.
- **Demand rationale (no GSC yet):** oak wilt is a real and growing concern
  in Ontario, and "can I prune my oak now" is a specific, low-competition,
  high-trust query. Answering it well is a credibility play for an owner-led
  arborist brand.
- **Hook / angle:** The one-sentence rule first: prune oaks in the dormant
  season (roughly November to March) and avoid pruning from about April
  through July, when the beetles that can spread oak wilt are active and
  fresh cuts attract them. Explain it plainly: oak wilt is a fungal disease,
  it spreads partly through fresh wounds in the warm months, so timing is
  the cheapest prevention there is. Note that if an oak limb is an immediate
  hazard it still comes down, with the cut sealed, regardless of season.
- **Suggested H2 outline:** the rule in one line; what oak wilt is and why it
  matters in Ontario; why fresh summer cuts are the risk; the safe pruning
  window for oaks; what to do if an oak limb is a hazard in summer; how we
  handle oaks on a job; related reading (link Candidate 1).
- **Internal link targets:** `/services/tree-pruning/` (primary), Candidate
  1 once live, `/services/limb-removal/`, `/contact/`.
- **Estimated word count:** 1,100 to 1,400.
- **Friend verifies:** that Nathan is comfortable stating the oak-wilt timing
  guidance as the brand's standard practice, and that "we seal hazard cuts
  made in the risk window" reflects what he actually does. This is the
  highest-care candidate: do not assert a specific bylaw or a guaranteed
  disease outcome, keep it to accepted arborist practice.
- **Notes:** P-PIPELINE-AUTO drafted + published 2026-06-30 (cron T13:08). Focus
  keyword shipped as `when to prune oak trees in Ontario` (the seeded
  `when to prune oak trees Ontario` exact phrase = NULL Canadian volume; the
  measured cluster is "oak wilt ontario" 90/mo, "pruning oak trees" 70/mo,
  "when to prune oak trees" 50/mo, all LOW comp). Phase 0 = GO (no AI Overview,
  blog-dominated SERP, small ON arborist blogs safetree.ca + toarborist.com
  already top-6 = winnable; geo gap, savatree #9 is Texas). Phase 4 audit:
  16-17 PASS / 2 WARN (new-post inbound links; Org byline on borderline topic)
  / 0 FAIL. 1,205 body / 1,478 with FAQs, 0 em/en, 0 24/7. All oak-wilt facts
  sourced from Invasive Species Centre + CFIA (primary). Written claim-free per
  hardened tarzan G5: general arboriculture only, funnels existing pruning +
  limb-removal services, no price/cert/insurance/availability claim.
- **Draft commit:** `cf1fbf2` — live at
  https://tarzantrimming.ca/blog/when-to-prune-oak-trees-ontario/. FRIEND-VERIFY:
  confirm Nathan is comfortable with the oak-wilt dormant-season timing as
  standard guidance and the "seal hazard cuts made in the risk window" line
  (flagged to MORNING_TASKS friend-verify queue).

---

## Candidate 4: What tree pruning costs in south Ontario (and what changes the price)

- **Status:** [ ] approve  [ ] skip  [ ] adjust
- **Focus keyword:** `tree pruning cost Ontario`
- **Tier:** cost intent, mid-funnel, feeds pruning + contact
- **Content type:** cost / informational. Blogs rank well for cost queries.
  Routes the commercial term to `/services/tree-pruning/`.
- **Demand rationale (no GSC yet):** cost is the question every homeowner has
  before calling. A clear, honest cost-factors post earns trust and the
  quote request, even without quoting hard numbers.
- **Hook / angle:** Explain the price drivers rather than printing a number,
  because the site is quote-only until Nathan picks a pricing strategy
  (launch TODO #3). The real drivers: tree size and height, how many limbs
  and how thick, access (backyard with a fence vs open front yard), whether
  there is anything underneath to protect, how the debris leaves the site,
  and how far the job is in the service area. Frame ranges only as "small
  shaping job vs a half-day on a large mature tree" rather than dollar
  figures. Close with "send a photo and the address and we will give you a
  straight quote."
- **Suggested H2 outline:** why pruning prices vary so much; the six things
  that move the price; small job vs big job (qualitative bands, no dollars
  unless Nathan approves); what is included in our quote; how to get an
  accurate number fast (photo + address); booking.
- **Internal link targets:** `/services/tree-pruning/` (primary),
  `/service-areas/`, `/contact/`, `/about/`.
- **Estimated word count:** 1,100 to 1,400.
- **Friend verifies:** PRICING LANGUAGE. Default draft uses qualitative
  bands and no dollar figures (matches `services.json` quote-only). If
  Nathan switches to public ranges (launch TODO #3), the post can add real
  ranges in a follow-up commit. Do not invent dollar figures.
- **Notes:**

---

## Candidate 5: Cleaning up after a storm: broken and hanging limbs in south Ontario

- **Status:** [ ] approve  [ ] skip  [ ] adjust
- **Focus keyword:** `storm damaged tree limb cleanup Ontario`
- **Tier:** seasonal / informational, feeds limb removal
- **Content type:** informational / seasonal. Routes urgency to the limb
  removal service without claiming 24/7 response.
- **Demand rationale (no GSC yet):** south Ontario gets ice storms in winter
  and strong summer windstorms, both of which leave broken and hanging
  limbs. Seasonal spikes in homeowner searching, and the topic maps straight
  to limb removal.
- **Hook / angle:** What to do (and not do) the day after a storm. Stay clear
  of any limb touching a hydro line and report it to the utility, not to us.
  Do not climb or use a ladder to reach a hanging limb. Photograph the damage
  for insurance. Then sort it: small deadfall a homeowner can clear vs a
  hanging or partly attached limb that needs a pro. Honest availability:
  evenings and weekends, by appointment, not an after-midnight emergency
  crew, so for anything actively dangerous call the utility or the city
  first.
- **Suggested H2 outline:** first, the safety rules (hydro lines, no
  climbing); document it for insurance; what you can clear yourself; the
  limbs that need a pro and why; how we handle storm cleanup; realistic
  timing (when we can get there); booking.
- **Internal link targets:** `/services/limb-removal/` (primary),
  `/services/tree-pruning/`, `/service-areas/`, `/contact/`.
- **Estimated word count:** 1,200 to 1,500.
- **Friend verifies:** availability framing. Must NOT promise emergency or
  same-day response. Default is "evenings and weekends, by appointment, call
  the utility or city for anything actively dangerous." Confirm this matches
  what Nathan can realistically commit to around the Davey day job.
- **Notes:**

---

## Phase 0 keyword validation (cron, 2026-06-15)

The autonomous P-PIPELINE-AUTO run on 2026-06-15 put all five seeded
candidates through the mandatory Phase 0 (`seo-keyword-qualifier`,
DataForSEO, location_code 2124 Canada) before drafting, because the file was
authored 2026-06-10 without keyword data. Result: **no candidate is
auto-publishable as written.** Recording the data here so future runs do not
re-spend DataForSEO budget re-validating the same dead ends. None of this
ticks a box; the approve and skip decisions stay with Nathan and Suroy.

- **Candidate 1 (when to prune trees in Ontario):** keyword quality is
  strong (parent "when to prune trees" 260/mo LOW comp, top SERP is small
  arborist blogs we can win, best-matching competitor page measures etv ~339
  across 34 keywords, no AI Overview). BUT it **duplicates the live flagship
  guide** `/guide/when-to-prune-trees-southern-ontario/`, which already
  covers the exact topic (dormant-season answer, sap bleeders, spring
  bloomers, the oak exception, storm damage, a month-by-month guide).
  Publishing a near-identical `/blog/` post would split equity and
  cannibalize the guide. **Recommend: skip (covered by the guide).** The
  guide is the asset to keep refreshing instead.
- **Candidate 2 (signs a tree branch is dangerous):** exact keyword and
  variants return **NULL volume** in Canada and the top three competitor
  pages measure **etv 0.3 / 0 / 0** (essentially no Canadian organic
  traffic). The topic earns US traffic, not Canadian. **Low value as a
  Canadian local post.**
- **Candidate 3 (do not prune oak trees in summer / oak wilt):** two-headed
  and both heads lose. "oak wilt Ontario" has measurable demand (90/mo LOW)
  but the SERP is a **government and authority wall** (CFIA and
  inspection.canada.ca, Invasive Species Centre, ISA Ontario, ontario.ca,
  City of Toronto, conservation authorities), which a young arborist site
  cannot win. The pruning-timing head ("when to prune oak trees" 50/mo) is
  **already fully covered by the guide's oak section** (Toronto's Apr 1 to
  Oct 31 window, wound paint, do not move oak firewood). **Skip both
  angles.**
- **Candidate 4 (tree pruning cost in south Ontario):** the **only candidate
  with real demand** ("tree pruning cost" and "tree trimming cost" both
  210/mo MEDIUM comp; cost SERPs reliably reward blog posts). It is held out
  of auto-publish because tarzantrimming's hardened honesty gate routes any
  draft that needs a price to a human decision. **This is the topic worth
  Nathan's call.** See MORNING_TASKS.
- **Candidate 5 (storm cleanup / hanging limbs):** keyword and variants
  return **NULL volume** in Canada (same profile as Candidate 2). **Low
  value as a Canadian local post.**

**Bottom line:** the highest-leverage next move for tarzantrimming blog
content is a decision on Candidate 4 (cost), plus a re-seed of this pipeline
with keyword-validated topics once the domain is verified in Google Search
Console and starts producing real impression data (the same GSC-self-feed
loop the rank-and-rent sites use). Until then, the live guide remains the
strongest single content asset.

---

## Phase 0 keyword validation, round 2 (cron P-PIPELINE-AUTO, 2026-07-30)

Context: the four drafted permit explainers (Toronto, Mississauga, Oakville,
Burlington) exhausted the biggest-metro corridor cities. A cron run on
2026-07-30 evaluated whether to extend the permit/bylaw corpus to the next
served city, **Hamilton** (the only remaining served city the competitor-gap
analysis names with its own private-tree bylaw; Kitchener and Whitby are the
other two un-covered served cities). Phase 0 ran the full
`seo-keyword-qualifier` against DataForSEO (location_code 2124 Canada). Result:
**NO-GO on measured demand.** Recording here so future runs do not re-spend
DataForSEO re-validating Hamilton (or the smaller Kitchener/Whitby) permit
posts.

- **Candidate: Hamilton tree removal permit explainer** (focus keyword `tree
  removal permit hamilton`, would funnel into `/services/limb-removal/` +
  `/services/tree-pruning/`).
  - **Search demand: FAIL.** `tree removal permit hamilton`, `tree permit
    hamilton`, `tree cutting permit hamilton` all return **NULL** Google Ads
    volume in Canada. `hamilton tree bylaw` = 20/mo LOW. The only real volume
    is `tree removal hamilton` = **260/mo HIGH comp, CPC $4.25**, which is a
    commercial head term a blog post cannot and should not target (that is a
    service-page / GBP term, not a permit explainer). G2 excludes it.
  - **Traffic potential: FAIL.** The SERP is genuinely winnable (city pages
    hold #1 as the primary source, but local arborists rank the permit content
    directly: `treeservicehamilton.ca` #3, `beswicktreeservice.com` #5/#13, and
    only one Reddit result, so it is NOT a government-authority wall like the
    oak-wilt SERP). BUT DfS Traffic Estimation on those exact winnable
    competitor permit pages returns **etv 0.83 / 1.29 / 1.44 monthly visits**
    (2 to 3 ranking keywords each). Even ranking #1 for this content earns ~1
    Canadian visit/month. The skill's own threshold (`top etv < 50 = dead
    query`) fails hard.
  - **Verdict: NO-GO.** Two scorecard FAILs (demand + traffic). Same low-value
    profile that killed seeded Candidates 2 and 5 (NULL Canadian volume) on
    2026-06-15. The permit query is a real high-intent long-tail, but for a
    mid-size city like Hamilton the measured Canadian prize is negligible.

**Refined strategy takeaway:** the per-city permit/bylaw post pattern pays off
only for the largest metros (Toronto tier), where informational permit demand
is large enough to register. For mid-size served cities (Hamilton, Kitchener,
Whitby) the exact-permit keyword shows NULL Ads volume AND the winnable
competitor pages measure etv < 2, so a per-city permit post there is thin
speculative corpus, not a lead lever. Do NOT auto-extend the permit corpus to
Hamilton/Kitchener/Whitby. The served-city permit-expansion lever is
**exhausted** until GSC verification (blocker 6a) opens a real demand signal.
Next real content moves remain: (a) GSC verification unlock, then the
GSC-self-feed loop, and (b) Nathan's call on Candidate 4 (cost) + GBP.

---

## Auto-approved + drafted (competitor-gap self-feed)

Topics the cron auto-approved and published under P-PIPELINE-AUTO that were
NOT in the seeded 5 above. Sourced from the site's own `competitor-gaps.md`
analysis (the GSC self-feed is empty until the domain is GSC-verified). Each
went through the same mandatory Phase 0 keyword qualifier + 3-phase draft +
Phase 4 on-page audit as a human-approved topic. 60-day per-topic cooldown
anchored on the draft date below.

- **[x] approve [x] drafted (auto), Toronto tree removal permit explainer.**
  Focus keyword `Toronto tree removal permit` (260/mo LOW comp, $6.16 CPC,
  Canada). Drafted + published 2026-06-18, commit `8cbd5b3`, live at
  `/blog/tree-removal-permit-toronto/`. Source: `competitor-gaps.md` Gap 1
  (per-city tree-permit/bylaw content, the highest claim-free autonomous
  lever). Phase 0 qualifier = **GO** (SERP positions 3 to 12 are small
  arborist blog explainers, gov owns only #1-2, no AI Overview, Reddit only
  #14; top small-site competitors etv 44 to 175, 19 to 50 keywords each).
  Phase 4 on-page audit = 16 PASS / 2 WARN (inbound links limited as the
  first post; org byline on a borderline-regulatory topic) / 0 FAIL.
  Honesty: funnels the pruning + limb-removal subset only, states full
  removal is not yet offered, no pricing/credential claim, all bylaw facts
  attributed to City of Toronto Municipal Code Chapter 813. This is the
  FIRST post on the site (blog system built 06-15 had been empty). Next
  permit-content candidate per Gap 1: Mississauga or Oakville, once this one
  beds in (stagger to avoid a thin-content spike on a young domain).
- **[x] approve [x] drafted (auto), Mississauga tree removal permit explainer.**
  Focus keyword `Mississauga tree removal permit` (40/mo focus + ~120/mo
  permit/bylaw cluster, LOW comp, high CPC $6.24 to $10.76, Canada). Drafted +
  published 2026-06-19, commit `2cf6fdc`, live at
  `/blog/tree-removal-permit-mississauga/`. Source: `competitor-gaps.md` Gap 1
  (per-city tree-permit content), the staggered follow-on to the 06-18 Toronto
  post. Phase 0 qualifier = **GO WITH MODIFIER** (SERP = City owns #1-2, then
  positions 4 to 14 are small arborist blog explainers we can match,
  torontotreeservices / toarborist / tree-care.ca; no AI Overview; 1 Reddit at
  #5; measured small-site competitor etv only ~3 because the City absorbs the
  head-term clicks, so the modifier is: target the permit/bylaw CLUSTER not the
  head term, lead with the conversion angle, carry FAQPage schema). Phase 4
  on-page audit = 16 PASS / 2 WARN (E-E-A-T org byline on a regulatory topic;
  inbound links limited as a 2-post corpus) / 0 FAIL. Honesty: all bylaw facts
  primary-source verified + attributed to City of Mississauga By-law 0021-2022
  (15 cm DBH threshold, $399.77 / $139.72 incl-HST 2026 fees, one replacement
  per 15 cm removed, 30-business-day review, no fee for dead/dying); funnels
  pruning + limb-removal only, states full removal is not yet offered, no
  pricing-as-our-rate / credential / insurance claim. Cross-links the Toronto
  permit post (bidirectional). **Fee figures are time-sensitive (City revises
  annually), re-verify against mississauga.ca before any external campaign
  points at this post.** Next per-city permit candidate per Gap 1: Oakville (or
  Hamilton / Burlington), staggered again.
- **[x] approve [x] drafted (auto), Oakville tree removal permit explainer.**
  Focus keyword `Oakville tree removal permit` (70/mo focus, higher than
  Mississauga's 40, plus a ~210/mo permit/bylaw cluster, LOW comp, $5.12 CPC,
  Canada). Drafted and published 2026-06-21, commit `5c0db4d`, live at
  `/blog/tree-removal-permit-oakville/`. Source: `competitor-gaps.md` Gap 1
  (per-city tree-permit content), the staggered 3rd Gap-1 post (after Toronto
  and Mississauga, ~30h after the Mississauga post, inside the 1/24h and 3/7d
  auto velocity caps). Phase 0 qualifier = **GO WITH MODIFIER** (City of Oakville
  and the Town GIS own SERP positions 1 to 5; positions 6 and 8 are small
  arborist blog explainers we can match, almileytree.com and
  torontotreeservices.ca; no AI Overview; 1 Reddit at #7, under the 2+ concern
  threshold; measured small-site competitor etv only ~5 / 0 because the City
  absorbs the head-term clicks, so the modifier is target the permit/bylaw
  CLUSTER not the head term, lead with the conversion angle, carry FAQPage
  schema; the HIGH-comp commercial head "tree removal oakville" 110/mo stays on
  the service pages, not the blog). Phase 4 on-page audit = 18 PASS / 1 WARN
  (org byline on a regulatory topic, consistent with Toronto and Mississauga) /
  0 FAIL. 1,308 body words. Honesty: all bylaw facts primary-source verified on
  oakville.ca and attributed to the Private Tree Protection By-law (By-law
  2017-38, updated 2024). 15 cm DBH threshold measured at 137 cm (stricter than
  Toronto's 30 cm); fees $65 first tree (15 to 24 cm), $425 each additional or
  over 24 cm, no fee for dead, high-risk, ash, or buckthorn; one replacement
  tree per 10 cm of healthy DBH removed plus a $300 deposit each; inspector
  contact within 5 business days; non-compliance handled under Administrative
  Penalty By-law 2021-038. Funnels pruning and limb-removal only, states full
  removal is not yet offered, no pricing-as-our-rate, credential, or insurance
  claim. Cross-links the Toronto and Mississauga permit posts (the 15 cm
  threshold comparison is the contextual hook). **Fee and replacement figures
  are time-sensitive (the Town revises them), re-verify against oakville.ca
  before any external campaign points at this post.** Next per-city permit
  candidate per Gap 1: Hamilton or Burlington, staggered again; watch the 3/7d
  auto velocity cap (3 GTA permit posts now live on a ~23-day domain).
- **[x] approve [x] drafted (auto), Burlington tree removal permit explainer.**
  Focus keyword `Burlington tree removal permit` (50/mo focus, LOW comp index 5,
  bid $1.89 to $6.74, Canada). Drafted + auto-published 2026-06-25 T22:08 under
  P-PIPELINE-AUTO (4th Gap-1 city post; velocity cap cleared when the 06-18
  Toronto post aged out of the rolling-7d window at 21:24). Slug
  `/blog/tree-removal-permit-burlington/`. Draft commit `5586cd3`. Phase 0
  qualifier = pre-validated GO WITH MODIFIER on 2026-06-24 (DfS, $0 this run).
  Phase 4 on-page audit = 17 PASS / 1 WARN (shared 457KB hero, pre-existing
  across all 4 permit posts) / 0 FAIL. 1,365 body words. **Honesty: all bylaw
  facts primary-source verified on burlington.ca 2026-06-25 and attributed to
  the Private Tree By-law (By-law 040-2022, in effect April 2022). The
  pre-validation brief's assumed "By-law 02-2020 / 15 cm" was WRONG — the
  draft-time verify gate caught it. Correct facts: 20 cm DBH threshold measured
  at 1.37 m, and the bylaw ONLY applies inside Burlington's urban boundary
  (rural/Greenbelt land north of the line is exempt — the unique angle this post
  has that the other 3 do not); $54 + HST application fee; size-based
  replacement ratios 2:1 (20-35 cm) / 3:1 (36-74 cm) / 4:1 (75 cm+); exemptions
  for dead, terminal, high-risk trees and pruning up to a third of the live
  crown; heritage + species-at-risk protected at any size; enforcement via the
  City's administrative monetary penalty system.** Funnels pruning and
  limb-removal only, states full removal not yet offered, no
  pricing-as-our-rate / credential / insurance / 24-7 claim. Cross-links the
  Toronto, Mississauga, and Oakville permit posts (the DBH-threshold comparison
  is the hook); reciprocal Burlington links added back into all 3 in the same
  commit (4-city cluster is now a full mesh). **Fee + ratios are time-sensitive
  (the City revises them), re-verify against burlington.ca before any external
  campaign points at this post.** Next per-city permit candidate per Gap 1:
  Hamilton (10/mo, held), or a fresh higher-volume city once GSC verification
  lands. At 4 permit posts on a ~30-day domain, the 4th is the natural pause
  point — do not auto-draft a 5th Gap-1 city without re-checking demand.

---

## Phase 0 demand data for Candidates 1, 2, 4, 5 (cron-measured 2026-07-16, DO NOT RE-SPEND)

The T14:08 2026-07-16 run put the whole remaining seeded queue through the
DataForSEO volume wrapper (location_code 2124 Canada, ~$0.30, well under the
$1/run cap). **Verdict: the seeded informational queue is demand-dead and should
not be drafted blind.** Recording every number so no future run re-buys it.

| Keyword | Vol/mo | Comp | CPC | Read |
|---|---|---|---|---|
| `signs a tree branch is dangerous` (C2 focus) | **null** | n/a | n/a | Too niche for Google Ads to measure (under ~10) |
| `dangerous tree branch` | null | n/a | n/a | dead |
| `dead tree branch` | 40 | LOW 3 | n/a | best in the C2 cluster, still thin |
| `hanging tree branch` | 10 | MED 40 | n/a | dead |
| `how to tell if a tree is dangerous` | 10 | n/a | n/a | dead |
| `signs of a dead tree` | 10 | LOW 0 | n/a | dead |
| `tree branch about to fall` / `hazard tree signs` / `tree limb over house` / `dead branches in tree` | null | n/a | n/a | dead |
| `tree pruning cost ontario` (C4 focus, Ontario-qualified) | **null** | n/a | n/a | the *Ontario-qualified* phrasing is dead. **This does NOT contradict the 06-15 finding** that the bare national terms `tree pruning cost` + `tree trimming cost` are 210/mo MEDIUM. Both are true, they are different keywords. C4's demand is real and lives on the unqualified terms. |
| `storm damaged tree` (C5 cluster) | 20 | LOW 3 | n/a | thin |
| `storm damage tree removal` | 10 | LOW 13 | n/a | thin, and removal is not offered |
| `when to prune trees in ontario` (C1 focus) | 20 | LOW 17 | $11.08 | GO WITH MODIFIER, but **already live at `/guide/`** |
| `when to trim trees in ontario` | 20 | LOW 29 | $0.85 | C1 cluster, same guide covers it |
| `when to cut tree branches` | 10 | LOW 9 | $8.88 | C1 cluster |
| **`tree pruning toronto`** | **320** | **HIGH 84** | **$4.82** | **the real demand. See MORNING_TASKS.** |
| **`tree trimming toronto`** | **320** | **HIGH 84** | **$4.82** | same SERP as above |

**Decisions this locks in:**

- **C2 (dangerous branch): NO-GO on demand.** Focus keyword unmeasurable, whole
  cluster caps at 40/mo. It passes every honesty and funnel gate and is the exact
  topic type the SKILL blesses for auto-publish, but there is no traffic to win.
  Do not draft it just because it is eligible. Re-open only if GSC (once verified)
  shows real impressions on the hazard cluster.
- **C4 (pruning cost): still the one live, demand-backed topic. Do not mark it
  dead.** Only the Ontario-qualified phrasing is null; the bare `tree pruning cost`
  / `tree trimming cost` terms measure 210/mo MEDIUM (06-15 data, re-confirmed as
  non-conflicting today). It stays blocked on the hardened G5 pricing gate, which
  is a Suroy/Nathan decision, not a demand problem. The open Step-E item in
  MORNING_TASKS ("needs your price call") is the unblock path: option (b), a
  price-free "what affects the cost" angle, needs no dollar figures and would let
  the cron draft it. **If that gets greenlit, C4 is the next post, and it should
  target the unqualified terms, not `... ontario`.**
- **C5 (storm cleanup): HOLD.** 30/mo across the cluster and the strongest framing
  ("storm damage tree removal") points at a service that is not offered yet.
- **C1: SKIP permanently, duplicate.** See the block at the top of this file.

**The seeded queue is exhausted for AUTO purposes.** C1 is live already, C2 and C5
are demand-dead, and C4 is demand-real but parked behind a human price decision.
So **P-PIPELINE-AUTO on this site has nothing left to publish**, and it stays that
way until either (a) the C4 price call is made, or (b) GSC verification lands so
the self-feed can pick topics from real impressions instead of a priori guesses.
The GSC blocker is the single highest-leverage thing on this site and it needs
Suroy (already flagged in MORNING_TASKS, do not re-flag). Future runs: do not
re-walk this queue candidate by candidate, and do not re-spend DfS on it. Read
this table instead.

---

## On-deck: next Gap-1 per-city permit post (cron pre-validated 2026-06-24)

> **UPDATE 2026-06-25 T22:08:** Burlington DRAFTED + auto-published (commit
> `5586cd3`, see the auto-approved section above). The on-deck question below is
> RESOLVED. Hamilton (10/mo) remains held and deprioritized; do not re-spend DfS
> on it. Treat the 4-post permit cluster as complete for now; the next Gap-1
> per-city post should wait for GSC impression data to pick a city with real
> demand rather than spending blind on a 5th low-volume municipality.

The 2026-06-24 T19:08 cron run resolved the open "Hamilton or Burlington"
question for the 4th Gap-1 permit post by running the mandatory Phase 0
`seo-keyword-qualifier` on both candidates ahead of time (DataForSEO,
location_code 2124 Canada, ~$0.09 spend, well under the $1/run cap). Recording
the verdicts here so the next eligible run drafts the winner immediately and
does not re-spend budget re-deciding. **The 3/7d auto velocity cap was HIT on
this run (Toronto 06-18, Mississauga 06-19, Oakville 06-21 = 3 posts inside the
rolling 7 days), so no post could ship; the cap frees on 2026-06-25 when the
Toronto post ages out of the window.** No box is ticked: drafting still happens
under P-PIPELINE-AUTO on the next non-capped run.

**Winner: Burlington.** The a-priori "bigger city wins" assumption was wrong.

- **`Burlington tree removal permit`: 50/mo, LOW comp (index 5),** bid
  $1.89 to $6.74, 12-month trend 10 to 90 (spring-weighted, healthy seasonal
  shape). Higher focus volume than Mississauga (40) and close to Oakville (70).
  SERP (33 results, no AI Overview, only 1 Reddit at #6, under the 2+ threshold):
  City of Burlington owns #1-2 (`burlington.ca` tree-permit pages, absorbs the
  bare head-term clicks as expected), then the **winnable small-arborist
  explainer band** at #4-11: landscapeontario.com #4, hudsontree.ca #5,
  beswicktreeservice.com #7, mcfarlantree.ca #9, treeserviceburlington.ca #11.
  This is the exact pattern that GO'd Toronto / Mississauga / Oakville. Traffic
  estimation: the thin single-purpose permit pages measure etv 0 individually
  (DfS Labs has no keyword footprint on them yet), while a full small-arborist
  site in the set (mcfarlantree.ca) pulls etv 274 across 65 keywords, confirming
  the same read as the prior 3 posts: the bare head term is low-traffic because
  the City absorbs it, but a well-built permit-cluster post that links into the
  services is the conversion play.
- **Verdict: GO WITH MODIFIER** (identical to Mississauga + Oakville). Target the
  permit/bylaw CLUSTER, not the bare head term; lead with the conversion angle;
  carry FAQPage schema; route the HIGH-comp commercial head "tree removal
  burlington" to the service pages, not the blog.
- **`Hamilton tree removal permit`: only 10/mo, LOW comp (index 26)** with no bid
  data. Deprioritized. Despite Hamilton being the far larger city, focus-keyword
  demand is one fifth of Burlington's, likely because Hamilton's private-tree
  by-law historically applied only to the urban former-Hamilton boundary, so
  searches fragment and per-capita intent is lower. Hold Hamilton as a later
  candidate, do not re-spend DfS on it before then.

**Draft brief for the next run (use verbatim):**
- Slug `tree-removal-permit-burlington`, focus keyword `Burlington tree removal
  permit`, 1,200 to 1,400 words, 3-phase protocol + Phase 4 on-page audit.
- Internal links: cross-link the Toronto, Mississauga, and Oakville permit posts
  (the DBH-threshold comparison is the contextual hook), plus
  `/services/tree-pruning/`, `/services/limb-removal/`, `/service-areas/`,
  `/contact/`. Add the reciprocal link back from the 3 live posts in the same
  commit so the 4-city cluster stays a full mesh.
- **DRAFT-TIME VERIFY (primary source, real-business honesty gate):** pull the
  current Burlington Private Tree By-law facts from `burlington.ca` before
  drafting (the bylaw is By-law 02-2020 / Forest Protection, updated since).
  Confirm the DBH threshold, permit fees, and replacement requirement against the
  live page, attribute every figure to the by-law, and add an inline
  `<!-- FRIEND-VERIFY -->` note plus a MORNING_TASKS flag for the fee figures
  (time-sensitive, the City revises them). Same honesty discipline as the live 3:
  funnel pruning + limb-removal only, state full removal is not yet offered, no
  pricing-as-our-rate / credential / insurance claim, no 24/7 / always-available.
