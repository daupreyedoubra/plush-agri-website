import Reveal from "@/components/ui/Reveal";

const steps = [
  {
    title: "We Understand Your Needs",
    body: "We listen to farmers, understand their practices and identify the challenges they face.",
  },
  {
    title: "We Visit and Assess",
    body: "Where needed, we visit the farm, observe the animals and environment, and identify areas that need attention.",
  },
  {
    title: "We Provide Practical Solutions",
    body: "We offer relevant veterinary care, farm advice, training and access to quality supplies based on the farmer’s needs and our assessment.",
  },
  {
    title: "We Follow Up",
    body: "We check on progress, answer questions and provide further guidance where necessary.",
  },
];

export default function HowWeWork() {
  return (
    <section className="bg-dark-green py-24 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <Reveal className="max-w-2xl mb-16 lg:mb-20">
          <p className="label !text-bright-green mb-5">How We Work</p>
          <h2 className="text-white text-[1.7rem] lg:text-[2.1rem] leading-[1.3]">
            We take time to understand each farmer’s needs and provide
            practical support that fits their farm and particular challenges.
          </h2>
        </Reveal>

        <ol className="relative grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {/* Connecting line through the step markers (desktop) */}
          <span
            aria-hidden="true"
            className="hidden lg:block absolute top-6 left-6 right-[calc(25%-1.5rem)] h-px bg-white/25"
          />
          {steps.map((step, i) => (
            <li key={step.title} className="relative">
              <Reveal delay={i * 0.08}>
                <span className="relative z-10 mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-bright-green font-heading font-semibold text-dark-green num-tabular">
                  {i + 1}
                </span>
                <h3 className="text-white text-xl font-semibold mb-3">
                  {step.title}
                </h3>
                <p className="text-cream/80 leading-relaxed">{step.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
