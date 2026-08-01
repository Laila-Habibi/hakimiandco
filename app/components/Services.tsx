
import Link from "next/link";

import {
  ArrowRight,
  Cloud,
  FileCheck2,
  FileText,
  ShieldCheck,
  TrendingUp,

} from "lucide-react";



const services = [
  {
    title: "Tax Solutions",
    description:
      "Tax planning, preparation and filing for individuals and businesses.",
    href: "/services/tax-solutions",
    icon: FileText,
  },
  {
    title: "Assurance Services",
    description:
      "Audit, review and compilation services to ensure accuracy and transparency.",
    href: "/services/assurance-services",
    icon: FileCheck2,
  },
  {
    title: "Payroll Solutions",
    description:
      "Simplify payroll processing and ensure accurate employee payments.",
    href: "/services/payroll-solutions",
    icon: ShieldCheck,
  },
  {
    title: "Business Advisory",
    description:
      "Strategic guidance to help your business grow, improve and make better decisions.",
    href: "/services/business-advisory",
    icon: TrendingUp,
  },
  {
    title: "AI Integration",
    description:
      "Integrate AI solutions to automate routine tasks and enhance financial analysis.",
    href: "/services/ai-integration",
    icon: Cloud,
  },
];

function Services() {
  return (
    <section
    id="services"
     className="relative px-5 py-20 lg:px-10"
    
    >
      <div className="absolute right-0 top-36 hidden w-24 opacity-40 lg:block">
        {/* <BotanicalDecoration /> */}
      </div>
      

      
      <div className="mx-auto max-w-[1380px]">
        <SectionHeading
          eyebrow="Our Services"
          title="Comprehensive Accounting Solutions"
          description="We offer a full range of professional services tailored to your needs. Our goal is simple: to help you achieve clarity, compliance and long-term financial success."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group flex min-h-[340px] flex-col items-center rounded-xl border border-[#80ab7e]/30 bg-white px-6 py-8 text-center shadow-[0_10px_40px_rgba(133,77,27,0.05)] transition hover:-translate-y-2 hover:shadow-[0_18px_45px_rgba(133,77,27,0.12)]"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#80ab7e]/10">
                  <Icon
                    size={39}
                    strokeWidth={1.5}
                    className="text-[#6e913d]"
                  />
                </div>

                <h3 className="mt-6 font-serif text-xl font-semibold">
                  {service.title}
                </h3>

                <p className="mt-4 flex-1 text-sm leading-6 text-[#554b44]">
                  {service.description}
                </p>

                <Link
                  href={service.href}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#6e913d]"
                >
                  Learn More
                  <ArrowRight
                    size={16}
                    className="transition group-hover:translate-x-1"
                  />
                </Link>
              </article>
            );
          })}
        </div>
      </div>

    
    </section>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-bold uppercase tracking-[0.17em] text-[#80ab7e]">
        {eyebrow}
      </p>

      <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight lg:text-4xl">
        {title}
      </h2>

      <div className="mx-auto mt-4 h-[3px] w-14 rounded-full bg-[#ffdb11]" />

      {description && (
        <p className="mt-5 text-sm leading-7 text-[#554b44]">{description}</p>
      )}
    </div>
  );
}


export default Services