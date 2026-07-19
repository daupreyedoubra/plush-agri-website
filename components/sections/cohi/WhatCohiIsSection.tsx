"use client";

import { motion } from "framer-motion";

const EASE = [0.25, 0, 0, 1] as [number, number, number, number];

const inView = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const },
};

const paragraphs = [
  "COHI is how Plush Agri Solutions takes veterinary care into the community, instead of waiting for farmers to come to us. It puts a vet's advice, and a way to reach one, inside daily life in the communities we serve.",
  "It works because animal health, human health, and the environment are connected. When livestock stay healthy, families eat better and earn more, and the risk of disease passing between animals and people goes down.",
  "COHI is delivered in English and Hausa and built into daily life in Danhonu 1: dialogue with community leaders, farm visits, a monthly forum where farmers raise problems directly, education in the local school, and awareness campaigns that carry simple health messages beyond the farm gate.",
];

export default function WhatCohiIsSection() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <motion.p className="label mb-6" {...inView} transition={{ duration: 0.5, ease: EASE }}>
          What COHI Is
        </motion.p>

        <motion.h2
          className="text-navy text-3xl lg:text-4xl mb-14 max-w-2xl"
          {...inView}
          transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
        >
          One Health, delivered where farmers already are.
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10"
          {...inView}
          transition={{ duration: 0.5, delay: 0.15, ease: EASE }}
        >
          {paragraphs.map((p) => (
            <p key={p} className="text-gray-700 text-base leading-relaxed">
              {p}
            </p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
