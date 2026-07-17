"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import heroImage from "@/public/images/hero.jpg";

const fadeUp = (delay: number): Variants => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.25, 0, 0, 1] },
  },
});

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <Image
        src={heroImage}
        alt="Cattle herd on an open farm in Northern Nigeria"
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
      />

      {/* Dark Green Overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(31, 77, 54, 0.65)" }}
        aria-hidden="true"
      />

      {/* Subtle parallax is handled at CSS level via background-attachment on mobile */}

      {/* Content */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-8 w-full py-32">
        <div className="max-w-3xl">
          {/* Headline */}
          <motion.h1
            className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6"
            variants={fadeUp(0)}
            initial="hidden"
            animate="visible"
          >
            Practical Solutions for Real Farm Problems
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-xl lg:text-2xl text-white/90 font-normal mb-3"
            variants={fadeUp(0.15)}
            initial="hidden"
            animate="visible"
          >
            Built with farmers. Proven in the field.
          </motion.p>

          {/* Hausa Translation */}
          <motion.p
            className="text-base lg:text-lg italic mb-12"
            style={{ color: "#DCE8D7" }}
            variants={fadeUp(0.25)}
            initial="hidden"
            animate="visible"
          >
            Mafita ga matsalolin noma
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap gap-4"
            variants={fadeUp(0.38)}
            initial="hidden"
            animate="visible"
          >
            <Link
              href="/contact"
              className="cta-btn inline-flex items-center justify-center bg-primary text-white font-semibold text-sm px-8 h-12 hover:bg-primary/90"
              style={{ borderRadius: "4px" }}
            >
              Talk to a Vet
            </Link>
            <Link
              href="/partnerships"
              className="cta-btn inline-flex items-center justify-center bg-trust text-white font-semibold text-sm px-8 h-12 hover:bg-trust/90"
              style={{ borderRadius: "4px" }}
            >
              Partner With Us
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        aria-hidden="true"
      >
        <span className="text-white/50 text-xs tracking-[0.2em] uppercase">
          Scroll
        </span>
        <div className="w-px h-8 bg-white/30" />
      </motion.div>
    </section>
  );
}
