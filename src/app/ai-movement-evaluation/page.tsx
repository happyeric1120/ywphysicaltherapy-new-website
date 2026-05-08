import type { Metadata } from "next";
import Link from "next/link";
import ServicePageShell from "@/components/ServicePageShell";

export const metadata: Metadata = {
  title: "AI Movement Evaluation NYC | YW Physical Therapy Midtown Manhattan",
  description:
    "AI-assisted movement evaluation in NYC to help identify compensation patterns, mobility limits, and movement asymmetries. One-on-one care in Midtown Manhattan.",
  alternates: { canonical: "https://ywphysicaltherapy.com/ai-movement-evaluation" },
  openGraph: {
    title: "AI Movement Evaluation NYC | YW Physical Therapy",
    description:
      "AI-assisted movement evaluation in Midtown Manhattan for chronic tension, posture issues, and movement optimization.",
    url: "https://ywphysicaltherapy.com/ai-movement-evaluation",
    siteName: "YW Physical Therapy",
    locale: "en_US",
    type: "website",
  },
};

const faqs = [
  {
    q: "What is AI-assisted movement evaluation?",
    a: "AI-assisted movement evaluation uses motion analysis tools to help identify visible asymmetries, compensation patterns, and movement limitations. Dr. Wu interprets the findings clinically and uses them to guide care.",
  },
  {
    q: "Does AI replace the physical therapist?",
    a: "No. AI supports observation and tracking, but clinical reasoning, hands-on assessment, diagnosis, and treatment decisions are made by Dr. Wu.",
  },
  {
    q: "What can AI help analyze?",
    a: "AI can help screen movement quality, posture, range of motion, asymmetry, control, and compensation patterns during selected movements.",
  },
  {
    q: "Is AI movement evaluation useful for desk workers?",
    a: "Yes. Desk workers often develop subtle compensation patterns around the neck, shoulders, thoracic spine, hips, and low back that are easier to explain once they are visible.",
  },
  {
    q: "Where does this fit into treatment?",
    a: "AI-assisted movement evaluation is part of the REVEAL phase of Human System Reset™, helping define what needs to be released, restored, and reinforced.",
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

export default function AIMovementEvaluationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ServicePageShell
        eyebrow="AI-Assisted Evaluation · Human System Reset™"
        h1="AI-Assisted Movement Evaluation in NYC"
        lead="A technology-supported movement screen in Midtown Manhattan that helps make compensation patterns, asymmetries, and movement restrictions easier to see, explain, and track."
        phase="REVEAL"
        faqs={faqs}
        ctaHeading="Book an AI-Assisted Movement Evaluation"
      >
        <section className="py-24 bg-brand-surface border-y border-brand-border">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid lg:grid-cols-[1fr_0.88fr] gap-10 items-center">
              <div>
                <p className="type-label text-brand-gold mb-4">Short Definition</p>
                <h2 className="type-display-m text-brand-white mb-6">What Is AI-Assisted Movement Evaluation?</h2>
                <div className="space-y-5 font-body font-light text-brand-muted text-base leading-relaxed">
                  <p>
                    AI-assisted movement evaluation is a structured screen that uses motion analysis
                    technology to support the clinical assessment. It can help reveal patterns that are
                    difficult to explain from symptoms alone.
                  </p>
                  <p>
                    At YW Physical Therapy, AI is used inside the{" "}
                    <Link href="/human-system-reset" className="text-brand-gold hover:text-brand-gold-light transition-colors">
                      Human System Reset™
                    </Link>{" "}
                    framework. The technology helps clarify the pattern; Dr. Wu decides what the pattern
                    means and how to treat it.
                  </p>
                  <p>
                    Reports can make asymmetry and movement quality easier to understand, then connect
                    those findings to hands-on care, corrective exercise, and long-term reinforcement.
                  </p>
                </div>
              </div>

              <div className="relative overflow-hidden border border-brand-border bg-white shadow-[0_24px_80px_rgba(0,0,0,0.14)]" style={{ borderRadius: "2px" }}>
                <div className="relative aspect-[4/5]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/assets/ai-movement-analysis-report-nyc.png"
                    alt="AI-assisted movement analysis report with squat score and movement metrics at YW Physical Therapy"
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-brand-black">
          <div className="max-w-5xl mx-auto px-6">
            <p className="type-label text-brand-gold mb-4">Why It Matters</p>
            <h2 className="type-display-m text-brand-white mb-8">Movement Patterns Matter More Than Posture Alone</h2>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                {
                  title: "Asymmetry",
                  desc: "Small side-to-side differences can change how your neck, back, hips, and shoulders tolerate load.",
                },
                {
                  title: "Compensation",
                  desc: "Your body may avoid one joint or muscle group and overuse another without you noticing it.",
                },
                {
                  title: "Tracking",
                  desc: "Visible movement data can help compare change over time as treatment progresses.",
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
            <p className="type-label text-brand-gold mb-4">How It Guides Care</p>
            <h2 className="type-display-m text-brand-white mb-8">From Evaluation to Treatment Plan</h2>
            <div className="grid md:grid-cols-2 gap-8 font-body font-light text-brand-muted text-base leading-relaxed">
              <p>
                The evaluation helps determine whether your first priority is mobility, soft tissue
                sensitivity, neuromuscular control, strength, load tolerance, or workstation strategy.
                That matters because the same pain location can come from different movement drivers.
              </p>
              <p>
                For example, desk-related neck tension may be connected to thoracic stiffness,
                shoulder control, breathing mechanics, or a repetitive screen posture. The plan may
                then connect to{" "}
                <Link href="/movement-analysis-nyc" className="text-brand-gold hover:text-brand-gold-light transition-colors">
                  movement analysis
                </Link>
                ,{" "}
                <Link href="/desk-worker-body-reset" className="text-brand-gold hover:text-brand-gold-light transition-colors">
                  desk worker recovery
                </Link>
                , or{" "}
                <Link href="/neck-pain-nyc" className="text-brand-gold hover:text-brand-gold-light transition-colors">
                  neck pain care
                </Link>
                .
              </p>
            </div>
          </div>
        </section>
      </ServicePageShell>
    </>
  );
}
