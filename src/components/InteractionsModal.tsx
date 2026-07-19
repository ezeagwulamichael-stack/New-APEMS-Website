/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { X, Calendar, Clock, User, Mail, Building, Phone, HelpCircle, CheckCircle2, MessageSquare, ArrowRight } from "lucide-react";

export type ModalType = "demo" | "expert" | "waitlist" | "support" | null;

interface InteractionsModalProps {
  type: ModalType;
  onClose: () => void;
}

export default function InteractionsModal({ type, onClose }: InteractionsModalProps) {
  const [step, setStep] = useState<"form" | "success">("form");

  // Form Fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedDate, setSelectedDate] = useState("2026-07-22");
  const [selectedTime, setSelectedTime] = useState("10:00 AM");
  const [interest, setInterest] = useState("Corporate AGM");
  const [details, setDetails] = useState("");

  const timeSlots = ["10:00 AM", "11:30 AM", "01:00 PM", "02:30 PM", "04:00 PM"];
  const dates = [
    { label: "Wed, Jul 22", value: "2026-07-22" },
    { label: "Thu, Jul 23", value: "2026-07-23" },
    { label: "Fri, Jul 24", value: "2026-07-24" },
    { label: "Mon, Jul 27", value: "2026-07-27" },
  ];

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (type) {
      document.body.style.overflow = "hidden";
      setStep("form"); // reset
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [type]);

  if (!type) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setStep("success");
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Black backdrop blur overlay */}
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Card container */}
      <div className="relative w-full max-w-lg bg-white rounded-2xl border border-slate-100 shadow-2xl overflow-hidden z-10 max-h-[90vh] overflow-y-auto animate-fade-in text-slate-800">
        
        {/* Top Header line */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/50">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-red-600 block" />
            <h3 className="font-display font-bold text-slate-900 text-sm tracking-tight uppercase leading-none">
              {type === "demo" && "Request a Live Demo"}
              {type === "expert" && "Speak with an Expert"}
              {type === "waitlist" && "Join Waitlist"}
              {type === "support" && "Submit Support Ticket"}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Success Screen */}
        {step === "success" ? (
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-green-50 text-green-600 flex items-center justify-center mx-auto border border-green-200 shadow-sm animate-fade-in">
              <CheckCircle2 className="w-10 h-10 stroke-[2]" />
            </div>

            <div className="space-y-2">
              <h4 className="font-display font-bold text-slate-900 text-lg tracking-tight">
                {type === "demo" && "Demo Slot Reserved Successfully!"}
                {type === "expert" && "Specialist Request Received!"}
                {type === "waitlist" && "Waitlist Registration Confirmed!"}
                {type === "support" && "Support Ticket Opened!"}
              </h4>
              <p className="text-slate-500 text-xs sm:text-sm max-w-sm mx-auto leading-relaxed">
                {type === "demo" &&
                  `Thank you, ${name}. A calendar invite with secure Google Meet links for ${selectedDate} at ${selectedTime} has been sent to ${email}.`}
                {type === "expert" &&
                  `Thank you, ${name}. An APEMS event specialist will contact you at ${email} or via phone to align on your hybrid setup within 2 hours.`}
                {type === "waitlist" &&
                  `Welcome to the inner circle, ${name}! You are priority #${Math.floor(
                    Math.random() * 200 + 400
                  )} on our waitlist. We will keep you updated.`}
                {type === "support" &&
                  `Thank you. Support ticket AP-${Math.floor(
                    Math.random() * 80000 + 10000
                  )} is now active. Our engineers will reach out to ${email} shortly.`}
              </p>
            </div>

            <div className="pt-4">
              <button
                onClick={onClose}
                className="w-full px-6 py-3 bg-slate-950 hover:bg-slate-900 text-white font-display font-bold text-xs tracking-wider rounded-xl shadow-sm hover:shadow transition-colors uppercase"
              >
                Return to Website
              </button>
            </div>
          </div>
        ) : (
          /* Form Screen */
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
            {/* Form Description */}
            <p className="text-slate-500 text-xs leading-relaxed">
              {type === "demo" && "Experience Africa's premier SEC-compliant assembly platform. Complete the form to schedule a live walkthrough with our solutions team."}
              {type === "expert" && "Need custom licensing, keypads sync, or USSD configurations for a national election or AGM? Our team will guide you through the process."}
              {type === "waitlist" && "Register now to gain priority developer and registrar access to upcoming smartcard verification and SMS/USSD offline modules."}
              {type === "support" && "Encountering questions on registry upload, quorum recalculations, or attendee check-in? Raise an expedited ticket below."}
            </p>

            {/* General Fields */}
            <div className="space-y-4">
              <div>
                <label className="block text-[10px] font-mono tracking-wider text-slate-400 uppercase font-bold mb-1.5">
                  Full Name
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full pl-9 pr-3 py-2.5 text-xs border border-slate-200 rounded-xl outline-none focus:ring-1 focus:ring-red-500/40 focus:border-red-500/40 bg-slate-50/50 focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-mono tracking-wider text-slate-400 uppercase font-bold mb-1.5">
                  Work Email Address
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@organization.com"
                    className="w-full pl-9 pr-3 py-2.5 text-xs border border-slate-200 rounded-xl outline-none focus:ring-1 focus:ring-red-500/40 focus:border-red-500/40 bg-slate-50/50 focus:bg-white transition-all"
                  />
                </div>
              </div>

              {type !== "support" && (
                <div>
                  <label className="block text-[10px] font-mono tracking-wider text-slate-400 uppercase font-bold mb-1.5">
                    Organization / Company Name
                  </label>
                  <div className="relative">
                    <Building className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="e.g. Zenith Bank Plc"
                      className="w-full pl-9 pr-3 py-2.5 text-xs border border-slate-200 rounded-xl outline-none focus:ring-1 focus:ring-red-500/40 focus:border-red-500/40 bg-slate-50/50 focus:bg-white transition-all"
                    />
                  </div>
                </div>
              )}

              {type === "expert" && (
                <div>
                  <label className="block text-[10px] font-mono tracking-wider text-slate-400 uppercase font-bold mb-1.5">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+234 ..."
                      className="w-full pl-9 pr-3 py-2.5 text-xs border border-slate-200 rounded-xl outline-none focus:ring-1 focus:ring-red-500/40 focus:border-red-500/40 bg-slate-50/50 focus:bg-white transition-all"
                    />
                  </div>
                </div>
              )}

              {/* Demo Selection Calendar (Only for Demo) */}
              {type === "demo" && (
                <div className="space-y-4 pt-1">
                  <div>
                    <label className="block text-[10px] font-mono tracking-wider text-slate-400 uppercase font-bold mb-2">
                      Select Demo Date
                    </label>
                    <div className="grid grid-cols-4 gap-2">
                      {dates.map((d) => (
                        <button
                          key={d.value}
                          type="button"
                          onClick={() => setSelectedDate(d.value)}
                          className={`py-2 text-[10px] font-bold font-display rounded-lg border transition-all text-center uppercase ${
                            selectedDate === d.value
                              ? "bg-red-50 border-red-200 text-red-600"
                              : "bg-white border-slate-200/60 text-slate-600 hover:bg-slate-50"
                          }`}
                        >
                          {d.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono tracking-wider text-slate-400 uppercase font-bold mb-2">
                      Select Time Slot (Lagos-NG Time)
                    </label>
                    <div className="grid grid-cols-5 gap-1.5">
                      {timeSlots.map((ts) => (
                        <button
                          key={ts}
                          type="button"
                          onClick={() => setSelectedTime(ts)}
                          className={`py-1.5 text-[9px] font-bold rounded-lg border transition-all text-center ${
                            selectedTime === ts
                              ? "bg-red-50 border-red-200 text-red-600"
                              : "bg-white border-slate-200/60 text-slate-600 hover:bg-slate-50"
                          }`}
                        >
                          {ts}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Support Fields (Only for Support) */}
              {type === "support" && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-[10px] font-mono tracking-wider text-slate-400 uppercase font-bold mb-1.5">
                      Primary Issue Category
                    </label>
                    <select
                      value={interest}
                      onChange={(e) => setInterest(e.target.value)}
                      className="w-full px-3 py-2.5 text-xs border border-slate-200 rounded-xl outline-none focus:ring-1 focus:ring-red-500/40 focus:border-red-500/40 bg-slate-50/50 focus:bg-white font-bold transition-all"
                    >
                      <option value="Quorum Issues">Registry Upload & Sync</option>
                      <option value="Voting Errors">E-Voting Ballot Setup</option>
                      <option value="Keypad Sync">Hardware Keypads Sync</option>
                      <option value="USSD Check-In">USSD Dial Code Check-In</option>
                      <option value="Compliance Reports">Statutory Export Reports</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono tracking-wider text-slate-400 uppercase font-bold mb-1.5">
                      Tell us what is happening
                    </label>
                    <textarea
                      required
                      value={details}
                      onChange={(e) => setDetails(e.target.value)}
                      placeholder="Please specify issue or question in detail..."
                      rows={3}
                      className="w-full px-3 py-2.5 text-xs border border-slate-200 rounded-xl outline-none focus:ring-1 focus:ring-red-500/40 focus:border-red-500/40 bg-slate-50/50 focus:bg-white transition-all resize-none"
                    />
                  </div>
                </div>
              )}

              {/* Expert Fields (Only for Expert) */}
              {type === "expert" && (
                <div>
                  <label className="block text-[10px] font-mono tracking-wider text-slate-400 uppercase font-bold mb-1.5">
                    Primary Interest
                  </label>
                  <select
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    className="w-full px-3 py-2.5 text-xs border border-slate-200 rounded-xl outline-none focus:ring-1 focus:ring-red-500/40 focus:border-red-500/40 bg-slate-50/50 focus:bg-white font-bold transition-all"
                  >
                    <option value="Corporate AGM">Corporate SEC-Regulated AGM</option>
                    <option value="Union Election">Professional Association / Union Election</option>
                    <option value="Cooperative Vote">Cooperative Society Voting</option>
                    <option value="Sovereign Referendum">Sovereign / Local Government Referendum</option>
                  </select>
                </div>
              )}
            </div>

            {/* Submit Action Button */}
            <div className="pt-3">
              <button
                type="submit"
                className="w-full py-3.5 bg-red-600 hover:bg-red-700 text-white font-display font-bold text-xs tracking-wider rounded-xl shadow-md shadow-red-600/10 hover:shadow-lg transition-all uppercase flex items-center justify-center space-x-1"
              >
                <span>
                  {type === "demo" && "Confirm Demo Booking"}
                  {type === "expert" && "Request Callback"}
                  {type === "waitlist" && "Secure My Waitlist Spot"}
                  {type === "support" && "Submit High-Priority Ticket"}
                </span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
}
