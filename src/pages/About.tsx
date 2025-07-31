import Navigation from "@/components/Navigation";
import AboutSection from "@/components/AboutSection";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <AboutSection />
      <TeamSection />
      <Footer />
    </div>
  );
};

export default About;