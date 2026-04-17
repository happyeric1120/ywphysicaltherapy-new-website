"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import BookingButton from "@/components/BookingButton";
import Link from "next/link";

const credentials = [
  { label: "PT, DPT", desc: "Doctor of Physical Therapy" },
  { label: "PhD", desc: "Neuroplasticity & Mobility Recovery" },
  { label: "Mount Sinai", desc: "Researcher, Hospital for Special Surgery" },
  { label: "Bronx VA", desc: "Clinical Researcher" },
  { label: "Since 2016", desc: "Physical Therapy Practice" },
];

const research = [
  {
    title: "Non-Invasive Technology",
    desc: "Investigating the clinical application of photobiomodulation, shockwave, and electrical stimulation in mobility and pain recovery.",
  },
  {
    title: "Neuroplasticity & Motor Recovery",
    desc: "Studying how the nervous system reorganizes after injury and how physical intervention can accelerate motor re-learning.",
  },
  {
    title: "Movement-Based Assessment",
    desc: "Developing AI-assisted movement analysis tools that identify compensation patterns too subtle for standard clinical observation.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="grain gold-glow relative pt-32 pb-20 md:pt-44 md:pb-28 bg-brand-black overflow-hidden">
        <div className="absolute inset-0 bg-brand-black" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Copy */}
            <div>
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="type-label text-brand-gold mb-5"
              >
                Your Clinician · YW Physical Therapy
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.1 }}
                className="type-display-l text-brand-white mb-6"
              >
                Dr. Yu-Kuang Wu,<br />PT, DPT, PhD
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="type-body-l text-brand-muted mb-8"
              >
                Physical therapist, researcher, and founder of the Human System Reset™ method.
                Based in Midtown Manhattan.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-2 mb-8"
              >
                {credentials.map((c) => (
                  <span
                    key={c.label}
                    className="type-tag text-brand-gold px-3 py-1.5 border border-brand-gold/30"
                    style={{ borderRadius: "2px" }}
                  >
                    {c.label}
                  </span>
                ))}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <BookingButton variant="primary" label="Book With Dr. Wu" />
              </motion.div>
            </div>

            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative flex justify-center md:justify-end"
            >
              <div
                className="relative w-72 h-80 md:w-96 md:h-[440px] overflow-hidden border border-brand-gold/20"
                style={{ borderRadius: "2px" }}
              >
                <Image
                  src="/assets/me.jpg"
                  alt="Dr. Yu-Kuang Wu, PT, DPT, PhD — Physical Therapist in Midtown Manhattan at YW Physical Therapy"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 288px, 384px"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 w-20 h-20 border border-brand-gold/20 hidden md:block" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="py-24 bg-brand-surface border-y border-brand-border">
        <div className="max-w-4xl mx-auto px-6">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="type-label text-brand-gold mb-4"
          >
            Background
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="type-display-m text-brand-white mb-8"
          >
            Academic Precision. Clinical Experience.
          </motion.h2>
          <div className="space-y-5 font-body font-light text-brand-muted text-base leading-relaxed">
            <p>
              Dr. Yu-Kuang Wu, PT, DPT, PhD is a physical therapist and researcher based in Midtown
              Manhattan. With a Doctor of Physical Therapy degree and a PhD focused on neuroplasticity
              and mobility recovery, he brings the rigor of academic research to every clinical decision.
            </p>
            <p>
              In addition to his private practice at YW Physical Therapy, Dr. Wu conducts research at
              Mount Sinai Hospital and the Bronx VA Medical Center — applying the latest findings in
              non-invasive technology, movement science, and neural recovery directly to patient care.
              His research has focused on how the nervous system adapts after injury and how targeted
              physical intervention can accelerate that adaptation.
            </p>
            <p>
              He developed the Human System Reset™ method after years of observing a consistent pattern:
              standard PT protocols addressed the symptom site without addressing the movement system
              that produced it. Patients would improve temporarily, then return with the same problem.
              The method was built to break that cycle.
            </p>
            <p>
              Every client at YW Physical Therapy receives the same clinician from initial assessment
              to final discharge. No aides, no handoffs, no rotating staff. Dr. Wu personally administers
              every assessment, every technology application, and every exercise instruction — because
              consistency is what produces lasting clinical results.
            </p>
          </div>
        </div>
      </section>

      {/* Research */}
      <section className="py-24 bg-brand-black">
        <div className="max-w-5xl mx-auto px-6">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="type-label text-brand-gold mb-4"
          >
            Research Focus
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="type-display-m text-brand-white mb-4"
          >
            Where Research Meets Practice
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.14 }}
            className="type-body-l text-brand-muted mb-10 max-w-2xl"
          >
            Dr. Wu&apos;s research at Mount Sinai and the Bronx VA directly informs the technology
            and methods used in his clinical practice. The pipeline runs both directions.
          </motion.p>
          <div className="grid md:grid-cols-3 gap-5">
            {research.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-7 border border-brand-border bg-brand-surface"
                style={{ borderRadius: "2px" }}
              >
                <div className="h-px w-8 bg-brand-gold/40 mb-5" />
                <h3 className="font-body font-medium text-brand-white mb-3">{r.title}</h3>
                <p className="type-body-m text-brand-muted">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-brand-surface border-y border-brand-border">
        <div className="max-w-4xl mx-auto px-6">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="type-label text-brand-gold mb-4"
          >
            Clinical Philosophy
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="type-display-m text-brand-white mb-8"
          >
            What You Should Expect
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "One clinician. Every session.",
                desc: "You will always work directly with Dr. Wu — not an aide, not a student, not a rotating staff member. Assessment, treatment, and retraining are all delivered by the same person who knows your case.",
              },
              {
                title: "Assessment before treatment.",
                desc: "No generic protocol is applied on day one. Every plan begins with a full-body assessment to understand your system before deciding how to treat it.",
              },
              {
                title: "Technology with a purpose.",
                desc: "Every device in the clinic has a designated role in the 4R protocol. Technology is chosen because it&apos;s the right tool for the right tissue at the right phase — not as an impressive add-on.",
              },
              {
                title: "Transparency, always.",
                desc: "Dr. Wu explains what he finds, what he&apos;s doing and why, and what you should expect. There are no black boxes in his treatment approach.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-7 border border-brand-border bg-brand-black"
                style={{ borderRadius: "2px" }}
              >
                <h3 className="font-body font-medium text-brand-white mb-3">{item.title}</h3>
                <p className="type-body-m text-brand-muted">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-brand-black text-center">
        <div className="max-w-3xl mx-auto px-6">
          <p className="type-label text-brand-gold mb-5">Work with Dr. Wu</p>
          <h2 className="type-display-m text-brand-white mb-6">
            Start with a Full Assessment
          </h2>
          <p className="type-body-l text-brand-muted mb-10 max-w-xl mx-auto">
            Every treatment plan begins with the REVEAL phase — a comprehensive evaluation
            of your movement system, history, and goals. One session tells us more than
            most providers learn in five.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <BookingButton variant="primary" label="Book Your Assessment" />
            <Link
              href="/human-system-reset"
              className="inline-block font-body font-medium text-sm tracking-wide px-7 py-3 border border-brand-white/20 text-brand-white hover:border-brand-gold hover:text-brand-gold transition-all duration-300"
              style={{ borderRadius: "2px" }}
            >
              Learn the Method →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
