"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, useInView, animate, type Variants } from "framer-motion";

// DEMO NUMBERS — replace with verified field data before launch.
const metrics = [
  { target: 120, suffix: "+", label: "Farm Visits" },
  { target: 340, suffix: "+", label: "Farmers Reached" },
  { target: 28, suffix: "+", label: "Training Sessions" },
  { target: 14, suffix: "+", label: "Communities Served" },
];

function CounterNumber({ target }: { target: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v).toLocaleString());

  useEffect(() => {
    if (isInView && target > 0) {
      const controls = animate(count, target, {
        duration: 2.2,
        ease: [0.16, 1, 0.3, 1],
      });
      return controls.stop;
    }
  }, [isInView, target, count]);

  if (target === 0) {
    return <span ref={ref}>0</span>;
  }

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0, 0, 1] },
  },
};

const inView = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const },
};

export default function ImpactSection() {
  return (
    <section className="bg-white py-28 lg:py-40">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Section Label */}
        <motion.p
          className="text-xs font-semibold tracking-[0.25em] uppercase text-secondary mb-6"
          {...inView}
          transition={{ duration: 0.5, ease: [0.25, 0, 0, 1] }}
        >
          Field Impact
        </motion.p>

        {/* Headline */}
        <motion.h2
          className="text-3xl lg:text-5xl font-bold text-primary leading-[1.15] mb-20 lg:mb-24"
          {...inView}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0, 0, 1] }}
        >
          Impact in the field.
        </motion.h2>

        {/* Metrics Grid */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-accent"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {metrics.map((metric) => (
            <motion.div
              key={metric.label}
              className="bg-white px-8 py-12 lg:px-10 lg:py-16 flex flex-col gap-4"
              variants={itemVariants}
            >
              {/* Number */}
              <p
                className="num-tabular text-6xl lg:text-7xl xl:text-8xl font-bold text-primary leading-none tracking-tight"
                aria-label={`${metric.target}${metric.suffix} ${metric.label}`}
              >
                <CounterNumber target={metric.target} />
                <span className="text-secondary">{metric.suffix}</span>
              </p>

              {/* Label */}
              <p className="text-sm lg:text-base text-gray-500 font-medium tracking-wide">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
