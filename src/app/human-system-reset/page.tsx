"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import BookingButton from "@/components/BookingButton";
import Link from "next/link";

// Note: metadata export doesn't work in "use client" components
// — placed in a wrapper. For now using a layout file approach.
// SEO is handled via layout-level metadata + JSON-LD below.

const steps = [
  {
    number: "01",
    phase: "REVEAL",
    chinese: "找出根源",
    tagline: "Measure movement, recovery, and readiness before choosing the plan.",
    desc: `Most treatment starts where the problem is noticed. Human System Reset™ starts by measuring the bigger picture. Body Reset uses AI-assisted movement analysis and clinical assessment to understand movement patterns. Neural Regulation adds HRV wellness metrics, recovery screening, and lifestyle factors to understand recovery readiness.`,
    expanded: [
      "Full-body postural and movement screening",
      "Revenite AI movement analysis (10-movement scan)",
      "HRV wellness metrics when recovery readiness is part of the picture",
      "Recovery questionnaires and lifestyle factors",
      "Clinical interview: history, lifestyle, occupation",
      "Identify meaningful movement and recovery priorities",
    ],
    tags: ["Revenite AI", "HRV Wellness Metrics", "Recovery Screening", "Clinical Interview"],
    color: "text-brand-gold border-brand-gold/30",
  },
  {
    number: "02",
    phase: "RELEASE",
    chinese: "解除限制",
    tagline: "Reduce barriers that make movement or recovery harder.",
    desc: `Tension, stiffness, tissue irritability, and recovery load can become barriers to comfortable movement. Body Reset may use hands-on care, shockwave, TECAR, or laser when appropriate. Neural Regulation may use relaxation-focused recovery support and non-invasive wellness tools to help create a better recovery environment.`,
    expanded: [
      "Manual therapy and IASTM (instrument-assisted soft tissue work)",
      "Focused + Radial Shockwave for deep tissue and tendons",
      "TECAR therapy for deep warming support",
      "Class IV Laser as a light-based recovery modality",
      "Relaxation-focused recovery support when appropriate",
      "Theragun percussive therapy for surface tension",
    ],
    tags: ["Manual Therapy", "Shockwave", "TECAR", "Class IV Laser", "Recovery Support"],
    color: "text-cyan-400 border-cyan-400/30",
  },
  {
    number: "03",
    phase: "RESTORE",
    chinese: "重建功能",
    tagline: "Rebuild movement while supporting recovery readiness.",
    desc: `Reducing restriction is only one part of the process. Body Reset restores movement through muscle activation, coordination, corrective exercise, and practice. Neural Regulation supports this phase with recovery-focused protocols, red and near-infrared light, compression, and post-session reassessment when appropriate.`,
    expanded: [
      "Motor control and coordination training",
      "Compex EMS for muscle activation support",
      "Red and near-infrared light as wellness-oriented recovery support",
      "Sequential compression for comfort and recovery support",
      "Post-session HRV or recovery reassessment when appropriate",
      "Corrective therapeutic exercise progression",
    ],
    tags: ["Movement Retraining", "Neural Regulation", "Red / Near-Infrared Light", "Compression", "Reassessment"],
    color: "text-emerald-400 border-emerald-400/30",
  },
  {
    number: "04",
    phase: "REINFORCE",
    chinese: "強化防護",
    tagline: "Make progress easier to maintain outside the clinic.",
    desc: `The final phase builds capacity for daily life, work, and training. Body Reset reinforces strength and movement habits. Neural Regulation reinforces recovery awareness, recovery routines, and follow-up measurement so progress can be tracked over time.`,
    expanded: [
      "Functional strength training (TRX, Aeke K1 smart gym)",
      "Compex EMS in high-intensity Power Phase",
      "Home program: self-mobilization, corrective exercise, load management",
      "Recovery habit planning for sleep, workload, and training rhythm",
      "Follow-up measurement to compare baseline and response",
    ],
    tags: ["Strength Training", "Home Program", "Recovery Habits", "Progress Tracking"],
    color: "text-amber-400 border-amber-400/30",
  },
];

const faqs = [
  {
    q: "How long is a typical Human System Reset™ program?",
    a: "Many clients work through the 4R cycle over 6–12 sessions, depending on goals, history, and how they respond. Some complex cases take longer. I don't set arbitrary timelines — I progress based on assessment findings and response over time.",
  },
  {
    q: "Is this different from regular physical therapy?",
    a: "Standard PT often focuses on the symptom site with generic exercise protocols. The Human System Reset™ method starts with a broader assessment, uses technology only when it supports the plan, and then rebuilds movement and capacity. Every session is one-on-one with Dr. Wu — no aides, no machines without explanation.",
  },
  {
    q: "What if I've already had PT that didn't work?",
    a: "That's a common scenario I see. Prior PT may have helped temporarily but left unanswered questions about movement patterns, recovery demands, or load tolerance. The assessment phase helps clarify what may need a different plan.",
  },
  {
    q: "Do all four phases happen every session?",
    a: "Not necessarily. Early sessions focus more on REVEAL and RELEASE. As tissue responds, I shift emphasis toward RESTORE and REINFORCE. But every session is adapted in real time based on how your body responds that day.",
  },
  {
    q: "Is this covered by insurance?",
    a: "I'm an out-of-network provider, but many patients use out-of-network benefits or HSA/FSA. Some plans (Aetna, UHC, Anthem, Oscar) may be covered through third-party billing — reach out and I'll check. See my Insurance & Pricing page for full details.",
  },
];

const sessionFlow = [
  {
    step: "Measure",
    copy: "Establish a baseline using recovery and wellness metrics.",
    examples: ["HRV assessment", "Recovery questionnaires", "Lifestyle and recovery factors"],
  },
  {
    step: "Support",
    copy: "Guide the body through a personalized recovery experience.",
    examples: ["Recovery-focused modalities", "Wellness tools", "Movement and relaxation strategies"],
  },
  {
    step: "Re-measure",
    copy: "Track short-term changes and monitor progress over time.",
    examples: ["Baseline comparison", "Follow-up measurements", "Individual response tracking"],
  },
];

const resetPathways = [
  {
    id: "body-reset",
    title: "Body Reset",
    eyebrow: "Pain & Injury",
    copy: "For pain, injury recovery, mobility limitations, and recurring movement-related symptoms. This side of Human System Reset™ uses physical therapy evaluation, AI Movement Analysis, hands-on care, shockwave therapy when appropriate, and progressive movement retraining.",
    includes: ["Physical Therapy", "AI Movement Analysis", "Shockwave Therapy", "Corrective Exercise"],
    href: "/physical-therapy-near-penn-station",
    cta: "Explore Physical Therapy",
  },
  {
    id: "neural-regulation",
    title: "Neural Regulation",
    eyebrow: "Recovery & Wellness",
    copy: "For people who want to understand recovery readiness, stress load, fatigue, and resilience patterns. This side of Human System Reset™ uses HRV wellness metrics, recovery screening, non-invasive wellness tools, and re-measurement to support a recovery-focused experience.",
    includes: ["HRV Wellness Metrics", "Recovery Screening", "Recovery Technologies", "Progress Tracking"],
    href: "/neural-regulation",
    cta: "Explore Neural Regulation",
  },
];

export default function HumanSystemResetPage() {
  return (
    <>
      {/* Hero */}
      <section className="grain gold-glow relative pt-32 pb-20 md:pt-44 md:pb-28 bg-brand-black overflow-hidden text-center">
        <div className="absolute inset-0 bg-brand-black" />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="type-label text-brand-gold mb-5"
          >
            Proprietary Method · YW Physical Therapy
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="font-display italic text-brand-gold mb-5"
            style={{ fontSize: "clamp(22px, 3vw, 34px)" }}
          >
            Systematic. Precise. Built to last.
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.16 }}
            className="type-display-l text-brand-white mb-6"
          >
            The Human System Reset™ Method
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.26 }}
            className="type-body-l text-brand-muted max-w-2xl mx-auto mb-10"
          >
            The umbrella framework for Body Reset and Neural Regulation: measure what matters,
            support the right system, then re-measure progress over time.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.36 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <BookingButton variant="primary" label="Book Your Assessment" />
            <a
              href="#method"
              className="inline-block font-body font-medium text-sm tracking-wide px-7 py-3 border border-brand-white/20 text-brand-white hover:border-brand-gold hover:text-brand-gold transition-all duration-300"
              style={{ borderRadius: "2px" }}
            >
              Explore the Method ↓
            </a>
          </motion.div>
        </div>
      </section>

      {/* Umbrella pathways */}
      <section className="py-24 bg-brand-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="type-label text-brand-gold mb-4"
            >
              The Big Umbrella
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="type-display-m text-brand-white mb-6"
            >
              Human System Reset™ includes Body Reset and Neural Regulation.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.14 }}
              className="type-body-l text-brand-muted max-w-3xl"
            >
              Some visitors come in because something hurts. Others come in because recovery,
              stress load, or resilience feels off. Human System Reset™ keeps both paths under
              one measurement-first philosophy.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-5">
            {resetPathways.map((pathway, index) => (
              <motion.div
                id={pathway.id}
                key={pathway.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="scroll-mt-28 p-8 md:p-10 border border-brand-border bg-brand-surface hover:border-brand-gold/25 transition-colors"
                style={{ borderRadius: "2px" }}
              >
                <p className="type-label text-brand-gold mb-4">{pathway.eyebrow}</p>
                <h3 className="font-display font-bold text-brand-white text-3xl mb-5">{pathway.title}</h3>
                <p className="type-body-m text-brand-muted mb-7">{pathway.copy}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {pathway.includes.map((item) => (
                    <span
                      key={item}
                      className="type-tag text-brand-muted px-3 py-1 border border-brand-border bg-brand-black"
                      style={{ borderRadius: "999px" }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <Link href={pathway.href} className="type-body-m text-brand-gold hover:text-brand-gold-light transition-colors">
                  {pathway.cta} →
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className="mt-8 p-8 md:p-10 border border-brand-gold/25 bg-brand-surface"
            style={{ borderRadius: "2px" }}
          >
            <div className="grid lg:grid-cols-[0.75fr_1.25fr] gap-8 items-start">
              <div>
                <p className="type-label text-brand-gold mb-4">Why Neural Regulation Matters</p>
                <h3 className="font-display font-bold text-brand-white text-2xl md:text-3xl leading-tight">
                  Pain and performance are not only about tissue.
                </h3>
              </div>
              <div className="space-y-4 type-body-m text-brand-muted">
                <p>
                  Many people do not just need stronger muscles or looser joints. Sleep, stress load,
                  fatigue, work demand, and recovery habits can influence how ready the body feels
                  for movement, training, and healing.
                </p>
                <p>
                  Neural Regulation is the Human System Reset™ pathway for recovery and resilience.
                  It uses HRV wellness metrics, recovery questionnaires, non-invasive wellness tools,
                  and re-measurement to help you understand your baseline and track short-term
                  responses over time.
                </p>
                <Link
                  href="/neural-regulation"
                  className="inline-block type-body-m text-brand-gold hover:text-brand-gold-light transition-colors"
                >
                  Learn more about Neural Regulation →
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Studio environment */}
      <section className="py-20 bg-brand-surface border-y border-brand-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative aspect-square overflow-hidden border border-brand-gold/25 bg-brand-black shadow-[0_24px_80px_rgba(0,0,0,0.18)]"
              style={{ borderRadius: "2px" }}
            >
              <Image
                src="/assets/human-system-reset-studio-equipment-midtown-manhattan.png"
                alt="YW Physical Therapy studio and advanced recovery equipment for Human System Reset in Midtown Manhattan"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 540px"
                priority
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <p className="type-label text-brand-gold mb-4">The Studio</p>
              <h2 className="type-display-m text-brand-white mb-6">
                Human System Reset™ happens in a private Midtown Manhattan treatment environment.
              </h2>
              <div className="space-y-4 font-body font-light text-brand-muted text-base leading-relaxed">
                <p>
                  The space is designed for one-on-one care: assessment, hands-on support,
                  recovery-focused technology, and corrective movement without aides or handoffs.
                </p>
                <p>
                  Each tool supports a specific purpose, from AI-assisted movement analysis
                  to tissue recovery, recovery monitoring, and progressive retraining.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why we built it */}
      <section className="py-24 bg-brand-surface border-y border-brand-border">
        <div className="max-w-4xl mx-auto px-6">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="type-label text-brand-gold mb-4"
          >
            Why the Method Exists
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="type-display-m text-brand-white mb-8"
          >
            Many people need more than a single symptom-based plan.
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8 font-body font-light text-brand-muted text-base leading-relaxed">
            <p>
              Many people arrive after trying care that focused only on the painful area.
              That can help, but it may leave movement patterns, recovery demands, lifestyle
              factors, and load tolerance unmeasured.
            </p>
            <p>
              Human System Reset™ was developed to make the process clearer: measure what
              matters, support recovery and movement, then re-measure so progress is easier
              to understand over time.
            </p>
          </div>
        </div>
      </section>

      {/* Session flow */}
      <section className="py-24 bg-brand-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14 text-center">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="type-label text-brand-gold mb-4"
            >
              What Happens During a Session?
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="type-display-m text-brand-white mb-6"
            >
              Measure → Support → Re-measure
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.14 }}
              className="type-body-l text-brand-muted max-w-3xl mx-auto"
            >
              Each session is structured around a simple experience: establish a baseline,
              provide personalized recovery support, then compare changes over time.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {sessionFlow.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="relative p-8 border border-brand-border bg-brand-surface"
                style={{ borderRadius: "2px" }}
              >
                <p className="type-label text-brand-gold mb-4">{item.step}</p>
                <p className="type-body-m text-brand-muted mb-6">{item.copy}</p>
                <ul className="space-y-3">
                  {item.examples.map((example) => (
                    <li key={example} className="flex gap-3 font-body font-light text-brand-muted text-sm leading-relaxed">
                      <span className="shrink-0 mt-1.5 w-1 h-1 rounded-full bg-brand-gold/60" />
                      {example}
                    </li>
                  ))}
                </ul>
                {index < sessionFlow.length - 1 && (
                  <span className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 type-label text-brand-gold">
                    →
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The 4 phases */}
      <section id="method" className="py-28 md:py-36 bg-brand-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-20 text-center">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="type-label text-brand-gold mb-4"
            >
              The 4R Framework
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="type-display-l text-brand-white"
            >
              REVEAL → RELEASE → RESTORE → REINFORCE
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.14 }}
              className="type-body-l text-brand-muted max-w-3xl mx-auto mt-6"
            >
              The 4R Framework serves as the philosophy behind Human System Reset™
              and guides how each session is structured.
            </motion.p>
          </div>

          <div className="space-y-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.phase}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: i * 0.08 }}
                className="relative p-10 md:p-14 border border-brand-border bg-brand-surface hover:border-brand-gold/20 transition-colors duration-400 group"
                style={{ borderRadius: "2px" }}
              >
                {/* Ghost number */}
                <span className="absolute top-8 right-8 font-display font-black text-8xl text-brand-gold/6 select-none leading-none">
                  {step.number}
                </span>

                <div className="grid md:grid-cols-2 gap-10 items-start relative z-10">
                  {/* Left: phase header */}
                  <div>
                    <div className="flex items-baseline gap-3 mb-4">
                      <h3 className={`font-display font-bold text-3xl tracking-wide ${step.color.split(" ")[0]}`}>
                        {step.phase}
                      </h3>
                      <span className="type-label text-brand-gold">{step.chinese}</span>
                    </div>
                    <div className="h-px w-10 bg-brand-gold/40 mb-5" />
                    <p className="font-display font-normal italic text-brand-gold text-base mb-5 leading-snug">
                      {step.tagline}
                    </p>
                    <p className="type-body-m text-brand-muted mb-6">{step.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {step.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`type-tag px-2.5 py-1 border ${step.color}`}
                          style={{ borderRadius: "2px" }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right: expanded details */}
                  <div>
                    <p className="type-label text-brand-muted/60 mb-4">What happens in this phase:</p>
                    <ul className="space-y-3">
                      {step.expanded.map((item) => (
                        <li key={item} className="flex gap-3 font-body font-light text-brand-muted text-sm leading-relaxed">
                          <span className="shrink-0 mt-1 w-1 h-1 rounded-full bg-brand-gold/60" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who benefits */}
      <section className="py-24 bg-brand-surface border-y border-brand-border">
        <div className="max-w-5xl mx-auto px-6">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="type-label text-brand-gold mb-4"
          >
            Who This Is For
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="type-display-m text-brand-white mb-10"
          >
            The Method Works Best For
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                who: "The Desk Worker",
                copy: "Chronic neck, shoulder, or low back pain from sustained postures that never fully resolves with stretching or massage.",
                href: "/desk-worker-body-reset",
              },
              {
                who: "The Chronic Pain Patient",
                copy: "Pain that has persisted for months or years, often across multiple joints, with multiple prior providers and no lasting relief.",
                href: "/back-pain-nyc",
              },
              {
                who: "The Active Optimizer",
                copy: "Performance limitations, recurring soft tissue injuries, or movement asymmetries that limit training and athletic output.",
                href: "/sports-injury-nyc",
              },
            ].map((a) => (
              <motion.div
                key={a.who}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 border border-brand-border bg-brand-black hover:border-brand-gold/25 transition-colors group"
                style={{ borderRadius: "2px" }}
              >
                <p className="type-label text-brand-gold mb-4">{a.who}</p>
                <p className="type-body-m text-brand-muted mb-6">{a.copy}</p>
                <Link
                  href={a.href}
                  className="type-body-m text-brand-gold group-hover:text-brand-gold-light transition-colors"
                >
                  This is for me →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-brand-black">
        <div className="max-w-3xl mx-auto px-6">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="type-label text-brand-gold mb-4"
          >
            Common Questions
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="type-display-m text-brand-white mb-10"
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group border border-brand-border bg-brand-surface open:border-brand-gold/25 transition-colors duration-300"
                style={{ borderRadius: "2px" }}
              >
                <summary className="cursor-pointer px-6 py-4 font-body text-brand-white font-light text-sm flex items-center justify-between gap-4 list-none select-none">
                  <span>{faq.q}</span>
                  <span className="shrink-0 text-brand-gold text-lg leading-none group-open:rotate-45 transition-transform duration-200">+</span>
                </summary>
                <p className="px-6 pb-5 font-body font-light text-brand-muted text-sm leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-brand-surface border-t border-brand-border text-center">
        <div className="max-w-3xl mx-auto px-6">
          <p className="type-label text-brand-gold mb-5">Start Your Reset</p>
          <h2 className="type-display-m text-brand-white mb-6">
            Ready to Find the Root Cause?
          </h2>
          <p className="type-body-l text-brand-muted mb-10 max-w-xl mx-auto">
            Every journey begins with the REVEAL phase — a full-body assessment that maps
            your whole system. One-on-one with Dr. Wu. No aides, no handoffs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BookingButton variant="primary" label="Book Your Assessment" />
            <Link
              href="/ai-movement-evaluation"
              className="inline-block font-body font-medium text-sm tracking-wide px-7 py-3 border border-brand-white/20 text-brand-white hover:border-brand-gold hover:text-brand-gold transition-all duration-300"
              style={{ borderRadius: "2px" }}
            >
              Movement Analysis →
            </Link>
            <Link
              href="/insurance-pricing"
              className="inline-block font-body font-medium text-sm tracking-wide px-7 py-3 border border-brand-white/20 text-brand-white hover:border-brand-gold hover:text-brand-gold transition-all duration-300"
              style={{ borderRadius: "2px" }}
            >
              Insurance & Pricing →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
