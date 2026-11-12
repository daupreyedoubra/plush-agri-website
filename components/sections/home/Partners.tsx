import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

// Add new partners here. Logos should be single-colour light versions
// (white on transparent) so they read on the navy band.
const partners = [
  {
    name: "StrideEQ",
    logo: "/images/partners/strideeq.svg",
    width: 1145,
    height: 324,
  },
];

export default function Partners() {
  return (
    <section className="bg-navy py-20 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 grid gap-12 lg:grid-cols-12 lg:items-center">
        <Reveal className="lg:col-span-5">
          <p className="label !text-bright-green mb-5">Our Partners</p>
          <p className="text-white font-heading text-xl lg:text-2xl leading-snug max-w-md">
            We value the organisations and businesses that work alongside us
            to support our vision and strengthen our work.
          </p>
        </Reveal>

        <ul className="lg:col-span-7 flex flex-wrap items-center gap-x-14 gap-y-10 lg:justify-end">
          {partners.map((p) => (
            <li key={p.name}>
              <Image
                src={p.logo}
                alt={p.name}
                width={p.width}
                height={p.height}
                className="h-12 lg:h-14 w-auto opacity-90"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
