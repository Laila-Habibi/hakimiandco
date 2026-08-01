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

const footerServices = [
  "Tax Services",
  "Assurance Services",
  "Payroll Solutions",
  "Business Advisory",
  "AI Integration",
  "Bookkeeping",
];

const quickLinks = [
  "Home",
  "About",
  "Services",
  "Industries",
  "Resources",
  "Contact",
];


function Footer() {
  return (
    <footer className="bg-[var(--primary-green)] px-5 pb-8 pt-14 text-white lg:px-10">
      {/* bg-gradient-to-r from-[#542500] via-[#6a3105] to-[#3d1c00] */}
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
            {[FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter].map((Icon, index) => (
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
              className="flex w-12 items-center justify-center bg-[#ffdb11]"
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

export default Footer


// import Link from "next/link";
// import {
//   CalendarDays,

  
//   Mail,
//   MapPin,
//   Phone,
//   Send,
// } from "lucide-react";

// const footerServices = [
//   "Tax Services",
//   "Assurance Services",
//   "Risk Management",
//   "Business Advisory",
//   "Cloud Accounting",
//   "Bookkeeping",
// ];

// const quickLinks = [
//   "Home",
//   "About",
//   "Services",
//   "Industries",
//   "Resources",
//   "Contact",
// ];

// function Footer() {
//   return (
//     <footer className="relative overflow-hidden bg-gradient-to-br from-[#4f3824] via-[#5f472e] to-[#657346] px-5 pb-8 pt-16 text-white lg:px-10">
//       {/* Decorative glow */}
//       <div className="absolute -right-20 top-0 h-80 w-80 rounded-full bg-[#f5e088]/10 blur-3xl" />
//       <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-[#80ab7e]/10 blur-3xl" />

//       <div className="relative mx-auto grid max-w-[1280px] gap-12 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr_1.2fr_1.25fr]">
//         {/* Brand */}
//         <div>
//           <div className="flex items-center gap-3">
//             <div className="font-serif text-4xl font-semibold text-[#ffefb4]">
//               H&C
//             </div>

//             <div>
//               <p className="font-serif text-lg font-semibold tracking-wide">
//                 HAKIMI & CO
//               </p>

//               <p className="mt-1 text-[10px] font-semibold tracking-[0.25em] text-[#f5e088]">
//                 ACCOUNTING
//               </p>
//             </div>
//           </div>

//           <p className="mt-5 max-w-xs text-sm leading-6 text-[#efe8de]">
//             Professional, reliable, and dedicated to helping individuals and
//             businesses achieve financial clarity and long-term success.
//           </p>

//           <div className="mt-6 flex gap-3">
//             <SocialLink href="#" label="Facebook" icon={Mail} />
//             <SocialLink href="#" label="Instagram" icon={Mail} />
//             <SocialLink href="#" label="LinkedIn" icon={Mail} />
//           </div>
//         </div>

//         <FooterColumn title="Quick Links" links={quickLinks} />
//         <FooterColumn title="Services" links={footerServices} />

//         {/* Contact */}
//         <div>
//           <h3 className="font-semibold text-[#ffefb4]">Contact Us</h3>

//           <div className="mt-5 space-y-4 text-sm text-[#efe8de]">
//             <FooterContact icon={Phone} text="(905) 123-4567" />

//             <FooterContact icon={Mail} text="info@hakimiandco.com" />

//             <FooterContact
//               icon={MapPin}
//               text="123 Business Rd, Suite 200, Vaughan, ON"
//             />

//             <FooterContact
//               icon={CalendarDays}
//               text="Monday – Friday: 9:00 AM – 5:00 PM"
//             />
//           </div>
//         </div>

//         {/* Newsletter */}
//         <div>
//           <h3 className="font-semibold text-[#ffefb4]">Newsletter</h3>

//           <p className="mt-5 text-sm leading-6 text-[#efe8de]">
//             Stay updated with financial tips, tax reminders, and useful business
//             insights.
//           </p>

//           <form
//             onSubmit={(event) => event.preventDefault()}
//             className="mt-5 flex overflow-hidden rounded-full bg-white shadow-lg"
//           >
//             <input
//               type="email"
//               placeholder="Your email address"
//               aria-label="Email address"
//               className="min-w-0 flex-1 px-5 py-3.5 text-sm text-[#3d210f] outline-none placeholder:text-[#8b7c70]"
//             />

//             <button
//               type="submit"
//               aria-label="Subscribe to newsletter"
//               className="flex w-14 items-center justify-center bg-[#f19f28] text-white transition hover:bg-[#718c45]"
//             >
//               <Send size={18} />
//             </button>
//           </form>
//         </div>
//       </div>

//       {/* Bottom bar */}
//       <div className="relative mx-auto mt-12 flex max-w-[1280px] flex-col justify-between gap-4 border-t border-[#ffefb4]/20 pt-6 text-xs text-white/65 sm:flex-row">
//         <p>© 2026 Hakimi & Co Accounting. All Rights Reserved.</p>

//         <div className="flex gap-6">
//           <Link
//             href="/privacy"
//             className="transition hover:text-[#ffefb4]"
//           >
//             Privacy Policy
//           </Link>

//           <Link
//             href="/terms"
//             className="transition hover:text-[#ffefb4]"
//           >
//             Terms of Service
//           </Link>
//         </div>
//       </div>
//     </footer>
//   );
// }

// function FooterColumn({
//   title,
//   links,
// }: {
//   title: string;
//   links: string[];
// }) {
//   return (
//     <div>
//       <h3 className="font-semibold text-[#ffefb4]">{title}</h3>

//       <div className="mt-5 flex flex-col gap-3 text-sm text-[#efe8de]">
//         {links.map((link) => {
//           const href =
//             link === "Home"
//               ? "/"
//               : `/${link.toLowerCase().replaceAll(" ", "-")}`;

//           return (
//             <Link
//               key={link}
//               href={href}
//               className="w-fit transition duration-200 hover:translate-x-1 hover:text-[#ffdb11]"
//             >
//               {link}
//             </Link>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// function FooterContact({
//   icon: Icon,
//   text,
// }: {
//   icon: typeof Phone;
//   text: string;
// }) {
//   return (
//     <div className="flex gap-3">
//       <Icon
//         size={17}
//         className="mt-0.5 shrink-0 text-[#f5e088]"
//       />

//       <span className="leading-6">{text}</span>
//     </div>
//   );
// }

// function SocialLink({
//   href,
//   label,
//   icon: Icon,
// }: {
//   href: string;
//   label: string;
//   icon: typeof Mail;
// }) {
//   return (
//     <Link
//       href={href}
//       aria-label={label}
//       className="flex h-10 w-10 items-center justify-center rounded-full border border-[#ffefb4]/30 bg-white/5 text-white transition duration-300 hover:scale-110 hover:border-[#f19f28] hover:bg-[#f19f28]"
//     >
//       <Icon size={17} />
//     </Link>
//   );
// }

// export default Footer;