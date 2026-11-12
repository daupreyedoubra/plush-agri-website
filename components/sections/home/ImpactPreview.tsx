import Image from "next/image";
import attendees from "@/public/images/field/training-attendees.jpg";
import support from "@/public/images/field/farmer-support.jpg";
import trainer from "@/public/images/field/trainer-session.jpg";
import CtaButton from "@/components/ui/CtaButton";
import Reveal from "@/components/ui/Reveal";
import { impactFigures as figures, impactChanges as changes } from "@/lib/impact";

export default function ImpactPreview() {
  return (
    <section className="bg-cream py-24 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <Reveal className="max-w-3xl mb-14">
          <p className="label mb-5">Our Impact</p>
          <h2 className="text-navy text-[1.7rem] lg:text-[2.1rem] leading-[1.3]">
            At Plush Agri Solutions, we measure our impact not only by the
            farmers we reach, but also by the positive changes we see on their
            farms.
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-10 mb-20">
          {figures.map((f) => (
            <div key={f.label} className="border-t-2 border-navy/15 pt-5">
              <p className="font-heading font-bold text-navy text-5xl lg:text-6xl leading-none num-tabular mb-3">
                {f.value}
              </p>
              <p className="text-gray-700 text-[0.95rem] leading-snug max-w-[14rem]">
                {f.label}
              </p>
            </div>
          ))}
        </div>

        <div className="grid gap-4 lg:grid-cols-12 mb-20">
          <Reveal className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[30rem] lg:col-span-7 overflow-hidden rounded-2xl">
            <Image
              src={attendees}
              alt="Farmers listening during a Plush Agri Solutions farm health training"
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover"
              placeholder="blur"
            />
          </Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 lg:col-span-5">
            <Reveal delay={0.08} className="relative aspect-square lg:aspect-auto overflow-hidden rounded-2xl">
              <Image
                src={support}
                alt="A Plush Agri Solutions officer advising a farmer one to one"
                fill
                sizes="(min-width: 1024px) 40vw, 50vw"
                className="object-cover"
                placeholder="blur"
              />
            </Reveal>
            <Reveal delay={0.16} className="relative aspect-square lg:aspect-auto overflow-hidden rounded-2xl">
              <Image
                src={trainer}
                alt="A trainer leading a farmer training session"
                fill
                sizes="(min-width: 1024px) 40vw, 50vw"
                className="object-cover object-[center_48%]"
                placeholder="blur"
              />
            </Reveal>
          </div>
        </div>

        <h3 className="text-navy text-2xl font-semibold mb-10">
          What Has Changed Through Our Work?
        </h3>
        <ol className="grid gap-10 md:grid-cols-3 md:gap-8 mb-16">
          {changes.map((c, i) => (
            <li key={c.title}>
              <Reveal delay={i * 0.08}>
                <p className="font-heading text-sm font-semibold text-olive mb-3 num-tabular">
                  0{i + 1}
                </p>
                <h4 className="text-navy text-lg font-semibold mb-3">
                  {c.title}
                </h4>
                <p className="text-gray-700 leading-relaxed">{c.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>

        <CtaButton href="/impact">Explore Our Projects and Impact</CtaButton>
      </div>
    </section>
  );
}
