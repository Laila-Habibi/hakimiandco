import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Check,
  CircleHelp,
  Clock3,
  Diamond,
  FileCheck2,
  FilePenLine,
  FileText,
  ShieldCheck,
  Upload,
  UserRound,
  Users,
} from "lucide-react";

const audiences = [
  {
    title: "Individuals",
    description:
      "From simple returns to more complex financial situations, we ensure you take advantage of every eligible deduction and credit.",
    icon: UserRound,
  },
  {
    title: "Self-Employed",
    description:
      "We understand the unique tax needs of freelancers, contractors and gig workers and help you plan ahead with confidence.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Businesses",
    description:
      "We support businesses of all sizes with strategic tax planning, compliance and filing so you can focus on growth.",
    icon: Building2,
  },
];

const taxServices = [
  {
    title: "Tax Planning",
    description:
      "We take a proactive approach to tax planning, reviewing your financial situation and future goals to develop strategies that legally reduce your tax burden. Effective planning today can lead to significant savings tomorrow.",
    icon: FileCheck2,
  },
  {
    title: "Tax Preparation",
    description:
      "Our team prepares accurate and complete tax returns for individuals, corporations, partnerships and trusts. We ensure all reporting requirements are met and every eligible deduction and credit is considered.",
    icon: FilePenLine,
  },
  {
    title: "Tax Filing",
    description:
      "We file your returns on time, every time. Whether it is with the CRA, provincial tax authorities or other agencies, we take the stress out of deadlines and paperwork.",
    icon: Upload,
  },
  {
    title: "Tax Compliance",
    description:
      "Tax laws are constantly evolving. We help you remain compliant with current regulations, avoid penalties and reduce the risk of audits through accurate reporting and documentation.",
    icon: ShieldCheck,
  },
  {
    title: "CRA Support",
    description:
      "Dealing with CRA notices, reviews or reassessments can be intimidating. We communicate with the CRA on your behalf and provide the support needed to resolve issues efficiently.",
    icon: CircleHelp,
  },
];

const approachSteps = [
  {
    title: "Understand",
    description:
      "We begin by listening and learning about your situation, goals and challenges.",
  },
  {
    title: "Analyze",
    description:
      "We review your information carefully and identify opportunities to minimize taxes and maximize savings.",
  },
  {
    title: "Plan",
    description:
      "We develop a customized strategy aligned with your short-term needs and long-term objectives.",
  },
  {
    title: "Support",
    description:
      "We remain available throughout the year to answer questions and help you adapt to changes.",
  },
];

const situations = [
  "Employment income and investment income",
  "Self-employment and freelance income",
  "Rental income and property reporting",
  "Capital gains and losses",
  "Home office expenses",
  "GST/HST reporting and filing",
  "Corporate tax planning and filings",
  "Year-end tax planning strategies",
  "Tax notices, reassessments and audits",
];

const benefits = [
  {
    title: "Maximize Savings",
    description:
      "We identify deductions and credits you may be missing to help reduce your tax liability.",
    icon: Diamond,
  },
  {
    title: "Ensure Compliance",
    description:
      "We stay current with tax laws so your returns remain accurate and compliant.",
    icon: ShieldCheck,
  },
  {
    title: "Save Time & Stress",
    description:
      "We handle the details so you can focus on what matters most to you.",
    icon: Clock3,
  },
  {
    title: "Expert Guidance",
    description:
      "Receive reliable, year-round advice from experienced professionals.",
    icon: Users,
  },
];

export default function TaxSolutionsPage() {
  return (
    <main className="overflow-hidden bg-white text-[#554b44]">
      <TaxHero />
      <WhoWeHelp />
      <TaxServices />
      <OurApproach />
      <CommonSituations />
      <Benefits />
      <TaxCTA />
    </main>
  );
}

function TaxHero() {
  return (
    <section className="relative overflow-hidden border-b border-[#80ab7e]/15 bg-[#f8f6ef] px-6 py-16 sm:px-10 lg:py-20">
      <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#80ab7e]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 left-10 h-64 w-64 rounded-full bg-[#ffdb11]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-wrap items-center gap-2 text-sm font-medium">
          <Link
            href="/"
            className="text-[var(--primary-green)] transition hover:text-[var(--primary-brown)]"
          >
            Home
          </Link>

          <span className="text-[#80ab7e]">›</span>

          <span
            
            className="text-[var(--primary-green)] transition hover:text-[var(--primary-brown)]"
          >
            Services
          </span>

          <span className="text-[#80ab7e]">›</span>

          <span className="text-[var(--primary-brown)]">Tax Solutions</span>
        </div>

        <div className="mt-10 max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#80ab7e]">
            Professional Tax Support
          </p>

          <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-[var(--primary-brown)] sm:text-5xl">
            Tax Solutions
          </h1>

          <h2 className="mt-3 font-serif text-2xl leading-tight text-[var(--primary-green)] sm:text-3xl">
            Smart Planning. Confident Filing. Lasting Value.
          </h2>

          <div className="mt-6 h-[3px] w-16 rounded-full bg-[var(--primary-golden)]" />

          <p className="mt-7 max-w-4xl text-base leading-8 text-[#5c5048]">
            Taxes can be complex, but managing them should not be stressful. At
            Hakimi &amp; Co., we provide comprehensive tax planning, preparation
            and filing services for individuals, self-employed professionals and
            businesses. Our goal is simple: help you minimize tax liabilities,
            stay compliant and retain more of what you earn.
          </p>
        </div>
      </div>
    </section>
  );
}

function WhoWeHelp() {
  return (
    <section className="px-6 py-20 sm:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Who We Help"
          title="Tax Solutions Tailored to Your Situation"
          align="left"
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;

            return (
              <article
                key={audience.title}
                className={`group px-6 py-3 ${
                  index !== audiences.length - 1
                    ? "lg:border-r lg:border-[#854d1b]/15"
                    : ""
                }`}
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#80ab7e]/12 text-[var(--primary-green)] transition duration-300 group-hover:-translate-y-1 group-hover:bg-[#80ab7e]/20">
                    <Icon size={31} strokeWidth={1.6} />
                  </div>

                  <div>
                    <h3 className="font-serif text-2xl text-[var(--primary-brown)]">
                      {audience.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#5c5048]">
                      {audience.description}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TaxServices() {
  return (
    <section className="bg-[#fbfaf6] px-6 py-20 sm:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Our Tax Services"
          title="Comprehensive Support at Every Step"
          align="left"
        />

        <div className="mt-10 divide-y divide-[#854d1b]/12">
          {taxServices.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group grid gap-6 py-8 sm:grid-cols-[72px_1fr]"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#80ab7e]/12 text-[var(--primary-green)] transition duration-300 group-hover:scale-105 group-hover:bg-[#80ab7e]/20">
                  <Icon size={31} strokeWidth={1.6} />
                </div>

                <div>
                  <h3 className="font-serif text-2xl text-[var(--primary-brown)]">
                    {service.title}
                  </h3>

                  <p className="mt-3 max-w-5xl text-sm leading-7 text-[#5c5048]">
                    {service.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function OurApproach() {
  return (
    <section className="px-6 py-20 sm:px-10">
      <div className="mx-auto grid max-w-7xl gap-12 rounded-3xl border border-[#80ab7e]/20 bg-[#f7f4e9] px-7 py-10 sm:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:px-12 lg:py-14">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#80ab7e]">
            Our Approach
          </p>

          <h2 className="mt-3 font-serif text-4xl leading-tight text-[var(--primary-brown)]">
            Proactive. Strategic.
            <span className="text-[var(--primary-green)]"> Personal.</span>
          </h2>

          <div className="mt-5 h-[3px] w-14 rounded-full bg-[var(--primary-golden)]" />

          <p className="mt-6 text-sm leading-7 text-[#5c5048]">
            We do not simply prepare your taxes—we help you understand them.
            Our proactive approach is built on understanding your unique goals
            and financial situation so we can provide solutions that make a
            meaningful difference.
          </p>
        </div>

        <div className="space-y-5 lg:border-l lg:border-[#854d1b]/15 lg:pl-10">
          {approachSteps.map((step) => (
            <div key={step.title} className="flex items-start gap-4">
              <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--primary-green)] text-white">
                <Check size={14} strokeWidth={2.5} />
              </div>

              <p className="text-sm leading-7 text-[#5c5048]">
                <strong className="text-[var(--primary-brown)]">
                  {step.title}:
                </strong>{" "}
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CommonSituations() {
  return (
    <section className="px-6 pb-20 sm:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Common Tax Situations We Handle"
          title="We’ve Got You Covered"
          align="left"
        />

        <div className="mt-10 grid gap-x-10 gap-y-4 rounded-2xl bg-[#f7f4e9] px-7 py-8 sm:grid-cols-2">
          {situations.map((situation) => (
            <div key={situation} className="flex items-start gap-3">
              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--primary-green)] text-white">
                <Check size={12} strokeWidth={2.5} />
              </span>

              <p className="text-sm leading-6 text-[#4d3a2e]">{situation}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section className="bg-[#fbfaf6] px-6 py-20 sm:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Why Work With Hakimi & Co."
          title="More Than Just Tax Preparation"
          align="left"
        />

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <article
                key={benefit.title}
                className={`px-6 ${
                  index !== benefits.length - 1
                    ? "lg:border-r lg:border-[#854d1b]/15"
                    : ""
                }`}
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#80ab7e]/12 text-[var(--primary-green)]">
                  <Icon size={31} strokeWidth={1.6} />
                </div>

                <h3 className="mt-5 font-serif text-xl text-[var(--primary-brown)]">
                  {benefit.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#5c5048]">
                  {benefit.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TaxCTA() {
  return (
    <section className="px-6 py-20 sm:px-10">
      <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 overflow-hidden rounded-2xl bg-[var(--primary-green)] px-8 py-10 text-white sm:px-12 lg:flex-row lg:items-center">
        <div className="pointer-events-none absolute -left-20 -top-24 h-64 w-64 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -bottom-28 right-16 h-72 w-72 rounded-full border border-white/10" />

        <div className="relative max-w-2xl">
          <h2 className="font-serif text-3xl font-semibold sm:text-4xl">
            Let&apos;s Make Tax Season Simple
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-7 text-white/80">
            Book a consultation today and discover how we can help you save
            more, remain compliant and worry less.
          </p>
        </div>

        <Link
          href="/contact"
          className="group relative inline-flex shrink-0 items-center gap-3 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-[var(--primary-green)] transition hover:-translate-y-1 hover:shadow-xl"
        >
          Book a Consultation

          <ArrowRight
            size={17}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </div>
    </section>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  showUnderline = true,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  showUnderline?: boolean;
}) {
  const isLeft = align === "left";

  return (
    <div
      className={`max-w-3xl ${
        isLeft ? "text-left" : "mx-auto text-center"
      }`}
    >
      <p className="text-sm font-bold uppercase tracking-[0.17em] text-[#80ab7e]">
        {eyebrow}
      </p>

      <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-[var(--primary-brown)]">
        {title}
      </h2>

      {showUnderline && (
        <div
          className={`mt-4 h-[3px] w-14 rounded-full bg-[var(--primary-golden)] ${
            isLeft ? "" : "mx-auto"
          }`}
        />
      )}

      {description && (
        <p
          className={`text-sm leading-7 text-[#554b44] ${
            showUnderline ? "mt-5" : "mt-4"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}