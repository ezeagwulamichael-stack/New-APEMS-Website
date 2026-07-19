/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Calendar, Users, Monitor, ExternalLink, ShieldCheck, Laptop } from "lucide-react";

interface HeroProps {
  onRequestDemo: () => void;
  onSpeakExpert: () => void;
}

export default function Hero({ onRequestDemo, onSpeakExpert }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-tr from-rose-50/60 via-white to-slate-100/70 overflow-hidden"
    >
      {/* Background soft grid pattern for a high-end tech finish */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-8 text-center relative z-10">
        {/* Small Brand Tag */}
        <div className="inline-flex items-center space-x-2 px-3 py-1 bg-red-50 border border-red-100 rounded-full text-[10px] font-mono tracking-widest text-red-600 uppercase mb-6 font-bold">
          <span className="flex h-1.5 w-1.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-600"></span>
          </span>
          <span>SECURE EVENT GOVERNANCE SUITE</span>
        </div>

        {/* Hero Title */}
        <h1 className="font-display font-medium text-3xl sm:text-5xl md:text-6xl tracking-tight text-slate-950 leading-[1.15] mb-8 max-w-5xl mx-auto">
          Powering Africa's <span className="text-red-600 font-bold">Most Important</span> <br className="hidden sm:inline" /> Meetings, Elections and Events.
        </h1>

        {/* Hero Subtext */}
        <p className="text-slate-600 text-base sm:text-lg md:text-xl font-sans max-w-3xl mx-auto leading-relaxed mb-10">
          APEMS is a robust enterprise event management suite meticulously engineered to support physical,
          virtual, and hybrid corporate assemblies from start to finish.
        </p>

        {/* Hero Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            id="hero-request-demo-btn"
            onClick={onRequestDemo}
            className="w-full sm:w-auto px-8 py-3.5 text-xs font-display font-bold tracking-wider text-white bg-red-600 hover:bg-red-700 active:scale-95 hover:translate-y-[-1px] rounded-full shadow-md hover:shadow-red-600/10 transition-all duration-200 uppercase outline-none focus:ring-2 focus:ring-red-500/40"
          >
            Request a Demo
          </button>
          <button
            id="hero-speak-expert-btn"
            onClick={onSpeakExpert}
            className="w-full sm:w-auto px-8 py-3.5 text-xs font-display font-bold tracking-wider text-slate-700 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 border border-slate-200 hover:border-slate-300 active:scale-95 hover:translate-y-[-1px] rounded-full transition-all duration-200 uppercase outline-none"
          >
            Speak to an Expert
          </button>
        </div>

        {/* Elegant Laptop & Browser Simulator */}
        <div id="product-simulator-container" className="relative max-w-4xl mx-auto pt-4">
          {/* Subtle atmospheric light glow behind browser */}
          <div className="absolute -inset-4 bg-gradient-to-r from-red-600/5 to-amber-600/5 rounded-[2rem] blur-2xl opacity-75 pointer-events-none" />

          {/* Browser Wrapper (Clean, modern laptop style representation) */}
          <div className="relative border border-slate-200/80 rounded-xl bg-slate-900 shadow-2xl overflow-hidden transition-all duration-500 hover:border-slate-300/80 hover:shadow-red-600/5 group text-left">
            
            {/* Top Browser Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-slate-950 border-b border-slate-800">
              <div className="flex items-center space-x-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/90 block" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/90 block" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/90 block" />
              </div>
              <div className="flex items-center space-x-2 px-3 py-1 bg-slate-900 rounded text-[10px] font-mono text-slate-400 w-1/2 justify-center border border-slate-800/80">
                <Laptop className="w-3 h-3 text-slate-500 mr-1.5" />
                <span>apems.africaprudential.com/events/ea2350...</span>
              </div>
              <div className="flex items-center space-x-1.5 text-xs text-green-400 font-medium font-mono">
                <span className="flex h-1.5 w-1.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
                </span>
                <span className="hidden sm:inline text-[9px] tracking-wider uppercase font-bold text-green-400/90">SECURE ACCREDITATION</span>
              </div>
            </div>

            {/* Dashboard Content Area */}
            <div className="grid grid-cols-12 bg-white text-slate-800 min-h-[440px] text-xs">
              
              {/* Sidebar Panel */}
              <div className="col-span-3 bg-slate-50 border-r border-slate-200/80 p-4 hidden sm:flex flex-col justify-between">
                <div>
                  {/* Sidebar Brand Logo */}
                  <div className="flex items-center space-x-2 mb-6">
                    <div className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center text-white font-bold text-xs">A</div>
                    <span className="font-display font-bold tracking-tight text-slate-900">APEMS</span>
                    <span className="px-1.5 py-0.5 bg-slate-200 text-slate-600 text-[8px] font-mono rounded-md font-bold">PORTAL</span>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <p className="text-[9px] font-mono tracking-wider uppercase text-slate-400 mb-2">MAIN MENU</p>
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2 px-2.5 py-2 rounded-lg bg-red-50 text-red-600 font-bold">
                          <Monitor className="w-3.5 h-3.5" />
                          <span>Dashboard</span>
                        </div>
                        <div className="flex items-center space-x-2 px-2.5 py-2 rounded-lg text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>My Events</span>
                        </div>
                        <div className="flex items-center space-x-2 px-2.5 py-2 rounded-lg text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors">
                          <Users className="w-3.5 h-3.5" />
                          <span>Voting Room</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <p className="text-[9px] font-mono tracking-wider uppercase text-slate-400 mb-2">SYSTEM STATUS</p>
                      <div className="bg-slate-100 rounded-lg p-2.5 border border-slate-200/60">
                        <div className="flex items-center justify-between text-[10px] mb-1">
                          <span className="text-slate-500">Live Quorum</span>
                          <span className="text-green-600 font-mono font-bold">94.8%</span>
                        </div>
                        <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-green-500 h-full w-[94.8%]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-[9px] font-mono text-slate-400 border-t border-slate-200 pt-2">
                  <span>Server Node: Lagos-NG</span>
                </div>
              </div>

              {/* Main Console Panel */}
              <div className="col-span-12 sm:col-span-9 p-5 flex flex-col justify-between">
                <div>
                  {/* Top Breadcrumb & Controls */}
                  <div className="flex items-center justify-between text-[10px] text-slate-400 mb-4 border-b border-slate-100 pb-3">
                    <div className="flex items-center space-x-2">
                      <span>Events</span>
                      <span>/</span>
                      <span>ea239503...</span>
                      <span>/</span>
                      <span className="text-slate-600 font-medium">Manage Console</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="px-2 py-0.5 bg-green-50 text-green-700 font-mono font-bold rounded border border-green-200/60 uppercase">
                        Verified SEC Quorum
                      </span>
                    </div>
                  </div>

                  {/* Header Title Block */}
                  <div className="mb-6">
                    <div className="flex items-center space-x-2.5 mb-1.5">
                      <span className="px-1.5 py-0.5 bg-red-100 text-red-700 text-[8px] font-mono font-bold uppercase rounded">VIRTUAL</span>
                      <span className="px-1.5 py-0.5 bg-indigo-100 text-indigo-700 text-[8px] font-mono font-bold uppercase rounded">SEC-REGULATED</span>
                    </div>
                    <h2 className="font-display font-bold text-slate-900 text-base sm:text-lg md:text-xl leading-tight">
                      1ST CONFERENCE MEETING OF DEMO LTD
                    </h2>
                    <p className="text-[10px] text-slate-500 mt-1 font-mono">
                      Sunday, July 19, 2026 • Virtual Event Plenary
                    </p>
                  </div>

                  {/* Main Overview / Acc / Engagement Sub-tabs */}
                  <div className="flex items-center space-x-4 border-b border-slate-100 mb-5 text-[11px] font-bold">
                    <span className="text-red-600 pb-2 border-b-2 border-b-red-600 cursor-pointer">Overview</span>
                    <span className="text-slate-500 pb-2 hover:text-slate-800 cursor-pointer transition-colors">Accreditation</span>
                    <span className="text-slate-500 pb-2 hover:text-slate-800 cursor-pointer transition-colors">Engagement</span>
                    <span className="text-slate-500 pb-2 hover:text-slate-800 cursor-pointer transition-colors">Statutory Reports</span>
                  </div>

                  {/* Metric overview panels */}
                  <div className="grid grid-cols-3 gap-3 mb-5">
                    <div className="bg-slate-50 border border-slate-100 rounded-lg p-3">
                      <p className="text-[9px] font-mono text-slate-400 uppercase tracking-wider">REPRESENTED SHARES</p>
                      <p className="font-display font-bold text-slate-900 text-lg md:text-xl mt-0.5">85.4M</p>
                      <span className="text-[9px] text-green-600 font-medium flex items-center mt-0.5">
                        • Verified Registry Sync
                      </span>
                    </div>
                    <div className="bg-slate-50 border border-slate-100 rounded-lg p-3">
                      <p className="text-[9px] font-mono text-slate-400 uppercase tracking-wider">TOTAL ATTENDEES</p>
                      <p className="font-display font-bold text-slate-900 text-lg md:text-xl mt-0.5">1,482</p>
                      <span className="text-[9px] text-slate-500 font-medium flex items-center mt-0.5">
                        1,102 Remote / 380 Proxies
                      </span>
                    </div>
                    <div className="bg-slate-50 border border-slate-100 rounded-lg p-3">
                      <p className="text-[9px] font-mono text-slate-400 uppercase tracking-wider">RESOLUTIONS VOTED</p>
                      <p className="font-display font-bold text-slate-900 text-lg md:text-xl mt-0.5">04 / 04</p>
                      <span className="text-[9px] text-indigo-600 font-medium flex items-center mt-0.5">
                        • Full Audit Complete
                      </span>
                    </div>
                  </div>
                </div>

                {/* Quick actions row inside browser mockup */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between pt-4 border-t border-slate-100 mt-4 gap-3 text-[10px]">
                  <div className="flex items-center space-x-2 text-slate-500">
                    <span className="font-mono text-slate-400 uppercase">QUICK ACTIONS:</span>
                    <span className="bg-slate-100 px-2 py-1 rounded hover:bg-slate-200 cursor-pointer transition-colors">Export Registry</span>
                    <span className="bg-slate-100 px-2 py-1 rounded hover:bg-slate-200 cursor-pointer transition-colors">Broadcast Notice</span>
                  </div>
                  <div className="flex items-center justify-between sm:justify-end space-x-2">
                    <button className="px-3 py-1.5 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-colors uppercase font-display tracking-wider text-[9px]">
                      LAUNCH BALLOT
                    </button>
                    <button className="px-2.5 py-1.5 border border-slate-200 hover:bg-slate-50 text-slate-600 font-bold rounded-lg flex items-center transition-colors">
                      <span>PUBLIC REGISTRATION LINK</span>
                      <ExternalLink className="w-2.5 h-2.5 ml-1" />
                    </button>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
