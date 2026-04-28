import type { Metadata } from "next";
import ServicePageShell from "@/components/ServicePageShell";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hip Pain Physical Therapy NYC | Midtown Manhattan | YW Physical Therapy",
  description:
    "Hip pain from sitting, running, or training? Dr. Wu identifies whether it's the hip itself, the glutes, or a movement pattern problem — and fixes the actual source. Near Penn Station.",
  alternates: { canonical: "https://ywphysicaltherapy.com/hip-pain-nyc" },
};

const faqs = [
  {
    q: "Can PT help with hip impingement?",
    a: "Yes. Conservative management can reduce the mechanical pinch by improving hip control, pelvic positioning, glute activation, and movement patterns that overload the front of the hip.",
  },
  {
    q: "Is my hip pain from sitting all day?",
    a: "Often yes. Desk workers commonly develop hip flexor stiffness, glute inhibition, and poor load transfer from the spine to the hip, which can create pain with walking, stairs, running, or training.",
  },
  {
    q: "Do I need a hip replacement?",
    a: "Not necessarily. Many cases improve with movement-based physical therapy that identifies whether pain is coming from the hip joint, glutes, lumbar spine, or a compensation pattern.",
  },
  {
    q: "How long until hip pain improves?",
    a: "Most cases improve within 4–8 sessions when the correct driver is identified and treated consistently.",
  },
];

export default function HipPainNYCPage() {
  return (
    <ServicePageShell
      eyebrow="Hip Pain · Human System Reset™"
      h1="Hip Pain Physical Therapy in NYC"
      heroTagline="Most hip pain isn&apos;t a hip problem. It&apos;s a movement problem."
      lead="Hip pain can come from the joint, the glutes, the back, or the way your body transfers load. Dr. Wu identifies the actual source, then rebuilds the movement pattern so the pain does not keep returning."
      faqs={faqs}
      ctaHeading="Book Your Hip Pain Assessment"
    >
      <section className="py-24 bg-brand-surface border-y border-brand-border">
        <div className="max-w-5xl mx-auto px-6">
          <p className="type-label text-brand-gold mb-4">Why Hip Pain Keeps Coming Back</p>
          <h2 className="type-display-m text-brand-white mb-6">The Problem with Treating the Hip in Isolation</h2>
          <div className="grid md:grid-cols-2 gap-8 font-body font-light text-brand-muted text-base leading-relaxed mb-10">
            <p>
              Hip pain is often blamed on tight hip flexors, weak glutes, or arthritis. Those may be
              part of the picture, but treating them in isolation rarely works when the real driver is
              how your pelvis, spine, and leg coordinate under load.
            </p>
            <p>
              Dr. Wu looks for the movement pattern behind the pain: where the hip loses motion,
              where the glutes fail to stabilize, and whether your symptoms are being driven by your
              back, training, or{" "}
              <Link href="/desk-worker-pain-nyc" className="text-brand-gold hover:text-brand-gold-light transition-colors">
                desk worker pain
              </Link>{" "}
              patterns.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                stat: "30%+",
                label: "of desk workers may show hip impingement patterns",
                desc: "Sitting and limited hip extension can contribute to anterior hip compression and poor load transfer.",
              },
              {
                stat: "60%+",
                label: "of chronic hip pain cases involve glute inhibition",
                desc: "When the glutes do not stabilize well, the hip joint, IT band, and lower back absorb more stress.",
              },
              {
                stat: "4–8",
                label: "sessions for many cases to improve",
                desc: "When the correct driver is identified, hip pain often responds quickly to targeted treatment.",
              },
            ].map((s) => (
              <div key={s.stat} className="p-8 border border-brand-border bg-brand-black text-center" style={{ borderRadius: "2px" }}>
                <p className="font-display font-black text-brand-gold mb-1" style={{ fontSize: "clamp(32px, 4vw, 48px)" }}>{s.stat}</p>
                <p className="type-label text-brand-white mb-3">{s.label}</p>
                <p className="type-body-m text-brand-muted">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-black">
        <div className="max-w-5xl mx-auto px-6">
          <p className="type-label text-brand-gold mb-4">How I Treat It</p>
          <h2 className="type-display-m text-brand-white mb-8">The Human System Reset™ Approach to Hip Pain</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                phase: "REVEAL",
                title: "Find the True Driver",
                desc: "AI-guided movement assessment identifies whether your hip pain is driven by joint restriction, glute inhibition, lumbar referral, gait mechanics, or training load.",
              },
              {
                phase: "RELEASE",
                title: "Remove the Barriers",
                desc: "Manual therapy, TECAR, and focused shockwave are used when soft tissue, tendon, or joint irritation is limiting normal hip mechanics.",
              },
              {
                phase: "RESTORE",
                title: "Retrain Hip Control",
                desc: "Targeted neuromuscular work restores glute activation, pelvic control, and pain-free hip motion during walking, stairs, squats, and running.",
              },
              {
                phase: "REINFORCE",
                title: "Build Lasting Capacity",
                desc: "Progressive loading and functional strength work prepare your hip for the real demands of desk work, training, sport, and daily life.",
              },
            ].map((item) => (
              <div key={item.phase} className="p-7 border border-brand-border bg-brand-surface" style={{ borderRadius: "2px" }}>
                <p className="type-label text-brand-gold mb-2">{item.phase}</p>
                <h3 className="font-body font-medium text-brand-white mb-3">{item.title}</h3>
                <p className="type-body-m text-brand-muted">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="type-body-m text-brand-muted mt-8 max-w-3xl">
            Hip pain often overlaps with{" "}
            <Link href="/back-pain-nyc" className="text-brand-gold hover:text-brand-gold-light transition-colors">
              back pain
            </Link>{" "}
            and may benefit from{" "}
            <Link href="/shockwave-therapy-nyc" className="text-brand-gold hover:text-brand-gold-light transition-colors">
              shockwave therapy
            </Link>{" "}
            as part of the{" "}
            <Link href="/human-system-reset" className="text-brand-gold hover:text-brand-gold-light transition-colors">
              Human System Reset™
            </Link>{" "}
            method.
          </p>
        </div>
      </section>

      <section className="py-24 bg-brand-surface border-y border-brand-border">
        <div className="max-w-5xl mx-auto px-6">
          <p className="type-label text-brand-gold mb-4">Conditions I Treat</p>
          <h2 className="type-display-m text-brand-white mb-8">Types of Hip Pain I Address</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {[
              "Hip flexor strain",
              "IT band syndrome",
              "Greater trochanteric bursitis",
              "Hip impingement (FAI)",
              "Piriformis syndrome",
              "Gluteal tendinopathy",
              "SI joint dysfunction",
              "Hip labral tear (conservative)",
              "Groin strain",
              "Post-hip replacement PT",
            ].map((c) => (
              <div key={c} className="px-5 py-3 border border-brand-border bg-brand-black font-body font-light text-brand-muted text-sm" style={{ borderRadius: "2px" }}>
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>
    </ServicePageShell>
  );
}
