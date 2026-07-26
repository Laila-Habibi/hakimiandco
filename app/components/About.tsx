import React from 'react'
import Image from 'next/image';

import {
  BarChart3,
  BriefcaseBusiness,
  HeartHandshake,
  LockKeyhole,
} from "lucide-react";

const benefits = [
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
     <section id="about" className="bg-[#f8fafc]">
            <div className="grid min-h-[570px] lg:grid-cols-2">
              <div className="relative min-h-[420px] lg:min-h-full">
                <Image
                  src="/images/accounting-office.png"
                  alt="Hakimi and Co accounting office"
                  fill
                  className="object-cover"
                />
              </div>
    
              <div className="flex items-center px-5 py-16 sm:px-10 lg:px-16">
                <div className="max-w-2xl">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c28a2d]">
                    About Hakimi & Co
                  </p>
    
                  <h2 className="mt-3 font-serif text-3xl font-bold leading-tight sm:text-4xl">
                    Partners in Your Financial Success
                  </h2>
    
                  <p className="mt-5 text-sm leading-7 text-slate-600">
                    At Hakimi & Co, we combine expertise, technology and a
                    client-focused approach to deliver financial solutions that
                    make a meaningful difference.
                  </p>
    
                  <div className="mt-9 grid gap-7 sm:grid-cols-2">
                    {benefits.map((benefit) => {
                      const Icon = benefit.icon;
    
                      return (
                        <div key={benefit.title} className="flex gap-4">
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-[#c28a2d]">
                            <Icon size={21} />
                          </div>
    
                          <div>
                            <h3 className="text-sm font-bold">{benefit.title}</h3>
                            <p className="mt-2 text-sm leading-6 text-slate-600">
                              {benefit.description}
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
  )
}

export default About