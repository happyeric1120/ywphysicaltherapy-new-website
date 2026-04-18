import type { Metadata } from "next";
import ServicePageShell from "@/components/ServicePageShell";

export const metadata: Metadata = {
  title: "Compex EMS Therapy in Manhattan, NYC | YW Physical Therapy",
  description:
    "Compex electrical muscle stimulation (EMS) therapy in Midtown Manhattan. Muscle re-education, strength training, and recovery for injury rehabilitation and performance. Near Penn Station.",
  alternates: { canonical: "https://ywphysicaltherapy.com/compex-ems-nyc" },
  openGraph: {
    title: "Compex EMS Therapy in Manhattan, NYC | YW Physical Therapy",
    description:
      "Medical-grade electrical muscle stimulation for neuromuscular re-education and strength. Midtown Manhattan near Penn Station.",
    url: "https://ywphysicaltherapy.com/compex-ems-nyc",
    siteName: "YW Physical Therapy",
    locale: "en_US",
    type: "website",
  },
};

const faqs = [
  {
    q: "Does EMS hurt?",
    a: "EMS produces a strong tingling and muscle contraction sensation. Intensity is always adjusted to your comfort and tolerance. During re-education programs, it feels like a rhythmic pulse. Higher-intensity power programs are more intense but still tolerable.",
  },
  {
    q: "How is Compex EMS different from a TENS unit?",
    a: "TENS units target sensory nerves for pain relief. Compex EMS targets motor nerves to produce actual muscle contractions — stimulating the same fibers that voluntary exercise would engage. It&apos;s a true rehabilitation and performance tool, not just a pain relief device.",
  },
  {
    q: "Can EMS help with muscle atrophy after surgery?",
    a: "Yes — this is one of EMS&apos;s most evidence-supported applications. Post-surgical inhibition causes rapid muscle loss. Compex EMS activates the muscle safely while voluntary exercise is limited, dramatically reducing atrophy and accelerating return to function.",
  },
  {
    q: "How many EMS sessions do I need?",
    a: "This depends entirely on your goal. For re-education after injury or surgery: 8–12 sessions. For strength augmentation in athletes: ongoing as part of a performance program. I&apos;ll build a specific EMS protocol into your Human System Reset™ plan.",
  },
];

export default function CompexEMSNYCPage() {
  return (
    <ServicePageShell
      eyebrow="Restore & Reinforce Phase · Human System Reset™"
      h1="Compex EMS Therapy in Manhattan, NYC"
      heroTagline="Your muscles can&apos;t rebuild what they can&apos;t activate."
      lead="Medical-grade electrical muscle stimulation that recruits motor neurons directly — re-educating dormant muscles after injury, accelerating strength gains, and bridging the gap between tissue healing and functional recovery."
      faqs={faqs}
      ctaHeading="Add Compex EMS to Your Recovery Plan"
    >
      <section className="py-24 bg-brand-surface border-y border-brand-border">
        <div className="max-w-5xl mx-auto px-6">
          <p className="type-label text-brand-gold mb-4">The Technology</p>
          <h2 className="type-display-m text-brand-white mb-6">What Is Compex EMS?</h2>
          <div className="grid md:grid-cols-2 gap-8 font-body font-light text-brand-muted text-base leading-relaxed mb-10">
            <p>
              Compex is a medical-grade electrical muscle stimulation (EMS) system used in both
              rehabilitation and elite sports performance. Using precisely calibrated electrical
              impulses, it stimulates motor neurons to produce controlled muscle contractions —
              independent of voluntary effort from the patient.
            </p>
            <p>
              At YW Physical Therapy, Compex is used across two phases of the Human System Reset™:
              the RESTORE phase (re-education and activation) and the REINFORCE phase (strength
              and power development). The program selected for each patient differs based on their
              clinical goal and tissue readiness.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <div className="p-8 border border-emerald-400/30 bg-brand-black" style={{ borderRadius: "2px" }}>
              <p className="type-label text-emerald-400 mb-3">RESTORE Phase</p>
              <h3 className="font-display font-bold text-brand-white text-lg mb-3">Neuromuscular Re-Education</h3>
              <p className="type-body-m text-brand-muted mb-4">
                After injury, inhibition, or prolonged disuse, muscles lose their ability to fire
                on command. EMS bypasses the inhibited neural pathway and directly activates the
                muscle — reestablishing the motor pattern.
              </p>
              <ul className="space-y-2 font-body font-light text-brand-muted text-sm">
                <li className="flex gap-2"><span className="text-emerald-400 shrink-0">—</span> Post-surgical muscle activation</li>
                <li className="flex gap-2"><span className="text-emerald-400 shrink-0">—</span> Atrophy prevention during immobilization</li>
                <li className="flex gap-2"><span className="text-emerald-400 shrink-0">—</span> Recruitment of inhibited muscle groups</li>
              </ul>
            </div>
            <div className="p-8 border border-amber-400/30 bg-brand-black" style={{ borderRadius: "2px" }}>
              <p className="type-label text-amber-400 mb-3">REINFORCE Phase</p>
              <h3 className="font-display font-bold text-brand-white text-lg mb-3">Strength & Power Development</h3>
              <p className="type-body-m text-brand-muted mb-4">
                At higher intensities, Compex EMS recruits high-threshold motor units that are
                difficult to access with voluntary exercise alone — augmenting strength gains and
                building tissue capacity.
              </p>
              <ul className="space-y-2 font-body font-light text-brand-muted text-sm">
                <li className="flex gap-2"><span className="text-amber-400 shrink-0">—</span> Athletes: force and power development</li>
                <li className="flex gap-2"><span className="text-amber-400 shrink-0">—</span> Late-stage rehab strength bridging</li>
                <li className="flex gap-2"><span className="text-amber-400 shrink-0">—</span> Endurance and recovery programming</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-black">
        <div className="max-w-5xl mx-auto px-6">
          <p className="type-label text-brand-gold mb-4">Clinical Applications</p>
          <h2 className="type-display-m text-brand-white mb-6">When Compex EMS Is Used</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {[
              "Post-knee surgery (ACL, meniscus)",
              "Quadriceps inhibition",
              "Glute activation deficits",
              "Shoulder rotator cuff rehab",
              "Core muscle activation",
              "Post-ankle sprain recovery",
              "Chronic muscle underperformance",
              "Athletic strength augmentation",
              "Sedentary muscle deconditioning",
              "Edema and lymphatic drainage",
              "Capillary blood flow improvement",
              "Warm-up before training",
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
    </ServicePageShell>
  );
}
