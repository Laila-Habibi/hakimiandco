
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



function Industries() {
  return (
    <section
  id="industries"
  className="bg-[#102a4c] px-5 py-8 text-white lg:px-8"
>
  <div className="mx-auto grid max-w-7xl gap-7 sm:grid-cols-2 lg:grid-cols-4">
    {statistics.map((stat) => {
      const Icon = stat.icon;

      return (
        <div
          key={stat.label}
          className="flex items-center justify-center gap-4 lg:justify-start"
        >
          <Icon
            size={34}
            className="text-[#d5a44e]"
            strokeWidth={1.5}
          />

          <div>
            <p className="text-2xl font-bold text-[#e1b35f]">
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                duration={1800}
              />
            </p>

            <p className="mt-1 text-xs text-slate-200">
              {stat.label}
            </p>
          </div>
        </div>
      );
    })}
  </div>
</section>

  )
}

export default Industries