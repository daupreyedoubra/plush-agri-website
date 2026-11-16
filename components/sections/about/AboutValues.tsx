import Reveal from "@/components/ui/Reveal";

/** About page sections 4 and 5, in the founder's own words (Nov 2026). */

const values = [
  {
    name: "Practicality",
    body: "We believe in solutions that work. We take time to understand farmers’ needs and challenges, providing relevant support, products and solutions that can be applied to their day-to-day operations.",
  },
  {
    name: "Integrity",
    body: "We are committed to honesty, transparency and accountability in every interaction. We provide responsible advice, communicate clearly and strive to earn the trust of the farmers and partners we serve.",
  },
  {
    name: "Excellence",
    body: "We uphold high professional standards in our knowledge, service delivery and attention to detail. We continually seek to improve the quality of our work and the experience we provide.",
  },
  {
    name: "Distinction",
    body: "We challenge conventional expectations of agricultural businesses. Through our approach, presentation, organisation and customer experience, we demonstrate that agricultural services can be professional, modern, well-structured and accessible.",
  },
];

export function CoreValues() {
  return (
    <section className="bg-cream py-24 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-4">
          <p className="label mb-5">Our Core Values</p>
          <h2 className="text-navy text-3xl lg:text-[2.6rem]">
            The standards we work by.
          </h2>
        </Reveal>
        <ol className="lg:col-span-8 grid gap-x-10 gap-y-12 sm:grid-cols-2">
          {values.map((v, i) => (
            <li key={v.name}>
              <Reveal
                delay={(i % 2) * 0.08}
                className="border-t-2 border-navy/15 pt-6"
              >
                <p className="font-heading text-sm font-semibold text-olive mb-3 num-tabular">
                  0{i + 1}
                </p>
                <h3 className="text-navy text-xl font-semibold mb-3">
                  {v.name}
                </h3>
                <p className="text-gray-700 leading-relaxed">{v.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function WhatMakesUsDifferent() {
  return (
    <section className="bg-navy py-24 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 grid gap-10 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-3">
          <p className="label !text-bright-green">What Makes Us Different</p>
        </Reveal>
        <div className="lg:col-span-9">
          <Reveal>
            <h2 className="text-white text-2xl lg:text-[2.1rem] leading-[1.35] font-semibold">
              At Plush Agri Solutions, we believe agriculture deserves the
              same level of professionalism, organisation and thoughtful
              presentation found in any other modern industry.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-10 text-cream/85 text-lg leading-relaxed max-w-[62ch]">
              We are intentional about how we work, how we present ourselves
              and the experience we create for our customers. We are
              challenging conventional perceptions of agricultural businesses
              and showing that quality, professionalism and accessibility can
              coexist.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
