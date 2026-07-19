"use client";

import { motion, type Variants } from "framer-motion";

const EASE = [0.25, 0, 0, 1] as [number, number, number, number];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants: Variants = {
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

export default function MissionVisionSection() {
  return (
    <section className="bg-[#FAFAF8] py-24 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Section Label */}
        <motion.p
          className="label mb-6"
          {...inView}
          transition={{ duration: 0.5, ease: EASE }}
        >
          Purpose
        </motion.p>

        <motion.h2
          className="text-3xl lg:text-4xl font-bold text-navy leading-[1.2] mb-14 lg:mb-16 max-w-xl"
          {...inView}
          transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
        >
          What we are here to do.
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {/* Mission */}
          <motion.div
            className="card bg-white p-10 lg:p-12"
            variants={cardVariants}
          >
            <span className="block w-8 h-0.5 bg-olive mb-8" aria-hidden="true" />
            <h3 className="text-xs font-semibold tracking-[0.25em] uppercase text-olive mb-5">
              Mission
            </h3>
            <p className="text-xl lg:text-2xl font-bold text-navy leading-[1.35]">
              To deliver credentialed veterinary and agricultural advisory
              services to farmers across Northern Nigeria, meeting them where
              they work, and building their capacity to make better decisions
              every season.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            className="card bg-white p-10 lg:p-12"
            variants={cardVariants}
          >
            <span className="block w-8 h-0.5 bg-navy mb-8" aria-hidden="true" />
            <h3 className="text-xs font-semibold tracking-[0.25em] uppercase text-navy mb-5">
              Vision
            </h3>
            <p className="text-xl lg:text-2xl font-bold text-navy leading-[1.35]">
              A Northern Nigeria where every farmer has access to the expertise
              they need to protect their livestock, improve their yields, and
              secure their livelihood, season after season.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
