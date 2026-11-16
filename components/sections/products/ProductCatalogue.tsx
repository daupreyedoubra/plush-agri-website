import { ArrowUpRight } from "lucide-react";
import { productCategories } from "@/lib/products";
import { whatsappEnquiryUrl } from "@/lib/contact";
import Reveal from "@/components/ui/Reveal";

const BACKGROUNDS = ["bg-cream", "bg-white"];

export default function ProductCatalogue() {
  return (
    <>
      {productCategories.map((category, i) => (
        <section
          key={category.id}
          id={category.id}
          className={`${BACKGROUNDS[i % BACKGROUNDS.length]} py-20 lg:py-28 scroll-mt-20`}
        >
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8 grid gap-10 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-4">
              <p className="font-heading font-bold text-olive text-5xl leading-none mb-6 num-tabular">
                0{i + 1}
              </p>
              <h2 className="text-navy text-2xl lg:text-[2rem] leading-[1.2] max-w-xs">
                {category.title}
              </h2>
            </Reveal>

            <div className="lg:col-span-8 space-y-14">
              {category.groups.map((group, g) => (
                <Reveal key={group.title ?? g} delay={0.06 + g * 0.06}>
                  {group.title && (
                    <h3 className="label mb-5">{group.title}</h3>
                  )}
                  <ul className="border-b-2 border-navy/15">
                    {group.products.map((product) => (
                      <li key={product.name}>
                        <a
                          href={whatsappEnquiryUrl(product.name.toLowerCase())}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-start justify-between gap-6 border-t-2 border-navy/15 py-6"
                        >
                          <span className="block">
                            <span className="block font-heading font-semibold text-navy text-lg leading-snug group-hover:text-olive transition-colors duration-200">
                              {product.name}
                            </span>
                            {product.description && (
                              <span className="mt-2 block text-gray-700 leading-relaxed max-w-[52ch]">
                                {product.description}
                              </span>
                            )}
                          </span>
                          <span className="mt-1 inline-flex shrink-0 items-center gap-2 font-heading text-sm font-semibold text-dark-green">
                            <span className="hidden sm:inline">Enquire</span>
                            <ArrowUpRight
                              className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                              strokeWidth={2.25}
                            />
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
