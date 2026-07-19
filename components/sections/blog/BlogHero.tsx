"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const EASE = [0.25, 0, 0, 1] as [number, number, number, number];

export default function BlogHero() {
  return (
    <section
      className="relative z-10 bg-navy pt-24 pb-24 lg:pt-32 lg:pb-36"
      style={{
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 94%)",
        marginBottom: "-4vw",
      }}
    >
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
          <span className="text-white/70 font-medium">Blog</span>
        </motion.nav>

        <div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-end">
          <div className="lg:col-span-7">
            <motion.p
              className="label !text-bright-green mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
            >
              Field Notes
            </motion.p>

            <motion.h1
              className="text-white"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
            >
              Practical writing on
              <br />
              animal health and farming.
            </motion.h1>
          </div>

          <div className="lg:col-span-5 mt-10 lg:mt-0">
            <motion.p
              className="text-base lg:text-lg text-white/80 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35, ease: EASE }}
            >
              Plain-language notes from the field on livestock health,
              preventive care, and the everyday decisions that keep a farm
              working, written for the farmers we serve.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
