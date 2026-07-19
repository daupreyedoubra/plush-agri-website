"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import CtaButton from "@/components/ui/CtaButton";

const EASE = [0.25, 0, 0, 1] as [number, number, number, number];

export default function COHIBannerSection() {
  return (
    <section className="bg-navy py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <p className="label !text-bright-green mb-6">Flagship Initiative</p>
            <h2 className="text-white text-3xl lg:text-4xl mb-6 max-w-lg">
              Community One Health Initiative
            </h2>
            <p className="text-white/85 text-base leading-relaxed max-w-lg mb-2">
              One Health in action, one community at a time; sustained
              engagement in Danhonu 1 across farmers, households, and
              schools.
            </p>
            <p className="text-white/60 text-sm italic mb-10">
              Tare da manoma. An tabbatar a gonar.
            </p>
            <CtaButton href="/cohi">Explore COHI</CtaButton>
          </motion.div>

          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15, ease: EASE }}
          >
            <div className="relative card overflow-hidden aspect-[4/3]">
              <Image
                src="/images/cohi-school-07.jpeg"
                alt="Plush Agri Solutions One Health education session with schoolgirls and community mentors in Danhonu 1"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
