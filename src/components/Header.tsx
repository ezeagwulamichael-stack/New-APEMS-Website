/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

interface HeaderProps {
  onRequestDemo: () => void;
}

export default function Header({ onRequestDemo }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const navLinks = [
    { label: "HOME", href: "#hero", sectionId: "hero" },
    { label: "PRODUCT", href: "#about", sectionId: "about" },
    { label: "SOLUTIONS", href: "#capabilities", sectionId: "capabilities" },
    { label: "USE CASES", href: "#sectors", sectionId: "sectors" },
    { label: "FAQS", href: "#faq", sectionId: "faq" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section spy
      const scrollPosition = window.scrollY + 100;
      for (const link of navLinks) {
        const el = document.getElementById(link.sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.sectionId);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      // Offset for sticky header
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveSection(sectionId);
    }
  };

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
        {/* Logo Section */}
        <a href="#hero" onClick={(e) => handleNavClick(e, "hero")} className="flex items-center space-x-2.5 group">
          <div className="relative flex items-center justify-center w-9 h-9 rounded-full bg-red-600 text-white font-display font-bold text-lg shadow-sm transition-transform duration-300 group-hover:scale-105">
            A
          </div>
          <div className="flex flex-col">
            <span className={`font-display font-bold text-xl tracking-tight leading-none transition-colors duration-300 ${
              isScrolled ? "text-slate-900" : "text-white"
            }`}>
              APEMS
            </span>
            <span className={`text-[7.5px] font-mono tracking-[0.2em] uppercase leading-none mt-0.5 font-bold transition-colors duration-300 ${
              isScrolled ? "text-slate-500" : "text-slate-300"
            }`}>
              AFRICA PRUDENTIAL
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.sectionId)}
              className={`text-xs font-display font-bold tracking-wider transition-colors duration-200 relative py-1.5 ${
                activeSection === link.sectionId
                  ? "text-red-500"
                  : isScrolled
                  ? "text-slate-600 hover:text-slate-900"
                  : "text-slate-200 hover:text-white"
              }`}
            >
              {link.label}
              {activeSection === link.sectionId && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-red-500 rounded-full animate-draw-line" />
              )}
            </a>
          ))}
        </nav>

        {/* Action Button Desktop */}
        <div className="hidden md:flex items-center">
          <button
            id="header-cta"
            onClick={onRequestDemo}
            className="px-5 py-2.5 text-xs font-display font-bold tracking-wider text-white bg-red-600 hover:bg-red-700 active:scale-95 transition-all duration-200 rounded-full shadow-sm hover:shadow-md outline-none focus:ring-2 focus:ring-red-500/40 cursor-pointer"
          >
            REQUEST A DEMO
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`flex md:hidden items-center justify-center p-1.5 rounded-lg transition-colors ${
            isScrolled
              ? "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              : "text-white hover:text-white hover:bg-white/10"
          }`}
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        id="mobile-menu-drawer"
        className={`fixed inset-0 top-[65px] z-40 bg-white/98 backdrop-blur-lg md:hidden flex flex-col justify-between py-10 px-8 transition-all duration-300 ease-in-out border-t border-slate-100 ${
          isMobileMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
        }`}
      >
        <div className="flex flex-col space-y-6">
          {navLinks.map((link, idx) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.sectionId)}
              className={`text-lg font-display font-bold tracking-wide py-2 border-b border-slate-50 transition-colors flex items-center justify-between ${
                activeSection === link.sectionId
                  ? "text-red-600 pl-2 border-l-2 border-l-red-600"
                  : "text-slate-700 hover:text-slate-900"
              }`}
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              <span>{link.label}</span>
              <ArrowRight className={`w-4 h-4 opacity-50 ${activeSection === link.sectionId ? "text-red-600 opacity-100" : ""}`} />
            </a>
          ))}
        </div>

        <div className="flex flex-col space-y-4">
          <p className="text-xs font-mono text-slate-400 uppercase tracking-widest text-center">
            Enterprise Event Governance
          </p>
          <button
            id="mobile-drawer-cta"
            onClick={() => {
              setIsMobileMenuOpen(false);
              onRequestDemo();
            }}
            className="w-full py-3.5 text-xs font-display font-bold tracking-wider text-white bg-red-600 hover:bg-red-700 active:scale-98 transition-all duration-200 rounded-full text-center shadow-md shadow-red-600/10"
          >
            REQUEST A DEMO
          </button>
        </div>
      </div>
    </header>
  );
}
