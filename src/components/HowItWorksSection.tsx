import { Send, Search, Lightbulb } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Send,
      number: "1",
      title: "Send Us the Details",
      description: "Email us your contract, purchase quote, or loan offer. Just attach the file or copy the numbers into your message.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Search,
      number: "2", 
      title: "We Review & Respond",
      description: "We'll go through everything — APR, fees, add-ons, payment terms — and flag anything that looks off. You'll get a response within 24 hours.",
      color: "from-auto-blue to-blue-600"
    },
    {
      icon: Lightbulb,
      number: "3",
      title: "You Make an Informed Decision", 
      description: "We'll walk you through your options and give you guidance you can actually use.",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            How the Process <span className="text-transparent bg-clip-text bg-gradient-to-r from-auto-blue to-primary">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Whether you're staring at a loan offer or dealership quote, here's how to get it reviewed by someone who's on your side — not theirs.
          </p>
        </div>

        {/* Steps Timeline */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-auto-blue via-primary to-auto-blue transform -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="group flex flex-col items-center text-center animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Step Circle */}
                  <div className="relative mb-8">
                    <div className={`w-24 h-24 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center shadow-glow group-hover:shadow-elegant transition-all duration-500 group-hover:scale-110`}>
                      <Icon className="w-12 h-12 text-white" />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-auto-blue rounded-full flex items-center justify-center text-white font-bold text-sm shadow-glow">
                      {step.number}
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="bg-gradient-card border border-auto-border rounded-2xl p-8 shadow-card group-hover:shadow-glow transition-all duration-500 group-hover:-translate-y-2">
                    <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                      Step {step.number}
                    </h3>
                    <h4 className="text-xl font-semibold text-foreground mb-4">
                      {step.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="bg-gradient-card border border-auto-border rounded-xl p-6 shadow-card inline-block">
            <p className="text-lg text-muted-foreground">
              <span className="font-semibold text-primary">Suggest a preferred time</span> — we'll try to match it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;