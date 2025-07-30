const WhoWeHelpSection = () => {
  return (
    <section id="who-we-help" className="py-20 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Who We{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-auto-blue to-primary">
              Help
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We work with everyday car buyers — no finance degree required. If this is your first time 
            or you're just not sure what's in your contract, we've got your back.
          </p>
        </div>

        {/* Two Expanded Cards */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-24">
          {/* First-Time Buyers Card */}
          <div className="group bg-gradient-card border border-auto-border rounded-3xl p-6 md:p-12 h-auto md:h-[500px] shadow-card hover:shadow-glow transition-all duration-500 hover:-translate-y-2 animate-fade-in">
            <div className="flex flex-col items-center text-center h-full justify-center">
              <div className="w-32 h-32 md:w-60 md:h-60 rounded-2xl flex items-center justify-center mb-6 md:mb-8 shadow-glow group-hover:scale-110 transition-transform duration-300">
                <img
                  src="/Icons/car-glow.png"
                  alt="Car icon"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 md:mb-5">
                First-Time Buyers
              </h3>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed px-2 md:px-4">
                You've never signed a car loan before. You want to do this right, 
                not get trapped in some long-term mistake.
              </p>
            </div>
          </div>

          {/* Unsure/New Buyers Card */}
          <div
            className="group bg-gradient-card border border-auto-border rounded-3xl p-6 md:p-12 h-auto md:h-[500px] shadow-card hover:shadow-glow transition-all duration-500 hover:-translate-y-2 animate-fade-in"
            style={{ animationDelay: '0.2s' }}
          >
            <div className="flex flex-col items-center text-center h-full justify-center">
              <div className="w-32 h-32 md:w-60 md:h-60 rounded-2xl flex items-center justify-center mb-6 md:mb-8 shadow-glow group-hover:scale-110 transition-transform duration-300">
                <img
                  src="/Icons/question-glow.png"
                  alt="Question icon"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 md:mb-5 text-balance">
                Anyone Who's Unsure or New to Car Buying
              </h3>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed px-2 md:px-4">
                If you don't understand the contract, if the numbers feel off, or—if 
                you just want a second opinion — that's exactly what we do.
              </p>
            </div>
          </div>
        </div>

        {/* Closing Statement */}
        <div className="text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="bg-gradient-card border border-auto-border rounded-2xl p-6 md:p-12 shadow-card max-w-5xl mx-auto">
            <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-4 italic">
              Most people aren't good with auto finance paperwork.
            </p>
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-auto-blue to-primary leading-[1.3] pb-4">
              But we are — let us guide you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelpSection;
