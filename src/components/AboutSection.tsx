import Logo from "@/components/Logo";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Born from{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-auto-blue to-primary">
                the Inside.
              </span>
              <br />
              Built to Protect Buyers.
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Top Auto Advisors was founded after years of watching first-time car buyers 
                get trapped in bad deals.
              </p>
              
              <p>
                We've seen the hidden fees, the pressure tactics, and the financial stress 
                it causes down the road — and we're here to change that.
              </p>
            </div>

            {/* The Backstory */}
            <div className="mt-12 p-8 bg-gradient-card border border-auto-border rounded-2xl shadow-card">
              <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                <span className="w-1 h-8 bg-gradient-to-b from-auto-blue to-primary rounded-full mr-4"></span>
                The Backstory
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Our founder, Jovan Palomera, spent over five years working inside a real auto 
                finance company. His job? Customer service and collections.
              </p>
            </div>

            {/* Bottom Quote */}
            <div className="mt-12 p-8 bg-auto-dark border-l-4 border-auto-blue rounded-r-xl">
              <blockquote className="text-2xl font-bold text-foreground italic">
                "Buyers don't need help after they sign."
              </blockquote>
              <blockquote className="text-2xl font-bold text-primary italic mt-2">
                "They need protection before."
              </blockquote>
            </div>
          </div>

          {/* Right Visual */}
          <div className="animate-slide-in-right">
            <div className="relative">
              {/* Main Logo Circle */}
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-auto-blue to-primary rounded-full flex items-center justify-center shadow-glow animate-float">
                <div className="w-64 h-64 bg-auto-dark rounded-full flex items-center justify-center">
                  <Logo size="xl" showText={true} />
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-float opacity-70" style={{ animationDelay: '1s' }}></div>
              <div className="absolute -bottom-8 -right-8 w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full animate-float opacity-70" style={{ animationDelay: '2s' }}></div>
              <div className="absolute top-1/2 -left-12 w-8 h-8 bg-gradient-to-r from-red-500 to-orange-500 rounded-full animate-float opacity-70" style={{ animationDelay: '3s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;