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
    <section className="relative min-h-[92vh] flex items-end overflow-hidden">
      <Image
        src={heroImage}
        alt="Cattle at a Plush Agri Solutions farm advisory visit"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-navy" style={{ opacity: 0.35 }} />

      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 lg:px-8 pb-16 pt-40 lg:pb-24">
        <div className="max-w-2xl">
          <motion.p
            className="label !text-white/90"
            initial="hidden"
            animate="visible"
            variants={fadeUp(0)}
          >
            Veterinary Care · Kaduna State
          </motion.p>

          <motion.h1
            className="text-white mt-5 mb-6"
            initial="hidden"
            animate="visible"
            variants={fadeUp(0.1)}
          >
            Livestock health advisory that shows up at the farm gate.
          </motion.h1>

          <motion.p
            className="text-white/90 text-lg leading-relaxed max-w-xl mb-10"
            initial="hidden"
            animate="visible"
            variants={fadeUp(0.2)}
          >
            Plush Agri Solutions is a DVM-led One Health organisation working
            with livestock-dependent communities in Kaduna State, starting
            from our pilot community in Danhonu 1.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial="hidden"
            animate="visible"
            variants={fadeUp(0.3)}
          >
            <Link href="/#partner" className="btn-pill btn-primary">
              Partner With Us
            </Link>
            <a
              href="https://wa.me/2348087702906"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill btn-outline"
            >
              Message a Vet on WhatsApp
            </a>
          </motion.div>
        </div>
      </div>

      {/* Glass stat card */}
      <motion.div
        className="hidden md:block absolute bottom-8 right-6 lg:right-8 z-10 max-w-xs bg-white/80 backdrop-blur-md p-6"
        style={{ borderRadius: "16px" }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5, ease: [0.25, 0, 0, 1] }}
      >
        <p className="label mb-3">Our Pilot</p>
        <p className="text-navy font-semibold text-base leading-snug">
          Danhonu 1, Chikun LGA
        </p>
        <p className="text-navy/80 text-sm mt-1">
          29 farmers under advisory · ₦7M in project funds managed
        </p>
      </motion.div>
    </section>
  );
}
