import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ImigongoDivider from "../components/ImigongoDivider";
import RevealBlock from "../components/RevealBlock";
import BackToTopButton from "../components/BackToTopButton";
import AboutSection from "../sections/AboutSection";
import VisionSection from "../sections/VisionSection";
import PricingSection from "../sections/PricingSection";
import FaqSection from "../sections/FaqSection";
import ContactSection from "../sections/ContactSection";
import CtaSection from "../sections/CtaSection";
import Footer from "../sections/Footer";

const SectionLine = () => (
  <div className="mx-auto h-px w-full max-w-7xl bg-gray-200/80" aria-hidden="true" />
);

const HomePage = () => {
  return (
    <div className="bg-white text-gray-900">
      <Navbar />
      <Hero />
      <RevealBlock>
        <AboutSection />
      </RevealBlock>
      <ImigongoDivider />
      <RevealBlock>
        <VisionSection />
      </RevealBlock>
      <SectionLine />
      <RevealBlock>
        <PricingSection />
      </RevealBlock>
      <SectionLine />
      <RevealBlock>
        <FaqSection />
      </RevealBlock>
      <SectionLine />
      <RevealBlock>
        <ContactSection />
      </RevealBlock>
      <SectionLine />
      <RevealBlock>
        <CtaSection />
      </RevealBlock>
      <ImigongoDivider />
      <RevealBlock>
        <Footer />
      </RevealBlock>
      <BackToTopButton />
    </div>
  );
};

export default HomePage;
