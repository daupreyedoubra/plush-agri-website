"use client";

import { useState } from "react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  type Transition,
} from "framer-motion";
import {
  Tractor,
  HeartPulse,
  ShieldCheck,
  Handshake,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/lib/services";

const EASE = [0.25, 0, 0, 1] as [number, number, number, number];

// Resting pose per card: alternating tilt and vertical drift so the ten
// cards read as a loosely stacked physical deck, contained inside a grid
// so nothing can overflow the viewport.
const POSES = [
  { rotate: -2.5, y: 4 },
  { rotate: 2, y: -6 },
  { rotate: -1.5, y: 6 },
  { rotate: 2.5, y: -4 },
  { rotate: -2, y: 5 },
  { rotate: 1.5, y: -5 },
  { rotate: -2.5, y: 4 },
  { rotate: 2, y: -6 },
  { rotate: -1.5, y: 5 },
  { rotate: 2.5, y: -4 },
];

const SPRING: Transition = { type: "spring", stiffness: 320, damping: 24 };

// Deck thumbnails reuse each service's real field photo where one exists
// (same file as its detail section, see lib/services.ts) plus one extra
// genuine match; services with nothing that fits get an on-brand icon
// panel instead — never a stock photo.
const DECK_PHOTO_OVERRIDES: Record<string, { src: string; alt: string }> = {
  "livestock-health-support": {
    src: "/images/_MG_2944.jpg",
    alt: "Plush Agri Solutions branded livestock supplement handed out in Danhonu 1",
  },
};

const FALLBACK_ICONS: Record<string, LucideIcon> = {
  "farm-visits": Tractor,
  "livestock-health-support": HeartPulse,
  "biosecurity-advisory": ShieldCheck,
  "development-programme-support": Handshake,
};

export default function ServicesOverview() {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="relative z-0 bg-white pt-24 pb-16 lg:pt-28 lg:pb-20 overflow-x-hidden">
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

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-5 lg:gap-6 py-6">
          {services.map((service, i) => {
            const pose = reduceMotion ? { rotate: 0, y: 0 } : POSES[i];
            const isActive = active === i;
            const lifted =
              reduceMotion || !isActive
                ? { ...pose, scale: 1 }
                : { rotate: 0, y: pose.y - 8, scale: 1.06 };

            const photo = service.image ?? DECK_PHOTO_OVERRIDES[service.id];
            const FallbackIcon = FALLBACK_ICONS[service.id];

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.04, ease: EASE }}
                style={{ zIndex: isActive ? 40 : 10 + i }}
              >
                <motion.a
                  href={`#${service.id}`}
                  aria-label={`Jump to ${service.name}`}
                  className={[
                    "card group block h-full overflow-hidden bg-white border transition-colors",
                    isActive ? "border-bright-green" : "border-accent",
                  ].join(" ")}
                  animate={lifted}
                  transition={reduceMotion ? { duration: 0 } : SPRING}
                  onHoverStart={() => setActive(i)}
                  onHoverEnd={() => setActive(null)}
                  onFocus={() => setActive(i)}
                  onBlur={() => setActive(null)}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    {photo ? (
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 50vw, 20vw"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-navy">
                        {FallbackIcon && (
                          <FallbackIcon
                            className="w-7 h-7 text-white"
                            strokeWidth={1.75}
                          />
                        )}
                      </div>
                    )}
                  </div>

                  <div className="p-4 flex flex-col gap-1.5">
                    <span className="text-xs font-bold tracking-[0.2em] text-olive">
                      {service.number}
                    </span>
                    <span className="font-heading font-semibold text-sm text-navy leading-snug">
                      {service.name}
                    </span>
                    <span className="text-xs text-gray-500 leading-snug line-clamp-2">
                      {service.tagline}
                    </span>
                  </div>
                </motion.a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
