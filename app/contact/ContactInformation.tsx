
import {
  Clock3,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import SectionHeading from "../components/SectionHeading";


const contactDetails = [
  {
    icon: MapPin,
    title: "Our Office",
    lines: [
      "1200 Sheppard Avenue East",
      "Suite 205, Toronto, ON",
      "M2K 1E3, Canada",
    ],
  },
  {
    icon: Phone,
    title: "Phone",
    lines: ["+1 (416) 555-1234", "+1 (647) 555-5678"],
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["info@hakimiandco.ca", "hello@hakimiandco.ca"],
  },
  {
    icon: Clock3,
    title: "Business Hours",
    lines: ["Monday – Friday", "9:00 AM – 5:00 PM", "Saturday – Sunday", "Closed"],
  },
];

export default function ContactInformation() {
  return (
    <section className="relative px-6 py-20 sm:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <SectionHeading
          eyebrow="Get in Touch"
          title="We&apos;re Here to Support You"
          />

        
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {contactDetails.map((detail) => {
            const Icon = detail.icon;

            return (
              <article
                key={detail.title}
                className="group rounded-2xl border border-[#854d1b]/15 bg-white px-6 py-8 text-center transition duration-300 hover:-translate-y-1 hover:border-[#80ab7e]/45 hover:shadow-xl hover:shadow-[#56742f]/5"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#f1f2e8] text-[var(--primary-green)] transition duration-300 group-hover:scale-105">
                  <Icon size={29} strokeWidth={1.6} />
                </div>

                <h3 className="mt-6 font-serif text-xl font-semibold text-[var(--primary-brown)]">
                  {detail.title}
                </h3>

                <div className="mt-4 space-y-1 text-sm leading-6 text-[#5c5048]">
                  {detail.lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}