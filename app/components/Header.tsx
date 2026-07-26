import Image from "next/image"
import { useState } from "react";

import {
  CalendarDays,
  ChevronDown,
  X,
  Menu
} from "lucide-react";



function Header() {

      const [menuOpen, setMenuOpen] = useState(false);

  return (
     <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <a href="#" className="flex items-center gap-3">
           <Image
    src="/images/hakimi-logo.png"
    alt="Hakimi & Co Accounting"
    width={230}
    height={70}
    priority
    className="h-16 w-auto object-contain py-4"
  />
           
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium lg:flex">
            <a
              href="#home"
              className="border-b-2 border-[#c99a45] py-2 text-[#102a4c]"
            >
              Home
            </a>

            <a
              href="#about"
              className="py-2 transition hover:text-[#c99a45]"
            >
              About
            </a>

            <a
              href="#services"
              className="flex items-center gap-1 py-2 transition hover:text-[#c99a45]"
            >
              Services
              <ChevronDown size={15} />
            </a>

            <a
              href="#our-people"
              className="py-2 transition hover:text-[#c99a45]"
            >
              Our Team
            </a>

            <a
              href="#careers"
              className="py-2 transition hover:text-[#c99a45]"
            >
              Careers
            </a>

            <a
              href="#contact"
              className="py-2 transition hover:text-[#c99a45]"
            >
              Contact
            </a>
          </nav>

          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-md bg-[#102a4c] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#173c68] lg:flex"
          >
            <CalendarDays size={17} />
            Book a Consultation
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-md border border-slate-200 p-2 lg:hidden"
            aria-label="Open navigation menu"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen && (
          <nav className="border-t border-slate-100 bg-white px-5 py-5 lg:hidden">
            <div className="flex flex-col gap-4 text-sm font-medium">
              {[
                ["Home", "#home"],
                ["About", "#about"],
                ["Services", "#services"],
                ["Industries", "#industries"],
                ["Resources", "#resources"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-slate-100 pb-3"
                >
                  {label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </header>
  )
}

export default Header