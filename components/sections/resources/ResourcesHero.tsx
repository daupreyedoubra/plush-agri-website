"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const EASE = [0.25, 0, 0, 1] as [number, number, number, number];

export default function ResourcesHero() {
  return (
    <section className="bg-neutral pt-24 pb-20 lg:pt-32 lg:pb-28">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <motion.nav
          className="flex items-center gap-2 text-xs text-gray-400 mb-10 tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, ease: EASE }}
          aria-label="Breadcrumb"
        >
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span aria-hidden="true">/</span>
          <span className="text-primary font-medium">Resources</span>
        </motion.nav>

        <div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-end">
          <div className="lg:col-span-7">
            <motion.p
              className="text-xs font-semibold tracking-[0.25em] uppercase text-secondary mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
            >
              Resources
            </motion.p>
            <motion.h1
              className="text-4xl lg:text-6xl font-bold text-primary leading-[1.1] tracking-tight"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
            >
              Field knowledge.
              <br />
              When you need it.
            </motion.h1>
          </div>
          <div className="lg:col-span-5 mt-10 lg:mt-0">
            <motion.p
              className="text-base lg:text-lg text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35, ease: EASE }}
            >
              Practical guidance on animal health, farm management, disease
              prevention, and biosecurity, written for farmers in Northern
              Nigeria, verified by qualified veterinary and agricultural
              professionals.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
