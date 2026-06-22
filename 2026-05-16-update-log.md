# 2026-05-16 Website Update Log

This file records the SEO sprint completed on May 16, 2026.

## Source Documents

- Read first: `SEO_optimization_05162026.md`
- Execution plan created and marked:
  - Outer planning file: `SEO_execution_plan_05162026.md`
  - Repo copy: `site/SEO_execution_plan_05162026.md`

## Implementation Summary

### Shared SEO Schema Helpers

- Added `src/lib/seoSchemas.ts`.
- Added reusable helpers for:
  - FAQPage schema
  - BreadcrumbList schema
  - Service schema
  - JSON-LD script rendering payloads

### Existing Page Schema Upgrades

Applied shared schema helpers to key existing SEO pages:

- `/shockwave-therapy-nyc`
- `/movement-analysis-nyc`
- `/ai-movement-evaluation`
- `/desk-worker-body-reset`
- `/neck-pain-nyc`
- `/back-pain-nyc`

Each upgraded page now includes:

- FAQ schema
- Breadcrumb schema
- Service schema

### Metadata Upgrade

- Added global Twitter card metadata in `src/app/layout.tsx`.

### New SEO Pages

Added:

- `/physical-therapy-near-penn-station`
- `/focused-shockwave-vs-radial-shockwave`

Both pages follow the existing black/gold premium editorial style through the current page shell and avoid generic SEO doorway-page formatting.

### Internal Linking

- Added footer links to:
  - Physical Therapy Near Penn Station
  - Focused vs Radial Shockwave
- Added a contextual link from `/shockwave-therapy-nyc` to `/focused-shockwave-vs-radial-shockwave`.

## Style Decision

The SEO source document requested luxury editorial branding. This matches the existing site style, so implementation preserved the current design system:

- Black / gold palette
- Editorial typography
- Thin borders
- Minimal cards
- Premium clinic tone
- No generic SEO-template styling

## Verification

Commands run:

- `npm run lint`
- `npm run build`

Results:

- Lint passed.
- Production build passed.
- Static route generation and sitemap generation completed successfully.

---

# 2026-06-15 Reset Naming + Navigation Update

This section records the Reset-focused navigation and messaging updates completed on June 15, 2026.

## Implementation Summary

### Navbar Simplification

- Removed the `Conditions` navbar tab because it only routed to the Back Pain page.
- Renamed the main navbar entries:
  - `Pain & Movement` → `Body Reset`
  - `Neural Regulation` → `Nervous System Reset`
- Kept the existing URLs unchanged to avoid redirect and SEO churn:
  - `/physical-therapy-near-penn-station`
  - `/neural-regulation`

### Body Reset Page Reframing

- Updated `/physical-therapy-near-penn-station` so the page presents as `Body Reset`.
- Updated page metadata, Open Graph title, breadcrumb schema, service schema, hero eyebrow, H1, lead copy, FAQ wording, and CTA heading.
- Reframed the page as the musculoskeletal reset within Human System Reset™ while preserving physical therapy and movement-analysis SEO language.

### Nervous System Reset Page Reframing

- Updated `/neural-regulation` so the page presents as `Nervous System Reset`.
- Updated page metadata, Open Graph title, breadcrumb schema, service schema, hero H1, FAQ wording, section labels, default booking button label, and intervention copy.
- Kept the page focused on HRV assessment, recovery readiness, and nervous system regulation.
- Replaced the hero report image with `public/assets/Hrv-result-pic.PNG`.

### Homepage Messaging Alignment

- Updated homepage CTA and section language to match the new Reset architecture:
  - Hero CTA now says `Explore Body Reset`.
  - `How We Help` now uses `Body Reset` and `Nervous System Reset` as the two entry points.
  - The Human System Reset™ method RESTORE phase now references `Nervous System Reset`.
  - The method CTA now says `Explore Body Reset`.
- Updated homepage metadata keywords to include:
  - `Body Reset NYC`
  - `Nervous System Reset NYC`
- Kept `neural regulation NYC` in keywords for SEO continuity.

### Shared Navigation and Footer Copy

- Updated the shared service page CTA from `See Pain & Movement` to `See Body Reset`.
- Updated footer links from:
  - `Pain & Movement` → `Body Reset`
  - `Neural Regulation` → `Nervous System Reset`

## Verification

Commands run:

- `npm run lint`
- `npm run build`

Results:

- Lint passed.
- Production build passed.
- Static route generation completed successfully.
- Sitemap generation completed successfully.
- Local server was restarted successfully on `http://localhost:3000`.
- Local check confirmed `/neural-regulation` returned `200` and included the new `Hrv-result-pic.PNG` hero image.

---

# 2026-06-20 Human System Reset™ Umbrella + Messaging Update

This section records the June 2026 structure and messaging update for the main website.

## Implementation Summary

### Navigation Update

- Updated the primary navigation to:
  - Home
  - Movement Analysis
  - Physical Therapy
  - Shockwave Therapy
  - Human System Reset™
  - About
  - Book Now
- Exposed the existing `/ai-movement-evaluation` page as the primary Movement Analysis destination.
- Kept existing URLs unchanged.

### Homepage Restructure

- Reframed the hero around visitor needs: pain, recovery, movement, assessment, and tracking.
- Updated the first major homepage section to `How Can We Help?`.
- Added two service pathways:
  - Pain & Injury Recovery
  - Recovery & Resilience
- Routed both pathways into the Human System Reset™ umbrella page using anchors:
  - `/human-system-reset#body-reset`
  - `/human-system-reset#neural-regulation`
- Added a new `Start With Measurement` homepage section linking to:
  - AI Movement Analysis
  - Physical Therapy Evaluation
  - Human System Reset™
- Reintroduced a homepage Neural Regulation section so the service is visible before the 4R Framework.

### Human System Reset™ Umbrella Positioning

- Repositioned `/human-system-reset` as the umbrella framework for:
  - Body Reset
  - Neural Regulation
- Added a `The Big Umbrella` section explaining how both pathways fit under Human System Reset™.
- Added a `Why Neural Regulation Matters` section explaining recovery readiness, stress load, fatigue, sleep, work demand, and resilience in conservative language.
- Added `Measure → Support → Re-measure` as the session experience.
- Preserved the existing 4R Framework:
  - Reveal
  - Release
  - Restore
  - Reinforce

### 4R Framework Integration

- Updated the homepage 4R section so Body Reset and Neural Regulation both fit inside the same process.
- Updated the Human System Reset™ 4R section to integrate Neural Regulation interventions across:
  - REVEAL: HRV wellness metrics, recovery screening, lifestyle factors
  - RELEASE: relaxation-focused recovery support and non-invasive wellness tools
  - RESTORE: red / near-infrared light, compression, recovery reassessment
  - REINFORCE: recovery habits, follow-up measurement, progress tracking

### Movement Analysis Positioning

- Reframed `/ai-movement-evaluation` as `AI-Assisted Movement Analysis`.
- Focused copy on movement quality, posture, mobility, balance, asymmetry, compensation strategies, and recurring pain patterns.
- Avoided sports-performance lab positioning.

### Compliance and Claim Softening

- Softened language around recovery, Neural Regulation, HRV, and wellness tools.
- Removed high-risk language related to:
  - taVNS
  - vagus / vagal claims
  - neuromodulation
  - autonomic regulation
  - treating stress or anxiety
  - improving HRV or vagal tone
- Replaced with more conservative language such as:
  - recovery-focused experience
  - HRV wellness metrics
  - non-invasive wellness technology
  - sensory-based recovery support
  - relaxation-focused protocols
  - recovery assessment and monitoring

### Technology and Testimonials

- Moved technology lower in the story and reframed it as support for the plan.
- Updated technology hierarchy around:
  - What We Measure
  - What We Support
  - How We Track Progress
  - Technologies Used
- Added testimonial disclaimer:
  - Individual experiences and results may vary. Testimonials reflect personal experiences and are not a guarantee of future outcomes.

## Verification

Commands run:

- `npm run build`
- Localhost HTML probes for:
  - `/`
  - `/human-system-reset`
  - `/ai-movement-evaluation`
  - `/neural-regulation`
- Search checks for high-risk compliance terms.

Results:

- Production build passed.
- Static route generation completed successfully.
- Sitemap generation completed successfully.
- Homepage rendered the updated pathways, Start With Measurement, and Neural Regulation section.
- Human System Reset™ page rendered the umbrella structure, Neural Regulation explanation, Measure → Support → Re-measure, and updated 4R copy.
- Movement Analysis page rendered the updated AI-Assisted Movement Analysis positioning.
- Search checks did not find the targeted high-risk claim language in the updated source areas.

---

# 2026-06-22 Navigation + Pricing Structure Update

This section records the June 22, 2026 implementation based on `yw-site-edit-instructions_06222026.md`.

## Scope Note

- Updated the main website navigation, homepage structure, pricing page, and shared footer.
- Left `/lp` unchanged because it is an unused legacy landing page with its own header.
- Kept existing URLs unchanged.
- Did not change global colors, fonts, animations, or the overall visual style.

## Implementation Summary

### Shared Navbar

- Replaced the tool-name-driven navbar with a need-based structure:
  - Pain & Injury
  - Recovery & Wellness
  - Pricing
  - About
  - Book Now
- Added desktop dropdowns for:
  - Pain & Injury
  - Recovery & Wellness
- Pain & Injury dropdown links:
  - Physical Therapy
  - Shockwave Therapy
  - AI Movement Analysis
  - Conditions We Treat
- Recovery & Wellness dropdown links:
  - Human System Reset™
  - Neural Regulation (HRV)
  - Recovery Screening
- Added mobile hamburger accordion sections using the same grouped navigation.
- Added active route styling by section.
- Added dropdown accessibility behavior:
  - hover
  - click
  - focus
  - escape key
  - `aria-haspopup`
  - `aria-expanded`

### Homepage Structure

- Added a plain-language line under the hero subhead:
  - `Two ways in: fix something that hurts, or recover and build resilience. Not sure? Start with a measurement.`
- Strengthened the two-path chooser directly under the hero.
- Updated the two primary cards:
  - Pain & Injury Recovery → `/physical-therapy-near-penn-station/`
  - Recovery & Wellness → `/human-system-reset/`
- Added clear primary CTA buttons:
  - `See Pain & Injury Care`
  - `See Recovery & Wellness`
- Adjusted homepage section order to:
  - Hero
  - Two-path chooser
  - Start With Measurement
  - 4R Framework
  - What we measure / support / track
  - Conditions
  - Clinician bio
  - Reviews
  - Location + Book

### Pricing Page

- Split `/insurance-pricing/` into three distinct sections:
  - Insurance & Coverage
  - Physical Therapy — Pricing
  - Recovery & Wellness — Pricing
- Added a top insurance summary:
  - `Standard physical therapy can be billed to insurance (out-of-network) or paid out of pocket. Recovery & Wellness services are self-pay only.`
- Kept existing insurance explanation cards.
- Moved PT-related services into the Physical Therapy pricing group:
  - PT Evaluation
  - Follow-Up PT Session (60 min)
  - Focused Shockwave
  - Radial Shockwave + Class IV Laser
  - AI Movement Assessment Only
- Added `Insurance-eligible` tags to PT price cards.
- Kept the existing insurance patient upgrade box inside the Physical Therapy pricing section.
- Moved Neural Regulation into the Recovery & Wellness pricing group:
  - Neural Regulation Session — $150
- Added a `Self-pay only` tag to the Neural Regulation card.
- Kept the FAQ section at the bottom.

### Footer

- Reorganized the shared footer into grouped link columns:
  - Pain & Injury
  - Recovery & Wellness
  - Info
- Kept the same shared footer component site-wide.

## Verification

Commands run:

- `npm run build`
- Localhost HTML probes for:
  - `/`
  - `/insurance-pricing`
  - `/human-system-reset`
  - `/physical-therapy-near-penn-station`
- Localhost link checks for:
  - `/physical-therapy-near-penn-station`
  - `/shockwave-therapy-nyc`
  - `/ai-movement-evaluation`
  - `/human-system-reset`
  - `/neural-regulation`
  - `/human-system-reset-assessment`
  - `/insurance-pricing`
  - `/about-dr-eric-wu`
  - `/book`
- Search checks for old main-site nav/pricing wording.

Results:

- Production build passed.
- Static route generation completed successfully.
- Sitemap generation completed successfully.
- Main-site representative pages rendered the new grouped nav labels.
- Pricing page rendered all three required sections.
- Updated internal navigation links returned `200`.
- Old main-site nav/pricing wording was not found outside the excluded `/lp` page.
