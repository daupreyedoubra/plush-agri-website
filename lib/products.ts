import type { StaticImageData } from "next/image";

export type Product = {
  name: string;
  /** Optional until the founder supplies product photos and descriptions. */
  description?: string;
  image?: StaticImageData;
};

export type ProductCategory = {
  id: string;
  letter: string;
  title: string;
  products: Product[];
};

// Categories and items exactly as listed in the founder's sitemap brief.
// To add a photo or description to an item, fill in `image` / `description`.
export const productCategories: ProductCategory[] = [
  {
    id: "veterinary",
    letter: "A",
    title: "Veterinary Products and Supplies",
    products: [
      { name: "Vaccines and biologicals" },
      { name: "Veterinary medicines and health products" },
      { name: "Nutritional supplements" },
      { name: "Other essential veterinary supplies" },
    ],
  },
  {
    id: "livestock-inputs",
    letter: "B",
    title: "Poultry and Livestock Inputs",
    products: [
      { name: "Animal feed and feed supplements" },
      { name: "Day-old chicks" },
      { name: "Point-of-lay birds" },
      { name: "Other livestock-related inputs" },
    ],
  },
  {
    id: "equipment",
    letter: "C",
    title: "Farm Equipment and Accessories",
    products: [
      { name: "Feed troughs and feeders" },
      { name: "Drinkers, including nipple drinkers" },
      { name: "Poultry equipment and accessories" },
      { name: "Other essential farm equipment and supplies" },
    ],
  },
];
