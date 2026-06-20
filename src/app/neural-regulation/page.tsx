import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { breadcrumbSchema, faqPageSchema, jsonLd, serviceSchema } from "@/lib/seoSchemas";

const BOOKING_URL = "https://calendar.app.google/1BkTPd9xWbbQi4v49";

export const metadata: Metadata = {
  title: "Neural Regulation & Recovery Assessment NYC | YW Physical Therapy",
  description:
    "Neural Regulation and recovery-focused assessment in Midtown Manhattan using HRV wellness metrics, Human System Profile™, and non-invasive wellness technology.",
  alternates: { canonical: "https://ywphysicaltherapy.com/neural-regulation" },
  openGraph: {
    title: "Neural Regulation & Recovery Assessment NYC | YW Physical Therapy",
    description:
      "Understand your recovery with Neural Regulation, HRV wellness metrics, Human System Profile™, and recovery-focused support near Penn Station.",
    url: "https://ywphysicaltherapy.com/neural-regulation",
    siteName: "YW Physical Therapy",
    locale: "en_US",
    type: "website",
  },
};

const influenceItems = [
  "Recovery Capacity",
  "Stress Load",
  "Muscle Tension",
  "Breathing Patterns",
  "Focus & Mental Clarity",
  "Sleep Quality",
  "Movement Readiness",
  "Energy Patterns",
];

const signs = [
  "Feeling tired but unable to relax",
  "Constant neck and shoulder tension",
  "Brain fog",
  "Poor sleep quality",
  "Feeling on all the time",
  "Difficulty recovering after work or exercise",
];

const profileMetrics = [
  "Recovery Readiness",
  "Recovery Flexibility",
  "Adaptive Capacity",
  "Recovery Responsiveness",
  "System Load",
  "Recovery Balance",
];

const states = [
  {
    title: "Stress Loaded",
    desc: "Your system appears capable of recovery but may still be carrying elevated activation or physiological stress.",
  },
  {
    title: "Adaptive State",
    desc: "Your system demonstrates strong recovery potential and adaptability during the session.",
  },
  {
    title: "Recovery Limited",
    desc: "Your recovery capacity may be reduced due to recent stressors, poor sleep, pain, travel, or insufficient recovery.",
  },
  {
    title: "Balanced Recovery",
    desc: "Your measurements suggest stronger recovery readiness and physiological flexibility.",
  },
];

const interventions = [
  {
    title: "HRV Assessment",
    desc: "Provides objective insight into recovery readiness and wellness-related recovery patterns.",
  },
  {
    title: "Sensory-Based Recovery Support",
    desc: "Using the Nuropod system, gentle ear-based sensory input may be included as part of a relaxation-focused recovery experience when appropriate.",
  },
  {
    title: "Red Light Therapy",
    desc: "Specific wavelengths of red and near-infrared light are used as part of the recovery environment. Research has explored their potential role in supporting circulation, cellular energy production, and recovery processes.",
  },
  {
    title: "Compression Therapy",
    desc: "Sequential pneumatic compression provides rhythmic pressure to the lower extremities and may support circulation, recovery, and overall comfort during the session.",
  },
];

const steps = [
  ["01", "Baseline Human System Profile™"],
  ["02", "Guided Recovery Support Session"],
  ["03", "Post-Session Assessment"],
  ["04", "Review Your Recovery Response"],
];

const faqs = [
  {
    q: "Is this a medical treatment?",
    a: "No. This is a wellness and recovery-focused service designed to support recovery awareness. It is educational and is not intended to diagnose, treat, or replace medical care.",
  },
  {
    q: "Is the session painful?",
    a: "No. Most individuals describe the experience as comfortable and relaxing. Stimulation and recovery tools are selected based on your comfort and presentation.",
  },
  {
    q: "How long does the session take?",
    a: "A typical session takes approximately 20–30 minutes, including baseline measurement, guided recovery-focused intervention, and post-session reassessment.",
  },
  {
    q: "Will I receive my results?",
    a: "Yes. Every session includes a Human System Profile™ report designed to translate HRV and recovery-related signals into practical recovery insights.",
  },
];

const pageSchemas = [
  faqPageSchema(faqs),
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Neural Regulation", path: "/neural-regulation" },
  ]),
  serviceSchema({
    name: "Neural Regulation & Recovery Assessment NYC",
    description:
      "Neural Regulation and recovery-focused HRV assessment in Midtown Manhattan using Human System Profile™, non-invasive wellness technology, red light, and compression therapy when appropriate.",
    path: "/neural-regulation",
    serviceType: "Neural Regulation and recovery assessment",
  }),
];

function BookButton({ label = "Book Your Recovery Assessment" }: { label?: string }) {
  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block font-body font-medium text-sm tracking-wide px-8 py-4 bg-brand-gold text-brand-black hover:opacity-90 transition-opacity"
      style={{ borderRadius: "2px" }}
    >
      {label} →
    </a>
  );
}

export default function NeuralRegulationPage() {
  return (
    <>
      {pageSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLd(schema)}
        />
      ))}

      <section className="grain gold-glow relative pt-32 pb-24 md:pt-44 md:pb-32 bg-brand-black overflow-hidden">
        <div className="absolute inset-0 bg-brand-black" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 grid lg:grid-cols-[0.95fr_1.05fr] gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <p className="type-label text-brand-gold mb-5">
              RESTORE Phase · Human System Reset™
            </p>
            <h1 className="type-display-l text-brand-white mb-6">
              Neural Regulation
              <br className="hidden sm:block" />
              & Recovery Assessment.
            </h1>
            <p className="type-body-l text-brand-muted max-w-2xl mx-auto lg:mx-0 mb-10">
              A RESTORE-phase component of Human System Reset™ that combines HRV wellness
              metrics, recovery screening, and non-invasive wellness tools to support a
              recovery-focused experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/human-system-reset-assessment"
                className="inline-block font-body font-medium text-sm tracking-wide px-8 py-4 bg-brand-gold text-brand-black hover:opacity-90 transition-opacity"
                style={{ borderRadius: "2px" }}
              >
                Take the Recovery Screening →
              </Link>
              <BookButton label="Book Now" />
              <Link
                href="#profile"
                className="inline-block font-body font-medium text-sm tracking-wide px-8 py-4 border border-brand-border text-brand-muted hover:border-brand-white hover:text-brand-white transition-all duration-200"
                style={{ borderRadius: "2px" }}
              >
                View the Profile ↓
              </Link>
            </div>
          </div>

          <div
            className="relative overflow-hidden border border-brand-border bg-white shadow-[0_24px_80px_rgba(0,0,0,0.16)]"
            style={{ borderRadius: "2px" }}
          >
            <Image
              src="/assets/Hrv-result-pic.PNG"
              alt="HRV recovery assessment result showing recovery metrics"
              width={1024}
              height={1536}
              priority
              className="h-auto w-full"
              sizes="(max-width: 1024px) 100vw, 560px"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-surface border-y border-brand-border">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-[1fr_auto] gap-6 items-center p-8 border border-brand-gold/25 bg-white" style={{ borderRadius: "2px" }}>
            <div>
              <p className="type-label text-brand-gold mb-3">Not sure if this is right for you?</p>
              <h2 className="font-display font-bold text-brand-white text-2xl mb-3">
                Start with the Human System Reset™ Recovery Screening.
              </h2>
              <p className="type-body-m text-brand-muted">
                The questionnaire is private, local-only, and designed to help identify whether an
                objective HRV assessment may be a useful next step.
              </p>
            </div>
            <Link
              href="/human-system-reset-assessment"
              className="inline-block text-center font-body font-medium text-sm tracking-wide px-8 py-4 bg-brand-gold text-brand-black hover:opacity-90 transition-opacity"
              style={{ borderRadius: "2px" }}
            >
              Take Screening →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-surface border-y border-brand-border">
        <div className="max-w-5xl mx-auto px-6">
          <p className="type-label text-brand-gold mb-4">Why Neural Regulation?</p>
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
            <h2 className="type-display-m text-brand-white">
              Most people know when they feel tired. Very few know why.
            </h2>
            <div className="space-y-5 type-body-l text-brand-muted">
              <p>
                Long work hours, poor sleep, chronic stress, travel, pain, intensive training, and
                constant mental demands may all influence how recovered and ready you feel.
              </p>
              <p>
                Neural Regulation is the recovery-focused part of Human System Reset™. It combines
                objective recovery metrics with personalized wellness strategies to help you better
                understand and support your recovery process.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-black">
        <div className="max-w-6xl mx-auto px-6">
          <p className="type-label text-brand-gold mb-4">Recovery Factors</p>
          <h2 className="type-display-m text-brand-white mb-10">
            Recovery is influenced by more than you think.
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="grid sm:grid-cols-2 gap-3">
              {influenceItems.map((item) => (
                <div
                  key={item}
                  className="px-5 py-4 border border-brand-border bg-brand-surface type-body-m text-brand-white"
                  style={{ borderRadius: "2px" }}
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="p-8 border border-brand-border bg-brand-surface" style={{ borderRadius: "2px" }}>
              <h3 className="font-display font-bold text-brand-white text-xl mb-5">
                When recovery is limited, people often describe:
              </h3>
              <ul className="space-y-3">
                {signs.map((item) => (
                  <li key={item} className="flex gap-3 type-body-m text-brand-muted">
                    <span className="text-brand-gold shrink-0">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="profile" className="py-24 bg-brand-surface border-y border-brand-border">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
          <div>
            <p className="type-label text-brand-gold mb-4">How We Measure Recovery</p>
            <h2 className="type-display-m text-brand-white mb-6">Human System Profile™</h2>
            <div className="space-y-5 type-body-m text-brand-muted mb-8">
              <p>
                Every Recovery Assessment session begins with a Heart Rate Variability (HRV)
                assessment. Rather than relying on guesswork, we measure objective recovery-related
                signals to better understand your current baseline.
              </p>
              <p>
                You receive a report designed to translate complex physiological data into practical
                recovery insights.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {profileMetrics.map((item) => (
                <div
                  key={item}
                  className="px-4 py-3 border border-brand-border bg-white type-body-m text-brand-muted"
                  style={{ borderRadius: "2px" }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div
            className="relative overflow-hidden border border-brand-border bg-white shadow-[0_18px_60px_rgba(0,0,0,0.12)]"
            style={{ borderRadius: "2px" }}
          >
            <Image
              src="/assets/polar-H10-HRV.PNG"
              alt="Polar H10 heart rate sensor used for HRV recovery assessment at YW Physical Therapy"
              width={1024}
              height={1536}
              className="h-auto w-full"
              sizes="(max-width: 1024px) 100vw, 540px"
            />
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-black">
        <div className="max-w-6xl mx-auto px-6">
          <p className="type-label text-brand-gold mb-4">What Your Report Can Reveal</p>
          <h2 className="type-display-m text-brand-white mb-10">
            Recovery patterns, translated into practical insight.
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {states.map((state) => (
              <div key={state.title} className="p-7 border border-brand-border bg-brand-surface" style={{ borderRadius: "2px" }}>
                <h3 className="font-display font-bold text-brand-white text-lg mb-4">{state.title}</h3>
                <p className="type-body-m text-brand-muted">{state.desc}</p>
              </div>
            ))}
          </div>
          <p className="type-body-m text-brand-muted mt-8 max-w-3xl">
            Results are educational and intended to support recovery awareness rather than diagnose
            medical conditions.
          </p>
        </div>
      </section>

      <section className="py-24 bg-brand-surface border-y border-brand-border">
        <div className="max-w-6xl mx-auto px-6">
          <p className="type-label text-brand-gold mb-4">Recovery Support Tools</p>
          <h2 className="type-display-m text-brand-white mb-10">
            Measurement first, recovery support second.
          </h2>
          <div
            className="relative mb-10 overflow-hidden border border-brand-border bg-white shadow-[0_18px_60px_rgba(0,0,0,0.12)]"
            style={{ borderRadius: "2px" }}
          >
            <Image
              src="/assets/nuropod-redlight-compression.PNG"
              alt="Nuropod sensory-based recovery support, red light therapy, and compression therapy setup"
              width={1024}
              height={1536}
              className="h-auto w-full"
              sizes="(max-width: 1024px) 100vw, 960px"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {interventions.map((item) => (
              <div key={item.title} className="p-8 border border-brand-border bg-white" style={{ borderRadius: "2px" }}>
                <h3 className="font-display font-bold text-brand-white text-xl mb-4">{item.title}</h3>
                <p className="type-body-m text-brand-muted">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 p-8 border border-brand-border bg-brand-black" style={{ borderRadius: "2px" }}>
            <h3 className="font-display font-bold text-brand-white text-xl mb-4">
              Why combine multiple approaches?
            </h3>
            <p className="type-body-l text-brand-muted">
              Recovery is influenced by multiple factors. This session combines measurement,
              comfort-focused sensory input, circulatory support, and recovery-focused tools
              to create a structured recovery experience. The goal is to better understand
              individual responses and support recovery in a measurable way.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-black">
        <div className="max-w-6xl mx-auto px-6">
          <p className="type-label text-brand-gold mb-4">What To Expect</p>
          <h2 className="type-display-m text-brand-white mb-10">Measure → Support → Re-measure</h2>
          <div className="grid md:grid-cols-4 gap-5">
            {steps.map(([num, title]) => (
              <div key={num} className="p-7 border border-brand-border bg-brand-surface" style={{ borderRadius: "2px" }}>
                <p className="font-mono text-brand-gold text-xs tracking-widest mb-4">{num}</p>
                <h3 className="font-body font-medium text-brand-white">{title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-surface border-y border-brand-border">
        <div className="max-w-3xl mx-auto px-6">
          <p className="type-label text-brand-gold mb-4">Common Questions</p>
          <h2 className="type-display-m text-brand-white mb-10">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group border border-brand-border bg-brand-black open:border-brand-gold/25 transition-colors duration-300"
                style={{ borderRadius: "2px" }}
              >
                <summary className="cursor-pointer px-6 py-4 font-body text-brand-white font-light text-sm flex items-center justify-between gap-4 list-none select-none">
                  <span>{faq.q}</span>
                  <span className="shrink-0 text-brand-gold text-lg leading-none group-open:rotate-45 transition-transform duration-200">
                    +
                  </span>
                </summary>
                <p className="px-6 pb-5 font-body font-light text-brand-muted text-sm leading-relaxed">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-black text-center">
        <div className="max-w-3xl mx-auto px-6">
          <p className="type-label text-brand-gold mb-5">Start With Your Baseline</p>
          <h2 className="type-display-m text-brand-white mb-6">How recovered is your system?</h2>
          <p className="type-body-l text-brand-muted mb-10 max-w-xl mx-auto">
            Most people track their workouts. Few people track their recovery. Start with a Human
            System Profile™ and understand your recovery baseline.
          </p>
          <BookButton />
        </div>
      </section>
    </>
  );
}
