export type CategorySlug =
  | "all"
  | "animal-health"
  | "farmer-education"
  | "disease-prevention"
  | "biosecurity"
  | "field-insights";

export interface Category {
  slug: CategorySlug;
  label: string;
  description: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: Exclude<CategorySlug, "all">;
  readTime: string;
  publishedAt: string;
}

export const categories: Category[] = [
  {
    slug: "all",
    label: "All Resources",
    description: "Browse all knowledge resources from the PAS field team.",
  },
  {
    slug: "animal-health",
    label: "Animal Health",
    description:
      "Practical guidance on livestock health management, disease recognition, and veterinary care.",
  },
  {
    slug: "farmer-education",
    label: "Farmer Education",
    description:
      "Foundational knowledge to help farmers plan, manage, and improve their operations.",
  },
  {
    slug: "disease-prevention",
    label: "Disease Prevention",
    description:
      "Preventive strategies to protect herds and crops before problems arise.",
  },
  {
    slug: "biosecurity",
    label: "Biosecurity",
    description:
      "Protocols and practices to stop disease from entering or spreading on the farm.",
  },
  {
    slug: "field-insights",
    label: "Field Insights",
    description:
      "Observations and patterns from PAS field visits across Northern Nigeria.",
  },
];

export const articles: Article[] = [
  // Animal Health
  {
    id: "ah-1",
    slug: "common-livestock-diseases-northern-nigeria",
    title: "Understanding Common Livestock Diseases in Northern Nigeria",
    excerpt:
      "Across Northern Nigeria, cattle, goats, sheep, and poultry face a consistent set of threats that account for the majority of preventable farm losses. Understanding which diseases are most common, how they spread, and what they look like in the early stages is the foundation of effective herd management. Haemorrhagic Septicaemia is one of the most destructive bacterial diseases affecting cattle, spreading rapidly in wet season conditions. Foot and Mouth Disease circulates widely in unvaccinated herds, causing severe productivity loss even when mortality is low. Trypanosomiasis, transmitted by tsetse flies, weakens cattle progressively before farmers notice a problem. For small ruminants, Peste des Petits Ruminants can kill up to 80% of an affected flock within weeks. In poultry, Newcastle Disease can wipe out an entire flock before farmers have time to respond. The good news: every one of these diseases has a known prevention or management protocol. What they require is awareness, vaccination, and access to qualified veterinary support before an outbreak begins. This guide walks through each major disease, what it looks like, when it tends to strike, and what to do.",
    category: "animal-health",
    readTime: "8 min read",
    publishedAt: "2026-06-01",
  },
  {
    id: "ah-2",
    slug: "vaccination-schedules-cattle-small-ruminants",
    title: "Vaccination Schedules for Cattle and Small Ruminants",
    excerpt:
      "Vaccination is the single most cost-effective intervention available to livestock farmers in Northern Nigeria. A well-timed vaccination programme protects against diseases that can destroy an entire season's productivity in days, for a fraction of what treatment costs after the fact. The challenge is timing. Many vaccines must be administered before the peak disease season, not during it. In Northern Nigeria, the transition into the rainy season (around March to April) is the critical window for several core cattle vaccines, including Haemorrhagic Septicaemia and Black Quarter. Missing this window means farming through the wet season with unprotected animals. For small ruminants, the PPR vaccine should be administered annually, ideally before the dry season movement period when herds mix and disease transmission risk increases. This article presents a practical month-by-month calendar covering core cattle vaccines (HS, BQ, FMD, Anthrax), small ruminant vaccines (PPR, FMD, Contagious Pleuropneumonia), poultry vaccines (Newcastle Disease, Gumboro), and cold chain storage requirements. Every vaccine requires cold chain management. This guide explains what that means for farmers without refrigeration, and exactly what to ask your vet.",
    category: "animal-health",
    readTime: "6 min read",
    publishedAt: "2026-05-15",
  },
  {
    id: "ah-3",
    slug: "early-signs-illness-herd",
    title: "Recognising Early Signs of Illness in Your Herd",
    excerpt:
      "The difference between a small health problem and a catastrophic outbreak is often no more than a few days. Early recognition of illness is one of the most valuable skills a farmer can develop, and it is not as complex as many assume. The key is consistency. Farmers who spend time with their animals every morning observe changes that would be invisible to someone checking once a week. Changes in feeding behaviour, posture, coat condition, gait, and manure are all early indicators. In cattle, separation from the herd is one of the clearest early signs. A cow that was eating with the group yesterday and standing alone today is worth investigating immediately. Nasal discharge, laboured breathing, reluctance to rise, and unexplained drops in milk production all warrant urgent attention. In small ruminants, excessive sneezing, cloudy eyes, sudden lameness, or swollen lymph nodes frequently precede a diagnosable disease by several days. In poultry, reduced feed and water intake, ruffled feathers, and changes in droppings are the earliest reliable indicators. This guide covers each major livestock species: cattle, goats, sheep, and poultry, with five observable signs per species that most reliably signal a developing health problem.",
    category: "animal-health",
    readTime: "5 min read",
    publishedAt: "2026-04-28",
  },
  {
    id: "ah-4",
    slug: "when-to-call-a-veterinarian",
    title: "When to Call a Veterinarian: A Farmer's Guide",
    excerpt:
      "Not every health issue requires a vet visit, but some require one immediately. This guide helps farmers distinguish between the two and avoid costly delays. Conditions that warrant immediate veterinary contact include sudden death of previously healthy animals, multiple animals showing the same symptoms simultaneously, animals unable to stand or bearing weight, signs of severe respiratory distress, suspected poisoning, and difficult labour lasting more than two hours. Conditions that can be monitored for 24 hours before calling include mild lameness without swelling, reduced appetite in otherwise alert animals, and minor wounds that are not bleeding heavily. The guide also covers what information to have ready when you call: the species and number of animals affected, how long symptoms have been present, whether any animals have died, recent changes in feed or environment, and your vaccination history. Being prepared with this information makes every vet consultation more productive and ensures faster, more accurate diagnosis. PAS is available for urgent queries via WhatsApp at the number on our contact page.",
    category: "animal-health",
    readTime: "4 min read",
    publishedAt: "2026-04-10",
  },
  // Farmer Education
  {
    id: "fe-1",
    slug: "record-keeping-smallholder-farmers",
    title: "Record Keeping for Smallholder Farmers",
    excerpt:
      "Simple, practical approaches to farm record keeping that improve decision-making, support access to credit, and enable better advisory from a vet or consultant. Most smallholder farmers in Northern Nigeria manage their operations entirely from memory. While experienced farmers develop strong intuition, memory alone cannot track patterns across seasons, document the impact of specific interventions, or provide the evidence that banks and development programmes require. A simple record-keeping system needs only a notebook and a consistent habit. The minimum useful records are: date and nature of veterinary interventions, input purchases and quantities, animal births, deaths, and sales, and estimated productivity by season. These four categories of data, maintained consistently over two or three seasons, begin to reveal patterns that are invisible in the moment but transformative for planning. This guide provides a simple one-page template that any farmer can use, explains what each category is for, and shows how even basic records can support better conversations with advisors and improve access to credit schemes.",
    category: "farmer-education",
    readTime: "7 min read",
    publishedAt: "2026-06-10",
  },
  {
    id: "fe-2",
    slug: "seasonal-farm-management-calendar-northern-nigeria",
    title: "Seasonal Farm Management Calendar for Northern Nigeria",
    excerpt:
      "Northern Nigeria operates on two distinct agricultural seasons: the rainy season (broadly April to October) and the dry season (November to March). Each carries a different risk profile, different management priorities, and different decisions that determine whether a farm ends the year stronger or weaker than it began. Most productivity losses are not random. They follow seasonal patterns that repeat year after year, farm after farm. The farms that consistently perform better plan for these patterns in advance rather than reacting to them after the damage is done. This calendar outlines the key actions a livestock farmer should take each month across four areas: animal health, nutrition and feeding, farm infrastructure, and record-keeping. During the rainy season, disease risk peaks for most bacterial and viral conditions, pasture quality is highest, but waterlogging and mud create management challenges. Preventive vaccination must already be in place before this season begins. During the dry season, nutritional stress becomes the primary driver of productivity loss, water access needs active management, and planning for the next vaccination cycle should begin. The calendar format allows farmers to see their entire year at a glance and allocate resources proactively.",
    category: "farmer-education",
    readTime: "9 min read",
    publishedAt: "2026-05-05",
  },
  {
    id: "fe-3",
    slug: "better-input-decisions",
    title: "How to Make Better Input Decisions",
    excerpt:
      "The criteria farmers should use when selecting seeds, fertilisers, and veterinary inputs, and how to avoid the counterfeit products that drain returns. Counterfeit and substandard inputs are a serious problem in rural Northern Nigeria. Vaccines stored outside the cold chain lose potency before they are administered. Seeds of unknown variety perform unpredictably. Fertilisers adulterated with filler material deliver a fraction of the nutrient content on the label. The financial losses from these inputs are significant, but they are largely avoidable. This guide covers three areas of input decision-making: sourcing (where to buy and what suppliers to trust), verification (what checks to perform before using an input), and storage (how to preserve quality after purchase). It also covers what questions to ask a supplier and what red flags to watch for at the point of purchase. The single most important principle: if a deal seems too good, it probably is. Quality inputs at fair prices exist, but they come from reputable channels. This guide helps farmers identify those channels and build supplier relationships that protect their investment.",
    category: "farmer-education",
    readTime: "6 min read",
    publishedAt: "2026-03-22",
  },
  // Disease Prevention
  {
    id: "dp-1",
    slug: "preventing-foot-and-mouth-disease",
    title: "Preventing Foot and Mouth Disease in Your Herd",
    excerpt:
      "Foot and Mouth Disease is endemic across Northern Nigeria. It rarely kills cattle directly, but its economic impact is severe: animals stop eating, lose body condition rapidly, milk production drops by 50% or more, and draft animals become unable to work. The weakened state also makes secondary infections far more dangerous. FMD spreads through direct contact, contaminated surfaces, and airborne transmission over short distances. In Northern Nigeria, disease peaks typically follow the movement of animals between grazing areas during the dry season, when herds mix at shared water points and along livestock routes. The most effective prevention is annual vaccination combined with movement discipline. Cattle in areas with known FMD circulation should be vaccinated before the dry season movement period. The vaccine provides protection for approximately six months, so timing matters: vaccinating in October, just before the peak risk period, is more effective than vaccinating in April. This article covers how to identify FMD (the blisters, drooling, and lameness pattern), the recommended vaccination schedule for Northern Nigeria, what to do if FMD is suspected (quarantine protocol, notification, treatment of secondary infections), and how to rebuild herd condition after an outbreak. Do not wait for visible symptoms before acting.",
    category: "disease-prevention",
    readTime: "8 min read",
    publishedAt: "2026-06-05",
  },
  {
    id: "dp-2",
    slug: "disease-prevention-calendar",
    title: "Building a Disease Prevention Calendar for Your Farm",
    excerpt:
      "A step-by-step approach to creating a 12-month prevention schedule that reduces disease risk, aligns with seasonal patterns, and fits your farm's specific species mix. Prevention is the most reliable, least expensive way to protect livestock productivity. Yet most farms in Northern Nigeria have no formal prevention schedule. Advisory visits happen when problems arise, not before. Vaccines are sourced reactively, sometimes after the optimal window has passed. This article provides a practical framework for building a prevention calendar from scratch. The process starts with listing all the species on your farm and the diseases known to affect each one in your area. It then maps these diseases to the seasonal periods when risk is highest, and assigns prevention activities (vaccination, deworming, biosecurity checks) to the months before those risk windows open. The resulting calendar is a one-page management tool that tells the farmer, at any point in the year, what health activity is due next. The guide includes a blank template and a worked example based on a mixed cattle and small ruminant farm in Kaduna State.",
    category: "disease-prevention",
    readTime: "7 min read",
    publishedAt: "2026-04-18",
  },
  {
    id: "dp-3",
    slug: "managing-newcastle-disease-poultry",
    title: "Managing Newcastle Disease in Poultry",
    excerpt:
      "Newcastle Disease is the most feared poultry disease in Northern Nigeria. In unvaccinated flocks, it can kill 100% of birds within days of the first visible symptoms. Even vaccinated flocks can experience significant losses if vaccination protocols are incomplete or the cold chain was broken during storage. The disease spreads through contact with infected birds, contaminated equipment, workers moving between farms, and wild birds. In Northern Nigeria, village poultry raised without enclosure is a major contributor to transmission, as birds mix freely and exposure to migratory wild birds is uncontrolled. The first visible signs are respiratory: coughing, gasping, and nasal discharge. Neurological signs follow in some strains, with birds showing twisted necks and incoordination. Diarrhoea with green or yellow discolouration is common. Death follows within days of symptom onset in highly pathogenic strains. Vaccination is the only reliable control. The La Sota vaccine strain, administered by eye drop or drinking water, provides practical field-level protection when the cold chain is maintained. Vaccination should begin at day 7 in broiler chicks and by day 14 in indigenous chickens, with a booster at day 21, repeated every three months in high-risk areas. This article provides a full response protocol for suspected outbreaks.",
    category: "disease-prevention",
    readTime: "7 min read",
    publishedAt: "2026-03-14",
  },
  // Biosecurity
  {
    id: "bs-1",
    slug: "biosecurity-basics-smallholder-farmers",
    title: "Biosecurity Basics for Smallholder Farmers",
    excerpt:
      "Biosecurity is a word that sounds expensive. In practice, the core principles require no major infrastructure and very little cost. What they do require is consistency: the same decisions, made the same way, every time. The purpose of biosecurity is straightforward: to stop disease from entering your farm, and to stop it spreading if it does. On a smallholder farm in Northern Nigeria, the most common disease entry points are new animals brought without quarantine, visitors and vehicles that have been on other farms, contaminated feed or water, and wildlife movement through unprotected areas. The foundational practice is quarantine. Any animal brought onto the farm, regardless of where it came from, should be isolated for a minimum of 21 days before it joins the existing herd. This single practice eliminates one of the most common disease entry routes. For visitor management: a simple foot dip at the farm entrance, cleaning tools between different sections, and avoiding unnecessary movement of people between animal areas are basic measures that reduce transmission risk significantly. For water management: shared water sources are one of the fastest routes for disease spread between animals. Separate water points for isolated animals, regular cleaning of troughs, and keeping water away from manure storage all reduce contamination risk substantially.",
    category: "biosecurity",
    readTime: "5 min read",
    publishedAt: "2026-05-28",
  },
  {
    id: "bs-2",
    slug: "how-disease-enters-a-farm",
    title: "How Disease Enters a Farm and How to Stop It",
    excerpt:
      "The most common disease entry routes on livestock farms in Northern Nigeria and the practical measures that interrupt each one. Understanding how disease enters a farm is the first step in preventing it. The five most common entry routes are: new animals introduced without quarantine, people and vehicles moving between farms, shared grazing areas and water sources, contaminated feed or bedding, and wildlife and pest contact. Each of these routes has a specific set of practices that reduces transmission risk. New animal quarantine is the highest-impact single intervention, yet it is skipped on the majority of smallholder farms because it requires patience when a farmer has just paid for an animal and wants to see it with the herd. The 21-day wait is not optional; it is the minimum incubation period for most major livestock diseases. Shared grazing is a harder problem to solve alone because it requires coordination across a community. This article covers what farmers can do individually, including separate dry season supplementation to reduce dependence on shared pasture, and what community-level agreements on grazing rotation can achieve. It also covers the specific biosecurity actions for each entry route, ranked by cost and ease of implementation.",
    category: "biosecurity",
    readTime: "8 min read",
    publishedAt: "2026-04-02",
  },
  {
    id: "bs-3",
    slug: "simple-biosecurity-protocol",
    title: "Creating a Simple Biosecurity Protocol",
    excerpt:
      "A template biosecurity protocol for smallholder farms, covering visitor management, new stock introduction, waste management, and cleaning routines. A biosecurity protocol does not need to be a lengthy document. On a smallholder farm, a one-page set of rules that everyone working on the farm understands and follows consistently is more valuable than a comprehensive manual that nobody reads. This article provides a template protocol covering four areas. Visitor management: who is allowed into the farm, what they must do before entering the animal areas, and what records should be kept of farm visitors. New stock introduction: the quarantine pen setup, the minimum isolation period, the health checks to perform during isolation, and the signs that mean an animal should not be integrated into the existing herd. Waste management: where manure is stored, how often it is removed from animal areas, and how composting reduces pathogen load. Cleaning routines: which surfaces and equipment need regular cleaning, what to use, and how often. The template is designed to be written in a farmer's own words and posted visibly on the farm. Consistency over time is what makes biosecurity work.",
    category: "biosecurity",
    readTime: "6 min read",
    publishedAt: "2026-03-01",
  },
  // Field Insights
  {
    id: "fi-1",
    slug: "seasonal-patterns-livestock-health",
    title: "What We See in the Field: Seasonal Patterns in Livestock Health",
    excerpt:
      "Observations from PAS farm visits across Kaduna State, including the health patterns that repeat every season and what they tell us about where advisory is most needed. After consistent field presence across Kaduna State, clear patterns emerge in when and where livestock health problems cluster. These are not random. They follow predictable seasonal triggers that experienced farmers learn to anticipate and that well-prepared farms consistently avoid. The most reliable pattern is the late-wet-season respiratory disease spike in cattle, typically appearing in September and October as humidity peaks and temperatures begin to drop at night. Farms with overcrowded housing and no ventilation management see this reliably. The second pattern is the dry-season nutrition crash, which appears in January and February when pasture quality drops sharply and farmers who did not plan supplementary feeding begin to see body condition losses that take a full season to recover. The third pattern is the post-market disease introduction, seen consistently in the weeks following major livestock markets when animals have moved between regions without quarantine. Each of these patterns is entirely preventable. This article explains the field evidence behind each one and the specific interventions that break the cycle.",
    category: "field-insights",
    readTime: "7 min read",
    publishedAt: "2026-06-15",
  },
  {
    id: "fi-2",
    slug: "why-proximity-matters-advisory",
    title: "Why Proximity Matters in Agricultural Advisory",
    excerpt:
      "Remote advisory consistently underdelivers. This piece examines why, and what changes when an expert shows up on the farm rather than advising from a distance. The limitations of remote advisory are not a criticism of technology. Phone-based advisory, radio programmes, and printed guides all have value. The problem is what they cannot do. They cannot see the animal. They cannot observe the housing conditions. They cannot assess whether a recommended intervention is actually being implemented correctly. They cannot build the relationship that makes a farmer willing to call early, before a small problem becomes a large one. In field visits across Kaduna State, PAS has consistently found that the gap between what farmers report over the phone and what is actually present on the farm is significant. A farmer describing a cow as having mild respiratory symptoms has sometimes been found on arrival to have an animal in critical condition requiring immediate intervention. The reverse also happens: farmers who describe a serious-sounding problem are sometimes found, on arrival, to have a manageable condition that a phone call alone would have led to over-treatment. Proximity is not a nice-to-have feature of good advisory. It is a foundational requirement for accurate diagnosis, effective intervention, and lasting behaviour change.",
    category: "field-insights",
    readTime: "5 min read",
    publishedAt: "2026-05-20",
  },
  {
    id: "fi-3",
    slug: "one-health-animal-health-affects-family",
    title: "The One Health Approach: Why Animal Health Affects Your Family",
    excerpt:
      "When a farmer loses a third of their cattle herd to disease, the effects extend far beyond the farm. Children are pulled from school. Families reduce their own food intake. Women take on additional labour to compensate for lost income. The community feels the pressure. And yet, the disease that caused it all was preventable. This is the core insight of the One Health framework: human health, animal health, and environmental health are not separate concerns. They are deeply interconnected, and in agricultural communities across Northern Nigeria, this connection is not academic; it is lived daily. Zoonotic diseases, those that pass between animals and people, affect farming families directly. Brucellosis spreads from cattle and goats to humans through unpasteurised milk and contact with birth fluids, causing chronic illness frequently misdiagnosed in rural health facilities. Rabies from livestock dog bites remains a serious risk in communities where vaccination coverage is low. Beyond direct disease transmission, animal health shapes family nutrition, school attendance, income stability, and women's economic empowerment in ways that human-health interventions alone cannot address. PAS applies the One Health approach in every farm visit, treating animal health not as an isolated technical problem but as part of the system that supports the families who depend on those animals.",
    category: "field-insights",
    readTime: "9 min read",
    publishedAt: "2026-04-25",
  },
];
