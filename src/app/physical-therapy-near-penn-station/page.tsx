import type { Metadata } from "next";
import Link from "next/link";
import ServicePageShell from "@/components/ServicePageShell";
import { breadcrumbSchema, faqPageSchema, jsonLd, serviceSchema } from "@/lib/seoSchemas";

export const metadata: Metadata = {
  title: "Physical Therapy Near Penn Station | One-on-One PT in Midtown Manhattan",
  description:
    "One-on-one physical therapy near Penn Station at YW Physical Therapy. AI movement analysis, shockwave therapy, and Human System Reset™ in Midtown Manhattan.",
  alternates: { canonical: "https://ywphysicaltherapy.com/physical-therapy-near-penn-station" },
  openGraph: {
    title: "Physical Therapy Near Penn Station | YW Physical Therapy",
    description:
      "Premium one-on-one physical therapy near Penn Station in Midtown Manhattan with Dr. Yu-Kuang Wu, PT, PhD.",
    url: "https://ywphysicaltherapy.com/physical-therapy-near-penn-station",
    siteName: "YW Physical Therapy",
    locale: "en_US",
    type: "website",
  },
};

const faqs = [
  {
    q: "Where is YW Physical Therapy located near Penn Station?",
    a: "YW Physical Therapy is located at 224 W 35th St #301-5 in Midtown Manhattan, about two blocks from Penn Station and close to Madison Square Garden and Herald Square.",
  },
  {
    q: "Do you provide one-on-one physical therapy?",
    a: "Yes. Every session is delivered directly by Dr. Yu-Kuang Wu. There are no aides, no handoffs, and no double booking.",
  },
  {
    q: "What makes this different from a typical physical therapy clinic near Penn Station?",
    a: "YW Physical Therapy starts with movement analysis and root-cause reasoning instead of only treating the painful area. Care may include Human System Reset™, shockwave therapy, TECAR, laser, manual therapy, and corrective exercise when appropriate.",
  },
  {
    q: "Is this convenient for commuters?",
    a: "Yes. The clinic is near Penn Station, MSG, Herald Square, and major subway lines, making it convenient for commuters and Midtown professionals.",
  },
  {
    q: "Can I book if I have chronic neck or back pain from desk work?",
    a: "Yes. Desk-related neck pain, back pain, shoulder tension, and posture-related movement patterns are common reasons people book an assessment.",
  },
  {
    q: "Do you offer shockwave therapy near Penn Station?",
    a: "Yes. YW Physical Therapy offers focused and radial shockwave therapy in Midtown Manhattan near Penn Station, based on evaluation findings.",
  },
];

const pageSchemas = [
  faqPageSchema(faqs),
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Physical Therapy Near Penn Station", path: "/physical-therapy-near-penn-station" },
  ]),
  serviceSchema({
    name: "Physical Therapy Near Penn Station",
    description:
      "Premium one-on-one physical therapy near Penn Station in Midtown Manhattan using movement analysis, shockwave therapy, and Human System Reset™.",
    path: "/physical-therapy-near-penn-station",
    serviceType: "Physical therapy",
    areaServed: ["Penn Station", "Midtown Manhattan", "Madison Square Garden", "Herald Square", "Manhattan"],
  }),
];

export default function PhysicalTherapyNearPennStationPage() {
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
        eyebrow="Midtown Manhattan · Near Penn Station"
        h1="Physical Therapy Near Penn Station"
        heroTagline="One-on-one care for Manhattan professionals and commuters."
        lead="Premium physical therapy at 224 W 35th St #301-5, just blocks from Penn Station. Dr. Wu combines AI-assisted movement analysis, Human System Reset™, and advanced recovery technology to address the movement pattern behind your pain."
        faqs={faqs}
        ctaHeading="Book a Midtown Manhattan Assessment"
      >
        <section className="py-24 bg-brand-surface border-y border-brand-border">
          <div className="max-w-5xl mx-auto px-6">
            <p className="type-label text-brand-gold mb-4">Location</p>
            <h2 className="type-display-m text-brand-white mb-6">One-on-One Physical Therapy Two Blocks from Penn Station</h2>
            <div className="grid md:grid-cols-2 gap-8 font-body font-light text-brand-muted text-base leading-relaxed">
              <p>
                YW Physical Therapy is located in Midtown Manhattan at 224 W 35th St #301-5,
                close to Penn Station, Madison Square Garden, Herald Square, and major subway
                connections. The location is designed for NYC professionals who need focused care
                without a large-clinic experience.
              </p>
              <p>
                Every visit is one-on-one with Dr. Yu-Kuang Wu, PT, PhD. There are no aides, no
                handoffs, and no double booking. Your assessment, treatment, and corrective movement
                plan are handled by the same clinician from start to finish.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 bg-brand-black">
          <div className="max-w-5xl mx-auto px-6">
            <p className="type-label text-brand-gold mb-4">What We Do</p>
            <h2 className="type-display-m text-brand-white mb-8">Root-Cause Physical Therapy, Not Generic Exercise</h2>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                {
                  title: "Movement Analysis",
                  desc: "AI-assisted and clinical assessment helps identify compensation patterns behind neck, back, hip, shoulder, and desk-related pain.",
                  href: "/movement-analysis-nyc",
                },
                {
                  title: "Human System Reset™",
                  desc: "The REVEAL, RELEASE, RESTORE, REINFORCE framework guides treatment from assessment to long-term movement capacity.",
                  href: "/human-system-reset",
                },
                {
                  title: "Advanced Technology",
                  desc: "Shockwave, TECAR, Class IV laser, EMS, and corrective exercise are used when they match the clinical findings.",
                  href: "/shockwave-therapy-nyc",
                },
              ].map((item) => (
                <div key={item.title} className="p-7 border border-brand-border bg-brand-surface" style={{ borderRadius: "2px" }}>
                  <h3 className="font-body font-medium text-brand-white mb-3">{item.title}</h3>
                  <p className="type-body-m text-brand-muted mb-4">{item.desc}</p>
                  <Link href={item.href} className="font-mono text-[10px] text-brand-gold hover:text-brand-gold-light tracking-wider uppercase transition-colors">
                    Related page →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-brand-surface border-y border-brand-border">
          <div className="max-w-5xl mx-auto px-6">
            <p className="type-label text-brand-gold mb-4">Common Reasons People Book</p>
            <h2 className="type-display-m text-brand-white mb-8">For Midtown Professionals, Commuters, and Active Adults</h2>
            <div className="grid md:grid-cols-2 gap-8 font-body font-light text-brand-muted text-base leading-relaxed">
              <p>
                Many clients come in for desk-related{" "}
                <Link href="/neck-pain-nyc" className="text-brand-gold hover:text-brand-gold-light transition-colors">
                  neck pain
                </Link>
                , chronic{" "}
                <Link href="/back-pain-nyc" className="text-brand-gold hover:text-brand-gold-light transition-colors">
                  back pain
                </Link>
                , hip stiffness, sports injuries, or movement problems that keep returning after
                stretching, massage, or generic exercise.
              </p>
              <p>
                If your issue involves chronic tissue irritation or tendon pain, Dr. Wu may also
                consider{" "}
                <Link href="/shockwave-therapy-nyc" className="text-brand-gold hover:text-brand-gold-light transition-colors">
                  shockwave therapy near Penn Station
                </Link>{" "}
                as part of a broader movement and recovery plan.
              </p>
            </div>
          </div>
        </section>
      </ServicePageShell>
    </>
  );
}
