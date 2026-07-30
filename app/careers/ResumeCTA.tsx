import Link from "next/link"


import {
  ArrowRight,
  CalendarClock,
} from "lucide-react";
import SectionHeading from "../components/SectionHeading";


export default function ResumeCTA(){
    return(
          <section className="bg-white px-6 pb-20 sm:px-10">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[24px] border border-dashed border-[#f19f28] bg-[#fffdf8] px-7 py-9 sm:px-10">
        <div className="pointer-events-none absolute -right-12 -bottom-20 opacity-20">
         
        </div>

        <div className="relative flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
            <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-[#f3f3e9] text-[#56742f]">
              <CalendarClock size={42} strokeWidth={1.6} />
            </div>
             
             <SectionHeading
             title="Don&apos;t see the right role?"
             eyebrow=""
             description="We&apos;re always interested in connecting with great talent.
                Send us your resume and let&apos;s stay in touch."
              align="left"
              showUnderline={false}
             />
            {/* <div>
              <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight lg:text-4xl text-[var(--primary-brown)]">
                Don&apos;t see the right role?
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-7 text-[#5c5048]">
                We&apos;re always interested in connecting with great talent.
                Send us your resume and let&apos;s stay in touch.
              </p>
            </div> */}
          </div>

          <Link
            href="/contact"
            className="group inline-flex shrink-0 items-center gap-3 rounded-md bg-[#56742f] px-7 py-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#3f5c28] hover:shadow-lg"
          >
            Submit Your Resume

            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
    )
}