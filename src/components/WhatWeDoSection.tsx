import { FileText, Flag, Phone } from "lucide-react";
import { motion } from "framer-motion";

const WhatWeDoSection = () => {
  const services = [
    {
      icon: FileText,
      title: "Contract Reviews",
      description: "We examine your loan terms, payment schedule, fees, and fine print — so you know exactly what you're signing.",
      iconColor: "text-auto-blue",
      bgGradient: "from-auto-blue/20 to-auto-blue-dark/20",
      borderColor: "border-auto-blue/30"
    },
    {
      icon: Flag,
      title: "Red Flag Reports", 
      description: "A simple summary of what's unnecessary, inflated, or risky — before it costs you.",
      iconColor: "text-destructive",
      bgGradient: "from-destructive/20 to-destructive/30",
      borderColor: "border-destructive/30"
    },
    {
      icon: Phone,
      title: "Consultation Calls",
      description: "A one-on-one walk through of your deal. We answer questions, explain the terms, and send you a script to use at the dealership.",
      iconColor: "text-accent",
      bgGradient: "from-accent/20 to-accent/30",
      borderColor: "border-accent/30"
    }
  ];

  return (
    <section 
      id="services" 
      className="relative py-12 md:py-20 lg:py-24 bg-gradient-to-b from-auto-dark via-auto-blue/10 to-auto-dark overflow-hidden"
    >
      {/* Enhanced starry background effect */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-2 h-2 bg-auto-glow/80 rounded-full animate-pulse" style={{boxShadow: "0 0 10px hsl(var(--auto-glow))"}}></div>
        <div className="absolute top-20 right-20 w-1 h-1 bg-foreground rounded-full animate-pulse delay-75" style={{boxShadow: "0 0 8px hsl(var(--foreground))"}}></div>
        <div className="absolute top-32 left-1/4 w-2 h-2 bg-auto-blue rounded-full animate-pulse delay-150" style={{boxShadow: "0 0 12px hsl(var(--auto-blue))"}}></div>
        <div className="absolute bottom-20 right-1/4 w-1 h-1 bg-accent rounded-full animate-pulse delay-300" style={{boxShadow: "0 0 8px hsl(var(--accent))"}}></div>
        <div className="absolute bottom-32 left-1/3 w-2 h-2 bg-auto-glow/60 rounded-full animate-pulse delay-500" style={{boxShadow: "0 0 10px hsl(var(--auto-glow))"}}></div>
        <div className="absolute top-1/2 right-10 w-1 h-1 bg-foreground rounded-full animate-pulse delay-700" style={{boxShadow: "0 0 6px hsl(var(--foreground))"}}></div>
        <div className="absolute top-1/3 left-1/2 w-1 h-1 bg-auto-glow/70 rounded-full animate-pulse delay-1000" style={{boxShadow: "0 0 8px hsl(var(--auto-glow))"}}></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 md:mb-6 drop-shadow-lg">
            What We Do
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4">
            We help first-time car buyers make informed decisions before committing to a loan or dealership offer.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`group relative bg-gradient-card backdrop-blur-sm border-2 ${service.borderColor} rounded-2xl p-6 md:p-8 hover:scale-105 transition-all duration-var(--transition-smooth) hover:shadow-elegant hover:border-opacity-80`}
                style={{
                  boxShadow: `var(--shadow-card), inset 0 1px 0 hsl(var(--foreground) / 0.1)`
                }}
              >
                {/* Glow effect behind card */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10`}></div>
                
                <div className="flex flex-col items-center text-center h-full relative z-10">
                   {/* Enhanced Glowing Icon */}
                   <div className={`w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-auto-card to-auto-darker border-2 ${service.borderColor} flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-all duration-var(--transition-smooth) relative overflow-hidden`}
                        style={{
                          boxShadow: `var(--shadow-glow), inset 0 1px 0 hsl(var(--foreground) / 0.2)`
                        }}>
                    {/* Icon glow background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
                    <Icon 
                      className={`w-10 h-10 md:w-12 md:h-12 ${service.iconColor} relative z-10 drop-shadow-lg group-hover:drop-shadow-[0_0_10px_currentColor] transition-all duration-300`} 
                      style={{
                        filter: 'drop-shadow(0 0 8px currentColor)'
                      }}
                    />
                  </div>
                  
                   {/* Title */}
                   <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4 group-hover:text-auto-glow transition-colors drop-shadow-sm">
                     {service.title}
                   </h3>
                   
                   {/* Description */}
                   <p className="text-sm md:text-base text-muted-foreground leading-relaxed flex-grow">
                     {service.description}
                   </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;