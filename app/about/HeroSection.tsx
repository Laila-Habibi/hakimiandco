import Image from "next/image";
import Link from "next/link";

export default function AboutHero() {
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
        <LeafIllustration />
      </div>

      {/* Right botanical decoration */}
      <div className="pointer-events-none absolute -right-14 bottom-[-90px] hidden rotate-180 opacity-20 sm:block">
        <LeafIllustration />
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
              About Us
            </span>
          </div>

          <p className="animate-fade-up mt-8 text-sm font-bold uppercase tracking-[0.2em] text-[var(--light-green)]">
            Get to Know Our Firm
          </p>

          <h1 className="animate-fade-up mt-4 font-serif text-4xl font-semibold leading-tight text-[var(--primary-brown)] sm:text-5xl">
            Built on Trust,
            <span className="block text-[var(--primary-green)]">
              Guided by Experience
            </span>
          </h1>

          <div className="animate-fade-up mx-auto mt-6 h-[3px] w-16 rounded-full bg-[var(--primary-golden)]" />

          <p className="animate-fade-up mx-auto mt-7 max-w-2xl text-base leading-8 text-[#5c5048]">
            Learn more about our values, our experience, and the people
            behind Hakimi &amp; Co.
          </p>
        </div>
      </div>
    </section>
  );
}

function LeafIllustration() {
  return (
    <svg
      width="220"
      height="280"
      viewBox="0 0 220 280"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M25 255C69 208 90 154 100 35"
        stroke="#56742f"
        strokeWidth="2"
      />

      <path
        d="M92 70C62 58 42 41 34 16C66 16 88 37 92 70Z"
        fill="#80ab7e"
      />

      <path
        d="M97 104C128 91 151 70 163 43C129 43 105 67 97 104Z"
        fill="#f5e088"
      />

      <path
        d="M80 139C48 128 26 107 15 80C49 81 73 104 80 139Z"
        fill="#80ab7e"
      />

      <path
        d="M69 180C100 172 126 153 142 128C108 125 81 145 69 180Z"
        fill="#f5e088"
      />

      <path
        d="M48 215C18 205 2 188 0 164C28 166 47 184 48 215Z"
        fill="#80ab7e"
      />
    </svg>
  );
}