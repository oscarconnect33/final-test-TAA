import { Shield, X, Network, Zap, Star } from "lucide-react";
import { motion } from "framer-motion";

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: Shield,
      title: "We've Been on the Inside",
      description: "Our team comes from the auto finance world. We know how contracts are built — and where traps usually are.",
      gradient: "from-blue-500 to-blue-700",
      glowColor: "shadow-[0_0_30px_rgba(59,130,246,0.3)]"
    },
    {
      icon: X,
      title: "We Don't Work for Dealers",
      description: "No commissions. No kickbacks. No referral fees. We don't make a dollar from any dealership — because we're here to protect you, not them.",
      gradient: "from-red-500 to-red-700",
      glowColor: "shadow-[0_0_30px_rgba(239,68,68,0.3)]"
    },
    {
      icon: Network,
      title: "Clarity Over Confusion",
      description: "We break down complex loan terms and dealership quotes in plain language. No jargon. Just facts.",
      gradient: "from-green-500 to-green-700",
      glowColor: "shadow-[0_0_30px_rgba(34,197,94,0.3)]"
    },
    {
      icon: Zap,
      title: "Fast, Honest Feedback",
      description: "Send us your contract today. You'll hear from us within 24 hours — with straight answers.",
      gradient: "from-purple-500 to-purple-700",
      glowColor: "shadow-[0_0_30px_rgba(168,85,247,0.3)]"
    }
  ];

  return (
    <section id="why-choose-us" className="relative py-20 md:py-32 bg-gradient-to-b from-auto-dark via-gray-950 to-auto-dark overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        {/* Animated background stars */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-auto-blue/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
        
        {/* Gradient overlays */}
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-auto-blue/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-auto-blue/5 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20 md:mb-24"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-auto-blue/10 border border-auto-blue/20 rounded-full px-6 py-2 mb-6"
          >
            <Star className="w-5 h-5 text-auto-blue" />
            <span className="text-auto-blue font-medium">Why Choose Us</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Why Choose{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-auto-blue via-primary to-auto-blue">
              Top Auto Advisors?
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We're not dealers. We're not lenders. We work for one person — the buyer.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-20 md:mb-24">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Card background glow */}
                <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${feature.glowColor} blur-xl`} />
                
                <div className="relative bg-gradient-to-br from-auto-card/80 to-auto-card/40 border border-auto-border/50 rounded-3xl p-8 md:p-10 backdrop-blur-sm hover:border-auto-border transition-all duration-500 hover:-translate-y-2 group-hover:shadow-2xl">
                  <div className="flex items-start space-x-6 md:space-x-8">
                    {/* Enhanced Icon */}
                    <div className="relative flex-shrink-0">
                      {/* Icon background glow */}
                      <div className={`absolute inset-0 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300 ${feature.glowColor}`} />
                      
                      <div className={`relative w-20 h-20 md:w-24 md:h-24 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-2xl`}>
                        <Icon className="w-10 h-10 md:w-12 md:h-12 text-white drop-shadow-lg" />
                        
                        {/* Inner glow */}
                        <div className="absolute inset-2 rounded-xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 group-hover:text-auto-blue transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-base md:text-lg text-muted-foreground leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Decorative corner elements */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-auto-blue/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 w-1 h-1 bg-primary/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Enhanced Bottom Statement */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="relative group">
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-auto-blue/20 via-primary/20 to-auto-blue/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="relative bg-gradient-to-br from-auto-card/90 to-auto-card/60 border-2 border-auto-border/50 rounded-3xl p-10 md:p-16 backdrop-blur-sm hover:border-auto-blue/30 transition-all duration-500 group-hover:shadow-2xl">
              {/* Decorative elements */}
              <div className="absolute top-6 left-6 w-3 h-3 bg-auto-blue/40 rounded-full animate-pulse" />
              <div className="absolute top-6 right-6 w-2 h-2 bg-primary/40 rounded-full animate-pulse delay-1000" />
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-auto-blue/40 rounded-full animate-pulse delay-500" />
              
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-auto-blue to-transparent" />
                <Star className="w-6 h-6 text-auto-blue" />
                <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-auto-blue to-transparent" />
              </div>
              
              <h3 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-auto-blue via-primary to-auto-blue mb-6 group-hover:scale-105 transition-transform duration-300">
                Flat Pricing. No Surprises.
              </h3>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Transparent, honest pricing with no hidden fees or upsells. What you see is what you pay.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;