import type { Metadata } from "next";
import ServicePageShell from "@/components/ServicePageShell";

export const metadata: Metadata = {
  title: "Class IV Laser Therapy in Manhattan, NYC | YW Physical Therapy",
  description:
    "Class IV high-intensity laser therapy (photobiomodulation) in Midtown Manhattan. Reduces inflammation, accelerates healing, and relieves nerve pain near Penn Station.",
  alternates: { canonical: "https://ywphysicaltherapy.com/laser-therapy-nyc" },
  openGraph: {
    title: "Class IV Laser Therapy in Manhattan, NYC | YW Physical Therapy",
    description:
      "High-intensity laser therapy for inflammation, nerve pain, and accelerated tissue healing. Midtown Manhattan near Penn Station.",
    url: "https://ywphysicaltherapy.com/laser-therapy-nyc",
    siteName: "YW Physical Therapy",
    locale: "en_US",
    type: "website",
  },
};

const faqs = [
  {
    q: "Does laser therapy hurt?",
    a: "No. Class IV laser is completely painless — most patients feel only gentle warmth. You wear protective eyewear during treatment. The session is typically 6–12 minutes.",
  },
  {
    q: "How soon will I feel results?",
    a: "Many patients notice reduced pain and improved range of motion within 24–48 hours of the first session. For chronic inflammatory conditions, cumulative results build over 6–10 sessions.",
  },
  {
    q: "What&apos;s the difference between Class III and Class IV laser?",
    a: "Class III (cold) laser uses milliwatt power — limited tissue penetration, minimal biological effect in deep structures. Class IV uses watt-level power, penetrating 5–10cm into tissue to produce meaningful photobiomodulation effects where the pathology actually lives.",
  },
  {
    q: "Can laser therapy be used for nerve pain?",
    a: "Yes — photobiomodulation is particularly effective for nerve-related pain (radiculopathy, peripheral neuropathy). The light energy increases ATP production in nerve cells, improves local circulation, and reduces the neuroinflammation that drives neuropathic pain.",
  },
  {
    q: "Is laser covered by insurance?",
    a: "Class IV laser is available as a self-pay upgrade (often paired with radial shockwave, $60 combined). I&apos;m transparent about all pricing — see my Insurance & Pricing page.",
  },
];

export default function LaserTherapyNYCPage() {
  return (
    <ServicePageShell
      eyebrow="Release Phase · Human System Reset™"
      h1="Class IV Laser Therapy in Manhattan, NYC"
      heroTagline="Light energy. Deep healing."
      lead="High-intensity photobiomodulation (PBM) that delivers therapeutic light energy deep into tissue — reducing inflammation, accelerating cellular repair, and relieving pain without drugs or needles."
      phase="RELEASE"
      faqs={faqs}
      ctaHeading="Book a Laser Therapy Session"
    >
      {/* What is it */}
      <section className="py-24 bg-brand-surface border-y border-brand-border">
        <div className="max-w-5xl mx-auto px-6">
          <p className="type-label text-brand-gold mb-4">The Technology</p>
          <h2 className="type-display-m text-brand-white mb-6">What Is Class IV Laser Therapy?</h2>
          <div className="grid md:grid-cols-2 gap-8 font-body font-light text-brand-muted text-base leading-relaxed mb-10">
            <p>
              Class IV laser therapy — also called photobiomodulation (PBM) — delivers high-intensity
              light energy at specific wavelengths (808–980nm) that penetrate skin and soft tissue.
              The photons are absorbed by mitochondria in cells, stimulating ATP production and
              triggering a cascade of healing responses at the cellular level.
            </p>
            <p>
              Unlike low-level (Class III) laser, Class IV uses therapeutic watt-level power that
              reaches deep tissue — muscle, tendon, joint, and nerve. At YW Physical Therapy,
              laser is used as part of the RELEASE phase to reduce inflammation and prime tissue
              for manual work and neuromuscular retraining.
            </p>
          </div>

          {/* Mechanism steps */}
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { step: "01", title: "Photon Absorption", desc: "Light energy absorbed by cytochrome c oxidase in mitochondria" },
              { step: "02", title: "ATP Synthesis", desc: "Increased ATP production fuels cellular repair processes" },
              { step: "03", title: "Nitric Oxide Release", desc: "Vasodilation increases blood flow to injured area" },
              { step: "04", title: "Inflammation Reduction", desc: "Pro-inflammatory cytokines downregulated, healing accelerated" },
            ].map((m) => (
              <div key={m.step} className="p-6 border border-brand-border bg-brand-black" style={{ borderRadius: "2px" }}>
                <p className="type-label text-brand-gold/60 mb-2">{m.step}</p>
                <h3 className="font-body font-medium text-brand-white text-sm mb-2">{m.title}</h3>
                <p className="font-body font-light text-brand-muted text-xs leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions */}
      <section className="py-24 bg-brand-black">
        <div className="max-w-5xl mx-auto px-6">
          <p className="type-label text-brand-gold mb-4">Indications</p>
          <h2 className="type-display-m text-brand-white mb-6">Conditions Treated with Class IV Laser</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {[
              "Acute and chronic muscle strains",
              "Tendinopathy (all joints)",
              "Nerve pain / radiculopathy",
              "Peripheral neuropathy",
              "Post-surgical wound healing",
              "Carpal tunnel syndrome",
              "Arthritis pain",
              "Plantar fasciitis",
              "Shoulder impingement",
              "Disc-related back pain",
              "Post-fracture healing",
              "Chronic inflammatory conditions",
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

      {/* Combo with shockwave */}
      <section className="py-24 bg-brand-surface border-y border-brand-border">
        <div className="max-w-5xl mx-auto px-6">
          <p className="type-label text-brand-gold mb-4">Combination Therapy</p>
          <h2 className="type-display-m text-brand-white mb-6">Laser + Radial Shockwave: $60</h2>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4 font-body font-light text-brand-muted text-base leading-relaxed">
              <p>
                My most popular self-pay option combines Class IV laser with radial shockwave in
                a single 30-minute session. The laser reduces surface inflammation and prepares
                tissue for shockwave penetration — the two modalities work synergistically.
              </p>
              <p>
                This combination is particularly effective for desk workers with chronic muscle
                tension, athletes with recurring soft tissue issues, and anyone with persistent
                low-grade pain that comes and goes.
              </p>
            </div>
            <div className="p-8 border border-brand-gold/25 bg-brand-black" style={{ borderRadius: "2px" }}>
              <p className="type-label text-brand-gold mb-3">What&apos;s included</p>
              <ul className="space-y-3 font-body font-light text-brand-muted text-sm">
                {[
                  "Class IV laser — targeted to inflamed area",
                  "Radial shockwave — mid-depth tissue",
                  "Post-treatment movement assessment",
                  "Guidance on home care and activity modification",
                  "Integration with your ongoing PT plan",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-brand-gold shrink-0">—</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-5 border-t border-brand-border">
                <span className="font-display font-bold text-brand-white text-3xl">$60</span>
                <span className="type-body-m text-brand-muted ml-2">per session</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ServicePageShell>
  );
}
