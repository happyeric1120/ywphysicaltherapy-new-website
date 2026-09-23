import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ServicePageShell from "@/components/ServicePageShell";
import { breadcrumbSchema, faqPageSchema, jsonLd, serviceSchema } from "@/lib/seoSchemas";

export const metadata: Metadata = {
  title: "AI-Assisted Movement Assessment NYC | YW Physical Therapy",
  description:
    "See how AI-assisted movement measurement records movement quality, balance, mobility, and asymmetry as one part of a clinician-led physical therapy evaluation in Midtown Manhattan.",
  alternates: { canonical: "https://ywphysicaltherapy.com/ai-movement-evaluation" },
  openGraph: {
    title: "AI-Assisted Movement Assessment NYC | YW Physical Therapy",
    description:
      "AI-assisted measurement for movement quality, balance, mobility, and asymmetry as one part of a clinician-led physical therapy evaluation.",
    url: "https://ywphysicaltherapy.com/ai-movement-evaluation",
    siteName: "YW Physical Therapy",
    locale: "en_US",
    type: "website",
  },
};

const faqs = [
  {
    q: "What is AI-assisted movement analysis?",
    a: "AI-assisted movement analysis uses motion analysis tools to help identify visible asymmetries, compensation patterns, posture changes, balance deficits, and movement limitations. Dr. Wu interprets the findings clinically and uses them to guide care.",
  },
  {
    q: "Does AI replace the physical therapist?",
    a: "No. AI supports observation and tracking, but clinical reasoning, hands-on assessment, diagnosis, and treatment decisions are made by Dr. Wu.",
  },
  {
    q: "What can AI help analyze?",
    a: "AI can help screen movement quality, posture, mobility, balance, asymmetry, control, and compensation patterns during selected movements.",
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

const pageSchemas = [
  faqPageSchema(faqs),
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "AI-Assisted Movement Assessment", path: "/ai-movement-evaluation" },
  ]),
  serviceSchema({
    name: "AI-Assisted Movement Assessment NYC",
    description:
      "AI-assisted movement measurement in Midtown Manhattan that records selected movement-quality, balance, mobility, and asymmetry observations for clinician interpretation.",
    path: "/ai-movement-evaluation",
    serviceType: "AI-assisted movement assessment",
  }),
];

export default function AIMovementEvaluationPage() {
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
        eyebrow="Movement Analysis · Human System Reset™"
        h1="AI-Assisted Movement Assessment in NYC"
        lead="AI-assisted movement assessment is a measurement tool used to make selected movement patterns easier to observe and compare. It does not diagnose a condition or replace a physical therapist’s examination."
        phase="REVEAL"
        faqs={faqs}
        ctaHeading="Book an AI-Assisted Movement Assessment"
      >
        <section className="py-24 bg-brand-surface border-y border-brand-border">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid lg:grid-cols-[1fr_0.88fr] gap-10 items-center">
              <div>
                <p className="type-label text-brand-gold mb-4">Short Definition</p>
                <h2 className="type-display-m text-brand-white mb-6">What Does the Technology Measure?</h2>
                <div className="space-y-5 font-body font-light text-brand-muted text-base leading-relaxed">
                  <p>
                    AI-assisted movement assessment organizes visual movement data such as balance,
                    mobility, asymmetry, and movement quality. The report is one source of information
                    within a broader clinical evaluation—not a diagnosis or treatment decision.
                  </p>
                  <p>
                    At YW Physical Therapy, AI is used inside the{" "}
                    <Link href="/physical-therapy-near-penn-station" className="text-brand-gold hover:text-brand-gold-light transition-colors">
                      Human System Reset™
                    </Link>{" "}
                    framework. The technology helps clarify the pattern; Dr. Wu decides what the pattern
                    may mean and how it should inform your plan.
                  </p>
                  <p>
                    Reports can make asymmetry, balance, mobility, posture, and movement quality easier to understand, then connect
                    those findings to hands-on care, corrective exercise, and long-term reinforcement.
                  </p>
                  <p>
                    Looking for the full clinician-led process? See how Dr. Wu combines history,
                    physical examination, observation, and measurement during a{" "}
                    <Link href="/movement-analysis-nyc" className="text-brand-gold hover:text-brand-gold-light transition-colors">
                      clinical movement analysis in NYC
                    </Link>
                    .
                  </p>
                </div>
              </div>

              <div className="relative overflow-hidden border border-brand-border bg-white shadow-[0_24px_80px_rgba(0,0,0,0.14)]" style={{ borderRadius: "2px" }}>
                <div className="relative aspect-[4/5]">
                  <Image
                    src="/assets/ai-movement-analysis-report-nyc.png"
                    alt="AI-assisted movement analysis report with squat score and movement metrics at YW Physical Therapy"
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-brand-black">
          <div className="max-w-5xl mx-auto px-6">
            <p className="type-label text-brand-gold mb-4">Why It Matters</p>
            <h2 className="type-display-m text-brand-white mb-8">Movement Quality Matters More Than Posture Alone</h2>
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
                <Link href="/physical-therapy-near-penn-station" className="text-brand-gold hover:text-brand-gold-light transition-colors">
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
