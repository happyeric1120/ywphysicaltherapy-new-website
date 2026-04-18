import type { Metadata } from "next";
import ServicePageShell from "@/components/ServicePageShell";

export const metadata: Metadata = {
  title: "Sports Injury Physical Therapy in Manhattan | YW Physical Therapy",
  description:
    "Sports injury rehabilitation and performance optimization in Midtown Manhattan. Dr. Wu identifies movement inefficiencies before they become injuries — and restores function faster when they do.",
  alternates: { canonical: "https://ywphysicaltherapy.com/sports-injury-nyc" },
  openGraph: {
    title: "Sports Injury Physical Therapy in Manhattan | YW Physical Therapy",
    description:
      "Rehab and performance PT for athletes in Midtown Manhattan near Penn Station.",
    url: "https://ywphysicaltherapy.com/sports-injury-nyc",
    siteName: "YW Physical Therapy",
    locale: "en_US",
    type: "website",
  },
};

const faqs = [
  {
    q: "Can I train while doing PT?",
    a: "In most cases, yes — with appropriate load management. I don&apos;t believe in full rest unless tissue acuity requires it. I work with your training schedule, modifying what needs to be modified while keeping you active.",
  },
  {
    q: "Do you work with professional athletes?",
    a: "Yes. I work with athletes at all levels — from weekend warriors to competitive and professional athletes. The tools and methodology are the same; the performance targets and timelines differ.",
  },
  {
    q: "What if I have a competition coming up?",
    a: "Tell me upfront. I&apos;ll build a timeline-aware plan that prioritizes return to performance for your event, while managing tissue load to avoid making the injury worse.",
  },
  {
    q: "I keep getting the same injury. How do you break the cycle?",
    a: "Recurring injuries almost always indicate an unresolved movement pattern — a compensation that puts the same tissue under the same load repeatedly. The REVEAL phase maps this pattern precisely so I can address the actual driver.",
  },
];

export default function SportsInjuryNYCPage() {
  return (
    <ServicePageShell
      eyebrow="Sports Injury · Human System Reset™"
      h1="Sports Injury Physical Therapy in Manhattan"
      heroTagline="Train hard. Recover smarter."
      lead="You already invest in performance. I identify the movement inefficiencies quietly limiting you — and restore function faster when injuries happen — so you stay in the game, not on the sideline."
      faqs={faqs}
      ctaHeading="Book Your Performance Assessment"
    >
      <section className="py-24 bg-brand-surface border-y border-brand-border">
        <div className="max-w-5xl mx-auto px-6">
          <p className="type-label text-brand-gold mb-4">The Philosophy</p>
          <h2 className="type-display-m text-brand-white mb-6">Performance and Recovery Are the Same Problem</h2>
          <div className="grid md:grid-cols-2 gap-8 font-body font-light text-brand-muted text-base leading-relaxed">
            <p>
              Most sports injuries aren&apos;t accidents. They&apos;re the predictable result of load exceeding
              tissue capacity — usually because a movement inefficiency has been silently accumulating
              stress on a specific structure until it fails. The pain is the last event in a long sequence.
            </p>
            <p>
              I work with athletes in two modes: reactive (treating the injury) and proactive (identifying
              and correcting the pattern before it becomes one). Both use the same assessment technology
              and the same systematic protocol.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-black">
        <div className="max-w-5xl mx-auto px-6">
          <p className="type-label text-brand-gold mb-4">Conditions I Treat</p>
          <h2 className="type-display-m text-brand-white mb-8">Sports Injuries I Address</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {[
              "ACL tear / post-surgical rehab",
              "Meniscus injury",
              "Ankle sprains (acute and chronic)",
              "Hamstring strains and tears",
              "Shoulder labrum and rotator cuff",
              "Tennis / golfer&apos;s elbow",
              "Patellar tendinopathy",
              "Achilles tendinopathy",
              "IT band syndrome",
              "Stress fractures",
              "Hip flexor strains",
              "Recurrent soft tissue injuries",
            ].map((c) => (
              <div key={c} className="px-5 py-3 border border-brand-border bg-brand-surface font-body font-light text-brand-muted text-sm" style={{ borderRadius: "2px" }}>
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-surface border-y border-brand-border">
        <div className="max-w-5xl mx-auto px-6">
          <p className="type-label text-brand-gold mb-4">Return to Sport</p>
          <h2 className="type-display-m text-brand-white mb-8">My Sports Rehab Protocol</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Injury-Specific Load Management",
                desc: "I calculate tissue stress tolerance and design a loading progression that heals the injury without deconditioning the athlete. No arbitrary rest timelines.",
              },
              {
                title: "Advanced Tissue Healing",
                desc: "Focused shockwave for tendon regeneration, TECAR for muscle healing, Class IV laser for neural pain and inflammation — deployed strategically, not randomly.",
              },
              {
                title: "Sport-Specific Movement Retraining",
                desc: "I retrain the movement patterns specific to your sport — not generic rehab exercises. The final phase of rehab should look like the first phase of performance.",
              },
              {
                title: "Strength & Power Restoration",
                desc: "Compex EMS for neuromuscular re-education and high-intensity strength phases. TRX and smart gym for functional loaded movement. Benchmarked against sport-specific demands.",
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
  );
}
