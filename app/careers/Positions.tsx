import Image from "next/image";
import Link from "next/link";
import SectionHeading from "../components/SectionHeading";


import {
  ArrowRight,
  Award,
  BarChart3,
  BriefcaseBusiness,
  CalendarClock,
  MapPin,
  Section,
} from "lucide-react";

const positions = [
  {
    title: "Junior Accountant",
    location: "Toronto, ON",
    type: "Full-time",
    experience: "3–5 years",
    icon: BriefcaseBusiness,
    iconStyle: "bg-[var(--dark-green)] text-[var(--on-dark)]",
    link: "/careers/open-positions/junior-accountant",
  },
  {
    title: "Tax Associate",
    location: "Toronto, ON",
    type: "Full-time",
    experience: "1–3 years",
    icon: BarChart3,
    iconStyle: "bg-[var(--surface-green)] text-[var(--dark-green)]",
    link: "/careers/open-positions/junior-accountant",
  },
  {
    title: "Audit & Assurance Associate",
    location: "Toronto, ON",
    type: "Full-time",
    experience: "1–3 years",
    icon: Award,
    iconStyle: "bg-[var(--primary-orange)] text-[var(--on-dark)]",
    link: "/careers/open-positions/junior-accountant",
  },
  {
    title: "Bookkeeping Specialist",
    location: "Toronto, ON",
    type: "Full-time",
    experience: "1–2 years",
    icon: BriefcaseBusiness,
    iconStyle: "bg-[var(--dark-green)] text-[var(--on-dark)]",
    link: "/careers/open-positions/junior-accountant",
  },
];

export default function OpenPositionsSection(){
    return(
          <section
      id="open-positions"
      className="bg-[var(--surface)] px-6 pb-16 sm:px-10 lg:pb-20"
    >
      <div className="mx-auto max-w-7xl rounded-[28px] bg-[var(--surface-muted)] px-6 py-10 sm:px-10 lg:px-12 lg:py-12">
        <div className="grid items-stretch gap-10 lg:grid-cols-[1.25fr_0.75fr]">
          <div>
           <SectionHeading
           eyebrow="Open Positions"
           title="Explore oppurtunities"
           align="left"
           />
           

            <div className="mt-8 space-y-3">
              {positions.map((position) => {
                const Icon = position.icon;

                return (
                  <Link
                    key={position.title}
                    href={position.link}
                    className="group flex flex-col gap-5 rounded-xl border border-[var(--primary-brown)]/10 bg-[var(--surface)] px-5 py-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[var(--light-green)]/40 hover:shadow-lg sm:flex-row sm:items-center"
                  >
                    <div
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full ${position.iconStyle}`}
                    >
                      <Icon size={25} strokeWidth={1.7} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="mt-6 font-serif text-lg font-semibold text-[var(--primary-brown)]">
                        {position.title}
                      </h3>

                      <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[var(--text-muted)]">
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin
                            size={14}
                            className="text-[var(--primary-golden)]"
                          />
                          {position.location}
                        </span>

                        <span className="hidden h-3 w-px bg-[var(--primary-brown)]/20 sm:block" />

                        <span className="inline-flex items-center gap-1.5">
                          <BriefcaseBusiness
                            size={14}
                            className="text-[var(--primary-golden)]"
                          />
                          {position.type}
                        </span>

                        <span className="hidden h-3 w-px bg-[var(--primary-brown)]/20 sm:block" />

                        <span className="inline-flex items-center gap-1.5">
                          <CalendarClock
                            size={14}
                            className="text-[var(--primary-golden)]"
                          />
                          Experience: {position.experience}
                        </span>
                      </div>
                    </div>

                    <ArrowRight
                      size={24}
                      className="shrink-0 text-[var(--dark-green)] transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>
                );
              })}
            </div>

            <Link
              href="/careers/open-positions"
              className="group mt-7 inline-flex items-center gap-3 rounded-md border border-[var(--dark-green)] px-6 py-3 text-sm font-semibold text-[var(--dark-green)] transition duration-300 hover:bg-[var(--dark-green)] hover:text-[var(--on-dark)]"
            >
              View All Open Positions

              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div className="relative min-h-[460px] overflow-hidden rounded-[24px]">
            <Image
              src="/images/careers-office.png"
              alt="Hakimi and Co office waiting area"
              fill
              sizes="(min-width: 1024px) 35vw, 100vw"
              className="object-cover transition duration-700 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[var(--overlay-green)]/15 to-transparent" />
          </div>
        </div>
      </div>
    </section>
    )
}