"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import heroImage from "@/public/images/hero.jpg";
import CtaButton from "@/components/ui/CtaButton";

// No opacity fade: the H1 and tagline must be fully legible the instant
// they paint, on any connection speed or direct URL entry, so only
// position animates in — text is never invisible or mid-transition.
const fadeUp = (delay: number): Variants => ({
  hidden: { y: 24 },
  visible: {
    y: 0,
    transition: { duration: 0.4, delay, ease: [0.25, 0, 0, 1] },
  },
});

export default function HeroSection() {
  return (
    <section className="relative z-10 min-h-[78vh] flex items-center overflow-hidden">
      <Image
        src={heroImage}
        alt="Cattle at a Plush Agri Solutions farm advisory visit"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-navy" style={{ opacity: 0.35 }} />

      {/* Curved divider: navy arcs up into the hero image, single gentle
          concave sweep (no clip-path notch, no wavy squiggle). viewBox +
          preserveAspectRatio keep the curve's proportions identical at
          375px and 1440px; only the strip's own height scales with vw. */}
      <div
        className="absolute inset-x-0 bottom-0 z-10 h-[7vw] min-h-[36px] max-h-[90px]"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          className="block w-full h-full"
        >
          <path
            d="M0,100 L0,60 Q720,15 1440,60 L1440,100 Z"
            className="fill-navy"
          />
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 lg:px-8 py-16">
        <div className="max-w-2xl">
          <motion.h1
            className="text-white mb-6"
            initial="hidden"
            animate="visible"
            variants={fadeUp(0)}
          >
            Livestock health advisory that shows up at the farm gate.
          </motion.h1>

          <motion.p
            className="text-white/90 text-lg leading-relaxed max-w-xl mb-10"
            initial="hidden"
            animate="visible"
            variants={fadeUp(0.1)}
          >
            Plush Agri Solutions is a DVM-led One Health organisation working
            with livestock-dependent communities in Kaduna State, starting
            from our pilot community in Danhonu 1.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial="hidden"
            animate="visible"
            variants={fadeUp(0.2)}
          >
            <CtaButton href="/#partner">Partner With Us</CtaButton>
            <CtaButton href="https://wa.me/2348087702906" variant="outline">
              Message a Vet on WhatsApp
            </CtaButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
