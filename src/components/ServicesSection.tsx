/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Check, CheckCircle2, Search, Send, FileText, Vote, Layers, Users, TrendingUp, HelpCircle, HardDrive, RefreshCw } from "lucide-react";
import { services } from "../data";

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState("registration");

  // State for Registration & Accreditation Simulator
  const [attendees, setAttendees] = useState([
    { name: "Alhaji Aliko Dangote", folio: "FL-58231", weight: 1.2, status: "Accredited" },
    { name: "Femi Otedola", folio: "FL-40210", weight: 0.85, status: "Pending Approval" },
    { name: "Tony Elumelu", folio: "FL-31089", weight: 0.41, status: "Accredited" },
    { name: "Dr. Ngozi Okonjo-Iweala", folio: "FL-72881", weight: 0.15, status: "Pending Approval" },
  ]);
  const [searchQuery, setSearchQuery] = useState("");

  // State for Electronic Voting Simulator
  const [votesCount, setVotesCount] = useState({ yes: 7420, no: 1102, abstain: 480 });
  const [userVoted, setUserVoted] = useState<string | null>(null);

  // State for Proxy Voting Simulator
  const [proxies, setProxies] = useState([
    { doc: "Chevron Nominee Form", weight: 4.2, status: "Pending Signatures" },
    { doc: "Zenith Nominees Ltd Card", weight: 12.5, status: "Accredited" },
    { doc: "Oando Plenary Card", weight: 2.1, status: "Pending Signatures" },
  ]);

  // State for Stakeholder Engagement Simulator
  const [comments, setComments] = useState([
    { user: "Tunde (Lagos)", comment: "Clean and clear feed! Thanks APEMS." },
    { user: "Mariam (Abuja)", comment: "Are we voting on Resolution 3 now?" },
    { user: "Chidi (Port Harcourt)", comment: "Excellent AGM setup." },
  ]);
  const [newComment, setNewComment] = useState("");
  const [pollVote, setPollVote] = useState<string | null>(null);

  // State for Reporting & Analytics Simulator
  const [isCompiling, setIsCompiling] = useState(false);
  const [compileSuccess, setCompileSuccess] = useState(false);

  // State for Hybrid Hardware Sync Simulator
  const [pinging, setPinging] = useState(false);
  const [pingStatus, setPingStatus] = useState("Idle");

  // Get current active service
  const activeService = services.find((s) => s.id === activeTab) || services[0];

  // Handler for Accredit click
  const handleAccredit = (index: number) => {
    const updated = [...attendees];
    updated[index].status = "Accredited";
    setAttendees(updated);
  };

  // Handler for Voting click
  const handleCastVote = (option: "yes" | "no" | "abstain") => {
    if (userVoted) return; // limit to one vote
    setUserVoted(option);
    setVotesCount((prev) => ({
      ...prev,
      [option]: prev[option] + 500, // mock adding a block of shares
    }));
  };

  // Handler for Proxy validation
  const handleValidateProxy = (index: number) => {
    const updated = [...proxies];
    updated[index].status = "Accredited";
    setProxies(updated);
  };

  // Handler for sending a live comment
  const handleSendComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    setComments((prev) => [...prev, { user: "You", comment: newComment }]);
    setNewComment("");
  };

  // Handler for compiling statutory report
  const handleCompileReport = () => {
    setIsCompiling(true);
    setCompileSuccess(false);
    setTimeout(() => {
      setIsCompiling(false);
      setCompileSuccess(true);
    }, 1500);
  };

  // Handler for pinging hardware transceivers
  const handlePingHardware = () => {
    setPinging(true);
    setPingStatus("Scanning...");
    setTimeout(() => {
      setPinging(false);
      setPingStatus("Online - 450 keypads synced perfectly!");
    }, 1200);
  };

  const totalRegisteredMetric = attendees.length;
  const accreditedMetric = attendees.filter((a) => a.status === "Accredited").length;
  const computedQuorumRate = Math.round((accreditedMetric / totalRegisteredMetric) * 100);

  const totalShares = votesCount.yes + votesCount.no + votesCount.abstain;
  const yesPct = ((votesCount.yes / totalShares) * 100).toFixed(1);
  const noPct = ((votesCount.no / totalShares) * 100).toFixed(1);
  const abstainPct = ((votesCount.abstain / totalShares) * 100).toFixed(1);

  return (
    <section id="capabilities" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Header section */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-[10px] font-mono tracking-widest text-red-600 uppercase font-bold">
            WHAT WE OFFER / SERVICES
          </p>
          <h3 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight mt-2">
            Explore Our Platform Capabilities
          </h3>
          <p className="text-slate-500 text-xs sm:text-sm mt-3 leading-relaxed">
            Explore our full range of expert services designed to keep your events and meetings powered, safe, and up to code. Click a tab below to test the live simulator!
          </p>
        </div>

        {/* Tab Selector Strip - Horizontal Scrollable on mobile */}
        <div className="flex overflow-x-auto pb-4 mb-12 scrollbar-none gap-2 border-b border-slate-100">
          <div className="flex space-x-2 mx-auto px-4 md:px-0">
            {services.map((service) => {
              const isActive = service.id === activeTab;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(service.id)}
                  className={`px-4.5 py-3 rounded-full text-xs font-display font-bold tracking-wider whitespace-nowrap transition-all duration-200 uppercase outline-none ${
                    isActive
                      ? "bg-red-600 text-white shadow-md shadow-red-600/10"
                      : "bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200/40"
                  }`}
                >
                  {service.tabLabel}
                </button>
              );
            })}
          </div>
        </div>

        {/* Simulation Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Panel: Dynamic Service Details */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 animate-fade-in" key={`${activeTab}-left`}>
            <div>
              {/* Service Icon indicator and text */}
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-red-50 border border-red-100 rounded-full text-[10px] font-mono tracking-widest text-red-600 uppercase mb-4 font-bold">
                <span>ACTIVE SERVICE</span>
              </div>
              <h4 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 tracking-tight leading-tight">
                {activeService.title}
              </h4>
              <p className="text-slate-500 text-xs sm:text-sm mt-3 leading-relaxed">
                {activeService.description}
              </p>

              {/* Feature Checklist */}
              <div className="mt-8 space-y-3.5">
                <p className="text-[10px] font-mono tracking-wider uppercase text-slate-400 font-bold">
                  CORE FEATURES & SPECIFICATIONS:
                </p>
                {activeService.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-xs sm:text-sm leading-tight">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-6 border-t border-slate-100">
              <button
                onClick={() => {
                  const headerCta = document.getElementById("header-cta");
                  if (headerCta) headerCta.click();
                }}
                className="px-6 py-3 text-xs font-display font-bold tracking-wider text-white bg-red-600 hover:bg-red-700 active:scale-95 transition-all duration-200 rounded-full shadow-sm text-center uppercase"
              >
                REQUEST A DEMO
              </button>
              <button
                onClick={() => {
                  const speakCta = document.getElementById("hero-speak-expert-btn");
                  if (speakCta) (speakCta as HTMLButtonElement).click();
                }}
                className="px-6 py-3 text-xs font-display font-bold tracking-wider text-slate-600 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 border border-slate-200 active:scale-95 transition-all duration-200 rounded-full text-center uppercase"
              >
                SPEAK TO AN EXPERT
              </button>
            </div>
          </div>

          {/* Right Panel: Interactive Light-Theme Dashboard Simulator */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200/80 rounded-2xl p-4 sm:p-6 shadow-sm flex flex-col justify-between min-h-[460px] animate-fade-in" key={`${activeTab}-right`}>
            
            {/* Top Dashboard Banner */}
            <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
              <div className="flex items-center space-x-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse" />
                <span className="font-mono text-[9px] tracking-wider text-slate-400 uppercase font-bold">
                  APEMS Engine / {activeService.id.toUpperCase()}_DESK
                </span>
              </div>
              <div className="flex items-center space-x-1 px-2 py-0.5 bg-green-50 border border-green-200 rounded text-[9px] font-mono text-green-700 uppercase font-bold">
                <span>SIMULATION ACTIVE</span>
              </div>
            </div>

            {/* Simulated Content Dashboard */}
            <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm flex-1 flex flex-col justify-between">
              
              {/* 1. Registration & Accreditation Simulator */}
              {activeTab === "registration" && (
                <div className="space-y-4 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Simulator Metrics row */}
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      <div className="bg-slate-50 border border-slate-100 rounded-lg p-2.5 text-center">
                        <p className="text-[9px] text-slate-400 font-mono">TOTAL REGISTERED</p>
                        <p className="font-display font-bold text-base text-slate-800 mt-0.5">{totalRegisteredMetric}</p>
                      </div>
                      <div className="bg-slate-50 border border-slate-100 rounded-lg p-2.5 text-center">
                        <p className="text-[9px] text-slate-400 font-mono">ACCREDITED</p>
                        <p className="font-display font-bold text-base text-green-600 mt-0.5">{accreditedMetric}</p>
                      </div>
                      <div className="bg-slate-50 border border-slate-100 rounded-lg p-2.5 text-center">
                        <p className="text-[9px] text-slate-400 font-mono">QUORUM RATE</p>
                        <p className="font-display font-bold text-base text-red-600 mt-0.5">{computedQuorumRate}%</p>
                      </div>
                    </div>

                    {/* Search bar inside dashboard */}
                    <div className="relative mb-3.5">
                      <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
                      <input
                        type="text"
                        placeholder="Search attendee by name, folio number..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-8 pr-3 py-2 text-xs border border-slate-200 rounded-lg outline-none focus:ring-1 focus:ring-red-500/40 bg-slate-50/50 focus:bg-white transition-all"
                      />
                    </div>

                    {/* Attendee Queue */}
                    <p className="text-[9px] font-mono tracking-wider text-slate-400 uppercase font-bold mb-2">
                      REGISTRY ATTENDEES (CLICK TO ACCREDIT):
                    </p>
                    <div className="space-y-2">
                      {attendees
                        .filter((a) => a.name.toLowerCase().includes(searchQuery.toLowerCase()))
                        .map((att, idx) => (
                          <div
                            key={idx}
                            className="flex items-center justify-between p-2 rounded-lg bg-slate-50 hover:bg-slate-100/70 border border-slate-100 transition-colors"
                          >
                            <div>
                              <p className="text-xs font-bold text-slate-800">{att.name}</p>
                              <p className="text-[9px] text-slate-400 font-mono">Folio: {att.folio} • Weight: {att.weight}%</p>
                            </div>
                            <div>
                              {att.status === "Accredited" ? (
                                <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full bg-green-50 text-green-700 border border-green-200 text-[10px] font-bold">
                                  <Check className="w-3 h-3 stroke-[2.5]" />
                                  <span>Accredited</span>
                                </span>
                              ) : (
                                <button
                                  onClick={() => handleAccredit(idx)}
                                  className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white font-display font-bold text-[9px] rounded-lg shadow-sm transition-colors uppercase tracking-wider"
                                >
                                  Verify & Approve
                                </button>
                              )}
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                  <p className="text-[9px] font-mono text-slate-400 italic text-center mt-4">
                    *Tip: Click "Verify & Approve" above to test real-time accreditation weight updates!
                  </p>
                </div>
              )}

              {/* 2. Electronic Voting Simulator */}
              {activeTab === "voting" && (
                <div className="space-y-4 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Voting Metrics row */}
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      <div className="bg-slate-50 border border-slate-100 rounded-lg p-2.5 text-center">
                        <p className="text-[9px] text-slate-400 font-mono">ACTIVE RESOLUTIONS</p>
                        <p className="font-display font-bold text-base text-slate-800 mt-0.5">3 Pending</p>
                      </div>
                      <div className="bg-slate-50 border border-slate-100 rounded-lg p-2.5 text-center">
                        <p className="text-[9px] text-slate-400 font-mono">TOTAL SHARES CAST</p>
                        <p className="font-display font-bold text-base text-red-600 mt-0.5">{totalShares.toLocaleString()}</p>
                      </div>
                      <div className="bg-slate-50 border border-slate-100 rounded-lg p-2.5 text-center">
                        <p className="text-[9px] text-slate-400 font-mono">ELECTORAL QUORUM</p>
                        <p className="font-display font-bold text-base text-slate-800 mt-0.5">74.2%</p>
                      </div>
                    </div>

                    {/* Resolution Card */}
                    <div className="bg-red-50/40 border border-red-100 rounded-xl p-4 mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[8.5px] font-mono text-red-600 uppercase tracking-wider font-bold">
                          BALLOT ITEM RESOLUTION #1
                        </span>
                        <span className="px-1.5 py-0.5 bg-red-600 text-white text-[8px] font-mono rounded font-bold uppercase">
                          VOTING OPEN
                        </span>
                      </div>
                      <p className="text-xs font-bold text-slate-800 leading-tight">
                        "To approve the appointment of Ernst & Young as External Auditors and authorize Directors to fix their remuneration."
                      </p>
                    </div>

                    {/* Voting Progress / Cast Ballot Options */}
                    <p className="text-[9px] font-mono tracking-wider text-slate-400 uppercase font-bold mb-2">
                      LIVE BALLOT RESULTS & CAST BUTTONS:
                    </p>
                    <div className="space-y-3">
                      {/* Yes Resolution Bar */}
                      <div>
                        <div className="flex items-center justify-between text-xs mb-1 font-semibold">
                          <span className="text-slate-700">Approve (YES)</span>
                          <span className="text-slate-900 font-mono">{yesPct}% ({votesCount.yes} shares)</span>
                        </div>
                        <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                          <div className="bg-green-500 h-full transition-all duration-500" style={{ width: `${yesPct}%` }} />
                        </div>
                      </div>

                      {/* No Resolution Bar */}
                      <div>
                        <div className="flex items-center justify-between text-xs mb-1 font-semibold">
                          <span className="text-slate-700">Reject (NO)</span>
                          <span className="text-slate-900 font-mono">{noPct}% ({votesCount.no} shares)</span>
                        </div>
                        <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                          <div className="bg-red-500 h-full transition-all duration-500" style={{ width: `${noPct}%` }} />
                        </div>
                      </div>

                      {/* Abstain Resolution Bar */}
                      <div>
                        <div className="flex items-center justify-between text-xs mb-1 font-semibold">
                          <span className="text-slate-700">Abstain</span>
                          <span className="text-slate-900 font-mono">{abstainPct}% ({votesCount.abstain} shares)</span>
                        </div>
                        <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                          <div className="bg-slate-400 h-full transition-all duration-500" style={{ width: `${abstainPct}%` }} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Cast Ballot Interaction */}
                  <div className="pt-2 border-t border-slate-100">
                    {userVoted ? (
                      <div className="bg-green-50 border border-green-200 rounded-lg p-2.5 text-center text-xs text-green-700 font-medium">
                        ✓ Your secure vote of 500 shares has been cast for "{userVoted.toUpperCase()}" and added to the SEC ledger!
                      </div>
                    ) : (
                      <div className="flex items-center justify-center space-x-2">
                        <button
                          onClick={() => handleCastVote("yes")}
                          className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-[10px] font-display font-bold tracking-wider rounded-lg transition-colors uppercase"
                        >
                          Vote YES
                        </button>
                        <button
                          onClick={() => handleCastVote("no")}
                          className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-[10px] font-display font-bold tracking-wider rounded-lg transition-colors uppercase"
                        >
                          Vote NO
                        </button>
                        <button
                          onClick={() => handleCastVote("abstain")}
                          className="px-4 py-2 bg-slate-500 hover:bg-slate-600 text-white text-[10px] font-display font-bold tracking-wider rounded-lg transition-colors uppercase"
                        >
                          Abstain
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* 3. Proxy Voting Simulator */}
              {activeTab === "proxy" && (
                <div className="space-y-4 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      <div className="bg-slate-50 border border-slate-100 rounded-lg p-2.5 text-center">
                        <p className="text-[9px] text-slate-400 font-mono">PROXY FORMS FILED</p>
                        <p className="font-display font-bold text-base text-slate-800 mt-0.5">342</p>
                      </div>
                      <div className="bg-slate-50 border border-slate-100 rounded-lg p-2.5 text-center">
                        <p className="text-[9px] text-slate-400 font-mono">VERIFIED CARDS</p>
                        <p className="font-display font-bold text-base text-green-600 mt-0.5">
                          {proxies.filter((p) => p.status === "Accredited").length + 338}
                        </p>
                      </div>
                      <div className="bg-slate-50 border border-slate-100 rounded-lg p-2.5 text-center">
                        <p className="text-[9px] text-slate-400 font-mono">PROXY SHARE WEIGHT</p>
                        <p className="font-display font-bold text-base text-red-600 mt-0.5">24.8%</p>
                      </div>
                    </div>

                    <p className="text-[9px] font-mono tracking-wider text-slate-400 uppercase font-bold mb-2">
                      INCOMING PROXY CARD FILINGS:
                    </p>
                    <div className="space-y-2">
                      {proxies.map((prx, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-100"
                        >
                          <div className="flex items-center space-x-2.5">
                            <FileText className="w-5 h-5 text-red-600 shrink-0" />
                            <div>
                              <p className="text-xs font-bold text-slate-800">{prx.doc}</p>
                              <p className="text-[9px] text-slate-400 font-mono">Registry Weight: {prx.weight}% • Signed Seal</p>
                            </div>
                          </div>
                          <div>
                            {prx.status === "Accredited" ? (
                              <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full bg-green-50 text-green-700 border border-green-200 text-[10px] font-bold">
                                <Check className="w-3 h-3 stroke-[2.5]" />
                                <span>Verified</span>
                              </span>
                            ) : (
                              <button
                                onClick={() => handleValidateProxy(idx)}
                                className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white font-display font-bold text-[9px] rounded-lg shadow-sm transition-colors uppercase tracking-wider"
                              >
                                Approve Signature
                              </button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <p className="text-[9px] font-mono text-slate-400 italic text-center mt-4">
                    *Tip: Use "Approve Signature" to run optical validation and merge proxy voting weights instantly!
                  </p>
                </div>
              )}

              {/* 4. Stakeholder Engagement Simulator */}
              {activeTab === "engagement" && (
                <div className="space-y-4 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Live stream view screen placeholder */}
                    <div className="relative aspect-video bg-slate-900 rounded-xl overflow-hidden mb-3 border border-slate-800 shadow-inner flex items-center justify-center">
                      <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=400')" }} />
                      
                      {/* Floating livestream overlay indicators */}
                      <div className="absolute top-3 left-3 flex items-center space-x-1.5">
                        <span className="px-1.5 py-0.5 bg-red-600 text-white font-bold font-mono text-[8px] rounded uppercase flex items-center">
                          <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping mr-1" />
                          LIVE STREAM
                        </span>
                        <span className="px-1.5 py-0.5 bg-slate-950/70 text-white text-[8px] font-mono rounded">
                          1,205 Watching
                        </span>
                      </div>

                      {/* Small mock video center icon */}
                      <div className="relative z-10 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 text-white hover:scale-110 transition-transform cursor-pointer">
                        <Vote className="w-5 h-5 text-red-500 fill-red-500" />
                      </div>
                    </div>

                    {/* Live Scrolling Chat Comments */}
                    <p className="text-[9px] font-mono tracking-wider text-slate-400 uppercase font-bold mb-2">
                      LIVE PLENARY CHAT & COMMENTS:
                    </p>
                    <div className="space-y-1.5 max-h-[100px] overflow-y-auto bg-slate-50 p-2 rounded-lg border border-slate-100">
                      {comments.map((comm, idx) => (
                        <p key={idx} className="text-[10px] leading-tight">
                          <strong className="text-red-600">{comm.user}: </strong>
                          <span className="text-slate-700">{comm.comment}</span>
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Send chat text input */}
                  <form onSubmit={handleSendComment} className="flex gap-2 pt-2 border-t border-slate-100">
                    <input
                      type="text"
                      placeholder="Ask a question or comment..."
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      className="flex-1 px-3 py-1.5 text-xs border border-slate-200 rounded-lg outline-none focus:ring-1 focus:ring-red-500/40"
                    />
                    <button
                      type="submit"
                      className="px-3 bg-red-600 hover:bg-red-700 text-white rounded-lg flex items-center justify-center transition-colors"
                    >
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </form>
                </div>
              )}

              {/* 5. Reporting & Analytics Simulator */}
              {activeTab === "reporting" && (
                <div className="space-y-4 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      <div className="bg-slate-50 border border-slate-100 rounded-lg p-2.5 text-center">
                        <p className="text-[9px] text-slate-400 font-mono">REPORTS COMPILED</p>
                        <p className="font-display font-bold text-base text-slate-800 mt-0.5">{compileSuccess ? "15" : "14"}</p>
                      </div>
                      <div className="bg-slate-50 border border-slate-100 rounded-lg p-2.5 text-center">
                        <p className="text-[9px] text-slate-400 font-mono">AUDIT STATUS</p>
                        <p className="font-display font-bold text-base text-green-600 mt-0.5">SEC Verified</p>
                      </div>
                      <div className="bg-slate-50 border border-slate-100 rounded-lg p-2.5 text-center">
                        <p className="text-[9px] text-slate-400 font-mono">COMPLIANCE SCORE</p>
                        <p className="font-display font-bold text-base text-red-600 mt-0.5">100%</p>
                      </div>
                    </div>

                    <p className="text-[9px] font-mono tracking-wider text-slate-400 uppercase font-bold mb-2">
                      REAL-TIME PARTICIPATION METRICS BY SEGMENT:
                    </p>
                    
                    {/* Pure CSS Visual Bar Chart */}
                    <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 space-y-2.5">
                      {/* Bar 1 */}
                      <div>
                        <div className="flex justify-between text-[10px] text-slate-600 font-medium mb-1">
                          <span>Institutional Investors (78% Quorum)</span>
                          <span>62.4M Shares</span>
                        </div>
                        <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-red-600 h-full w-[78%]" />
                        </div>
                      </div>
                      {/* Bar 2 */}
                      <div>
                        <div className="flex justify-between text-[10px] text-slate-600 font-medium mb-1">
                          <span>Retail Shareholders (45% Quorum)</span>
                          <span>18.2M Shares</span>
                        </div>
                        <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-amber-500 h-full w-[45%]" />
                        </div>
                      </div>
                      {/* Bar 3 */}
                      <div>
                        <div className="flex justify-between text-[10px] text-slate-600 font-medium mb-1">
                          <span>Foreign Affiliates (94% Quorum)</span>
                          <span>4.8M Shares</span>
                        </div>
                        <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-indigo-600 h-full w-[94%]" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Actions Area */}
                  <div className="pt-2 border-t border-slate-100 text-center">
                    {isCompiling ? (
                      <button
                        disabled
                        className="px-6 py-2.5 bg-slate-100 text-slate-500 font-display font-bold text-xs rounded-lg flex items-center justify-center mx-auto space-x-2"
                      >
                        <RefreshCw className="w-4 h-4 animate-spin text-red-600" />
                        <span>Generating Sealed Statutory Package...</span>
                      </button>
                    ) : compileSuccess ? (
                      <div className="space-y-2">
                        <div className="bg-green-50 border border-green-200 text-green-700 rounded-lg py-2 px-3 text-xs font-semibold">
                          ✓ Statutory Compliance PDF bundle successfully compiled with cryptographic hash signature!
                        </div>
                        <button
                          onClick={handleCompileReport}
                          className="text-[10px] font-mono text-red-600 hover:text-red-700 underline font-bold"
                        >
                          Compile again
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={handleCompileReport}
                        className="px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white font-display font-bold text-xs rounded-lg shadow-sm hover:shadow-red-600/10 transition-colors uppercase tracking-wider flex items-center justify-center mx-auto space-x-2"
                      >
                        <FileText className="w-4 h-4" />
                        <span>Compile Statutory Audit Report</span>
                      </button>
                    )}
                  </div>
                </div>
              )}

              {/* 6. Hybrid Hardware Sync Simulator */}
              {activeTab === "hybrid" && (
                <div className="space-y-4 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      <div className="bg-slate-50 border border-slate-100 rounded-lg p-2.5 text-center">
                        <p className="text-[9px] text-slate-400 font-mono">KEYPADS ACTIVE</p>
                        <p className="font-display font-bold text-base text-slate-800 mt-0.5">450</p>
                      </div>
                      <div className="bg-slate-50 border border-slate-100 rounded-lg p-2.5 text-center">
                        <p className="text-[9px] text-slate-400 font-mono">SMARTCARDS PRINTED</p>
                        <p className="font-display font-bold text-base text-red-600 mt-0.5">112</p>
                      </div>
                      <div className="bg-slate-50 border border-slate-100 rounded-lg p-2.5 text-center">
                        <p className="text-[9px] text-slate-400 font-mono">USSD BACKUPS</p>
                        <p className="font-display font-bold text-base text-slate-800 mt-0.5">15 Active</p>
                      </div>
                    </div>

                    <p className="text-[9px] font-mono tracking-wider text-slate-400 uppercase font-bold mb-2">
                      HARDWARE GATEWAY STATUS:
                    </p>
                    <div className="space-y-2 text-xs">
                      <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-100">
                        <span className="font-mono text-slate-500 font-semibold">Radio Transceiver Hub 1</span>
                        <span className="text-green-600 font-bold">● Connected (100% Signal)</span>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-100">
                        <span className="font-mono text-slate-500 font-semibold">Thermal Badge Printer Hub 2</span>
                        <span className="text-green-600 font-bold">● Ready (Paper Feed Ok)</span>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-100">
                        <span className="font-mono text-slate-500 font-semibold">USSD Cellular Gateway (*7006#)</span>
                        <span className="text-green-600 font-bold">● Active (12 ms latency)</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions area */}
                  <div className="pt-2 border-t border-slate-100 text-center">
                    {pinging ? (
                      <button
                        disabled
                        className="px-6 py-2.5 bg-slate-100 text-slate-500 font-display font-bold text-xs rounded-lg flex items-center justify-center mx-auto space-x-2"
                      >
                        <RefreshCw className="w-4 h-4 animate-spin text-red-600" />
                        <span>Broadcasting RF Scan Signals...</span>
                      </button>
                    ) : (
                      <div className="space-y-2">
                        {pingStatus !== "Idle" && (
                          <div className="bg-green-50 border border-green-200 text-green-700 rounded-lg py-2 px-3 text-xs font-semibold">
                            ✓ {pingStatus}
                          </div>
                        )}
                        <button
                          onClick={handlePingHardware}
                          className="px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white font-display font-bold text-xs rounded-lg shadow-sm hover:shadow-red-600/10 transition-colors uppercase tracking-wider flex items-center justify-center mx-auto space-x-2"
                        >
                          <HardDrive className="w-4 h-4" />
                          <span>Test Ping Synced Hardware</span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
