import SectionHeading from "../components/SectionHeading";

import {
  Award,
  BarChart3,
  GraduationCap,
  Heart,
  Lightbulb,
  Section,
  Users,
} from "lucide-react";


const benefits = [
  {
    icon: Users,
    title: "Collaborative Culture",
    description:
      "Work with a supportive team that values respect, trust and teamwork.",
  },
  {
    icon: BarChart3,
    title: "Career Growth",
    description:
      "Opportunities to learn, grow and advance throughout your career path.",
  },
  {
    icon: Lightbulb,
    title: "Meaningful Work",
    description:
      "Solve real challenges and make a meaningful difference for our clients.",
  },
  {
    icon: Heart,
    title: "Work-Life Balance",
    description:
      "Flexible schedules and a healthy balance for you and your family.",
  },
  {
    icon: GraduationCap,
    title: "Learning & Development",
    description:
      "Ongoing training and mentorship to support your professional success.",
  },
  {
    icon: Award,
    title: "Recognition",
    description:
      "We celebrate your achievements, ideas and valuable contributions.",
  },
];

export default function BenefitsSection(){
      return (
    <section className="relative overflow-hidden bg-white px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-7xl">

        
         <SectionHeading
         eyebrow="Why Work With Us"
         title="A Place to Grow and Thrive"
         />

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-6 lg:gap-0">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <article
                key={benefit.title}
                className={`group px-5 text-center ${
                  index !== benefits.length - 1
                    ? "lg:border-r lg:border-[#854d1b]/15"
                    : ""
                }`}
              >
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#f3f3e9] transition duration-300 group-hover:-translate-y-1 group-hover:bg-[#80ab7e]/20">
                  <Icon
                    size={35}
                    strokeWidth={1.7}
                    className="text-[#56742f]"
                  />
                </div>

                <h3 className="mt-6 font-serif text-xl font-semibold text-[var(--primary-brown)]">
                  {benefit.title}
                </h3>

                <p className="mx-auto mt-4 max-w-[180px] text-xs leading-6 text-[#66574d]">
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