import Link from "next/link";
import SectionHeading from "../components/SectionHeading";


import {
  ArrowRight,
  MapPin,
} from "lucide-react";



export default function OfficeLocation() {
  return (
    <section className="px-6 pb-20 sm:px-10">
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[28px] bg-[var(--surface-muted)] lg:grid-cols-[58%_42%]">
        <div className="relative min-h-[310px]">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2872.2098437659947!2d-78.90774582398086!3d43.95502407108935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d51bbf914f952f%3A0x4424e224e79b011d!2s172%20Britannia%20Ave%20W%2C%20Oshawa%2C%20ON%20L1H%207K4!5e0!3m2!1sen!2sca!4v1785372941055!5m2!1sen!2sca"
           width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    className="absolute inset-0"
           >
          </iframe>
        

          <div className="absolute inset-0 bg-[var(--surface-warm)]/10" />

          <div className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-[var(--surface)] bg-[var(--primary-green)] text-[var(--on-dark)] shadow-xl">
            <MapPin size={25} fill="currentColor" />
          </div>
        </div>

        <div className="relative flex items-center px-7 py-10 sm:px-10 lg:px-12">
          <div className="pointer-events-none absolute -bottom-20 -right-12 opacity-20">
           
          </div>

          <div className="relative flex items-start gap-5">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[var(--surface-green)] text-[var(--primary-green)]">
              <MapPin size={29} strokeWidth={1.6} />
            </div>

            <div>
              <SectionHeading
              eyebrow=""
              title="Visit Our Office"
              description="Conveniently located in Oshawa, with easy access to public
                transit and nearby parking."
              align="left"
              />
            

              <Link
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="group mt-6 inline-flex items-center gap-3 rounded-md border border-[var(--primary-green)] px-5 py-3 text-sm font-semibold text-[var(--primary-green)] transition duration-300 hover:bg-[var(--primary-green)] hover:text-[var(--on-dark)]"
              >
                Get Directions

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}