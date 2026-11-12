import Image from "next/image";
import heroImage from "@/public/images/field/farm-visit-hero.jpg";
import CtaButton from "@/components/ui/CtaButton";
import { WHATSAPP_VET_URL } from "@/lib/contact";

export default function HomeHero() {
  return (
    <section className="relative bg-dark-green lg:min-h-[86svh] lg:grid lg:grid-cols-12">
      <div className="relative aspect-[4/3] sm:aspect-[16/9] lg:aspect-auto lg:order-2 lg:col-span-7">
        <Image
          src={heroImage}
          alt="A Plush Agri Solutions field officer taking notes with a farmer during a farm visit"
          fill
          priority
          sizes="(min-width: 1024px) 58vw, 100vw"
          className="object-cover object-[52%_center]"
          placeholder="blur"
        />
      </div>

      <div className="relative lg:order-1 lg:col-span-5 flex items-center">
        <div className="w-full px-6 py-16 sm:px-10 lg:pl-[max(2rem,calc((100vw-1280px)/2+2rem))] lg:pr-12 lg:py-24">
          <p className="label !text-bright-green mb-6">
            Veterinary &amp; Agricultural Services
          </p>
          <h1 className="text-white mb-6">
            Practical Solutions for Real Farm Problems.
          </h1>
          <p className="text-cream/85 text-lg leading-relaxed max-w-md mb-10">
            Plush Agri Solutions provides veterinary services, livestock health
            advisory and practical farm support to farmers, cooperatives and
            agribusinesses.
          </p>
          <div className="flex flex-wrap gap-4">
            <CtaButton href={WHATSAPP_VET_URL}>Talk to a Vet</CtaButton>
            <CtaButton href="/services" variant="outline">
              Explore Our Services
            </CtaButton>
          </div>
        </div>
      </div>
    </section>
  );
}
