/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Quote, Sparkles } from "lucide-react";

interface AboutSectionProps {
  onRequestDemo: () => void;
  onSpeakExpert: () => void;
}

export default function AboutSection({ onRequestDemo, onSpeakExpert }: AboutSectionProps) {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Large Boardroom Showcase Card (Faithful to design image) */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-100 mb-16 h-[260px] sm:h-[340px] md:h-[420px] group">
          <img
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200"
            alt="Africa Prudential Boardroom Assemblies"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            referrerPolicy="no-referrer"
          />
          {/* Glass Overlay on Bottom Left */}
          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 max-w-sm sm:max-w-md bg-black/60 backdrop-blur-md rounded-xl p-4 sm:p-5 text-white border border-white/10">
            <div className="inline-flex items-center space-x-1.5 px-2 py-0.5 bg-white/10 rounded text-[9px] font-mono tracking-wider uppercase mb-2">
              <Sparkles className="w-3 h-3 text-red-400" />
              <span>ASICS CORPORATE LTD</span>
            </div>
            <h4 className="font-display font-medium text-sm sm:text-base md:text-lg tracking-tight leading-snug">
              Hosting Secured Governance Assemblies for the Capital Market.
            </h4>
            <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/10 text-[9px] font-mono tracking-wider text-white/60 uppercase">
              <span>PHOTO: ANNUAL SHAREHOLDER CONVENING, 2026</span>
            </div>
          </div>
        </div>

        {/* Text Grid with Descriptive Copy and Testimonial Card side-by-side */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-12">
          
          {/* Left Text Block */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <p className="text-[10px] font-mono tracking-widest text-red-600 uppercase font-bold">
                ABOUT THE PLATFORM
              </p>
              <h3 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
                What is APEMS?
              </h3>
            </div>
            
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              <strong>APEMS</strong> (Africa Prudential Event Management Solution) is a robust enterprise event management suite meticulously engineered to support physical, virtual, and hybrid corporate assemblies from start to finish.
            </p>
            
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
              The platform empowers registrars, corporate secretaries, and executives to securely manage participant registries, accredit delegates, organize real-time electronic voting, host live interactive feeds, and generate instant, certified statutory reports in compliance with regulatory mandates.
            </p>

            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
              Trusted by independent bodies, APEMS has been robustly tested in high-volume general elections and corporate assemblies across sub-Saharan Africa.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4">
              <button
                id="about-request-demo"
                onClick={onRequestDemo}
                className="px-6 py-3 text-xs font-display font-bold tracking-wider text-white bg-red-600 hover:bg-red-700 active:scale-95 transition-all duration-200 rounded-full shadow-sm hover:shadow-md uppercase text-center"
              >
                REQUEST A DEMO
              </button>
              <button
                id="about-speak-expert"
                onClick={onSpeakExpert}
                className="px-6 py-3 text-xs font-display font-bold tracking-wider text-slate-600 hover:text-slate-900 hover:bg-slate-50 border border-slate-200 active:scale-95 transition-all duration-200 rounded-full text-center uppercase"
              >
                SPEAK TO AN EXPERT
              </button>
            </div>
          </div>

          {/* Right Testimonial card representing quotes */}
          <div className="lg:col-span-5 bg-slate-50 border border-slate-100/80 rounded-2xl p-6 sm:p-8 relative">
            
            {/* Elegant double quotation mark */}
            <div className="absolute top-6 right-6 text-red-100 opacity-80 pointer-events-none">
              <Quote className="w-16 h-16 stroke-[1.5]" />
            </div>

            <div className="relative z-10 space-y-6">
              <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-red-600 mb-2">
                <Quote className="w-4 h-4" />
              </div>

              <blockquote className="text-slate-700 text-sm italic leading-relaxed font-sans">
                "APEMS gave us the enterprise-grade control we needed to manage our AGMs and board elections seamlessly. The live-updating voting percentages and instant compliance certificates were incredibly reassuring for our auditors."
              </blockquote>

              <div className="flex items-center space-x-3.5 pt-4 border-t border-slate-200/60">
                <div className="w-10 h-10 rounded-full bg-red-600 text-white font-display font-bold text-xs flex items-center justify-center shadow-sm">
                  AN
                </div>
                <div>
                  <h5 className="font-display font-bold text-slate-900 text-xs tracking-tight">
                    Adaeze Nwosu
                  </h5>
                  <p className="text-[10px] font-mono text-slate-400 mt-0.5">
                    Director of Corporate Affairs, Zenith Bank Plc
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
