/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { processSteps } from "../data";

export default function ProcessSection() {
  const getBadgeStyle = (tag: string) => {
    switch (tag) {
      case "UBIQUITOUS ACCESS":
        return "bg-rose-50 text-rose-600 border border-rose-100";
      case "ELITE EXECUTION":
        return "bg-slate-50 text-slate-600 border border-slate-200/60";
      case "TAMPER PROOF":
        return "bg-emerald-50 text-emerald-700 border border-emerald-100";
      case "HIGH ROI":
        return "bg-amber-50 text-amber-700 border border-amber-100";
      case "FULLY INCLUSIVE":
        return "bg-indigo-50 text-indigo-700 border border-indigo-100";
      default:
        return "bg-slate-50 text-slate-600 border border-slate-100";
    }
  };

  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        
        {/* Header Intro */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="text-[10px] font-mono tracking-widest text-red-600 uppercase font-bold">
            WHY APEMS DELIVERS MORE VALUE
          </p>
          <h3 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight mt-2">
            Your Governance Is At The Center <br className="hidden sm:inline" /> Of Our Process
          </h3>
          <p className="text-slate-500 text-xs sm:text-sm mt-4 leading-relaxed">
            We believe that modern technology should elevate corporate governance rather than complicate it. APEMS delivers a powerful ROI by eliminating friction, enhancing safety, and promoting universal equity.
          </p>
        </div>

        {/* Vertical Stack List (01 to 05) */}
        <div className="space-y-6">
          {processSteps.map((step) => (
            <div
              key={step.id}
              className="group bg-white border border-slate-150 rounded-2xl p-6 md:p-8 hover:border-slate-300 hover:shadow-md transition-all duration-300 flex flex-col md:flex-row items-start md:items-center gap-6 relative"
            >
              {/* Giant number indicator */}
              <div className="font-display font-bold text-4xl md:text-5xl text-slate-100 select-none group-hover:text-red-100 transition-colors duration-300 md:w-20 shrink-0">
                {step.num}
              </div>

              {/* Step details content */}
              <div className="space-y-2 flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <h4 className="font-display font-bold text-slate-900 text-base sm:text-lg tracking-tight leading-none">
                    {step.title}
                  </h4>
                  <span className={`px-2 py-0.5 rounded-full text-[9px] font-mono tracking-wide font-bold uppercase ${getBadgeStyle(step.tag)}`}>
                    {step.tag}
                  </span>
                </div>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
