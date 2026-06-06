"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import BookingButton from "@/components/BookingButton";

const HRV_BOOKING_URL = "https://calendar.app.google/1BkTPd9xWbbQi4v49";

export default function BookAssessmentSection() {
  return (
    <section className="py-24 md:py-32 bg-brand-black text-center">
      <div className="max-w-4xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="type-label text-brand-gold mb-5"
        >
          Book An Assessment
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="type-display-m text-brand-white mb-6"
        >
          Start With Measurement.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.14 }}
          className="type-body-l text-brand-muted max-w-2xl mx-auto mb-10"
        >
          The best intervention depends on understanding what is limiting recovery,
          performance, and movement.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <BookingButton variant="primary" label="Book Physical Therapy Evaluation" />
          <a
            href={HRV_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-body font-medium text-sm tracking-wide px-7 py-3 rounded-full border border-brand-border text-brand-white hover:border-brand-gold hover:text-brand-gold transition-colors"
          >
            Book HRV Assessment
          </a>
          <Link
            href="/human-system-reset-assessment"
            className="inline-block font-body font-medium text-sm tracking-wide px-7 py-3 rounded-full border border-brand-border text-brand-muted hover:border-brand-white hover:text-brand-white transition-colors"
          >
            Take Screening
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
