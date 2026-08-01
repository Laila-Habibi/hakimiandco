"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  Check,
  CircleHelp,
  Download,
  HeartHandshake,
  Mail,
  MapPin,
  Medal,
  ShieldCheck,
  Sprout,
  Upload,
  Users,
} from "lucide-react";

const responsibilities = [
  "Assist in preparing financial statements and supporting schedules.",
  "Record and process daily accounting transactions accurately.",
  "Reconcile bank accounts, credit cards and general ledger accounts.",
  "Assist with month-end and year-end closing procedures.",
  "Support accounts payable and accounts receivable processes.",
  "Maintain organized accounting records and supporting documentation.",
  "Assist with audits, reviews and tax engagements when required.",
  "Complete other accounting duties assigned by the Accounting Manager.",
];

const qualifications = [
  "Bachelor’s degree or diploma in Accounting, Finance or a related field.",
  "Up to two years of relevant accounting experience or internship experience.",
  "Strong understanding of basic accounting principles and practices.",
  "Proficiency in Microsoft Excel and accounting software such as QuickBooks.",
  "Strong attention to detail and organizational skills.",
  "Ability to analyze financial information accurately.",
  "Excellent written and verbal communication skills.",
  "Ability to collaborate effectively within a professional team.",
];

const offerItems = [
  {
    title: "Growth Opportunities",
    description:
      "Develop your accounting knowledge and advance your professional career.",
    icon: Sprout,
  },
  {
    title: "Work-Life Balance",
    description:
      "A flexible and respectful environment that supports your well-being.",
    icon: HeartHandshake,
  },
  {
    title: "Supportive Culture",
    description:
      "Work with experienced professionals who value collaboration and growth.",
    icon: Users,
  },
  {
    title: "Competitive Benefits",
    description:
      "Receive a comprehensive benefits package that supports you and your family.",
    icon: ShieldCheck,
  },
  {
    title: "Meaningful Work",
    description:
      "Contribute to financial solutions that make a difference for our clients.",
    icon: Medal,
  },
];

const tabs = [
  { id: "about", label: "About the Role" },
  { id: "responsibilities", label: "Responsibilities" },
  { id: "qualifications", label: "Qualifications" },
  { id: "offer", label: "What We Offer" },
];

export default function JuniorAccountantPage() {
  const [activeTab, setActiveTab] = useState("about");

  const scrollToSection = (sectionId: string) => {
    setActiveTab(sectionId);

    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main className="overflow-hidden bg-white text-[#554b44]">
      <JobHero />

      <JobNavigation
        activeTab={activeTab}
        scrollToSection={scrollToSection}
      />

      <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_360px]">
          <div>
            <AboutRole />
            <Responsibilities />
            <Qualifications />
          </div>

          <ApplyCard />
        </div>

        <WhatWeOffer />
      </section>

      <QuestionsCTA />
    </main>
  );
}

function JobHero() {
  return (
    <section className="relative overflow-hidden border-b border-[#80ab7e]/20 bg-[#f8f6ef] px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
      <div className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full bg-[#80ab7e]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 left-12 h-72 w-72 rounded-full bg-[var(--primary-golden)]/10 blur-3xl" />

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
            href="/careers"
            className="text-[var(--primary-green)] transition hover:text-[var(--primary-brown)]"
          >
            Careers
          </Link>

          <span className="text-[var(--light-green)]">›</span>

          <Link
            href="/careers/open-positions"
            className="text-[var(--primary-green)] transition hover:text-[var(--primary-brown)]"
          >
            Open Positions
          </Link>

          <span className="text-[var(--light-green)]">›</span>

          <span className="text-[var(--primary-brown)]">
            Junior Accountant
          </span>
        </div>

        <div className="mt-12 grid items-start gap-12 lg:grid-cols-[1fr_360px]">
          <div>
            <Link
              href="/careers/open-positions"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary-green)] transition hover:text-[var(--primary-brown)]"
            >
              <ArrowLeft size={17} />
              Back to All Open Positions
            </Link>

          

            <h1 className="mt-5 font-serif text-4xl font-semibold leading-tight text-[var(--primary-brown)] sm:text-6xl lg:text-5xl">
              Junior Accountant
            </h1>

            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium text-[#4d3a2e]">
              <span className="inline-flex items-center gap-2">
                <Building2
                  size={18}
                  className="text-[var(--primary-green)]"
                />
                Accounting
              </span>

              <span className="hidden h-5 w-px bg-[#854d1b]/20 sm:block" />

              <span className="inline-flex items-center gap-2">
                <BriefcaseBusiness
                  size={18}
                  className="text-[var(--primary-green)]"
                />
                Full-time
              </span>

              <span className="hidden h-5 w-px bg-[#854d1b]/20 sm:block" />

              <span className="inline-flex items-center gap-2">
                <MapPin
                  size={18}
                  className="text-[var(--primary-green)]"
                />
                Toronto, ON
              </span>
            </div>

            <div className="mt-7 h-[3px] w-16 rounded-full bg-[var(--primary-golden)]" />

            <p className="mt-7 max-w-2xl text-base leading-8 text-[#5c5048]">
              Join our accounting team and develop your professional skills
              while supporting accurate financial reporting, reconciliations
              and day-to-day accounting operations for our clients.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/careers/open-positions/junior-accountant/apply"
                className="group inline-flex items-center gap-3 rounded-lg bg-[var(--primary-green)] px-7 py-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-[var(--dark-green)] hover:shadow-lg"
              >
                Apply Now
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <a
                href="/jobs/junior-accountant-job-description.pdf"
                download
                className="inline-flex items-center gap-3 rounded-lg border border-[var(--primary-green)] px-7 py-4 text-sm font-semibold text-[var(--primary-green)] transition hover:bg-[var(--primary-green)] hover:text-white"
              >
                <Download size={18} />
                Download Job Description
              </a>
            </div>
          </div>

          <JobOverview />
        </div>
      </div>
    </section>
  );
}

function JobOverview() {
  const details = [
    {
      label: "Department",
      value: "Accounting",
      icon: Building2,
    },
    {
      label: "Employment Type",
      value: "Full-time",
      icon: BriefcaseBusiness,
    },
    {
      label: "Location",
      value: "Toronto, ON",
      icon: MapPin,
    },
    {
      label: "Reports To",
      value: "Accounting Manager",
      icon: Users,
    },
    {
      label: "Posted",
      value: "July 31, 2026",
      icon: CalendarDays,
    },
  ];

  return (
    <aside className="rounded-2xl border border-[#80ab7e]/20 bg-white p-7 shadow-[0_14px_45px_rgba(133,77,27,0.08)]">
      <h2 className="font-serif text-2xl font-semibold text-[var(--primary-green)]">
        Job Overview
      </h2>

      <div className="mt-5 divide-y divide-[#854d1b]/12 border-t border-[#854d1b]/12">
        {details.map((detail) => {
          const Icon = detail.icon;

          return (
            <div key={detail.label} className="flex gap-4 py-5">
              <Icon
                size={20}
                className="mt-1 shrink-0 text-[var(--primary-green)]"
              />

              <div>
                <p className="text-xs text-[#756c65]">{detail.label}</p>
                <p className="mt-1 text-sm font-medium text-[#3d2c22]">
                  {detail.value}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </aside>
  );
}

function JobNavigation({
  activeTab,
  scrollToSection,
}: {
  activeTab: string;
  scrollToSection: (sectionId: string) => void;
}) {
  return (
    <nav className="sticky top-0 z-30 border-b border-[#854d1b]/12 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl overflow-x-auto px-5 sm:px-8 lg:px-10">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => scrollToSection(tab.id)}
            className={`relative shrink-0 px-6 py-5 text-sm font-semibold transition ${
              activeTab === tab.id
                ? "text-[var(--primary-green)]"
                : "text-[#3d2c22] hover:text-[var(--primary-green)]"
            }`}
          >
            {tab.label}

            {activeTab === tab.id && (
              <span className="absolute bottom-0 left-4 right-4 h-[2px] rounded-full bg-[var(--primary-green)]" />
            )}
          </button>
        ))}
      </div>
    </nav>
  );
}

function AboutRole() {
  return (
    <section id="about" className="scroll-mt-28">
      <SectionTitle title="About the Role" />

      <p className="mt-5 text-sm leading-7 text-[#5c5048]">
        As a Junior Accountant, you will support the daily accounting
        functions of the firm and assist with preparing accurate financial
        records and reports. You will work alongside experienced accounting
        professionals and gain exposure to a range of client engagements.
      </p>

      <p className="mt-4 text-sm leading-7 text-[#5c5048]">
        This role is suited to a detail-oriented individual who is beginning
        their accounting career and wants to strengthen their practical
        knowledge in a supportive and professional environment.
      </p>
    </section>
  );
}

function Responsibilities() {
  return (
    <section
      id="responsibilities"
      className="scroll-mt-28 border-t border-[#854d1b]/12 pt-10"
    >
      <SectionTitle title="Key Responsibilities" />

      <ul className="mt-6 space-y-3">
        {responsibilities.map((responsibility) => (
          <li
            key={responsibility}
            className="flex items-start gap-3 text-sm leading-7 text-[#4d3a2e]"
          >
            <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[var(--primary-green)] text-[var(--primary-green)]">
              <Check size={12} strokeWidth={2.5} />
            </span>

            {responsibility}
          </li>
        ))}
      </ul>
    </section>
  );
}

function Qualifications() {
  return (
    <section
      id="qualifications"
      className="scroll-mt-28 border-t border-[#854d1b]/12 pt-10"
    >
      <SectionTitle title="Qualifications" />

      <ul className="mt-6 space-y-3">
        {qualifications.map((qualification) => (
          <li
            key={qualification}
            className="flex items-start gap-3 text-sm leading-7 text-[#4d3a2e]"
          >
            <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--primary-green)]" />
            {qualification}
          </li>
        ))}
      </ul>
    </section>
  );
}

function ApplyCard() {
  return (
    <aside className="h-fit rounded-3xl bg-[#f8f6ef] px-7 py-10 text-center lg:sticky lg:top-28">
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[var(--primary-green)] text-white">
        <Mail size={34} strokeWidth={1.5} />
      </div>

      <h2 className="mt-7 font-serif text-2xl font-semibold text-[var(--primary-brown)]">
        Ready to Apply?
      </h2>

      <p className="mt-4 text-sm leading-7 text-[#5c5048]">
        We&apos;d love to hear from you. Submit your application and take the
        next step toward joining our growing team.
      </p>

      <Link
        href="/careers/open-positions/junior-accountant/apply"
        className="group mt-7 inline-flex w-full items-center justify-center gap-3 rounded-lg bg-[var(--primary-green)] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[var(--dark-green)]"
      >
        Apply Now

        <ArrowRight
          size={18}
          className="transition-transform group-hover:translate-x-1"
        />
      </Link>

      <div className="my-7 flex items-center gap-4">
        <span className="h-px flex-1 bg-[#854d1b]/15" />
        <span className="text-xs text-[#756c65]">or</span>
        <span className="h-px flex-1 bg-[#854d1b]/15" />
      </div>

      <Link
        href="/contact?subject=Resume Submission"
        className="inline-flex w-full items-center justify-center gap-3 rounded-lg border border-[var(--primary-green)] px-6 py-4 text-sm font-semibold text-[var(--primary-green)] transition hover:bg-[var(--primary-green)] hover:text-white"
      >
        <Upload size={18} />
        Upload Your Resume
      </Link>
    </aside>
  );
}

function WhatWeOffer() {
  return (
    <section
      id="offer"
      className="mt-16 scroll-mt-28 rounded-3xl border border-[#80ab7e]/15 bg-[#f8f6ef] px-7 py-10 sm:px-10"
    >
      <SectionTitle title="What We Offer" />

      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-0">
        {offerItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <article
              key={item.title}
              className={`px-5 text-center ${
                index !== offerItems.length - 1
                  ? "lg:border-r lg:border-[#854d1b]/12"
                  : ""
              }`}
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#80ab7e]/12 text-[var(--primary-green)]">
                <Icon size={29} strokeWidth={1.6} />
              </div>

              <h3 className="mt-5 font-serif text-lg font-semibold text-[var(--primary-brown)]">
                {item.title}
              </h3>

              <p className="mt-3 text-xs leading-6 text-[#5c5048]">
                {item.description}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function QuestionsCTA() {
  return (
    <section className="px-5 pb-20 sm:px-8 lg:px-10">
      <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 overflow-hidden rounded-3xl bg-[var(--primary-green)] px-8 py-10 text-white sm:px-12 md:flex-row md:items-center">
        <div className="pointer-events-none absolute -bottom-24 -right-16 opacity-10">
          <LeafDecoration />
        </div>

        <div className="relative flex items-center gap-6">
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-white text-[var(--primary-green)]">
            <CircleHelp size={38} strokeWidth={1.5} />
          </div>

          <div>
            <h2 className="font-serif text-2xl font-semibold sm:text-3xl">
              Questions about this role?
            </h2>

            <p className="mt-3 text-sm leading-7 text-white/80">
              Our team is ready to help. Contact us for more information.
            </p>
          </div>
        </div>

        <Link
          href="/contact?subject=Junior Accountant Question"
          className="relative inline-flex items-center gap-3 font-semibold text-[var(--primary-golden)] transition hover:text-white"
        >
          Contact Us
          <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}

function SectionTitle({ title }: { title: string }) {
  return (
    <div>
      <h2 className="font-serif text-2xl font-semibold text-[var(--primary-brown)]">
        {title}
      </h2>

      <div className="mt-4 h-[3px] w-12 rounded-full bg-[var(--primary-golden)]" />
    </div>
  );
}

function LeafDecoration() {
  return (
    <svg
      width="280"
      height="360"
      viewBox="0 0 280 360"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M38 335C92 282 126 207 138 35"
        stroke="currentColor"
        strokeWidth="2"
      />

      <path
        d="M130 88C90 74 60 49 46 17C89 19 120 47 130 88Z"
        fill="currentColor"
      />

      <path
        d="M132 146C176 131 209 101 225 64C179 68 145 101 132 146Z"
        fill="currentColor"
      />

      <path
        d="M103 208C59 194 28 164 14 125C59 129 92 161 103 208Z"
        fill="currentColor"
      />

      <path
        d="M81 272C126 259 160 229 178 192C132 196 97 227 81 272Z"
        fill="currentColor"
      />
    </svg>
  );
}