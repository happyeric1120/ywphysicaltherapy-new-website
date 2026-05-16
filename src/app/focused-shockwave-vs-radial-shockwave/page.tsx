import type { Metadata } from "next";
import Link from "next/link";
import ServicePageShell from "@/components/ServicePageShell";
import { breadcrumbSchema, faqPageSchema, jsonLd, serviceSchema } from "@/lib/seoSchemas";

export const metadata: Metadata = {
  title: "Focused Shockwave vs Radial Shockwave | NYC Comparison Guide",
  description:
    "Focused shockwave vs radial shockwave explained by YW Physical Therapy in Midtown Manhattan. Learn how depth, precision, and use cases differ.",
  alternates: { canonical: "https://ywphysicaltherapy.com/focused-shockwave-vs-radial-shockwave" },
  openGraph: {
    title: "Focused Shockwave vs Radial Shockwave | YW Physical Therapy",
    description:
      "A clear comparison of focused and radial shockwave therapy in Midtown Manhattan.",
    url: "https://ywphysicaltherapy.com/focused-shockwave-vs-radial-shockwave",
    siteName: "YW Physical Therapy",
    locale: "en_US",
    type: "article",
  },
};

const faqs = [
  {
    q: "What is the main difference between focused and radial shockwave?",
    a: "Focused shockwave concentrates energy at a selected depth, while radial shockwave spreads energy outward from the applicator and is typically used for more superficial or broader tissue areas.",
  },
  {
    q: "Is focused shockwave stronger than radial shockwave?",
    a: "Focused shockwave is more depth-specific and can reach deeper target tissues. That does not make it automatically better for every case; the right option depends on the tissue, depth, sensitivity, and clinical goal.",
  },
  {
    q: "Which type is better for tendon pain?",
    a: "Both may be useful for tendon pain. Focused shockwave is often considered when deeper, chronic, or more localized tendon issues are involved, while radial shockwave may be useful for broader soft tissue and superficial tendon areas.",
  },
  {
    q: "Can you combine focused and radial shockwave?",
    a: "Yes. Dr. Wu may use focused and radial shockwave in the same overall care plan when different tissue layers or treatment goals need different energy profiles.",
  },
  {
    q: "Does shockwave therapy hurt?",
    a: "Most people describe shockwave as intense pressure or tapping over sensitive tissue. Intensity is adjusted throughout treatment, and comfort is monitored in real time.",
  },
  {
    q: "Where can I get focused or radial shockwave therapy in NYC?",
    a: "YW Physical Therapy provides focused and radial shockwave therapy in Midtown Manhattan near Penn Station at 224 W 35th St #301-5.",
  },
];

const pageSchemas = [
  faqPageSchema(faqs),
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Shockwave Therapy NYC", path: "/shockwave-therapy-nyc" },
    { name: "Focused vs Radial Shockwave", path: "/focused-shockwave-vs-radial-shockwave" },
  ]),
  serviceSchema({
    name: "Focused and Radial Shockwave Therapy Comparison",
    description:
      "Clinical comparison of focused shockwave and radial shockwave therapy in Midtown Manhattan.",
    path: "/focused-shockwave-vs-radial-shockwave",
    serviceType: "Shockwave therapy education",
  }),
];

export default function FocusedVsRadialShockwavePage() {
  return (
    <>
      {pageSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLd(schema)}
        />
      ))}
      <ServicePageShell
        eyebrow="Shockwave Authority · Midtown Manhattan"
        h1="Focused Shockwave vs Radial Shockwave"
        heroTagline="Different energy profiles. Different clinical jobs."
        lead="Focused and radial shockwave are not interchangeable buzzwords. They deliver acoustic energy differently, reach tissue differently, and fit different recovery goals when used inside a broader movement-based plan."
        phase="RELEASE"
        faqs={faqs}
        ctaHeading="See Which Shockwave Option Fits Your Case"
      >
        <section className="py-24 bg-brand-surface border-y border-brand-border">
          <div className="max-w-5xl mx-auto px-6">
            <p className="type-label text-brand-gold mb-4">Short Answer</p>
            <h2 className="type-display-m text-brand-white mb-6">The Difference Is Depth and Energy Spread</h2>
            <div className="grid md:grid-cols-2 gap-8 font-body font-light text-brand-muted text-base leading-relaxed">
              <p>
                Focused shockwave delivers energy to a selected depth, which can be useful for
                more localized or deeper tissue targets. Radial shockwave spreads energy outward
                from the applicator and is often used for broader or more superficial tissue areas.
              </p>
              <p>
                At YW Physical Therapy, the choice is based on evaluation findings. Shockwave is
                not used as a generic add-on; it is part of the RELEASE phase of{" "}
                <Link href="/human-system-reset" className="text-brand-gold hover:text-brand-gold-light transition-colors">
                  Human System Reset™
                </Link>
                , followed by movement retraining when appropriate.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 bg-brand-black">
          <div className="max-w-5xl mx-auto px-6">
            <p className="type-label text-brand-gold mb-4">Side-by-Side</p>
            <h2 className="type-display-m text-brand-white mb-8">Focused vs Radial Shockwave</h2>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="p-8 border border-cyan-400/30 bg-brand-surface" style={{ borderRadius: "2px" }}>
                <div className="relative aspect-[4/3] overflow-hidden border border-cyan-400/25 mb-6 bg-brand-black" style={{ borderRadius: "2px" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/assets/focused-shockwave-therapy-nyc.png"
                    alt="Focused shockwave therapy equipment in Midtown Manhattan"
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="type-label text-cyan-400 mb-3">Focused Shockwave</p>
                <h3 className="font-body font-medium text-brand-white mb-4">Depth-specific precision</h3>
                <ul className="space-y-2 font-body font-light text-brand-muted text-sm">
                  <li>Energy can be concentrated at a selected tissue depth.</li>
                  <li>Often considered for deeper, chronic, or localized tissue issues.</li>
                  <li>Useful when precision matters more than broad surface coverage.</li>
                </ul>
              </div>

              <div className="p-8 border border-brand-border bg-brand-surface" style={{ borderRadius: "2px" }}>
                <div className="relative aspect-[4/3] overflow-hidden border border-brand-border mb-6 bg-brand-black" style={{ borderRadius: "2px" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/assets/radial-shockwave-therapy-nyc.png"
                    alt="Radial shockwave therapy equipment in Midtown Manhattan"
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="type-label text-brand-gold mb-3">Radial Shockwave</p>
                <h3 className="font-body font-medium text-brand-white mb-4">Broad surface-to-mid-depth coverage</h3>
                <ul className="space-y-2 font-body font-light text-brand-muted text-sm">
                  <li>Energy disperses outward from the applicator.</li>
                  <li>Often useful for broader soft tissue and superficial tendon areas.</li>
                  <li>Can pair well with laser, TECAR, and movement retraining.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-brand-surface border-y border-brand-border">
          <div className="max-w-5xl mx-auto px-6">
            <p className="type-label text-brand-gold mb-4">Clinical Reasoning</p>
            <h2 className="type-display-m text-brand-white mb-8">The Device Is Only One Part of the Plan</h2>
            <div className="grid md:grid-cols-2 gap-8 font-body font-light text-brand-muted text-base leading-relaxed">
              <p>
                Chronic tendon and soft tissue issues often involve more than irritated tissue.
                Load tolerance, movement compensation, hip or thoracic mobility, foot mechanics,
                and training habits can all influence why symptoms keep returning.
              </p>
              <p>
                That is why Dr. Wu may connect shockwave with{" "}
                <Link href="/movement-analysis-nyc" className="text-brand-gold hover:text-brand-gold-light transition-colors">
                  movement analysis
                </Link>
                ,{" "}
                <Link href="/back-pain-nyc" className="text-brand-gold hover:text-brand-gold-light transition-colors">
                  back pain physical therapy
                </Link>
                ,{" "}
                <Link href="/neck-pain-nyc" className="text-brand-gold hover:text-brand-gold-light transition-colors">
                  neck pain care
                </Link>
                , or the broader{" "}
                <Link href="/shockwave-therapy-nyc" className="text-brand-gold hover:text-brand-gold-light transition-colors">
                  shockwave therapy NYC
                </Link>{" "}
                pillar page depending on what your assessment shows.
              </p>
            </div>
          </div>
        </section>
      </ServicePageShell>
    </>
  );
}
