/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from "react";
import { Calendar, Users, Monitor, ExternalLink, ShieldCheck, Laptop, Play, MousePointerClick, CheckCircle, RefreshCw, Layers, FileText } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import boardroomProxyMeeting from "../assets/images/boardroom_proxy_meeting_1784501739000.jpg";

interface HeroProps {
  onRequestDemo: () => void;
  onSpeakExpert: () => void;
}

type DemoStep = "overview" | "voting" | "ballot_launched" | "accreditation";

export default function Hero({ onRequestDemo, onSpeakExpert }: HeroProps) {
  // Theme & Motion settings
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Guided demo state machine
  const [currentStep, setCurrentStep] = useState<DemoStep>("overview");
  const [isAutoPaused, setIsAutoPaused] = useState(false);
  const [clickPulse, setClickPulse] = useState({ x: 0, y: 0, active: false });
  const [pointerPos, setPointerPos] = useState({ x: "85%", y: "85%" });
  const [activeSidebar, setActiveSidebar] = useState<"dashboard" | "events" | "voting">("dashboard");
  const [activeTab, setActiveTab] = useState<"overview" | "accreditation" | "engagement">("overview");
  const [showToast, setShowToast] = useState(false);

  const autoTimerRef = useRef<NodeJS.Timeout | null>(null);
  const pauseTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Quorum and metrics state
  const [quorumPct, setQuorumPct] = useState(94.8);
  const [resolutionsCount, setResolutionsCount] = useState("04 / 04");

  // Check user preference for reduced motion
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);
    const listener = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }, []);

  // Monitor screen size to toggle desktop vs mobile video sources
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Pause or play background video on browser tab visibility changes
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (videoRef.current) {
        if (document.hidden) {
          videoRef.current.pause();
        } else {
          videoRef.current.play().catch((err) => console.log("Video auto-play delayed:", err));
        }
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  const handleScrollToSolutions = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById("capabilities") || document.getElementById("about");
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    } else {
      onSpeakExpert();
    }
  };

  // Guided simulation steps definition
  useEffect(() => {
    if (reducedMotion || isAutoPaused) {
      if (autoTimerRef.current) clearInterval(autoTimerRef.current);
      return;
    }

    const runGuidedTour = () => {
      // 20-second complete automated cycle (5 seconds per step)
      autoTimerRef.current = setInterval(() => {
        setCurrentStep((prev) => {
          switch (prev) {
            case "overview":
              // Move cursor to "Voting Room" in sidebar
              setPointerPos({ x: "12%", y: "27%" });
              setTimeout(() => triggerClickPulse("12%", "27%"), 1800);
              return "voting";
            case "voting":
              // Move cursor to "LAUNCH BALLOT" button
              setPointerPos({ x: "78%", y: "87%" });
              setTimeout(() => triggerClickPulse("78%", "87%"), 1800);
              return "ballot_launched";
            case "ballot_launched":
              // Move cursor to "Accreditation" sub-tab
              setPointerPos({ x: "44%", y: "41%" });
              setTimeout(() => triggerClickPulse("44%", "41%"), 1800);
              return "accreditation";
            case "accreditation":
            default:
              // Move cursor back towards overview
              setPointerPos({ x: "32%", y: "41%" });
              setTimeout(() => triggerClickPulse("32%", "41%"), 1800);
              return "overview";
          }
        });
      }, 4500);
    };

    runGuidedTour();

    return () => {
      if (autoTimerRef.current) clearInterval(autoTimerRef.current);
    };
  }, [reducedMotion, isAutoPaused]);

  // Handle actual visual states based on demo steps
  useEffect(() => {
    if (isAutoPaused) return;

    if (currentStep === "overview") {
      setActiveSidebar("dashboard");
      setActiveTab("overview");
      setShowToast(false);
      setResolutionsCount("04 / 04");
    } else if (currentStep === "voting") {
      setActiveSidebar("voting");
      setActiveTab("overview");
      setShowToast(false);
    } else if (currentStep === "ballot_launched") {
      setActiveSidebar("voting");
      setActiveTab("overview");
      setShowToast(true);
      setResolutionsCount("05 / 05");
    } else if (currentStep === "accreditation") {
      setActiveSidebar("voting");
      setActiveTab("accreditation");
      setShowToast(false);
    }
  }, [currentStep, isAutoPaused]);

  const triggerClickPulse = (x: string, y: string) => {
    setClickPulse({ x: parseFloat(x), y: parseFloat(y), active: true });
    setTimeout(() => {
      setClickPulse((prev) => ({ ...prev, active: false }));
    }, 600);
  };

  // Manual interaction overrides
  const handleManualAction = (type: "sidebar" | "tab" | "ballot", value: any) => {
    // Pause auto guided tour immediately
    setIsAutoPaused(true);
    if (autoTimerRef.current) clearInterval(autoTimerRef.current);
    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);

    // Update relevant states instantly
    if (type === "sidebar") {
      setActiveSidebar(value);
      if (value === "dashboard") {
        setActiveTab("overview");
      }
    } else if (type === "tab") {
      setActiveTab(value);
    } else if (type === "ballot") {
      setShowToast(true);
      setResolutionsCount("05 / 05");
      setTimeout(() => setShowToast(false), 5000);
    }

    // Move virtual cursor away so it doesn't block real mouse clicks
    setPointerPos({ x: "-10%", y: "-10%" });

    // Set timeout to resume guided tour after 10 seconds of inactivity
    pauseTimeoutRef.current = setTimeout(() => {
      setIsAutoPaused(false);
      setCurrentStep("overview");
      setPointerPos({ x: "85%", y: "85%" });
    }, 10000);
  };

  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-slate-950 transition-colors duration-300"
    >
      {/* Background Video Layer with Fallback Poster or Static Background for Reduced Motion */}
      {reducedMotion ? (
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center pointer-events-none z-0 opacity-40 scale-105"
          style={{ backgroundImage: `url(${boardroomProxyMeeting})` }}
        />
      ) : (
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={boardroomProxyMeeting}
            onPlay={() => setIsVideoLoaded(true)}
            className={`absolute top-1/2 left-1/2 min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-cover transition-opacity duration-1000 ${
              isVideoLoaded ? "opacity-35" : "opacity-0"
            }`}
          >
            {/* Suggested optimized WebM & MP4 desktop and mobile sources */}
            <source
              src={isMobile ? "/videos/apems-hero-mobile.webm" : "/videos/apems-hero-desktop.webm"}
              type="video/webm"
            />
            <source
              src={isMobile ? "/videos/apems-hero-mobile.mp4" : "/videos/apems-hero-desktop.mp4"}
              type="video/mp4"
            />
            {/* Highly reliable cinematic public stream fallback to guarantee live presentation */}
            <source
              src="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c022273af08f22a5ecdf0c638661b12c&profile_id=165"
              type="video/mp4"
            />
          </video>
        </div>
      )}

      {/* Modern Soft Branded Dark Navy / Charcoal Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/85 to-slate-950/95 z-0 pointer-events-none" />

      {/* Subtle White-Translucent Grid Pattern mask overlay adjusted for dark theme */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none z-0" />

      <div className="max-w-5xl mx-auto px-6 md:px-8 text-center relative z-10">
        
        {/* Small Brand Tag with animation adjusted for dark backgrounds */}
        <div className="inline-flex items-center space-x-2 px-3 py-1 bg-red-950/50 border border-red-900/50 rounded-full text-[10px] font-mono tracking-widest text-red-400 uppercase mb-6 font-bold shadow-sm relative z-10">
          <span className="flex h-1.5 w-1.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500"></span>
          </span>
          <span>SECURE EVENT GOVERNANCE SUITE</span>
        </div>

        {/* Hero Title - Styled white for maximum legibility on dark backdrop */}
        <h1 className="font-display font-medium text-3xl sm:text-5xl md:text-6xl tracking-tight text-white leading-[1.15] mb-8 max-w-5xl mx-auto relative z-10">
          Powering Africa's <span className="text-red-500 font-extrabold">Most Important</span> <br className="hidden sm:inline" /> Meetings, Elections and Events.
        </h1>

        {/* Hero Subtext - Lightened color for clear readability on dark background */}
        <p className="text-slate-300 text-base sm:text-lg md:text-xl font-sans max-w-3xl mx-auto leading-relaxed mb-10 relative z-10">
          APEMS is a robust enterprise event management suite meticulously engineered to support physical,
          virtual, and hybrid corporate assemblies from start to finish.
        </p>

        {/* Hero Actions - Standard and compliant primary/secondary styles */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 relative z-10">
          <button
            id="hero-request-demo-btn"
            onClick={onRequestDemo}
            className="w-full sm:w-auto px-8 py-3.5 text-xs font-display font-bold tracking-wider text-white bg-red-600 hover:bg-red-500 active:scale-95 hover:translate-y-[-2px] rounded-full shadow-md hover:shadow-lg hover:shadow-red-600/35 transition-all duration-300 uppercase outline-none focus:ring-2 focus:ring-red-500/50 cursor-pointer"
          >
            Request a Demo
          </button>
          <button
            id="hero-speak-expert-btn"
            onClick={handleScrollToSolutions}
            className="w-full sm:w-auto px-8 py-3.5 text-xs font-display font-bold tracking-wider text-slate-200 hover:text-white bg-white/5 hover:bg-white/15 border border-white/20 hover:border-white/40 active:scale-95 hover:translate-y-[-1.5px] rounded-full transition-all duration-300 uppercase outline-none focus:ring-2 focus:ring-white/30 cursor-pointer"
          >
            Explore Solutions
          </button>
        </div>

        {/* Elegant Laptop & Interactive Browser Demo */}
        <div id="product-simulator-container" className="relative max-w-4xl mx-auto pt-4 relative z-10">
          
          {/* Subtle atmospheric light glow behind browser - backlit red aura */}
          <div className="absolute -inset-4 bg-gradient-to-r from-red-600/20 to-amber-500/10 rounded-[2rem] blur-3xl opacity-80 pointer-events-none" />

          {/* Browser Wrapper - Framed elegantly with fine translucent borders */}
          <div className="relative border border-white/10 rounded-xl bg-slate-900 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.85)] hover:border-white/20 transition-all duration-500 text-left">
            
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

            {/* Simulated Live Dashboard Workspace */}
            <div className="relative grid grid-cols-12 bg-white text-slate-800 min-h-[440px] text-xs select-none">
              
              {/* Automated Hand Cursor overlay */}
              {!reducedMotion && !isAutoPaused && (
                <div
                  className="absolute z-50 pointer-events-none transition-all duration-1000 ease-in-out"
                  style={{ top: pointerPos.y, left: pointerPos.x }}
                >
                  <MousePointerClick className="w-5 h-5 text-red-600 filter drop-shadow-md animate-bounce" />
                </div>
              )}

              {/* Graphical click pulse feedback effect */}
              {clickPulse.active && (
                <span
                  className="absolute z-40 w-12 h-12 -ml-6 -mt-6 border-2 border-red-500 bg-red-500/20 rounded-full animate-ping pointer-events-none"
                  style={{ top: `${clickPulse.y}%`, left: `${clickPulse.x}%` }}
                />
              )}

              {/* Sidebar Panel */}
              <div className="col-span-3 bg-slate-50 border-r border-slate-200/80 p-4 hidden sm:flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-2 mb-6">
                    <div className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center text-white font-bold text-xs">A</div>
                    <span className="font-display font-bold tracking-tight text-slate-900">APEMS</span>
                    <span className="px-1.5 py-0.5 bg-slate-200 text-slate-600 text-[8px] font-mono rounded-md font-bold">PORTAL</span>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <p className="text-[9px] font-mono tracking-wider uppercase text-slate-400 mb-2">MAIN MENU</p>
                      <div className="space-y-1">
                        <div
                          onClick={() => handleManualAction("sidebar", "dashboard")}
                          className={`flex items-center space-x-2 px-2.5 py-2 rounded-lg cursor-pointer transition-colors ${
                            activeSidebar === "dashboard"
                              ? "bg-red-50 text-red-600 font-bold"
                              : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                          }`}
                        >
                          <Monitor className="w-3.5 h-3.5" />
                          <span>Dashboard</span>
                        </div>
                        <div
                          onClick={() => handleManualAction("sidebar", "events")}
                          className={`flex items-center space-x-2 px-2.5 py-2 rounded-lg cursor-pointer transition-colors ${
                            activeSidebar === "events"
                              ? "bg-red-50 text-red-600 font-bold"
                              : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                          }`}
                        >
                          <Calendar className="w-3.5 h-3.5" />
                          <span>My Events</span>
                        </div>
                        <div
                          onClick={() => handleManualAction("sidebar", "voting")}
                          className={`flex items-center space-x-2 px-2.5 py-2 rounded-lg cursor-pointer transition-colors ${
                            activeSidebar === "voting"
                              ? "bg-red-50 text-red-600 font-bold"
                              : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                          }`}
                        >
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
                          <span className="text-green-600 font-mono font-bold">{quorumPct.toFixed(1)}%</span>
                        </div>
                        <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                          <div
                            className="bg-green-500 h-full transition-all duration-500"
                            style={{ width: `${quorumPct}%` }}
                          />
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
              <div className="col-span-12 sm:col-span-9 p-5 flex flex-col justify-between relative overflow-hidden">
                
                {/* Guided Tour Status Badge at Top */}
                {!reducedMotion && (
                  <div className="absolute top-2 right-4 flex items-center space-x-1.5 z-20">
                    <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                    <span className="text-[8px] font-mono font-bold tracking-wider text-slate-400 uppercase">
                      {isAutoPaused ? "DEMO ACTIVE (MANUAL OVERRIDE)" : "DEMO AUTO-PLAYING"}
                    </span>
                  </div>
                )}

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
                    <h2 className="font-display font-bold text-slate-900 text-base sm:text-lg md:text-xl leading-tight uppercase">
                      1ST CONFERENCE MEETING OF DEMO LTD
                    </h2>
                    <p className="text-[10px] text-slate-500 mt-1 font-mono">
                      Sunday, July 19, 2026 • Virtual Event Plenary
                    </p>
                  </div>

                  {/* Main Overview / Accreditation / Engagement Sub-tabs */}
                  <div className="flex items-center space-x-4 border-b border-slate-100 mb-5 text-[11px] font-bold">
                    <span
                      onClick={() => handleManualAction("tab", "overview")}
                      className={`pb-2 cursor-pointer transition-colors ${
                        activeTab === "overview"
                          ? "text-red-600 border-b-2 border-b-red-600"
                          : "text-slate-500 hover:text-slate-800"
                      }`}
                    >
                      Overview
                    </span>
                    <span
                      onClick={() => handleManualAction("tab", "accreditation")}
                      className={`pb-2 cursor-pointer transition-colors ${
                        activeTab === "accreditation"
                          ? "text-red-600 border-b-2 border-b-red-600"
                          : "text-slate-500 hover:text-slate-800"
                      }`}
                    >
                      Accreditation
                    </span>
                    <span
                      onClick={() => handleManualAction("tab", "engagement")}
                      className={`pb-2 cursor-pointer transition-colors ${
                        activeTab === "engagement"
                          ? "text-red-600 border-b-2 border-b-red-600"
                          : "text-slate-500 hover:text-slate-800"
                      }`}
                    >
                      Engagement
                    </span>
                  </div>

                  {/* Interactive Sub-tab Panel Content */}
                  <AnimatePresence mode="wait">
                    {activeTab === "overview" && (
                      <motion.div
                        key="overview-view"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.3 }}
                      >
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
                            <p className="font-display font-bold text-slate-900 text-lg md:text-xl mt-0.5 text-red-600 transition-all">
                              {resolutionsCount}
                            </p>
                            <span className="text-[9px] text-indigo-600 font-medium flex items-center mt-0.5">
                              • Full Audit Complete
                            </span>
                          </div>
                        </div>

                        {/* Interactive ballot/resolutions live status chart */}
                        {activeSidebar === "voting" && (
                          <div className="border border-red-100 bg-red-50/20 rounded-lg p-3 mb-4 animate-fade-in">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-[8px] font-mono font-bold tracking-wider text-red-600 uppercase">ACTIVE REAL-TIME BALLOT BOARD</span>
                              <span className="px-1.5 py-0.5 bg-green-500 text-white font-mono text-[7px] rounded font-bold uppercase tracking-widest animate-pulse">VOTING LIVE</span>
                            </div>
                            <div className="space-y-2">
                              <div>
                                <div className="flex justify-between text-[10px] text-slate-600 font-medium mb-1">
                                  <span>Resolution #1: Remuneration of Auditing Board</span>
                                  <span className="font-bold text-slate-900">78.5% (YES)</span>
                                </div>
                                <div className="w-full bg-slate-100 h-1 rounded-full overflow-hidden">
                                  <div className="bg-green-500 h-full w-[78.5%]" />
                                </div>
                              </div>
                              <div>
                                <div className="flex justify-between text-[10px] text-slate-600 font-medium mb-1">
                                  <span>Resolution #2: Directorial Re-election (Mr. A. Adeleke)</span>
                                  <span className="font-bold text-slate-900">92.4% (YES)</span>
                                </div>
                                <div className="w-full bg-slate-100 h-1 rounded-full overflow-hidden">
                                  <div className="bg-green-500 h-full w-[92.4%]" />
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </motion.div>
                    )}

                    {activeTab === "accreditation" && (
                      <motion.div
                        key="accreditation-view"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-4"
                      >
                        <div className="grid grid-cols-2 gap-3">
                          <div className="p-3 bg-green-50/50 border border-green-100 rounded-lg">
                            <p className="text-[8px] font-mono text-slate-400 uppercase">ACCREDITED SHARES</p>
                            <p className="font-display font-extrabold text-slate-900 text-lg">74.2M Shares</p>
                            <p className="text-[9px] text-green-700 mt-0.5">• 86.8% Quorum Rate</p>
                          </div>
                          <div className="p-3 bg-slate-50 border border-slate-100 rounded-lg">
                            <p className="text-[8px] font-mono text-slate-400 uppercase">ONLINE USER LOGINS</p>
                            <p className="font-display font-extrabold text-slate-900 text-lg">1,310 Verified</p>
                            <p className="text-[9px] text-slate-500 mt-0.5">• 100% Biometric OTP match</p>
                          </div>
                        </div>

                        {/* Recent accredited logging table */}
                        <div className="bg-slate-50 rounded-lg p-2.5 border border-slate-100">
                          <p className="text-[8px] font-mono font-bold text-slate-400 uppercase mb-2">LIVE ACCREDITATION LOG</p>
                          <div className="space-y-1 text-[10px]">
                            <div className="flex justify-between border-b border-slate-200/50 pb-1 text-slate-700">
                              <span className="font-bold">Alhaji Aliko Dangote</span>
                              <span className="font-mono text-green-600">ACCREDITED (FOLIO FL-582)</span>
                            </div>
                            <div className="flex justify-between border-b border-slate-200/50 pb-1 text-slate-700">
                              <span className="font-bold">Femi Otedola</span>
                              <span className="font-mono text-green-600">ACCREDITED (FOLIO FL-402)</span>
                            </div>
                            <div className="flex justify-between text-slate-700">
                              <span className="font-bold">Tony Elumelu</span>
                              <span className="font-mono text-green-600">ACCREDITED (FOLIO FL-310)</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {activeTab === "engagement" && (
                      <motion.div
                        key="engagement-view"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-4"
                      >
                        <div className="bg-slate-950 aspect-[21/9] rounded-lg overflow-hidden relative flex items-center justify-center border border-slate-800">
                          <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: `url(${boardroomProxyMeeting})` }} />
                          <div className="absolute top-2 left-2 flex items-center space-x-1.5">
                            <span className="px-1.5 py-0.5 bg-red-600 text-white font-bold font-mono text-[8px] rounded uppercase flex items-center">
                              <span className="w-1 h-1 bg-white rounded-full animate-ping mr-1" />
                              Plenary Stream
                            </span>
                            <span className="text-[8px] font-mono text-slate-300">1,205 Connected</span>
                          </div>
                          <div className="relative z-10 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 text-white">
                            <Play className="w-4 h-4 text-white fill-white ml-0.5" />
                          </div>
                        </div>

                        {/* Quick scrollable Q&A logs */}
                        <div className="p-2 bg-slate-50 border border-slate-100 rounded-lg text-[10px]">
                          <span className="font-mono font-bold text-slate-400 block mb-1">AUDIENCE Q&A QUEUE</span>
                          <p className="text-slate-700"><strong>Tunde (Lagos):</strong> "Will the audit cert be shared via email instantly?"</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Sliding Ballot success toast notification */}
                  <AnimatePresence>
                    {showToast && (
                      <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-4 left-4 right-4 bg-green-600 text-white p-3 rounded-lg shadow-lg flex items-center space-x-2.5 z-30"
                      >
                        <CheckCircle className="w-5 h-5 shrink-0 text-white" />
                        <div>
                          <p className="font-bold text-xs">BALLOT SUCCESSFUL</p>
                          <p className="text-[10px] text-green-50">Securely synchronized with 450 keypads and in-room transceivers.</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Quick actions row inside browser mockup */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between pt-4 border-t border-slate-100 mt-4 gap-3 text-[10px]">
                  <div className="flex items-center space-x-2 text-slate-500">
                    <span className="font-mono text-slate-400 uppercase">QUICK ACTIONS:</span>
                    <span
                      onClick={() => handleManualAction("sidebar", "dashboard")}
                      className="bg-slate-100 px-2 py-1 rounded hover:bg-slate-200 cursor-pointer transition-colors"
                    >
                      Export Registry
                    </span>
                    <span
                      onClick={() => handleManualAction("ballot", null)}
                      className="bg-slate-100 px-2 py-1 rounded hover:bg-slate-200 cursor-pointer transition-colors"
                    >
                      Broadcast Notice
                    </span>
                  </div>
                  <div className="flex items-center justify-between sm:justify-end space-x-2">
                    <button
                      onClick={() => handleManualAction("ballot", null)}
                      className="px-3 py-1.5 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 active:scale-95 transition-colors uppercase font-display tracking-wider text-[9px] cursor-pointer"
                    >
                      LAUNCH BALLOT
                    </button>
                    <button
                      onClick={() => handleManualAction("tab", "accreditation")}
                      className="px-2.5 py-1.5 border border-slate-200 hover:bg-slate-50 text-slate-600 font-bold rounded-lg flex items-center transition-colors cursor-pointer"
                    >
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
