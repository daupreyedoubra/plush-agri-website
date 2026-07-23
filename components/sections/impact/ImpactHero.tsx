"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const EASE = [0.25, 0, 0, 1] as [number, number, number, number];

export default function ImpactHero() {
  return (
    <section className="relative bg-primary pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
      {/* Faint background image */}
      <Image
        src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=1600&q=60&auto=format&fit=crop"
        alt=""
        fill
        className="object-cover opacity-10"
        priority
        aria-hidden="true"
        sizes="100vw"
      />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-8">
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
          <span className="text-white/70 font-medium">Impact</span>
        </motion.nav>

        <div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-end">
          <div className="lg:col-span-8">
            <motion.p
              className="text-xs font-semibold tracking-[0.25em] uppercase text-white/40 mb-6"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.4, delay: 0.1, ease: EASE }}
            >
              Impact
            </motion.p>
            <motion.h1
              className="text-4xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight"
              initial={{ y: 24 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.4, delay: 0.2, ease: EASE }}
            >
              Evidence-driven.
              <br />
              Field-tested.
              <br />
              Community-owned.
            </motion.h1>
          </div>
          <div className="lg:col-span-4 mt-10 lg:mt-0">
            <motion.p
              className="text-base text-white/70 leading-relaxed"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.4, delay: 0.35, ease: EASE }}
            >
              PAS operates with a documented theory of change, a functioning
              M&amp;E framework, and field data that is built from the ground
              up, not estimated from a desk.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
