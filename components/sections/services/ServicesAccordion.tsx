"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronDown, Tractor, HeartPulse, ShieldCheck, Handshake, type LucideIcon } from "lucide-react";
import CtaButton from "@/components/ui/CtaButton";
import type { Service } from "@/lib/services";

// Services without a real field photo get an on-brand icon panel instead of
// a stock image — never a placeholder photo.
const FALLBACK_ICONS: Record<string, LucideIcon> = {
  "farm-visits": Tractor,
  "livestock-health-support": HeartPulse,
  "biosecurity-advisory": ShieldCheck,
  "development-programme-support": Handshake,
};

interface AccordionItemProps {
  service: Service;
  isOpen: boolean;
  onToggle: () => void;
}

function AccordionItem({ service, isOpen, onToggle }: AccordionItemProps) {
  const FallbackIcon = FALLBACK_ICONS[service.id];

  return (
    <div id={service.id} className="scroll-mt-24 border-b border-accent last:border-b-0">
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={`${service.id}-panel`}
          className="w-full flex items-center justify-between gap-4 px-6 py-5 lg:px-8 lg:py-6 text-left transition-colors duration-200"
          style={{
            backgroundColor: isOpen ? "var(--color-sage-tint)" : "var(--color-dark-green)",
            color: isOpen ? "var(--color-dark-green)" : "var(--color-cream)",
          }}
        >
          <span className="flex items-baseline gap-4 min-w-0">
            <span
              className="text-xs font-bold tracking-[0.2em] shrink-0"
              style={{ color: "#5E8B3D" }}
            >
              {service.number}
            </span>
            <span className="min-w-0">
              <span className="block font-heading font-semibold text-base lg:text-lg leading-snug">
                {service.name}
              </span>
              <span
                className="block text-sm mt-0.5 leading-snug truncate"
                style={{ opacity: 0.75 }}
              >
                {service.tagline}
              </span>
            </span>
          </span>
          <ChevronDown
            aria-hidden="true"
            className={`shrink-0 w-5 h-5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
            style={{ color: "#5E8B3D" }}
          />
        </button>
      </h3>

      <div
        id={`${service.id}-panel`}
        role="region"
        aria-hidden={!isOpen}
        className={`accordion-panel ${isOpen ? "is-open" : ""}`}
      >
        <div>
          <div className="bg-white px-6 py-8 lg:px-8 lg:py-10">
            <div className="lg:grid lg:grid-cols-12 lg:gap-10">
              {/* Media: real field photo, or on-brand icon panel when none fits */}
              <div className="lg:col-span-4 mb-8 lg:mb-0">
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
                  <div className="card flex flex-col items-center justify-center gap-5 aspect-[4/3] lg:aspect-[3/4] bg-olive/10">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-olive/15">
                      {FallbackIcon && (
                        <FallbackIcon className="w-6 h-6 text-olive" strokeWidth={1.75} />
                      )}
                    </div>
                    <span
                      className="text-xs font-bold tracking-[0.25em] uppercase text-olive/60"
                      aria-hidden="true"
                    >
                      {service.number}
                    </span>
                  </div>
                )}
              </div>

              {/* Problem / Approach / Outcomes */}
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10 content-start">
                <div>
                  <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3 text-olive">
                    The Problem
                  </p>
                  <p className="text-base leading-relaxed text-gray-600">{service.problem}</p>
                </div>

                <div>
                  <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3 text-navy">
                    Our Approach
                  </p>
                  <p className="text-base leading-relaxed text-gray-600">{service.approach}</p>
                </div>

                <div className="sm:col-span-2">
                  <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3 text-dark-green">
                    Expected Outcomes
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                    {service.outcomes.map((outcome) => (
                      <li
                        key={outcome}
                        className="flex items-start gap-3 text-sm leading-relaxed text-gray-600"
                      >
                        <span
                          className="mt-2 block w-1.5 h-1.5 shrink-0 rounded-full"
                          style={{ backgroundColor: "#5E8B3D" }}
                          aria-hidden="true"
                        />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="sm:col-span-2 pt-2">
                  <CtaButton href={`/contact?service=${service.id}`} variant="primary" size="sm">
                    Talk to a Vet
                  </CtaButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ServicesAccordion({ services }: { services: Service[] }) {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set());
  const hasSetDesktopDefault = useRef(false);

  // Desktop opens the first item by default; mobile starts fully collapsed.
  // Decided client-side (post-mount) so the server-rendered markup is always
  // the safe, compact "everything closed" state.
  useEffect(() => {
    if (hasSetDesktopDefault.current) return;
    hasSetDesktopDefault.current = true;
    if (window.matchMedia("(min-width: 1024px)").matches && services[0]) {
      setOpenIds(new Set([services[0].id]));
    }
  }, [services]);

  // Anchor links from the "10 Services: jump to any" index above (and any
  // direct URL entry with a #service-id hash) open the matching item and
  // scroll it into view.
  useEffect(() => {
    const openFromHash = () => {
      const id = window.location.hash.slice(1);
      if (!id || !services.some((s) => s.id === id)) return;
      setOpenIds((prev) => new Set(prev).add(id));
      window.requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    };

    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    return () => window.removeEventListener("hashchange", openFromHash);
  }, [services]);

  const toggle = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <section className="bg-white pb-16 lg:pb-24">
      <div className="max-w-[1000px] mx-auto px-6 lg:px-8">
        <div className="card overflow-hidden border border-accent">
          {services.map((service) => (
            <AccordionItem
              key={service.id}
              service={service}
              isOpen={openIds.has(service.id)}
              onToggle={() => toggle(service.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
