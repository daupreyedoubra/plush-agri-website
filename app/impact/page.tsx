import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import heroPhoto from "@/public/images/field/farmers-listening.jpg";
import sessionPhoto from "@/public/images/field/community-session.jpg";
import kitPhoto from "@/public/images/field/kit-distribution.jpg";
import trainingPhoto from "@/public/images/field/farmer-training.jpg";
import visitPhoto from "@/public/images/field/farm-advisory.jpg";
import supportPhoto from "@/public/images/field/farmer-support.jpg";
import schoolPhoto from "@/public/images/cohi-school-07.jpeg";
import PageHero from "@/components/ui/PageHero";
import CtaButton from "@/components/ui/CtaButton";
import Reveal from "@/components/ui/Reveal";
import Partners from "@/components/sections/home/Partners";
import FinalCta from "@/components/sections/home/FinalCta";
import { impactIntro, impactFigures, impactChanges } from "@/lib/impact";

export const metadata: Metadata = {
  title: "Projects & Impact",
  description:
    "Our field work, farmer training, farm visits and community engagement in Danhonu 1, Chikun LGA, Kaduna State, with the figures and changes we have recorded so far.",
  alternates: {
    canonical: "https://plushagrisolutions.com/impact",
  },
  openGraph: {
    url: "https://plushagrisolutions.com/impact",
    title: "Projects & Impact | Plush Agri Solutions",
    description:
      "Field work, farmer training, farm visits and community engagement by Plush Agri Solutions in Kaduna State.",
  },
};

type Activity = {
  title: string;
  body: string;
  photo: StaticImageData;
  alt: string;
  position?: string;
};

const activities: Activity[] = [
  {
    title: "Farmer Training",
    body: "Practical sessions on farm health and biosecurity, held with farmers in the community.",
    photo: trainingPhoto,
    alt: "A trainer presenting to farmers at a farm health awareness session",
  },
  {
    title: "Farm Visits",
    body: "On-farm visits to observe animals and the farm environment and agree what needs attention.",
    photo: visitPhoto,
    alt: "A farmer working her plot during a Plush Agri Solutions farm visit",
    position: "object-[45%_center]",
  },
  {
    title: "Advisory and Follow-up",
    body: "One-to-one guidance for farmers, with return checks on the recommendations given.",
    photo: supportPhoto,
    alt: "A Plush Agri Solutions officer advising a farmer one to one",
  },
  {
    title: "Community Outreach",
    body: "One Health education in the local school through the Community One Health Initiative.",
    photo: schoolPhoto,
    alt: "Plush Agri Solutions team with pupils and staff after a school One Health session",
  },
];

export default function ImpactPage() {
  return (
    <main>
      <PageHero
        crumb="Projects & Impact"
        label="Projects & Impact"
        title="Our work in the field, and what has changed because of it."
        intro={impactIntro}
        photo={heroPhoto}
        photoAlt="Farmers listening during a Plush Agri Solutions training session"
        photoPosition="object-[60%_center]"
      />

      {/* Impact statistics */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <Reveal className="mb-14">
            <p className="label mb-5">Impact Statistics</p>
            <h2 className="text-navy text-3xl lg:text-[2.6rem]">
              Key figures so far.
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-10">
            {impactFigures.map((f) => (
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
        </div>
      </section>

      {/* What has changed */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-4">
            <p className="label mb-5">Achievements</p>
            <h2 className="text-navy text-3xl lg:text-[2.6rem]">
              What Has Changed Through Our Work?
            </h2>
          </Reveal>
          <ol className="lg:col-span-8 space-y-12">
            {impactChanges.map((c, i) => (
              <li key={c.title}>
                <Reveal
                  delay={i * 0.06}
                  className="grid gap-4 sm:grid-cols-[4rem_1fr]"
                >
                  <p className="font-heading font-bold text-olive text-3xl leading-none num-tabular">
                    0{i + 1}
                  </p>
                  <div>
                    <h3 className="text-navy text-xl font-semibold mb-3">
                      {c.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed max-w-[60ch]">
                      {c.body}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Pilot community */}
      <section className="bg-dark-green py-24 lg:py-32">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 grid gap-12 lg:grid-cols-12 lg:gap-16 lg:items-center">
          <Reveal className="lg:col-span-5">
            <p className="label !text-bright-green mb-5">Pilot Community</p>
            <h2 className="text-white text-3xl lg:text-[2.6rem] mb-8">
              Danhonu 1, Chikun LGA.
            </h2>
            <div className="space-y-5 text-cream/85">
              <p>
                We chose Danhonu 1 because it is a livestock-dependent
                community with no reliable access to veterinary care. That is
                the gap we exist to close.
              </p>
              <p>
                Since May 2026 we have run engagement sessions, farm visits
                and One Health education in the local school. Farmers under
                our advisory now have a direct line to a vet.
              </p>
            </div>
            <div className="mt-10">
              <CtaButton href="/cohi">About COHI</CtaButton>
            </div>
          </Reveal>
          <div className="lg:col-span-7 grid grid-cols-5 gap-4">
            <Reveal
              delay={0.08}
              className="relative col-span-3 aspect-[4/5] overflow-hidden rounded-2xl"
            >
              <Image
                src={sessionPhoto}
                alt="Farmers seated at a community engagement session in Danhonu 1"
                fill
                sizes="(min-width: 1024px) 35vw, 60vw"
                className="object-cover"
                placeholder="blur"
              />
            </Reveal>
            <Reveal
              delay={0.16}
              className="relative col-span-2 aspect-[8/15] overflow-hidden rounded-2xl"
            >
              <Image
                src={kitPhoto}
                alt="Farm health kits being handed to farmers in Danhonu 1"
                fill
                sizes="(min-width: 1024px) 23vw, 40vw"
                className="object-cover object-[72%_center]"
                placeholder="blur"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Field activities */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <Reveal className="mb-14 max-w-2xl">
            <p className="label mb-5">Field Activities</p>
            <h2 className="text-navy text-3xl lg:text-[2.6rem]">
              Training, farm visits and community outreach.
            </h2>
          </Reveal>
          <ul className="grid gap-x-6 gap-y-14 sm:grid-cols-2">
            {activities.map((a, i) => (
              <li key={a.title}>
                <Reveal delay={(i % 2) * 0.08}>
                  <div className="relative aspect-[3/2] overflow-hidden rounded-2xl mb-6">
                    <Image
                      src={a.photo}
                      alt={a.alt}
                      fill
                      sizes="(min-width: 640px) 50vw, 100vw"
                      className={`object-cover ${a.position ?? ""}`}
                      placeholder="blur"
                    />
                  </div>
                  <h3 className="text-navy text-xl font-semibold mb-2">
                    {a.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed max-w-[52ch]">
                    {a.body}
                  </p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Partners />
      <FinalCta />
    </main>
  );
}
