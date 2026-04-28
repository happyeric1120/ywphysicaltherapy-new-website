import type { Metadata } from "next";
import ServicePageShell from "@/components/ServicePageShell";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Back Pain Physical Therapy NYC | Midtown Manhattan | YW Physical Therapy",
  description:
    "Chronic back pain in NYC? Dr. Wu uses full-body AI movement assessment to find the real mechanical driver — not just where it hurts. One-on-one PT near Penn Station.",
  openGraph: {
    title: "Back Pain Physical Therapy NYC | YW Physical Therapy",
    description:
      "Full-body assessment to find the root cause of your back pain. One-on-one PT in Midtown Manhattan near Penn Station.",
    url: "https://ywphysicaltherapy.com/back-pain-nyc",
  },
  alternates: { canonical: "https://ywphysicaltherapy.com/back-pain-nyc" },
};

const faqs = [
  {
    q: "How is your approach to back pain different from other NYC physical therapists?",
    a: "Dr. Wu begins with a full-body AI movement assessment to identify the actual mechanical driver of your back pain — which is often not where the pain appears. Only then does treatment begin.",
  },
  {
    q: "Can physical therapy help herniated disc or sciatica in NYC?",
    a: "Yes. Treatment addresses the mechanical load contributing to disc compression, surrounding muscle dysfunction, and nerve sensitization.",
  },
  {
    q: "Do I need an MRI before starting physical therapy?",
    a: "No. MRIs are often overused for back pain. Most imaging findings in adults over 40 are incidental and not causing symptoms.",
  },
  {
    q: "How many sessions does back pain treatment take?",
    a: "Most cases respond within 6–10 sessions when the correct mechanical driver is identified and treated.",
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

export default function BackPainNYCPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ServicePageShell
        eyebrow="Back Pain · Human System Reset™"
        h1="Back Pain Physical Therapy in Manhattan"
        heroTagline="You&apos;ve tried everything. You haven&apos;t tried this."
        lead="Chronic back pain rarely lives where it appears. Dr. Wu uses a full-body assessment to find the actual mechanical driver, then systematically removes barriers and rebuilds your movement — so results last."
        faqs={faqs}
        ctaHeading="Start Your Back Pain Assessment"
      >
      <section className="py-24 bg-brand-surface border-y border-brand-border">
        <div className="max-w-5xl mx-auto px-6">
          <p className="type-label text-brand-gold mb-4">Why Back Pain Keeps Coming Back</p>
          <h2 className="type-display-m text-brand-white mb-6">The Problem with Standard Back Pain Treatment</h2>
          <div className="grid md:grid-cols-2 gap-8 font-body font-light text-brand-muted text-base leading-relaxed mb-10">
            <p>
              Most back pain treatment follows a predictable cycle: rest, anti-inflammatories, heat,
              some stretches, maybe a cortisone shot. Pain improves temporarily. Then it comes back —
              often in the same place, sometimes worse.
            </p>
            <p>
              The reason is that these interventions treat the sensation of pain without addressing
              the mechanical forces that created it. The back becomes the symptom site for a movement
              problem that originates elsewhere — often in the hips, thoracic spine, or lower extremities.
              This is common in{" "}
              <Link href="/desk-worker-pain-nyc" className="text-brand-gold hover:text-brand-gold-light transition-colors">
                desk worker
              </Link>{" "}
              pain patterns.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                stat: "80%",
                label: "of back pain is mechanical",
                desc: "Not structural, not pathological — driven by movement patterns, load distribution, and muscle function.",
              },
              {
                stat: "60%+",
                label: "of MRI findings are incidental",
                desc: "Imaging often finds abnormalities; present in pain-free adults — not the cause of your pain.",
              },
              {
                stat: "Most",
                label: "cases respond within 6–10 sessions",
                desc: "When the right driver is identified and the system is treated correctly.",
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
          <h2 className="type-display-m text-brand-white mb-8">The Human System Reset™ Approach to Back Pain</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                phase: "REVEAL",
                title: "Find the True Driver",
                desc: "Full-body movement assessment using AI analysis. I identify which compensation patterns are loading your lumbar spine, and where those patterns originate — hip restriction, thoracic immobility, glute inhibition, or foot mechanics.",
                link: null,
              },
              {
                phase: "RELEASE",
                title: "Remove the Barriers",
                desc: "TECAR therapy for deep tissue healing, focused shockwave for fascial and muscle tissue, Class IV laser for neural inflammation, and manual therapy to restore joint mobility.",
                link: "/tecar-therapy-nyc",
              },
              {
                phase: "RESTORE",
                title: "Retrain Movement",
                desc: "Neuromuscular re-education to activate inhibited stabilizers (often the deep multifidus and transverse abdominis), correct load transfer patterns, and restore pain-free movement.",
                link: null,
              },
              {
                phase: "REINFORCE",
                title: "Build Lasting Resilience",
                desc: "Progressive loading, functional strengthening, and a home program so your spine can tolerate the demands of your life — and you don&apos;t need me forever.",
                link: null,
              },
            ].map((item) => (
              <div key={item.phase} className="p-7 border border-brand-border bg-brand-surface" style={{ borderRadius: "2px" }}>
                <p className="type-label text-brand-gold mb-2">{item.phase}</p>
                <h3 className="font-body font-medium text-brand-white mb-3">{item.title}</h3>
                <p className="type-body-m text-brand-muted mb-3">{item.desc}</p>
                {item.link && (
                  <Link href={item.link} className="font-mono text-[10px] text-brand-gold hover:text-brand-gold-light tracking-wider uppercase transition-colors">
                    Learn about this technology →
                  </Link>
                )}
              </div>
            ))}
          </div>
          <p className="type-body-m text-brand-muted mt-8 max-w-3xl">
            Back pain treatment may include{" "}
            <Link href="/tecar-therapy-nyc" className="text-brand-gold hover:text-brand-gold-light transition-colors">
              TECAR therapy
            </Link>
            ,{" "}
            <Link href="/shockwave-therapy-nyc" className="text-brand-gold hover:text-brand-gold-light transition-colors">
              focused shockwave
            </Link>
            , and{" "}
            <Link href="/laser-therapy-nyc" className="text-brand-gold hover:text-brand-gold-light transition-colors">
              Class IV laser
            </Link>{" "}
            when they fit your{" "}
            <Link href="/human-system-reset" className="text-brand-gold hover:text-brand-gold-light transition-colors">
              Human System Reset™
            </Link>{" "}
            plan.
          </p>
        </div>
      </section>

      <section className="py-24 bg-brand-surface border-y border-brand-border">
        <div className="max-w-5xl mx-auto px-6">
          <p className="type-label text-brand-gold mb-4">Conditions I Treat</p>
          <h2 className="type-display-m text-brand-white mb-8">Types of Back Pain I Address</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {[
              "Chronic low back pain",
              "Lumbar disc herniation",
              "Sciatica / lumbar radiculopathy",
              "Facet joint syndrome",
              "Sacroiliac joint dysfunction",
              "Lumbar spinal stenosis",
              "Post-surgical back pain",
              "Piriformis syndrome",
              "Thoracic back pain",
              "Acute back strain / sprain",
              "Spondylolisthesis",
              "Postural back pain",
            ].map((c) => (
              <div key={c} className="px-5 py-3 border border-brand-border bg-brand-black font-body font-light text-brand-muted text-sm" style={{ borderRadius: "2px" }}>
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>
      </ServicePageShell>
    </>
  );
}
