import { MapPin, Clock, MessageCircle, Mail } from "lucide-react";

const Footer = () => {
  const whatsappNumber = "+36XXXXXXXXX"; // Replace with actual WhatsApp number
  const message = encodeURIComponent("Hi! I'd like to inquire about luggage storage.");
  
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary">Maria Luggage Storage</h3>
            <p className="text-background/80 leading-relaxed mb-4">
              Your trusted luggage storage partner in Budapest. Store safely, explore freely.
            </p>
            <div className="flex gap-4">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${message}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-2 rounded-lg transition-colors font-medium"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Location & Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">Visit Us</h4>
            <div className="space-y-3 text-background/80">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-primary" />
                <div>
                  <p className="font-medium text-background">Maria Utca 9</p>
                  <p>1085 Budapest, Hungary</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 mt-1 flex-shrink-0 text-primary" />
                <div>
                  <p className="font-medium text-background">8:00 AM - 9:00 PM</p>
                  <p className="text-sm">Open daily (extended hours May-Sep)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">Quick Links</h4>
            <ul className="space-y-2 text-background/80">
              <li>
                <a href="#pricing" className="hover:text-primary transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-primary transition-colors">
                  Location & Directions
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-primary transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a 
                  href={`https://wa.me/${whatsappNumber}?text=${message}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors inline-flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  Contact via WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-background/20 mt-12 pt-8 text-center text-background/60 text-sm">
          <p>© {new Date().getFullYear()} Maria Luggage Storage. All rights reserved.</p>
          <p className="mt-2">Secure luggage storage in Budapest since 2024</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
