import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      id="hero"
      role="banner"
      aria-label="Contract Review Hero Section"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 bg-gray-950 text-white overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(10,10,10,0.85), rgba(10,10,10,0.2)), url('/images/road-bg.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="z-10 max-w-2xl w-full py-20 text-left"
      >
        <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-tight mb-6">
          Don’t Sign That{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-auto-blue to-primary">
            Car Contract
          </span>{" "}
          Just Yet.
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-4">
          Let a trusted advisor review it first — no pressure, no sales tactics.
        </p>

        <p className="text-lg text-muted-foreground mb-8 max-w-md">
          We'll review your offer and respond within 24 hours. Clear, unbiased advice from real professionals.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Button className="group bg-blue-600 rounded-xl px-8 py-4 text-lg font-semibold hover:scale-105 hover:shadow-xl transition animate-glow-pulse">
            Request a Consultation
            <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>

        <div className="mt-10 flex flex-wrap gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-auto-blue" />
            <span>24-hour response time</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-auto-blue" />
            <span>No pressure, no sales tactics</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-auto-blue" />
            <span>Real professionals</span>
          </div>
        </div>
      </motion.div>

      {/* Right Logo Display */}
      <div className="hidden md:block md:w-1/2 z-10">
        <img
          src="/images/hero-logo.png"
          alt="Top Auto Advisors Logo"
          className="w-full max-w-md mx-auto drop-shadow-[0_0_40px_rgba(255,255,255,0.2)] animate-float"
        />
      </div>

      {/* Optional road line effects */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;