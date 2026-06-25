"use client";

import { motion, type Variants } from "framer-motion";

const EASE = [0.25, 0, 0, 1] as [number, number, number, number];

const values = [
  {
    name: "Practical",
    headline: "Built from the field, not the classroom.",
    description:
      "Every recommendation PAS makes is grounded in field observation. We do not prescribe from a distance or default to textbook protocols that ignore local conditions. Our advice emerges from what we see: the herd in front of us, the soil under our feet, the season the farmer is navigating right now.",
  },
  {
    name: "Productive",
    headline: "Outcomes that reach a farmer's income.",
    description:
      "Healthier livestock, stronger yields, and reduced losses are not abstract aspirations; they are the direct line between our advisory work and a farmer's livelihood. We measure success by what changes on the farm, not by outputs generated in an office.",
  },
  {
    name: "Trusted",
    headline: "Earned through presence and follow-through.",
    description:
      "Trust in this context is not a marketing claim. It is earned by showing up, by holding credentials that matter, and by following through after the first visit. Farmers trust PAS because we remain accountable to what we say, and visible in the field long after the initial engagement.",
  },
  {
    name: "Sustainable",
    headline: "Building capacity, not dependency.",
    description:
      "The highest outcome of our work is a farmer who makes better decisions independently. We build knowledge and confidence over time, the kind of long-term capability that means farmers can protect their herds and manage their land even when we are not physically present.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0, 0, 1] },
  },
};

const inView = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const },
};

export default function AboutValuesSection() {
  return (
    <section className="bg-primary py-24 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Label */}
        <motion.p
          className="text-xs font-semibold tracking-[0.25em] uppercase text-white/40 mb-6"
          {...inView}
          transition={{ duration: 0.5, ease: EASE }}
        >
          Core Values
        </motion.p>

        <motion.h2
          className="text-3xl lg:text-4xl font-bold text-white leading-[1.2] mb-16 lg:mb-20 max-w-xl"
          {...inView}
          transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
        >
          Four values. Every decision.
        </motion.h2>

        {/* Values */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {values.map((value) => (
            <motion.div
              key={value.name}
              className="bg-primary p-10 lg:p-12"
              variants={itemVariants}
            >
              <span
                className="block w-8 h-0.5 mb-6"
                style={{ backgroundColor: "#DCE8D7" }}
                aria-hidden="true"
              />
              <h3 className="text-2xl font-bold text-white mb-2">
                {value.name}
              </h3>
              <p className="text-sm font-semibold text-white/50 mb-5 leading-snug">
                {value.headline}
              </p>
              <p className="text-sm lg:text-base text-white/70 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
