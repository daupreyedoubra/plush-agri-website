"use client";

import { motion, type Variants } from "framer-motion";
import { services } from "@/lib/services";

const EASE = [0.25, 0, 0, 1] as [number, number, number, number];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.25, 0, 0, 1] },
  },
};

const inView = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const },
};

export default function ServicesOverview() {
  return (
    <section className="bg-white py-16 lg:py-20 border-b border-accent">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <motion.p
          className="text-xs font-semibold tracking-[0.25em] uppercase text-gray-400 mb-8"
          {...inView}
          transition={{ duration: 0.5, ease: EASE }}
        >
          10 Services: jump to any
        </motion.p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-accent"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service) => (
            <motion.a
              key={service.id}
              href={`#${service.id}`}
              className="bg-white p-6 flex flex-col gap-3 hover:bg-neutral transition-colors group"
              variants={cardVariants}
            >
              <span className="text-xs font-bold tracking-[0.2em] text-secondary">
                {service.number}
              </span>
              <span className="text-sm font-bold text-primary leading-snug group-hover:text-secondary transition-colors">
                {service.name}
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
