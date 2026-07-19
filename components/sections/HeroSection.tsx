"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import heroImage from "@/public/images/hero.jpg";
import CtaButton from "@/components/ui/CtaButton";

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
    <section
      className="relative z-10 min-h-[78vh] flex items-center overflow-hidden"
      style={{
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 94%)",
        marginBottom: "-6vw",
      }}
    >
      <Image
        src={heroImage}
        alt="Cattle at a Plush Agri Solutions farm advisory visit"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-navy" style={{ opacity: 0.35 }} />

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
