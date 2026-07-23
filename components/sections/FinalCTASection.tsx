"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const inView = {
  initial: { y: 20 },
  whileInView: { y: 0 },
  viewport: { once: true as const },
};

export default function FinalCTASection() {
  return (
    <section className="bg-secondary py-24 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
          {/* Left: Headlines */}
          <div className="lg:col-span-8 mb-10 lg:mb-0">
            {/* Subtext — shown above headline for rhythm */}
            <motion.p
              className="text-sm font-semibold tracking-[0.2em] uppercase text-white/50 mb-6"
              {...inView}
              transition={{ duration: 0.5, ease: [0.25, 0, 0, 1] as [number, number, number, number] }}
            >
              Talk to a Vet Today
            </motion.p>

            {/* Main Headline */}
            <motion.h2
              className="text-4xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.05] tracking-tight"
              {...inView}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0, 0, 1] as [number, number, number, number] }}
            >
              Healthy Livestock.
              <br />
              Higher Returns.
            </motion.h2>
          </div>

          {/* Right: CTA */}
          <div className="lg:col-span-4 lg:flex lg:justify-end lg:items-center">
            <motion.div
              {...inView}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0, 0, 1] as [number, number, number, number] }}
            >
              <Link
                href="/contact"
                className="cta-btn inline-flex items-center justify-center bg-primary text-white font-semibold text-sm px-10 h-14 hover:bg-primary/90 whitespace-nowrap"
                style={{ borderRadius: "4px" }}
              >
                Book a Farm Visit
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Bottom rule */}
        <motion.div
          className="mt-20 lg:mt-24 pt-8 border-t border-white/10"
          {...inView}
          transition={{ duration: 0.5, delay: 0.35, ease: [0.25, 0, 0, 1] as [number, number, number, number] }}
        >
          <p className="text-xs text-white/30 tracking-wide">
            Serving smallholder and commercial farmers across Kaduna State and
            Northern Nigeria.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
