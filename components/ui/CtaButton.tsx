import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { CSSProperties, ReactNode } from "react";

type CtaButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline";
  size?: "default" | "sm";
  className?: string;
};

const isInternal = (href: string) => href.startsWith("/") || href.startsWith("#");

const DURATION = "duration-[750ms]";
const EASE = "ease-in-out";

// Per-size geometry. Circle inset from each edge at rest; text padding swaps
// sides on hover so the label slides as the circle crosses. Class strings are
// static literals so Tailwind's scanner picks them up.
const SIZES = {
  default: {
    circle: "1.875rem",
    inset: "0.3125rem",
    text: "text-[0.9rem]",
    pad: `py-[10px] pl-[22px] pr-[2.75rem] group-hover:pl-[2.75rem] group-hover:pr-[22px] motion-reduce:group-hover:pl-[22px] motion-reduce:group-hover:pr-[2.75rem]`,
    icon: "w-3.5 h-3.5",
  },
  sm: {
    circle: "1.5rem",
    inset: "0.25rem",
    text: "text-[0.8rem]",
    pad: `py-[7px] pl-[18px] pr-[2.25rem] group-hover:pl-[2.25rem] group-hover:pr-[18px] motion-reduce:group-hover:pl-[18px] motion-reduce:group-hover:pr-[2.25rem]`,
    icon: "w-3 h-3",
  },
} as const;

export default function CtaButton({
  href,
  children,
  variant = "primary",
  size = "default",
  className = "",
}: CtaButtonProps) {
  const isPrimary = variant === "primary";
  const s = SIZES[size];

  const shellClasses = [
    "group cta-btn relative inline-flex items-center overflow-hidden rounded-full",
    "font-heading font-semibold select-none",
    s.text,
    isPrimary
      ? "bg-bright-green text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.45),inset_0_-2px_3px_rgba(0,0,0,0.12)]"
      : "bg-white/15 backdrop-blur-md border border-white/30 text-white",
    className,
  ].join(" ");

  const content = (
    <>
      {/* Top-to-bottom gloss, primary (solid) variant only */}
      {isPrimary && (
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0.38), rgba(255,255,255,0) 55%)",
          }}
        />
      )}

      <span
        className={`relative z-10 block transition-[padding] ${DURATION} ${EASE} motion-reduce:transition-none ${s.pad}`}
      >
        {children}
      </span>

      <span
        aria-hidden="true"
        className={[
          "absolute top-1/2 z-10 flex items-center justify-center rounded-full bg-white",
          "-translate-y-1/2 right-[var(--circle-inset)]",
          `transition-[right,transform] ${DURATION} ${EASE}`,
          "group-hover:right-[var(--circle-inset-hover)] group-hover:rotate-45",
          "motion-reduce:transition-none motion-reduce:group-hover:right-[var(--circle-inset)] motion-reduce:group-hover:rotate-0",
        ].join(" ")}
        style={
          {
            width: s.circle,
            height: s.circle,
            "--circle-inset": s.inset,
            "--circle-inset-hover": `calc(100% - ${s.circle} - ${s.inset})`,
          } as CSSProperties
        }
      >
        <ArrowUpRight className={`${s.icon} text-bright-green`} strokeWidth={2.25} />
      </span>
    </>
  );

  if (isInternal(href)) {
    return (
      <Link href={href} className={shellClasses}>
        {content}
      </Link>
    );
  }

  const external = href.startsWith("http");

  return (
    <a
      href={href}
      className={shellClasses}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {content}
    </a>
  );
}
