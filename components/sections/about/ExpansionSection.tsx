"use client";

import { motion, type Variants } from "framer-motion";

const EASE = [0.25, 0, 0, 1] as [number, number, number, number];

// NOTE: Replace phase content with exact text from Company Profile Section 07
const phases = [
  {
    number: "Phase 1",
    label: "Establish",
    location: "Kaduna State, Local Focus",
    description:
      "Consolidate the practice within Kaduna State. Build robust farmer networks, establish service delivery protocols, and demonstrate measurable field impact.",
  },
  {
    number: "Phase 2",
    label: "Expand",
    location: "Kaduna State, Full Coverage",
    description:
      "Extend reach across all Local Government Areas within Kaduna State. Deepen cooperative partnerships and formalise community engagement programmes.",
  },
  {
    number: "Phase 3",
    label: "Scale",
    location: "Northern Nigeria",
    description:
      "Enter neighbouring states in Northern Nigeria. Replicate the field-first model with local advisory networks and evidence-driven impact documentation.",
  },
  {
    number: "Phase 4",
    label: "National",
    location: "National Reach",
    description:
      "Establish PAS as a nationally recognised veterinary and agricultural advisory brand, supporting development partners and government programmes at scale.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const phaseVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: [0.25, 0, 0, 1] },
  },
};

const inView = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const },
};

export default function ExpansionSection() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Label */}
        <motion.p
          className="label mb-6"
          {...inView}
          transition={{ duration: 0.5, ease: EASE }}
        >
          Geographic Strategy
        </motion.p>

        <motion.h2
          className="text-3xl lg:text-4xl font-bold text-navy leading-[1.2] mb-4 max-w-xl"
          {...inView}
          transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
        >
          A phased expansion built on proven reach.
        </motion.h2>

        <motion.p
          className="text-base text-gray-500 mb-14 lg:mb-16 max-w-2xl"
          {...inView}
          transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
        >
          PAS grows only where it can deliver. Each phase is earned through
          documented outcomes in the previous one.
        </motion.p>

        {/* Timeline */}
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {/* Vertical spine — desktop only, revealed as the section scrolls in */}
          <motion.div
            className="hidden lg:block absolute left-[120px] top-0 bottom-0 w-px bg-navy/15"
            style={{ transformOrigin: "top" }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1.2, ease: EASE }}
            aria-hidden="true"
          />

          <div className="space-y-0">
            {phases.map((phase) => (
              <motion.div
                key={phase.number}
                className="relative lg:grid lg:grid-cols-[120px_1fr] lg:gap-12 items-start border-b border-navy/10 last:border-b-0 py-10 lg:py-12"
                variants={phaseVariants}
              >
                {/* Phase number + dot */}
                <div className="flex lg:flex-col lg:items-center items-center gap-4 mb-6 lg:mb-0 lg:pt-1">
                  {/* Dot on timeline */}
                  <div
                    className="hidden lg:flex items-center justify-center w-3 h-3 rounded-full border-2 border-olive bg-white z-10 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-xs font-bold tracking-[0.2em] uppercase text-olive">
                    {phase.number}
                  </span>
                </div>

                {/* Content */}
                <div className="lg:pl-0">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="text-xs font-semibold tracking-wide uppercase px-3 py-1 rounded-full bg-olive/10 text-olive">
                      {phase.label}
                    </span>
                    <span className="text-sm text-gray-400">
                      {phase.location}
                    </span>
                  </div>
                  <p className="text-base text-gray-600 leading-relaxed max-w-2xl">
                    {phase.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
