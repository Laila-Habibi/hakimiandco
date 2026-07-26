
import Image from 'next/image'


import {
  ArrowRight,
  Check,
  
} from "lucide-react";

const cloudFeatures = [
  "Real-time financial reporting",
  "Secure cloud storage",
  "Automated invoicing and payments",
  "Access anywhere, anytime",
  "Reduced paperwork",
  "Better team collaboration",
];



function Resources() {
  return (
    <section
        id="resources"
        className="overflow-hidden bg-white px-5 py-20 lg:px-8"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c28a2d]">
              Cloud Accounting
            </p>

            <h2 className="mt-3 max-w-lg font-serif text-3xl font-bold leading-tight sm:text-4xl">
              Smarter Accounting with the Cloud
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600">
              Access your financial information in real time, streamline your
              processes and make better business decisions from anywhere.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {cloudFeatures.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 text-sm text-slate-700"
                >
                  <Check size={17} className="shrink-0 text-[#c28a2d]" />
                  {feature}
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="mt-9 inline-flex items-center gap-2 rounded-md border border-[#102a4c] px-6 py-3 text-sm font-semibold transition hover:bg-[#102a4c] hover:text-white"
            >
              Learn More About Cloud Accounting
              <ArrowRight size={16} />
            </a>
          </div>

          <div>
            <div className="relative mx-auto aspect-[4/3] w-full max-w-xl">
              <Image
                src="/images/cloud2.png"
                alt="Cloud accounting dashboard displayed on multiple devices"
                fill
                className="object-contain"
              />
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-7 text-lg font-bold text-slate-500">
              <span>QuickBooks</span>
              <span>Xero</span>
              <span>Sage</span>
            </div>
          </div>
        </div>
      </section> 
  )
}

export default Resources