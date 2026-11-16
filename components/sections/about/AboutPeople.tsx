import Image, { type StaticImageData } from "next/image";
import rukayyahPhoto from "@/public/images/Rukkayah.jpeg";
import nafisahPhoto from "@/public/images/Nafisah.jpeg";
import mujahidPhoto from "@/public/images/Mujahid.jpeg";
import doubraPhoto from "@/public/images/Doubra.png";
import LinkedInIcon from "@/components/ui/LinkedInIcon";
import Reveal from "@/components/ui/Reveal";

/** About page sections 6 to 8, in the founder's own words (Nov 2026). */

const RUKAYYAH_LINKEDIN =
  "https://ng.linkedin.com/in/rukayyah-abdulsalam-124884117";

export function MeetFounder() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 grid gap-12 lg:grid-cols-12 lg:gap-16 lg:items-center">
        <Reveal className="lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <Image
              src={rukayyahPhoto}
              alt="Dr. Rukayyah Abdulsalam, Founder and Lead Veterinarian of Plush Agri Solutions"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover object-top"
              placeholder="blur"
            />
          </div>
        </Reveal>
        <Reveal delay={0.08} className="lg:col-span-7">
          <p className="label mb-5">Meet Our Founder</p>
          <h2 className="text-navy text-3xl lg:text-[2.6rem] mb-3">
            Dr. Rukayyah Abdulsalam
          </h2>
          <p className="font-heading font-semibold text-olive text-lg mb-10">
            Founder and Lead Veterinarian
          </p>
          <div className="space-y-6 text-gray-700 leading-relaxed max-w-[62ch]">
            <p>
              Dr. Rukayyah Abdulsalam is a registered veterinary surgeon and
              graduate of Ahmadu Bello University, Zaria, with over eight
              years of professional experience across veterinary medicine,
              animal health, disease surveillance and public health. Her
              professional experience includes serving as a Disease
              Surveillance and Public Health Officer under the REDISSE
              programme and supporting livestock development through the
              L-PRES project.
            </p>
            <p>
              These experiences have shaped her understanding of the
              relationship between animal health, farm management and public
              health, as well as the importance of applying evidence and
              practical knowledge to address challenges at the community
              level.
            </p>
            <p>
              She founded Plush Agri Solutions to bring reliable veterinary
              expertise and agricultural support closer to farmers.
            </p>
          </div>
          <a
            href={RUKAYYAH_LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-2 font-heading text-sm font-semibold text-dark-green border-b-2 border-bright-green pb-1 hover:text-olive transition-colors"
          >
            <LinkedInIcon className="w-4 h-4 shrink-0" />
            Connect on LinkedIn
          </a>
        </Reveal>
      </div>
    </section>
  );
}

const boardSeats = [
  "Director of Veterinary Services, Kaduna State",
  "Founder/Managing Director, Agri Projects Concept International Limited",
];

export function AdvisoryBoard() {
  return (
    <section className="bg-sage-tint py-24 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <p className="label mb-5">Our Advisory Board</p>
          <h2 className="text-navy text-3xl lg:text-[2.6rem] mb-8">
            Experienced guidance behind our direction.
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-[52ch]">
            At Plush Agri Solutions, we recognise the value of experienced
            leadership, professional insight and strategic guidance in
            building a sustainable business. Our Advisory Board brings
            together experienced professionals whose knowledge and
            perspectives guide our direction, strengthen our approach and
            support our long-term growth.
          </p>
        </Reveal>
        <Reveal delay={0.08} className="lg:col-span-7">
          <p className="font-heading text-sm font-semibold text-navy mb-6">
            Proposed Advisory Board Members
          </p>
          <ol className="space-y-5">
            {boardSeats.map((seat, i) => (
              <li
                key={seat}
                className="rounded-2xl bg-white p-8 grid gap-4 sm:grid-cols-[3.5rem_1fr]"
              >
                <p className="font-heading font-bold text-olive text-2xl leading-none num-tabular pt-1">
                  0{i + 1}
                </p>
                <div>
                  <h3 className="text-navy text-lg font-semibold leading-snug mb-2">
                    {seat}
                  </h3>
                  <p className="text-gray-600 text-[0.95rem]">
                    Appointment subject to confirmation.
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}

type Member = {
  name: string;
  role: string;
  bio?: string;
  photo: StaticImageData;
};

const team: Member[] = [
  {
    name: "Dr. Rukayyah Abdulsalam",
    role: "Founder and Chief Executive Officer (CEO)",
    bio: "A registered veterinary surgeon with over eight years of professional experience. She founded Plush Agri Solutions to bring reliable veterinary expertise and practical agricultural support closer to farmers.",
    photo: rukayyahPhoto,
  },
  {
    name: "Nafisah Abdulsalam",
    role: "Chief Operating Officer (COO)",
    bio: "She holds a degree in Statistics from Ahmadu Bello University, Zaria. Her professional experience spans customer experience, operations and management, with previous roles at Outsource Global and Stecs NG. She brings analytical thinking, customer-focused experience and an understanding of business operations to her role at Plush Agri Solutions.",
    photo: nafisahPhoto,
  },
  {
    name: "Mujahid Yahaya",
    role: "Field Operations Coordinator",
    bio: "Mujahid is a 300-level Accounting student at Kaduna State University. Through his work with Plush Agri Solutions, he has gained practical experience in farm visits, field activities and activity reporting. He supports field coordination and documentation, bringing a practical understanding of field operations and farmer engagement to the team.",
    photo: mujahidPhoto,
  },
  {
    name: "Doubra",
    role: "Brand and Communications Lead",
    photo: doubraPhoto,
  },
];

export function OurTeam() {
  return (
    <section className="bg-cream py-24 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <Reveal className="grid gap-6 lg:grid-cols-12 lg:items-end mb-14">
          <div className="lg:col-span-6">
            <p className="label mb-5">Our Team</p>
            <h2 className="text-navy text-3xl lg:text-[2.6rem]">
              The people behind the work.
            </h2>
          </div>
          <p className="lg:col-span-6 text-gray-700 leading-relaxed">
            Our team brings together leadership, operational coordination and
            practical field experience to support farmers and contribute to
            the growth of the agricultural sector.
          </p>
        </Reveal>
        <ul className="grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m, i) => (
            <li key={m.name}>
              <Reveal delay={i * 0.06}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-6">
                  <Image
                    src={m.photo}
                    alt={`${m.name}, ${m.role} at Plush Agri Solutions`}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover object-top"
                    placeholder="blur"
                  />
                </div>
                <h3 className="text-navy text-lg font-semibold leading-snug mb-1">
                  {m.name}
                </h3>
                <p className="font-heading text-sm font-semibold text-olive mb-4">
                  {m.role}
                </p>
                {m.bio && (
                  <p className="text-gray-700 text-[0.95rem] leading-relaxed">
                    {m.bio}
                  </p>
                )}
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
