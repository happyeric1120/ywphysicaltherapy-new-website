"use client";

import { motion } from "framer-motion";

const equipmentGroups = [
  {
    category: "What We Measure",
    tools: [
      "Clinical physical therapy evaluation",
      "AI-assisted movement analysis",
      "Polar H10 HRV assessment",
      "Human System Profile™ report",
    ],
  },
  {
    category: "What We Support",
    tools: [
      "Focused shockwave therapy",
      "Radial shockwave therapy",
      "TECAR therapy",
      "Class IV laser therapy",
      "Manual therapy and IASTM tools",
    ],
  },
  {
    category: "How We Track Progress",
    tools: [
      "Baseline and follow-up comparison",
      "Recovery questionnaires",
      "Recovery readiness reassessment",
      "Movement quality updates",
    ],
  },
  {
    category: "Technologies Used",
    tools: [
      "Red and near-infrared light",
      "Sequential pneumatic compression",
      "Compex EMS",
      "Corrective exercise tools",
    ],
  },
];

export default function FeaturedServicesSection() {
  return (
    <section className="relative py-24 md:py-32 bg-brand-surface border-y border-brand-border">
      <div className="max-w-6xl mx-auto px-6">
        <p className="type-label text-brand-gold mb-4">Measurement First</p>
        <h2 className="type-display-m text-brand-white mb-6">
          Technology supports the plan. It is not the plan.
        </h2>
        <p className="type-body-l text-brand-muted max-w-3xl mb-12">
          Each tool is selected based on what your assessment shows: movement quality,
          tissue irritability, recovery load, or strength and control deficits.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {equipmentGroups.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="p-7 border border-brand-border bg-brand-black"
              style={{ borderRadius: "2px" }}
            >
              <p className="type-label text-brand-gold mb-5">{group.category}</p>
              <ul className="space-y-4">
                {group.tools.map((tool) => (
                  <li key={tool} className="flex gap-3 font-body font-light text-brand-muted text-sm leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gold" />
                    <span>{tool}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
