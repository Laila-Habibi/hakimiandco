
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
    title: "Tax Services",
    description:
      "Tax planning, preparation and filing for individuals and businesses.",
    icon: FileText,
  },
  {
    title: "Assurance Services",
    description:
      "Audit, review and compilation services to ensure accuracy and transparency.",
    icon: FileCheck2,
  },
  {
    title: "Risk Management",
    description:
      "Identify financial and operational risks and implement practical solutions.",
    icon: ShieldCheck,
  },
  {
    title: "Business Advisory",
    description:
      "Strategic guidance to help your business grow, improve and make better decisions.",
    icon: TrendingUp,
  },
  {
    title: "Cloud Accounting",
    description:
      "Cloud-based bookkeeping and real-time financial reporting from anywhere.",
    icon: Cloud,
  },
];

function Services() {
  return (
      <section id="services" className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c28a2d]">
              Our Services
            </p>

            <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">
              Comprehensive Accounting Solutions
            </h2>

            <p className="mt-4 text-sm leading-6 text-slate-600">
              We offer professional services tailored to your needs, helping
              you achieve clarity, compliance and long-term financial success.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="group flex min-h-[300px] flex-col items-center rounded-md border border-slate-200 bg-white px-6 py-8 text-center transition duration-300 hover:-translate-y-1 hover:border-[#d8b069] hover:shadow-xl"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#f6f8fb] text-[#102a4c] transition group-hover:bg-[#102a4c] group-hover:text-white">
                    <Icon size={30} strokeWidth={1.6} />
                  </div>

                  <h3 className="mt-5 text-base font-bold">{service.title}</h3>

                  <p className="mt-4 text-sm leading-6 text-slate-600">
                    {service.description}
                  </p>

                  <a
                    href="#contact"
                    className="mt-auto flex items-center gap-2 pt-6 text-sm font-semibold text-[#bd8124]"
                  >
                    Learn More
                    <ArrowRight size={14} />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>
  )
}

export default Services