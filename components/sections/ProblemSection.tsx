"use client";

import { motion } from "framer-motion";

const EASE = [0.25, 0, 0, 1] as [number, number, number, number];

const problems = [
  {
    title: "Livestock loss",
    body: "Preventable disease and delayed care cost farmers animals they depend on.",
  },
  {
    title: "Poor input decisions",
    body: "Without reliable guidance, farmers spend on feed and treatment that doesn't fit their herd.",
  },
  {
    title: "No one to ask",
    body: "The nearest qualified vet is often hours away, or unreachable when it matters most.",
  },
];

export default function ProblemSection() {
  return (
    <section className="relative z-0 bg-navy pt-24 pb-24 lg:pt-32 lg:pb-32">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <motion.p
          className="text-white text-2xl lg:text-3xl font-bold leading-snug max-w-2xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          Expert guidance reaches smallholder farmers late, generic, or not
          at all.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {problems.map((item, i) => (
            <motion.div
              key={item.title}
              className="rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 p-8 transition-[background-color,border-color,transform] duration-[250ms] ease-[cubic-bezier(0.25,0,0,1)] hover:bg-white/[0.22] hover:border-white/35 hover:-translate-y-[5px] motion-reduce:hover:translate-y-0"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1, ease: EASE }}
            >
              <h3 className="text-white text-lg font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-white/75 text-sm leading-relaxed">
                {item.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
