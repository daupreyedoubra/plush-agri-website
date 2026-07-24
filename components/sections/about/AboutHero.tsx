"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const EASE = [0.25, 0, 0, 1] as [number, number, number, number];

export default function AboutHero() {
  return (
    <section className="relative z-10 bg-navy pt-24 pb-24 lg:pt-32 lg:pb-36">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Breadcrumb */}
        <motion.nav
          className="flex items-center gap-2 text-xs text-white/40 mb-10 tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, ease: EASE }}
          aria-label="Breadcrumb"
        >
          <Link href="/" className="hover:text-white/70 transition-colors">
            Home
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-white/70 font-medium">About</span>
        </motion.nav>

        <div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-end">
          {/* Headline */}
          <div className="lg:col-span-7">
            <motion.p
              className="label !text-bright-green mb-6"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.4, delay: 0.1, ease: EASE }}
            >
              About Us
            </motion.p>

            <motion.h1
              className="text-white"
              initial={{ y: 24 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.4, delay: 0.2, ease: EASE }}
            >
              About Plush Agri Solutions
            </motion.h1>

            <motion.p
              className="text-bright-green text-lg lg:text-xl font-semibold mt-4"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.4, delay: 0.3, ease: EASE }}
            >
              Founded on field observation, not theory.
            </motion.p>
          </div>

          {/* Intro paragraph */}
          <div className="lg:col-span-5 mt-10 lg:mt-0">
            <motion.p
              className="text-base lg:text-lg text-white/80 leading-relaxed"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.4, delay: 0.35, ease: EASE }}
            >
              Plush Agri Solutions is a veterinary and agricultural advisory
              practice based in Kaduna State, Northern Nigeria, delivering
              practical, field-tested guidance to farmers who have spent too
              long making decisions without support.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
