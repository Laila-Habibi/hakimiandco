// "use client";


// import Header from "./components/Header";
// import Hero from "./components/Hero";
// import Services from "./components/Services";
// import About from "./components/About";
// import Industries from "./components/Industries";
// import Resources from "./components/Resources";
// import Testimonials from "./components/Testimonials";
// import CTA from "./components/CTA";
// import Footer from "./components/Footer";



// export default function HomePage() {


//   return (


//   <main className="min-h-screen overflow-hidden bg-white text-[#102a4c]">
//   <Header/>
//   <Hero/>
//   <Services/>
//   <About/>
//   <Industries/>
//   <Resources/>
//   <Testimonials/>
//   <CTA/>
//   <Footer/>
//   </main>

  
//   );
// }

"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  CalendarDays,
  Check,
  ChevronDown,
  ClipboardCheck,
  CloudUpload,
  // Facebook,
  Heart,
  // Instagram,
  // Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Quote,
  Send,
  ShieldCheck,
  TrendingUp,
  Users,
  X,
} from "lucide-react";
import { useState } from "react";

const services = [
  {
    title: "Tax Services",
    description:
      "Tax planning, preparation and filing for individuals and businesses.",
    icon: ClipboardCheck,
  },
  {
    title: "Assurance Services",
    description:
      "Audit, review and compilation services to ensure accuracy and transparency.",
    icon: ClipboardCheck,
  },
  {
    title: "Risk Management",
    description:
      "Identify risks and implement strategies to protect your business and improve performance.",
    icon: ShieldCheck,
  },
  {
    title: "Business Advisory",
    description:
      "Strategic guidance to help you grow, improve efficiency and make better financial decisions.",
    icon: TrendingUp,
  },
  {
    title: "Cloud Accounting",
    description:
      "Cloud-based bookkeeping and real-time financial reporting, anytime and anywhere.",
    icon: CloudUpload,
  },
];

const advantages = [
  {
    title: "Experienced Professionals",
    description: "Our team has years of experience across a wide range of industries.",
    icon: Users,
  },
  {
    title: "Integrity & Confidentiality",
    description: "We uphold the highest standards of integrity and data security.",
    icon: ShieldCheck,
  },
  {
    title: "Client-Focused Approach",
    description: "We listen, understand and tailor solutions to your unique needs.",
    icon: Users,
  },
  {
    title: "Modern & Efficient",
    description: "We use modern technology to deliver accurate and timely results.",
    icon: BarChart3,
  },
];

const statistics = [
  {
    value: "10+",
    label: "Years of Experience",
    icon: Users,
  },
  {
    value: "500+",
    label: "Happy Clients",
    icon: Users,
  },
  {
    value: "20+",
    label: "Industries Served",
    icon: BarChart3,
  },
  {
    value: "100%",
    label: "Commitment to Your Success",
    icon: Heart,
  },
];

const cloudFeatures = [
  "Real-time financial reporting",
  "Secure cloud storage",
  "Automated invoicing and payments",
  "Access anywhere, anytime",
  "Reduced paperwork",
  "Better collaboration",
];

const testimonials = [
  {
    quote:
      "Hakimi & Co has been an incredible partner for our business. Their attention to detail and professionalism give us peace of mind.",
    name: "Sarah M.",
    role: "Owner, Retail Business",
  },
  {
    quote:
      "They helped us streamline our accounting process and provided valuable insights that improved our financial performance.",
    name: "David R.",
    role: "CEO, Construction Company",
  },
  {
    quote:
      "The team is responsive, knowledgeable and always goes above and beyond to support our needs.",
    name: "James L.",
    role: "Startup Founder",
  },
];

const quickLinks = [
  "Home",
  "About",
  "Services",
  "Industries",
  "Resources",
  "Contact",
];

const footerServices = [
  "Tax Services",
  "Assurance Services",
  "Risk Management",
  "Business Advisory",
  "Cloud Accounting",
  "Bookkeeping",
];

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="overflow-hidden bg-[#fffdf7] text-[#3d210f]">
      <Header
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <HeroSection />

      <ServicesSection />

      <AboutSection />

      <StatisticsSection />

      <CloudAccountingSection />

      <TestimonialsSection />

      <ConsultationSection />

      <Footer />
    </main>
  );
}

function Header({
  mobileMenuOpen,
  setMobileMenuOpen,
}: {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}) {
  return (
    <header className="relative z-50 border-b border-[#f5e088]/40 bg-[#fffdf7]">
      <nav className="mx-auto flex min-h-20 max-w-[1440px] items-center justify-between px-5 lg:px-10">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative text-4xl font-serif font-semibold leading-none text-[#854d1b]">
            H
            <span className="absolute bottom-0 left-4 text-[#f19f28]">&</span>
            <span className="ml-1">C</span>
          </div>

          <div>
            <p className="font-serif text-xl font-semibold tracking-wide text-[#3d210f]">
              HAKIMI & CO
            </p>
            <p className="text-[10px] font-semibold tracking-[0.3em] text-[#80ab7e]">
              ACCOUNTING
            </p>
          </div>
        </Link>

        <div className="hidden items-center gap-9 text-sm font-medium lg:flex">
          <Link
            href="/"
            className="border-b-2 border-[#f19f28] py-7 text-[#3d210f]"
          >
            Home
          </Link>

          <Link href="/about" className="transition hover:text-[#f19f28]">
            About
          </Link>

          <Link
            href="/services"
            className="flex items-center gap-1 transition hover:text-[#f19f28]"
          >
            Services
            <ChevronDown size={15} />
          </Link>

          <Link href="/industries" className="transition hover:text-[#f19f28]">
            Industries
          </Link>

          <Link href="/resources" className="transition hover:text-[#f19f28]">
            Resources
          </Link>

          <Link href="/contact" className="transition hover:text-[#f19f28]">
            Contact
          </Link>
        </div>

        <Link
          href="/contact"
          className="hidden items-center gap-3 rounded-lg bg-[#e7650d] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#854d1b] lg:flex"
        >
          Book a Consultation
          <CalendarDays size={17} />
        </Link>

        <button
          type="button"
          aria-label="Open navigation menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="rounded-md border border-[#854d1b]/20 p-2 lg:hidden"
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="absolute left-0 right-0 top-full border-t border-[#f5e088] bg-[#fffdf7] px-6 py-6 shadow-xl lg:hidden">
          <div className="flex flex-col gap-5 text-sm font-semibold">
            {["Home", "About", "Services", "Industries", "Resources", "Contact"].map(
              (item) => (
                <Link
                  key={item}
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </Link>
              ),
            )}

            <Link
              href="/contact"
              className="rounded-lg bg-[#e7650d] px-5 py-3 text-center text-white"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-[610px] bg-[#fff9e8]">
      <div className="absolute left-0 top-0 h-full w-24 opacity-50">
        <BotanicalDecoration />
      </div>

      <div className="mx-auto grid max-w-[1440px] lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative z-10 flex items-center px-6 py-20 lg:px-16 lg:py-24">
          <div className="max-w-xl">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-[#80ab7e]">
              Trusted. Experienced. Reliable.
            </p>

            <h1 className="font-serif text-5xl font-semibold leading-[1.05] text-[#4a250e] sm:text-6xl lg:text-5xl">
              Reliable Financial Solutions for Your{" "}
              <span className="text-[#6e913d]">Business</span>
            </h1>

            <div className="mt-5 h-[3px] w-14 rounded-full bg-[#ffdb11]" />

            <p className="mt-6 max-w-lg text-base leading-7 text-[#4d433c]">
              Hakimi & Co provides professional tax, assurance, risk, advisory
              and cloud accounting services to help individuals and businesses
              make confident financial decisions.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 rounded-lg bg-[#e7650d] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#854d1b]"
              >
                <CalendarDays size={18} />
                Book a Consultation
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-3 rounded-lg border border-[#e7650d] px-6 py-4 text-sm font-semibold text-[#e7650d] transition hover:bg-[#e7650d] hover:text-white"
              >
                Explore Our Services
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>

        <div className="relative min-h-[450px] lg:min-h-[610px]">
          <div className="absolute inset-y-0 left-0 z-10 hidden w-33 bg-gradient-to-r from-[#fff9e8] to-transparent lg:block" />

          <Image
            src="/images/accounting-hero2.png"
            alt="Laptop displaying accounting charts on an office desk"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#fff9e8]/20 to-transparent" />
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="relative px-5 py-20 lg:px-10">
      <div className="absolute right-0 top-36 hidden w-24 opacity-40 lg:block">
        <BotanicalDecoration />
      </div>

      <div className="mx-auto max-w-[1380px]">
        <SectionHeading
          eyebrow="Our Services"
          title="Comprehensive Accounting Solutions"
          description="We offer a full range of professional services tailored to your needs. Our goal is simple: to help you achieve clarity, compliance and long-term financial success."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group flex min-h-[340px] flex-col items-center rounded-xl border border-[#f19f28]/30 bg-white px-6 py-8 text-center shadow-[0_10px_40px_rgba(133,77,27,0.05)] transition hover:-translate-y-2 hover:shadow-[0_18px_45px_rgba(133,77,27,0.12)]"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#f5e088]/25">
                  <Icon
                    size={39}
                    strokeWidth={1.5}
                    className="text-[#854d1b]"
                  />
                </div>

                <h3 className="mt-6 font-serif text-xl font-semibold">
                  {service.title}
                </h3>

                <p className="mt-4 flex-1 text-sm leading-6 text-[#554b44]">
                  {service.description}
                </p>

                <Link
                  href="/services"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#e7650d]"
                >
                  Learn More
                  <ArrowRight
                    size={16}
                    className="transition group-hover:translate-x-1"
                  />
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="relative bg-[#fffaf0]">
      <div className="mx-auto grid max-w-[1440px] lg:grid-cols-2">
        <div className="relative min-h-[460px]">
          <Image
            src="/images/hakimi-office.png"
            alt="Hakimi and Co accounting office"
            fill
            className="object-cover"
          />
        </div>

        <div className="flex items-center px-6 py-16 lg:px-16">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.17em] text-[#80ab7e]">
              About Hakimi & Co
            </p>

            <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight lg:text-4xl">
              Partners in Your Financial Success
            </h2>

            <div className="mt-4 h-[3px] w-14 rounded-full bg-[#ffdb11]" />

            <p className="mt-6 text-base leading-7 text-[#554b44]">
              At Hakimi & Co, we combine expertise, technology and a
              client-focused approach to deliver financial solutions that truly
              make a difference.
            </p>

            <div className="mt-9 grid gap-x-8 gap-y-8 sm:grid-cols-2">
              {advantages.map((advantage) => {
                const Icon = advantage.icon;

                return (
                  <div key={advantage.title} className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#f5e088]/30">
                      <Icon size={23} className="text-[#6e913d]" />
                    </div>

                    <div>
                      <h3 className="text-sm font-bold">{advantage.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-[#5c524c]">
                        {advantage.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatisticsSection() {
  return (
    <section className="bg-[#718c39] px-5 py-7 text-white">
      <div className="mx-auto grid max-w-[1320px] gap-7 sm:grid-cols-2 lg:grid-cols-4">
        {statistics.map((statistic, index) => {
          const Icon = statistic.icon;

          return (
            <div
              key={statistic.label}
              className={`flex items-center justify-center gap-4 py-2 ${
                index !== statistics.length - 1
                  ? "lg:border-r lg:border-white/25"
                  : ""
              }`}
            >
              <Icon size={39} strokeWidth={1.5} className="text-[#ffdb11]" />

              <div>
                <p className="text-3xl font-semibold text-[#ffdb11]">
                  {statistic.value}
                </p>
                <p className="mt-1 text-xs">{statistic.label}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function CloudAccountingSection() {
  return (
    <section className="relative px-5 py-20 lg:px-10">
      <div className="mx-auto grid max-w-[1320px] items-center gap-12 lg:grid-cols-[0.75fr_1.25fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.17em] text-[#e7650d]">
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
            {cloudFeatures.map((feature) => (
              <div key={feature} className="flex items-center gap-2 text-sm">
                <Check size={18} strokeWidth={3} className="text-[#f19f28]" />
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

function TestimonialsSection() {
  return (
    <section className="relative bg-[#fffaf0] px-5 py-20 lg:px-10">
      <div className="mx-auto max-w-[1260px]">
        <SectionHeading
          eyebrow="Client Testimonials"
          title="What Our Clients Say"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="rounded-xl border border-[#f19f28]/30 bg-white p-7 shadow-[0_10px_35px_rgba(133,77,27,0.05)]"
            >
              <Quote
                size={37}
                fill="currentColor"
                className="text-[#ffdb11]"
              />

              <p className="mt-5 text-sm leading-7 text-[#554b44]">
                {testimonial.quote}
              </p>

              <div className="mt-6">
                <p className="text-sm font-bold">— {testimonial.name}</p>
                <p className="mt-1 text-xs text-[#6e655f]">{testimonial.role}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-center gap-2">
          <span className="h-2 w-8 rounded-full bg-[#f19f28]" />
          <span className="h-2 w-3 rounded-full bg-[#f5e088]" />
          <span className="h-2 w-3 rounded-full bg-[#f5e088]" />
          <span className="h-2 w-3 rounded-full bg-[#f5e088]" />
        </div>
      </div>
    </section>
  );
}

function ConsultationSection() {
  return (
    <section className="relative overflow-hidden bg-[#ffdb11] px-5 py-9">
      <div className="absolute inset-0 bg-gradient-to-r from-[#f5e088] via-[#ffdb11] to-[#f19f28]/40" />

      <div className="relative mx-auto flex max-w-[1260px] flex-col items-center justify-between gap-7 lg:flex-row">
        <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:text-left">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#718c39] text-white">
            <CalendarDays size={31} />
          </div>

          <div>
            <h2 className="font-serif text-3xl font-semibold lg:text-3xl">
              Let&apos;s Make Your Finances Simpler
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-6">
              Schedule a consultation with our accounting professionals and take
              the first step toward financial clarity and growth.
            </p>
          </div>
        </div>

        <Link
          href="/contact"
          className="inline-flex shrink-0 items-center gap-4 rounded-lg bg-[#e7650d] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#854d1b]"
        >
          Schedule a Consultation
          <ArrowRight size={19} />
        </Link>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#542500] via-[#6a3105] to-[#3d1c00] px-5 pb-8 pt-14 text-white lg:px-10">
      <div className="mx-auto grid max-w-[1280px] gap-12 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr_1.2fr_1.25fr]">
        <div>
          <div className="flex items-center gap-3">
            <div className="text-4xl font-serif font-semibold text-[#f5e088]">
              H&C
            </div>

            <div>
              <p className="font-serif text-lg font-semibold">HAKIMI & CO</p>
              <p className="text-[10px] tracking-[0.25em]">ACCOUNTING</p>
            </div>
          </div>

          <p className="mt-5 max-w-xs text-sm leading-6 text-white/75">
            Professional. Reliable. Dedicated to your financial success.
          </p>

          <div className="mt-6 flex gap-3">
            {[Mail, Mail, Mail].map((Icon, index) => (
              <Link
                key={index}
                href="#"
                aria-label="Social media link"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-white/40 transition hover:bg-[#f19f28]"
              >
                <Icon size={17} />
              </Link>
            ))}
          </div>
        </div>

        <FooterColumn title="Quick Links" links={quickLinks} />
        <FooterColumn title="Services" links={footerServices} />

        <div>
          <h3 className="font-semibold text-[#f5e088]">Contact Us</h3>

          <div className="mt-5 space-y-4 text-sm text-white/80">
            <FooterContact icon={Phone} text="(905) 123-4567" />
            <FooterContact icon={Mail} text="info@hakimiandco.com" />
            <FooterContact
              icon={MapPin}
              text="123 Business Rd, Suite 200, Vaughan, ON"
            />
            <FooterContact
              icon={CalendarDays}
              text="Mon – Fri: 9:00 AM – 5:00 PM"
            />
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-[#f5e088]">Newsletter</h3>

          <p className="mt-5 text-sm leading-6 text-white/75">
            Stay updated with the latest financial tips and insights.
          </p>

          <form className="mt-5 flex overflow-hidden rounded-md bg-white">
            <input
              type="email"
              placeholder="Your email address"
              className="min-w-0 flex-1 px-4 py-3 text-sm text-[#3d210f] outline-none"
            />

            <button
              type="submit"
              aria-label="Subscribe"
              className="flex w-12 items-center justify-center bg-[#718c39]"
            >
              <Send size={17} />
            </button>
          </form>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-[1280px] flex-col justify-between gap-4 border-t border-white/15 pt-6 text-xs text-white/65 sm:flex-row">
        <p>© 2026 Hakimi & Co Accounting. All Rights Reserved.</p>

        <div className="flex gap-6">
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-bold uppercase tracking-[0.17em] text-[#e7650d]">
        {eyebrow}
      </p>

      <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight lg:text-4xl">
        {title}
      </h2>

      <div className="mx-auto mt-4 h-[3px] w-14 rounded-full bg-[#ffdb11]" />

      {description && (
        <p className="mt-5 text-sm leading-7 text-[#554b44]">{description}</p>
      )}
    </div>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: string[];
}) {
  return (
    <div>
      <h3 className="font-semibold text-[#f5e088]">{title}</h3>

      <div className="mt-5 flex flex-col gap-3 text-sm text-white/75">
        {links.map((link) => (
          <Link
            key={link}
            href={`/${link.toLowerCase().replaceAll(" ", "-")}`}
            className="transition hover:text-[#ffdb11]"
          >
            {link}
          </Link>
        ))}
      </div>
    </div>
  );
}

function FooterContact({
  icon: Icon,
  text,
}: {
  icon: typeof Phone;
  text: string;
}) {
  return (
    <div className="flex gap-3">
      <Icon size={17} className="mt-0.5 shrink-0 text-[#ffdb11]" />
      <span>{text}</span>
    </div>
  );
}

function BotanicalDecoration() {
  return (
    <svg
      viewBox="0 0 120 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
    >
      <path
        d="M15 565C30 480 35 400 24 316C14 240 28 170 75 70"
        stroke="#80ab7e"
        strokeWidth="2"
      />
      <path
        d="M29 442C62 419 81 384 92 345C58 360 38 390 29 442Z"
        stroke="#80ab7e"
        strokeWidth="2"
      />
      <path
        d="M26 350C3 321 1 286 11 250C34 273 39 310 26 350Z"
        stroke="#80ab7e"
        strokeWidth="2"
      />
      <path
        d="M36 258C69 242 89 216 102 184C68 191 47 217 36 258Z"
        stroke="#80ab7e"
        strokeWidth="2"
      />
      <path
        d="M52 181C30 151 31 121 42 91C64 115 66 145 52 181Z"
        stroke="#80ab7e"
        strokeWidth="2"
      />
    </svg>
  );
}

