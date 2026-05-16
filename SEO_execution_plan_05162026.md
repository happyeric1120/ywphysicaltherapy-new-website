# YW Physical Therapy SEO Execution Plan

Date: 2026-05-16  
Source: `SEO_optimization_05162026.md`  
Website repo: `site/`

## Guiding Principle

This plan should build SEO authority without turning the site into a generic SEO content farm.

The existing website style remains the source of truth:

- Black / gold / warm off-white visual system
- Premium editorial layout
- One-on-one care positioning
- Human System Reset™ as the core brand method
- Advanced technology used with clinical reasoning
- Midtown Manhattan / Penn Station local relevance
- No generic stock-like clinic design
- No thin doorway pages or meaningless city swaps

If a requirement in the SEO source document conflicts with the current site style, preserve the current site style and adapt the SEO requirement to fit.

## Phase 1 — Foundation And Existing Page Strengthening

Goal: improve the existing site’s SEO infrastructure and authority before adding many new pages.

### 1. Shared Schema Infrastructure

Build reusable helpers for:

- FAQ schema
- Breadcrumb schema
- Service schema
- Article schema, later for insights

Why this comes first:

- Existing pages already have partial FAQ schema.
- New pages will be easier to keep consistent.
- Schema quality can improve without changing visual design.

Implementation notes:

- Keep schema generation close to page data.
- Avoid overclaiming medical outcomes.
- Use real business information already present in `src/app/layout.tsx`.

### 2. Existing Page Upgrades

Strengthen these existing pages before creating many new URLs:

- `/shockwave-therapy-nyc`
- `/ai-movement-evaluation`
- `/movement-analysis-nyc`
- `/desk-worker-body-reset`
- `/neck-pain-nyc`
- `/back-pain-nyc`
- `/hip-pain-nyc`
- `/sports-injury-nyc`
- `/about-dr-eric-wu`

Upgrade checklist:

- Add breadcrumb schema.
- Add Service schema where appropriate.
- Expand FAQs to 5-7 strong questions where useful.
- Add more natural internal links.
- Add Penn Station / Midtown Manhattan references where natural.
- Add related services section if absent.
- Keep CTAs visible and consistent with current design.

Do not:

- Force every page to 10 FAQs.
- Add generic filler paragraphs.
- Add unrelated local phrases just for keyword density.

### 3. Internal Link Graph

Create a topic graph using current pages first.

Core link patterns:

- Shockwave pages link to:
  - `/shockwave-therapy-nyc`
  - `/focused-shockwave-vs-radial-shockwave`, once created
  - relevant symptom pages
  - `/book`
  - `/about-dr-eric-wu`

- Movement pages link to:
  - `/movement-analysis-nyc`
  - `/ai-movement-evaluation`
  - `/human-system-reset`
  - `/desk-worker-body-reset`
  - `/book`

- Desk worker pages link to:
  - `/desk-worker-body-reset`
  - `/neck-pain-nyc`
  - `/back-pain-nyc`
  - `/movement-analysis-nyc`
  - `/book`

Use descriptive anchors, not vague anchors like "learn more."

## Phase 2 — First High-Intent New Pages

Goal: add pages with clear search intent and low duplication risk.

These should be built only after Phase 1 infrastructure is ready.

### Priority Pages

1. `/physical-therapy-near-penn-station`

Purpose:

- Capture local intent.
- Build Penn Station / Midtown local relevance.
- Create a natural local hub page.

Content focus:

- One-on-one physical therapy near Penn Station.
- 224 W 35th St #301-5.
- Convenience for commuters and Midtown professionals.
- Shockwave, movement analysis, Human System Reset™.
- Clear booking CTA.

Avoid:

- Making it a generic location swap.
- Duplicating homepage copy.

2. `/focused-shockwave-vs-radial-shockwave`

Purpose:

- Build shockwave topical authority.
- Answer a high-intent comparison query.
- Support `/shockwave-therapy-nyc`.

Content focus:

- Focused vs radial mechanism.
- Depth, tissue target, clinical use cases.
- When each may be appropriate.
- Why YW uses both.
- Link to shockwave treatment page and relevant condition pages.

3. `/shockwave-plantar-fasciitis-nyc`

Purpose:

- High-intent condition page.
- Strong fit with shockwave search behavior.

Content focus:

- Heel pain / plantar fascia loading.
- Why rest, stretching, and generic treatment often fail.
- Shockwave role.
- Human System Reset™ integration.
- Foot, calf, hip, and gait mechanics.

4. `/shockwave-achilles-tendonitis-nyc`

Purpose:

- High-intent tendon condition page.
- Builds shockwave authority.

Content focus:

- Achilles load tolerance.
- Calf stiffness.
- Running and daily activity limitations.
- Shockwave and progressive loading.

5. `/desk-worker-neck-pain-nyc`

Purpose:

- Strong local + population + symptom intent.
- Supports desk worker authority.

Content focus:

- Neck pain from desk work.
- Upper trap tension.
- Thoracic stiffness.
- Shoulder blade control.
- AI movement analysis.
- Human System Reset™.

6. `/tech-neck-physical-therapy-nyc`

Purpose:

- Captures common search language.
- Related but distinct from desk worker neck pain.

Content focus:

- Screen posture.
- Forward head position.
- Cervical and thoracic mechanics.
- Why stretching alone fails.
- Movement retraining.

## Phase 3 — Cluster Expansion

Goal: expand topical authority once the first pages are live, linked, and indexed.

### Shockwave Cluster Expansion

Add condition pages only when each can be meaningfully distinct.

Recommended order:

1. `/shockwave-tennis-elbow-nyc`
2. `/shockwave-calcific-tendonitis-nyc`
3. `/shockwave-patellar-tendonitis-nyc`
4. `/shockwave-hip-pain-nyc`
5. `/shockwave-chronic-muscle-tightness-nyc`
6. `/shockwave-near-penn-station`

Content requirement:

Each page must include specific biomechanics and clinical reasoning. Do not reuse the same shockwave explanation with only the body part changed.

### Desk Worker Cluster Expansion

Recommended order:

1. `/upper-trap-tightness-nyc`
2. `/sitting-low-back-pain-nyc`
3. `/forward-head-posture-nyc`
4. `/office-worker-hip-tightness-nyc`
5. `/computer-shoulder-pain-nyc`
6. `/midtown-manhattan-desk-worker-pt`

Content requirement:

Each page should connect a specific desk-work pattern to movement assessment and treatment strategy.

Avoid:

- Making every page say "desk work causes tightness" in different words.
- Splitting pages too narrowly before there is enough content depth.

### AI Movement Analysis Cluster Expansion

Recommended order:

1. `/ai-movement-analysis-nyc`
2. `/functional-movement-assessment-nyc`
3. `/movement-screening-nyc`
4. `/ai-posture-analysis-manhattan`
5. `/movement-analysis-for-desk-workers`
6. `/movement-analysis-for-runners`
7. `/movement-analysis-for-gym-athletes`

Important URL note:

The site currently has `/ai-movement-evaluation`. If `/ai-movement-analysis-nyc` is added, define the relationship clearly:

- Option A: `/ai-movement-analysis-nyc` becomes the primary SEO page, and `/ai-movement-evaluation` stays as a service/brand page.
- Option B: `/ai-movement-evaluation` redirects or canonicalizes later.

Do not duplicate the same content across both pages.

## Phase 4 — Local SEO Expansion

Goal: increase local search relevance without creating low-value neighborhood pages.

Start with:

1. `/physical-therapy-near-penn-station`

Then consider:

1. `/physical-therapy-midtown-manhattan`
2. `/physical-therapy-near-msg`
3. `/shockwave-therapy-midtown`
4. `/sports-recovery-midtown-manhattan`
5. `/physical-therapy-herald-square`

Each local page must include:

- Specific local reason to exist.
- Address and walking context.
- Transit / landmark references.
- Services relevant to that location intent.
- Internal links to service pillars.
- CTA.

Do not:

- Swap only neighborhood names.
- Create multiple local pages with nearly identical content.
- Over-index on location at the expense of clinical value.

## Phase 5 — Expert Insight Articles

Goal: build authority through clinically useful articles, not generic blogs.

Recommended first articles:

1. `Focused vs Radial Shockwave Therapy: What Actually Changes?`
2. `Why Stretching Alone Does Not Fix Desk Worker Neck Pain`
3. `Why Chronic Tightness Keeps Coming Back`
4. `AI Movement Analysis vs Traditional Posture Assessment`
5. `Why Manhattan Office Workers Develop Upper Trap Tension`
6. `The Biomechanics Behind Tech Neck`

Article rules:

- Written by Dr. Yu-Kuang Wu, PT, PhD.
- Include author box.
- Link to at least one pillar page.
- Link to two related services.
- Include 3-5 FAQs.
- Include CTA to book assessment.
- Maintain premium editorial tone.

Do not:

- Publish generic "Top 5 Tips" posts unless they are clinically specific.
- Use filler content.
- Overproduce low-quality articles.

## Phase 6 — Scalable Programmatic SEO System

Goal: create a safe repeatable system for future pages.

Build a reusable page framework with variables:

- Symptom
- Body region
- Activity type
- Population type
- Modality
- Local modifier
- Related pages
- FAQ set
- CTA type

Before generating a new page, require:

- Unique search intent.
- Unique clinical angle.
- At least 800-1200 words of meaningful content.
- Distinct internal links.
- Distinct FAQ set.
- Local relevance if a location modifier is used.

Do not create:

- Doorway pages.
- Duplicate symptom pages.
- Pages that differ only by city or neighborhood.
- Pages without enough clinical substance.

## Phase 7 — Measurement And Iteration

Track monthly:

- Google Search Console indexed pages.
- Impressions and clicks by cluster.
- Queries containing:
  - shockwave
  - AI movement
  - desk worker
  - Penn Station
  - Midtown
  - Human System Reset
- Organic bookings.
- GBP traffic.
- Engagement time.
- Pages with high impressions but low CTR.
- Pages with low indexation.

Iteration rules:

- Improve existing pages before adding more pages.
- Add internal links when a page begins gaining impressions.
- Expand FAQs based on real queries.
- Add images only when they improve trust or explanation.
- Remove or consolidate pages that compete with each other.

## Immediate Next Sprint Recommendation

The next implementation sprint should include:

1. [x] Shared schema helpers.
2. [x] Breadcrumb schema on existing service pages.
3. [x] Service schema on existing service pages.
4. [x] Internal link graph improvements.
5. [x] `/physical-therapy-near-penn-station`.
6. [x] `/focused-shockwave-vs-radial-shockwave`.

This creates the foundation and adds two high-value pages without overexpanding the site.

Completed on 2026-05-16:

- Added reusable FAQ, Breadcrumb, and Service schema helpers in `site/src/lib/seoSchemas.ts`.
- Applied shared schema to key existing pages:
  - `/shockwave-therapy-nyc`
  - `/movement-analysis-nyc`
  - `/ai-movement-evaluation`
  - `/desk-worker-body-reset`
  - `/neck-pain-nyc`
  - `/back-pain-nyc`
- Added `/physical-therapy-near-penn-station`.
- Added `/focused-shockwave-vs-radial-shockwave`.
- Added footer links and shockwave pillar internal link support.
