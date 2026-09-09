import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  Award,
  BarChart3,
  CalendarDays,
  Handshake,
  ShieldCheck,
  Users,
} from "lucide-react";

import { FaLinkedinIn } from "react-icons/fa6";

const values = [
  {
    title: "Experienced Professionals",
    description: "Years of expertise you can trust.",
    icon: Users,
  },
  {
    title: "Client-Focused Approach",
    description: "Your success is our priority.",
    icon: ShieldCheck,
  },
  {
    title: "Integrity & Transparency",
    description: "Honest advice, every time.",
    icon: Handshake,
  },
  {
    title: "Committed to Excellence",
    description: "Delivering exceptional results.",
    icon: BarChart3,
  },
];

const teamMembers = [
  {
    name: "Waiza Hakimi",
    role: "Chief Executive Officer (CEO)",
    description:
      "A professional accountant with many years of experience, Waiza leads Hakimi & Co. as Chief Executive Officer.",
    image: "/team/ceo-portrait.png",
    linkedin: "",
  },
  {
    name: "Mobeen Amini",
    role: "Junior Accountant",
    description:
      "Mobeen supports bookkeeping, basic tax filing and financial record organization with a reliable, detail-oriented approach.",
    image: "/team/mobeen-amini.jpg",
    imagePosition: "center 50%",
    linkedin: "",
  },
  {
    name: "Jessica Huang, CPA, MFin",
    role: "Accounting & Audit Professional",
    description:
      "Over four years of accounting and audit experience serving private businesses and non-profit organizations.",
    image: "/team/jessica-huang.jpg",
    imageLift: 12,
    imagePosition: "center 50%",
    linkedin: "",
  },
  {
    name: "Laila Habibi",
    role: "Data Analyst",
    description:
      "A data analyst with a background in AI and technology, Laila brings an analytical approach to business insights and digital solutions.",
    image: "/team/laila-habibi.jpeg",
    imagePosition: "center 50%",
    linkedin: "",
  },
];

export default function TeamPage() {
  return (
    <main className="overflow-hidden bg-[var(--surface)]">
      <TeamHero />
      <ValuesSection />
      <TeamMembersSection />
      <TeamCTA />
    </main>
  );
}

function TeamHero() {
  return (
    <section className="relative overflow-hidden border-b border-[var(--light-green)]/15 bg-[var(--surface-muted)] px-6 py-16 sm:px-10 lg:py-20">
      <div className="pointer-events-none absolute -right-24 top-0 hidden opacity-15 lg:block">
        <LeafDecoration />
      </div>

      <div className="pointer-events-none absolute -bottom-20 left-20 h-64 w-64 rounded-full bg-[var(--primary-golden)]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-wrap items-center gap-2 text-sm font-medium">
          <Link
            href="/"
            className="text-[var(--primary-green)] transition hover:text-[var(--primary-brown)]"
          >
            Home
          </Link>

          <span className="text-[var(--light-green)]">›</span>

          <Link
            href="/about"
            className="text-[var(--primary-green)] transition hover:text-[var(--primary-brown)]"
          >
            About Us
          </Link>

          <span className="text-[var(--light-green)]">›</span>

          <span className="text-[var(--primary-brown)]">Meet Our Team</span>
        </div>

        <div className="mt-10 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--primary-green)]">
            Our People
          </p>

        

          <h1 className="mt-5 font-serif text-4xl font-semibold leading-tight text-[var(--primary-brown)] sm:text-5xl lg:text-5xl">
            Meet Our Team
          </h1>

          <h2 className="mt-4 font-serif text-2xl leading-tight text-[var(--primary-green)] sm:text-2xl">
            Experience. Integrity. Commitment.
          </h2>

          <div className="mt-6 h-[3px] w-16 rounded-full metallic-gold" />

          <p className="mt-7 max-w-2xl text-base leading-8 text-[var(--text-body)]">
            Our team is made up of experienced professionals who are passionate
            about accounting, compliance and helping our clients achieve their
            goals. We bring expertise, integrity and a client-first mindset to
            everything we do.
          </p>

       
        </div>
      </div>
    </section>
  );
}

function ValuesSection() {
  return (
    <section className="relative z-10 px-6 sm:px-10">
      <div className="mx-auto -mt-8 grid max-w-7xl overflow-hidden rounded-2xl border border-[var(--light-green)]/20 bg-[var(--surface)] shadow-[0_16px_50px_color-mix(in_srgb,var(--dark-green)_10%,transparent)] sm:grid-cols-2 lg:grid-cols-4">
        {values.map((value, index) => {
          const Icon = value.icon;

          return (
            <article
              key={value.title}
              className={`group px-6 py-8 text-center ${
                index !== values.length - 1
                  ? "lg:border-r lg:border-[var(--primary-brown)]/12"
                  : ""
              }`}
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[var(--light-green)]/10 text-[var(--primary-green)] transition duration-300 group-hover:-translate-y-1 group-hover:bg-[var(--light-green)]/20">
                <Icon size={31} strokeWidth={1.6} />
              </div>

              <h3 className="mx-auto mt-5 max-w-[190px] font-serif text-xl font-semibold leading-7 text-[var(--primary-brown)]">
                {value.title}
              </h3>

              <p className="mt-3 text-xs leading-6 text-[var(--text-muted)]">
                {value.description}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function TeamMembersSection() {
  return (
    <section className="px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--primary-green)]">
            Our Team
          </p>

          <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-[var(--primary-brown)] sm:text-4xl">
            Dedicated Professionals. Trusted Advisors.
          </h2>

          <div className="mx-auto mt-5 h-[3px] w-14 rounded-full metallic-gold" />

          <p className="mt-6 text-sm leading-7 text-[var(--text-body)]">
            A talented group of accountants, analysts and advisors working
            together to support your success.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamCard({
  member,
}: {
  member: {
    name: string;
    role: string;
    description: string;
    image: string;
    imagePosition?: string;
    imageLift?: number;
    linkedin: string;
  };
}) {
  return (
    <article className="group flex h-full min-h-[470px] flex-col overflow-hidden rounded-xl border border-[var(--light-green)]/20 bg-[var(--surface)] shadow-[0_10px_35px_color-mix(in_srgb,var(--primary-brown)_6%,transparent)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_18px_45px_color-mix(in_srgb,var(--primary-brown)_13%,transparent)]">
      <div className="relative h-[245px] w-full shrink-0 overflow-hidden bg-[var(--surface-muted)]">
        <div
          className="absolute inset-x-0 bottom-0"
          style={{ top: -(member.imageLift ?? 0) }}
        >
          <Image
            src={member.image}
            alt={`${member.name}, ${member.role}`}
            fill
            sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw"
            className="object-cover transition duration-700 group-hover:scale-105"
            style={{ objectPosition: member.imagePosition ?? "center top" }}
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col items-center px-5 py-6 text-center">
        <h3 className="font-serif text-xl font-semibold text-[var(--primary-brown)]">
          {member.name}
        </h3>

        <p className="mt-2 text-sm font-semibold text-[var(--primary-green)]">
          {member.role}
        </p>

        <p className="mt-4 flex-1 text-xs leading-6 text-[var(--text-body)]">
          {member.description}
        </p>

        {member.linkedin && (
<Link
          href={member.linkedin}
          aria-label={`${member.name} on LinkedIn`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 flex h-9 w-9 items-center justify-center rounded-md bg-[var(--primary-green)] text-[var(--on-dark)] transition duration-300 hover:-translate-y-1 hover:bg-[var(--dark-green)]"
        >
          <FaLinkedinIn size={16} />
        </Link>
        )}
      </div>
    </article>
  );
}

function TeamCTA() {
  return (
    <section className="px-6 pb-20 sm:px-10">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-[var(--light-green)]/20 bg-[var(--surface-muted)] px-7 py-10 sm:px-12">
        <div className="pointer-events-none absolute -right-16 -bottom-24 hidden opacity-15 lg:block">
          <LeafDecoration />
        </div>

        <div className="relative flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-[var(--primary-green)] text-[var(--on-dark)]">
              <Users size={37} strokeWidth={1.6} />
            </div>

            <div>
              <h2 className="font-serif text-2xl font-semibold leading-tight text-[var(--primary-brown)] sm:text-3xl">
                We&apos;re more than just a team —
                <span className="block text-[var(--primary-green)]">
                  we&apos;re your partners in growth.
                </span>
              </h2>

              <p className="mt-3 text-sm leading-7 text-[var(--text-body)]">
                Let&apos;s work together to achieve your financial goals.
              </p>
            </div>
          </div>

          <Link
            href="/contact"
            className="group inline-flex shrink-0 items-center gap-3 rounded-lg bg-[var(--primary-green)] px-7 py-4 text-sm font-semibold text-[var(--on-dark)] transition duration-300 hover:-translate-y-1 hover:bg-[var(--dark-green)] hover:shadow-lg"
          >
            Book a Consultation

            <CalendarDays size={18} />

            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

function LeafDecoration() {
  return (
    <svg
      width="280"
      height="380"
      viewBox="0 0 280 380"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M38 355C94 298 130 220 142 38"
        stroke="var(--dark-green)"
        strokeWidth="2"
      />

      <path
        d="M134 92C92 78 63 52 48 18C94 20 125 49 134 92Z"
        fill="var(--light-green)"
      />

      <path
        d="M136 151C181 136 216 105 233 66C185 70 149 105 136 151Z"
        fill="var(--gold-highlight)"
      />

      <path
        d="M106 216C61 201 28 170 14 130C61 134 95 168 106 216Z"
        fill="var(--light-green)"
      />

      <path
        d="M84 285C130 272 166 240 185 201C137 205 101 238 84 285Z"
        fill="var(--gold-highlight)"
      />
    </svg>
  );
}