"use client";

import { motion, type Variants } from "framer-motion";

const EASE = [0.25, 0, 0, 1] as [number, number, number, number];

// NOTE: Replace structure with exact organisational chart from Company Profile Section 08
const orgStructure = {
  top: { role: "Executive Director", name: "Dr. Rukayyah Abdulsalam" },
  departments: [
    {
      name: "Veterinary Services",
      functions: ["Farm Visits", "Livestock Health", "Biosecurity Advisory"],
    },
    {
      name: "Agricultural Advisory",
      functions: ["Crop Support", "Input Access", "Farmer Training"],
    },
    {
      name: "Community & Partnerships",
      functions: [
        "Cooperative Support",
        "Community Engagement",
        "Development Programmes",
      ],
    },
    {
      name: "Capacity Building",
      functions: ["Training Sessions", "M&E Framework", "Evidence Generation"],
    },
  ],
};

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0, 0, 1] },
  },
};

const inView = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const },
};

export default function OrgStructureSection() {
  return (
    <section className="bg-neutral py-24 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Label */}
        <motion.p
          className="text-xs font-semibold tracking-[0.25em] uppercase text-secondary mb-6"
          {...inView}
          transition={{ duration: 0.5, ease: EASE }}
        >
          Structure
        </motion.p>

        <motion.h2
          className="text-3xl lg:text-4xl font-bold text-primary leading-[1.2] mb-4 max-w-xl"
          {...inView}
          transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
        >
          Organisational structure.
        </motion.h2>

        <motion.p
          className="text-base text-gray-500 mb-16 lg:mb-20 max-w-lg"
          {...inView}
          transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
        >
          A lean, field-oriented structure designed for responsiveness and
          direct farmer engagement.
        </motion.p>

        {/* Top node */}
        <motion.div
          className="flex justify-center mb-0"
          {...inView}
          transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
        >
          <div
            className="bg-primary text-white px-8 py-5 text-center"
            style={{ borderRadius: "4px" }}
          >
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-white/50 mb-1">
              {orgStructure.top.role}
            </p>
            <p className="text-base font-bold">{orgStructure.top.name}</p>
          </div>
        </motion.div>

        {/* Connector line */}
        <motion.div
          className="flex justify-center"
          {...inView}
          transition={{ duration: 0.4, delay: 0.3, ease: EASE }}
        >
          <div className="w-px h-10 bg-accent" aria-hidden="true" />
        </motion.div>

        {/* Horizontal bar */}
        <motion.div
          className="relative flex justify-center mb-0"
          {...inView}
          transition={{ duration: 0.5, delay: 0.35, ease: EASE }}
        >
          <div className="absolute top-0 left-[12.5%] right-[12.5%] h-px bg-accent" />
        </motion.div>

        {/* Department nodes */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-accent mt-0"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          {orgStructure.departments.map((dept) => (
            <motion.div
              key={dept.name}
              className="bg-white pt-8 pb-10 px-6 flex flex-col gap-4"
              variants={itemVariants}
            >
              {/* Connector dot */}
              <div
                className="w-2 h-2 rounded-full bg-secondary mb-2"
                aria-hidden="true"
              />
              <h4 className="text-sm font-bold text-primary leading-snug">
                {dept.name}
              </h4>
              <ul className="space-y-2">
                {dept.functions.map((fn) => (
                  <li
                    key={fn}
                    className="text-xs text-gray-500 flex items-start gap-2"
                  >
                    <span className="mt-1.5 block w-1.5 h-1.5 flex-shrink-0 bg-accent" />
                    {fn}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
