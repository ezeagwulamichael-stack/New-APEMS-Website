/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";

interface FooterProps {
  onJoinWaitlist: () => void;
  onSpeakExpert: () => void;
}

export default function Footer({ onJoinWaitlist, onSpeakExpert }: FooterProps) {
  const footerLinks = [
    { label: "Home", href: "#hero" },
    { label: "Product", href: "#about" },
    { label: "Solutions", href: "#capabilities" },
    { label: "Frequently Asked Questions", href: "#faq" },
  ];

  const tags = [
    "E-ELECTIONS",
    "ANNUAL GENERAL MEETINGS",
    "HYBRID STREAMING",
    "USSD INCLUSIVITY",
    "REGISTRAR SYNC",
    "SECURITIES COMPLIANCE",
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-400 pt-20 pb-12 relative overflow-hidden">
      {/* Absolute ambient lights inside footer for glowing visual */}
      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-red-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Left Column (Brand Contact & Quick Links) */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <p className="text-[10px] font-mono tracking-widest text-red-500 uppercase font-bold">
                SECURE. EVENT. GOVERNANCE.
              </p>
              <a
                href="mailto:info@africaprudential.com"
                className="block text-2xl sm:text-3xl font-display font-bold text-white hover:text-red-400 transition-colors duration-200"
              >
                info@africaprudential.com
              </a>
            </div>

            {/* Nav links list */}
            <div className="flex flex-wrap gap-x-8 gap-y-3 pt-4 border-t border-slate-900">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-xs font-display font-semibold hover:text-white transition-colors uppercase tracking-wider"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right Column (Branding Message & Waitlist Actions) */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3 max-w-xl">
              <p className="text-[10px] font-mono tracking-widest text-red-500 uppercase font-bold">
                UPGRADE YOUR REALITY
              </p>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Join over 100+ top-listed African organizations, boards, and registrars who power their critical stakeholder assemblies and board elections on APEMS.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                id="footer-waitlist-btn"
                onClick={onJoinWaitlist}
                className="px-6 py-3 text-xs font-display font-bold tracking-wider text-slate-900 bg-white hover:bg-slate-100 active:scale-95 transition-all duration-200 rounded-full shadow-sm text-center uppercase"
              >
                JOIN WAITLIST
              </button>
              <button
                id="footer-speak-expert-btn"
                onClick={onSpeakExpert}
                className="px-6 py-3 text-xs font-display font-bold tracking-wider text-white hover:text-slate-200 border border-slate-700 hover:border-slate-500 active:scale-95 transition-all duration-200 rounded-full text-center uppercase"
              >
                SPEAK TO AN EXPERT
              </button>
            </div>

            {/* Capabilities Tags list */}
            <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-900">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 bg-slate-900 border border-slate-900 hover:border-slate-800 transition-colors text-slate-400 hover:text-slate-200 rounded text-[9px] font-mono tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Thick Divider line */}
        <div className="w-full h-[1px] bg-slate-900 my-10" />

        {/* Huge glowing APEMS branding graphic text block */}
        <div className="py-8 select-none text-center">
          <h1 className="font-display font-extrabold text-[12vw] sm:text-[14vw] tracking-wider leading-none uppercase text-transparent bg-clip-text bg-gradient-to-b from-red-600 via-red-500 to-slate-950 footer-text-glow font-black">
            APEMS
          </h1>
        </div>

        {/* Bottom copyright info & policies */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-slate-600 pt-8 border-t border-slate-900">
          <span>
            © 2026 APEMS, Africa Prudential plc. All Rights Reserved.
          </span>
          <div className="flex space-x-6">
            <a href="#privacy" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-slate-400 transition-colors">Terms & Conditions</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
