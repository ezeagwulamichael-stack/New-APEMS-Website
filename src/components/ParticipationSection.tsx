/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Smartphone, Mail, Monitor, ArrowRight } from "lucide-react";
import { participationModes } from "../data";

interface ParticipationSectionProps {
  onRequestDemo: () => void;
  onSpeakExpert: () => void;
}

export default function ParticipationSection({ onRequestDemo, onSpeakExpert }: ParticipationSectionProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "smartphone":
        return <Smartphone className="w-5 h-5 text-white" />;
      case "mail":
        return <Mail className="w-5 h-5 text-white" />;
      case "dialpad":
        return <Dialpad className="w-5 h-5 text-white" />;
      case "monitor":
        return <Monitor className="w-5 h-5 text-white" />;
      default:
        return <Smartphone className="w-5 h-5 text-white" />;
    }
  };

  return (
    <section id="participation" className="py-20 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Header and buttons section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <p className="text-[10px] font-mono tracking-widest text-red-600 uppercase font-bold">
              INCLUSION & MULTI-ACCESS MODES
            </p>
            <h3 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight mt-2">
              One Platform. <span className="text-red-600">Four Ways</span> to Participate.
            </h3>
            <p className="text-slate-500 text-xs sm:text-sm mt-3 leading-relaxed">
              The platform highlights APEMS' unique voting capabilities across all participation modes, ensuring no stakeholder is left behind.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <button
              onClick={onRequestDemo}
              className="px-6 py-3 text-xs font-display font-bold tracking-wider text-white bg-red-600 hover:bg-red-700 active:scale-95 transition-all duration-200 rounded-full shadow-sm text-center uppercase"
            >
              REQUEST A DEMO
            </button>
            <button
              onClick={onSpeakExpert}
              className="px-6 py-3 text-xs font-display font-bold tracking-wider text-slate-600 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-200 active:scale-95 transition-all duration-200 rounded-full text-center uppercase"
            >
              SPEAK TO AN EXPERT
            </button>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {participationModes.map((mode, idx) => (
            <div
              key={mode.id}
              className="relative rounded-2xl overflow-hidden aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] border border-slate-150 shadow-sm group flex flex-col justify-end p-6"
            >
              {/* Card background image */}
              <div className="absolute inset-0 z-0">
                <img
                  src={mode.imageBg}
                  alt={mode.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-[0.4] group-hover:brightness-[0.3]"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Floating Red Icon badge */}
              <div className="absolute top-6 left-6 z-10 w-10 h-10 rounded-full bg-red-600 border border-red-500 flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-110">
                {getIcon(mode.iconName)}
              </div>

              {/* Card content text overlay */}
              <div className="relative z-10 space-y-2 text-white">
                <h4 className="font-display font-bold text-lg sm:text-xl tracking-tight leading-none group-hover:text-red-300 transition-colors">
                  {mode.title}
                </h4>
                <p className="text-slate-200 text-xs leading-relaxed opacity-90">
                  {mode.description}
                </p>
                <div className="flex items-center text-[10px] font-mono tracking-widest text-red-400 font-bold uppercase pt-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
                  <span>EXPLORE MODE</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
export interface DialpadProps {
  className?: string;
}
function Dialpad({ className }: DialpadProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="3" y="3" width="5" height="5" rx="1" />
      <rect x="9.5" y="3" width="5" height="5" rx="1" />
      <rect x="16" y="3" width="5" height="5" rx="1" />
      <rect x="3" y="9.5" width="5" height="5" rx="1" />
      <rect x="9.5" y="9.5" width="5" height="5" rx="1" />
      <rect x="16" y="9.5" width="5" height="5" rx="1" />
      <rect x="3" y="16" width="5" height="5" rx="1" />
      <rect x="9.5" y="16" width="5" height="5" rx="1" />
      <rect x="16" y="16" width="5" height="5" rx="1" />
    </svg>
  );
}
