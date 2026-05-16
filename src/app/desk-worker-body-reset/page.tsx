import type { Metadata } from "next";
import Link from "next/link";
import ServicePageShell from "@/components/ServicePageShell";
import { breadcrumbSchema, faqPageSchema, jsonLd, serviceSchema } from "@/lib/seoSchemas";

export const metadata: Metadata = {
  title: "Desk Worker Body Reset™ NYC | Neck & Back Recovery for Office Workers",
  description:
    "Desk Worker Body Reset™ for Manhattan office workers with chronic neck, back, hip, and posture-related tension. One-on-one care in Midtown Manhattan.",
  alternates: { canonical: "https://ywphysicaltherapy.com/desk-worker-body-reset" },
  openGraph: {
    title: "Desk Worker Body Reset™ NYC | YW Physical Therapy",
    description:
      "Neck, back, and posture recovery for Manhattan office workers using Human System Reset™, movement analysis, and advanced recovery technology.",
    url: "https://ywphysicaltherapy.com/desk-worker-body-reset",
    siteName: "YW Physical Therapy",
    locale: "en_US",
    type: "website",
  },
};

const faqs = [
  {
    q: "What is Desk Worker Body Reset™?",
    a: "Desk Worker Body Reset™ is a focused version of Human System Reset™ for Manhattan office workers with chronic neck, back, hip, shoulder, or posture-related tension from prolonged sitting and screen work.",
  },
  {
    q: "Why does stretching only help temporarily?",
    a: "Stretching can change sensation for a short time, but it often does not address the mobility restriction, muscle inhibition, load tolerance issue, or workstation pattern that created the tension.",
  },
  {
    q: "Can movement analysis show why I keep getting tight?",
    a: "Yes. Movement analysis can reveal compensation patterns such as limited thoracic extension, reduced hip mobility, poor shoulder control, or lumbar overloading that keep recreating tightness.",
  },
  {
    q: "Is this good for office workers in Manhattan?",
    a: "Yes. The program is designed for NYC professionals and Manhattan office workers who need a practical recovery plan that fits demanding work schedules.",
  },
  {
    q: "Do you provide workstation advice?",
    a: "Yes. Dr. Wu can review desk setup, device use, travel habits, and daily movement strategy so the clinical changes are reinforced outside the treatment room.",
  },
];

const pageSchemas = [
  faqPageSchema(faqs),
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Desk Worker Body Reset", path: "/desk-worker-body-reset" },
  ]),
  serviceSchema({
    name: "Desk Worker Body Reset NYC",
    description:
      "One-on-one movement and recovery care in Midtown Manhattan for desk-related neck, back, hip, and posture tension.",
    path: "/desk-worker-body-reset",
    serviceType: "Desk worker physical therapy and movement optimization",
  }),
];

export default function DeskWorkerBodyResetPage() {
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
        eyebrow="Desk Worker Recovery · Human System Reset™"
        h1="Desk Worker Body Reset™ | Neck, Back & Posture Recovery for Manhattan Professionals"
        heroTagline="Your chair is not the whole problem. Your movement system adapted to it."
        lead="A one-on-one recovery and movement optimization program in Midtown Manhattan for office workers dealing with chronic neck tension, back pain, shoulder tightness, hip stiffness, and posture-related overload."
        faqs={faqs}
        ctaHeading="Start Your Desk Worker Body Reset™"
      >
        <section className="py-24 bg-brand-surface border-y border-brand-border">
          <div className="max-w-5xl mx-auto px-6">
            <p className="type-label text-brand-gold mb-4">Why It Happens</p>
            <h2 className="type-display-m text-brand-white mb-8">Why Desk Workers Develop Chronic Tension</h2>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                {
                  title: "Neck and Shoulder Load",
                  desc: "Screen posture shifts load into the cervical spine, upper traps, suboccipitals, and shoulder complex.",
                },
                {
                  title: "Thoracic Stiffness",
                  desc: "The mid-back adapts to rounded sitting, forcing the neck and low back to compensate.",
                },
                {
                  title: "Hip and Low Back Strategy",
                  desc: "Long sitting reduces hip extension and glute contribution, increasing lumbar demand during daily movement.",
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

        <section className="py-24 bg-brand-black">
          <div className="max-w-5xl mx-auto px-6">
            <p className="type-label text-brand-gold mb-4">The 4R Framework</p>
            <h2 className="type-display-m text-brand-white mb-8">REVEAL → RELEASE → RESTORE → REINFORCE</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  phase: "REVEAL",
                  title: "Map the desk worker pattern",
                  desc: "Movement analysis and clinical assessment identify where your body is compensating.",
                  href: "/movement-analysis-nyc",
                },
                {
                  phase: "RELEASE",
                  title: "Reduce tissue and joint barriers",
                  desc: "Manual therapy, TECAR, laser, and shockwave may be used when clinically appropriate.",
                  href: "/shockwave-therapy-nyc",
                },
                {
                  phase: "RESTORE",
                  title: "Retrain the stabilizers",
                  desc: "Corrective movement rebuilds neck, shoulder, hip, and trunk control.",
                  href: "/human-system-reset",
                },
                {
                  phase: "REINFORCE",
                  title: "Make work sustainable",
                  desc: "Desk setup, home program, travel strategy, and load tolerance work help the changes hold.",
                  href: "/human-system-reset",
                },
              ].map((item) => (
                <div key={item.phase} className="p-7 border border-brand-border bg-brand-surface" style={{ borderRadius: "2px" }}>
                  <p className="type-label text-brand-gold mb-2">{item.phase}</p>
                  <h3 className="font-body font-medium text-brand-white mb-3">{item.title}</h3>
                  <p className="type-body-m text-brand-muted mb-4">{item.desc}</p>
                  <Link href={item.href} className="font-mono text-[10px] text-brand-gold hover:text-brand-gold-light tracking-wider uppercase transition-colors">
                    Related service →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-brand-surface border-y border-brand-border">
          <div className="max-w-5xl mx-auto px-6">
            <p className="type-label text-brand-gold mb-4">Common Patterns</p>
            <h2 className="type-display-m text-brand-white mb-8">Neck, Back, Hip, and Posture Recovery</h2>
            <div className="grid md:grid-cols-2 gap-8 font-body font-light text-brand-muted text-base leading-relaxed">
              <p>
                Desk worker pain often crosses regions. A neck problem may connect to shoulder blade
                control. A back problem may connect to hip mobility. A posture problem may connect to
                breathing and thoracic movement.
              </p>
              <p>
                That is why this page connects to{" "}
                <Link href="/neck-pain-nyc" className="text-brand-gold hover:text-brand-gold-light transition-colors">
                  neck pain treatment in NYC
                </Link>
                ,{" "}
                <Link href="/back-pain-nyc" className="text-brand-gold hover:text-brand-gold-light transition-colors">
                  back pain physical therapy
                </Link>
                , and{" "}
                <Link href="/ai-movement-evaluation" className="text-brand-gold hover:text-brand-gold-light transition-colors">
                  AI-assisted movement evaluation
                </Link>{" "}
                instead of treating each symptom as an isolated body part.
              </p>
            </div>
          </div>
        </section>
      </ServicePageShell>
    </>
  );
}
