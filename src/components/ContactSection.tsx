import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 md:py-24 lg:py-32 bg-auto-dark">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
            Contact{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-auto-blue to-primary">
              Us
            </span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Fill out the form below and let us know what you need help with. We'll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Left Content */}
          <div className="lg:col-span-2 animate-fade-in">
            <div className="space-y-6">
                <div className="bg-gradient-card border border-auto-border rounded-xl p-4 md:p-6 shadow-card">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-auto-blue to-primary rounded-lg flex items-center justify-center shadow-glow">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-foreground font-semibold">Email</p>
                    <p className="text-auto-blue">contact@topautoadvisors.com</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-card border border-auto-border rounded-xl p-6 shadow-card">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center shadow-glow">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-foreground font-semibold">Phone</p>
                    <p className="text-muted-foreground">+1 (619) 953-6161</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-card border border-auto-border rounded-xl p-6 shadow-card">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center shadow-glow">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-foreground font-semibold">Response Time</p>
                    <p className="text-muted-foreground">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-3 animate-slide-in-right">
            <form
              action="https://formspree.io/f/movlldpz"
              method="POST"
              className="bg-gradient-card border border-auto-border rounded-2xl p-4 md:p-8 shadow-card"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-foreground font-semibold">
                    Full Name
                  </Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    placeholder="Enter your full name"
                    className="bg-auto-dark border-auto-border focus:border-auto-blue transition-colors h-11"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground font-semibold">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    className="bg-auto-dark border-auto-border focus:border-auto-blue transition-colors h-11"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <Label htmlFor="phone" className="text-foreground font-semibold">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  className="bg-auto-dark border-auto-border focus:border-auto-blue transition-colors h-11"
                />
              </div>

              <div className="space-y-2 mb-6">
                <Label htmlFor="message" className="text-foreground font-semibold">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your situation and how we can help..."
                  rows={4}
                  className="bg-auto-dark border-auto-border focus:border-auto-blue transition-colors resize-none"
                  required
                />
              </div>

              <div className="space-y-2 mb-6">
                <Label htmlFor="preferredTime" className="text-foreground font-semibold">
                  Preferred Time (Optional)
                </Label>
                <Input
                  id="preferredTime"
                  name="preferredTime"
                  placeholder="When would you prefer to hear from us?"
                  className="bg-auto-dark border-auto-border focus:border-auto-blue transition-colors h-11"
                />
              </div>

              <Button variant="cta" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
