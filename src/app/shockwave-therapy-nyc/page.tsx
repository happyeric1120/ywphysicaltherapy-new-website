import type { Metadata } from "next";
import ServicePageShell from "@/components/ServicePageShell";

export const metadata: Metadata = {
  title: "Shockwave Therapy Manhattan, NYC | YW Physical Therapy",
  description:
    "Focused and radial shockwave therapy in Midtown Manhattan near Penn Station. Effective for plantar fasciitis, Achilles tendinopathy, tennis elbow, and chronic tendon pain. Book today.",
  alternates: { canonical: "https://ywphysicaltherapy.com/shockwave-therapy-nyc" },
  openGraph: {
    title: "Shockwave Therapy in Manhattan, NYC | YW Physical Therapy",
    description:
      "Focused and radial shockwave therapy for stubborn tendon pain and chronic injuries. Midtown Manhattan near Penn Station.",
    url: "https://ywphysicaltherapy.com/shockwave-therapy-nyc",
    siteName: "YW Physical Therapy",
    locale: "en_US",
    type: "website",
  },
};

const faqs = [
  {
    q: "Does shockwave therapy hurt?",
    a: "Most people feel a strong tapping or pressure sensation — intense over sensitive spots, but manageable. Dr. Wu always adjusts energy levels to your comfort. You stay in control throughout.",
  },
  {
    q: "How many sessions will I need?",
    a: "Most tendon conditions respond within 3–6 sessions, typically spaced one week apart. The exact number depends on how long the problem has been present and how your tissue responds.",
  },
  {
    q: "Is there downtime after treatment?",
    a: "Most people return to normal activity the same day. Mild soreness for 24–48 hours is common and expected — it's a sign the tissue is responding. Dr. Wu will guide you on activity modification.",
  },
  {
    q: "Is shockwave covered by insurance?",
    a: "Focused shockwave is offered as a self-pay advanced therapy ($150/session, or $60 for radial shockwave + laser). If you have out-of-network benefits, I can integrate shockwave as part of your session.",
  },
  {
    q: "What's the difference between focused and radial shockwave?",
    a: "Radial shockwave spreads energy outward — best for larger, more superficial areas. Focused shockwave concentrates energy at a precise depth, reaching tissues other treatments can't. I often use both strategically in the same session.",
  },
];

export default function ShockwaveTherapyNYCPage() {
  return (
    <ServicePageShell
      eyebrow="Release Phase · Human System Reset™"
      h1="Shockwave Therapy in Manhattan, NYC"
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
              RELEASE phase of the Human System Reset™ method — not as a standalone add-on, but as
              a precisely chosen tool for specific tissue layers and conditions.
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
                <li className="flex gap-2"><span className="text-brand-gold shrink-0">—</span> Often combined with Class IV Laser ($60/session)</li>
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
  );
}
