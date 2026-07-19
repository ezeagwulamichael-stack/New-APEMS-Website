/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Mail, ShieldCheck, Users, FileText } from "lucide-react";
import { whyChooseCards } from "../data";

export default function WhyChooseSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? whyChooseCards.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === whyChooseCards.length - 1 ? 0 : prev + 1));
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "message":
        return <Mail className="w-5 h-5 text-red-600" />;
      case "shield":
        return <ShieldCheck className="w-5 h-5 text-red-600" />;
      case "users":
        return <Users className="w-5 h-5 text-red-600" />;
      case "file-text":
        return <FileText className="w-5 h-5 text-red-600" />;
      default:
        return <Mail className="w-5 h-5 text-red-600" />;
    }
  };

  return (
    <section id="why-choose" className="py-20 bg-slate-50/50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Header Block with Carousel Buttons on the Right */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <p className="text-[10px] font-mono tracking-widest text-red-600 uppercase font-bold">
              EXCELLENCE IN EVENT GOVERNANCE
            </p>
            <h3 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight mt-2">
              Why Organisations Choose APEMS
            </h3>
            <p className="text-slate-500 text-xs sm:text-sm mt-3 leading-relaxed">
              We provide an uncompromised robust, secure, and intuitive infrastructure tailored specifically to the regulatory and participation demands of leading African organizations.
            </p>
          </div>

          {/* Carousel Buttons */}
          <div className="flex items-center space-x-3.5 self-start md:self-end">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-50 active:scale-95 transition-all duration-200 flex items-center justify-center text-slate-600 hover:text-slate-900 shadow-sm"
              aria-label="Previous Benefit"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-50 active:scale-95 transition-all duration-200 flex items-center justify-center text-slate-600 hover:text-slate-900 shadow-sm"
              aria-label="Next Benefit"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Grid (Horizontal slide for mobile/tablet, full responsive grid on large screen) */}
        <div className="relative overflow-hidden">
          {/* Desktop Grid Layout */}
          <div className="hidden lg:grid grid-cols-4 gap-6">
            {whyChooseCards.map((card) => (
              <div
                key={card.id}
                className="bg-white border border-slate-200/60 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-2px] flex flex-col justify-between min-h-[220px]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-display font-bold text-3xl text-red-100">{card.num}</span>
                    <div className="w-9 h-9 rounded-full bg-red-50 flex items-center justify-center">
                      {getIcon(card.iconName)}
                    </div>
                  </div>
                  <h4 className="font-display font-bold text-slate-900 text-sm mt-4 tracking-tight leading-snug">
                    {card.title}
                  </h4>
                </div>
                <p className="text-slate-500 text-[11px] leading-relaxed mt-3">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          {/* Tablet and Mobile Carousel Slider */}
          <div className="lg:hidden">
            <div
              ref={containerRef}
              className="flex gap-6 transition-transform duration-300 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {whyChooseCards.map((card) => (
                <div
                  key={card.id}
                  className="w-full shrink-0 bg-white border border-slate-200/60 rounded-2xl p-6 shadow-sm min-h-[220px] flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-display font-bold text-3xl text-red-100">{card.num}</span>
                      <div className="w-9 h-9 rounded-full bg-red-50 flex items-center justify-center">
                        {getIcon(card.iconName)}
                      </div>
                    </div>
                    <h4 className="font-display font-bold text-slate-900 text-sm mt-4 tracking-tight leading-snug">
                      {card.title}
                    </h4>
                  </div>
                  <p className="text-slate-500 text-[11px] leading-relaxed mt-3">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Pagination dots */}
            <div className="flex items-center justify-center space-x-2 mt-8">
              {whyChooseCards.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentIndex === idx ? "bg-red-600 w-4" : "bg-slate-300"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
