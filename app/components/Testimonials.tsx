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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    updateCardsPerView();

    window.addEventListener("resize", updateCardsPerView);

    return () => {
      window.removeEventListener("resize", updateCardsPerView);
    };
  }, []);

  const maxIndex = Math.max(testimonials.length - cardsPerView, 0);

  useEffect(() => {
    if (isPaused || maxIndex === 0) return;

    const interval = window.setInterval(() => {
      setCurrentIndex((previousIndex) =>
        previousIndex >= maxIndex ? 0 : previousIndex + 1,
      );
    }, 4000);

    return () => {
      window.clearInterval(interval);
    };
  }, [isPaused, maxIndex]);

  useEffect(() => {
  const updateCardsPerView = () => {
    let cards = 3;

    if (window.innerWidth < 640) {
      cards = 1;
    } else if (window.innerWidth < 1024) {
      cards = 2;
    }

    setCardsPerView(cards);

    const newMax = Math.max(testimonials.length - cards, 0);

    setCurrentIndex((prev) => Math.min(prev, newMax));
  };

  updateCardsPerView();

  window.addEventListener("resize", updateCardsPerView);

  return () => window.removeEventListener("resize", updateCardsPerView);
}, []);

  const handlePrevious = () => {
    setCurrentIndex((previousIndex) =>
      previousIndex <= 0 ? maxIndex : previousIndex - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((previousIndex) =>
      previousIndex >= maxIndex ? 0 : previousIndex + 1,
    );
  };

  const cardWidth = 100 / cardsPerView;

  return (
    <section className="overflow-hidden bg-[#f8fafc] px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c28a2d]">
            Client Testimonials
          </p>

          <h2 className="mt-3 font-serif text-3xl font-bold text-[#102a4c] sm:text-4xl">
            What Our Clients Say
          </h2>
        </div>

        <div
          className="relative mt-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * cardWidth}%)`,
              }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.name}
                  className="shrink-0 px-3"
                  style={{
                    width: `${cardWidth}%`,
                  }}
                >
                  <article className="relative h-full min-h-[275px] rounded-md border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <Quote
                      size={44}
                      className="absolute left-5 top-5 text-slate-100"
                      fill="currentColor"
                    />

                    <p className="relative pt-5 text-sm leading-7 text-slate-600">
                      {testimonial.text}
                    </p>

                    <div className="mt-6 border-t border-slate-100 pt-5">
                      <p className="text-sm font-bold text-[#102a4c]">
                        {testimonial.name}
                      </p>

                      <p className="mt-1 text-xs text-slate-500">
                        {testimonial.role}
                      </p>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={handlePrevious}
            aria-label="Previous testimonials"
            className="absolute left-0 top-1/2 z-10 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-[#102a4c] shadow-md transition hover:bg-[#102a4c] hover:text-white"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next testimonials"
            className="absolute right-0 top-1/2 z-10 flex h-10 w-10 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-[#102a4c] shadow-md transition hover:bg-[#102a4c] hover:text-white"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentIndex(index)}
              aria-label={`Show testimonial slide ${index + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "w-7 bg-[#c99a45]"
                  : "w-2 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;