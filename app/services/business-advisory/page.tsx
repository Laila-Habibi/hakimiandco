import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  Building2,
  ChartNoAxesCombined,
  Check,
  CircleDollarSign,
  ClipboardList,
  Goal,
  Handshake,
  Lightbulb,
  LineChart,
  SearchCheck,
  ShieldCheck,
  TrendingUp,
  Users,
} from "lucide-react";

const audiences = [
  {
    title: "Startups",
    description:
      "Build a strong financial foundation with practical guidance on planning, cash flow, structure and early-stage decisions.",
    icon: Lightbulb,
  },
  {
    title: "Growing Businesses",
    description:
      "Improve performance, manage growth and make confident decisions as your operations, team and financial needs expand.",
    icon: TrendingUp,
  },
  {
    title: "Established Companies",
    description:
      "Strengthen financial strategy, identify opportunities and improve long-term planning across your organization.",
    icon: Building2,
  },
];

const advisoryServices = [
  {
    title: "Business Planning",
    description:
      "We help transform your goals into a practical financial plan. Our team supports budgeting, forecasting, resource planning and performance targets so you can move forward with a clearer understanding of what your business needs to succeed.",
    icon: ClipboardList,
  },
  {
    title: "Financial Analysis",
    description:
      "We review your financial results, identify meaningful trends and explain what the numbers reveal about your business. Clear analysis helps you understand performance, uncover risks and recognize areas for improvement.",
    icon: BarChart3,
  },
  {
    title: "Cash-Flow Management",
    description:
      "Healthy cash flow is essential for daily operations and sustainable growth. We help you assess inflows and outflows, anticipate shortfalls and develop strategies that improve financial stability.",
    icon: CircleDollarSign,
  },
  {
    title: "Budgeting and Forecasting",
    description:
      "We develop realistic budgets and financial forecasts that support better planning. These tools help you compare actual results with expectations and make adjustments before small issues become larger problems.",
    icon: LineChart,
  },
  {
    title: "Growth Strategy",
    description:
      "Whether you are expanding services, entering a new market or increasing capacity, we help evaluate the financial impact of growth opportunities and develop a strategy aligned with your resources and objectives.",
    icon: ChartNoAxesCombined,
  },
  {
    title: "Operational Improvement",
    description:
      "We assess financial processes, reporting practices and operational performance to identify inefficiencies. Our recommendations are focused on practical changes that improve productivity, visibility and profitability.",
    icon: SearchCheck,
  },
];

const approachSteps = [
  {
    title: "Listen",
    description:
      "We begin by understanding your business, priorities, challenges and long-term goals.",
  },
  {
    title: "Evaluate",
    description:
      "We review your financial information, operations and performance to identify risks and opportunities.",
  },
  {
    title: "Recommend",
    description:
      "We provide practical strategies tailored to your business, resources and stage of growth.",
  },
  {
    title: "Support",
    description:
      "We remain available to review progress, answer questions and help you adapt as conditions change.",
  },
];

const advisoryNeeds = [
  "Business plans and financial projections",
  "Annual budgets and rolling forecasts",
  "Cash-flow analysis and planning",
  "Profitability and margin reviews",
  "Key performance indicator development",
  "Business expansion planning",
  "Financing and investment preparation",
  "Operational efficiency assessments",
  "Pricing and cost analysis",
  "Management reporting improvement",
  "Strategic decision support",
  "Succession and transition planning",
];

const benefits = [
  {
    title: "Better Decisions",
    description:
      "Use reliable financial information and professional insight to make informed business decisions.",
    icon: Goal,
  },
  {
    title: "Improved Performance",
    description:
      "Identify opportunities to strengthen profitability, efficiency and overall financial results.",
    icon: TrendingUp,
  },
  {
    title: "Reduced Risk",
    description:
      "Recognize financial and operational concerns earlier and respond with practical strategies.",
    icon: ShieldCheck,
  },
  {
    title: "Long-Term Support",
    description:
      "Work with an advisory team that understands your business and supports your goals over time.",
    icon: Handshake,
  },
];

export default function BusinessAdvisoryPage() {
  return (
    <main className="overflow-hidden bg-white text-[#554b44]">
      <BusinessAdvisoryHero />
      <WhoWeHelp />
      <AdvisoryServices />
      <OurApproach />
      <CommonAdvisoryNeeds />
      <Benefits />
      <BusinessAdvisoryCTA />
    </main>
  );
}

function BusinessAdvisoryHero() {
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
            Business Advisory
          </span>
        </div>

        <div className="mt-10 max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#80ab7e]">
            Strategic Business Guidance
          </p>

          <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-[var(--primary-brown)] sm:text-5xl">
            Business Advisory
          </h1>

          <h2 className="mt-3 font-serif text-2xl leading-tight text-[var(--primary-green)] sm:text-3xl">
            Clear Insight. Better Decisions. Stronger Growth.
          </h2>

          <div className="mt-6 h-[3px] w-16 rounded-full bg-[var(--primary-golden)]" />

          <p className="mt-7 max-w-4xl text-base leading-8 text-[#5c5048]">
            Running a successful business requires more than accurate
            accounting. It requires a clear understanding of performance,
            cash flow, risks and opportunities. Hakimi &amp; Co. provides
            practical business advisory services that help owners and
            management teams make informed decisions, improve operations and
            plan confidently for the future.
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
          title="Advisory Support for Every Stage of Business"
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

function AdvisoryServices() {
  return (
    <section className="bg-[#fbfaf6] px-6 py-20 sm:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Our Advisory Services"
          title="Practical Guidance for Better Business Performance"
          align="left"
        />

        <div className="mt-10 divide-y divide-[#854d1b]/12">
          {advisoryServices.map((service) => {
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
            Insightful. Practical.
            <span className="text-[var(--primary-green)]"> Collaborative.</span>
          </h2>

          <div className="mt-5 h-[3px] w-14 rounded-full bg-[var(--primary-golden)]" />

          <p className="mt-6 text-sm leading-7 text-[#5c5048]">
            We take the time to understand how your business operates and what
            you want to achieve. Our recommendations are grounded in your
            financial information, practical realities and long-term goals so
            the advice you receive is useful, realistic and actionable.
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

function CommonAdvisoryNeeds() {
  return (
    <section className="px-6 pb-20 sm:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Common Advisory Needs"
          title="Business Challenges We Can Help You Address"
          align="left"
        />

        <div className="mt-10 grid gap-x-10 gap-y-4 rounded-2xl bg-[#f7f4e9] px-7 py-8 sm:grid-cols-2">
          {advisoryNeeds.map((need) => (
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
          title="Turn Financial Information Into Business Direction"
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

function BusinessAdvisoryCTA() {
  return (
    <section className="px-6 py-20 sm:px-10">
      <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 overflow-hidden rounded-2xl bg-[var(--primary-green)] px-8 py-10 text-white sm:px-12 lg:flex-row lg:items-center">
        <div className="pointer-events-none absolute -left-20 -top-24 h-64 w-64 rounded-full border border-white/10" />

        <div className="pointer-events-none absolute -bottom-28 right-16 h-72 w-72 rounded-full border border-white/10" />

        <div className="relative max-w-2xl">
          <h2 className="font-serif text-3xl font-semibold sm:text-4xl">
            Make Your Next Business Decision With Confidence
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-7 text-white/80">
            Speak with our advisory team about business planning, financial
            analysis, cash-flow management, forecasting and long-term growth.
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