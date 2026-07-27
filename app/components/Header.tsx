
import Link from "next/link";
import { usePathname } from "next/navigation";



import {
  CalendarDays,
  ChevronDown,
  X,
  Menu
} from "lucide-react";


const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Industries", href: "/industries" },
  { name: "Resources", href: "/resources" },
  { name: "Contact", href: "/contact" },
];

function Header({
  mobileMenuOpen,
  setMobileMenuOpen,
}: {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}) {

  const pathname = usePathname();
  

  return (
    <header className="relative z-50 border-b border-[#f5e088]/40 bg-[#fffdf7]">
      <nav className="mx-auto flex min-h-20 max-w-[1440px] items-center justify-between px-5 lg:px-10">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative text-4xl font-serif font-semibold leading-none text-[#6e913d]">
            H
            <span className="absolute bottom-0 left-4 text-[var(--primary-golden)]">&</span>
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
            className="border-b-2 border-[var(--primary-green)] py-7 text-[#3d210f]"
          >
            Home
          </Link>

          <Link href="/about" className="transition hover:text-[var(--primary-green)]">
            About
          </Link>

          <Link
            href="/services"
            className="flex items-center gap-1 transition hover:text-[var(--primary-green)]"
          >
            Services
            <ChevronDown size={15} />
          </Link>

          <Link href="/industries" className="transition hover:text-[var(--primary-green)]">
            Industries
          </Link>

          <Link href="/resources" className="transition hover:text-[var(--primary-green)]">
            Resources
          </Link>

          <Link href="/contact" className="transition hover:text-[var(--primary-green)]">
            Contact
          </Link>
        </div> 
        {/* <div className="hidden items-center gap-9 text-sm font-medium lg:flex">
  {navItems.map((item) => (
    <Link
      key={item.name}
      href={item.href}
      className={`
        relative py-7 transition duration-300
        hover:text-[var(--primary-green)]
        ${
          pathname === item.href
            ? "border-b-2 border-[var(--primary-green)] text-[var(--primary-green)]"
            : "text-[#3d210f]"
        }
      `}
    >
      <span className="flex items-center gap-1">
        {item.name}

        {item.name === "Services" && <ChevronDown size={15} />}
      </span>
    </Link>
  ))}
</div> */}

        <Link
          href="/contact"
          className="hidden items-center gap-3 rounded-lg bg-[#6e913d] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[var(--dark-green)] lg:flex"
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
          {/* <div className="flex flex-col gap-5 text-sm font-semibold">
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
              className="rounded-lg bg-[#6e913d] px-5 py-3 text-center text-white hover:bg-[var(--dark-green)]"
            >
              Book a Consultation
            </Link>
          </div> */}
          <div className="flex flex-col gap-5 text-sm font-semibold">
  {navItems.map((item) => (
    <Link
      key={item.name}
      href={item.href}
      onClick={() => setMobileMenuOpen(false)}
      className={`
        transition duration-300
        hover:text-[var(--primary-green)]
        ${
          pathname === item.href
            ? "text-[var(--primary-green)]"
            : "text-[#3d210f]"
        }
      `}
    >
      {item.name}
    </Link>
  ))}

  <Link
    href="/contact"
    className="rounded-lg bg-[var(--primary-green)] px-5 py-3 text-center text-white transition hover:bg-[var(--dark-green)]"
  >
    Book a Consultation
  </Link>
</div>
        </div>
      )} 

      
    </header>
  );
}

export default Header