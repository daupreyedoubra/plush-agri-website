import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Inner-page hero: navy panel with breadcrumb, label, H1 and intro, and
 * an optional field photo on the right. No fade-in, so it is readable
 * the moment it paints.
 */
export default function PageHero({
  crumb,
  label,
  title,
  intro,
  photo,
  photoAlt = "",
  photoPosition = "",
  children,
}: {
  crumb: string;
  label: string;
  title: string;
  intro: string;
  photo?: StaticImageData;
  photoAlt?: string;
  photoPosition?: string;
  children?: ReactNode;
}) {
  return (
    <section className="bg-navy lg:grid lg:grid-cols-12">
      <div className={photo ? "lg:col-span-7" : "lg:col-span-12"}>
        <div className="px-6 py-20 sm:px-10 lg:pl-[max(2rem,calc((100vw-1280px)/2+2rem))] lg:pr-16 lg:py-28">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs tracking-wide text-white/60 mb-10"
          >
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-white font-medium">{crumb}</span>
          </nav>
          <p className="label !text-bright-green mb-6">{label}</p>
          <h1 className="text-white mb-6 max-w-2xl">{title}</h1>
          <p className="text-cream/85 text-lg leading-relaxed max-w-xl">
            {intro}
          </p>
          {children && <div className="mt-10 flex flex-wrap gap-4">{children}</div>}
        </div>
      </div>
      {photo && (
        <div className="relative aspect-[16/10] lg:aspect-auto lg:col-span-5">
          <Image
            src={photo}
            alt={photoAlt}
            fill
            priority
            sizes="(min-width: 1024px) 42vw, 100vw"
            className={`object-cover ${photoPosition}`}
            placeholder="blur"
          />
        </div>
      )}
    </section>
  );
}
