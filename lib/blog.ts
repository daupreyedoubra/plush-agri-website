// Blog content for Plush Agri Solutions.
//
// Posts are stored as structured data (no MDX pipeline) so the whole thing is
// type-checked and needs no extra dependencies. Each post carries a `draft`
// flag: drafts are authored and reviewable in development, but hidden from the
// public index and 404 on their slug in production until cleared for launch.

export type Block =
  | { type: "h2"; text: string }
  | { type: "p"; text: string };

export interface BlogImage {
  src: string;
  alt: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  /** ISO date, YYYY-MM-DD. */
  date: string;
  excerpt: string;
  author: string;
  /** Authored but not yet cleared for public launch. */
  draft: boolean;
  /** Optional topic tag shown alongside the date, e.g. "Education". */
  category?: string;
  /** Real field photo, only where one genuinely fits the subject. */
  image?: BlogImage;
  body: Block[];
}

const AUTHOR = "Dr. Rukayyah Abdulsalam, DVM";

export const posts: BlogPost[] = [
  {
    slug: "antimicrobial-resistance-why-farmers-should-care",
    title: "Antimicrobial resistance, and why farmers should care",
    date: "2026-06-12",
    excerpt:
      "The medicines we rely on to keep animals healthy only work if we use them carefully. Here is what antimicrobial resistance means for your farm, and the everyday habits that protect it.",
    author: AUTHOR,
    draft: false,
    body: [
      {
        type: "p",
        text: "When an animal falls sick, the medicine you reach for is only useful if it still works. Antimicrobial resistance is what happens when the drugs we depend on, the antibiotics and other treatments, slowly stop working against the germs they were meant to kill. It is one of the quietest threats to farming, because you cannot see it building up until the day a treatment fails.",
      },
      {
        type: "h2",
        text: "What resistance actually is",
      },
      {
        type: "p",
        text: "Germs are living things, and living things adapt. Every time an antibiotic is used, the weakest germs die first. Sometimes a few tougher ones survive. If they survive often enough, they multiply, and over time the medicine that once cured an illness in a few days no longer helps at all. This does not happen because the animal becomes resistant. It happens because the germs do.",
      },
      {
        type: "p",
        text: "The hard part is that resistant germs do not stay in one place. They move between animals, through shared water and feed, and sometimes between animals and people. A problem that starts on one farm can become a problem for a whole community.",
      },
      {
        type: "h2",
        text: "Why it matters on your farm",
      },
      {
        type: "p",
        text: "A working antibiotic is one of the cheapest ways to save a valuable animal. When it stops working, treatment takes longer, costs more, and sometimes fails completely. Losses that were once preventable become permanent. For a household that depends on its livestock, that is not a small thing.",
      },
      {
        type: "h2",
        text: "The habits that protect it",
      },
      {
        type: "p",
        text: "The good news is that the practices that slow resistance are practices that also make good farming sense. Use medicine only when it is genuinely needed, and get a proper diagnosis before you treat. Guessing wastes money and trains germs to resist.",
      },
      {
        type: "p",
        text: "When a treatment is prescribed, finish the full course, even if the animal looks better halfway through. Stopping early leaves the toughest germs alive. Follow the dose and the timing you are given, rather than a remembered amount from last season.",
      },
      {
        type: "p",
        text: "Prevention does more than any drug. Clean housing, clean water, good spacing, and vaccination keep animals from getting sick in the first place, which means fewer treatments and less pressure on the medicines you have. Buy your inputs from sources you trust, because a weak or fake product treats nothing and still teaches germs to survive.",
      },
      {
        type: "p",
        text: "None of this requires new equipment or a bigger budget. It requires a habit of asking, before every treatment, whether it is the right one, given properly, for the right reason. If you are unsure, that is exactly the moment to talk to a vet. Protecting the medicines we have today is how we keep them working for the herds we will depend on tomorrow.",
      },
    ],
  },
  {
    slug: "future-of-veterinary-services-reactive-to-preventive",
    title: "The future of veterinary services: from reactive to preventive",
    date: "2026-05-28",
    excerpt:
      "For too long, a vet was someone you called only after an animal was already sick. The more useful model turns that around, and it starts with the ordinary routines of a healthy farm.",
    author: AUTHOR,
    draft: false,
    image: {
      src: "/images/_MG_2872.jpg",
      alt: "Farmers listening during a Plush Agri Solutions advisory session in Danhonu 1",
    },
    body: [
      {
        type: "p",
        text: "Ask most farmers what a vet is for, and the answer is usually the same: you call one when an animal is already sick. By then, the illness has often spread, the animal has already lost condition, and the treatment is expensive. This is reactive care. It works, but it works late, and late is costly.",
      },
      {
        type: "h2",
        text: "The shift that is coming",
      },
      {
        type: "p",
        text: "The direction veterinary care is moving in is preventive. Instead of waiting for a crisis, a preventive approach keeps animals well through steady, ordinary routines, so that fewer crises happen at all. The vet becomes a regular part of how a farm runs, not an emergency number saved for the worst day of the season.",
      },
      {
        type: "p",
        text: "This is not a new idea so much as a change in timing. The same knowledge that treats a sick animal can, applied earlier, stop it from getting sick. The difference is when the visit happens.",
      },
      {
        type: "h2",
        text: "What preventive care looks like",
      },
      {
        type: "p",
        text: "In practice, it is made of simple, repeatable things. A vaccination schedule that matches your animals and your season. Regular checks that catch a problem while it is small. Deworming and parasite control done on time rather than after damage is visible. Advice on housing, feeding, and clean water, because most disease begins where those basics are weak.",
      },
      {
        type: "p",
        text: "It also means keeping simple records. When you know what you treated, and when, you can see patterns, a cough that returns every year, a loss that always follows a certain change. Records turn guesswork into decisions.",
      },
      {
        type: "h2",
        text: "Why it is worth the change",
      },
      {
        type: "p",
        text: "A healthy animal is a productive animal. Herds that are managed preventively lose fewer animals, grow better, and cost less to keep well over a year than herds that lurch from one emergency to the next. The money spent on a routine visit is almost always smaller than the money lost to a sickness that was allowed to spread.",
      },
      {
        type: "p",
        text: "There is a quieter benefit too. When a vet visits regularly, a relationship builds. Small worries get raised before they become big ones. Advice fits your farm, because the person giving it has actually seen your farm, more than once, in different seasons.",
      },
      {
        type: "h2",
        text: "Starting where you are",
      },
      {
        type: "p",
        text: "No farm has to change everything at once. Preventive care can begin with a single scheduled visit, a first vaccination plan, or one honest conversation about the losses you keep seeing. From there it grows into a rhythm. The future of veterinary services is not more emergencies handled faster. It is fewer emergencies, because the work was done before the animal ever fell ill.",
      },
    ],
  },
  {
    slug: "one-health-approach-to-disease-outbreak-investigation",
    title: "A One Health approach to disease outbreak investigation",
    date: "2026-07-02",
    excerpt:
      "When disease breaks out, the animals, the people, and the shared environment are all part of one story. One Health is a way of investigating that reads the whole picture instead of a single page.",
    author: AUTHOR,
    draft: false,
    image: {
      src: "/images/cohi-school-04.jpeg",
      alt: "Dr. Rukayyah Abdulsalam leading a One Health education session with schoolchildren in Danhonu 1",
    },
    body: [
      {
        type: "p",
        text: "When sickness appears suddenly in a community, it is tempting to look at one thing at a time: the animals that died, or the people who fell ill, or the water that looked unclean. One Health is the understanding that these are rarely separate problems. The health of animals, people, and the shared environment is one connected system, and an outbreak is usually a signal from all three at once.",
      },
      {
        type: "h2",
        text: "Why the connections matter",
      },
      {
        type: "p",
        text: "Many of the diseases that affect livestock can also affect the people who live and work alongside them. They can travel through shared water, through handling of animals, through food, and through the everyday closeness of rural life. If you investigate only the animals, you can miss where the illness is really coming from, and you can miss the people who are quietly at risk.",
      },
      {
        type: "p",
        text: "Reading the whole picture is what makes an investigation reliable. An answer that explains the animals but ignores the water, or explains the people but ignores the herd, is usually an incomplete answer.",
      },
      {
        type: "h2",
        text: "How an investigation begins",
      },
      {
        type: "p",
        text: "Good outbreak work starts with careful looking, not quick conclusions. When did the first cases appear, and in what, animals, people, or both? Where are they clustered? What changed recently: a new animal brought in, a change in the water, a movement of herds, a season turning? These early questions shape everything that follows.",
      },
      {
        type: "p",
        text: "From there, the work is patient. Talking to the households affected. Observing how animals are kept and how people live near them. Noticing the shared points, the well, the market, the grazing route, where an illness could pass between them. It is less about a single test and more about assembling a story that holds together.",
      },
      {
        type: "h2",
        text: "Why community trust is part of the method",
      },
      {
        type: "p",
        text: "An outbreak investigation depends on honest information, and honest information depends on trust. People share what they have seen when they believe it will help rather than punish them. This is why working through existing community relationships matters, and why education is part of the response, not separate from it. A community that understands how disease moves becomes an early warning system of its own.",
      },
      {
        type: "h2",
        text: "The point of the whole picture",
      },
      {
        type: "p",
        text: "The goal of a One Health investigation is not only to explain what happened, but to reduce the chance of it happening again. When you understand how a disease moved between animals, people, and their surroundings, you can act at the point that protects all three. That is the real value of looking at the whole system: the response fits the problem, because the problem was finally seen in full.",
      },
    ],
  },
  {
    slug: "what-farmers-should-know-about-antimicrobial-resistance",
    title: "What Every Northern Nigerian Farmer Should Know About Antimicrobial Resistance",
    date: "2026-05-15",
    excerpt:
      "Antimicrobial resistance is one of the fastest-growing threats to both animal and human health globally. Here is what it means for your farm and what you can do about it.",
    author: AUTHOR,
    draft: false,
    category: "Education",
    body: [
      {
        type: "p",
        text: "Antimicrobial resistance does not announce itself. It builds quietly, one unnecessary dose at a time, until the day a medicine that used to work simply does not anymore. For farmers across Northern Nigeria, that day can mean losing an animal that a proper treatment should have saved.",
      },
      {
        type: "h2",
        text: "What is actually happening",
      },
      {
        type: "p",
        text: "Every antibiotic or antiparasitic you use puts pressure on the germs it is meant to kill. Most die. A few tougher ones survive, and if they are allowed to survive often enough, they multiply. Over time, the same medicine that once cleared an infection in days stops working at all. This is not the animal building resistance. It is the germs.",
      },
      {
        type: "h2",
        text: "Why this is your problem too",
      },
      {
        type: "p",
        text: "Resistant germs do not stay put. They move through shared water troughs, feed, and close contact between animals, and sometimes they move between animals and the people who handle them. A shortcut taken on one farm can become a shared problem for a whole community of farmers.",
      },
      {
        type: "h2",
        text: "What you can do starting today",
      },
      {
        type: "p",
        text: "Only treat when there is a real reason to, and get a proper diagnosis first. Guessing at a dose wastes money and trains germs to survive. When a vet prescribes a course, finish it completely, even once the animal looks better, because stopping early leaves the strongest germs behind. Buy your inputs from a source you trust: a fake or weak product treats nothing and still does the damage of training resistance. And invest in prevention, clean housing, clean water, proper spacing, and vaccination, because an animal that does not get sick is an animal that never needs the medicine in the first place.",
      },
      {
        type: "p",
        text: "None of this requires new equipment, only a habit of asking the right question before every treatment. If you are unsure whether a treatment is necessary or correct, talk to us before you administer it. Reach the Plush Agri Solutions team for a farm visit or a straight answer, and let's keep the medicines you depend on working for the herds you will depend on next season.",
      },
    ],
  },
  {
    slug: "five-biosecurity-measures-poultry-farmers",
    title: "Five Biosecurity Measures Every Poultry Farmer Can Implement Today",
    date: "2026-05-08",
    excerpt:
      "Preventing disease on a poultry farm does not require expensive equipment. These five steps can be started immediately with what you already have.",
    author: AUTHOR,
    draft: false,
    category: "Practical Tips",
    body: [
      {
        type: "p",
        text: "Disease does not usually arrive on a poultry farm with warning. It arrives on a visitor's boots, in a crate of new birds, or on a feed bag from an uncertain source. The good news is that most of the risk can be closed off without spending money you do not have. Here are five measures you can start today.",
      },
      {
        type: "h2",
        text: "1. Control who and what enters the pen",
      },
      {
        type: "p",
        text: "Limit visitors to people who genuinely need to be there, and keep a simple rule: clean footwear or a footbath at the entrance, every time, no exceptions. Most disease introduced from outside a farm arrives on feet, tyres, or hands, not through the air.",
      },
      {
        type: "h2",
        text: "2. Separate new birds before they join the flock",
      },
      {
        type: "p",
        text: "Any new bird, whether bought, gifted, or returned from a show, should be kept apart from the rest of your flock for at least two weeks. A bird that looks healthy can still be carrying something that only shows itself under the stress of a new environment.",
      },
      {
        type: "h2",
        text: "3. Keep feed and water genuinely clean",
      },
      {
        type: "p",
        text: "Store feed off the ground and away from rodents and wild birds, and clean water containers regularly rather than simply topping them up. Contaminated feed and water are two of the fastest routes disease takes through a flock.",
      },
      {
        type: "h2",
        text: "4. Watch your birds daily, and act on what you see",
      },
      {
        type: "p",
        text: "A few minutes of real observation each day, checking appetite, droppings, and general behaviour, catches a problem while it is still one or two birds, not the whole house. Do not wait for a dramatic sign before you ask for help.",
      },
      {
        type: "h2",
        text: "5. Clean and rest the housing between cycles",
      },
      {
        type: "p",
        text: "Give housing a proper clean-out between batches, and where possible, let it rest empty for a period before the next group of birds arrives. Disease organisms that linger in bedding and structures are far easier to break than ones already established in a living flock.",
      },
      {
        type: "p",
        text: "None of these measures require a large budget, only consistency. If you would like a biosecurity assessment specific to your farm's layout, reach the Plush Agri Solutions team and we will walk it with you.",
      },
    ],
  },
];

/** In production, drafts are hidden. In development they stay visible so the
 *  page and grid can be reviewed before launch. */
const showDrafts = process.env.NODE_ENV !== "production";

export function getVisiblePosts(): BlogPost[] {
  return posts
    .filter((post) => showDrafts || !post.draft)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  const post = posts.find((p) => p.slug === slug);
  if (!post) return undefined;
  if (post.draft && !showDrafts) return undefined;
  return post;
}

/** Deterministic "12 June 2026" formatting — avoids locale/timezone drift by
 *  parsing the date-only string directly rather than through `new Date`. */
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function formatDate(iso: string): string {
  const [year, month, day] = iso.split("-").map(Number);
  return `${day} ${MONTHS[month - 1]} ${year}`;
}
