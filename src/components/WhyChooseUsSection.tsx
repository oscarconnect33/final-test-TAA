import { Shield, X, Network, Zap } from "lucide-react";

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: Shield,
      title: "We've Been on the Inside",
      description: "Our team comes from the auto finance world. We know how contracts are built — and where traps usually are.",
      gradient: "from-blue-500 to-blue-700"
    },
    {
      icon: X,
      title: "We Don't Work for Dealers",
      description: "No commissions. No kickbacks. No referral fees. We don't make a dollar from any dealership — because we're here to protect you, not them.",
      gradient: "from-red-500 to-red-700"
    },
    {
      icon: Network,
      title: "Clarity Over Confusion",
      description: "We break down complex loan terms and dealership quotes in plain language. No jargon. Just facts.",
      gradient: "from-green-500 to-green-700"
    },
    {
      icon: Zap,
      title: "Fast, Honest Feedback",
      description: "Send us your contract today. You'll hear from us within 24 hours — with straight answers.",
      gradient: "from-purple-500 to-purple-700"
    }
  ];

  return (
    <section id="why-choose-us" className="py-24 md:py-32 bg-auto-dark">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Choose{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-auto-blue to-primary">
              Top Auto Advisors?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're not dealers. We're not lenders. We work for one person — the buyer.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group bg-gradient-card border border-auto-border rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-500 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-glow`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Statement */}
        <div className="text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="bg-gradient-card border border-auto-border rounded-2xl p-8 shadow-card">
            <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-auto-blue to-primary mb-4">
              Flat Pricing. No Surprises.
            </h3>
            <p className="text-lg text-muted-foreground">
              Transparent, honest pricing with no hidden fees or upsells.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;