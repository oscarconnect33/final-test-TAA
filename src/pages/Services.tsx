import Navigation from "@/components/Navigation";
import ServicesHeroSection from "@/components/ServicesHeroSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import Footer from "@/components/Footer";

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <ServicesHeroSection />
      <WhatWeDoSection />
      <Footer />
    </div>
  );
};

export default Services;