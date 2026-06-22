"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const pillars = [
  {
    title: "Pain & Injury Recovery",
    desc: "For neck pain, back pain, shoulder pain, knee pain, tendon injuries, and recurring movement-related pain.",
    examples: ["Physical Therapy", "Shockwave Therapy", "Movement Analysis"],
    href: "/physical-therapy-near-penn-station",
    cta: "See Pain & Injury Care",
  },
  {
    title: "Recovery & Wellness",
    desc: "For high stress, fatigue, recovery challenges, busy lifestyles, and performance demands.",
    examples: ["Human System Reset™", "Neural Regulation", "Recovery Technologies"],
    href: "/human-system-reset",
    cta: "See Recovery & Wellness",
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
          How Can We Help?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.14 }}
          className="type-body-l text-brand-muted max-w-3xl mb-12"
        >
          Choose the path that best matches what you are dealing with today. We can refine
          the plan after assessment and measurement.
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
              <Link
                href={pillar.href}
                className="inline-block self-start font-body font-medium text-sm tracking-wide px-6 py-3 bg-brand-gold text-brand-black hover:opacity-90 transition-opacity"
                style={{ borderRadius: "2px" }}
              >
                {pillar.cta} →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
