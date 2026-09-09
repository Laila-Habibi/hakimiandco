
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
      "172 Britannia Avenue East",
      "Oshawa, Canada",
    ],
  },
  {
    icon: Phone,
    title: "Phone",
    lines: ["+1 (647) 226 2492"],
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["info@hakimiandco.ca"],
  },
  {
    icon: Clock3,
    title: "Business Hours",
    lines: ["Tuesday – Thursday", "9:00 AM – 5:00 PM"],
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
                className="group rounded-2xl border border-[var(--primary-brown)]/15 bg-[var(--surface)] px-6 py-8 text-center transition duration-300 hover:-translate-y-1 hover:border-[var(--light-green)]/45 hover:shadow-xl hover:shadow-[var(--dark-green)]/5"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[var(--surface-green)] text-[var(--primary-green)] transition duration-300 group-hover:scale-105">
                  <Icon size={29} strokeWidth={1.6} />
                </div>

                <h3 className="mt-6 font-serif text-xl font-semibold text-[var(--primary-brown)]">
                  {detail.title}
                </h3>

                <div className="mt-4 space-y-1 text-sm leading-6 text-[var(--text-body)]">
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