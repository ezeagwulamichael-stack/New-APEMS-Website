/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { MessageSquare, Plus, Minus } from "lucide-react";
import { faqItems } from "../data";

interface FAQSectionProps {
  onContactSupport: () => void;
}

export default function FAQSection({ onContactSupport }: FAQSectionProps) {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const handleKeyDown = (e: React.KeyboardEvent, id: string) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleAccordion(id);
    }
  };

  return (
    <section id="faq" className="py-20 bg-slate-50/50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column Intro info */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <div className="space-y-2">
              <p className="text-[10px] font-mono tracking-widest text-red-600 uppercase font-bold">
                ASSISTANCE & SUPPORT
              </p>
              <h3 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
                Frequently Asked <br className="hidden sm:inline" /> Questions
              </h3>
            </div>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-md">
              Get detailed, official answers to the most common queries regarding security, deployment, USSD inclusion, and regulatory compliance on APEMS.
            </p>
            
            {/* Dark Support Desk Button */}
            <div className="pt-2">
              <button
                id="contact-support-btn"
                onClick={onContactSupport}
                className="inline-flex items-center space-x-2.5 px-6 py-3.5 text-xs font-display font-bold tracking-wider text-white bg-slate-950 hover:bg-slate-900 active:bg-black rounded-xl shadow-sm hover:shadow-md transition-all duration-200 uppercase outline-none focus:ring-2 focus:ring-slate-500/40"
              >
                <MessageSquare className="w-4 h-4 text-red-500" />
                <span>CONTACT SUPPORT DESK</span>
              </button>
            </div>
          </div>

          {/* Right Column Accordion List */}
          <div className="lg:col-span-7 space-y-3.5">
            {faqItems.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  className={`border border-slate-150 rounded-xl overflow-hidden transition-all duration-300 bg-white ${
                    isOpen ? "shadow-sm border-slate-200" : "hover:border-slate-300"
                  }`}
                >
                  {/* Clickable Question trigger row */}
                  <div
                    role="button"
                    tabIndex={0}
                    onClick={() => toggleAccordion(item.id)}
                    onKeyDown={(e) => handleKeyDown(e, item.id)}
                    className="w-full flex items-center justify-between p-5 text-left font-display font-bold text-slate-900 text-xs sm:text-sm select-none cursor-pointer transition-colors hover:text-red-600 outline-none focus-visible:ring-2 focus-visible:ring-red-500/40"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${item.id}`}
                  >
                    <span className="pr-4 leading-tight">{item.question}</span>
                    <span className="shrink-0 w-6 h-6 rounded-full bg-slate-50 flex items-center justify-center border border-slate-200/60 text-slate-500 transition-transform">
                      {isOpen ? (
                        <Minus className="w-3.5 h-3.5 text-red-600" />
                      ) : (
                        <Plus className="w-3.5 h-3.5" />
                      )}
                    </span>
                  </div>

                  {/* Collapsible Answer Panel */}
                  <div
                    id={`faq-panel-${item.id}`}
                    role="region"
                    aria-labelledby={`faq-trigger-${item.id}`}
                    className={`transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-[300px] border-t border-slate-100 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                    }`}
                  >
                    <div className="p-5 text-slate-500 text-xs sm:text-sm leading-relaxed bg-slate-50/50">
                      {item.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
