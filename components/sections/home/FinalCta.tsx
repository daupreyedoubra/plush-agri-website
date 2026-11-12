import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import photo from "@/public/images/field/farmer-smiling.jpg";
import CtaButton from "@/components/ui/CtaButton";
import Reveal from "@/components/ui/Reveal";
import { WHATSAPP_VET_URL } from "@/lib/contact";

export default function FinalCta() {
  return (
    <section id="partner" className="bg-sage-tint py-24 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 grid gap-12 lg:grid-cols-12 lg:gap-16 items-center">
        <Reveal className="lg:col-span-6 lg:order-2">
          <p className="label mb-5">Work With Us</p>
          <h2 className="text-navy text-3xl lg:text-[2.6rem] mb-6">
            Let’s solve your farm problems together.
          </h2>
          <p className="text-gray-700 max-w-lg mb-10">
            Farmers, cooperatives and organisations: talk to our vets about
            your animals and your farm, or reach out to partner with us in
            supporting farming communities.
          </p>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-5">
            <CtaButton href={WHATSAPP_VET_URL}>Talk to a Vet</CtaButton>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 font-heading font-semibold text-dark-green border-b-2 border-bright-green pb-1"
            >
              Partner With Us
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-6 lg:order-1" delay={0.1}>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src={photo}
              alt="Farmers at a Plush Agri Solutions training session"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              placeholder="blur"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
