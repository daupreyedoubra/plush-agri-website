"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

const problems = [
  {
    id: "01",
    title: "Livestock Loss",
    description:
      "Preventable disease moves through a herd before advice ever reaches the farmer.",
    image:
      "https://images.unsplash.com/photo-1527153818091-1a9638521e2a?w=800&q=80&auto=format&fit=crop",
    alt: "Cattle herd at risk from livestock disease in Northern Nigeria",
  },
  {
    id: "02",
    title: "Crop Failure",
    description:
      "Poor input choices and unmanaged conditions quietly erode each season's yield.",
    image:
      "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80&auto=format&fit=crop",
    alt: "Agricultural field showing the impact of crop failure",
  },
  {
    id: "03",
    title: "Blind Decisions",
    description:
      "Choices made without information, season after season, with no one to ask.",
    image:
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&q=80&auto=format&fit=crop",
    alt: "Farmer facing difficult decisions without expert guidance",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
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

export default function ProblemSection() {
  return (
    <section className="bg-neutral py-28 lg:py-40">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Section Label */}
        <motion.p
          className="text-xs font-semibold tracking-[0.25em] uppercase text-secondary mb-6"
          {...inView}
          transition={{ duration: 0.5, ease: [0.25, 0, 0, 1] }}
        >
          The Problem
        </motion.p>

        {/* Headline */}
        <motion.h2
          className="text-3xl lg:text-5xl font-bold text-primary leading-[1.15] max-w-3xl mb-20 lg:mb-24"
          {...inView}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0, 0, 1] }}
        >
          For most smallholder farmers, expert guidance arrives late, generic,
          or not at all.
        </motion.h2>

        {/* Three Columns */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {problems.map((problem) => (
            <motion.div key={problem.id} variants={itemVariants}>
              {/* Image */}
              <div className="relative w-full aspect-[4/3] mb-8 overflow-hidden bg-accent">
                <Image
                  src={problem.image}
                  alt={problem.alt}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Number Tag */}
              <p className="text-xs font-semibold tracking-[0.25em] text-secondary mb-3 uppercase">
                {problem.id}
              </p>

              {/* Title */}
              <h3 className="text-xl lg:text-2xl font-bold text-primary mb-4">
                {problem.title}
              </h3>

              {/* Description */}
              <p className="text-base text-gray-600 leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
