


import {
  ArrowRight,
  CalendarDays,

} from "lucide-react";



function CTA() {
  return (
    <section className="bg-[#123763] px-5 py-9 text-white lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-7 lg:flex-row">
          <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:text-left">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#c99a45]">
              <CalendarDays size={30} />
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold sm:text-3xl">
                Let&apos;s Make Your Finances Simpler
              </h2>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-200">
                Schedule a consultation with our professionals and take the
                first step toward financial clarity and sustainable growth.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="flex min-w-[250px] items-center justify-center gap-3 rounded-md bg-[#d4a34e] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#bf8c37]"
          >
            Schedule a Consultation
            <ArrowRight size={17} />
          </a>
        </div>
      </section>
  )
}

export default CTA