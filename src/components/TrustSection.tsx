/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef } from "react";
import { clientLogos, metrics } from "../data";

export default function TrustSection() {
  const [isPaused, setIsPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  // Duplicate clientLogos to create a completely seamless infinite loop.
  // 4 sets of the 7 logos provide a sufficiently long track for all screen widths.
  const marqueeLogos = [
    ...clientLogos,
    ...clientLogos,
    ...clientLogos,
    ...clientLogos,
  ];

  return (
    <section id="trust" className="py-16 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Intro */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h3 className="font-display font-bold text-slate-900 text-sm tracking-wider uppercase">
            Trusted by Leading Organizations <span className="text-red-600">Across Africa.</span>
          </h3>
          <p className="text-xs text-slate-500 font-sans mt-2">
            APEMS has successfully managed events for top publicly listed companies and institutions.
          </p>
        </div>

        {/* Moving Client Logo Carousel */}
        <div 
          className="relative w-full overflow-hidden py-6 mb-16 mask-fade pointer-events-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          role="region"
          aria-label="Client trust carousel"
        >
          {/* Faded edge indicators for modern UI finish */}
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div
            ref={trackRef}
            className={`flex items-center gap-16 md:gap-24 w-max animate-marquee-ltr ${
              isPaused ? "paused" : ""
            }`}
          >
            {marqueeLogos.map((logo, idx) => (
              <div
                key={`${logo.name}-${idx}`}
                className="flex items-center justify-center transition-all duration-300 hover:scale-105 hover:opacity-100 group shrink-0"
              >
                {/* Logo representation styled precisely to match corporate guidelines */}
                <div className="flex flex-col items-center">
                  <span className="font-display font-extrabold text-base md:text-lg tracking-tight text-slate-700 group-hover:text-red-600 transition-colors duration-200 uppercase">
                    {logo.logo}
                  </span>
                  <span className="text-[7px] font-mono tracking-widest text-slate-400 font-bold group-hover:text-slate-500 transition-colors duration-200 mt-1 uppercase">
                    {logo.name.includes("Bank") ? "BANKING" : logo.name.includes("Group") ? "CONGLOMERATE" : "ENTERPRISE"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-slate-100 mb-12" />

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-8 gap-x-4 text-center divide-x-0 md:divide-x divide-slate-100">
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              className={`flex flex-col items-center justify-center px-4 ${
                index === 0 ? "pl-0" : ""
              }`}
            >
              <span className="font-display font-bold text-3xl md:text-4xl text-red-600 tracking-tight leading-none">
                {metric.value}
              </span>
              <span className="text-[10px] font-mono tracking-wider text-slate-400 uppercase mt-3 font-bold text-center leading-tight">
                {metric.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
