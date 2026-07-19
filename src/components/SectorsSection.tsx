/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import { sectors } from "../data";

interface SectorsSectionProps {
  onRequestDemo: () => void;
  onSpeakExpert: () => void;
}

export default function SectorsSection({ onRequestDemo, onSpeakExpert }: SectorsSectionProps) {
  const [activeIdx, setActiveIdx] = useState(0);

  const activeSector = sectors[activeIdx];

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? sectors.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev === sectors.length - 1 ? 0 : prev + 1));
  };

  const getSectorImage = (theme: string) => {
    switch (theme) {
      case "corporate":
        return "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800";
      case "security":
        return "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800";
      case "finance":
        return "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=800";
      case "public":
        return "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&q=80&w=800";
      case "associations":
        return "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&q=80&w=800";
      case "cooperatives":
        return "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800";
      case "elections":
        return "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800";
      case "entertainment":
        return "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=800";
      case "education":
        return "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800";
      case "health":
        return "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800";
      case "nonprofit":
        return "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800";
      default:
        return "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800";
    }
  };

  return (
    <section id="sectors" className="py-20 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Header Intro with Navigation arrows */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <p className="text-[10px] font-mono tracking-widest text-red-600 uppercase font-bold">
              SECTORS SERVED
            </p>
            <h3 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight mt-2">
              Versatility <span className="text-red-600">Across Sectors</span>
            </h3>
            <p className="text-slate-500 text-xs sm:text-sm mt-3 leading-relaxed">
              From regulated listed giants requiring strict compliance to cooperative societies and national associations, APEMS scales seamlessly to meet any organizational requirement.
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center space-x-3 self-start md:self-end">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-50 active:scale-95 transition-all duration-200 flex items-center justify-center text-slate-600 hover:text-slate-900 shadow-sm"
              aria-label="Previous Sector"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-50 active:scale-95 transition-all duration-200 flex items-center justify-center text-slate-600 hover:text-slate-900 shadow-sm"
              aria-label="Next Sector"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab pills row - Horizontal scrollable on tablet/mobile */}
        <div className="flex overflow-x-auto pb-4 mb-10 scrollbar-none gap-2">
          <div className="flex space-x-1 px-1">
            {sectors.map((sec, idx) => {
              const isActive = idx === activeIdx;
              return (
                <button
                  key={sec.id}
                  onClick={() => setActiveIdx(idx)}
                  className={`px-4 py-2 text-xs font-display font-bold tracking-wider rounded-full whitespace-nowrap transition-all duration-200 uppercase outline-none ${
                    isActive
                      ? "bg-red-50 text-red-600 border border-red-200"
                      : "bg-white hover:bg-slate-50 text-slate-600 hover:text-slate-900 border border-slate-200/60"
                  }`}
                >
                  {sec.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Big visual details card */}
        <div className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm grid grid-cols-1 md:grid-cols-12 gap-0 animate-fade-in" key={activeSector.id}>
          
          {/* Left image side */}
          <div className="md:col-span-5 h-[200px] sm:h-[280px] md:h-auto relative overflow-hidden">
            <img
              src={getSectorImage(activeSector.imageTheme)}
              alt={activeSector.title}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-102"
              referrerPolicy="no-referrer"
            />
            {/* Visual Red Filter overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-red-900/10 to-transparent pointer-events-none" />
          </div>

          {/* Right text detail side */}
          <div className="md:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-1.5 text-[10px] font-mono tracking-wider text-red-600 uppercase font-bold">
                <CheckCircle2 className="w-4 h-4 text-red-600" />
                <span>INDUSTRIES & SECTORS</span>
              </div>
              <h4 className="font-display font-bold text-slate-900 text-xl sm:text-2xl tracking-tight leading-snug">
                {activeSector.title}
              </h4>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                {activeSector.description}
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-6 border-t border-slate-100">
              <button
                onClick={onRequestDemo}
                className="px-6 py-3 text-xs font-display font-bold tracking-wider text-white bg-red-600 hover:bg-red-700 active:scale-95 transition-all duration-200 rounded-full shadow-sm text-center uppercase"
              >
                REQUEST A DEMO
              </button>
              <button
                onClick={onSpeakExpert}
                className="px-6 py-3 text-xs font-display font-bold tracking-wider text-slate-600 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 border border-slate-200 active:scale-95 transition-all duration-200 rounded-full text-center uppercase"
              >
                SPEAK TO AN EXPERT
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
