"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    text: "Hakimi & Co has been an incredible partner for our business. Their attention to detail and professionalism give us complete peace of mind.",
    name: "Sarah M.",
    role: "Owner, Retail Business",
  },
  {
    text: "They helped us streamline our accounting process and provided valuable insights that improved our financial performance.",
    name: "David R.",
    role: "CEO, Construction Company",
  },
  {
    text: "The team is responsive, knowledgeable and always goes above and beyond to support our accounting and advisory needs.",
    name: "James L.",
    role: "Startup Founder",
  },
  {
    text: "Their cloud accounting services made it much easier for us to manage invoices, expenses and financial reports from anywhere.",
    name: "Nadia A.",
    role: "Owner, Consulting Firm",
  },
  {
    text: "Hakimi & Co made our corporate tax filing process clear and stress-free. We always receive accurate and timely support.",
    name: "Michael T.",
    role: "Managing Director",
  },
  {
    text: "The advisory team helped us improve our budgeting process and make better decisions for the future of our business.",
    name: "Farah H.",
    role: "Small Business Owner",
  },
  {
    text: "Their professionalism, communication and attention to detail have made them a trusted financial partner for our company.",
    name: "Daniel K.",
    role: "Operations Manager",
  },
  {
    text: "We received excellent support with bookkeeping, payroll and financial reporting. The entire process was organized and efficient.",
    name: "Amina S.",
    role: "Restaurant Owner",
  },
];

function Testimonials() {
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
              className="rounded-xl border border-[#6e913d]/30 bg-white p-7 shadow-[0_10px_35px_rgba(133,77,27,0.05)]"
            >
              <Quote
                size={37}
                fill="currentColor"
                className="text-[#6e913d]"
              />

              <p className="mt-5 text-sm leading-7 text-[#554b44]">
                {testimonial.text}
              </p>

              <div className="mt-6">
                <p className="text-sm font-bold">— {testimonial.name}</p>
                <p className="mt-1 text-xs text-[#6e655f]">{testimonial.role}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-center gap-2">
          <span className="h-2 w-8 rounded-full bg-[#6e913d]" />
          <span className="h-2 w-3 rounded-full bg-[#80ab7e]" />
          <span className="h-2 w-3 rounded-full bg-[#80ab7e]" />
          <span className="h-2 w-3 rounded-full bg-[#80ab7e]" />
        </div>
      </div>
    </section>
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
      <p className="text-sm font-bold uppercase tracking-[0.17em] text-[#80ab7e]">
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

export default Testimonials;