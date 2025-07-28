import { Button } from "@/components/ui/button";
import { Car, CheckCircle, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "var(--gradient-hero)",
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Moving road lines */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-auto-blue to-transparent opacity-50 animate-road-lines"></div>
        <div className="absolute bottom-4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-auto-blue/30 to-transparent animate-road-lines" style={{ animationDelay: '1s' }}></div>
        
        {/* Floating car silhouette */}
        <div className="absolute top-1/3 right-10 opacity-10">
          <Car className="w-64 h-64 text-auto-blue animate-float" />
        </div>
        
        {/* Gradient orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-auto-blue/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 text-center">
        <div className="animate-fade-in">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Don't Sign That{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-auto-blue to-primary">
              Car Contract
            </span>
            <br />
            Just Yet.
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
            Let a trusted advisor review it first — no pressure, no sales tactics.
          </p>

          {/* Supporting Text */}
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Top Auto Advisors helps first-time car buyers avoid bad loans, inflated fees, and dealership games.
            We break down your contract before you sign — so you stay protected and in control.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <Button variant="hero" size="xl" className="group">
              Send Us Your Contract
              <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-auto-blue" />
              <span>24-hour response time</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-auto-blue" />
              <span>No pressure, no sales tactics</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-auto-blue" />
              <span>Real professionals</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroSection;