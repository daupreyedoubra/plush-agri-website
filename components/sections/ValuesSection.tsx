"use client";

import { motion, type Variants } from "framer-motion";

const EASE = [0.25, 0, 0, 1] as [number, number, number, number];

const values = [
  {
    number: "01",
    name: "Practical",
    description:
      "Built from real farm challenges: field observation, never textbook assumption.",
  },
  {
    number: "02",
    name: "Productive",
    description:
      "Healthier livestock and stronger yields, directly tied to a farmer's income.",
  },
  {
    number: "03",
    name: "Trusted",
    description:
      "Earned through credentials, follow-through, and a visible presence in the field.",
  },
  {
    number: "04",
    name: "Sustainable",
    description:
      "Building capability that lets farmers decide well on their own, over the long term.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0, 0, 1] },
  },
};

const inView = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const },
};

export default function ValuesSection() {
  return (
    <section className="bg-primary py-28 lg:py-40">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Section Label */}
        <motion.p
          className="text-xs font-semibold tracking-[0.25em] uppercase text-white/40 mb-6"
          {...inView}
          transition={{ duration: 0.5, ease: EASE }}
        >
          Why Farmers Trust PAS
        </motion.p>

        {/* Headline */}
        <motion.h2
          className="text-3xl lg:text-5xl font-bold text-white leading-[1.15] mb-20 lg:mb-28"
          {...inView}
          transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
        >
          Four values, built from the field.
        </motion.h2>

        {/* Values Grid — 2x2 on desktop, 1-col on mobile */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {values.map((value) => (
            <motion.div
              key={value.name}
              className="relative overflow-hidden p-10 lg:p-14 group"
              style={{ backgroundColor: "rgba(255,255,255,0.04)" }}
              variants={cardVariants}
            >
              {/* Large faded number — background decoration */}
              <span
                className="absolute -bottom-6 -right-4 text-[130px] lg:text-[170px] font-bold leading-none select-none pointer-events-none"
                style={{ color: "rgba(255,255,255,0.05)" }}
                aria-hidden="true"
              >
                {value.number}
              </span>

              {/* Accent line — expands on hover */}
              <span
                className="block h-0.5 w-10 mb-8 group-hover:w-full transition-[width] duration-500 ease-out"
                style={{ backgroundColor: "#DCE8D7" }}
                aria-hidden="true"
              />

              {/* Small number label */}
              <span
                className="block text-xs font-bold tracking-[0.25em] uppercase mb-4"
                style={{ color: "rgba(220,232,215,0.4)" }}
              >
                {value.number}
              </span>

              {/* Value name */}
              <h3
                className="text-3xl lg:text-4xl font-bold text-white leading-tight mb-5"
              >
                {value.name}
              </h3>

              {/* Description */}
              <p
                className="text-base leading-relaxed relative z-10"
                style={{ color: "#DCE8D7" }}
              >
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
