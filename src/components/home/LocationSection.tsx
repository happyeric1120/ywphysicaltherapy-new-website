"use client";

import { motion } from "framer-motion";
import BookingButton from "@/components/BookingButton";

export default function LocationSection() {
  return (
    <section className="relative py-24 md:py-32 bg-brand-surface border-t border-brand-border">
      <div className="max-w-6xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs text-brand-gold tracking-[0.3em] uppercase mb-4"
        >
          Find Me
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-bold text-brand-white mb-14"
          style={{ fontSize: "clamp(24px, 3vw, 40px)" }}
        >
          Physical Therapy Near Penn Station,<br className="hidden md:block" /> Midtown Manhattan
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div>
              <p className="font-mono text-[10px] text-brand-gold tracking-widest uppercase mb-2">Address</p>
              <p className="font-body text-brand-white text-base">
                224 W 35th St #301-5<br />
                New York, NY 10001
              </p>
              <p className="font-body font-light text-brand-muted text-sm mt-1">
                2 blocks from Penn Station / Madison Square Garden
              </p>
            </div>

            <div>
              <p className="font-mono text-[10px] text-brand-gold tracking-widest uppercase mb-2">Subway</p>
              <p className="font-body font-light text-brand-muted text-sm">
                1 / 2 / 3 · A / C / E · B / D / F / M · N / Q / R / W
              </p>
            </div>

            <div>
              <p className="font-mono text-[10px] text-brand-gold tracking-widest uppercase mb-2">Hours</p>
              <div className="space-y-1 font-body font-light text-brand-muted text-sm">
                <p>Monday · 10am – 4pm</p>
                <p>Wednesday · 10am – 4pm</p>
                <p>Thursday · 10am – 4pm</p>
                <p className="text-brand-muted/60 text-xs mt-2">By appointment only</p>
              </div>
            </div>

            <div>
              <p className="font-mono text-[10px] text-brand-gold tracking-widest uppercase mb-2">Contact</p>
              <div className="space-y-1 font-body text-sm">
                <a href="tel:3475715717" className="block text-brand-muted hover:text-brand-white transition-colors">
                  347-571-5717
                </a>
                <a href="mailto:ywphysicaltherapy@gmail.com" className="block text-brand-muted hover:text-brand-white transition-colors">
                  ywphysicaltherapy@gmail.com
                </a>
              </div>
            </div>

            <div className="pt-4">
              <BookingButton variant="primary" label="Book Your Reset Session" />
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative h-80 md:h-[420px] border border-brand-border overflow-hidden"
            style={{ borderRadius: "2px" }}
          >
            <iframe
              src="https://www.google.com/maps?q=YW%20Physical%20Therapy%2C%20224%20W%2035th%20St%20New%20York%2C%20NY%2010001&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(30%)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              aria-label="YW Physical Therapy — 224 W 35th St #301-5, New York, NY 10001"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
