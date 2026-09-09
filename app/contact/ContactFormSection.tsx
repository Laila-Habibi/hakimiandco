import Image from "next/image";
import Link from "next/link";
import SectionHeading from "../components/SectionHeading";



import {
  ArrowRight,
  Mail,
  Phone,
  Tag,
  UserRound,
} from "lucide-react";




export default function ContactFormSection() {
  return (
    <section className="px-6 pb-16 sm:px-10 lg:pb-20">
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[28px] border border-[var(--primary-brown)]/10 bg-[var(--surface-cream)] shadow-sm lg:grid-cols-[54%_46%]">
        <div className="relative px-6 py-10 sm:px-10 lg:px-12 lg:py-14">
          <div className="pointer-events-none absolute -bottom-24 right-0 opacity-20">
          
          </div>

          <div className="relative z-10">
            <SectionHeading
            eyebrow="Send Us a Message"
            title="We&apos;ll Get Back to You"
            align="left"
            />
           

            <form className="mt-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <FormField
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  icon={UserRound}
                />

                <FormField
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  icon={Mail}
                />

                <FormField
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  icon={Phone}
                />

                <FormField
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Subject"
                  icon={Tag}
                />
              </div>

              <div className="relative mt-4">
                <Mail
                  size={18}
                  strokeWidth={1.6}
                  className="absolute left-4 top-4 text-[var(--light-green)]"
                />

                <label htmlFor="message" className="sr-only">
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="How can we help you?"
                  required
                  className="w-full resize-none rounded-lg border border-[var(--primary-brown)]/15 bg-[var(--surface)] py-4 pl-12 pr-4 text-sm text-[var(--primary-brown)] outline-none transition placeholder:text-[var(--text-placeholder)] focus:border-[var(--light-green)] focus:ring-2 focus:ring-[var(--light-green)]/15"
                />
              </div>

              <label className="mt-5 flex cursor-pointer items-start gap-3 text-xs leading-5 text-[var(--text-muted)]">
                <input
                  type="checkbox"
                  required
                  className="mt-0.5 h-4 w-4 rounded border-[var(--primary-brown)]/25 accent-[var(--dark-green)]"
                />

                <span>
                  I agree to the{" "}
                  <Link
                    href="/privacy"
                    className="font-semibold text-[var(--primary-green)] hover:underline"
                  >
                    privacy policy
                  </Link>
                  .
                </span>
              </label>

              <button
                type="submit"
                className="group mt-6 inline-flex items-center gap-4 rounded-md bg-[var(--primary-green)] px-7 py-4 text-sm font-semibold text-[var(--on-dark)] transition duration-300 hover:-translate-y-1 hover:bg-[var(--dark-green)] hover:shadow-lg"
              >
                Send Message

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </form>
          </div>
        </div>

        <div className="relative min-h-[480px] lg:min-h-full">
          <Image
            src="/images/contact-meeting-room.png"
            alt="Hakimi and Co meeting room"
            fill
            sizes="(min-width: 1024px) 46vw, 100vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[var(--overlay-green)]/15 to-transparent" />
        </div>
      </div>
    </section>
  );
}


interface FormFieldProps {
  id: string;
  name: string;
  type: string;
  placeholder: string;
  icon: typeof UserRound;
}



function FormField({
  id,
  name,
  type,
  placeholder,
  icon: Icon,
}: FormFieldProps) {
  return (
    <div className="relative">
      <Icon
        size={18}
        strokeWidth={1.6}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--light-green)]"
      />

      <label htmlFor={id} className="sr-only">
        {placeholder}
      </label>

      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        required
        className="h-14 w-full rounded-lg border border-[var(--primary-brown)]/15 bg-[var(--surface)] pl-12 pr-4 text-sm text-[var(--primary-brown)] outline-none transition placeholder:text-[var(--text-placeholder)] focus:border-[var(--light-green)] focus:ring-2 focus:ring-[var(--light-green)]/15"
      />
    </div>
  );
}