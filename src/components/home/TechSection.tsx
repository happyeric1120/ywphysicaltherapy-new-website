"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const phaseStyles = {
  RELEASE:   "text-brand-gold border-brand-gold/30 bg-[rgba(255,119,89,0.07)]",
  RESTORE:   "text-brand-pink border-brand-pink/30 bg-[rgba(232,117,154,0.07)]",
  REINFORCE: "text-brand-purple border-brand-purple/30 bg-[rgba(155,127,212,0.07)]",
};

const devices = [
  { phase: "RELEASE" as const, name: "Focused + Radial Shockwave", desc: "Breaks down scar tissue and calcifications at depth.", href: "/shockwave-therapy-nyc" },
  { phase: "RELEASE" as const, name: "TECAR Therapy", desc: "Deep thermal energy to accelerate tissue healing.", href: "/tecar-therapy-nyc" },
  { phase: "RELEASE" as const, name: "Class IV Laser", desc: "Photobiomodulation for inflammation and nerve pain.", href: "/laser-therapy-nyc" },
  { phase: "RELEASE" as const, name: "IASTM", desc: "Instrument-assisted soft tissue mobilization for fascial adhesions.", href: null },
  { phase: "RELEASE" as const, name: "Theragun", desc: "Percussive therapy for muscle tension and warm-up.", href: null },
  { phase: "RESTORE" as const, name: "Compex EMS", desc: "Neuromuscular electrical stimulation for muscle re-education.", href: "/compex-ems-nyc" },
  { phase: "RESTORE" as const, name: "Air Compression", desc: "Sequential compression for lymphatic drainage and recovery.", href: null },
  { phase: "RESTORE" as const, name: "Revenite AI Assessment", desc: "AI-powered movement analysis to map compensation patterns.", href: null },
  { phase: "REINFORCE" as const, name: "TRX Functional Training", desc: "Suspension training for full-body strength and stability.", href: null },
  { phase: "REINFORCE" as const, name: "Smart Gym (Aeke K1)", desc: "Cable resistance system for precise functional loading.", href: null },
  { phase: "REINFORCE" as const, name: "Compex EMS — Power Phase", desc: "High-intensity EMS for sport-specific strength gains.", href: "/compex-ems-nyc" },
];

export default function TechSection() {
  return (
    <section id="technology" className="relative py-24 md:py-32 bg-brand-surface border-y border-brand-border">
      <div className="max-w-6xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="type-label text-brand-gold mb-4"
        >
          Clinical Technology
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="type-display-m text-brand-white mb-4"
        >
          Advanced Physical Therapy Technology in Manhattan
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-body font-light text-brand-muted text-base max-w-2xl mb-14"
        >
          Every device is assigned to a specific phase of the Human System Reset™ protocol — not used as random add-ons.
        </motion.p>

        {/* Phase legend */}
        <div className="flex flex-wrap gap-3 mb-10">
          {(Object.keys(phaseStyles) as Array<keyof typeof phaseStyles>).map((phase) => (
            <span key={phase} className={`font-mono text-[10px] tracking-widest uppercase px-4 py-1.5 rounded-full border ${phaseStyles[phase]}`}>
              {phase}
            </span>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {devices.map((d, i) => (
            <motion.div
              key={d.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="p-6 border border-brand-border rounded-xl bg-white hover:border-[rgba(0,0,0,0.2)] hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col gap-3"
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-body font-medium text-brand-white text-sm leading-snug">{d.name}</h3>
                <span className={`shrink-0 font-mono text-[9px] tracking-wider uppercase px-2.5 py-1 rounded-full border ${phaseStyles[d.phase]}`}>
                  {d.phase}
                </span>
              </div>
              <p className="font-body font-light text-brand-muted text-xs leading-relaxed flex-1">{d.desc}</p>
              {d.href && (
                <Link href={d.href} className="font-mono text-[10px] text-brand-gold hover:text-brand-gold-light transition-colors tracking-wider uppercase">
                  Learn more →
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
