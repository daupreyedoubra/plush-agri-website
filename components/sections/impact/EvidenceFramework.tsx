"use client";

import { motion, type Variants } from "framer-motion";

const EASE = [0.25, 0, 0, 1] as [number, number, number, number];

// NOTE: Replace with exact M&E framework description from Company Profile Section 05
const frameworkComponents = [
  {
    title: "Data Collection",
    description:
      "Field data is collected at every farm visit and training session. Structured forms document baseline conditions, interventions applied, and follow-up observations. All data is tied to specific farms and farmers.",
  },
  {
    title: "Indicators Tracked",
    description:
      "PAS tracks both output indicators (farms visited, farmers trained, inputs delivered) and outcome indicators (changes in livestock mortality rates, changes in farm management practices, farmer knowledge scores).",
  },
  {
    title: "Verification",
    description:
      "Outcomes are verified through follow-up farm visits at defined intervals. Farmer self-reports are cross-checked with field observations by PAS personnel. Data is not accepted at face value.",
  },
  {
    title: "Reporting Cycle",
    description:
      "Data is aggregated quarterly and reviewed against programme targets. Annual impact reports are produced for development partners. All data is available for third-party audit on request.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const blockVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0, 0, 1] },
  },
};

const inView = {
  initial: { y: 20 },
  whileInView: { y: 0 },
  viewport: { once: true as const },
};

export default function EvidenceFramework() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <motion.p
          className="text-xs font-semibold tracking-[0.25em] uppercase text-secondary mb-6"
          {...inView}
          transition={{ duration: 0.5, ease: EASE }}
        >
          Evidence Framework
        </motion.p>

        <div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-end mb-16 lg:mb-20">
          <motion.h2
            className="lg:col-span-6 text-3xl lg:text-4xl font-bold text-primary leading-[1.2] mb-4 lg:mb-0"
            {...inView}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
          >
            Impact that can be measured, verified, and reported.
          </motion.h2>
          <motion.p
            className="lg:col-span-6 text-base text-gray-500 leading-relaxed"
            {...inView}
            transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
          >
            PAS operates a Monitoring and Evaluation framework designed to
            generate credible, field-level evidence, the kind that development
            partners, government programmes, and investors can rely on when
            making decisions about where to direct resources.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-accent"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {frameworkComponents.map((component) => (
            <motion.div
              key={component.title}
              className="bg-white p-10 lg:p-12 flex flex-col gap-5"
              variants={blockVariants}
            >
              <span
                className="block w-8 h-0.5 bg-secondary"
                aria-hidden="true"
              />
              <h3 className="text-lg font-bold text-primary">
                {component.title}
              </h3>
              <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                {component.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Credibility statement */}
        <motion.div
          className="mt-12 lg:mt-16 p-8 lg:p-10 border border-accent bg-neutral"
          {...inView}
          transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
        >
          <p className="text-base lg:text-lg font-bold text-primary leading-relaxed">
            &ldquo;PAS does not report on what we hoped to achieve. We report
            on what changed on the farm, documented, verified, and attributed
            to specific interventions.&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
}
