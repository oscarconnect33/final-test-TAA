import { Car, HelpCircle } from "lucide-react";

const WhoWeHelpSection = () => {
  return (
    <section id="who-we-help" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Who We <span className="text-transparent bg-clip-text bg-gradient-to-r from-auto-blue to-primary">Help</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We work with everyday car buyers — no finance degree required. If this is your first time 
            or you're just not sure what's in your contract, we've got your back.
          </p>
        </div>

        {/* Two Cards Layout */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* First-Time Buyers Card */}
          <div className="group bg-gradient-card border border-auto-border rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-500 hover:-translate-y-2 animate-fade-in">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-glow">
                <Car className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                First-Time Buyers
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                You've never signed a car loan before. You want to do this right, 
                not get trapped in some long-term mistake.
              </p>
            </div>
          </div>

          {/* Anyone Who's Unsure Card */}
          <div className="group bg-gradient-card border border-auto-border rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-500 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-glow">
                <HelpCircle className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Anyone Who's Unsure or New to Car Buying
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                If you don't understand the contract, if the numbers feel off, or—if 
                you just want a second opinion — that's exactly what we do.
              </p>
            </div>
          </div>
        </div>

        {/* Closing Statement */}
        <div className="text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="bg-gradient-card border border-auto-border rounded-2xl p-12 shadow-card">
            <p className="text-2xl md:text-3xl text-muted-foreground mb-4 italic">
              Most people aren't good with auto finance paperwork.
            </p>
            <p className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-auto-blue to-primary">
              We are.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelpSection;