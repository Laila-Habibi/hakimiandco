
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  CalendarDays,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

const serviceItems = [
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

const navItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Services",
    children: serviceItems,
  },
  {
    name: "Careers",
    href: "/careers",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

function Header({
  mobileMenuOpen,
  setMobileMenuOpen,
}: {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}) {
  const pathname = usePathname();
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const servicesActive = pathname.startsWith("/services/");

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--gold-highlight)]/50 bg-[var(--surface-cream)]/95 shadow-[0_6px_24px_color-mix(in_srgb,var(--primary-brown)_5%,transparent)] backdrop-blur-md">
      <nav className="mx-auto flex min-h-[82px] max-w-[1440px] items-center justify-between gap-2 px-3 sm:gap-5 sm:px-6 lg:px-10">
        {/* Logo */}
        <Link href="/" className="flex min-w-0 items-center gap-2.5 sm:gap-3.5">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[var(--gold-highlight)] bg-[var(--primary-green)] font-serif text-[22px] font-semibold leading-none tracking-[-0.12em] text-[var(--primary-golden)] shadow-[0_5px_14px_color-mix(in_srgb,var(--primary-green)_18%,transparent)] sm:h-12 sm:w-12 sm:text-2xl">
            <span className="-translate-x-0.5">WH</span>
          </div>

          <div className="min-w-0 leading-none">
            <p className="font-serif text-[15px] font-bold tracking-[0.015em] text-[var(--primary-brown)] sm:text-base lg:text-[17px]">
              Waiza Hakimi
            </p>

            <p className="mt-1 font-serif text-[9px] font-medium tracking-[0.07em] text-[var(--text-muted)] sm:text-[10px] lg:text-[11px]">
              Professional Corporation
            </p>

            <p className="mt-1.5 hidden text-[7px] font-bold uppercase tracking-[0.13em] text-[var(--dark-green)] sm:block sm:text-[8px] lg:text-[9px]">
              Chartered Professional Accountant
            </p>
          </div>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-5 text-[13px] font-medium xl:gap-8 xl:text-sm lg:flex">
          {navItems.map((item) => {
            if (item.children) {
              return (
                <div key={item.name} className="group relative">
                  {/* Services is intentionally a button, not a link */}
                  <button
                    type="button"
                    aria-haspopup="menu"
                    className={`flex items-center gap-1 border-b-2 py-7 transition-all duration-300 ${
                      servicesActive
                        ? "border-[var(--primary-green)] text-[var(--primary-green)]"
                        : "border-transparent text-[var(--primary-brown)] hover:border-[var(--primary-green)] hover:text-[var(--primary-green)]"
                    }`}
                  >
                    {item.name}

                    <ChevronDown
                      size={15}
                      className="transition-transform duration-300 group-hover:rotate-180"
                    />
                  </button>

                  {/* Desktop services dropdown */}
                  <div className="invisible absolute left-1/2 top-full w-64 -translate-x-1/2 translate-y-3 rounded-xl border border-[var(--light-green)]/25 bg-[var(--surface-cream)] p-2 opacity-0 shadow-[0_18px_45px_color-mix(in_srgb,var(--primary-brown)_12%,transparent)] transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    {item.children.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className={`block rounded-lg px-4 py-3 transition ${
                          isActive(service.href)
                            ? "bg-[var(--light-green)]/12 text-[var(--primary-green)]"
                            : "text-[var(--text-body)] hover:bg-[var(--light-green)]/10 hover:text-[var(--primary-green)]"
                        }`}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            if (!item.href) {
              return null;
            }

            const active = isActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`border-b-2 py-7 transition-all duration-300 ${
                  active
                    ? "border-[var(--primary-green)] text-[var(--primary-green)]"
                    : "border-transparent text-[var(--primary-brown)] hover:border-[var(--primary-green)] hover:text-[var(--primary-green)]"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* Desktop consultation button */}
        <Link
          href="https://calendar.app.google/1kMpAVJrn4d5XHKc8"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-3 rounded-lg bg-[var(--primary-green)] px-6 py-4 text-sm font-semibold text-[var(--on-dark)] transition hover:bg-[var(--dark-green)] lg:inline-flex"
        >
          Book a Consultation
          <CalendarDays size={18} />
        </Link>

        {/* Compact, tap-friendly booking button on mobile */}
        <Link
          href="https://calendar.app.google/1kMpAVJrn4d5XHKc8"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Book a consultation"
          title="Book a consultation"
          className="ml-auto inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[var(--primary-green)] text-[var(--on-dark)] transition hover:bg-[var(--dark-green)] lg:hidden"
        >
          <CalendarDays size={19} />
          <span className="sr-only">Book a Consultation</span>
        </Link>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={
            mobileMenuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="rounded-md border border-[var(--primary-brown)]/20 p-2 text-[var(--primary-brown)] lg:hidden"
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <div className="absolute left-0 right-0 top-full border-t border-[var(--gold-highlight)] bg-[var(--surface-cream)] px-6 py-6 shadow-xl lg:hidden">
          <div className="flex flex-col gap-2 text-sm font-semibold">
            {navItems.map((item) => {
              if (item.children) {
                return (
                  <div key={item.name}>
                    {/* Services is one expandable button */}
                    <button
                      type="button"
                      aria-label="Toggle services menu"
                      aria-expanded={mobileServicesOpen}
                      onClick={() =>
                        setMobileServicesOpen(
                          (previous) => !previous,
                        )
                      }
                      className={`flex w-full items-center justify-between py-3 text-left transition duration-300 ${
                        servicesActive
                          ? "text-[var(--primary-green)]"
                          : "text-[var(--primary-brown)] hover:text-[var(--primary-green)]"
                      }`}
                    >
                      <span>{item.name}</span>

                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-300 ${
                          mobileServicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {mobileServicesOpen && (
                      <div className="ml-3 border-l border-[var(--light-green)]/30 pl-4">
                        {item.children.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            onClick={closeMobileMenu}
                            className={`block py-2.5 font-medium transition ${
                              isActive(service.href)
                                ? "text-[var(--primary-green)]"
                                : "text-[var(--text-muted)] hover:text-[var(--primary-green)]"
                            }`}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              if (!item.href) {
                return null;
              }

              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className={`py-3 transition duration-300 ${
                    active
                      ? "text-[var(--primary-green)]"
                      : "text-[var(--primary-brown)] hover:text-[var(--primary-green)]"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

            <Link
              href="https://calendar.app.google/1kMpAVJrn4d5XHKc8"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobileMenu}
              className="mt-3 rounded-lg bg-[var(--primary-green)] px-5 py-3 text-center text-[var(--on-dark)] transition hover:bg-[var(--dark-green)]"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
