


import Link from "next/link";

import {
  CalendarDays,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

const quickLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Meet Our Team",
    href: "/team",
  },
  {
    name: "Careers",
    href: "/careers",
  },
  {
    name: "Open Positions",
    href: "/careers/open-positions",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

const footerServices = [
  {
    name: "Tax Solutions",
    href: "/services/tax-solutions",
  },
  {
    name: "Assurance Services",
    href: "/services/assurance-services",
  },
  {
    name: "Payroll Solutions",
    href: "/services/payroll-solutions",
  },
  {
    name: "Business Advisory",
    href: "/services/business-advisory",
  },
  {
    name: "AI Integration",
    href: "/services/ai-integration",
  },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "#",
    icon: FaFacebookF,
  },
  {
    label: "Instagram",
    href: "#",
    icon: FaInstagram,
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: FaLinkedinIn,
  },
  {
    label: "X",
    href: "#",
    icon: FaXTwitter,
  },
];

function Footer() {
  return (
    <footer className="bg-[var(--primary-green)] px-5 pb-8 pt-14 text-white lg:px-10">
      <div className="mx-auto grid max-w-[1280px] gap-12 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr_1.2fr_1.25fr]">
        {/* Brand */}
        <div>
          <Link href="/" className="flex w-fit items-center gap-3">
            <div className="font-serif text-4xl font-semibold text-[#f5e088]">
              H&amp;C
            </div>

            <div>
              <p className="font-serif text-lg font-semibold">
                HAKIMI &amp; CO
              </p>

              <p className="text-[10px] tracking-[0.25em]">
                ACCOUNTING
              </p>
            </div>
          </Link>

          <p className="mt-5 max-w-xs text-sm leading-6 text-white/75">
            Professional. Reliable. Dedicated to your financial success.
          </p>

          <div className="mt-6 flex gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target={social.href !== "#" ? "_blank" : undefined}
                  rel={
                    social.href !== "#"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="flex h-9 w-9 items-center justify-center rounded-md border border-white/40 transition duration-300 hover:-translate-y-1 hover:border-[#e6c200] hover:bg-[#e6c200] hover:text-[#3d210f]"
                >
                  <Icon size={17} />
                </Link>
              );
            })}
          </div>
        </div>

        <FooterColumn
          title="Quick Links"
          links={quickLinks}
        />

        <FooterColumn
          title="Services"
          links={footerServices}
        />

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-[#f5e088]">
            Contact Us
          </h3>

          <div className="mt-5 space-y-4 text-sm text-white/80">
            <FooterContact
              icon={Phone}
              text="(905) 123-4567"
              href="tel:+19051234567"
            />

            <FooterContact
              icon={Mail}
              text="info@hakimiandco.com"
              href="mailto:info@hakimiandco.com"
            />

            <FooterContact
              icon={MapPin}
              text="123 Business Rd, Suite 200, Vaughan, ON"
              href="https://maps.google.com"
            />

            <FooterContact
              icon={CalendarDays}
              text="Mon – Fri: 9:00 AM – 5:00 PM"
            />
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold text-[#f5e088]">
            Newsletter
          </h3>

          <p className="mt-5 text-sm leading-6 text-white/75">
            Stay updated with the latest financial tips and insights.
          </p>

          <form className="mt-5 flex overflow-hidden rounded-md bg-white">
            <label htmlFor="footer-email" className="sr-only">
              Email address
            </label>

            <input
              id="footer-email"
              name="email"
              type="email"
              required
              placeholder="Your email address"
              className="min-w-0 flex-1 px-4 py-3 text-sm text-[#3d210f] outline-none placeholder:text-[#8b817a]"
            />

            <button
              type="submit"
              aria-label="Subscribe"
              className="flex w-12 items-center justify-center bg-[#e6c200] text-[#3d210f] transition hover:bg-[#d4b000]"
            >
              <Send size={17} />
            </button>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mx-auto mt-12 flex max-w-[1280px] flex-col justify-between gap-4 border-t border-white/15 pt-6 text-xs text-white/65 sm:flex-row">
        <p>
          © 2026 Hakimi &amp; Co Accounting. All Rights Reserved.
        </p>

        <div className="flex gap-6">
          <Link
            href="/privacy"
            className="transition hover:text-[#f5e088]"
          >
            Privacy Policy
          </Link>

          <Link
            href="/terms"
            className="transition hover:text-[#f5e088]"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}

type FooterLink = {
  name: string;
  href: string;
};

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: FooterLink[];
}) {
  return (
    <div>
      <h3 className="font-semibold text-[#f5e088]">
        {title}
      </h3>

      <div className="mt-5 flex flex-col gap-3 text-sm text-white/75">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="w-fit transition duration-300 hover:translate-x-1 hover:text-[#f5e088]"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

function FooterContact({
  icon: Icon,
  text,
  href,
}: {
  icon: typeof Phone;
  text: string;
  href?: string;
}) {
  const content = (
    <>
      <Icon
        size={17}
        className="mt-0.5 shrink-0 text-[#f5e088]"
      />

      <span className="leading-6">{text}</span>
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={
          href.startsWith("http")
            ? "noopener noreferrer"
            : undefined
        }
        className="flex gap-3 transition hover:text-[#f5e088]"
      >
        {content}
      </Link>
    );
  }

  return <div className="flex gap-3">{content}</div>;
}

export default Footer;
