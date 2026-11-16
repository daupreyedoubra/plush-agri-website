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

export const WHATSAPP_SUPPORT_URL = wa(
  "Hello, I would like to make an enquiry and request support."
);

export const PARTNERSHIPS_EMAIL = "partnerships@plushagrisolutions.com";
export const RECRUITMENT_EMAIL = "recruitment@plushagrisolutions.com";
export const PARTNERSHIPS_MAILTO = `mailto:${PARTNERSHIPS_EMAIL}?subject=${encodeURIComponent("Partnership enquiry")}`;
export const RECRUITMENT_MAILTO = `mailto:${RECRUITMENT_EMAIL}?subject=${encodeURIComponent("Expression of interest")}`;
