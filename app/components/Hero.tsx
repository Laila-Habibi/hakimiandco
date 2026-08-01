
import Image from 'next/image'
import Link from 'next/link';


import {
  ArrowRight,
  CalendarDays,
  
 
} from "lucide-react";


function Hero() {
  return (
    <section className="relative min-h-[610px] bg-[#fff9e8]">
      <div className="absolute left-0 top-0 h-full w-24 opacity-50">
        {/* <BotanicalDecoration /> */}
      </div>

      <div className="mx-auto grid max-w-[1440px] lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative z-10 flex items-center px-6 py-20 lg:px-16 lg:py-24">
          <div className="max-w-xl">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-[#80ab7e]">
              Trusted. Experienced. Reliable.
            </p>

            <h1 className="font-serif text-5xl font-semibold leading-[1.05] text-[#4a250e] sm:text-6xl lg:text-5xl animate-fade-up">
              Reliable Financial Solutions for Your{" "}
              <span className="text-[var(--primary-green)]">Business</span>
            </h1>

            <div className="mt-5 h-[3px] w-14 rounded-full bg-[#ffdb11]" />

            <p className="animate-fade-up mt-6 max-w-lg text-base leading-7 text-[#4d433c]">
             
              Hakimi & Co provides professional tax, assurance, risk, advisory
              and cloud accounting services to help individuals and businesses
              make confident financial decisions.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row animate-fade-up">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 rounded-lg bg-[var(--primary-green)] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[var(--dark-green)]"
              >
                <CalendarDays size={18} />
                Book a Consultation
              </Link>

              <Link
                href="#services"
                className="inline-flex items-center justify-center gap-3 rounded-lg border border-[var(--primary-green)] px-6 py-4 text-sm font-semibold text-[#6e913d] transition hover:bg-[#6e913d] hover:text-white"
              >
                Explore Our Services
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>

        <div className="relative min-h-[450px] lg:min-h-[610px]">
          <div className="absolute inset-y-0 left-0 z-10 hidden w-33 bg-gradient-to-r from-[#fff9e8] to-transparent lg:block" />

          <Image
            src="/images/accounting-hero2.png"
            alt="Laptop displaying accounting charts on an office desk"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#fff9e8]/20 to-transparent" />
        </div>
      </div>
    </section>
  );
}

export default Hero