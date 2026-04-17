import type { Metadata } from "next";
import ServicePageShell from "@/components/ServicePageShell";

export const metadata: Metadata = {
  title: "Physical Therapy for Desk Workers in NYC | YW Physical Therapy",
  description:
    "Neck, back, shoulder, and hip pain from sitting all day — treated at the root in Midtown Manhattan. Dr. Wu identifies the patterns behind desk-related pain and fixes them in sessions, not months.",
  alternates: { canonical: "https://ywphysicaltherapy.com/desk-worker-pain-nyc" },
  openGraph: {
    title: "Physical Therapy for Desk Workers in NYC | YW Physical Therapy",
    description:
      "Root-cause PT for desk-related neck, back, and shoulder pain. Midtown Manhattan near Penn Station.",
    url: "https://ywphysicaltherapy.com/desk-worker-pain-nyc",
    siteName: "YW Physical Therapy",
    locale: "en_US",
    type: "website",
  },
};

const faqs = [
  {
    q: "I have bought a standing desk and done stretching. Why am I still in pain?",
    a: "Because standing desks and stretching address posture, not the underlying movement dysfunction. If your thoracic spine doesn&apos;t extend, your hip flexors won&apos;t lengthen, and your deep stabilizers aren&apos;t activating — standing up just loads the same dysfunctional system differently.",
  },
  {
    q: "How many sessions will I need?",
    a: "Most desk workers with straightforward pain patterns see meaningful improvement in 4–8 sessions. Complex cases with multiple affected regions take longer. We set clear benchmarks so you always know where you are in the process.",
  },
  {
    q: "Can you help me with my workstation setup?",
    a: "Yes. Ergonomic assessment is part of the process. We look at monitor height, keyboard position, chair setup, and how you use your devices — and make specific recommendations based on your body mechanics, not generic checklists.",
  },
  {
    q: "I travel for work and can&apos;t come in consistently. Can you still help?",
    a: "Yes. We build a substantial home program into your care so you can maintain progress between sessions. Dr. Wu also provides specific guidance for travel (hotel rooms, airplanes, client sites).",
  },
];

export default function DeskWorkerPainNYCPage() {
  return (
    <ServicePageShell
      eyebrow="Desk Worker Pain · Human System Reset™"
      h1="Physical Therapy for Desk Workers in NYC"
      heroTagline="Your chair isn&apos;t the problem. Your movement pattern is."
      lead="Neck, back, shoulders, hips — desk work loads your body the same way, every day, until something breaks down. We find where the pattern is failing and fix it at the source — in sessions, not months."
      faqs={faqs}
      ctaHeading="Book Your Desk Worker Assessment"
    >
      <section className="py-24 bg-brand-surface border-y border-brand-border">
        <div className="max-w-5xl mx-auto px-6">
          <p className="type-label text-brand-gold mb-4">The Pattern</p>
          <h2 className="type-display-m text-brand-white mb-6">How Desk Work Breaks Down Your Body</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                area: "Cervical Spine",
                desc: "Forward head posture compresses the lower cervical discs. For every inch your head moves forward of neutral, the effective load on the cervical spine increases by 10+ pounds.",
              },
              {
                area: "Thoracic Spine",
                desc: "Thoracic kyphosis becomes fixed. When the mid-back can&apos;t extend, the neck and lower back compensate — creating compressive load in both areas.",
              },
              {
                area: "Hip Flexors & Glutes",
                desc: "Prolonged sitting shortens the hip flexors and neurologically inhibits the glutes — disrupting the biomechanics of every step you take and every load you lift.",
              },
            ].map((item) => (
              <div key={item.area} className="p-7 border border-brand-border bg-brand-black" style={{ borderRadius: "2px" }}>
                <p className="type-label text-brand-gold mb-3">{item.area}</p>
                <p className="type-body-m text-brand-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-black">
        <div className="max-w-5xl mx-auto px-6">
          <p className="type-label text-brand-gold mb-4">What We Fix</p>
          <h2 className="type-display-m text-brand-white mb-8">Desk Worker Conditions We Treat</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {[
              "Chronic neck pain",
              "Upper back / thoracic pain",
              "Low back pain",
              "Shoulder and scapular pain",
              "Cervicogenic headaches",
              "Wrist and forearm pain",
              "Hip flexor tightness",
              "Glute inhibition",
              "Carpal tunnel symptoms",
              "Eye strain headaches",
              "Sciatic nerve irritation",
              "RSI (repetitive strain injury)",
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
          <p className="type-label text-brand-gold mb-4">The Solution</p>
          <h2 className="type-display-m text-brand-white mb-8">Why This Works When Stretching Doesn&apos;t</h2>
          <div className="grid md:grid-cols-2 gap-8 font-body font-light text-brand-muted text-base leading-relaxed">
            <p>
              Stretching and ergonomic adjustments address symptoms. The Human System Reset™ method
              addresses the underlying movement dysfunction — the specific restriction patterns, muscle
              inhibitions, and load transfer failures that desk work creates over years of repetition.
            </p>
            <p>
              We use TECAR therapy and manual work to restore mobility in the restricted areas, then
              systematically retrain the stabilizers that have stopped working. The result is a body
              that can tolerate desk work without accumulating damage — not just one that hurts less
              for a few days after treatment.
            </p>
          </div>
        </div>
      </section>
    </ServicePageShell>
  );
}
