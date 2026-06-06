"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const conditions = [
  { label: "Neck Pain", href: "/neck-pain-nyc" },
  { label: "Back Pain", href: "/back-pain-nyc" },
  { label: "Shoulder Pain", href: "/shoulder-pain-nyc" },
  { label: "Knee Pain", href: "/knee-pain-nyc" },
  { label: "Sports Injuries", href: "/sports-injury-nyc" },
  { label: "Desk Worker Pain", href: "/desk-worker-pain-nyc" },
];

export default function ConditionsSection() {
  return (
    <section className="py-24 md:py-32 bg-brand-black">
      <div className="max-w-6xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="type-label text-brand-gold mb-4"
        >
          Conditions We Commonly Help
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="type-display-m text-brand-white mb-10"
        >
          Pain patterns are assessed through the whole system.
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {conditions.map((condition, index) => (
            <motion.div
              key={condition.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Link
                href={condition.href}
                className="block p-6 border border-brand-border bg-brand-surface hover:border-brand-gold/30 transition-colors"
                style={{ borderRadius: "2px" }}
              >
                <span className="font-body font-medium text-brand-white">{condition.label}</span>
                <span className="block type-body-m text-brand-muted mt-2">View approach →</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
