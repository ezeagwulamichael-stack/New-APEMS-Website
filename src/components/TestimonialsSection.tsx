/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { testimonials } from "../data";

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const autoplayTimer = useRef<NodeJS.Timeout | null>(null);

  // Auto-advance on mobile every 5 seconds, unless hovered
  useEffect(() => {
    if (!isHovered) {
      autoplayTimer.current = setInterval(() => {
        handleNext();
      }, 5000);
    }
    return () => {
      if (autoplayTimer.current) clearInterval(autoplayTimer.current);
    };
  }, [isHovered, activeIndex]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section
      id="testimonials"
      className="py-20 bg-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[10px] font-mono tracking-widest text-red-600 uppercase font-bold">
            CLIENT TESTIMONIALS
          </p>
          <h3 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight mt-2">
            Trusted by Organisations Delivering Important Experiences
          </h3>
          <p className="text-slate-500 text-xs sm:text-sm mt-4 leading-relaxed">
            Organisations use our platform to manage their operations, services, meetings, and customer experiences more efficiently, ensuring high-fidelity reporting and absolute regulatory compliance.
          </p>
        </div>

        {/* Desktop View (3 columns, equal heights, consistent alignment) */}
        <div className="hidden lg:grid grid-cols-3 gap-8">
          {testimonials.map((test) => (
            <div
              key={test.id}
              className="bg-slate-50 border border-slate-100 rounded-2xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-slate-200 transition-all duration-300 min-h-[300px] relative"
            >
              {/* Quote icon overlay background */}
              <div className="absolute top-5 right-5 text-slate-200 pointer-events-none">
                <Quote className="w-10 h-10 stroke-[1.2] opacity-50" />
              </div>

              <div className="space-y-4">
                {/* 5 stars rating */}
                <div className="flex items-center space-x-1">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 stroke-amber-400" />
                  ))}
                </div>

                {/* Quote text */}
                <blockquote className="text-slate-600 text-xs sm:text-sm leading-relaxed italic">
                  "{test.text}"
                </blockquote>
              </div>

              {/* Author Footer info */}
              <div className="flex items-center space-x-3 pt-6 border-t border-slate-200/50 mt-6 shrink-0">
                <div className="w-9 h-9 rounded-full bg-red-600 text-white font-display font-bold text-xs flex items-center justify-center shadow-sm">
                  {test.initials}
                </div>
                <div>
                  <h5 className="font-display font-bold text-slate-900 text-xs tracking-tight">
                    {test.name}
                  </h5>
                  <p className="text-[9px] font-mono text-slate-400 leading-none mt-1 uppercase tracking-wide">
                    {test.role}, <span className="text-slate-500 font-bold">{test.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tablet and Mobile Slide view (1 or 2 cards at a time depending on viewport, using state sliding) */}
        <div className="lg:hidden relative">
          
          {/* Main Slider Container */}
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((test) => (
                <div
                  key={test.id}
                  className="w-full shrink-0 px-1"
                >
                  <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 sm:p-8 flex flex-col justify-between min-h-[280px] relative">
                    {/* Quotes Overlay */}
                    <div className="absolute top-5 right-5 text-slate-200 pointer-events-none">
                      <Quote className="w-10 h-10 stroke-[1.2] opacity-50" />
                    </div>

                    <div className="space-y-4">
                      {/* Rating */}
                      <div className="flex items-center space-x-1">
                        {[...Array(test.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400 stroke-amber-400" />
                        ))}
                      </div>

                      {/* Content */}
                      <blockquote className="text-slate-600 text-xs sm:text-sm leading-relaxed italic">
                        "{test.text}"
                      </blockquote>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center space-x-3 pt-6 border-t border-slate-200/50 mt-6">
                      <div className="w-9 h-9 rounded-full bg-red-600 text-white font-display font-bold text-xs flex items-center justify-center shadow-sm">
                        {test.initials}
                      </div>
                      <div>
                        <h5 className="font-display font-bold text-slate-900 text-xs tracking-tight">
                          {test.name}
                        </h5>
                        <p className="text-[9px] font-mono text-slate-400 mt-1 uppercase tracking-wider">
                          {test.role}, <span className="text-slate-500 font-bold">{test.company}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slider controls arrow buttons */}
          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center space-x-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    activeIndex === idx ? "bg-red-600 w-6" : "bg-slate-300"
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={handlePrev}
                className="w-9 h-9 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:text-slate-900 shadow-sm"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="w-9 h-9 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:text-slate-900 shadow-sm"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
