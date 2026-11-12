import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import photo from "@/public/images/field/kit-distribution.jpg";
import Reveal from "@/components/ui/Reveal";

export default function WhoWeAre() {
  return (
    <section className="bg-cream py-24 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 grid gap-12 lg:grid-cols-12 lg:gap-16 items-center">
        <Reveal className="lg:col-span-6">
          <p className="label mb-5">Who We Are</p>
          <h2 className="text-navy text-[1.7rem] lg:text-[2.1rem] leading-[1.3] mb-8 max-w-xl">
            Plush Agri Solutions is a veterinary and agricultural business
            committed to helping farmers improve productivity, prevent diseases
            and make better decisions about their farms.
          </h2>
          <div className="space-y-5 text-gray-700 max-w-xl">
            <p>
              We work directly with farmers, providing practical advice,
              veterinary services, training and access to quality, reliable
              farm supplies at affordable prices.
            </p>
            <p>
              We also work with cooperatives and organisations to support
              farmers and strengthen agricultural communities.
            </p>
          </div>
          <Link
            href="/about"
            className="group mt-10 inline-flex items-center gap-2 font-heading font-semibold text-dark-green border-b-2 border-bright-green pb-1"
          >
            Learn More About Us
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </Reveal>

        <Reveal className="lg:col-span-6" delay={0.1}>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src={photo}
              alt="Plush Agri Solutions team handing out farm health kits to farmers at a training session"
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
