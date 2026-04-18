"use client";

import { motion } from "framer-motion";
import BookingButton from "@/components/BookingButton";
import Link from "next/link";

const BOOKING_URL =
  "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1xZH1VXDVjTyJGYTH-ygHvf3JFgbZ7DLUxk3epoqNZwxFwLcQqb4Fti-C2z8kkThjHPylSlBno";

const steps = [
  {
    num: "01",
    title: "Choose a Time",
    desc: "Select an available slot from the booking calendar. Sessions are Monday, Wednesday, and Thursday, 10am–4pm.",
  },
  {
    num: "02",
    title: "Fill in Your Details",
    desc: "Provide your contact info and a brief description of your primary concern. This helps Dr. Wu prepare before your session.",
  },
  {
    num: "03",
    title: "Confirm Your Appointment",
    desc: "You&apos;ll receive a confirmation email with the address, what to bring (insurance card, referral if required), and what to expect.",
  },
  {
    num: "04",
    title: "Your Assessment Session",
    desc: "Your first session is the REVEAL phase — a full-body movement assessment. Wear comfortable athletic clothing. Plan for 60–75 minutes.",
  },
];

export default function BookPage() {
  return (
    <>
      {/* Hero */}
      <section className="grain gold-glow relative pt-32 pb-20 md:pt-44 md:pb-28 bg-brand-black overflow-hidden text-center">
        <div className="absolute inset-0 bg-brand-black" />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            className="type-label text-brand-gold mb-5"
          >
            Book Your Session · YW Physical Therapy
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="type-display-l text-brand-white mb-6"
          >
            Book Your Session
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="type-body-l text-brand-muted max-w-2xl mx-auto mb-10"
          >
            One-on-one physical therapy in Midtown Manhattan, two blocks from Penn Station.
            By appointment only — Mon / Wed / Thu, 10am–4pm.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-body font-medium text-sm tracking-wide px-10 py-4 bg-brand-gold text-brand-black hover:bg-brand-gold-light transition-all duration-200"
              style={{ borderRadius: "2px" }}
            >
              Open Booking Calendar →
            </a>
          </motion.div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-brand-surface border-y border-brand-border">
        <div className="max-w-5xl mx-auto px-6">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="type-label text-brand-gold mb-4"
          >
            What to Expect
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="type-display-m text-brand-white mb-10"
          >
            How Booking Works
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-5">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative p-8 border border-brand-border bg-brand-black"
                style={{ borderRadius: "2px" }}
              >
                <span className="absolute top-6 right-6 font-display font-black text-5xl text-brand-gold/8 leading-none select-none">
                  {step.num}
                </span>
                <p className="type-label text-brand-gold mb-3">{step.num}</p>
                <h3 className="font-body font-medium text-brand-white mb-3">{step.title}</h3>
                <p className="type-body-m text-brand-muted">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinic info */}
      <section className="py-24 bg-brand-black">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-14">
            {/* Info */}
            <div>
              <p className="type-label text-brand-gold mb-4">Location & Hours</p>
              <h2 className="type-display-m text-brand-white mb-8">
                224 W 35th St #301-5<br />Midtown Manhattan
              </h2>
              <div className="space-y-6 font-body text-sm">
                <div>
                  <p className="type-label text-brand-muted/60 mb-2">Address</p>
                  <p className="text-brand-white">224 W 35th St #301-5, New York, NY 10001</p>
                  <p className="text-brand-muted mt-1">2 blocks from Penn Station / Madison Square Garden</p>
                </div>
                <div>
                  <p className="type-label text-brand-muted/60 mb-2">Subway</p>
                  <p className="text-brand-muted">1 / 2 / 3 · A / C / E · B / D / F / M · N / Q / R / W</p>
                </div>
                <div>
                  <p className="type-label text-brand-muted/60 mb-2">Hours</p>
                  <div className="space-y-1 text-brand-muted">
                    <p>Monday · 10am – 4pm</p>
                    <p>Wednesday · 10am – 4pm</p>
                    <p>Thursday · 10am – 4pm</p>
                    <p className="text-xs text-brand-muted/50 mt-2">By appointment only</p>
                  </div>
                </div>
                <div>
                  <p className="type-label text-brand-muted/60 mb-2">Contact</p>
                  <a href="tel:3475715717" className="block text-brand-muted hover:text-brand-white transition-colors">347-571-5717</a>
                  <a href="mailto:ywphysicaltherapy@gmail.com" className="block text-brand-muted hover:text-brand-white transition-colors mt-1">ywphysicaltherapy@gmail.com</a>
                </div>
              </div>
            </div>

            {/* What to bring */}
            <div>
              <p className="type-label text-brand-gold mb-4">First Visit Checklist</p>
              <h2 className="type-display-m text-brand-white mb-8">What to Bring</h2>
              <ul className="space-y-4">
                {[
                  { item: "Photo ID", note: "Required for all new patients" },
                  { item: "Insurance card", note: "If using insurance coverage" },
                  { item: "Referral / prescription", note: "Only if required by your plan" },
                  { item: "Comfortable athletic clothing", note: "I assess full-body movement" },
                  { item: "List of prior treatments", note: "Previous PT, injections, surgeries" },
                  { item: "Any relevant imaging", note: "MRI, X-ray reports if you have them" },
                ].map((b) => (
                  <li key={b.item} className="flex gap-4 items-start">
                    <span className="shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-brand-gold/60" />
                    <div>
                      <p className="font-body font-medium text-brand-white text-sm">{b.item}</p>
                      <p className="font-body font-light text-brand-muted text-xs mt-0.5">{b.note}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block font-body font-medium text-sm tracking-wide px-8 py-3 bg-brand-gold text-brand-black hover:bg-brand-gold-light transition-all duration-200"
                  style={{ borderRadius: "2px" }}
                >
                  Open Booking Calendar →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-0">
        <div className="relative h-72 md:h-96 border-t border-brand-border overflow-hidden">
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
        </div>
      </section>

      {/* Still have questions */}
      <section className="py-20 bg-brand-surface border-t border-brand-border text-center">
        <div className="max-w-2xl mx-auto px-6">
          <p className="type-label text-brand-gold mb-4">Questions?</p>
          <p className="type-body-l text-brand-muted mb-2">
            Text or email is the fastest way to reach me — I&apos;m a one-person clinic.
          </p>
          <p className="type-body-l text-brand-muted mb-1">
            <a href="tel:3475715717" className="text-brand-white hover:text-brand-gold transition-colors">347-571-5717</a>
          </p>
          <p className="type-body-l text-brand-muted">
            <a href="mailto:ywphysicaltherapy@gmail.com" className="text-brand-white hover:text-brand-gold transition-colors">ywphysicaltherapy@gmail.com</a>
          </p>
        </div>
      </section>
    </>
  );
}
