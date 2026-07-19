/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustSection from "./components/TrustSection";
import AboutSection from "./components/AboutSection";
import WhyChooseSection from "./components/WhyChooseSection";
import ServicesSection from "./components/ServicesSection";
import ParticipationSection from "./components/ParticipationSection";
import ProcessSection from "./components/ProcessSection";
import SectorsSection from "./components/SectorsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import InteractionsModal, { ModalType } from "./components/InteractionsModal";

export default function App() {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const openModal = (type: ModalType) => {
    setActiveModal(type);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <div className="relative min-h-screen bg-white overflow-hidden flex flex-col justify-between">
      
      {/* Sticky Top-Bar Header */}
      <Header onRequestDemo={() => openModal("demo")} />

      {/* Main Page Layout Content */}
      <main className="flex-1">
        {/* Hero Landing & Simulator */}
        <Hero
          onRequestDemo={() => openModal("demo")}
          onSpeakExpert={() => openModal("expert")}
        />

        {/* Brand Logos and Metrics cards */}
        <TrustSection />

        {/* Showcase image, description, and quotes */}
        <AboutSection
          onRequestDemo={() => openModal("demo")}
          onSpeakExpert={() => openModal("expert")}
        />

        {/* Sliding Why Choose Carousel cards */}
        <WhyChooseSection />

        {/* Platform Capabilities with dynamic dashboard simulator */}
        <ServicesSection />

        {/* Inclusion participation modes (4 card overlay grid) */}
        <ParticipationSection
          onRequestDemo={() => openModal("demo")}
          onSpeakExpert={() => openModal("expert")}
        />

        {/* Value creation process vertical stacks (01 to 05) */}
        <ProcessSection />

        {/* Sector tabs and custom detail display */}
        <SectorsSection
          onRequestDemo={() => openModal("demo")}
          onSpeakExpert={() => openModal("expert")}
        />

        {/* NEW Testimonial Carousel (Placed immediately before FAQ!) */}
        <TestimonialsSection />

        {/* Accordion list of FAQs */}
        <FAQSection onContactSupport={() => openModal("support")} />
      </main>

      {/* Dark premium footer */}
      <Footer
        onJoinWaitlist={() => openModal("waitlist")}
        onSpeakExpert={() => openModal("expert")}
      />

      {/* Controlled Interactive Overlay Modals */}
      <InteractionsModal type={activeModal} onClose={closeModal} />

    </div>
  );
}
