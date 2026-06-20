"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import BookingButton from "@/components/BookingButton";

const links = [
  {
    label: "AI Movement Analysis",
    href: "/ai-movement-evaluation",
    copy: "Understand movement quality, posture, mobility, balance, asymmetry, and recurring pain patterns.",
  },
  {
    label: "Physical Therapy Evaluation",
    href: "/physical-therapy-near-penn-station",
    copy: "Connect clinical findings to a one-on-one treatment plan for pain, injury, or movement limitations.",
  },
  {
    label: "Human System Reset™",
    href: "/human-system-reset",
    copy: "Use recovery metrics and wellness-oriented tools to guide a recovery-focused experience.",
  },
];

export default function StartWithMeasurementSection() {
  return (
    <section className="relative py-24 md:py-32 bg-white overflow-hidden">
      <div
        className="absolute inset-x-0 top-0 h-[420px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 90% 60% at 50% -5%, rgba(255,119,89,0.05) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="type-label text-brand-gold mb-4"
            >
              Start With Measurement
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="type-display-m text-brand-white mb-6"
            >
              Understand how your body moves and recovers before choosing treatment.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.14 }}
              className="type-body-l text-brand-muted mb-8"
            >
              Our assessment process combines clinical expertise, movement analysis, and
              recovery metrics to help identify meaningful patterns before creating a plan.
            </motion.p>
            <BookingButton variant="primary" label="Start Your Assessment" />
          </div>

          <div className="grid gap-4">
            {links.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="p-7 border border-brand-border bg-brand-surface hover:border-brand-gold/25 transition-colors"
                style={{ borderRadius: "2px" }}
              >
                <Link
                  href={item.href}
                  className="font-display font-bold text-brand-white text-xl hover:text-brand-gold transition-colors"
                >
                  {item.label}
                </Link>
                <p className="type-body-m text-brand-muted mt-3">{item.copy}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
