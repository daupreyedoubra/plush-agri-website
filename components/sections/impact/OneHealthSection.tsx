"use client";

import { motion, type Variants } from "framer-motion";

const EASE = [0.25, 0, 0, 1] as [number, number, number, number];

// NOTE: Replace descriptions with exact One Health text from Company Profile Section 04A
const pillars = [
  {
    domain: "Human Health",
    color: "bg-trust",
    textColor: "text-trust",
    borderColor: "border-trust",
    description:
      "Agricultural productivity directly shapes the nutritional security and economic wellbeing of farming families and the communities that depend on them. PAS advisory work supports human health outcomes by improving the quality and quantity of food produced at the farm level.",
  },
  {
    domain: "Animal Health",
    color: "bg-secondary",
    textColor: "text-secondary",
    borderColor: "border-secondary",
    description:
      "Livestock health is at the core of PAS's practice. Preventive programmes, timely diagnosis, and evidence-based management protocols protect herds from disease, reduce mortality, and improve productivity across all animal species we serve.",
  },
  {
    domain: "Environmental Health",
    color: "bg-primary",
    textColor: "text-primary",
    borderColor: "border-primary",
    description:
      "Sustainable land and livestock management practices protect the environments in which Northern Nigeria's farming communities operate. PAS promotes biosecurity, waste management, and input use practices that reduce environmental burden over time.",
  },
];

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

export default function OneHealthSection() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <motion.p
          className="text-xs font-semibold tracking-[0.25em] uppercase text-secondary mb-6"
          {...inView}
          transition={{ duration: 0.5, ease: EASE }}
        >
          One Health Approach
        </motion.p>
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-end mb-16 lg:mb-20">
          <motion.h2
            className="lg:col-span-6 text-3xl lg:text-4xl font-bold text-primary leading-[1.2] mb-6 lg:mb-0"
            {...inView}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
          >
            Human, animal, and environmental health are not separate problems.
          </motion.h2>
          <motion.p
            className="lg:col-span-6 text-base text-gray-500 leading-relaxed"
            {...inView}
            transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
          >
            The One Health framework recognises that the wellbeing of people,
            animals, and ecosystems are deeply interconnected. PAS grounds its
            advisory practice in this model, addressing animal health not in
            isolation, but as a driver of human and environmental outcomes.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-accent"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.domain}
              className="bg-white p-10 lg:p-12 flex flex-col gap-6"
              variants={cardVariants}
            >
              <span
                className={`block w-8 h-0.5 ${pillar.color}`}
                aria-hidden="true"
              />
              <h3 className={`text-xl font-bold ${pillar.textColor}`}>
                {pillar.domain}
              </h3>
              <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
