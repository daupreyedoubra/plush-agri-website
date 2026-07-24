"use client";

import { motion } from "framer-motion";

const EASE = [0.25, 0, 0, 1] as [number, number, number, number];

export default function EmergencyBanner() {
  return (
    <section className="bg-trust py-10 lg:py-12">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <motion.div
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-white/60 mb-2">
              Animal emergency?
            </p>
            <p className="text-white font-bold text-xl lg:text-2xl">
              Message a vet now.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <a
              href="https://wa.me/2348087702906?text=Hello%2C%20can%20I%20speak%20with%20a%20Vet%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#25D366] text-white font-semibold text-sm px-6 h-12 transition-opacity hover:opacity-90"
              style={{ borderRadius: "4px" }}
              aria-label="Message a vet on WhatsApp for an animal emergency"
            >
              WhatsApp a Vet
            </a>
            <a
              href="tel:+2348033670509"
              className="inline-flex items-center justify-center bg-white text-trust font-semibold text-sm px-6 h-12 transition-colors hover:bg-white/90"
              style={{ borderRadius: "4px" }}
              aria-label="Call Plush Agri Solutions directly"
            >
              Call +234 803 367 0509
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
