import {
  BriefcaseBusiness,
  ChartPie,
  Trophy,
  Users,
} from "lucide-react";

import AnimatedCounter from "../components/AnimatedCounter";

const statistics = [
  {
    icon: Users,
    value: 100,
    suffix: "+",
    title: "Happy Clients",
    description:
      "Businesses and individuals trust us with their finances.",
  },
  {
    icon: BriefcaseBusiness,
    value: 15,
    suffix: "+",
    title: "Years of Experience",
    description:
      "Decades of combined expertise you can rely on.",
  },
  {
    icon: ChartPie,
    value: 98,
    suffix: "%",
    title: "Client Retention",
    description:
      "Long-term relationships built on trust and results.",
  },
  {
    icon: Trophy,
    value: 15,
    suffix: "+",
    title: "Industries Served",
    description:
      "From startups to established enterprises.",
  },
];

export default function AboutStatistics() {
  return (
    <section className="relative overflow-hidden bg-[var(--primary-green)] px-6 py-11 text-white">
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
                  ? "lg:border-r lg:border-white/20 lg:pr-8"
                  : ""
              }`}
            >
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-white/15">
                <Icon
                  size={34}
                  strokeWidth={1.8}
                  className="text-[var(--primary-golden)]"
                />
              </div>

              <div>
                <p className="font-serif text-3xl font-semibold text-[#f5e088]">
                  <AnimatedCounter
                    value={statistic.value}
                    suffix={statistic.suffix}
                  />
                </p>

                <h3 className="mt-2 text-sm font-semibold uppercase tracking-wide">
                  {statistic.title}
                </h3>

                <p className="mt-3 max-w-[220px] text-xs leading-6 text-white/75">
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