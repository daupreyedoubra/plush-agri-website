"use client";

import { motion, type Variants } from "framer-motion";

const EASE = [0.25, 0, 0, 1] as [number, number, number, number];

const partners = [
  {
    name: "ASVIOL Support Initiative",
    type: "NGO Partner",
    description:
      "A partnership focused on expanding field reach and coordinating agricultural support programmes across target communities in Northern Nigeria.",
  },
  {
    name: "Alraj Agro Enterprise",
    type: "Agro-Commercial Partner",
    description:
      "A commercial agro-enterprise partnership supporting input supply chains, market linkage, and the delivery of quality agricultural inputs to farmers at fair prices.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0, 0, 1] },
  },
};

const inView = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const },
};

export default function CurrentPartnersSection() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <motion.p
          className="text-xs font-semibold tracking-[0.25em] uppercase text-secondary mb-6"
          {...inView}
          transition={{ duration: 0.5, ease: EASE }}
        >
          Current Partners
        </motion.p>
        <motion.h2
          className="text-3xl lg:text-4xl font-bold text-primary leading-[1.2] mb-16 lg:mb-20 max-w-xl"
          {...inView}
          transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
        >
          Organisations already working with PAS.
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-accent"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {partners.map((partner) => (
            <motion.div
              key={partner.name}
              className="bg-white p-10 lg:p-14 flex flex-col gap-5"
              variants={cardVariants}
            >
              <span
                className="block w-8 h-0.5 bg-secondary"
                aria-hidden="true"
              />
              <div>
                <h3 className="text-xl lg:text-2xl font-bold text-primary mb-2">
                  {partner.name}
                </h3>
                <span
                  className="inline-block text-xs font-semibold tracking-wide uppercase px-3 py-1 bg-accent text-primary"
                  style={{ borderRadius: "4px" }}
                >
                  {partner.type}
                </span>
              </div>
              <p className="text-base text-gray-600 leading-relaxed">
                {partner.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
