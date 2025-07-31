const Footer = () => {
  const footerLinks = {
    Pages: [
      { name: "Home", href: "#hero" },
      { name: "Services", href: "#services" },
      { name: "About Us", href: "#about" },
      { name: "Contact", href: "#contact" }
    ],
    Help: [
      { name: "FAQs", href: "#" },
      { name: "How the Process Works", href: "#how-it-works" },
      { name: "What We Do", href: "#services" }
    ]
  };

  return (
    <footer className="bg-auto-darker border-t border-auto-border">
      {/* Glowing Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-auto-blue to-transparent" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:items-start">
          {/* Glowing Logo - 3x larger */}
          <div className="md:col-span-1 flex flex-col items-start">
            <img
              src="/images/hero-logo.png"
              alt="Top Auto Advisors Logo"
              className="w-72 h-auto mb-6 drop-shadow-[0_0_60px_rgba(59,130,246,0.9)]"
            />
          </div>

          {/* Pages Links */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-6">Pages</h3>
            <ul className="space-y-3">
              {footerLinks.Pages.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-6">Help</h3>
            <ul className="space-y-3">
              {footerLinks.Help.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-6">Contact</h3>
            <div className="space-y-3">
              <p className="text-auto-blue font-semibold">contact@topautoadvisors.com</p>
              <p className="text-muted-foreground">+1 (619) 953-6161</p>
              <p className="text-sm text-muted-foreground">We respond within 24 hours.</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-auto-border mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-sm text-muted-foreground">
                © 2024 Top Auto Advisors. All rights reserved.
              </p>
              <div className="flex items-center space-x-4 text-sm">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Refund Policy</a>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">Serving car buyers nationwide</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
