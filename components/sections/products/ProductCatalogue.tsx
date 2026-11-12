import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { productCategories } from "@/lib/products";
import { whatsappEnquiryUrl } from "@/lib/contact";
import Reveal from "@/components/ui/Reveal";

const BACKGROUNDS = ["bg-cream", "bg-white", "bg-sage-tint"];

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
              <p className="font-heading font-bold text-olive text-5xl leading-none mb-6">
                {category.letter}
              </p>
              <h2 className="text-navy text-2xl lg:text-[2rem] max-w-xs">
                {category.title}
              </h2>
            </Reveal>

            <ul className="lg:col-span-8 grid gap-4 sm:grid-cols-2">
              {category.products.map((product, j) => (
                <li key={product.name}>
                  <Reveal delay={j * 0.05} className="h-full">
                    <a
                      href={whatsappEnquiryUrl(product.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex h-full flex-col rounded-2xl bg-navy/[0.05] overflow-hidden transition-colors duration-200 hover:bg-navy hover:text-white"
                    >
                      {product.image && (
                        <div className="relative aspect-[4/3]">
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
                            className="object-cover"
                            placeholder="blur"
                          />
                        </div>
                      )}
                      <div className="flex flex-1 flex-col justify-between gap-8 p-7">
                        <div>
                          <h3 className="text-navy text-lg font-semibold leading-snug group-hover:text-white transition-colors duration-200">
                            {product.name}
                          </h3>
                          {product.description && (
                            <p className="mt-3 text-[0.95rem] leading-relaxed text-gray-700 group-hover:text-white/80 transition-colors duration-200">
                              {product.description}
                            </p>
                          )}
                        </div>
                        <span className="inline-flex items-center gap-2 font-heading text-sm font-semibold text-dark-green group-hover:text-bright-green transition-colors duration-200">
                          Enquire on WhatsApp
                          <ArrowUpRight
                            className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            strokeWidth={2.25}
                          />
                        </span>
                      </div>
                    </a>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}
    </>
  );
}
