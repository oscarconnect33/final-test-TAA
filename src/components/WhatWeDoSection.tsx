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
      className="relative py-20 md:py-24 bg-gradient-to-b from-slate-950 via-blue-950/50 to-slate-950 overflow-hidden"
    >
      {/* Starry background effect */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-1 h-1 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-1 h-1 bg-white rounded-full animate-pulse delay-75"></div>
        <div className="absolute top-32 left-1/4 w-1 h-1 bg-blue-300 rounded-full animate-pulse delay-150"></div>
        <div className="absolute bottom-20 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-32 left-1/3 w-1 h-1 bg-blue-200 rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-1/2 right-10 w-1 h-1 bg-white rounded-full animate-pulse delay-700"></div>
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What We Do
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
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
                className={`group relative bg-gradient-to-br ${service.bgGradient} backdrop-blur-sm border ${service.borderColor} rounded-2xl p-8 hover:scale-105 transition-all duration-300 hover:shadow-2xl`}
              >
                <div className="flex flex-col items-center text-center h-full">
                  {/* Icon */}
                  <div className="w-20 h-20 rounded-2xl bg-slate-800/50 border border-slate-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className={`w-10 h-10 ${service.iconColor}`} />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gray-100 transition-colors">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed flex-grow text-base">
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