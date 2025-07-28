import { FileText, Flag, Phone, ClipboardCheck } from "lucide-react";

const WhatWeDoSection = () => {
  const services = [
    {
      icon: FileText,
      title: "Contract Reviews",
      description: "We examine your loan terms, payment schedule, fees, and fine print — so you know exactly what you're signing.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Flag,
      title: "Red Flag Reports", 
      description: "A simple summary of what's unnecessary, inflated, or risky — before it costs you.",
      color: "from-red-500 to-red-600"
    },
    {
      icon: Phone,
      title: "Consultation Calls",
      description: "A one-on-one walk through of your deal. We answer questions, explain the terms, and send you a script to use at the dealership.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: ClipboardCheck,
      title: "Purchase Quote Audits",
      description: "Audit of \"out-the-door\" pricing to ensure you're getting a fair deal without hidden surprises.",
      color: "from-green-500 to-green-600"
    }
  ];

  return (
    <section id="services" className="py-20 md:py-24 bg-auto-dark">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What We <span className="text-transparent bg-clip-text bg-gradient-to-r from-auto-blue to-primary">Do</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We help first-time car buyers make informed decisions before committing to a loan or dealership offer.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group bg-gradient-card border border-auto-border rounded-2xl p-6 shadow-card hover:shadow-glow transition-all duration-500 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center text-center h-full">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-glow`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed flex-grow">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;