/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustSection from "./components/TrustSection";
import DemoVideoSection from "./components/DemoVideoSection";
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

  // Accessible motion preference detection
  const [reducedMotion, setReducedMotion] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);
    const listener = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }, []);

  const openModal = (type: ModalType) => {
    setActiveModal(type);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const scrollAnimateProps = reducedMotion
    ? {
        initial: { opacity: 1 },
        whileInView: { opacity: 1 },
        viewport: { once: true }
      }
    : {
        initial: { opacity: 0, y: 22 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-100px" },
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
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

        {/* Application Walkthrough Presentation Section */}
        <motion.div {...scrollAnimateProps}>
          <DemoVideoSection />
        </motion.div>

        {/* Showcase image, description, and quotes */}
        <motion.div {...scrollAnimateProps}>
          <AboutSection
            onRequestDemo={() => openModal("demo")}
            onSpeakExpert={() => openModal("expert")}
          />
        </motion.div>

        {/* Sliding Why Choose Carousel cards */}
        <motion.div {...scrollAnimateProps}>
          <WhyChooseSection />
        </motion.div>

        {/* Platform Capabilities with dynamic dashboard simulator */}
        <motion.div {...scrollAnimateProps}>
          <ServicesSection />
        </motion.div>

        {/* Inclusion participation modes (4 card overlay grid) */}
        <motion.div {...scrollAnimateProps}>
          <ParticipationSection
            onRequestDemo={() => openModal("demo")}
            onSpeakExpert={() => openModal("expert")}
          />
        </motion.div>

        {/* Value creation process vertical stacks (01 to 05) */}
        <motion.div {...scrollAnimateProps}>
          <ProcessSection />
        </motion.div>

        {/* Sector tabs and custom detail display */}
        <motion.div {...scrollAnimateProps}>
          <SectorsSection
            onRequestDemo={() => openModal("demo")}
            onSpeakExpert={() => openModal("expert")}
          />
        </motion.div>

        {/* NEW Testimonial Carousel (Placed immediately before FAQ!) */}
        <motion.div {...scrollAnimateProps}>
          <TestimonialsSection />
        </motion.div>

        {/* Accordion list of FAQs */}
        <motion.div {...scrollAnimateProps}>
          <FAQSection onContactSupport={() => openModal("support")} />
        </motion.div>
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
