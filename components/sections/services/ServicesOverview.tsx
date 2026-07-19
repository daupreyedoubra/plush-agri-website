"use client";

import { useState } from "react";
import {
  motion,
  useReducedMotion,
  type Transition,
} from "framer-motion";
import { services } from "@/lib/services";

const EASE = [0.25, 0, 0, 1] as [number, number, number, number];

// Resting pose per card: alternating tilt and vertical drift so the ten
// cards read as a loosely stacked physical deck.
const POSES = [
  { rotate: -3, y: 6 },
  { rotate: 2.5, y: -8 },
  { rotate: -1.5, y: 10 },
  { rotate: 3.5, y: -4 },
  { rotate: -2.5, y: 8 },
  { rotate: 2, y: -10 },
  { rotate: -3.5, y: 4 },
  { rotate: 1.5, y: -6 },
  { rotate: -2, y: 10 },
  { rotate: 3, y: -4 },
];

const SPRING: Transition = { type: "spring", stiffness: 320, damping: 24 };

export default function ServicesOverview() {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="relative z-0 bg-white pt-24 pb-16 lg:pt-28 lg:pb-20">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <motion.p
          className="label mb-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          10 Services: jump to any
        </motion.p>

        <div className="flex flex-wrap justify-center gap-4 lg:gap-y-8 lg:gap-x-0 py-6">
          {services.map((service, i) => {
            const pose = reduceMotion ? { rotate: 0, y: 0 } : POSES[i];
            const isActive = active === i;
            const lifted =
              reduceMotion || !isActive
                ? { ...pose, scale: 1 }
                : { rotate: 0, y: pose.y - 12, scale: 1.07 };

            return (
              <motion.div
                key={service.id}
                className="lg:-ml-8 lg:first:ml-0"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.05, ease: EASE }}
                style={{ zIndex: isActive ? 40 : 10 + i }}
              >
                <motion.a
                  href={`#${service.id}`}
                  aria-label={`Jump to ${service.name}`}
                  className={[
                    "card block w-40 h-48 p-5 bg-white border transition-colors",
                    "flex flex-col justify-between",
                    isActive ? "border-bright-green" : "border-accent",
                  ].join(" ")}
                  animate={lifted}
                  transition={reduceMotion ? { duration: 0 } : SPRING}
                  onHoverStart={() => setActive(i)}
                  onHoverEnd={() => setActive(null)}
                  onFocus={() => setActive(i)}
                  onBlur={() => setActive(null)}
                >
                  <span className="text-xs font-bold tracking-[0.2em] text-olive">
                    {service.number}
                  </span>
                  <span className="font-heading font-semibold text-sm text-navy leading-snug">
                    {service.name}
                  </span>
                </motion.a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
