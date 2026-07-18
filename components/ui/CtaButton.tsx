import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { CSSProperties, ReactNode } from "react";

type CtaButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline";
  className?: string;
};

const isInternal = (href: string) => href.startsWith("/") || href.startsWith("#");

// Circle is 2.25rem (36px) wide, inset 0.375rem (6px) from each edge at rest.
const CIRCLE_SIZE = "2.25rem";
const CIRCLE_INSET = "0.375rem";

export default function CtaButton({
  href,
  children,
  variant = "primary",
  className = "",
}: CtaButtonProps) {
  const isPrimary = variant === "primary";

  const shellClasses = [
    "group cta-btn relative inline-flex items-center overflow-hidden rounded-full",
    "font-heading font-semibold text-[0.9rem] select-none",
    isPrimary
      ? "bg-bright-green text-white shadow-[0_6px_20px_rgba(122,193,67,0.4),0_2px_4px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.45),inset_0_-2px_3px_rgba(0,0,0,0.12)]"
      : "bg-transparent text-white border-[1.5px] border-white/70",
    className,
  ].join(" ");

  const content = (
    <>
      {/* Top-to-bottom gloss + soft inner highlight, primary only */}
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
        className="relative z-10 block py-[14px] pl-7 pr-[3.25rem] transition-[padding] duration-500 ease-out group-hover:pl-[3.25rem] group-hover:pr-7 motion-reduce:transition-none motion-reduce:group-hover:pl-7 motion-reduce:group-hover:pr-[3.25rem]"
      >
        {children}
      </span>

      <span
        aria-hidden="true"
        className={[
          "absolute top-1/2 z-10 flex items-center justify-center rounded-full bg-white",
          "-translate-y-1/2 right-[var(--circle-inset)]",
          "transition-[right,transform] duration-500 ease-out",
          "group-hover:right-[var(--circle-inset-hover)] group-hover:rotate-45",
          "motion-reduce:transition-none motion-reduce:group-hover:right-[var(--circle-inset)] motion-reduce:group-hover:rotate-0",
        ].join(" ")}
        style={
          {
            width: CIRCLE_SIZE,
            height: CIRCLE_SIZE,
            "--circle-inset": CIRCLE_INSET,
            "--circle-inset-hover": `calc(100% - ${CIRCLE_SIZE} - ${CIRCLE_INSET})`,
          } as CSSProperties
        }
      >
        <ArrowUpRight className="w-4 h-4 text-bright-green" strokeWidth={2.25} />
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
