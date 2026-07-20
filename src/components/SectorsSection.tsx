/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import { sectors } from "../data";

// Import custom generated high-quality images for each sector
import sectorCorporate from "../assets/images/sector_corporate_agm_1784502265595.jpg";
import sectorSecurity from "../assets/images/sector_security_noc_1784502278481.jpg";
import sectorFinance from "../assets/images/sector_finance_boardroom_1784502290896.jpg";
import sectorPublic from "../assets/images/sector_public_assembly_1784502301733.jpg";
import sectorAssociations from "../assets/images/sector_associations_hall_1784502316929.jpg";
import sectorCooperatives from "../assets/images/sector_cooperatives_meeting_1784502329248.jpg";
import sectorElections from "../assets/images/sector_elections_observers_1784502340261.jpg";
import sectorEntertainment from "../assets/images/sector_entertainment_awards_1784502352158.jpg";
import sectorEducation from "../assets/images/sector_education_guild_1784502367761.jpg";
import sectorHealth from "../assets/images/sector_health_boardroom_1784502378502.jpg";
import sectorNonprofit from "../assets/images/sector_nonprofit_ngo_1784502389041.jpg";

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
        return sectorCorporate;
      case "security":
        return sectorSecurity;
      case "finance":
        return sectorFinance;
      case "public":
        return sectorPublic;
      case "associations":
        return sectorAssociations;
      case "cooperatives":
        return sectorCooperatives;
      case "elections":
        return sectorElections;
      case "entertainment":
        return sectorEntertainment;
      case "education":
        return sectorEducation;
      case "health":
        return sectorHealth;
      case "nonprofit":
        return sectorNonprofit;
      default:
        return sectorCorporate;
    }
  };

  const getSectorImageAlt = (theme: string) => {
    switch (theme) {
      case "corporate":
        return "A professional photograph of diverse African corporate executives and shareholders attending a formal Annual General Meeting (AGM) in a modern bright boardroom.";
      case "security":
        return "A high-quality photograph of cybersecurity professionals in a high-tech modern network operations center with glowing screens showing charts and maps.";
      case "finance":
        return "A professional photograph of African finance professionals and investment bankers in a modern financial office boardroom discussing analytics.";
      case "public":
        return "A professional photograph of African public sector officials and government representatives seated in a formal legislative assembly hall.";
      case "associations":
        return "A professional photograph of members of a professional African medical or legal association attending a modern conference hall.";
      case "cooperatives":
        return "A beautiful professional photograph of a cooperative committee meeting with diverse African farmers and representatives seated together.";
      case "elections":
        return "A high-quality professional photograph of independent African electoral observers and officials monitoring a secure voting station.";
      case "entertainment":
        return "A high-quality, vibrant photograph of a modern African entertainment awards ceremony or live television gala with elegant attendees.";
      case "education":
        return "A professional photograph of an African university governing council or student union board meeting in a modern academic hall.";
      case "health":
        return "A professional photograph of healthcare board members and medical researchers in a clean, modern hospital boardroom.";
      case "nonprofit":
        return "A professional photograph of African and international NGO representatives holding a meeting in a bright workspace to collaborate on development.";
      default:
        return "A professional corporate photograph illustrating the organizational sector.";
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
              alt={getSectorImageAlt(activeSector.imageTheme)}
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
