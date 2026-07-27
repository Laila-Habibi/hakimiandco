


"use client";

import { useEffect, useMemo, useState } from "react";
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
    {
    text: "The advisory team helped us improve our budgeting process and make better decisions for the future of our business.",
    name: "Farah H.",
    role: "Small Business Owner",
  },
];

const CARDS_PER_SLIDE = 3;

function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = useMemo(() => {
    const groupedTestimonials = [];

    for (
      let index = 0;
      index < testimonials.length;
      index += CARDS_PER_SLIDE
    ) {
      groupedTestimonials.push(
        testimonials.slice(index, index + CARDS_PER_SLIDE),
      );
    }

    return groupedTestimonials;
  }, []);

  const goToNextSlide = () => {
    setCurrentSlide((previousSlide) =>
      previousSlide === slides.length - 1 ? 0 : previousSlide + 1,
    );
  };

  const goToPreviousSlide = () => {
    setCurrentSlide((previousSlide) =>
      previousSlide === 0 ? slides.length - 1 : previousSlide - 1,
    );
  };

  useEffect(() => {
    if (isPaused || slides.length <= 1) return;

    const interval = window.setInterval(() => {
      setCurrentSlide((previousSlide) =>
        previousSlide === slides.length - 1 ? 0 : previousSlide + 1,
      );
    }, 5000);

    return () => window.clearInterval(interval);
  }, [isPaused, slides.length]);

  return (
    <section
      className="relative overflow-hidden bg-[#fffaf0] px-5 py-20 lg:px-10"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="mx-auto max-w-[1260px]">
        <SectionHeading
          eyebrow="Client Testimonials"
          title="What Our Clients Say"
        />

        <div className="relative mt-12">
          <button
            type="button"
            onClick={goToPreviousSlide}
            aria-label="Show previous testimonials"
            className="absolute left-0 top-1/2 z-20 hidden -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#6e913d]/30 bg-white p-3 text-[#6e913d] shadow-lg transition hover:bg-[#6e913d] hover:text-white lg:block"
          >
            <ChevronLeft size={22} />
          </button>

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              {slides.map((slide, slideIndex) => (
                <div
                  key={slideIndex}
                  className="grid w-full shrink-0 gap-6 md:grid-cols-2 lg:grid-cols-3"
                >
                  {slide.map((testimonial) => (
                    <article
                      key={testimonial.name}
                      className="flex min-h-[280px] flex-col rounded-xl border border-[#6e913d]/30 bg-white p-7 shadow-[0_10px_35px_rgba(133,77,27,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(133,77,27,0.12)]"
                    >
                      <Quote
                        size={37}
                        fill="currentColor"
                        className="text-[#6e913d]"
                      />

                      <p className="mt-5 flex-1 text-sm leading-7 text-[#554b44]">
                        {testimonial.text}
                      </p>

                      <div className="mt-6 border-t border-[#6e913d]/15 pt-5">
                        <p className="text-sm font-bold text-[#3d210f]">
                          — {testimonial.name}
                        </p>

                        <p className="mt-1 text-xs text-[#6e655f]">
                          {testimonial.role}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={goToNextSlide}
            aria-label="Show next testimonials"
            className="absolute right-0 top-1/2 z-20 hidden translate-x-1/2 -translate-y-1/2 rounded-full border border-[#6e913d]/30 bg-white p-3 text-[#6e913d] shadow-lg transition hover:bg-[#6e913d] hover:text-white lg:block"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        <div className="mt-9 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={goToPreviousSlide}
            aria-label="Show previous testimonials"
            className="rounded-full border border-[#6e913d]/30 p-2 text-[#6e913d] transition hover:bg-[#6e913d] hover:text-white lg:hidden"
          >
            <ChevronLeft size={19} />
          </button>

          <div className="flex items-center justify-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to testimonial slide ${index + 1}`}
                aria-current={currentSlide === index ? "true" : undefined}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "w-8 bg-[#6e913d]"
                    : "w-3 bg-[#80ab7e]/60 hover:bg-[#80ab7e]"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={goToNextSlide}
            aria-label="Show next testimonials"
            className="rounded-full border border-[#6e913d]/30 p-2 text-[#6e913d] transition hover:bg-[#6e913d] hover:text-white lg:hidden"
          >
            <ChevronRight size={19} />
          </button>
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

      <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-[#3d210f]">
        {title}
      </h2>

      <div className="mx-auto mt-4 h-[3px] w-14 rounded-full bg-[#ffdb11]" />

      {description && (
        <p className="mt-5 text-sm leading-7 text-[#554b44]">
          {description}
        </p>
      )}
    </div>
  );
}

export default Testimonials;