import { Download, CheckCircle } from "lucide-react";

const LeadMagnetSection = () => {
  const features = [
    "What interest rates might be too high for your credit profile",
    "How to do a quick vehicle diagnostic before you buy",
    "Why you should check how many years the loan really covers",
    "How to research the dealer before signing anything",
    "Have you checked what your insurance will actually cost?"
  ];

  return (
    <section id="lead-magnet" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-auto-blue/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side Content */}
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-auto-blue to-primary">
                5 Things to Look Out For
              </span>
              <br />
              Before Buying a Car
            </h2>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Buying a car is a big move — but many buyers miss simple red flags that cost them. These tips help you avoid common traps.
            </p>

            <div className="bg-gradient-card border border-auto-border rounded-2xl p-8 shadow-card mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <span className="w-1 h-8 bg-gradient-to-b from-auto-blue to-primary rounded-full mr-4" />
                Inside the PDF:
              </h3>
              <ul className="space-y-4">
                {features.map((text, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-auto-blue mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground leading-relaxed">{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Updated Download Link */}
            <a
              href="/downloads/free-guide.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 text-white bg-gradient-to-r from-auto-blue to-primary rounded-xl shadow-md hover:shadow-lg transition-all text-lg font-semibold group"
            >
              <Download className="w-6 h-6 mr-2 group-hover:animate-bounce" />
              Download the Free PDF
            </a>

            <p className="text-sm text-muted-foreground mt-4">
              No signup. No pressure. Just real info.
            </p>
          </div>

          {/* Right Side Visual */}
          <div className="animate-slide-in-right flex justify-center lg:justify-end">
            <div className="p-4 bg-gradient-to-br from-auto-blue to-primary rounded-2xl shadow-glow transform hover:rotate-0 rotate-3 transition-transform duration-500">
              <div className="bg-auto-dark rounded-xl overflow-hidden shadow-lg">
                <img
                  src="/images/Free-Guide-cover.png"
                  alt="Lead Magnet PDF Preview"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnetSection;
