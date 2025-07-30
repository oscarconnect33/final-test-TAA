import { FileText, Flag, Phone } from "lucide-react";
import { motion } from "framer-motion";

const WhatWeDoSection = () => {
  const services = [
    {
      icon: FileText,
      title: "Contract Reviews",
      description: "We examine your loan terms, payment schedule, fees, and fine print — so you know exactly what you're signing.",
      iconColor: "text-blue-400",
      bgGradient: "from-blue-500/20 to-blue-600/20",
      borderColor: "border-blue-500/30"
    },
    {
      icon: Flag,
      title: "Red Flag Reports", 
      description: "A simple summary of what's unnecessary, inflated, or risky — before it costs you.",
      iconColor: "text-red-400",
      bgGradient: "from-red-500/20 to-red-600/20",
      borderColor: "border-red-500/30"
    },
    {
      icon: Phone,
      title: "Consultation Calls",
      description: "A one-on-one walk through of your deal. We answer questions, explain the terms, and send you a script to use at the dealership.",
      iconColor: "text-purple-400",
      bgGradient: "from-purple-500/20 to-purple-600/20",
      borderColor: "border-purple-500/30"
    }
  ];

  return (
    <section 
      id="services" 
      className="relative py-20 md:py-24 bg-gradient-to-b from-slate-900 via-blue-900/40 to-slate-900 overflow-hidden"
    >
      {/* Enhanced starry background effect */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-2 h-2 bg-blue-300 rounded-full animate-pulse shadow-[0_0_10px_#93c5fd]"></div>
        <div className="absolute top-20 right-20 w-1 h-1 bg-white rounded-full animate-pulse delay-75 shadow-[0_0_8px_#ffffff]"></div>
        <div className="absolute top-32 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-150 shadow-[0_0_12px_#60a5fa]"></div>
        <div className="absolute bottom-20 right-1/4 w-1 h-1 bg-purple-300 rounded-full animate-pulse delay-300 shadow-[0_0_8px_#c4b5fd]"></div>
        <div className="absolute bottom-32 left-1/3 w-2 h-2 bg-blue-200 rounded-full animate-pulse delay-500 shadow-[0_0_10px_#bfdbfe]"></div>
        <div className="absolute top-1/2 right-10 w-1 h-1 bg-white rounded-full animate-pulse delay-700 shadow-[0_0_6px_#ffffff]"></div>
        <div className="absolute top-1/3 left-1/2 w-1 h-1 bg-blue-300 rounded-full animate-pulse delay-1000 shadow-[0_0_8px_#93c5fd]"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
            What We Do
          </h2>
          <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            We help first-time car buyers make informed decisions before committing to a loan or dealership offer.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`group relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border-2 ${service.borderColor} rounded-2xl p-8 hover:scale-105 transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:border-opacity-80`}
                style={{
                  boxShadow: `0 10px 30px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1)`
                }}
              >
                {/* Glow effect behind card */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10`}></div>
                
                <div className="flex flex-col items-center text-center h-full relative z-10">
                  {/* Enhanced Glowing Icon */}
                  <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-800 border-2 ${service.borderColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 relative overflow-hidden`}
                       style={{
                         boxShadow: `0 0 20px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2)`
                       }}>
                    {/* Icon glow background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
                    <Icon 
                      className={`w-12 h-12 ${service.iconColor} relative z-10 drop-shadow-lg group-hover:drop-shadow-[0_0_10px_currentColor] transition-all duration-300`} 
                      style={{
                        filter: 'drop-shadow(0 0 8px currentColor)'
                      }}
                    />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gray-100 transition-colors drop-shadow-sm">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-200 leading-relaxed flex-grow text-base">
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