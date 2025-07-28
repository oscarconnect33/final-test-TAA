import { Button } from "@/components/ui/button";
import { Download, Car, CheckCircle } from "lucide-react";

const LeadMagnetSection = () => {
  const features = [
    "What interest rates are too high for your profile",
    "Which fees are unnecessary or padded", 
    "What \"add-ons\" to reject immediately",
    "How to decode dealership quotes",
    "What lenders hope you won't notice"
  ];

  return (
    <section id="lead-magnet" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-auto-blue/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-auto-blue to-primary">
                Free Guide:
              </span>
              <br />
              5 Things to Watch For Before You Buy a Car
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              There are five common ways buyers get stuck with bad car deals — and most of them could've been avoided with one quick look.
            </p>

            {/* What's Inside */}
            <div className="bg-gradient-card border border-auto-border rounded-2xl p-8 shadow-card mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <span className="w-1 h-8 bg-gradient-to-b from-auto-blue to-primary rounded-full mr-4"></span>
                What's Inside:
              </h3>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-auto-blue flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
            <Button variant="cta" size="lg" className="w-full sm:w-auto group">
              <Download className="w-6 h-6 mr-2 group-hover:animate-bounce" />
              Download the Free PDF
            </Button>

            <p className="text-sm text-muted-foreground mt-4">
              No signup. No strings. Just real info that protects you.
            </p>
          </div>

          {/* Right Visual - Guide Preview */}
          <div className="animate-slide-in-right">
            <div className="relative">
              {/* Guide Book Mockup */}
              <div className="bg-gradient-to-br from-auto-blue to-primary p-8 rounded-2xl shadow-glow transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-auto-dark rounded-xl p-8 h-96 flex flex-col justify-between">
                  {/* Book Header */}
                  <div>
                    <div className="w-16 h-16 bg-gradient-to-r from-auto-blue to-primary rounded-lg flex items-center justify-center mb-6 shadow-glow">
                      <Car className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-2">
                      5 Things to Watch For
                    </h4>
                    <p className="text-auto-blue font-semibold text-lg">
                      BEFORE YOU BUY A CAR
                    </p>
                  </div>

                  {/* Book Footer */}
                  <div className="text-center">
                    <div className="text-white font-bold">TOP AUTO</div>
                    <div className="text-auto-blue font-bold">ADVISORS</div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full animate-float opacity-70"></div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-r from-yellow-500 to-red-500 rounded-full animate-float opacity-70" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnetSection;