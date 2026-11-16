import type { StaticImageData } from "next/image";

export type Product = {
  name: string;
  description?: string;
  /** Optional until the founder supplies product photos. */
  image?: StaticImageData;
};

export type ProductGroup = {
  /** Sub-heading, used where she split a category into groups. */
  title?: string;
  products: Product[];
};

export type ProductCategory = {
  id: string;
  title: string;
  groups: ProductGroup[];
};

// Categories and items exactly as listed in the founder's Products &
// Supplies brief (Nov 2026).
export const productCategories: ProductCategory[] = [
  {
    id: "poultry-stock",
    title: "Poultry Stock",
    groups: [
      {
        products: [{ name: "Day-old chicks" }, { name: "Point-of-lay pullets" }],
      },
    ],
  },
  {
    id: "vaccines",
    title: "Vaccines and Biologicals",
    groups: [
      {
        products: [
          { name: "Poultry vaccines" },
          { name: "Cattle vaccines" },
          { name: "Sheep and goat vaccines" },
          { name: "Other veterinary biological products" },
        ],
      },
    ],
  },
  {
    id: "veterinary-products",
    title: "Veterinary Products",
    groups: [
      {
        products: [
          { name: "Antibiotics" },
          { name: "Dewormers and antiparasitics" },
          {
            name: "Tick, mite and other external parasite control products",
          },
          { name: "Anti-inflammatory and pain-relief medicines" },
          { name: "Wound-care products and topical preparations" },
        ],
      },
    ],
  },
  {
    id: "feeds",
    title: "Poultry Feeds and Nutritional Supplements",
    groups: [
      {
        products: [
          {
            name: "Poultry feeds",
            description:
              "Chick mash, broiler starter and finisher, grower mash and layers mash.",
          },
          {
            name: "Vitamins and minerals",
            description:
              "Vitamin supplements, mineral premixes and calcium supplements.",
          },
          {
            name: "Other nutritional supplements",
            description:
              "Electrolytes, probiotics and mineral blocks or salt licks.",
          },
        ],
      },
    ],
  },
  {
    id: "equipment",
    title: "Farm Equipment and Supplies",
    groups: [
      {
        title: "Poultry Equipment",
        products: [
          { name: "Feeders and automatic feeders" },
          { name: "Bell drinkers and nipple drinkers" },
          { name: "Brooders, heat lamps and brooding accessories" },
        ],
      },
      {
        title: "Livestock Handling and Veterinary Equipment",
        products: [
          { name: "Hoof trimmers and hoof shears" },
          { name: "Trocar and cannula" },
          { name: "Ear tag applicators and ear tags" },
          { name: "Elastrator applicators and rubber rings" },
          { name: "Automatic syringes" },
        ],
      },
    ],
  },
];
