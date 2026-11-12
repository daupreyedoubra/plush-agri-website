export const WHATSAPP_NUMBER = "2348087702906";

const wa = (text: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

export const WHATSAPP_VET_URL = wa("Hello, can I speak with a Vet?");
export const WHATSAPP_PARTNER_URL = wa(
  "Hello, I would like to discuss working with Plush Agri Solutions."
);

export const whatsappEnquiryUrl = (item: string) =>
  wa(`Hello, I would like to enquire about ${item}.`);
export const WHATSAPP_PRODUCTS_URL = wa(
  "Hello, I would like to enquire about your products and supplies."
);
