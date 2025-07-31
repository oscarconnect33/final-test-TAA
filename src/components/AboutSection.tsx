const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-16 md:py-24 lg:py-32 bg-[#0b101c] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight">
              We’ve Seen the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-auto-blue to-primary">
                Worst.
              </span>
              <br />
              That’s Why We Exist.
            </h2>

            <div className="space-y-4 md:space-y-6 text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed">
              <p>
                Top Auto Advisors was founded after years of watching first-time car buyers get trapped in bad deals. We’ve seen the hidden fees. The shady add-ons. The lemon cars passed off as deals of a lifetime. And the truth is: most buyers don’t need help after they sign. They need someone on their side before they walk into the dealership
              </p>
              <p>
                We've seen the hidden fees, the pressure tactics, and the financial stress it causes down the road — and we're here to change that.
              </p>
            </div>

            {/* Backstory Card */}
            <div className="mt-8 md:mt-12 p-4 md:p-8 bg-gradient-card border border-auto-border rounded-2xl shadow-card">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 flex items-center">
                <span className="w-1 h-8 bg-gradient-to-b from-auto-blue to-primary rounded-full mr-4" />
                The Backstory
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Our founder, Jovan Palomera, spent over five years inside a real auto finance company — handling customer service and collections. He watched the cycle repeat: stressed-out buyers, overwhelmed by fine print, stuck in payments they couldn’t afford.

That’s when he decided to flip the script — and start protecting people on the front end.
              </p>
            </div>

            {/* Quote */}
            <div className="mt-8 md:mt-12 p-4 md:p-8 bg-[#111827] border-l-4 border-auto-blue rounded-r-xl">
              <blockquote className="text-lg md:text-xl lg:text-2xl font-bold text-white italic">
                "Buyers don't need help after they sign."
              </blockquote>
              <blockquote className="text-lg md:text-xl lg:text-2xl font-bold text-primary italic mt-2">
                "They need protection before."
              </blockquote>
            </div>
          </div>

          {/* Right Visual */}
          <div className="animate-slide-in-right flex justify-center lg:justify-end relative">
            <div className="w-[280px] h-[280px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] flex items-center justify-center rounded-full bg-[#0d111d] shadow-xl relative glow-ring animate-pulse-slow">
              <img
                src="/images/astro-logo-top-auto-advisors.png"
                alt="Top Auto Advisors Logo"
                className="w-full h-full object-contain animate-float-up"
              />
              {/* Floating glow ring */}
              <div className="absolute top-0 left-0 w-full h-full rounded-full border-4 border-blue-500/30 animate-ping-slow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
