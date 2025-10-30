import { MapPin, Clock, MessageCircle } from "lucide-react";

const Footer = () => {
  const whatsappLink = "https://api.whatsapp.com/send/?phone=36204776265&text=Hi!%20I%27d%20like%20to%20store%20luggage%20today.%20Details:%20bags%20__,%20drop-off%20__,%20pickup%20__.%20Is%20there%20availability%3F&type=phone_number&app_absent=0";
  
  return (
    <footer className="bg-heading text-background py-16 md:py-20">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Brand */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-background">Maria Luggage Storage</h3>
            <p className="text-background/70 leading-relaxed mb-6">
              Premium luggage storage in the heart of Budapest. Store safely, explore freely.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary hover:opacity-90 text-primary-foreground px-4 py-3 rounded-[var(--radius-btn)] transition-opacity font-medium min-h-[48px]"
            >
              <MessageCircle className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
              <span>Chat on WhatsApp</span>
            </a>
            <p className="text-xs text-background/60 mt-2 italic">Fastest response</p>
          </div>

          {/* Location & Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-background">Visit Us</h4>
            <div className="space-y-4 text-background/70">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <p className="font-medium text-background">Maria utca 9</p>
                  <p className="text-sm">1085 Budapest, Hungary</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <p className="font-medium text-background">8:00 – 21:00</p>
                  <p className="text-sm">Daily (extended hours May–Sep)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-background">Quick Links</h4>
            <ul className="space-y-2 text-background/70">
              <li>
                <a href="#pricing" className="hover:text-primary transition-luxe">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-primary transition-luxe">
                  Location
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-primary transition-luxe">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-luxe inline-flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-background/10 mt-12 pt-8 text-center text-background/50 text-sm">
          <p>© {new Date().getFullYear()} Maria Luggage Storage. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
