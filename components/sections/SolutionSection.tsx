"use client";

import { MapPin, ClipboardList, Package, GraduationCap } from "lucide-react";
import { motion, type Variants } from "framer-motion";

const EASE = [0.25, 0, 0, 1] as [number, number, number, number];

const steps = [
  {
    number: "01",
    title: "Come to the farm",
    description:
      "No remote prescriptions. We assess the conditions in front of us.",
    Icon: MapPin,
  },
  {
    number: "02",
    title: "Build advice around what's real",
    description:
      "Guidance shaped by what the farmer actually has and needs.",
    Icon: ClipboardList,
  },
  {
    number: "03",
    title: "Supply the means to act",
    description:
      "Vaccines, biologicals and equipment at fair market prices.",
    Icon: Package,
  },
  {
    number: "04",
    title: "Build long-term capacity",
    description:
      "Farmers who make better decisions every season, independently.",
    Icon: GraduationCap,
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const stepVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0, 0, 1] },
  },
};

const inView = {
  initial: { y: 24 },
  whileInView: { y: 0 },
  viewport: { once: true as const },
};

export default function SolutionSection() {
  return (
    <section className="bg-white py-28 lg:py-40">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Section Label */}
        <motion.p
          className="text-xs font-semibold tracking-[0.25em] uppercase text-secondary mb-6"
          {...inView}
          transition={{ duration: 0.5, ease: EASE }}
        >
          Our Solution
        </motion.p>

        {/* Headline */}
        <motion.h2
          className="text-3xl lg:text-5xl font-bold text-primary leading-[1.15] max-w-2xl mb-20 lg:mb-24"
          {...inView}
          transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
        >
          Credentialed expertise, meeting farmers where they actually work.
        </motion.h2>

        {/* Steps Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {steps.map((step) => (
            <motion.div
              key={step.number}
              className="p-8 border border-accent"
              style={{ backgroundColor: "#F6F2E8" }}
              variants={stepVariants}
            >
              {/* Icon */}
              <div className="mb-6" style={{ color: "#1F4D36" }}>
                <step.Icon size={32} strokeWidth={1.5} />
              </div>

              {/* Number */}
              <span className="block text-3xl lg:text-4xl font-bold text-accent mb-5 leading-none select-none">
                {step.number}
              </span>

              {/* Title */}
              <h3 className="text-lg font-bold text-primary mb-3 leading-snug">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-500 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
