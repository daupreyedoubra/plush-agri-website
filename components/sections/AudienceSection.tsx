"use client";

import { motion, type Variants } from "framer-motion";

const audiences = [
  {
    title: "Smallholder Farmers",
    description:
      "Farmers managing small plots and a few head of livestock who need timely, practical advice without the cost of full-time consultants.",
  },
  {
    title: "Semi-Commercial Farmers",
    description:
      "Growing operations that are scaling up production and need structured health protocols, input access, and advisory support to protect their investment.",
  },
  {
    title: "Commercial Livestock Farms",
    description:
      "Established farms with larger herds that require regular veterinary oversight, biosecurity systems, and evidence-based herd management strategies.",
  },
  {
    title: "Cooperatives",
    description:
      "Farmer groups and associations that benefit from shared advisory sessions, bulk input access, and coordinated training programmes across their membership.",
  },
  {
    title: "Rural Communities",
    description:
      "Communities across Northern Nigeria where agricultural productivity, animal health, and nutritional security are directly connected to one another.",
  },
  {
    title: "Development Partners",
    description:
      "NGOs, government agencies, and international organisations that need a trusted technical partner with verified community access and measurable impact frameworks.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
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
  initial: { y: 20 },
  whileInView: { y: 0 },
  viewport: { once: true as const },
};

export default function AudienceSection() {
  return (
    <section className="bg-neutral py-28 lg:py-40">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Section Label */}
        <motion.p
          className="text-xs font-semibold tracking-[0.25em] uppercase text-secondary mb-6"
          {...inView}
          transition={{ duration: 0.5, ease: [0.25, 0, 0, 1] }}
        >
          Who We Serve
        </motion.p>

        {/* Headline */}
        <motion.h2
          className="text-3xl lg:text-5xl font-bold text-primary leading-[1.15] mb-16 lg:mb-20"
          {...inView}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0, 0, 1] }}
        >
          Six audiences, one brand.
        </motion.h2>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border border-accent"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {audiences.map((audience, i) => (
            <motion.div
              key={audience.title}
              className={`relative p-8 lg:p-10 flex flex-col gap-4 bg-white group overflow-hidden transition-colors duration-250 hover:bg-neutral
                ${i % 3 !== 2 ? "lg:border-r lg:border-accent" : ""}
                ${i % 2 !== 1 ? "sm:border-r sm:border-accent lg:border-r-0" : "sm:border-r-0"}
                ${i < 3 ? "lg:border-b lg:border-accent" : ""}
                ${i < 4 ? "sm:border-b sm:border-accent" : ""}
                border-b border-accent last:border-b-0
              `}
              variants={cardVariants}
            >
              {/* Left accent border — reveals on hover */}
              <span
                className="absolute left-0 top-0 w-0.5 h-full bg-secondary scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom"
                aria-hidden="true"
              />

              {/* Title */}
              <h3 className="text-lg lg:text-xl font-bold text-primary leading-snug group-hover:text-secondary transition-colors duration-200">
                {audience.title}
              </h3>

              {/* Divider */}
              <div className="w-8 h-px bg-accent group-hover:w-12 transition-[width] duration-300" aria-hidden="true" />

              {/* Description */}
              <p className="text-sm lg:text-base text-gray-500 leading-relaxed">
                {audience.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
