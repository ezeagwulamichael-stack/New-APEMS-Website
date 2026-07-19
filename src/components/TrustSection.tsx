/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { clientLogos, metrics } from "../data";

export default function TrustSection() {
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

        {/* Logos Container */}
        <div className="flex flex-wrap items-center justify-center gap-y-6 gap-x-12 md:gap-x-16 mb-16 opacity-85">
          {clientLogos.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center justify-center transition-all duration-300 hover:scale-105 hover:opacity-100 group"
            >
              {/* Logo icon/wordmark representations tailored to match the elegant design strip */}
              <div className="flex flex-col items-center">
                <span className="font-display font-extrabold text-base tracking-tight text-slate-800 group-hover:text-red-600 transition-colors duration-200 uppercase">
                  {logo.logo}
                </span>
                <span className="text-[7px] font-mono tracking-widest text-slate-400 font-bold group-hover:text-slate-500 transition-colors duration-200 mt-0.5 uppercase">
                  {logo.name.includes("Bank") ? "BANKING" : logo.name.includes("Group") ? "CONGLOMERATE" : "ENTERPRISE"}
                </span>
              </div>
            </div>
          ))}
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
