import Image from "next/image";
import heroPhoto from "@/public/images/field/farm-visit-hero.jpg";
import founderPhoto from "@/public/images/cohi-school-01.jpeg";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";

/** About page sections 1 to 3, in the founder's own words (Nov 2026). */
export default function AboutIntro() {
  return (
    <>
      <PageHero
        crumb="About Us"
        label="About Us"
        title="Practical support for farmers, right at the farm gate."
        photo={heroPhoto}
        photoAlt="A Plush Agri Solutions field officer taking notes with a farmer during a farm visit"
        photoPosition="object-[58%_center]"
      />

      {/* 1. Who We Are */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 grid gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-4">
            <p className="label mb-5">Who We Are</p>
            <p className="font-heading text-navy text-2xl lg:text-[1.9rem] leading-[1.3] max-w-sm">
              We believe every farmer deserves reliable advice and practical
              support.
            </p>
          </Reveal>
          <Reveal
            delay={0.08}
            className="lg:col-span-8 space-y-6 text-gray-700 text-lg leading-relaxed max-w-[62ch]"
          >
            <p>
              Plush Agri Solutions is a veterinary and agricultural solutions
              business based in Kaduna State. We work with smallholder
              livestock farmers, semi-commercial and commercial farms, as well
              as cooperatives, agribusinesses and organisations working in
              agriculture.
            </p>
            <p>
              Our work is rooted in the realities of the farm. We provide
              veterinary care, practical farm advice, training and access to
              quality farm inputs to help farmers protect their animals, make
              informed decisions and manage their farms better.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 2. Our Story */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal className="lg:sticky lg:top-28">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                <Image
                  src={founderPhoto}
                  alt="Dr. Rukayyah Abdulsalam, founder of Plush Agri Solutions, during a community visit"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover object-top"
                  placeholder="blur"
                />
              </div>
              <p className="mt-4 text-sm text-gray-600">
                Dr. Rukayyah Abdulsalam, Founder
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal>
              <p className="label mb-5">Our Story</p>
              <h2 className="text-navy text-[1.7rem] lg:text-[2.3rem] leading-[1.25] mb-10">
                What if every farmer could access reliable, affordable support
                before problems arise?
              </h2>
            </Reveal>
            <Reveal
              delay={0.08}
              className="space-y-6 text-gray-700 leading-relaxed max-w-[62ch]"
            >
              <p>
                Through her work as a veterinarian, the founder of Plush Agri
                Solutions, Dr. Rukayyah Abdulsalam, recognised a recurring
                challenge. Many farmers sought veterinary support only after
                their animals became sick or losses had already occurred.
                There was a need for more accessible and affordable veterinary
                care, practical advice and support that looked beyond treating
                individual animals to understanding the farm conditions that
                affect their health.
              </p>
              <p>
                This inspired the establishment of Plush Agri Solutions, a
                business built to bring professional expertise closer to
                farmers and provide practical solutions to the challenges they
                face.
              </p>
              <p>
                Our approach considers the bigger picture. We look at animal
                health alongside farm hygiene, sanitation, biosecurity and
                management practices that can prevent disease and support
                better farm outcomes.
              </p>
              <p>
                What began with a focus on animal health has grown into a
                broader range of veterinary and agricultural services,
                including farm advisory, farmer training, farm management
                support and access to quality agricultural inputs.
              </p>
              <p className="font-heading text-navy text-xl leading-snug pt-4">
                Today, our commitment remains the same. We show up at the farm
                gate, understand the challenges farmers face and provide
                support that makes a practical difference.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. Mission and Vision */}
      <section className="bg-dark-green py-24 lg:py-32">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <p className="label !text-bright-green mb-14">
            Our Mission and Vision
          </p>
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <h2 className="text-cream/70 font-heading text-lg font-semibold mb-5">
                Our Mission
              </h2>
              <p className="font-heading text-white text-2xl lg:text-[1.9rem] leading-[1.35]">
                To improve livestock productivity through accessible
                veterinary care, practical farm support, farmer training and
                quality agricultural inputs.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-cream/70 font-heading text-lg font-semibold mb-5">
                Our Vision
              </h2>
              <p className="font-heading text-white text-2xl lg:text-[1.9rem] leading-[1.35]">
                A productive and resilient livestock sector in Nigeria, with
                healthier animals, better-managed farms and sustainable
                enterprises.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
