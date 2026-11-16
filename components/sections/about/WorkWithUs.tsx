import CtaButton from "@/components/ui/CtaButton";
import Reveal from "@/components/ui/Reveal";
import {
  WHATSAPP_SUPPORT_URL,
  PARTNERSHIPS_MAILTO,
  RECRUITMENT_MAILTO,
} from "@/lib/contact";

/** About page section 9, in the founder's own words (Nov 2026). */

const doors = [
  {
    title: "For Farmers",
    body: "Access veterinary care, practical farm advice, training and quality agricultural inputs to support your farming operations.",
    cta: "Get Support",
    href: WHATSAPP_SUPPORT_URL,
  },
  {
    title: "For Businesses and Organisations",
    body: "We welcome opportunities to collaborate with agribusinesses, cooperatives, development organisations and institutions seeking practical solutions across the agricultural value chain.",
    cta: "Explore Partnerships",
    href: PARTNERSHIPS_MAILTO,
  },
  {
    title: "For Professionals",
    body: "We are interested in connecting with skilled and motivated individuals who share our commitment to improving agricultural services and supporting farmers.",
    cta: "Join Our Team",
    href: RECRUITMENT_MAILTO,
  },
];

export default function WorkWithUs() {
  return (
    <>
      <section
        id="work-with-us"
        className="bg-white py-24 lg:py-32 scroll-mt-20"
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <Reveal className="grid gap-6 lg:grid-cols-12 lg:items-end mb-16">
            <div className="lg:col-span-6">
              <p className="label mb-5">Work With Us</p>
              <h2 className="text-navy text-3xl lg:text-[2.6rem]">
                Practical Solutions Begin with a Conversation.
              </h2>
            </div>
            <p className="lg:col-span-6 text-gray-700 leading-relaxed">
              Whether you are a farmer looking for reliable veterinary
              support, an agribusiness seeking practical solutions, or an
              organisation interested in working together, Plush Agri
              Solutions is ready to connect.
            </p>
          </Reveal>
          <ul className="grid gap-6 lg:grid-cols-3">
            {doors.map((d, i) => (
              <li key={d.title} className="h-full">
                <Reveal
                  delay={i * 0.06}
                  className="h-full rounded-2xl bg-sage-tint p-8 lg:p-10 flex flex-col"
                >
                  <p className="font-heading text-sm font-semibold text-olive mb-4 num-tabular">
                    0{i + 1}
                  </p>
                  <h3 className="text-navy text-xl font-semibold mb-4">
                    {d.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-10">
                    {d.body}
                  </p>
                  <div className="mt-auto">
                    <CtaButton href={d.href}>{d.cta}</CtaButton>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-navy py-20 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-8">
            <h2 className="text-white text-2xl lg:text-[2rem] mb-4">
              Let’s Find Practical Solutions Together.
            </h2>
            <p className="text-cream/85 max-w-xl">
              Get in touch with Plush Agri Solutions to discuss your needs,
              explore opportunities or find out how we can work together.
            </p>
          </div>
          <div className="lg:col-span-4 lg:justify-self-end">
            <CtaButton href="/contact">Contact Us</CtaButton>
          </div>
        </div>
      </section>
    </>
  );
}
