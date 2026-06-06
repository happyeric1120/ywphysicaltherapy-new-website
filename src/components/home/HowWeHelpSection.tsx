"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const pillars = [
  {
    title: "Pain & Movement",
    desc: "For neck pain, back pain, posture issues, sports injuries, and movement limitations that need a root-cause plan.",
    examples: ["Movement Analysis", "Physical Therapy", "Shockwave", "Strength Retraining"],
    href: "/physical-therapy-near-penn-station",
  },
  {
    title: "Recovery Systems",
    desc: "For recovery readiness, nervous system load, HRV assessment, and regulation support inside Human System Reset™.",
    examples: ["HRV Assessment", "Recovery Readiness", "Neural Regulation", "Recovery Technologies"],
    href: "/neural-regulation",
  },
];

export default function HowWeHelpSection() {
  return (
    <section className="relative py-24 md:py-32 bg-brand-surface border-y border-brand-border">
      <div className="max-w-6xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="type-label text-brand-gold mb-4"
        >
          How We Help
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="type-display-m text-brand-white mb-6"
        >
          One method. Two main entry points.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.14 }}
          className="type-body-l text-brand-muted max-w-3xl mb-12"
        >
          Human System Reset™ organizes assessment, recovery technology, movement retraining,
          and physical therapy into one coherent process.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-5">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="flex flex-col p-8 border border-brand-border bg-brand-black hover:border-brand-gold/30 transition-colors"
              style={{ borderRadius: "2px" }}
            >
              <h3 className="font-display font-bold text-brand-white text-xl mb-4">{pillar.title}</h3>
              <p className="type-body-m text-brand-muted mb-7 flex-1">{pillar.desc}</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {pillar.examples.map((example) => (
                  <span
                    key={example}
                    className="type-tag text-brand-muted px-3 py-1 border border-brand-border bg-brand-surface"
                    style={{ borderRadius: "999px" }}
                  >
                    {example}
                  </span>
                ))}
              </div>
              <Link href={pillar.href} className="type-body-m text-brand-gold hover:text-brand-gold-light transition-colors">
                Explore →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
