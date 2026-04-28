import type { Metadata } from "next";
import ServicePageShell from "@/components/ServicePageShell";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Shockwave Therapy NYC | Focused & Radial | YW Physical Therapy Near Penn Station",
  description:
    "Focused and radial shockwave therapy in Midtown Manhattan. Research-backed treatment for tendon pain, plantar fasciitis, calcific tendinitis, and chronic muscle issues that haven't responded to standard care.",
  openGraph: {
    title: "Shockwave Therapy NYC | YW Physical Therapy",
    description:
      "Focused & radial shockwave in Midtown Manhattan. For tendon pain, plantar fasciitis, and chronic conditions that haven't responded to standard PT.",
    url: "https://ywphysicaltherapy.com/shockwave-therapy-nyc",
  },
  alternates: { canonical: "https://ywphysicaltherapy.com/shockwave-therapy-nyc" },
};

const faqs = [
  {
    q: "Does shockwave therapy hurt?",
    a: "Most people feel a strong tapping or pressure sensation — intense over sensitive spots, but manageable. Dr. Wu always adjusts energy levels to your comfort. You stay in control throughout.",
  },
  {
    q: "How many shockwave therapy sessions will I need?",
    a: "Most tendon conditions respond within 3–6 sessions, typically spaced one week apart.",
  },
  {
    q: "Is shockwave therapy covered by insurance in NYC?",
    a: "Focused shockwave is offered as a self-pay advanced therapy ($150/session, or $60 for radial shockwave + laser). Out-of-network benefits may apply.",
  },
  {
    q: "What conditions does shockwave therapy treat?",
    a: "Shockwave is effective for plantar fasciitis, Achilles tendinopathy, patellar tendinopathy, tennis elbow, calcific shoulder tendinitis, hip tendon pain, and chronic low back pain.",
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

export default function ShockwaveTherapyNYCPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ServicePageShell
        eyebrow="Release Phase · Human System Reset™"
        h1="Shockwave Therapy NYC — Midtown Manhattan"
        heroTagline="When everything else has failed, shockwave often delivers."
        lead="Non-invasive, research-backed sound wave therapy that breaks through stubborn tendon pain, scar tissue, and deep inflammation — delivering results that stretching and massage alone can't reach."
        phase="RELEASE"
        faqs={faqs}
        ctaHeading="Start with a Shockwave Consultation"
      >
      {/* What is it */}
      <section className="py-24 bg-brand-surface border-y border-brand-border">
        <div className="max-w-5xl mx-auto px-6">
          <p className="type-label text-brand-gold mb-4">The Therapy</p>
          <h2 className="type-display-m text-brand-white mb-6">What Is Shockwave Therapy?</h2>
          <div className="grid md:grid-cols-2 gap-8 font-body font-light text-brand-muted text-base leading-relaxed mb-10">
            <p>
              Shockwave therapy uses high-energy acoustic waves delivered precisely into injured
              tissue. The waves create controlled micro-stress that triggers the body&apos;s natural
              repair response — breaking down scar tissue, improving circulation, and reducing
              chronic inflammation.
            </p>
            <p>
              At YW Physical Therapy, Dr. Wu uses both focused and radial shockwave as part of the
              RELEASE phase of the{" "}
              <Link href="/human-system-reset" className="text-brand-gold hover:text-brand-gold-light transition-colors">
                Human System Reset™ method
              </Link>{" "}
              — not as a standalone add-on, but as a precisely chosen tool for specific tissue
              layers and conditions.
            </p>
          </div>

          {/* Focused vs Radial */}
          <div className="grid md:grid-cols-2 gap-5">
            <div className="p-8 border border-brand-border bg-brand-black" style={{ borderRadius: "2px" }}>
              <p className="type-label text-cyan-400/80 mb-3">Radial Shockwave (RSWT)</p>
              <h3 className="font-display font-bold text-brand-white text-xl mb-4">Surface to Mid-Depth</h3>
              <ul className="space-y-2 font-body font-light text-brand-muted text-sm">
                <li className="flex gap-2"><span className="text-brand-gold shrink-0">—</span> Energy spreads outward like ripples</li>
                <li className="flex gap-2"><span className="text-brand-gold shrink-0">—</span> Best for larger, more superficial areas</li>
                <li className="flex gap-2"><span className="text-brand-gold shrink-0">—</span> Great for muscle tension and mild tendon issues</li>
                <li className="flex gap-2">
                  <span className="text-brand-gold shrink-0">—</span>
                  Often combined with{" "}
                  <Link href="/laser-therapy-nyc" className="text-brand-gold hover:text-brand-gold-light transition-colors">
                    Class IV Laser
                  </Link>{" "}
                  ($60/session)
                </li>
              </ul>
            </div>
            <div className="p-8 border border-cyan-400/30 bg-brand-black" style={{ borderRadius: "2px" }}>
              <p className="type-label text-cyan-400 mb-3">Focused Shockwave (FSWT)</p>
              <h3 className="font-display font-bold text-brand-white text-xl mb-4">Deep Tissue Precision</h3>
              <ul className="space-y-2 font-body font-light text-brand-muted text-sm">
                <li className="flex gap-2"><span className="text-cyan-400 shrink-0">—</span> Energy focused at a precise depth</li>
                <li className="flex gap-2"><span className="text-cyan-400 shrink-0">—</span> Reaches tissues other treatments can&apos;t access</li>
                <li className="flex gap-2"><span className="text-cyan-400 shrink-0">—</span> Ideal for chronic, deep, or calcified conditions</li>
                <li className="flex gap-2"><span className="text-cyan-400 shrink-0">—</span> Strongest evidence for long-term tissue regeneration ($150/session)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions */}
      <section className="py-24 bg-brand-black">
        <div className="max-w-5xl mx-auto px-6">
          <p className="type-label text-brand-gold mb-4">Indications</p>
          <h2 className="type-display-m text-brand-white mb-6">Conditions Treated with Shockwave</h2>
          <p className="type-body-l text-brand-muted mb-10 max-w-2xl">
            Shockwave is particularly effective for load-sensitive, chronic, and tendon-related conditions
            that haven&apos;t responded to standard care.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {[
              "Plantar fasciitis / heel pain",
              "Achilles tendinopathy",
              "Patellar tendinopathy (jumper&apos;s knee)",
              "Tennis elbow / golfer&apos;s elbow",
              "Calcific shoulder tendinitis",
              "Hip / gluteal tendon pain",
              "Recurrent muscle trigger points",
              "Post-surgical scar tissue",
              "Shin splints (medial tibial stress)",
              "Hamstring tendinopathy",
              "Rotator cuff tendinopathy",
              "Chronic low back pain",
            ].map((condition) => (
              <div
                key={condition}
                className="px-5 py-3 border border-brand-border bg-brand-surface font-body font-light text-brand-muted text-sm"
                style={{ borderRadius: "2px" }}
              >
                {condition}
              </div>
            ))}
          </div>
          <p className="type-body-m text-brand-muted mt-8 max-w-2xl">
            Back pain that won&apos;t resolve? Dr. Wu may combine shockwave with{" "}
            <Link href="/tecar-therapy-nyc" className="text-brand-gold hover:text-brand-gold-light transition-colors">
              TECAR therapy
            </Link>{" "}
            and movement retraining as part of a{" "}
            <Link href="/back-pain-nyc" className="text-brand-gold hover:text-brand-gold-light transition-colors">
              back pain physical therapy
            </Link>{" "}
            plan.
          </p>
        </div>
      </section>

      {/* Why Dr. Wu */}
      <section className="py-24 bg-brand-surface border-y border-brand-border">
        <div className="max-w-5xl mx-auto px-6">
          <p className="type-label text-brand-gold mb-4">The Difference</p>
          <h2 className="type-display-m text-brand-white mb-8">Why Shockwave with Dr. Wu</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Root-Cause First",
                desc: "I use AI movement analysis to identify why the tissue is being overloaded before treating it — so shockwave addresses the right location for the right reason.",
              },
              {
                title: "Strategic Combination",
                desc: "Shockwave is paired with TECAR, laser, or manual therapy in the same session when deeper layers require different tools. Not random add-ons — each choice is deliberate.",
              },
              {
                title: "One-on-One, Always",
                desc: "Dr. Wu administers every treatment personally. No aides, no turnover. He monitors tissue response in real time and adjusts energy, focus, and duration accordingly.",
              },
              {
                title: "Followed by Retraining",
                desc: "After RELEASE, I move into RESTORE — so the shockwave gains are reinforced by corrective movement, not just repeated until the symptoms return.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-7 border border-brand-border bg-brand-black"
                style={{ borderRadius: "2px" }}
              >
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
