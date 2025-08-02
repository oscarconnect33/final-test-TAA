import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FileText, AlertTriangle, User, DollarSign } from "lucide-react";

const ServicesHeroSection = () => {
  console.log("ServicesHeroSection is loading and rendering");
  
  const services = [
    {
      icon: FileText,
      title: "Contract Reviews",
      delay: 0.2,
      position: "top-20 right-32",
    },
    {
      icon: AlertTriangle,
      title: "Red Flag Reports",
      delay: 0.4,
      position: "top-64 right-16",
    },
    {
      icon: User,
      title: "Consultation Calls",
      delay: 0.6,
      position: "bottom-32 right-20",
    },
    {
      icon: DollarSign,
      title: "Negotiation Tips",
      delay: 0.8,
      position: "bottom-16 right-44",
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-between px-6 md:px-16 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white overflow-hidden">
      {/* DEBUG MARKER - SERVICES HERO START */}
      <p className="absolute top-2 left-2 text-xs text-orange-400 bg-black/70 px-2 py-1 rounded z-50">
        DEBUG: Services HeroSection Loaded
      </p>

      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-auto-blue/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="z-10 max-w-2xl w-full py-16 md:py-20"
      >
        <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-tight mb-6">
          Guiding First-Time{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-auto-blue to-primary">
            Car Buyers
          </span>{" "}
          Through Every Step.
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-lg">
          Our experts review your loan terms, flag issues in your contract,
          provide negotiation guidance, and more.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button
            variant="cta"
            size="lg"
            className="px-8 py-4 text-lg font-semibold rounded-xl hover:scale-105 transition-transform"
          >
            View All Services
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="px-8 py-4 text-lg font-semibold rounded-xl border-white/20 text-white hover:bg-white/10 hover:scale-105 transition-all"
          >
            Send Us Your Contract
          </Button>
        </motion.div>
      </motion.div>

      {/* Right Floating Services */}
      <div className="hidden lg:block relative w-1/2 h-full">
        {/* Connection lines */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 600">
          <defs>
            <linearGradient
              id="lineGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="rgba(2,153,255,0.3)" />
              <stop offset="100%" stopColor="rgba(2,153,255,0.1)" />
            </linearGradient>
          </defs>
          <motion.path
            d="M100 150 Q200 200 150 300 Q100 400 200 450 Q300 350 250 500"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 1 }}
          />
        </svg>

        {services.map((service) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: service.delay, duration: 0.5 }}
              className={`absolute ${service.position} flex flex-col items-center text-center group cursor-pointer`}
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-xl bg-auto-blue/20 blur-xl scale-150 group-hover:scale-175 transition-transform duration-300" />
                <div className="relative bg-auto-dark/80 border border-auto-blue/40 rounded-xl p-6 backdrop-blur-sm group-hover:border-auto-blue/60 transition-all duration-300 shadow-[0_0_30px_rgba(2,153,255,0.3)]">
                  <Icon className="w-8 h-8 text-auto-blue group-hover:text-white transition-colors duration-300" />
                </div>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white whitespace-nowrap group-hover:text-auto-blue transition-colors duration-300">
                {service.title}
              </h3>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default ServicesHeroSection;
