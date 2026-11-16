import type { Metadata } from "next";
import heroPhoto from "@/public/images/field/poultry-health.jpg";
import PageHero from "@/components/ui/PageHero";
import CtaButton from "@/components/ui/CtaButton";
import ProductCatalogue from "@/components/sections/products/ProductCatalogue";
import { productCategories } from "@/lib/products";
import { WHATSAPP_PRODUCTS_URL } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Products & Supplies",
  description:
    "Poultry stock, vaccines and biologicals, veterinary products, poultry feeds and supplements, and farm equipment available through Plush Agri Solutions in Kaduna State. Enquire on WhatsApp.",
  alternates: {
    canonical: "https://plushagrisolutions.com/products",
  },
  openGraph: {
    url: "https://plushagrisolutions.com/products",
    title: "Products & Supplies | Plush Agri Solutions",
    description:
      "Poultry stock, vaccines, veterinary products, feeds and farm equipment available through Plush Agri Solutions.",
  },
};

export default function ProductsPage() {
  return (
    <main>
      <PageHero
        crumb="Products & Supplies"
        label="Products & Supplies"
        title="Quality farm inputs, from people who know your farm."
        intro="Veterinary, livestock and agricultural products and inputs available through Plush Agri Solutions. Send us a WhatsApp message to ask about any item."
        photo={heroPhoto}
        photoAlt="Broiler chickens beside feeders and drinkers in a poultry pen"
      >
        <CtaButton href={WHATSAPP_PRODUCTS_URL}>
          Enquire About Products
        </CtaButton>
      </PageHero>

      <nav
        aria-label="Product categories"
        className="bg-dark-green"
      >
        <ul className="max-w-[1280px] mx-auto px-6 lg:px-8 py-5 flex flex-wrap gap-x-10 gap-y-3">
          {productCategories.map((c, i) => (
            <li key={c.id}>
              <a
                href={`#${c.id}`}
                className="font-heading text-sm font-semibold text-cream/85 hover:text-white transition-colors"
              >
                <span className="text-bright-green mr-2 num-tabular">
                  0{i + 1}
                </span>
                {c.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <ProductCatalogue />

      <section className="bg-dark-green py-20 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-8">
            <h2 className="text-white text-2xl lg:text-[2rem] leading-[1.3] max-w-2xl">
              Contact us to enquire about products, sourcing and
              availability.
            </h2>
          </div>
          <div className="lg:col-span-4 lg:justify-self-end">
            <CtaButton href={WHATSAPP_PRODUCTS_URL}>
              Enquire About Products
            </CtaButton>
          </div>
        </div>
      </section>
    </main>
  );
}
