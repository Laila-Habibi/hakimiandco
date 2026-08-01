
"use client"
import { useEffect, useRef, useState } from "react";
import {
 
  BriefcaseBusiness,
  Building2,
  HeartHandshake,
  Users,
  
} from "lucide-react";




const statistics = [
  {
    value: 10,
    suffix: "+",
    label: "Years of Experience",
    icon: BriefcaseBusiness,
  },
  {
    value: 500,
    suffix: "+",
    label: "Happy Clients",
    icon: Users,
  },
  {
    value: 20,
    suffix: "+",
    label: "Industries Served",
    icon: Building2,
  },
  {
    value: 100,
    suffix: "%",
    label: "Commitment to Success",
    icon: HeartHandshake,
  },
];


type AnimatedCounterProps = {
  value: number;
  suffix?: string;
  duration?: number;
};

function AnimatedCounter({
  value,
  suffix = "",
  duration = 1500,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const counterRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = counterRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimated.current) return;

        hasAnimated.current = true;

        const startTime = performance.now();

        const animate = (currentTime: number) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);

          const easedProgress = 1 - Math.pow(1 - progress, 3);

          setCount(Math.floor(value * easedProgress));

          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };

        requestAnimationFrame(animate);
      },
      {
        threshold: 0.3,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [duration, value]);

  return (
    <span ref={counterRef}>
      {count}
      {suffix}
    </span>
  );
}



function Statistics() {
  return (
    <section className="bg-[var(--primary-green)] px-5 py-7 text-white">
      <div className="mx-auto grid max-w-[1320px] gap-7 sm:grid-cols-2 lg:grid-cols-4">
        {statistics.map((statistic, index) => {
          const Icon = statistic.icon;

          return (
            <div
              key={statistic.label}
              className={`flex items-center justify-center gap-4 py-2 ${
                index !== statistics.length - 1
                  ? "lg:border-r lg:border-white/25"
                  : ""
              }`}
            >
              <Icon size={39} strokeWidth={1.5} className="text-[#ffdb11]" />

              <div>
                <p className="text-3xl font-semibold text-[#ffdb11]">
                 <AnimatedCounter
                  value={statistic.value}
                  suffix={statistic.suffix}
                  />
                </p>
                <p className="mt-1 text-xs">{statistic.label}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}


export default Statistics