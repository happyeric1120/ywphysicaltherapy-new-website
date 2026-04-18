"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const audiences = [
  {
    label: "The Desk Worker",
    headline: "Neck. Back. Hips. From sitting all day.",
    copy: "You've adjusted your chair, bought a standing desk, done the stretches. The pain keeps coming back because the source was never addressed. I fix that — in sessions, not months.",
    cta: "This is for me →",
    href: "/desk-worker-pain-nyc",
  },
  {
    label: "The Active Optimizer",
    headline: "Train hard. Recover smarter.",
    copy: "You already invest in performance. Human System Reset™ identifies the movement inefficiencies quietly limiting you — before they become injuries that sideline you.",
    cta: "This is for me →",
    href: "/sports-injury-nyc",
  },
  {
    label: "The Chronic Pain Sufferer",
    headline: "You've tried everything. You haven't tried this.",
    copy: "Multiple providers, no lasting results. Chronic pain rarely lives where it appears. I start from scratch — assessing your whole system — and rebuild from the real source.",
    cta: "This is for me →",
    href: "/back-pain-nyc",
  },
];

export default function AudienceSection() {
  return (
    <section className="relative py-24 md:py-32 bg-brand-surface border-y border-brand-border">
      <div className="max-w-6xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs text-brand-gold tracking-[0.3em] uppercase mb-4"
        >
          Who I Help
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-bold text-brand-white mb-14"
          style={{ fontSize: "clamp(24px, 3vw, 40px)" }}
        >
          Physical Therapy for Every Body in NYC
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {audiences.map((a, i) => (
            <motion.div
              key={a.label}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="flex flex-col p-8 border border-brand-border hover:border-brand-gold/30 transition-colors duration-300 bg-brand-black group"
              style={{ borderRadius: "2px" }}
            >
              <span className="font-mono text-[10px] text-brand-gold tracking-widest uppercase mb-4">
                {a.label}
              </span>
              <h3 className="font-display font-bold text-brand-white text-xl mb-4 leading-snug">
                {a.headline}
              </h3>
              <p className="font-body font-light text-brand-muted text-sm leading-relaxed flex-1 mb-8">
                {a.copy}
              </p>
              <Link
                href={a.href}
                className="font-body text-sm text-brand-gold group-hover:text-brand-gold-light transition-colors tracking-wide"
              >
                {a.cta}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
