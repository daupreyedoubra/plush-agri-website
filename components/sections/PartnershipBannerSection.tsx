"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const partnerTypes = [
  "Government",
  "NGOs",
  "Development Partners",
  "Investors",
  "Research Institutions",
];

const EASE = [0.25, 0, 0, 1] as [number, number, number, number];

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const },
  transition: { duration: 0.6, delay, ease: EASE },
});

export default function PartnershipBannerSection() {
  return (
    <section className="bg-trust py-24 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-end">
          {/* Left: Headline + Partner types */}
          <div className="lg:col-span-8 mb-12 lg:mb-0">
            {/* Section Label */}
            <motion.p
              className="text-xs font-semibold tracking-[0.25em] uppercase text-white/40 mb-6"
              {...inView(0)}
            >
              Partnerships
            </motion.p>

            {/* Headline */}
            <motion.h2
              className="text-3xl lg:text-5xl font-bold text-white leading-[1.15] mb-10 lg:mb-12"
              {...inView(0.1)}
            >
              Let&rsquo;s Build Stronger Agricultural Systems Together
            </motion.h2>

            {/* Partner types */}
            <motion.div
              className="flex flex-wrap items-center gap-x-4 gap-y-3"
              {...inView(0.2)}
            >
              {partnerTypes.map((type, i) => (
                <span key={type} className="flex items-center gap-4">
                  <span className="text-sm lg:text-base text-white/70 font-medium">
                    {type}
                  </span>
                  {i < partnerTypes.length - 1 && (
                    <span
                      className="text-white/20 text-lg select-none"
                      aria-hidden="true"
                    >
                      ·
                    </span>
                  )}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right: CTA */}
          <div className="lg:col-span-4 lg:text-right">
            <motion.div {...inView(0.3)}>
              <Link
                href="/partnerships"
                className="cta-btn inline-flex items-center justify-center bg-primary text-white font-semibold text-sm px-8 h-12 hover:bg-primary/90"
                style={{ borderRadius: "4px" }}
              >
                Explore Partnerships
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Bottom divider with subtle stat */}
        <motion.div
          className="mt-16 lg:mt-20 pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center gap-4"
          {...inView(0.35)}
        >
          <p className="text-xs text-white/30 tracking-wide">
            Current partners include ASVIOL Support Initiative and Alraj Agro
            Enterprise
          </p>
        </motion.div>
      </div>
    </section>
  );
}
