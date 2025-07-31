import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import WhoWeHelpSection from "@/components/WhoWeHelpSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import LeadMagnetSection from "@/components/LeadMagnetSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <WhoWeHelpSection />
      <WhatWeDoSection />
      <HowItWorksSection />
      <WhyChooseUsSection />
      <LeadMagnetSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
