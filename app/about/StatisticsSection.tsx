import {
  BriefcaseBusiness,
  Building2,
  HeartHandshake,
  Users,
} from "lucide-react";

import AnimatedCounter from "../components/AnimatedCounter";

const statistics = [
  {
    icon: BriefcaseBusiness,
    value: 17,
    suffix: "+",
    title: "Years of Experience",
    description:
      "17+ years of experience serving businesses and individuals.",
  },
  {
    icon: Users,
    value: 300,
    suffix: "+",
    title: "Happy Clients",
    description:
      "More than 300 clients trust us with their financial needs.",
  },
  {
    icon: Building2,
    value: 16,
    suffix: "+",
    title: "Industries",
    description:
      "Experience across 16+ industries.",
  },
  {
    icon: HeartHandshake,
    value: 100,
    suffix: "%",
    title: "Success",
    description:
      "Committed to 100% client success.",
  },
];

export default function AboutStatistics() {
  return (
    <section className="relative overflow-hidden bg-[var(--primary-green)] px-6 py-11 text-[var(--on-dark)]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.06]">
        <div className="h-full w-full bg-[radial-gradient(circle_at_center,_#ffffff_1px,_transparent_1px)] bg-[size:18px_18px]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {statistics.map((statistic, index) => {
          const Icon = statistic.icon;

          return (
            <div
              key={statistic.title}
              className={`group flex gap-5 ${
                index !== statistics.length - 1
                  ? "lg:border-r lg:border-[var(--surface)]/20 lg:pr-8"
                  : ""
              }`}
            >
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[var(--surface)]/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-[var(--surface)]/15">
                <Icon
                  size={34}
                  strokeWidth={1.8}
                  className="text-[var(--primary-golden)]"
                />
              </div>

              <div>
                <p className="font-serif text-3xl font-semibold w-fit metallic-gold-text">
                  <AnimatedCounter
                    value={statistic.value}
                    suffix={statistic.suffix}
                  />
                </p>

                <h3 className="mt-2 text-sm font-semibold uppercase tracking-wide">
                  {statistic.title}
                </h3>

                <p className="mt-3 max-w-[220px] text-xs leading-6 text-[var(--on-dark)]/75">
                  {statistic.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
