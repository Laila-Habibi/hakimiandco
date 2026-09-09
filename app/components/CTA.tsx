// import Link from "next/link";


// import {
//   ArrowRight,
//   CalendarDays,

// } from "lucide-react";



// function CTA() {
//   return (
//     <section className="relative overflow-hidden bg-[var(--primary-green)] px-5 py-9">
//       <div className="absolute inset-0" />
//       {/* bg-gradient-to-r from-[var(--light-green)] via-[var(--primary-green)] to-[var(--light-green)]/40 */}

//       <div className="relative mx-auto flex max-w-[1260px] flex-col items-center justify-between gap-7 lg:flex-row">
//         <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:text-left">
//           <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--primary-green)] text-[var(--on-dark)]">
//             <CalendarDays size={31} />
//           </div>

//           <div>
//             <h2 className="font-serif text-3xl font-semibold lg:text-3xl">
//               Let&apos;s Make Your Finances Simpler
//             </h2>

//             <p className="mt-2 max-w-2xl text-sm leading-6">
//               Schedule a consultation with our accounting professionals and take
//               the first step toward financial clarity and growth.
//             </p>
//           </div>
//         </div>

//         <Link
//           href="/contact"
//           className="inline-flex shrink-0 items-center gap-4 rounded-lg bg-[var(--primary-green)] px-7 py-4 text-sm font-semibold text-[var(--on-dark)] transition hover:bg-[var(--primary-brown)]"
//         >
//           Schedule a Consultation
//           <ArrowRight size={19} />
//         </Link>
//       </div>
//     </section>
//   );
// }

// export default CTA



import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";

function CTA() {
  return (
    <section className="relative overflow-hidden bg-[var(--surface-muted)] px-5 py-16 lg:px-10">
      {/* Decorative background shapes */}
      <div className="absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[var(--gold-highlight)]/35 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-[var(--light-green)]/25 blur-3xl" />
      <div className="absolute left-[42%] top-0 h-32 w-32 rounded-full bg-[var(--primary-orange)]/10 blur-2xl" />

      <div className="relative mx-auto flex max-w-[1260px] flex-col items-center justify-between gap-9 rounded-[32px] border border-[var(--light-green)]/80 bg-[var(--surface-cream)]/80 px-7 py-10 shadow-[0_18px_50px_color-mix(in_srgb,var(--primary-brown)_8%,transparent)] backdrop-blur-sm lg:flex-row lg:px-12">
        <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[var(--primary-green)] text-[var(--on-dark)] shadow-[0_12px_30px_color-mix(in_srgb,var(--primary-green)_25%,transparent)]">
            <CalendarDays size={30} strokeWidth={1.8} />
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--primary-green)]">
              Let&apos;s Talk
            </p>

            <h2 className="mt-2 font-serif text-3xl font-semibold leading-tight text-[var(--primary-brown)] lg:text-3xl">
              Let&apos;s Make Your Finances Simpler
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--text-muted)]">
              Schedule a consultation with our accounting professionals and
              take the first step toward greater financial clarity, confidence,
              and long-term growth.
            </p>
          </div>
        </div>

        <Link
          href="/contact"
          className="inline-flex shrink-0 items-center gap-3 rounded-full bg-[var(--primary-green)] px-8 py-4 text-sm font-semibold text-[var(--on-dark)] shadow-[0_12px_30px_color-mix(in_srgb,var(--light-green)_100%,transparent)] transition duration-300 hover:-translate-y-1 hover:bg-[var(--dark-green)]"
        >
          Schedule a Consultation
          <ArrowRight size={19} />
        </Link>
      </div>
    </section>
  );
}

export default CTA;