"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const steps = [
  {
    number: "01",
    phase: "REVEAL",
    chinese: "找出根源",
    tagline: "Pain is a symptom. We find the cause.",
    copy: "Full-body movement assessment powered by AI analysis and clinical expertise. We map how your entire system moves — not just where it hurts.",
    tags: ["Full-Body Assessment", "Revenite AI", "Postural Screening", "Clinical Interview"],
  },
  {
    number: "02",
    phase: "RELEASE",
    chinese: "解除限制",
    tagline: "Before you can rebuild, you have to let go.",
    copy: "Precise, layered intervention to remove chronic tension, fascial adhesions, and inflammatory tissue — from surface to source.",
    tags: ["Manual Therapy", "IASTM", "Theragun", "TECAR Therapy", "Shockwave", "Class IV Laser"],
  },
  {
    number: "03",
    phase: "RESTORE",
    chinese: "重建功能",
    tagline: "Teach your body how to move correctly again.",
    copy: "Neuromuscular re-education and movement retraining to rebuild efficient, pain-free movement patterns that last.",
    tags: ["Movement Retraining", "Compex EMS", "Air Compression", "Therapeutic Exercise"],
  },
  {
    number: "04",
    phase: "REINFORCE",
    chinese: "強化防護",
    tagline: "A body that's strong doesn't break the same way twice.",
    copy: "Targeted strength work, functional training, and self-maintenance education — so progress sticks and you don't need us forever.",
    tags: ["Strength Training", "EMS Power Phase", "Home Program", "Performance Coaching"],
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
            Our Proprietary Method
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
            A four-phase protocol that systematically identifies, treats, and
            rebuilds — so results last.
          </motion.p>
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
            href="/human-system-reset"
            className="inline-flex items-center gap-2 font-body text-sm text-brand-gold hover:text-brand-gold-light transition-colors tracking-wide"
          >
            See the Full Method →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
