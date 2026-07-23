"use client";

import { motion, type Variants } from "framer-motion";
import {
  Compass,
  TrendingUp,
  BadgeCheck,
  Sprout,
  type LucideIcon,
} from "lucide-react";

const EASE = [0.25, 0, 0, 1] as [number, number, number, number];

const values: {
  icon: LucideIcon;
  name: string;
  headline: string;
  description: string;
}[] = [
  {
    icon: Compass,
    name: "Practical",
    headline: "Built from the field, not the classroom.",
    description:
      "Every recommendation is grounded in field observation — the herd in front of us, the soil under our feet, the season the farmer is navigating. No textbook protocols that ignore local conditions.",
  },
  {
    icon: TrendingUp,
    name: "Productive",
    headline: "Outcomes that reach a farmer's income.",
    description:
      "Healthier livestock, stronger yields, and reduced losses are the direct line between our advisory work and a farmer's livelihood. We measure success by what changes on the farm.",
  },
  {
    icon: BadgeCheck,
    name: "Trusted",
    headline: "Earned through presence and follow-through.",
    description:
      "Trust is earned by showing up, holding credentials that matter, and following through after the first visit — accountable and visible in the field long after the initial engagement.",
  },
  {
    icon: Sprout,
    name: "Sustainable",
    headline: "Building capacity, not dependency.",
    description:
      "The highest outcome of our work is a farmer who makes better decisions independently — able to protect their herds and manage their land even when we are not present.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0, 0, 1] },
  },
};

const inView = {
  initial: { y: 20 },
  whileInView: { y: 0 },
  viewport: { once: true as const },
};

export default function AboutValuesSection() {
  return (
    <section className="bg-navy py-24 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Label */}
        <motion.p
          className="label !text-bright-green mb-6"
          {...inView}
          transition={{ duration: 0.5, ease: EASE }}
        >
          Core Values
        </motion.p>

        <motion.h2
          className="text-3xl lg:text-4xl font-bold text-white leading-[1.2] mb-14 lg:mb-16 max-w-xl"
          {...inView}
          transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
        >
          Four values. Every decision.
        </motion.h2>

        {/* Values */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.name}
                className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-8"
                variants={itemVariants}
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-6 bg-white/15">
                  <Icon
                    className="w-6 h-6 text-bright-green"
                    strokeWidth={1.75}
                  />
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">
                  {value.name}
                </h3>
                <p className="text-sm font-semibold text-white/50 mb-4 leading-snug">
                  {value.headline}
                </p>
                <p className="text-sm text-white/75 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
