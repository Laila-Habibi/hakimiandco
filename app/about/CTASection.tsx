import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import SectionHeading from "../components/SectionHeading";


export default function AboutCTA() {
  return (
    <section className="relative overflow-hidden bg-[var(--surface-warm)] px-6 py-16 sm:px-10">
      {/* Decorative Background */}
      <div className="absolute -left-16 bottom-[-100px] h-72 w-72 rounded-full bg-[var(--light-green)]/10 blur-3xl" />

      <div className="absolute -right-20 top-[-120px] h-80 w-80 rounded-full bg-[var(--primary-golden)]/10 blur-3xl" />

      {/* Botanical Decoration */}
      <div className="pointer-events-none absolute -left-14 bottom-[-40px] hidden opacity-20 lg:block">
        <LeafDecoration />
      </div>

      <div className="pointer-events-none absolute -right-14 top-[-40px] hidden rotate-180 opacity-20 lg:block">
        <LeafDecoration />
      </div>

      <div className="relative mx-auto max-w-6xl rounded-[32px] border border-[var(--light-green)]/20 bg-[var(--surface)] px-8 py-10 shadow-xl shadow-[var(--dark-green)]/5 md:px-14">
        <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
          {/* Left Side */}
          <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
            <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full border-2 border-[var(--primary-golden)] bg-[var(--primary-green)] text-[var(--primary-golden)] shadow-lg shadow-[var(--dark-green)]/20 transition duration-300 hover:scale-105">
              <CalendarDays size={40} strokeWidth={1.6} />
            </div>
            

            <SectionHeading
            eyebrow="Ready to Get Started?"
            title="Let&apos;s Build Your Financial Success"
            description="Whether you &apos re a business owner, entrepreneur, or an
                individual, we &apos re ready to provide expert guidance that helps
                you make confident financial decisions."
            align="left"
            showUnderline={false}
            />
            {/* <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--light-green)]">
                Ready to Get Started?
              </p>

              <h2 className="mt-3 font-serif text-3xl leading-tight text-[var(--primary-brown)] sm:text-4xl">
                Let &apos s Build Your
                <span className="block text-[var(--primary-green)]">
                  Financial Success
                </span>
              </h2>

              <p className="mt-4 max-w-lg text-sm leading-7 text-[var(--text-body)]">
                Whether you &apos re a business owner, entrepreneur, or an
                individual, we &apos re ready to provide expert guidance that helps
                you make confident financial decisions.
              </p>
            </div> */}
          </div>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="group inline-flex shrink-0 items-center gap-3 rounded-md bg-[var(--primary-green)] px-7 py-4 text-sm font-semibold text-[var(--on-dark)] transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--dark-green)] hover:shadow-xl"
          >
            Book a Consultation

            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

function LeafDecoration() {
  return (
    <svg
      width="180"
      height="260"
      viewBox="0 0 180 260"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M35 240C75 195 95 145 102 22"
        stroke="var(--dark-green)"
        strokeWidth="2"
      />

      <path
        d="M95 58C66 47 45 30 35 8C66 10 88 29 95 58Z"
        fill="var(--light-green)"
      />

      <path
        d="M90 110C120 99 145 78 158 52C125 54 101 77 90 110Z"
        fill="var(--gold-highlight)"
      />

      <path
        d="M70 160C40 150 20 128 8 100C39 103 61 125 70 160Z"
        fill="var(--light-green)"
      />

      <path
        d="M58 205C90 196 114 174 128 148C96 150 71 171 58 205Z"
        fill="var(--gold-highlight)"
      />
    </svg>
  );
}