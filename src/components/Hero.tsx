import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  const whatsappLink = "https://api.whatsapp.com/send/?phone=36204776265&text=Hi!%20I%27d%20like%20to%20store%20luggage%20today.%20Details:%20bags%20__,%20drop-off%20__,%20pickup%20__.%20Is%20there%20availability%3F&type=phone_number&app_absent=0";

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
      {/* Optional luxe monogram watermark - subtle M */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none" aria-hidden="true">
        <div className="text-[40vw] font-bold text-heading select-none">M</div>
      </div>

      <div className="container mx-auto px-6 md:px-8 py-24 md:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Location badge */}
          <div className="inline-flex items-center gap-2 bg-muted px-4 py-2 rounded-full mb-8 min-h-[44px]">
            <MapPin className="w-4 h-4 text-primary" aria-hidden="true" />
            <span className="text-sm font-medium text-foreground">Maria utca 9, Budapest 1085</span>
          </div>

          {/* Main heading - luxe typography */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-heading mb-6 leading-[1.1]">
            Safe & Secure Luggage Storage<br className="hidden sm:block" /> in Budapest
          </h1>

          {/* Subtitle with starting price - ABOVE THE FOLD */}
          <p className="text-xl md:text-2xl text-foreground mb-3 max-w-2xl mx-auto font-medium">
            From <span className="text-primary font-semibold">400 Ft/hour</span> — pay on pickup, no booking needed
          </p>

          <p className="text-base md:text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Drop your bags and discover the city hands-free.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay mb-4">
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground hover:opacity-90 px-8 py-4 text-base font-semibold rounded-[var(--radius-btn)] transition-opacity min-h-[48px] min-w-[200px]"
            >
              Chat on WhatsApp
            </a>
            <Button 
              size="lg"
              variant="outline"
              onClick={scrollToPricing}
              className="border-2 border-border text-heading hover:bg-muted px-8 py-4 text-base font-semibold rounded-[var(--radius-btn)] min-h-[48px] min-w-[200px] transition-luxe"
            >
              View Pricing
            </Button>
          </div>
          <p className="text-sm text-muted-foreground italic">Fastest response</p>

          {/* Quick info - luxe spacing */}
          <div className="mt-16 pt-16 border-t border-border">
            <div className="grid grid-cols-3 gap-6 md:gap-12 max-w-2xl mx-auto">
              <div className="flex flex-col items-center justify-center text-center">
                <div className="text-3xl md:text-4xl font-bold text-heading mb-1">8–21:00</div>
                <div className="text-xs md:text-sm text-muted-foreground">Daily</div>
              </div>
              <div className="flex flex-col items-center justify-center text-center border-x border-border">
                <div className="text-3xl md:text-4xl font-bold text-heading mb-1">8 min</div>
                <div className="text-xs md:text-sm text-muted-foreground">to Airport Shuttle</div>
              </div>
              <div className="flex flex-col items-center justify-center text-center">
                <div className="text-3xl md:text-4xl font-bold text-heading mb-1">100%</div>
                <div className="text-xs md:text-sm text-muted-foreground">Secure</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
