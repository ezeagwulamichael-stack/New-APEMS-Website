/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize2, Minimize2, Check, Video, Info } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import boardroomProxyMeeting from "../assets/images/boardroom_proxy_meeting_1784501739000.jpg";

interface Subtitle {
  start: number;
  end: number;
  text: string;
}

const SUBTITLES: Subtitle[] = [
  { start: 0, end: 4, text: "Welcome to APEMS – the secure event and meeting governance suite built for modern corporate assemblies." },
  { start: 4, end: 9, text: "Our platform integrates remote verification with robust, real-time electronic voting ledger sync." },
  { start: 9, end: 14, text: "Verify attendees securely with multi-factor OTP tokens, secure SMS notice links, and on-site RFID keypads." },
  { start: 14, end: 19, text: "Cast auditable ballots instantly with continuous quorum updates verified by corporate registrars." },
  { start: 19, end: 24, text: "Compile statutory audit-ready compliance packages crypographically signed and ready for SEC presentation." },
  { start: 24, end: 35, text: "APEMS – bridging physical and digital spaces to power Africa's most important meetings and events." }
];

export default function DemoVideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.85);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showCaptions, setShowCaptions] = useState(true);
  const [activeCaption, setActiveCaption] = useState("");

  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Monitor playback time and update captions
  useEffect(() => {
    if (!isPlaying) return;

    const matched = SUBTITLES.find(
      (sub) => currentTime >= sub.start && currentTime <= sub.end
    );
    setActiveCaption(matched ? matched.text : "");
  }, [currentTime, isPlaying]);

  const handlePlayPause = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.warn("Video play failed or interrupted:", err);
      });
    }
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    setCurrentTime(videoRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    if (!videoRef.current) return;
    setDuration(videoRef.current.duration);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current) return;
    const newTime = parseFloat(e.target.value);
    videoRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
    }
    setIsMuted(newVolume === 0);
  };

  const handleMuteToggle = () => {
    if (!videoRef.current) return;
    const targetMuted = !isMuted;
    setIsMuted(targetMuted);
    videoRef.current.muted = targetMuted;
    if (targetMuted) {
      videoRef.current.volume = 0;
    } else {
      videoRef.current.volume = volume;
    }
  };

  const handleFullscreenToggle = () => {
    if (!containerRef.current) return;

    if (!isFullscreen) {
      if (containerRef.current.requestFullscreen) {
        containerRef.current.requestFullscreen();
      }
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
      setIsFullscreen(false);
    }
  };

  // Keep fullscreen state in sync with native triggers
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  const formatTime = (timeInSeconds: number) => {
    if (isNaN(timeInSeconds)) return "0:00";
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <section id="demo-video-section" className="py-20 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-[10px] font-mono tracking-widest text-red-600 uppercase font-bold">
            PLATFORM DEMONSTRATION
          </p>
          <h3 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight mt-2">
            Experience APEMS in Action
          </h3>
          <p className="text-slate-500 text-xs sm:text-sm mt-3 leading-relaxed">
            Watch a guided comprehensive video walk-through demonstrating how the APEMS suite facilitates
            seamless hybrid meetings, compliant voting systems, and audit-ready reporting.
          </p>
        </div>

        {/* Video Player Browser Mockup Container */}
        <div 
          ref={containerRef}
          className="relative max-w-4xl mx-auto border border-slate-200 bg-black rounded-xl shadow-xl overflow-hidden group"
        >
          {/* Top Window Strip (Hidden in native fullscreen mode) */}
          {!isFullscreen && (
            <div className="flex items-center justify-between px-4 py-2.5 bg-slate-950 border-b border-slate-800">
              <div className="flex items-center space-x-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 block" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 block" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500 block" />
              </div>
              <div className="flex items-center px-3 py-0.5 bg-slate-900 rounded text-[9px] font-mono text-slate-500">
                <Video className="w-2.5 h-2.5 text-slate-500 mr-1.5" />
                <span>apems_interactive_demo_walkthrough.mp4</span>
              </div>
              <div className="w-10" />
            </div>
          )}

          {/* Core Video Player Frame */}
          <div className="relative aspect-video w-full h-full bg-black flex items-center justify-center">
            
            <video
              ref={videoRef}
              src="https://assets.mixkit.co/videos/preview/mixkit-business-woman-presenting-graphs-on-a-digital-screen-34301-large.mp4"
              poster={boardroomProxyMeeting}
              onClick={handlePlayPause}
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              className="w-full h-full object-cover select-none cursor-pointer"
              playsInline
            >
              {/* Local secondary video path */}
              <source src="/videos/apems-demo.mp4" type="video/mp4" />
            </video>

            {/* Faded Poster overlay with visual play button if not playing */}
            <AnimatePresence>
              {!isPlaying && (
                <motion.div 
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-slate-950/40 backdrop-blur-[1px] flex flex-col items-center justify-center cursor-pointer select-none"
                  onClick={handlePlayPause}
                >
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white text-red-600 shadow-xl flex items-center justify-center border border-red-100 hover:bg-red-50 transition-all cursor-pointer"
                    aria-label="Play product video"
                  >
                    <Play className="w-7 h-7 sm:w-9 sm:h-9 fill-red-600 ml-1.5 stroke-[2]" />
                  </motion.button>
                  <span className="text-white text-xs sm:text-sm font-display font-semibold tracking-wider mt-4 uppercase">
                    Launch Interactive Walkthrough
                  </span>
                  <span className="text-slate-300 text-[10px] font-mono mt-1">
                    Duration: 30s • Full Stereo • Captions Enabled
                  </span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Synchronized Subtitles / Captions Track */}
            {showCaptions && activeCaption && isPlaying && (
              <div className="absolute bottom-16 left-4 right-4 text-center z-20 pointer-events-none">
                <span className="px-4 py-2 bg-black/85 text-white text-xs sm:text-sm font-sans font-medium rounded-lg shadow-md max-w-2xl inline-block leading-relaxed border border-white/10">
                  {activeCaption}
                </span>
              </div>
            )}

            {/* Custom Media Player Controls Bar */}
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/95 via-slate-900/80 to-transparent p-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-opacity duration-300 z-30">
              
              {/* Progress Slider Timeline */}
              <div className="flex items-center gap-3">
                <span className="text-white font-mono text-[10px] shrink-0">
                  {formatTime(currentTime)}
                </span>
                <input
                  type="range"
                  min="0"
                  max={duration || 0}
                  step="0.1"
                  value={currentTime}
                  onChange={handleSeek}
                  className="flex-1 accent-red-600 h-1 hover:h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer transition-all"
                  aria-label="Seek video playback timeline"
                />
                <span className="text-slate-400 font-mono text-[10px] shrink-0">
                  {formatTime(duration)}
                </span>
              </div>

              {/* Action Buttons Row */}
              <div className="flex items-center justify-between">
                
                {/* Left controls: Play, Volume, Captions */}
                <div className="flex items-center gap-4">
                  <button
                    onClick={handlePlayPause}
                    className="text-white hover:text-red-500 transition-colors focus:outline-none"
                    aria-label={isPlaying ? "Pause video" : "Play video"}
                  >
                    {isPlaying ? <Pause className="w-4 h-4 fill-white" /> : <Play className="w-4 h-4 fill-white" />}
                  </button>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleMuteToggle}
                      className="text-white hover:text-red-500 transition-colors focus:outline-none"
                      aria-label={isMuted ? "Unmute video" : "Mute video"}
                    >
                      {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    </button>
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.05"
                      value={isMuted ? 0 : volume}
                      onChange={handleVolumeChange}
                      className="w-16 sm:w-20 accent-red-600 h-1 bg-slate-700 rounded-none appearance-none cursor-pointer"
                      aria-label="Volume slider"
                    />
                  </div>

                  <button
                    onClick={() => setShowCaptions(!showCaptions)}
                    className={`px-1.5 py-0.5 rounded text-[9px] font-mono font-bold tracking-wider border transition-colors ${
                      showCaptions 
                        ? "bg-red-600 text-white border-red-600" 
                        : "bg-transparent text-slate-400 border-slate-600 hover:text-white hover:border-white"
                    }`}
                    aria-label="Toggle closed captions"
                  >
                    CC
                  </button>
                </div>

                {/* Right controls: Fullscreen */}
                <button
                  onClick={handleFullscreenToggle}
                  className="text-white hover:text-red-500 transition-colors focus:outline-none"
                  aria-label="Toggle fullscreen"
                >
                  {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                </button>

              </div>
            </div>

          </div>
        </div>

        {/* Feature bullets below video mockup */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12 text-left">
          <div className="p-4 bg-white border border-slate-100 rounded-xl shadow-sm flex items-start space-x-3">
            <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-red-600 shrink-0 font-bold text-xs">
              ✓
            </div>
            <div>
              <p className="font-display font-bold text-xs uppercase text-slate-900">100% In-Sync Ledger</p>
              <p className="text-slate-500 text-[11px] mt-1">
                Web votes, proxy files, and in-room keypad ballots consolidate onto a single cryptographically signed SEC compliance ledger.
              </p>
            </div>
          </div>
          <div className="p-4 bg-white border border-slate-100 rounded-xl shadow-sm flex items-start space-x-3">
            <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-red-600 shrink-0 font-bold text-xs">
              ✓
            </div>
            <div>
              <p className="font-display font-bold text-xs uppercase text-slate-900">Multi-Factor Entry</p>
              <p className="text-slate-500 text-[11px] mt-1">
                Delegates register through biometric OTP checks, QR scanning, and dynamic event IDs preventing entry compromises.
              </p>
            </div>
          </div>
          <div className="p-4 bg-white border border-slate-100 rounded-xl shadow-sm flex items-start space-x-3">
            <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-red-600 shrink-0 font-bold text-xs">
              ✓
            </div>
            <div>
              <p className="font-display font-bold text-xs uppercase text-slate-900">Audited Compliance</p>
              <p className="text-slate-500 text-[11px] mt-1">
                Generate instantaneous, SEC-ready statutory reports verified with legal audit seals on meeting adjournment.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
