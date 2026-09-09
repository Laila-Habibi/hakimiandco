


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
      className="relative overflow-hidden bg-[var(--surface-warm)] px-5 py-20 lg:px-10"
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
            className="absolute left-0 top-1/2 z-20 hidden -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--primary-green)]/30 bg-[var(--surface)] p-3 text-[var(--primary-green)] shadow-lg transition hover:bg-[var(--primary-green)] hover:text-[var(--on-dark)] lg:block"
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
                      className="flex min-h-[280px] flex-col rounded-xl border border-[var(--primary-green)]/30 bg-[var(--surface)] p-7 shadow-[0_10px_35px_color-mix(in_srgb,var(--primary-brown)_5%,transparent)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_color-mix(in_srgb,var(--primary-brown)_12%,transparent)]"
                    >
                      <Quote
                        size={37}
                        fill="currentColor"
                        className="text-[var(--primary-green)]"
                      />

                      <p className="mt-5 flex-1 text-sm leading-7 text-[var(--text-body)]">
                        {testimonial.text}
                      </p>

                      <div className="mt-6 border-t border-[var(--primary-green)]/15 pt-5">
                        <p className="text-sm font-bold text-[var(--primary-brown)]">
                          — {testimonial.name}
                        </p>

                        <p className="mt-1 text-xs text-[var(--text-muted)]">
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
            className="absolute right-0 top-1/2 z-20 hidden translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--primary-green)]/30 bg-[var(--surface)] p-3 text-[var(--primary-green)] shadow-lg transition hover:bg-[var(--primary-green)] hover:text-[var(--on-dark)] lg:block"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        <div className="mt-9 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={goToPreviousSlide}
            aria-label="Show previous testimonials"
            className="rounded-full border border-[var(--primary-green)]/30 p-2 text-[var(--primary-green)] transition hover:bg-[var(--primary-green)] hover:text-[var(--on-dark)] lg:hidden"
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
                    ? "w-8 bg-[var(--primary-green)]"
                    : "w-3 bg-[var(--light-green)]/60 hover:bg-[var(--light-green)]"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={goToNextSlide}
            aria-label="Show next testimonials"
            className="rounded-full border border-[var(--primary-green)]/30 p-2 text-[var(--primary-green)] transition hover:bg-[var(--primary-green)] hover:text-[var(--on-dark)] lg:hidden"
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
      <p className="text-sm font-bold uppercase tracking-[0.17em] text-[var(--light-green)]">
        {eyebrow}
      </p>

      <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-[var(--primary-brown)]">
        {title}
      </h2>

      <div className="mx-auto mt-4 h-[3px] w-14 rounded-full metallic-gold" />

      {description && (
        <p className="mt-5 text-sm leading-7 text-[var(--text-body)]">
          {description}
        </p>
      )}
    </div>
  );
}

export default Testimonials;