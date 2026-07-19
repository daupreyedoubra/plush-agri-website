"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import {
  Tractor,
  HeartPulse,
  ShieldCheck,
  Handshake,
  type LucideIcon,
} from "lucide-react";
import CtaButton from "@/components/ui/CtaButton";
import type { Service } from "@/lib/services";

const EASE = [0.25, 0, 0, 1] as [number, number, number, number];

// Services without a real field photo get an on-brand icon panel instead of
// a stock image — never a placeholder photo.
const FALLBACK_ICONS: Record<string, LucideIcon> = {
  "farm-visits": Tractor,
  "livestock-health-support": HeartPulse,
  "biosecurity-advisory": ShieldCheck,
  "development-programme-support": Handshake,
};

// Two navy "glass break" sections give the 10-block page a rhythm shift.
const NAVY_IDS = new Set(["biosecurity-advisory", "development-programme-support"]);

// True glass card recipe on navy — matches ProblemSection exactly.
const GLASS_CARD = "rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-8";

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const colVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0, 0, 1] },
  },
};

const inView = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const },
};

interface Props {
  service: Service;
  isEven: boolean;
}

export default function ServiceDetailBlock({ service, isEven }: Props) {
  const onNavy = NAVY_IDS.has(service.id);
  const sectionBg = onNavy ? "bg-navy" : isEven ? "bg-white" : "bg-[#FAFAF8]";
  const FallbackIcon = FALLBACK_ICONS[service.id];

  return (
    <section
      id={service.id}
      className={`${sectionBg} py-16 lg:py-24 scroll-mt-20`}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Service header */}
        <div className="mb-10 lg:mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <motion.span
              className={`block text-xs font-bold tracking-[0.25em] uppercase mb-3 ${
                onNavy ? "text-bright-green" : "text-olive"
              }`}
              {...inView}
              transition={{ duration: 0.5, ease: EASE }}
            >
              {service.number}
            </motion.span>
            <motion.h2
              className={`text-2xl lg:text-3xl font-bold leading-[1.15] ${
                onNavy ? "text-white" : "text-navy"
              }`}
              {...inView}
              transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
            >
              {service.name}
            </motion.h2>
            <motion.p
              className={`mt-2 text-base italic ${
                onNavy ? "text-white/60" : "text-gray-500"
              }`}
              {...inView}
              transition={{ duration: 0.5, delay: 0.15, ease: EASE }}
            >
              {service.tagline}
            </motion.p>
          </div>

          <motion.div
            {...inView}
            transition={{ duration: 0.5, delay: 0.2, ease: EASE }}
            className="flex-shrink-0"
          >
            <CtaButton
              href={`/contact?service=${service.id}`}
              variant={onNavy ? "outline" : "primary"}
              size="sm"
            >
              Talk to a Vet
            </CtaButton>
          </motion.div>
        </div>

        <div className="lg:grid lg:grid-cols-12 lg:gap-10">
          {/* Media: real field photo, or on-brand icon panel when none fits */}
          <motion.div
            className="lg:col-span-4 mb-10 lg:mb-0"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
          >
            {service.image ? (
              <div
                className={`relative card overflow-hidden ${
                  service.image.portrait ? "aspect-[3/4]" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={service.image.src}
                  alt={service.image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 400px"
                  loading="lazy"
                />
              </div>
            ) : (
              <div
                className={`card flex flex-col items-center justify-center gap-5 aspect-[4/3] lg:aspect-[3/4] ${
                  onNavy
                    ? "bg-white/10 backdrop-blur-md border border-white/20"
                    : "bg-olive/10"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    onNavy ? "bg-white/15" : "bg-olive/15"
                  }`}
                >
                  {FallbackIcon && (
                    <FallbackIcon
                      className={`w-6 h-6 ${onNavy ? "text-white" : "text-olive"}`}
                      strokeWidth={1.75}
                    />
                  )}
                </div>
                <span
                  className={`text-xs font-bold tracking-[0.25em] uppercase ${
                    onNavy ? "text-white/40" : "text-olive/60"
                  }`}
                  aria-hidden="true"
                >
                  {service.number}
                </span>
              </div>
            )}
          </motion.div>

          {/* Problem / Approach / Outcomes */}
          <motion.div
            className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10 content-start"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
          >
            {/* Problem */}
            <motion.div variants={colVariants} className={onNavy ? GLASS_CARD : ""}>
              <p
                className={`text-xs font-semibold tracking-[0.2em] uppercase mb-3 ${
                  onNavy ? "text-bright-green" : "text-olive"
                }`}
              >
                The Problem
              </p>
              <p
                className={`text-base leading-relaxed ${
                  onNavy ? "text-white/75" : "text-gray-600"
                }`}
              >
                {service.problem}
              </p>
            </motion.div>

            {/* Approach */}
            <motion.div variants={colVariants} className={onNavy ? GLASS_CARD : ""}>
              <p
                className={`text-xs font-semibold tracking-[0.2em] uppercase mb-3 ${
                  onNavy ? "text-bright-green" : "text-navy"
                }`}
              >
                Our Approach
              </p>
              <p
                className={`text-base leading-relaxed ${
                  onNavy ? "text-white/75" : "text-gray-600"
                }`}
              >
                {service.approach}
              </p>
            </motion.div>

            {/* Outcomes */}
            <motion.div
              variants={colVariants}
              className={`sm:col-span-2 ${onNavy ? GLASS_CARD : ""}`}
            >
              <p
                className={`text-xs font-semibold tracking-[0.2em] uppercase mb-3 ${
                  onNavy ? "text-bright-green" : "text-dark-green"
                }`}
              >
                Expected Outcomes
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                {service.outcomes.map((outcome) => (
                  <li
                    key={outcome}
                    className={`flex items-start gap-3 text-sm leading-relaxed ${
                      onNavy ? "text-white/75" : "text-gray-600"
                    }`}
                  >
                    <span
                      className={`mt-2 block w-1.5 h-1.5 flex-shrink-0 rounded-full ${
                        onNavy ? "bg-bright-green" : "bg-olive"
                      }`}
                      aria-hidden="true"
                    />
                    {outcome}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
