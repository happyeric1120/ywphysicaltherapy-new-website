"use client";

import { motion } from "framer-motion";

const problems = [
  { copy: "You've tried rest, stretching, and cortisone shots. The pain keeps coming back." },
  { copy: "You've seen providers who treat where it hurts — not why it hurts." },
  { copy: "You don't have months for rehab. You need results in sessions, not timelines." },
];

export default function TensionSection() {
  return (
    <section className="relative py-24 md:py-32 bg-brand-surface border-y border-brand-border overflow-hidden">
      {/* Center-bottom vignette for dramatic weight */}
      <div
        className="absolute inset-x-0 bottom-0 h-[60%] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 60% at 50% 100%, rgba(0,0,0,0.05) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      {/* Top-left purple glow */}
      <div
        className="absolute top-0 left-0 w-[500px] h-[300px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 80% at 0% 0%, rgba(155,127,212,0.07) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="p-8 border border-brand-border rounded-xl bg-white hover:border-[rgba(0,0,0,0.2)] hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col gap-4"
            >
              <span className="font-mono text-brand-gold text-xs tracking-widest">
                0{i + 1}
              </span>
              <div className="h-px w-8 bg-[rgba(0,0,0,0.15)]" />
              <p className="font-body font-light text-brand-muted text-base leading-relaxed">
                {p.copy}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="font-display font-bold text-brand-white text-center"
          style={{ fontSize: "clamp(24px, 3vw, 36px)", letterSpacing: "-0.02em" }}
        >
          There&apos;s a better way.
        </motion.p>
      </div>
    </section>
  );
}
