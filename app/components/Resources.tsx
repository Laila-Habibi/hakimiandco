
import Image from 'next/image'
import Link from 'next/link';

import {
  ArrowRight,
  Check,
  
} from "lucide-react";

const resources = [
  "Real-time financial reporting",
  "Secure cloud storage",
  "Automated invoicing and payments",
  "Access anywhere, anytime",
  "Reduced paperwork",
  "Better team collaboration",
];



function Resources() {
  return (
    <section className="relative px-5 py-20 lg:px-10">
      <div className="mx-auto grid max-w-[1320px] items-center gap-12 lg:grid-cols-[0.75fr_1.25fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.17em] text-[#80ab7e]">
            Cloud Accounting
          </p>

          <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight lg:text-4xl">
            Smarter Accounting
            <br />
            with the Cloud
          </h2>

          <div className="mt-4 h-[3px] w-14 rounded-full bg-[#ffdb11]" />

          <p className="mt-6 max-w-lg text-base leading-7 text-[#554b44]">
            Access your financial information in real time, streamline your
            processes and make better decisions faster.
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {resources.map((feature) => (
              <div key={feature} className="flex items-center gap-2 text-sm">
                <Check size={18} strokeWidth={3} className="text-[#6e913d]" />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <Link
            href="/services/cloud-accounting"
            className="mt-8 inline-flex items-center gap-3 rounded-lg border border-[#80ab7e] px-5 py-3 text-sm font-semibold text-[#557b3f] transition hover:bg-[#80ab7e] hover:text-white"
          >
            Learn More About Cloud Accounting
            <ArrowRight size={17} />
          </Link>
        </div>

        <div className="relative min-h-[390px]">
          <Image
            src="/images/cloud-accounting2.png"
            alt="Cloud accounting dashboard displayed on a laptop and smartphone"
            fill
            className="object-contain"
          />
        </div>
      </div>

      <div className="mx-auto mt-5 flex max-w-xl flex-wrap items-center justify-center gap-8 text-lg font-bold">
        <span className="text-[#4c9f38]">QuickBooks</span>
        <span className="text-[#36aada]">Xero</span>
        <span className="text-[#23b13c]">Sage</span>
      </div>
    </section>
  );
}

export default Resources