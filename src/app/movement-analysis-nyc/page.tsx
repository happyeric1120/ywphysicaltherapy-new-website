import type { Metadata } from "next";
import Link from "next/link";
import ServicePageShell from "@/components/ServicePageShell";

export const metadata: Metadata = {
  title: "Movement Analysis NYC | Compensation Mapping in Midtown Manhattan",
  description:
    "Movement analysis in NYC for chronic tension, posture issues, neck pain, back pain, and compensation patterns. One-on-one assessment at YW Physical Therapy in Midtown Manhattan.",
  alternates: { canonical: "https://ywphysicaltherapy.com/movement-analysis-nyc" },
  openGraph: {
    title: "Movement Analysis NYC | YW Physical Therapy",
    description:
      "Identify compensation patterns before they become pain. One-on-one movement analysis in Midtown Manhattan.",
    url: "https://ywphysicaltherapy.com/movement-analysis-nyc",
    siteName: "YW Physical Therapy",
    locale: "en_US",
    type: "website",
  },
};

const faqs = [
  {
    q: "What is movement analysis?",
    a: "Movement analysis is a structured assessment of how your joints, muscles, posture, balance, and coordination work together. At YW Physical Therapy, it is used to identify compensation patterns that may be driving pain or recurring tightness.",
  },
  {
    q: "Do I need to be injured to book a movement analysis?",
    a: "No. Many Manhattan professionals book movement analysis because something feels off, their body keeps getting tight, or they want to prevent a recurring issue from becoming an injury.",
  },
  {
    q: "Can movement analysis help neck or back pain?",
    a: "Yes. Neck and back pain often reflect a larger movement pattern involving the thoracic spine, hips, breathing, shoulder mechanics, or load tolerance. Movement analysis helps identify the driver, not just the painful location.",
  },
  {
    q: "How is this different from a posture check?",
    a: "A posture check looks at a static position. Movement analysis looks at how your body actually transfers load, stabilizes, compensates, and adapts during motion.",
  },
  {
    q: "Where is YW Physical Therapy located?",
    a: "YW Physical Therapy is located at 224 W 35th St in Midtown Manhattan, near Penn Station and accessible for NYC professionals working near Midtown and Grand Central.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

export default function MovementAnalysisNYCPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ServicePageShell
        eyebrow="Reveal Phase · Human System Reset™"
        h1="Movement Analysis NYC | Identify Compensation Patterns Before They Become Pain"
        lead="A one-on-one movement analysis in Midtown Manhattan that maps posture, mobility, control, and load transfer so your care starts with the real driver, not just the painful area."
        phase="REVEAL"
        faqs={faqs}
        ctaHeading="Schedule a Movement Analysis"
      >
        <section className="py-24 bg-brand-surface border-y border-brand-border">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-center">
              <div>
                <p className="type-label text-brand-gold mb-4">What This Page Is About</p>
                <h2 className="type-display-m text-brand-white mb-6">What Movement Analysis Can Reveal</h2>
                <div className="space-y-5 font-body font-light text-brand-muted text-base leading-relaxed">
                  <p>
                    Movement analysis is the REVEAL phase of the{" "}
                    <Link href="/human-system-reset" className="text-brand-gold hover:text-brand-gold-light transition-colors">
                      Human System Reset™
                    </Link>
                    . It looks at how your body organizes movement under real demand: where you
                    compensate, where you overwork, and where your system avoids load.
                  </p>
                  <p>
                    For Manhattan office workers and active NYC professionals, the same daily positions
                    often create predictable patterns: limited thoracic motion, reduced hip extension,
                    neck tension, shallow breathing, and low back overload.
                  </p>
                  <p>
                    The goal is to turn compensation patterns into visible information: side-to-side
                    asymmetry, knee alignment, pelvic control, toe alignment, and movement quality
                    findings that guide the treatment plan.
                  </p>
                </div>
              </div>

              <div className="relative overflow-hidden border border-brand-border bg-white shadow-[0_24px_80px_rgba(0,0,0,0.16)]" style={{ borderRadius: "2px" }}>
                <div className="relative aspect-[4/5]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/assets/ai-movement-analysis-report-nyc.png"
                    alt="AI-assisted movement analysis report showing single leg squat metrics at YW Physical Therapy in NYC"
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-brand-black">
          <div className="max-w-5xl mx-auto px-6">
            <p className="type-label text-brand-gold mb-4">Who This Is For</p>
            <h2 className="type-display-m text-brand-white mb-8">When Movement Analysis Makes Sense</h2>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                {
                  title: "Recurring Tightness",
                  desc: "Your neck, back, hips, or shoulders keep tightening no matter how often you stretch or get bodywork.",
                },
                {
                  title: "Desk-Related Pain",
                  desc: "You sit for long workdays and notice posture, tension, or pain patterns building across the week.",
                },
                {
                  title: "Performance Plateaus",
                  desc: "You train consistently, but asymmetry, recurring strain, or movement limitation keeps showing up.",
                },
              ].map((item) => (
                <div key={item.title} className="p-7 border border-brand-border bg-brand-surface" style={{ borderRadius: "2px" }}>
                  <h3 className="font-body font-medium text-brand-white mb-3">{item.title}</h3>
                  <p className="type-body-m text-brand-muted">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-brand-surface border-y border-brand-border">
          <div className="max-w-5xl mx-auto px-6">
            <p className="type-label text-brand-gold mb-4">The Process</p>
            <h2 className="type-display-m text-brand-white mb-8">Compensation Mapping, Not Guesswork</h2>
            <div className="grid md:grid-cols-2 gap-8 font-body font-light text-brand-muted text-base leading-relaxed">
              <p>
                Dr. Wu combines clinical observation with{" "}
                <Link href="/ai-movement-evaluation" className="text-brand-gold hover:text-brand-gold-light transition-colors">
                  AI-assisted movement evaluation
                </Link>{" "}
                when appropriate. The goal is not to replace clinical reasoning, but to make subtle
                asymmetries easier to see and track.
              </p>
              <p>
                Findings guide the next step: soft tissue release,{" "}
                <Link href="/shockwave-therapy-nyc" className="text-brand-gold hover:text-brand-gold-light transition-colors">
                  shockwave therapy
                </Link>
                , TECAR, corrective exercise, or a desk worker strategy designed around your actual
                movement pattern.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/neck-pain-nyc" className="type-body-m text-brand-gold hover:text-brand-gold-light transition-colors">
                Movement analysis for neck pain →
              </Link>
              <Link href="/back-pain-nyc" className="type-body-m text-brand-gold hover:text-brand-gold-light transition-colors">
                Movement analysis for back pain →
              </Link>
              <Link href="/desk-worker-body-reset" className="type-body-m text-brand-gold hover:text-brand-gold-light transition-colors">
                Desk Worker Body Reset™ →
              </Link>
            </div>
          </div>
        </section>
      </ServicePageShell>
    </>
  );
}
