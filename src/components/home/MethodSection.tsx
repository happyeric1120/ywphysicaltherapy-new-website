"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const steps = [
  {
    number: "01",
    phase: "REVEAL",
    chinese: "找出根源",
    tagline: "Measure before choosing the intervention.",
    copy: "Physical therapy evaluation, AI movement analysis, and HRV assessment clarify what is limiting movement, recovery, and performance.",
    tags: ["PT Evaluation", "AI Movement Analysis", "HRV Assessment", "Clinical Reasoning"],
  },
  {
    number: "02",
    phase: "RELEASE",
    chinese: "解除限制",
    tagline: "Reduce mechanical barriers to movement.",
    copy: "Targeted hands-on care and recovery technology help address tissue irritability, stiffness, and restrictions when appropriate.",
    tags: ["Manual Therapy", "Focused Shockwave", "Radial Shockwave", "TECAR Therapy", "Class IV Laser"],
  },
  {
    number: "03",
    phase: "RESTORE",
    chinese: "重建功能",
    tagline: "Restore recovery capacity and nervous system adaptability.",
    copy: "Nervous System Reset is nested here: HRV-guided recovery, taVNS, red light, and compression may support recovery readiness.",
    tags: ["Nervous System Reset", "HRV-Guided Recovery", "taVNS", "Red / Near-Infrared Light", "Compression"],
  },
  {
    number: "04",
    phase: "REINFORCE",
    chinese: "強化防護",
    tagline: "Build resilience and long-term adaptation.",
    copy: "Strength training, movement retraining, and performance optimization help your system tolerate real work, sport, and life demands.",
    tags: ["Strength Training", "Exercise Prescription", "Movement Retraining", "Performance Optimization"],
  },
];

export default function MethodSection() {
  return (
    <section className="relative py-28 md:py-36 bg-white overflow-hidden">
      {/* Top warm coral tint */}
      <div
        className="absolute inset-x-0 top-0 h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 90% 60% at 50% -5%, rgba(255,119,89,0.05) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="mb-20">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="type-label text-brand-gold mb-5"
          >
            Central Framework
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="type-display-l text-brand-white mb-6"
          >
            The Human System Reset™ Method
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="type-body-l text-brand-muted max-w-2xl"
          >
            Assessment → recovery intervention → adaptation → performance. Individual
            services are selected as tools inside this process.
          </motion.p>
        </div>

        <div className="hidden md:grid grid-cols-4 gap-3 mb-10" aria-hidden="true">
          {steps.map((step, index) => (
            <div key={step.phase} className="flex items-center gap-3">
              <div className="flex-1 border border-brand-gold/30 bg-brand-gold-dim px-4 py-3 text-center">
                <span className="type-label text-brand-gold">{step.phase}</span>
              </div>
              {index < steps.length - 1 && <span className="type-label text-brand-muted">→</span>}
            </div>
          ))}
        </div>

        {/* Steps grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {steps.map((step, i) => (
            <motion.div
              key={step.phase}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: i * 0.1 }}
              className="relative p-10 border border-brand-border rounded-xl bg-brand-surface hover:border-[rgba(0,0,0,0.2)] hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)] transition-all duration-300 group"
            >
              {/* Ghost number */}
              <span className="absolute top-8 right-8 font-display font-bold text-7xl text-[rgba(0,0,0,0.04)] select-none leading-none">
                {step.number}
              </span>

              <div className="relative z-10">
                <div className="flex items-baseline gap-3 mb-4">
                  <h3 className="font-display font-bold text-brand-white text-2xl tracking-tight">
                    {step.phase}
                  </h3>
                  <span className="type-label text-brand-gold">{step.chinese}</span>
                </div>

                <div className="h-px w-10 bg-brand-gold/40 mb-5" />

                <p className="font-display font-medium text-brand-gold text-[15px] mb-4 leading-snug">
                  {step.tagline}
                </p>

                <p className="type-body-m text-brand-muted mb-7">
                  {step.copy}
                </p>

                <div className="flex flex-wrap gap-2">
                  {step.tags.map((tag) => (
                    <span
                      key={tag}
                      className="type-tag text-brand-muted px-3 py-1 rounded-full border border-brand-border bg-white group-hover:border-[rgba(0,0,0,0.15)] transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 text-center"
        >
          <Link
            href="/physical-therapy-near-penn-station"
            className="inline-flex items-center gap-2 font-body text-sm text-brand-gold hover:text-brand-gold-light transition-colors tracking-wide"
          >
            Explore Body Reset →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
