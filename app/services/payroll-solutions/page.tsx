import Link from "next/link";
import {
  ArrowRight,
  Banknote,
  BriefcaseBusiness,
  Building2,
  CalendarCheck,
  Check,
  CircleDollarSign,
  Clock3,
  FileCheck2,
  FileText,
  ReceiptText,
  ShieldCheck,
  Users,
  WalletCards,
} from "lucide-react";

const audiences = [
  {
    title: "Small Businesses",
    description:
      "Reliable payroll support for growing teams without the burden of managing complex calculations and reporting internally.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Established Companies",
    description:
      "Structured payroll processing, remittances and reporting designed to support larger teams and recurring pay cycles.",
    icon: Building2,
  },
  {
    title: "Employers",
    description:
      "Accurate employee payments and compliance support that help employers manage payroll responsibilities with confidence.",
    icon: Users,
  },
];

const payrollServices = [
  {
    title: "Payroll Processing",
    description:
      "We calculate employee earnings, deductions, taxes and net pay for each payroll period. Our process helps ensure employees are paid accurately and on time while reducing the administrative workload on your internal team.",
    icon: WalletCards,
  },
  {
    title: "Payroll Deductions",
    description:
      "We calculate and track required payroll deductions, including income tax, CPP, EI and other applicable amounts. Accurate deductions help protect your business from reporting errors and compliance concerns.",
    icon: CircleDollarSign,
  },
  {
    title: "Government Remittances",
    description:
      "Our team helps prepare and organize payroll remittances to the appropriate government authorities. We support timely submissions so your business can meet its payroll obligations and avoid unnecessary penalties.",
    icon: Banknote,
  },
  {
    title: "Employee Records",
    description:
      "We help maintain organized payroll records, including employee earnings, deductions, vacation pay and payment history. Clear records make reporting, review and year-end processing more efficient.",
    icon: FileText,
  },
  {
    title: "Year-End Payroll Reporting",
    description:
      "We assist with year-end payroll requirements, including T4 slips, summaries and related reporting. Our team helps ensure your payroll information is complete, accurate and ready for required deadlines.",
    icon: FileCheck2,
  },
];

const approachSteps = [
  {
    title: "Collect",
    description:
      "We gather employee information, pay schedules, hours, compensation details and required deductions.",
  },
  {
    title: "Calculate",
    description:
      "We calculate gross earnings, deductions, employer contributions and net employee payments.",
  },
  {
    title: "Review",
    description:
      "We review payroll information for accuracy before payments and reporting are finalized.",
  },
  {
    title: "Report",
    description:
      "We help organize payroll records, remittances and required year-end documents.",
  },
];

const payrollNeeds = [
  "Weekly, biweekly and monthly payroll processing",
  "Salaried and hourly employee payroll",
  "Overtime and vacation pay calculations",
  "CPP, EI and income tax deductions",
  "Payroll remittance support",
  "Employee onboarding and payroll setup",
  "Records of employment support",
  "T4 and year-end payroll reporting",
  "Payroll summaries and payment records",
  "Payroll corrections and adjustments",
];

const benefits = [
  {
    title: "Accurate Payments",
    description:
      "Reduce payroll errors and ensure employees receive the correct amount on schedule.",
    icon: CalendarCheck,
  },
  {
    title: "Stay Compliant",
    description:
      "Meet payroll deduction, remittance and reporting requirements with organized professional support.",
    icon: ShieldCheck,
  },
  {
    title: "Save Valuable Time",
    description:
      "Reduce repetitive administrative work and keep your attention focused on running your business.",
    icon: Clock3,
  },
  {
    title: "Reliable Records",
    description:
      "Maintain clear payroll documentation for employees, reporting and year-end requirements.",
    icon: ReceiptText,
  },
];

export default function PayrollSolutionsPage() {
  return (
    <main className="overflow-hidden bg-white text-[#554b44]">
      <PayrollHero />
      <WhoWeHelp />
      <PayrollServices />
      <OurApproach />
      <CommonPayrollNeeds />
      <Benefits />
      <PayrollCTA />
    </main>
  );
}

function PayrollHero() {
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
            Payroll Solutions
          </span>
        </div>

        <div className="mt-10 max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#80ab7e]">
            Reliable Payroll Support
          </p>

          <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-[var(--primary-brown)] sm:text-5xl">
            Payroll Solutions
          </h1>

          <h2 className="mt-3 font-serif text-2xl leading-tight text-[var(--primary-green)] sm:text-3xl">
            Accurate Payments. Timely Reporting. Less Stress.
          </h2>

          <div className="mt-6 h-[3px] w-16 rounded-full bg-[var(--primary-golden)]" />

          <p className="mt-7 max-w-4xl text-base leading-8 text-[#5c5048]">
            Payroll involves more than issuing employee payments. It requires
            accurate calculations, timely deductions, government remittances
            and organized reporting. Hakimi &amp; Co. provides dependable
            payroll support that helps businesses pay employees correctly,
            meet their obligations and reduce administrative pressure.
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
          title="Payroll Support Designed for Your Business"
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

function PayrollServices() {
  return (
    <section className="bg-[#fbfaf6] px-6 py-20 sm:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Our Payroll Services"
          title="Complete Payroll Support at Every Stage"
          align="left"
        />

        <div className="mt-10 divide-y divide-[#854d1b]/12">
          {payrollServices.map((service) => {
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
            Organized. Accurate.
            <span className="text-[var(--primary-green)]"> Dependable.</span>
          </h2>

          <div className="mt-5 h-[3px] w-14 rounded-full bg-[var(--primary-golden)]" />

          <p className="mt-6 text-sm leading-7 text-[#5c5048]">
            Our payroll process is designed to provide accuracy, consistency
            and clear communication. We work with your payroll schedule and
            employee information to help ensure each pay period is processed
            carefully and required records remain organized.
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

function CommonPayrollNeeds() {
  return (
    <section className="px-6 pb-20 sm:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Common Payroll Needs"
          title="Payroll Responsibilities We Can Support"
          align="left"
        />

        <div className="mt-10 grid gap-x-10 gap-y-4 rounded-2xl bg-[#f7f4e9] px-7 py-8 sm:grid-cols-2">
          {payrollNeeds.map((need) => (
            <div key={need} className="flex items-start gap-3">
              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--primary-green)] text-white">
                <Check size={12} strokeWidth={2.5} />
              </span>

              <p className="text-sm leading-6 text-[#4d3a2e]">{need}</p>
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
          title="Make Payroll Simpler and More Reliable"
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

function PayrollCTA() {
  return (
    <section className="px-6 py-20 sm:px-10">
      <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 overflow-hidden rounded-2xl bg-[var(--primary-green)] px-8 py-10 text-white sm:px-12 lg:flex-row lg:items-center">
        <div className="pointer-events-none absolute -left-20 -top-24 h-64 w-64 rounded-full border border-white/10" />

        <div className="pointer-events-none absolute -bottom-28 right-16 h-72 w-72 rounded-full border border-white/10" />

        <div className="relative max-w-2xl">
          <h2 className="font-serif text-3xl font-semibold sm:text-4xl">
            Take the Stress Out of Payroll
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-7 text-white/80">
            Speak with our team about reliable payroll processing, employee
            payments, deductions, remittances and year-end reporting for your
            business.
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