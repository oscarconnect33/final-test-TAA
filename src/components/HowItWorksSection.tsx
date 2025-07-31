import { FileText, Search, Lightbulb } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: FileText,
      number: "1",
      title: "Send Us the Details",
      description: "Email us your contract, purchase quote, or loan offer. Just attach the file or copy the numbers into your message.",
      color: "from-blue-500 to-cyan-500",
      bgGlow: "bg-blue-500/20"
    },
    {
      icon: Search,
      number: "2", 
      title: "We Review & Respond",
      description: "We'll go through everything — APR, fees, add-ons, payment terms — and flag anything that looks off. You'll get a response within 24 hours.",
      color: "from-auto-blue to-blue-600",
      bgGlow: "bg-auto-blue/20"
    },
    {
      icon: Lightbulb,
      number: "3",
      title: "You Make an Informed Decision", 
      description: "We'll walk you through your options and give you guidance you can actually use.",
      color: "from-amber-500 to-orange-500",
      bgGlow: "bg-amber-500/20"
    }
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-[#0a0f1c] to-[#1a1f2e] relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        {/* Starry background */}
        <div className="absolute top-10 left-10 w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-1 h-1 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-32 left-1/4 w-1 h-1 bg-blue-300 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-cyan-300 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-32 left-1/2 w-1 h-1 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/2 right-10 w-1 h-1 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '2.5s' }}></div>
        
        {/* Larger glowing orbs */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-36 h-36 bg-amber-500/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
            How the Process <span className="text-transparent bg-clip-text bg-gradient-to-r from-auto-blue to-cyan-400">Works</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Whether you're staring at a loan offer or dealership quote, here's how to get it reviewed by someone who's on your side — not theirs.
          </p>
        </div>

        {/* Enhanced Steps Timeline */}
        <div className="relative">
          {/* Enhanced Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-[16.67%] right-[16.67%] h-0.5 transform -translate-y-1/2 z-0">
            <div className="h-full bg-gradient-to-r from-transparent via-auto-blue to-transparent opacity-60"></div>
            <div className="absolute top-0 left-0 right-0 h-full bg-gradient-to-r from-blue-500/40 via-cyan-400/40 to-amber-500/40 animate-pulse"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="group flex flex-col items-center text-center animate-fade-in"
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  {/* Enhanced Step Circle with Multiple Rings */}
                  <div className="relative mb-8 md:mb-12">
                    {/* Outer glow ring */}
                    <div className={`absolute inset-0 w-32 h-32 md:w-40 md:h-40 ${step.bgGlow} rounded-full blur-xl animate-pulse`}></div>
                    
                    {/* Middle ring */}
                    <div className="absolute inset-4 md:inset-6 border-2 border-auto-blue/30 rounded-full animate-ping-slow"></div>
                    
                    {/* Main icon circle */}
                    <div className={`relative w-24 h-24 md:w-28 md:h-28 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(59,130,246,0.6)] group-hover:shadow-[0_0_60px_rgba(59,130,246,0.8)] transition-all duration-500 group-hover:scale-110 border-2 border-white/20`}>
                      <Icon className="w-10 h-10 md:w-12 md:h-12 text-white drop-shadow-lg" />
                    </div>
                    
                    {/* Step number badge */}
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-auto-blue to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm md:text-base shadow-[0_0_20px_rgba(59,130,246,0.6)] border-2 border-white/20">
                      {step.number}
                    </div>
                  </div>

                  {/* Enhanced Step Content */}
                  <div className="bg-gradient-to-br from-[#1a1f2e]/80 to-[#0f1419]/80 backdrop-blur-sm border border-auto-blue/30 rounded-2xl p-6 md:p-8 shadow-[0_8px_32px_rgba(0,0,0,0.3)] group-hover:shadow-[0_12px_48px_rgba(59,130,246,0.2)] transition-all duration-500 group-hover:-translate-y-2 group-hover:border-auto-blue/50 max-w-sm mx-auto">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 group-hover:text-cyan-400 transition-colors">
                      Step {step.number}
                    </h3>
                    <h4 className="text-lg md:text-xl font-semibold text-auto-blue mb-3 md:mb-4 leading-tight">
                      {step.title}
                    </h4>
                    <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Enhanced Bottom Note */}
        <div className="text-center mt-12 md:mt-16 animate-fade-in" style={{ animationDelay: '0.9s' }}>
          <div className="bg-gradient-to-r from-[#1a1f2e]/80 to-[#0f1419]/80 backdrop-blur-sm border border-auto-blue/30 rounded-xl p-4 md:p-6 shadow-[0_8px_32px_rgba(0,0,0,0.3)] inline-block hover:border-auto-blue/50 transition-all duration-300">
            <p className="text-base md:text-lg text-gray-300">
              <span className="font-semibold text-cyan-400">Suggest a preferred time</span> — we'll try to match it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;