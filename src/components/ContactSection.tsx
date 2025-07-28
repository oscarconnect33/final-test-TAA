import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-auto-dark">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Content */}
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-auto-blue to-primary">Us</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Fill out the form below and let us know what you need help with. We'll get back to you within 24 hours.
            </p>

            {/* Contact Info */}
            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-auto-blue to-primary rounded-lg flex items-center justify-center shadow-glow">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-foreground font-semibold">Email</p>
                  <p className="text-auto-blue">info@topautoadvisors.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center shadow-glow">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-foreground font-semibold">Phone</p>
                  <p className="text-muted-foreground">(123) 456-7890</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center shadow-glow">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-foreground font-semibold">Response Time</p>
                  <p className="text-muted-foreground">We respond within 24 hours.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-card border border-auto-border rounded-xl p-6 shadow-card">
              <p className="text-muted-foreground">
                <span className="font-semibold text-primary">Prefer email?</span> Contact us at{" "}
                <span className="text-auto-blue font-semibold">[Insert Email Address]</span>.
              </p>
            </div>
          </div>

          {/* Right Form */}
          <div className="animate-slide-in-right">
            <form className="bg-gradient-card border border-auto-border rounded-2xl p-8 shadow-card space-y-6">
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-foreground font-semibold">
                  Full Name
                </Label>
                <Input
                  id="fullName"
                  placeholder="Enter your full name"
                  className="bg-auto-dark border-auto-border focus:border-auto-blue transition-colors h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground font-semibold">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  className="bg-auto-dark border-auto-border focus:border-auto-blue transition-colors h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-foreground font-semibold">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  className="bg-auto-dark border-auto-border focus:border-auto-blue transition-colors h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground font-semibold">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your situation and how we can help..."
                  rows={5}
                  className="bg-auto-dark border-auto-border focus:border-auto-blue transition-colors resize-none"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="preferredTime" className="text-foreground font-semibold">
                  Preferred Time (Optional)
                </Label>
                <Input
                  id="preferredTime"
                  placeholder="When would you prefer to hear from us?"
                  className="bg-auto-dark border-auto-border focus:border-auto-blue transition-colors h-12"
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