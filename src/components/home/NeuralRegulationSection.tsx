"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const signals = [
  "HRV recovery assessment",
  "Human System Profile™",
  "Recovery readiness",
  "Recovery flexibility",
  "System load",
  "Post-session reassessment",
];

export default function NeuralRegulationSection() {
  return (
    <section className="relative py-24 md:py-32 bg-white overflow-hidden">
      <div
        className="absolute inset-x-0 top-0 h-[420px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(155,127,212,0.08) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-6 grid lg:grid-cols-[0.95fr_1.05fr] gap-12 items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="type-label text-brand-gold mb-5"
          >
            Neural Regulation
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="type-display-m text-brand-white mb-6"
          >
            Recovery and resilience support you can measure.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.14 }}
            className="type-body-l text-brand-muted mb-8"
          >
            Neural Regulation is the recovery-focused pathway inside Human System Reset™. It starts
            with a Human System Profile™ using HRV-based wellness metrics, then pairs recovery-focused
            support with reassessment so you can better understand your baseline and response.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-3 mb-9"
          >
            {signals.map((signal) => (
              <div
                key={signal}
                className="px-4 py-3 border border-brand-border bg-brand-surface type-body-m text-brand-muted"
                style={{ borderRadius: "2px" }}
              >
                {signal}
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.26 }}
          >
            <Link
              href="/neural-regulation"
              className="inline-block font-body font-medium text-sm tracking-wide px-7 py-3 rounded-full bg-brand-white text-white hover:bg-[#333333] transition-all duration-200"
            >
              Explore Neural Regulation →
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.12, duration: 0.7 }}
          className="relative overflow-hidden border border-brand-border bg-white shadow-[0_24px_80px_rgba(0,0,0,0.12)]"
          style={{ borderRadius: "2px" }}
        >
          <Image
            src="/assets/human-system-profile-report.png"
            alt="Human System Profile HRV recovery report preview for recovery assessment"
            width={800}
            height={1254}
            className="h-auto w-full"
            sizes="(max-width: 1024px) 100vw, 540px"
          />
        </motion.div>
      </div>
    </section>
  );
}
