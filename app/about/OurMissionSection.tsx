import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutMission() {
  return (
    <section
      id="our-story"
      className="relative overflow-hidden bg-[#f3f3e9]"
    >
      <div className="grid lg:grid-cols-[33%_67%]">
        {/* Left Content */}
        <div className="relative flex items-center px-6 py-16 sm:px-10 lg:px-16 xl:px-20">
          {/* Decorative Background */}
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center opacity-15">
            <svg
              width="220"
              height="320"
              viewBox="0 0 220 320"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M40 300C90 250 118 180 125 25"
                stroke="#56742f"
                strokeWidth="2"
              />

              <path
                d="M118 70C85 58 58 38 45 10C82 12 109 34 118 70Z"
                fill="#80ab7e"
              />

              <path
                d="M105 125C142 112 168 87 180 58C145 60 118 87 105 125Z"
                fill="#f5e088"
              />

              <path
                d="M82 180C45 170 20 145 8 112C46 115 72 141 82 180Z"
                fill="#80ab7e"
              />

              <path
                d="M65 235C102 225 132 200 148 170C110 171 81 195 65 235Z"
                fill="#f5e088"
              />
            </svg>
          </div>

          <div className="relative z-10 max-w-sm">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--light-green)]">
              Our Mission
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-[var(--primary-brown)] sm:text-5xl">
              Experts Who
              <span className="block text-[var(--primary-green)]">
                Care
              </span>
            </h2>

            <div className="mt-6 h-[3px] w-12 rounded-full bg-[var(--primary-golden)]" />

            <p className="mt-7 text-sm leading-7 text-[#5c5048]">
              Our team combines technical expertise with a client-first
              mindset, delivering personalized accounting, tax, and
              advisory services that help businesses and individuals make
              confident financial decisions.
            </p>

            <Link
              href="/team"
              className="group mt-8 inline-flex items-center gap-3 rounded-md border border-[var(--primary-green)] px-5 py-3 text-sm font-semibold text-[var(--primary-green)] transition-all duration-300 hover:bg-[var(--primary-green)] hover:text-white"
            >
              Meet Our Team

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative min-h-[470px] overflow-hidden">
          <Image
            src="/about/about-team.png"
            alt="Hakimi and Co professional accounting team"
            fill
            sizes="(min-width:1024px) 67vw, 100vw"
            className="object-cover transition-transform duration-700 hover:scale-105"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#56742f]/10 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}