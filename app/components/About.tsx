import React from 'react'
import Image from 'next/image';

import {
  BarChart3,
  BriefcaseBusiness,
  HeartHandshake,
  LockKeyhole,
} from "lucide-react";

const advantages = [
  {
    title: "Experienced Professionals",
    description:
      "Our team brings years of experience across a wide range of industries.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Integrity & Confidentiality",
    description:
      "We maintain the highest standards of integrity, privacy and data security.",
    icon: LockKeyhole,
  },
  {
    title: "Client-Focused Approach",
    description:
      "We listen, understand and create solutions that match your unique needs.",
    icon: HeartHandshake,
  },
  {
    title: "Modern & Efficient",
    description:
      "We use modern technology to deliver accurate and timely financial results.",
    icon: BarChart3,
  },
];


function About() {
  return (
    <section className="relative bg-[#fffaf0]">
      <div className="mx-auto grid max-w-[1440px] lg:grid-cols-2">
        <div className="relative min-h-[460px]">
          <Image
            src="/images/hakimi-office.png"
            alt="Hakimi and Co accounting office"
            fill
            className="object-cover"
          />
        </div>

        <div className="flex items-center px-6 py-16 lg:px-16">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.17em] text-[#80ab7e]">
              About Hakimi & Co
            </p>

            <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight lg:text-4xl">
              Partners in Your Financial Success
            </h2>

            <div className="mt-4 h-[3px] w-14 rounded-full bg-[#ffdb11]" />

            <p className="mt-6 text-base leading-7 text-[#554b44]">
              At Hakimi & Co, we combine expertise, technology and a
              client-focused approach to deliver financial solutions that truly
              make a difference.
            </p>

            <div className="mt-9 grid gap-x-8 gap-y-8 sm:grid-cols-2">
              {advantages.map((advantage) => {
                const Icon = advantage.icon;

                return (
                  <div key={advantage.title} className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#f5e088]/30">
                      <Icon size={23} className="text-[#6e913d]" />
                    </div>

                    <div>
                      <h3 className="text-sm font-bold">{advantage.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-[#5c524c]">
                        {advantage.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About