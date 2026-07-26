
import {
  CalendarDays,
  Mail,
  MapPin,
  Phone,
 
} from "lucide-react";

const footerServices = [
  "Tax Services",
  "Assurance Services",
  "Risk Management",
  "Business Advisory",
  "Cloud Accounting",
  "Bookkeeping",
];


function Footer() {
  return (
      <footer id="contact" className="bg-[#08213d] text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#c99a45] font-serif text-xl font-bold">
                H<span className="text-[#c99a45]">&</span>C
              </div>

              <div>
                <p className="font-serif text-lg font-bold">HAKIMI & CO</p>
                <p className="text-[10px] tracking-[0.2em] text-slate-300">
                  ACCOUNTING
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-xs text-sm leading-6 text-slate-300">
              Professional, reliable and dedicated to your financial success.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold">Quick Links</h3>

            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              {["Home", "About Us", "Services", "Industries", "Resources", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <a href="#" className="transition hover:text-[#d4a34e]">
                      {link}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold">Services</h3>

            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              {footerServices.map((service) => (
                <li key={service}>
                  <a href="#services" className="transition hover:text-[#d4a34e]">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold">Contact Us</h3>

            <div className="mt-5 space-y-4 text-sm text-slate-300">
              <a
                href="tel:+19051234567"
                className="flex items-start gap-3 transition hover:text-white"
              >
                <Phone size={17} className="mt-0.5 text-[#d4a34e]" />
                (905) 123-4567
              </a>

              <a
                href="mailto:info@hakimiandco.com"
                className="flex items-start gap-3 transition hover:text-white"
              >
                <Mail size={17} className="mt-0.5 text-[#d4a34e]" />
                info@hakimiandco.com
              </a>

              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-[#d4a34e]" />
                <p>
                  123 Business Road, Suite 200
                  <br />
                  Vaughan, ON L4K 4K4
                </p>
              </div>

              <div className="flex items-start gap-3">
                <CalendarDays
                  size={17}
                  className="mt-0.5 shrink-0 text-[#d4a34e]"
                />
                <p>Monday–Friday: 9:00 AM–5:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-6 text-center text-xs text-slate-400 sm:flex-row lg:px-8">
            <p>© 2026 Hakimi & Co Accounting. All rights reserved.</p>

            <div className="flex gap-6">
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer