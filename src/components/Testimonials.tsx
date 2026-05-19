"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight, UserCheck } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Eng. Fahad Al-Mutairi",
    role: "Senior Logistics Coordinator",
    company: "SABIC Jubail",
    rating: 5,
    quote: "NAEL has been our go-to partner for Container Trading and leasing in Al Jubail. Their container quality is exceptionally rigid, and delivery was completed ahead of our aggressive turnaround schedule. Absolute professionals in logistics support.",
  },
  {
    id: 2,
    name: "Ali H. Al-Ghamdi",
    role: "Project Site Director",
    company: "Jubail Industrial Projects",
    rating: 5,
    quote: "The scaffolding services provided by Lamiya Al Khaleej Est. are absolutely elite. Their erection team works with impeccable speed while meeting the extremely rigid Aramco safety requirements. They made our high-rise piping installation completely seamless.",
  },
  {
    id: 3,
    name: "Eng. Mustafa Ibrahim",
    role: "Procurement Lead",
    company: "SATORP Refinery",
    rating: 5,
    quote: "For our water utilities and heavy equipment needs, NAEL's team is unmatched. Their sweet water tanker fleet is highly responsive, ensuring zero downtime at our remote building yards. Their machinery rental inventory is modern and extremely reliable.",
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[activeIndex];

  // Motion variants for slide transition
  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <section 
      id="testimonials" 
      className="bg-brand-black py-24 px-4 sm:px-8 relative overflow-hidden"
    >
      {/* Decorative glows */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-primary-green/10 blur-[120px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Header Block */}
        <div className="text-center flex flex-col items-center gap-2 mb-16">
          <span className="text-xs uppercase tracking-[0.35em] text-primary-yellow font-extrabold bg-primary-green/20 px-3 py-1.5 rounded-sm w-fit border border-primary-green/30">
            TESTIMONIALS
          </span>
          <h2 className="text-4xl sm:text-5xl font-bebas font-extrabold text-white tracking-wider leading-none">
            WHAT OUR <span className="text-primary-yellow">CLIENTS SAY</span>
          </h2>
          <div className="w-16 h-[3px] bg-primary-yellow mt-1" />
        </div>

        {/* Large Testimonial Card Frame with AnimatePresence Slider */}
        <div className="relative glass-panel border border-white/10 rounded-sm p-8 sm:p-12 min-h-[300px] flex flex-col justify-between shadow-2xl">
          {/* Quote large icon */}
          <div className="absolute top-6 left-6 text-white/5 pointer-events-none select-none">
            <Quote className="w-24 h-24 stroke-[1]" />
          </div>

          <div className="relative overflow-hidden w-full flex-grow">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col gap-6"
              >
                {/* 5 Stars Rating Bar */}
                <div className="flex items-center gap-1 text-primary-yellow">
                  {[...Array(current.rating)].map((_, index) => (
                    <Star key={index} className="w-5 h-5 fill-primary-yellow stroke-none glow-yellow" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-white/80 text-sm sm:text-base md:text-lg font-light leading-relaxed italic">
                  &ldquo;{current.quote}&rdquo;
                </p>

                {/* Reviewer Details */}
                <div className="flex items-center gap-4 mt-4 border-t border-white/10 pt-6">
                  <div className="w-12 h-12 rounded-full bg-primary-yellow/10 border border-primary-yellow/20 flex items-center justify-center text-primary-yellow">
                    <UserCheck className="w-6 h-6 stroke-[1.5]" />
                  </div>
                  <div>
                    <h4 className="font-bebas text-lg tracking-wider text-white font-bold leading-none">
                      {current.name}
                    </h4>
                    <p className="text-[10px] sm:text-xs text-white/50 mt-1 uppercase tracking-wider font-semibold">
                      {current.role} &bull; <span className="text-primary-yellow">{current.company}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slider Controllers */}
          <div className="flex justify-between items-center mt-8 border-t border-white/5 pt-6 relative z-30">
            {/* Pagination Indicators */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > activeIndex ? 1 : -1);
                    setActiveIndex(i);
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === activeIndex ? "bg-primary-yellow w-6 glow-yellow" : "bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            {/* Nav Arrows */}
            <div className="flex gap-3">
              <button 
                onClick={handlePrev}
                className="w-10 h-10 rounded-sm bg-brand-light-grey border border-white/5 flex items-center justify-center text-white/70 hover:text-primary-yellow hover:border-primary-yellow/30 hover:bg-primary-green/10 transition-all duration-300"
                aria-label="Previous Review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={handleNext}
                className="w-10 h-10 rounded-sm bg-brand-light-grey border border-white/5 flex items-center justify-center text-white/70 hover:text-primary-yellow hover:border-primary-yellow/30 hover:bg-primary-green/10 transition-all duration-300"
                aria-label="Next Review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
