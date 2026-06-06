import type { Metadata } from "next";
import Link from "next/link";
import ServicePageShell from "@/components/ServicePageShell";
import { breadcrumbSchema, faqPageSchema, jsonLd, serviceSchema } from "@/lib/seoSchemas";

export const metadata: Metadata = {
  title: "Knee Pain Physical Therapy NYC | Runner Knee & Patellar Pain | YW Physical Therapy",
  description:
    "Knee pain physical therapy in Midtown Manhattan for runner knee, patellar tendon pain, IT band symptoms, and movement-related knee overload near Penn Station.",
  alternates: { canonical: "https://ywphysicaltherapy.com/knee-pain-nyc" },
  openGraph: {
    title: "Knee Pain Physical Therapy NYC | YW Physical Therapy",
    description:
      "One-on-one knee pain PT in Midtown Manhattan using movement analysis, gait mechanics, load management, and Human System Reset™.",
    url: "https://ywphysicaltherapy.com/knee-pain-nyc",
    siteName: "YW Physical Therapy",
    locale: "en_US",
    type: "website",
  },
};

const faqs = [
  {
    q: "Can physical therapy help runner knee?",
    a: "Yes. Runner knee often reflects a load-distribution issue involving hip control, foot mechanics, cadence, tissue capacity, or training progression. Treatment starts by identifying the movement and load pattern.",
  },
  {
    q: "Should I stop running if my knee hurts?",
    a: "Not always. Full rest is not automatically required. Dr. Wu helps modify training load, running exposure, and strength work based on irritability and assessment findings.",
  },
  {
    q: "Is knee pain caused by weak glutes?",
    a: "Sometimes hip strength matters, but knee pain is rarely explained by one muscle. Assessment looks at the whole chain, including ankle mobility, hip control, trunk strategy, gait, and training load.",
  },
  {
    q: "Can shockwave help patellar tendon pain?",
    a: "Shockwave may be considered for chronic tendon presentations when appropriate, but it is only one tool. Loading strategy and movement retraining still matter for lasting change.",
  },
];

const pageSchemas = [
  faqPageSchema(faqs),
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Knee Pain Physical Therapy NYC", path: "/knee-pain-nyc" },
  ]),
  serviceSchema({
    name: "Knee Pain Physical Therapy NYC",
    description:
      "One-on-one physical therapy in Midtown Manhattan for runner knee, patellar tendon pain, IT band symptoms, and movement-related knee overload.",
    path: "/knee-pain-nyc",
    serviceType: "Knee pain physical therapy",
  }),
];

export default function KneePainNYCPage() {
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
        eyebrow="Knee Pain · Human System Reset™"
        h1="Knee Pain Physical Therapy in Manhattan"
        heroTagline="Knee pain is often a load problem before it is a knee problem."
        lead="Runner knee, patellar tendon pain, IT band symptoms, and recurring knee irritation often reflect how load moves through the hip, foot, trunk, and training plan. Dr. Wu assesses the full chain before choosing treatment."
        faqs={faqs}
        ctaHeading="Start Your Knee Pain Assessment"
      >
        <section className="py-24 bg-brand-surface border-y border-brand-border">
          <div className="max-w-5xl mx-auto px-6">
            <p className="type-label text-brand-gold mb-4">The Pattern</p>
            <h2 className="type-display-m text-brand-white mb-6">Why Knee Pain Shows Up During Running or Training</h2>
            <div className="grid md:grid-cols-2 gap-8 type-body-m text-brand-muted">
              <p>
                The knee sits between the hip and foot. If the hip cannot control load or the foot
                cannot absorb force efficiently, the knee often becomes the place where stress
                accumulates.
              </p>
              <p>
                A Human System Reset™ assessment combines{" "}
                <Link href="/physical-therapy-near-penn-station" className="text-brand-gold hover:text-brand-gold-light transition-colors">
                  movement analysis
                </Link>
                , load history, strength testing, and recovery context to identify what is driving
                the knee demand.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 bg-brand-black">
          <div className="max-w-5xl mx-auto px-6">
            <p className="type-label text-brand-gold mb-4">Common Presentations</p>
            <h2 className="type-display-m text-brand-white mb-8">Knee Conditions and Training Patterns</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              {[
                "Runner knee",
                "Patellar tendinopathy",
                "IT band-related knee pain",
                "Anterior knee pain",
                "Squat or stair pain",
                "Post-surgical knee rehab",
                "Meniscus irritation patterns",
                "Training load spikes",
                "Return-to-running limitations",
              ].map((condition) => (
                <div key={condition} className="px-5 py-3 border border-brand-border bg-brand-surface type-body-m text-brand-muted" style={{ borderRadius: "2px" }}>
                  {condition}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-brand-surface border-y border-brand-border">
          <div className="max-w-5xl mx-auto px-6">
            <p className="type-label text-brand-gold mb-4">Treatment Strategy</p>
            <h2 className="type-display-m text-brand-white mb-8">How Knee Recovery Is Built</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "REVEAL: Movement and Load",
                  desc: "Assessment looks at single-leg control, squat mechanics, foot strategy, hip loading, gait, and recent training changes.",
                },
                {
                  title: "RELEASE: Reduce Tissue Irritability",
                  desc: "When appropriate, manual therapy, TECAR, laser, or shockwave may help reduce barriers to loading and movement.",
                },
                {
                  title: "RESTORE: Rebuild Capacity",
                  desc: "Strength and control progressions rebuild tolerance through the hip, knee, calf, and foot.",
                },
                {
                  title: "REINFORCE: Return to Running or Sport",
                  desc: "Graduated exposure prepares the knee for repeated impact, directional changes, stairs, training, and sport demands.",
                },
              ].map((item) => (
                <div key={item.title} className="p-7 border border-brand-border bg-brand-black" style={{ borderRadius: "2px" }}>
                  <h3 className="font-body font-medium text-brand-white mb-3">{item.title}</h3>
                  <p className="type-body-m text-brand-muted">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ServicePageShell>
    </>
  );
}
