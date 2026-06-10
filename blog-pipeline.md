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

**There is no blog yet.** `src/pages/blog/` does not exist and the Astro
content collection was deliberately stripped at v1 scaffold. Per the cron
SKILL.md P-PIPELINE rule, the first approved topic does NOT get drafted
immediately: the first eligible P-PIPELINE run BUILDS the blog system
(hub `index.astro` + `[slug].astro` post template + `BlogPosting` JSON-LD +
brand-coherent forest/bark/cream layout, niche-swapped for arborist), wires
`/blog/` into `sitemap.xml.ts` and the Header nav, and logs that as
`P-PIPELINE infra`. The run AFTER that drafts the first approved post. So
approving a topic here kicks off a two-run sequence, not a one-run draft.

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

- **Status:** [ ] approve  [ ] skip  [ ] adjust
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

- **Status:** [ ] approve  [ ] skip  [ ] adjust
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
- **Notes:**

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
