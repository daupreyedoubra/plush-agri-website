// NOTE: Content below is written in the PAS brand voice.
// Verify all descriptions against Company Profile Sections 04 and 06 before launch.

export interface ServiceImage {
  src: string;
  alt: string;
  /** True for portrait-orientation photos so layouts can pick a taller frame. */
  portrait?: boolean;
}

export interface Service {
  id: string;
  number: string;
  name: string;
  tagline: string;
  problem: string;
  approach: string;
  outcomes: string[];
  /** Real field photo from public/images. Omitted for services without a genuinely fitting photo. */
  image?: ServiceImage;
}

export const services: Service[] = [
  {
    id: "veterinary-advisory",
    number: "01",
    name: "Veterinary Advisory",
    tagline: "Credentialed diagnosis and guidance, delivered at the farm.",
    image: {
      src: "/images/_MG_2915.jpg",
      alt: "An elder farmer during a one-on-one Plush Agri Solutions advisory session in Danhonu 1",
      portrait: true,
    },
    problem:
      "Most farmers in Northern Nigeria have never had direct access to a qualified veterinarian. When livestock fall ill, they rely on informal advice, secondhand remedies, or no information at all, often too late to prevent serious loss.",
    approach:
      "PAS provides on-site veterinary advisory conducted by qualified personnel. We assess the animal, the environment, and the management practices in place before any recommendation is made. Advice is built around what is actually in front of us.",
    outcomes: [
      "Accurate diagnosis of livestock health conditions",
      "Informed treatment and management decisions",
      "Reduction in preventable livestock mortality",
      "Evidence-based records for ongoing herd management",
    ],
  },
  {
    id: "farm-visits",
    number: "02",
    name: "Farm Visits",
    tagline: "Present on the farm. Accountable for the outcome.",
    problem:
      "Remote advisory services such as phone calls, pamphlets, and one-off workshops consistently fail smallholder farmers because they ignore the specific conditions of each farm. Generic advice applied to a specific situation often makes things worse.",
    approach:
      "PAS conducts scheduled farm visits and responds to urgent requests from farmers. Every visit is documented. We assess conditions on the ground and return with recommendations that fit the farm, not a textbook average.",
    outcomes: [
      "Site-specific, actionable recommendations",
      "Early identification of health and productivity risks",
      "Ongoing relationship that builds farmer confidence",
      "Documentation for evidence and follow-up planning",
    ],
  },
  {
    id: "livestock-health-support",
    number: "03",
    name: "Livestock Health Support",
    tagline: "Prevention built into the rhythm of the farm.",
    problem:
      "Infectious disease moves quickly through a herd. By the time a visible problem is identified, significant losses may already be unavoidable. Most farmers have no preventive health protocol in place.",
    approach:
      "We design and implement preventive health programmes including vaccination schedules, deworming protocols, and herd monitoring routines tailored to the farm's species, scale, and season. We supply quality biologicals and follow up on outcomes.",
    outcomes: [
      "Reduced incidence of preventable livestock disease",
      "Structured herd health calendar farmers can follow",
      "Timely access to vaccines and biological inputs",
      "Improved herd productivity and reduced mortality rates",
    ],
  },
  {
    id: "farmer-training",
    number: "04",
    name: "Farmer Training",
    tagline: "Knowledge that stays on the farm long after we leave.",
    image: {
      src: "/images/_MG_2872.jpg",
      alt: "Farmers listening during a Plush Agri Solutions training session in Danhonu 1",
    },
    problem:
      "One-off information sessions do not change farm behaviour. Farmers need structured, repeatable learning, delivered in the context of their own operation, to actually shift how they manage their land and animals.",
    approach:
      "PAS designs and delivers training sessions for individual farmers, farmer groups, and cooperatives. Sessions are practical, context-specific, and conducted on-farm wherever possible. Topics cover animal husbandry, crop management, input use, biosecurity, and record-keeping.",
    outcomes: [
      "Measurable improvement in farm management practices",
      "Farmers equipped to apply learning independently",
      "Group knowledge transfer that multiplies across communities",
      "Documented behaviour change for programme reporting",
    ],
  },
  {
    id: "biosecurity-advisory",
    number: "05",
    name: "Biosecurity Advisory",
    tagline: "Stopping disease before it enters the gate.",
    problem:
      "Poor biosecurity, from how animals are housed, to how new stock is introduced, to how visitors move through a farm, creates the conditions for disease to enter and spread. Most farmers have no formal protocol in place.",
    approach:
      "PAS conducts biosecurity assessments, identifies risk points specific to the farm's layout and practices, and designs practical protocols that farmers can implement and maintain. We prioritise low-cost, high-impact measures that fit the farm's actual resources.",
    outcomes: [
      "Documented biosecurity protocol for the farm",
      "Reduced entry risk from common disease vectors",
      "Practical containment procedures farmers can follow",
      "Lower long-term veterinary costs through prevention",
    ],
  },
  {
    id: "agricultural-input-access",
    number: "06",
    name: "Agricultural Input Access",
    tagline: "Quality inputs at fair prices, when they are actually needed.",
    image: {
      src: "/images/_MG_2942.jpg",
      alt: "Plush Agri Solutions branded seed inputs held up at a distribution session",
      portrait: true,
    },
    problem:
      "Access to quality vaccines, biologicals, and equipment is inconsistent across rural Northern Nigeria. Farmers are often forced to use substandard inputs, pay inflated prices, or go without, all of which erode the value of any advisory work done.",
    approach:
      "PAS supplies vetted vaccines, biologicals, and essential farm equipment to farmers directly and through cooperative channels. Supply is linked to advisory: inputs are matched to the specific health programme or protocol in place on the farm.",
    outcomes: [
      "Reliable access to quality-assured agricultural inputs",
      "Reduced cost burden through direct and cooperative sourcing",
      "Inputs matched to specific farm health protocols",
      "Reduced risk from counterfeit or substandard products",
    ],
  },
  {
    id: "cooperative-support",
    number: "07",
    name: "Cooperative Support",
    tagline: "Advisory and input access that scales across a membership.",
    image: {
      src: "/images/_MG_2870.jpg",
      alt: "Members of a farmer group during a Plush Agri Solutions advisory meeting",
    },
    problem:
      "Farmer cooperatives are a critical vehicle for agricultural development in Northern Nigeria, but they frequently lack technical support to standardise practices, negotiate input access, or deliver structured advisory to their members.",
    approach:
      "PAS works with cooperatives to deliver group advisory sessions, design shared health and production protocols, and provide collective input access. We support cooperative leadership in building structured advisory programmes that reach every member.",
    outcomes: [
      "Standardised practices across cooperative membership",
      "Economies of scale on inputs and advisory services",
      "Increased technical capacity within cooperative leadership",
      "Collective record-keeping and evidence generation",
    ],
  },
  {
    id: "community-engagement",
    number: "08",
    name: "Community Engagement",
    tagline: "Agricultural health addressed at the scale it actually operates.",
    image: {
      src: "/images/_MG_2911.jpg",
      alt: "Community members gathered for a Plush Agri Solutions engagement session in Danhonu 1",
    },
    problem:
      "Disease outbreaks, nutritional deficiencies, and productivity challenges do not stop at farm boundaries. When they are addressed farm-by-farm, the community-level drivers of the problem remain untouched.",
    approach:
      "PAS conducts community-level engagement programmes addressing animal health, crop nutrition, and agricultural productivity in the context of the wider community. We work through existing community structures to build shared understanding and coordinated response.",
    outcomes: [
      "Community-level awareness of animal health and biosecurity",
      "Coordinated response protocols for disease outbreaks",
      "Improved agricultural practices across the community",
      "Strengthened community structures for ongoing engagement",
    ],
  },
  {
    id: "development-programme-support",
    number: "09",
    name: "Development Programme Support",
    tagline: "A trusted technical partner with genuine community access.",
    problem:
      "NGOs, government agencies, and international organisations working in agricultural development frequently struggle to find technical partners with verified community access, credentialed expertise, and a functioning M&E framework.",
    approach:
      "PAS provides technical advisory, field implementation support, and M&E contribution to development programmes operating in Northern Nigeria. Our existing farmer networks and community relationships provide the access that external organisations need to deliver real results.",
    outcomes: [
      "Technical quality assurance for development programme activities",
      "Verified community access and stakeholder relationships",
      "Field-level M&E data collection and documentation",
      "Credentialed technical advisory for programme design and review",
    ],
  },
  {
    id: "capacity-building",
    number: "10",
    name: "Capacity Building",
    tagline: "The work that makes all other work last.",
    image: {
      src: "/images/_MG_2862.jpg",
      alt: "Women farmers participating in a Plush Agri Solutions capacity building session",
    },
    problem:
      "Advisory visits and training sessions create temporary improvement. Sustainable change requires farmers to internalise knowledge and build the skill to apply it independently, season after season, without external support.",
    approach:
      "PAS designs multi-session capacity building programmes that build skill progressively over time. We track individual farmer progress, adjust content to observed gaps, and measure outcomes against defined benchmarks. The goal is independence, not continued dependency on PAS.",
    outcomes: [
      "Long-term retention of farm management skills",
      "Farmers capable of independent, evidence-based decisions",
      "Measurable behaviour change documented across cohorts",
      "Multiplier effect as trained farmers share knowledge locally",
    ],
  },
];
