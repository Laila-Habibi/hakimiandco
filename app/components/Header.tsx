
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
    <header className="relative z-50 border-b border-[#f5e088]/40 bg-[#fffdf7]">
      <nav className="mx-auto flex min-h-20 max-w-[1440px] items-center justify-between px-5 lg:px-10">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative font-serif text-4xl font-semibold leading-none text-[#6e913d]">
            H

            <span className="absolute bottom-0 left-4 text-[var(--primary-golden)]">
              &amp;
            </span>

            <span className="ml-1">C</span>
          </div>

          <div>
            <p className="font-serif text-xl font-semibold tracking-wide text-[#3d210f]">
              HAKIMI &amp; CO
            </p>

            <p className="text-[10px] font-semibold tracking-[0.3em] text-[#80ab7e]">
              ACCOUNTING
            </p>
          </div>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-9 text-sm font-medium lg:flex">
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
                        : "border-transparent text-[#3d210f] hover:border-[var(--primary-green)] hover:text-[var(--primary-green)]"
                    }`}
                  >
                    {item.name}

                    <ChevronDown
                      size={15}
                      className="transition-transform duration-300 group-hover:rotate-180"
                    />
                  </button>

                  {/* Desktop services dropdown */}
                  <div className="invisible absolute left-1/2 top-full w-64 -translate-x-1/2 translate-y-3 rounded-xl border border-[#80ab7e]/25 bg-[#fffdf7] p-2 opacity-0 shadow-[0_18px_45px_rgba(133,77,27,0.12)] transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    {item.children.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className={`block rounded-lg px-4 py-3 transition ${
                          isActive(service.href)
                            ? "bg-[#80ab7e]/12 text-[var(--primary-green)]"
                            : "text-[#554b44] hover:bg-[#80ab7e]/10 hover:text-[var(--primary-green)]"
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
                    : "border-transparent text-[#3d210f] hover:border-[var(--primary-green)] hover:text-[var(--primary-green)]"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* Consultation button */}
       <Link
  href="https://calendar.app.google/eHYgEx7mxkgmNMoi9"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-3 rounded-lg bg-[var(--primary-green)] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[var(--dark-green)]"
>
  Book a Consultation
  <CalendarDays size={18} />
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
          className="rounded-md border border-[#854d1b]/20 p-2 text-[#3d210f] lg:hidden"
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <div className="absolute left-0 right-0 top-full border-t border-[#f5e088] bg-[#fffdf7] px-6 py-6 shadow-xl lg:hidden">
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
                          : "text-[#3d210f] hover:text-[var(--primary-green)]"
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
                      <div className="ml-3 border-l border-[#80ab7e]/30 pl-4">
                        {item.children.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            onClick={closeMobileMenu}
                            className={`block py-2.5 font-medium transition ${
                              isActive(service.href)
                                ? "text-[var(--primary-green)]"
                                : "text-[#66574d] hover:text-[var(--primary-green)]"
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
                      : "text-[#3d210f] hover:text-[var(--primary-green)]"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

            <Link
              href="/contact"
              onClick={closeMobileMenu}
              className="mt-3 rounded-lg bg-[var(--primary-green)] px-5 py-3 text-center text-white transition hover:bg-[var(--dark-green)]"
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