"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import type { Service } from "@/lib/services";

const EASE = [0.25, 0, 0, 1] as [number, number, number, number];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const colVariants: Variants = {
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

interface Props {
  service: Service;
  isEven: boolean;
}

export default function ServiceDetailBlock({ service, isEven }: Props) {
  return (
    <section
      id={service.id}
      className={`${isEven ? "bg-white" : "bg-neutral"} py-20 lg:py-28 scroll-mt-20`}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Service header */}
        <div className="mb-12 lg:mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <motion.span
              className="block text-xs font-bold tracking-[0.25em] uppercase text-secondary mb-3"
              {...inView}
              transition={{ duration: 0.5, ease: EASE }}
            >
              {service.number}
            </motion.span>
            <motion.h2
              className="text-3xl lg:text-4xl font-bold text-primary leading-[1.15]"
              {...inView}
              transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
            >
              {service.name}
            </motion.h2>
            <motion.p
              className="mt-3 text-base text-gray-500 italic"
              {...inView}
              transition={{ duration: 0.5, delay: 0.15, ease: EASE }}
            >
              {service.tagline}
            </motion.p>
          </div>

          <motion.div
            {...inView}
            transition={{ duration: 0.5, delay: 0.2, ease: EASE }}
            className="flex-shrink-0"
          >
            <Link
              href={`/contact?service=${service.id}`}
              className="cta-btn inline-flex items-center justify-center bg-primary text-white font-semibold text-sm px-6 h-11 hover:bg-primary/90 whitespace-nowrap"
              style={{ borderRadius: "4px" }}
            >
              Talk to a Vet
            </Link>
          </motion.div>
        </div>

        {/* Service image */}
        <motion.div
          className="relative w-full h-56 lg:h-72 overflow-hidden mb-12 lg:mb-16"
          initial={{ opacity: 0, scale: 1.04 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <Image
            src={service.imageUrl}
            alt={service.imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 1280px) 100vw, 1280px"
            loading="lazy"
          />
        </motion.div>

        {/* Three columns: Problem / Approach / Outcomes */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          {/* Problem */}
          <motion.div variants={colVariants}>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-secondary mb-4">
              The Problem
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              {service.problem}
            </p>
          </motion.div>

          {/* Approach */}
          <motion.div variants={colVariants}>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4">
              Our Approach
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              {service.approach}
            </p>
          </motion.div>

          {/* Outcomes */}
          <motion.div variants={colVariants}>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-trust mb-4">
              Expected Outcomes
            </p>
            <ul className="space-y-3">
              {service.outcomes.map((outcome) => (
                <li
                  key={outcome}
                  className="flex items-start gap-3 text-sm text-gray-600 leading-relaxed"
                >
                  <span
                    className="mt-2 block w-1.5 h-1.5 flex-shrink-0 bg-secondary"
                    aria-hidden="true"
                  />
                  {outcome}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
