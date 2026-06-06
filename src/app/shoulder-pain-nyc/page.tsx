import type { Metadata } from "next";
import Link from "next/link";
import ServicePageShell from "@/components/ServicePageShell";
import { breadcrumbSchema, faqPageSchema, jsonLd, serviceSchema } from "@/lib/seoSchemas";

export const metadata: Metadata = {
  title: "Shoulder Pain Physical Therapy NYC | Midtown Manhattan | YW Physical Therapy",
  description:
    "Shoulder pain physical therapy in Midtown Manhattan using movement analysis, shoulder mechanics assessment, and Human System Reset™ recovery technology near Penn Station.",
  alternates: { canonical: "https://ywphysicaltherapy.com/shoulder-pain-nyc" },
  openGraph: {
    title: "Shoulder Pain Physical Therapy NYC | YW Physical Therapy",
    description:
      "One-on-one shoulder pain PT in Midtown Manhattan for overhead pain, rotator cuff irritation, and shoulder-neck movement patterns.",
    url: "https://ywphysicaltherapy.com/shoulder-pain-nyc",
    siteName: "YW Physical Therapy",
    locale: "en_US",
    type: "website",
  },
};

const faqs = [
  {
    q: "Can physical therapy help shoulder pain with overhead movement?",
    a: "Yes. Overhead shoulder pain often involves shoulder blade timing, thoracic mobility, rotator cuff capacity, and load tolerance. Assessment helps identify which part of the system is limiting the movement.",
  },
  {
    q: "Is shoulder pain always a rotator cuff problem?",
    a: "No. The rotator cuff may be irritated, but the driver can also involve the neck, thoracic spine, scapular control, training load, or desk posture. Dr. Wu assesses the whole shoulder-neck-trunk chain.",
  },
  {
    q: "Do I need imaging before starting shoulder PT?",
    a: "Not always. Many shoulder pain patterns can be assessed clinically first. If symptoms suggest a condition that needs imaging or medical referral, Dr. Wu will explain that clearly.",
  },
  {
    q: "Can shockwave or laser be used for shoulder pain?",
    a: "When appropriate, shockwave, TECAR, or Class IV laser may be used as tools inside the Human System Reset™ process. The choice depends on assessment findings, tissue irritability, and your goals.",
  },
];

const pageSchemas = [
  faqPageSchema(faqs),
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Shoulder Pain Physical Therapy NYC", path: "/shoulder-pain-nyc" },
  ]),
  serviceSchema({
    name: "Shoulder Pain Physical Therapy NYC",
    description:
      "One-on-one physical therapy in Midtown Manhattan for shoulder pain, overhead pain, rotator cuff irritation, and shoulder-neck movement limitations.",
    path: "/shoulder-pain-nyc",
    serviceType: "Shoulder pain physical therapy",
  }),
];

export default function ShoulderPainNYCPage() {
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
        eyebrow="Shoulder Pain · Human System Reset™"
        h1="Shoulder Pain Physical Therapy in Manhattan"
        heroTagline="Shoulder pain is rarely just a shoulder problem."
        lead="Overhead pain, rotator cuff irritation, and shoulder tension often reflect a larger movement pattern involving the neck, shoulder blade, thoracic spine, and load tolerance. Dr. Wu maps the system before choosing treatment."
        faqs={faqs}
        ctaHeading="Start Your Shoulder Pain Assessment"
      >
        <section className="py-24 bg-brand-surface border-y border-brand-border">
          <div className="max-w-5xl mx-auto px-6">
            <p className="type-label text-brand-gold mb-4">The Pattern</p>
            <h2 className="type-display-m text-brand-white mb-6">Why Shoulder Pain Keeps Returning</h2>
            <div className="grid md:grid-cols-2 gap-8 type-body-m text-brand-muted">
              <p>
                The shoulder depends on coordination between the rotator cuff, shoulder blade,
                rib cage, thoracic spine, and neck. When one part stops contributing, the shoulder
                often compensates until tissue becomes irritated.
              </p>
              <p>
                The Human System Reset™ approach begins with{" "}
                <Link href="/physical-therapy-near-penn-station" className="text-brand-gold hover:text-brand-gold-light transition-colors">
                  movement analysis
                </Link>
                , then selects recovery tools and strengthening progressions based on what the
                assessment shows.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 bg-brand-black">
          <div className="max-w-5xl mx-auto px-6">
            <p className="type-label text-brand-gold mb-4">Common Presentations</p>
            <h2 className="type-display-m text-brand-white mb-8">Shoulder Conditions and Movement Patterns</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              {[
                "Overhead shoulder pain",
                "Rotator cuff irritation",
                "Shoulder impingement pattern",
                "Scapular control deficits",
                "Frozen shoulder stiffness",
                "Shoulder-neck tension",
                "Bench press or lifting pain",
                "Throwing or racquet sport pain",
                "Postural shoulder tension",
              ].map((condition) => (
                <div key={condition} className="px-5 py-3 border border-brand-border bg-brand-surface type-body-m text-brand-muted" style={{ borderRadius: "2px" }}>
                  {condition}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-brand-surface border-y border-brand-border">
          <div className="max-w-5xl mx-auto px-6">
            <p className="type-label text-brand-gold mb-4">Treatment Strategy</p>
            <h2 className="type-display-m text-brand-white mb-8">How Shoulder Recovery Is Built</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "REVEAL: Mechanics First",
                  desc: "Assessment maps shoulder blade timing, thoracic mobility, neck contribution, range of motion, and load tolerance.",
                },
                {
                  title: "RELEASE: Reduce Irritability",
                  desc: "Manual therapy, TECAR, laser, or shockwave may be used when tissue irritability or restriction is limiting movement.",
                },
                {
                  title: "RESTORE: Rebuild Control",
                  desc: "Rotator cuff, scapular, and thoracic control are retrained so the shoulder can move without compensation.",
                },
                {
                  title: "REINFORCE: Return to Load",
                  desc: "Progressive strengthening prepares the shoulder for work, training, sport, and overhead demand.",
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
      </ServicePageShell>
    </>
  );
}
