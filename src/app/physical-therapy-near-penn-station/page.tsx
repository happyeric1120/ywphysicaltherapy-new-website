import type { Metadata } from "next";
import Link from "next/link";
import ServicePageShell from "@/components/ServicePageShell";
import { breadcrumbSchema, faqPageSchema, jsonLd, serviceSchema } from "@/lib/seoSchemas";

const MOVEMENT_ANALYSIS_BOOKING_URL = "https://calendar.app.google/UBFwrnLQVYxQq7t77";

export const metadata: Metadata = {
  title: "Pain & Movement Physical Therapy NYC | YW Physical Therapy",
  description:
    "Pain & Movement physical therapy in Midtown Manhattan near Penn Station. Movement analysis, Human System Reset™, hands-on care, recovery technology, and strength retraining.",
  alternates: { canonical: "https://ywphysicaltherapy.com/physical-therapy-near-penn-station" },
  openGraph: {
    title: "Pain & Movement Physical Therapy NYC | YW Physical Therapy",
    description:
      "One-on-one care for pain, posture, movement compensation, and recurring injuries near Penn Station in Midtown Manhattan.",
    url: "https://ywphysicaltherapy.com/physical-therapy-near-penn-station",
    siteName: "YW Physical Therapy",
    locale: "en_US",
    type: "website",
  },
};

const phases = [
  {
    phase: "REVEAL",
    label: "Assess the pattern",
    desc: "Clinical exam and movement analysis identify the compensation pattern, load issue, or mobility restriction behind the painful area.",
    items: ["Full-body movement screen", "AI-assisted movement analysis when useful", "Posture, mobility, strength, and load review"],
  },
  {
    phase: "RELEASE",
    label: "Reduce the barrier",
    desc: "Hands-on care and recovery technology are used only when they match the findings, not as random add-ons.",
    items: ["Manual therapy and IASTM", "Focused or radial shockwave", "TECAR, Class IV laser, and soft tissue recovery"],
  },
  {
    phase: "RESTORE",
    label: "Rebuild control",
    desc: "The body has to relearn better strategies after the painful system calms down.",
    items: ["Neuromuscular re-education", "Corrective exercise progression", "Compex EMS or recovery support when appropriate"],
  },
  {
    phase: "REINFORCE",
    label: "Build capacity",
    desc: "Strength, tolerance, and home strategy make the result hold under work, training, and daily life.",
    items: ["Strength retraining", "Load management", "Home plan and return-to-activity progression"],
  },
];

const conditions = [
  { label: "Neck Pain", href: "/neck-pain-nyc" },
  { label: "Back Pain", href: "/back-pain-nyc" },
  { label: "Shoulder Pain", href: "/shoulder-pain-nyc" },
  { label: "Knee Pain", href: "/knee-pain-nyc" },
  { label: "Hip Pain", href: "/hip-pain-nyc" },
  { label: "Sports Injuries", href: "/sports-injury-nyc" },
  { label: "Desk Worker Pain", href: "/desk-worker-pain-nyc" },
  { label: "Desk Worker Body Reset", href: "/desk-worker-body-reset" },
];

const faqs = [
  {
    q: "Is Pain & Movement different from the Human System Reset™ method?",
    a: "It is the same clinical concept presented in patient-friendly language. Pain & Movement is the musculoskeletal side of Human System Reset™: movement analysis, hands-on treatment, recovery technology, and strength retraining.",
  },
  {
    q: "Is movement analysis a separate service?",
    a: "Movement analysis is usually the REVEAL phase of the same process. It can be booked as a focused assessment, but the findings are meant to guide treatment, exercise, and recovery strategy.",
  },
  {
    q: "What types of pain is this for?",
    a: "Common reasons include neck pain, low back pain, shoulder pain, knee pain, hip pain, posture-related tension, desk-worker pain, sports injuries, and recurring tightness that keeps returning after temporary relief.",
  },
  {
    q: "Where is YW Physical Therapy located?",
    a: "YW Physical Therapy is located at 224 W 35th St #301-5 in Midtown Manhattan, about two blocks from Penn Station and close to Madison Square Garden and Herald Square.",
  },
  {
    q: "Do you provide one-on-one physical therapy?",
    a: "Yes. Every session is delivered directly by Dr. Yu-Kuang Wu. There are no aides, no handoffs, and no double booking.",
  },
  {
    q: "What if I already tried physical therapy?",
    a: "Many clients come in after prior care helped temporarily but did not change the underlying pattern. The first step is to reassess how the whole system is loading, compensating, and protecting.",
  },
];

const pageSchemas = [
  faqPageSchema(faqs),
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Pain & Movement", path: "/physical-therapy-near-penn-station" },
  ]),
  serviceSchema({
    name: "Pain & Movement Physical Therapy NYC",
    description:
      "One-on-one physical therapy near Penn Station for pain, movement compensation, posture issues, and recurring injuries using movement analysis and Human System Reset™.",
    path: "/physical-therapy-near-penn-station",
    serviceType: "Physical therapy",
    areaServed: ["Penn Station", "Midtown Manhattan", "Madison Square Garden", "Herald Square", "Manhattan"],
  }),
];

export default function PainAndMovementPage() {
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
        eyebrow="Pain & Movement · Human System Reset™"
        h1="Pain & Movement Physical Therapy in Midtown Manhattan"
        heroTagline="Find the pattern. Treat the barrier. Rebuild the system."
        lead="This is the musculoskeletal side of Human System Reset™: one-on-one care for pain, posture, movement compensation, and recurring injuries near Penn Station."
        faqs={faqs}
        ctaHeading="Book a Pain & Movement Assessment"
        bookingUrl={MOVEMENT_ANALYSIS_BOOKING_URL}
        showPainMovementLink={false}
      >
        <section className="py-24 bg-brand-surface border-y border-brand-border">
          <div className="max-w-5xl mx-auto px-6">
            <p className="type-label text-brand-gold mb-4">What This Replaces</p>
            <h2 className="type-display-m text-brand-white mb-6">
              Method, movement analysis, and physical therapy are one process.
            </h2>
            <div className="grid md:grid-cols-2 gap-8 font-body font-light text-brand-muted text-base leading-relaxed">
              <p>
                You do not need to choose between a method page, a movement analysis page, and a
                physical therapy page. If the main problem is pain, posture, mobility, strength, or
                recurring injury, you start here.
              </p>
              <p>
                Dr. Wu uses the same process across neck pain, back pain, shoulder pain, knee pain,
                desk-related tension, and sports injuries: identify the driver, reduce the physical
                barrier, retrain movement, and build enough capacity that the result can hold.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 bg-brand-black">
          <div className="max-w-6xl mx-auto px-6">
            <p className="type-label text-brand-gold mb-4">The Process</p>
            <h2 className="type-display-m text-brand-white mb-10">
              REVEAL → RELEASE → RESTORE → REINFORCE
            </h2>
            <div className="grid lg:grid-cols-4 gap-5">
              {phases.map((phase) => (
                <div
                  key={phase.phase}
                  className="p-7 border border-brand-border bg-brand-surface"
                  style={{ borderRadius: "2px" }}
                >
                  <p className="type-label text-brand-gold mb-4">{phase.phase}</p>
                  <h3 className="font-body font-medium text-brand-white mb-3">{phase.label}</h3>
                  <p className="type-body-m text-brand-muted mb-6">{phase.desc}</p>
                  <ul className="space-y-3">
                    {phase.items.map((item) => (
                      <li key={item} className="flex gap-3 font-body font-light text-brand-muted text-sm leading-relaxed">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-gold" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-brand-surface border-y border-brand-border">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid lg:grid-cols-[1fr_0.9fr] gap-10 items-center">
              <div>
                <p className="type-label text-brand-gold mb-4">Movement Analysis</p>
                <h2 className="type-display-m text-brand-white mb-6">
                  Movement analysis is the starting point, not a separate philosophy.
                </h2>
                <div className="space-y-5 font-body font-light text-brand-muted text-base leading-relaxed">
                  <p>
                    Movement analysis makes the hidden pattern visible: side-to-side asymmetry,
                    knee alignment, pelvic control, thoracic mobility, shoulder mechanics, foot
                    loading, and how your body protects itself under demand.
                  </p>
                  <p>
                    The result is not just a report. It becomes the treatment map for hands-on
                    care, shockwave or laser when appropriate, corrective exercise, and return to
                    activity.
                  </p>
                </div>
              </div>
              <div
                className="relative overflow-hidden border border-brand-border bg-white shadow-[0_24px_80px_rgba(0,0,0,0.16)]"
                style={{ borderRadius: "2px" }}
              >
                <div className="relative aspect-[4/5]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/assets/ai-movement-analysis-report-nyc.png"
                    alt="AI-assisted movement analysis report showing movement metrics at YW Physical Therapy in NYC"
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-brand-black">
          <div className="max-w-5xl mx-auto px-6">
            <p className="type-label text-brand-gold mb-4">Common Reasons People Start Here</p>
            <h2 className="type-display-m text-brand-white mb-8">
              For pain, posture, recurring injuries, and movement limitations.
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {conditions.map((condition) => (
                <Link
                  key={condition.href}
                  href={condition.href}
                  className="group border border-brand-border bg-brand-surface p-5 transition-colors hover:border-brand-gold/40"
                  style={{ borderRadius: "2px" }}
                >
                  <span className="font-body text-sm font-medium text-brand-white group-hover:text-brand-gold transition-colors">
                    {condition.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-brand-surface border-y border-brand-border">
          <div className="max-w-5xl mx-auto px-6">
            <p className="type-label text-brand-gold mb-4">Location</p>
            <h2 className="type-display-m text-brand-white mb-6">
              One-on-one care two blocks from Penn Station.
            </h2>
            <div className="grid md:grid-cols-2 gap-8 font-body font-light text-brand-muted text-base leading-relaxed">
              <p>
                YW Physical Therapy is located at 224 W 35th St #301-5 in Midtown Manhattan,
                close to Penn Station, Madison Square Garden, Herald Square, and major subway
                lines.
              </p>
              <p>
                Every session is handled directly by Dr. Yu-Kuang Wu, PT, PhD. Your assessment,
                treatment, and movement plan stay connected from the first visit through return
                to daily life or training.
              </p>
            </div>
          </div>
        </section>
      </ServicePageShell>
    </>
  );
}
