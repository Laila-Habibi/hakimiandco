import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Building2,
  Check,
  CircleCheckBig,
  ClipboardCheck,
  Eye,
  FileCheck2,
  FileSearch,
  FileText,
  SearchCheck,
  ShieldCheck,
  Users,
} from "lucide-react";

const audiences = [
  {
    title: "Private Businesses",
    description:
      "Reliable financial reporting and assurance support designed for privately owned companies at every stage of growth.",
    icon: Building2,
  },
  {
    title: "Organizations",
    description:
      "Clear and dependable financial information for non-profit organizations, associations and community groups.",
    icon: Users,
  },
  {
    title: "Stakeholders",
    description:
      "Credible financial statements that help lenders, investors, partners and other stakeholders make informed decisions.",
    icon: BarChart3,
  },
];

const assuranceServices = [
  {
    title: "Audit Engagements",
    description:
      "Our audit engagements provide the highest level of assurance over your financial statements. We carefully assess financial records, internal controls and supporting documentation to determine whether the statements are presented fairly and in accordance with applicable accounting standards.",
    icon: SearchCheck,
  },
  {
    title: "Review Engagements",
    description:
      "A review engagement provides limited assurance through analytical procedures, inquiries and professional assessment. It is often suitable for businesses that require credible financial statements without the extensive scope of a full audit.",
    icon: FileSearch,
  },
  {
    title: "Compilation Engagements",
    description:
      "We organize financial information supplied by management and prepare clear financial statements without providing assurance. Compilation engagements help businesses present their financial results in a structured and professional format.",
    icon: FileText,
  },
  {
    title: "Internal Control Assessments",
    description:
      "We evaluate your financial processes and internal controls to identify weaknesses, reduce operational risk and recommend practical improvements that support accurate and efficient reporting.",
    icon: ShieldCheck,
  },
  {
    title: "Financial Reporting Support",
    description:
      "Our team helps ensure your financial statements are complete, consistent and prepared in accordance with applicable reporting requirements and accounting standards.",
    icon: ClipboardCheck,
  },
];

const approachSteps = [
  {
    title: "Understand",
    description:
      "We learn about your organization, reporting requirements, operations and stakeholder expectations.",
  },
  {
    title: "Assess",
    description:
      "We evaluate financial records, systems, controls and areas that may present reporting risk.",
  },
  {
    title: "Examine",
    description:
      "We perform the appropriate procedures and review supporting information with care and professional judgment.",
  },
  {
    title: "Communicate",
    description:
      "We explain our findings clearly and provide practical recommendations that support stronger financial reporting.",
  },
];

const situations = [
  "Annual financial statement requirements",
  "Bank and lender reporting",
  "Investor and shareholder reporting",
  "Government and regulatory compliance",
  "Non-profit financial reporting",
  "Business acquisitions or financing",
  "Internal control evaluations",
  "Reporting process improvements",
  "Audit and review preparation",
  "Compilation financial statements",
];

const benefits = [
  {
    title: "Improve Credibility",
    description:
      "Independent assurance increases confidence in the accuracy and reliability of your financial information.",
    icon: CircleCheckBig,
  },
  {
    title: "Reduce Reporting Risk",
    description:
      "We identify concerns early and help reduce the risk of errors, inconsistencies and incomplete reporting.",
    icon: ShieldCheck,
  },
  {
    title: "Increase Transparency",
    description:
      "Clear financial statements help stakeholders better understand your organization’s performance and position.",
    icon: Eye,
  },
  {
    title: "Gain Expert Insight",
    description:
      "Receive professional observations and practical recommendations to strengthen your financial processes.",
    icon: Users,
  },
];

export default function AssuranceServicesPage() {
  return (
    <main className="overflow-hidden bg-white text-[#554b44]">
      <AssuranceHero />
      <WhoWeHelp />
      <AssuranceServices />
      <OurApproach />
      <CommonSituations />
      <Benefits />
      <AssuranceCTA />
    </main>
  );
}

function AssuranceHero() {
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

          <span className="text-[var(--primary-brown)]">
            Assurance Services
          </span>
        </div>

        <div className="mt-10 max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#80ab7e]">
            Reliable Financial Reporting
          </p>

          <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-[var(--primary-brown)] sm:text-5xl">
            Assurance Services
          </h1>

          <h2 className="mt-3 font-serif text-2xl leading-tight text-[var(--primary-green)] sm:text-3xl">
            Accuracy. Transparency. Confidence.
          </h2>

          <div className="mt-6 h-[3px] w-16 rounded-full bg-[var(--primary-golden)]" />

          <p className="mt-7 max-w-4xl text-base leading-8 text-[#5c5048]">
            Reliable financial information is essential for confident
            decision-making. Hakimi &amp; Co. provides audit, review,
            compilation and financial reporting services that help businesses
            and organizations strengthen credibility, meet reporting
            requirements and build stakeholder trust.
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
          title="Assurance Solutions for Every Reporting Need"
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

function AssuranceServices() {
  return (
    <section className="bg-[#fbfaf6] px-6 py-20 sm:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Our Assurance Services"
          title="Clear, Credible Financial Information"
          align="left"
        />

        <div className="mt-10 divide-y divide-[#854d1b]/12">
          {assuranceServices.map((service) => {
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
            Thorough. Independent.
            <span className="text-[var(--primary-green)]"> Clear.</span>
          </h2>

          <div className="mt-5 h-[3px] w-14 rounded-full bg-[var(--primary-golden)]" />

          <p className="mt-6 text-sm leading-7 text-[#5c5048]">
            Our assurance approach combines professional independence,
            attention to detail and clear communication. We tailor the scope of
            each engagement to your reporting needs while maintaining rigorous
            professional standards.
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
          eyebrow="Common Assurance Needs"
          title="Support for Important Financial Requirements"
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
          title="Confidence Beyond the Numbers"
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

function AssuranceCTA() {
  return (
    <section className="px-6 py-20 sm:px-10">
      <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 overflow-hidden rounded-2xl bg-[var(--primary-green)] px-8 py-10 text-white sm:px-12 lg:flex-row lg:items-center">
        <div className="pointer-events-none absolute -left-20 -top-24 h-64 w-64 rounded-full border border-white/10" />

        <div className="pointer-events-none absolute -bottom-28 right-16 h-72 w-72 rounded-full border border-white/10" />

        <div className="relative max-w-2xl">
          <h2 className="font-serif text-3xl font-semibold sm:text-4xl">
            Strengthen Confidence in Your Financial Reporting
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-7 text-white/80">
            Speak with our team to determine whether an audit, review,
            compilation or other assurance service best meets your
            organization’s needs.
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