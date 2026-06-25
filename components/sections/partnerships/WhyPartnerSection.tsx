"use client";

import { motion, type Variants } from "framer-motion";

const EASE = [0.25, 0, 0, 1] as [number, number, number, number];

const reasons = [
  {
    number: "01",
    title: "Geographic Reach",
    description:
      "Based in Kaduna State with an active and expanding network across Northern Nigeria. Our phased expansion model means new geographies are opened systematically, not promised and undelivered.",
  },
  {
    number: "02",
    title: "Technical Expertise",
    description:
      "Founded and led by a qualified Veterinary Doctor and Agricultural Consultant. PAS advisory is credentialed, not aspirational. Our recommendations are backed by professional training and field documentation.",
  },
  {
    number: "03",
    title: "Community Access",
    description:
      "We have earned trust with smallholder farmers, cooperatives, and rural communities through consistent presence, not periodic visits. That access is the most valuable thing we bring to a partnership.",
  },
  {
    number: "04",
    title: "Evidence Generation",
    description:
      "A functioning M&E framework means we collect, verify, and report field data that partners and funders can rely on. We do not estimate impact; we document it from the farm level up.",
  },
  {
    number: "05",
    title: "Scalability",
    description:
      "PAS is structured to scale. The phased expansion model, replicable service delivery protocols, and documented community engagement approach are designed to grow with partnership investment.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const rowVariants: Variants = {
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.25, 0, 0, 1] },
  },
};

const inView = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const },
};

export default function WhyPartnerSection() {
  return (
    <section className="bg-neutral py-24 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <motion.p
          className="text-xs font-semibold tracking-[0.25em] uppercase text-secondary mb-6"
          {...inView}
          transition={{ duration: 0.5, ease: EASE }}
        >
          Why Partner With PAS
        </motion.p>
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-end mb-16 lg:mb-20">
          <motion.h2
            className="lg:col-span-6 text-3xl lg:text-4xl font-bold text-primary leading-[1.2] mb-4 lg:mb-0"
            {...inView}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
          >
            Five reasons organisations choose to work with us.
          </motion.h2>
          <motion.p
            className="lg:col-span-6 text-base text-gray-500 leading-relaxed"
            {...inView}
            transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
          >
            Development programmes fail when they choose partners for
            convenience. PAS offers what is harder to find: a technically
            credible team with real community relationships and a genuine
            commitment to measured outcomes.
          </motion.p>
        </div>

        <motion.div
          className="border border-accent"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.number}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 p-6 lg:p-10 items-start ${
                i < reasons.length - 1 ? "border-b border-accent" : ""
              } bg-white`}
              variants={rowVariants}
            >
              <span className="lg:col-span-1 text-xs font-bold tracking-[0.2em] text-secondary pt-1">
                {reason.number}
              </span>
              <h3 className="lg:col-span-3 text-base font-bold text-primary leading-snug">
                {reason.title}
              </h3>
              <p className="lg:col-span-8 text-sm lg:text-base text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
