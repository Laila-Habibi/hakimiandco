
import Link from "next/link";
import Image from "next/image";

import {
  Award,
  Clock3,
  Users,
} from "lucide-react";


const highlights = [
  {
    icon: Users,
    title: "Experienced Professionals",
  },
  {
    icon: Award,
    title: "Trusted By Our Clients",
  },
  {
    icon: Clock3,
    title: "Quick Response",
  },
];

export default function ContactHero() {
  return (
  
     <section className="relative overflow-hidden bg-[#f7f4e9]">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/about/about-office.png"
          alt="Hakimi and Co office"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-20"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#fffdf7] via-[#fffdf7]/90 to-[#80ab7e]/25" />
      </div>

      {/* Left botanical decoration */}
      <div className="pointer-events-none absolute -left-14 top-8 hidden opacity-20 sm:block">
       
      </div>

      {/* Right botanical decoration */}
      <div className="pointer-events-none absolute -right-14 bottom-[-90px] hidden rotate-180 opacity-20 sm:block">
        
      </div>

      {/* Hero content */}
      <div className="relative mx-auto flex min-h-[390px] max-w-7xl items-center justify-center px-6 py-20 text-center sm:px-10">
        <div className="max-w-3xl">
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-sm font-medium text-[var(--primary-green)]">
            <Link
              href="/"
              className="transition-colors duration-300 hover:text-[var(--primary-brown)]"
            >
              Home
            </Link>

            <span className="text-[var(--light-green)]">/</span>

            <span className="text-[var(--primary-brown)]">
              Contact
            </span>
          </div>

          <p className="animate-fade-up mt-8 text-sm font-bold uppercase tracking-[0.2em] text-[var(--light-green)]">
              We&apos;d Love to Hear From You
          </p>

          <h1 className="font-serif text-5xl font-semibold leading-[1.05] text-[#4a250e] sm:text-6xl lg:text-5xl animate-fade-up">
             Let&apos;s Start a
            <span className="block text-[var(--primary-green)]">
              Conversation
            </span>
          </h1>

          <div className="animate-fade-up mx-auto mt-6 h-[3px] w-16 rounded-full bg-[var(--primary-golden)]" />

          <p className="animate-fade-up mt-6 max-w-lg text-base leading-7 text-[#4d433c]">
           Whether you have a question, need accounting guidance, or want to
             book a consultation, our team is ready to help you with expert
             advice and personalized service.
          </p>
        </div>
      </div>
    </section>


  );
}