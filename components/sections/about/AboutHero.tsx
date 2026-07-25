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

        <div className="max-w-2xl">
          <motion.h1
            className="text-white mb-6"
            initial={{ y: 24 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.4, delay: 0.1, ease: EASE }}
          >
            About Plush Agri Solutions
          </motion.h1>

          <motion.p
            className="text-lg lg:text-xl text-white/80"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.4, delay: 0.2, ease: EASE }}
          >
            Built in the field. Grounded in expertise.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
