import React from 'react'
import Image from 'next/image'



import {
  ArrowRight,
  CalendarDays,
 
} from "lucide-react";


function Hero() {
  return (
      <section className="relative overflow-hidden bg-white">
      <div className="relative min-h-[480px] lg:min-h-[520px]">
        {/* Background image */}
        <Image
          src="/images/accounting-hero.png"
          alt="Financial dashboard and accounting workspace"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[72%_center] lg:object-center"
        />

        {/* White fade over the image */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/10" />
          <div className="absolute inset-0 bg-white/25 lg:hidden" />

        {/* Extra mobile overlay */}
        <div className="absolute inset-0 bg-white/30 lg:hidden" />

        {/* Content */}
        <div className="relative z-10 mx-auto flex h-[420px] max-w-7xl items-center px-6 lg:h-[520px] lg:px-10">
          <div className="max-w-[570px]">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#c69a45] sm:text-sm">
              Trusted. Experienced. Reliable.
            </p>

            <h1 className="mt-4 max-w-[560px] font-serif text-4xl font-bold leading-[1.08] text-[#102a4c] sm:text-4xl lg:text-5xl">
              Reliable Financial Solutions for Your Business
            </h1>

            <p className="mt-6 max-w-[530px] text-base leading-7 text-slate-700">
              Hakimi & Co provides professional tax, assurance, risk, advisory,
              and cloud accounting services to help individuals and businesses
              make confident financial decisions.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-[4px] bg-[#102a4c] px-7 text-sm font-semibold text-white transition hover:bg-[#173c68]"
              >
                <CalendarDays size={17} />
                Book a Consultation
              </a>

              <a
                href="#services"
                className="inline-flex min-h-14 items-center justify-center gap-4 rounded-[4px] border-2 border-[#102a4c] bg-white/90 px-8 text-sm font-semibold text-[#102a4c] transition hover:bg-white"
              >
                Explore Our Services
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero