import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-secondary to-primary">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-background rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Location badge */}
          <div className="inline-flex items-center gap-2 bg-background/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg mb-6 min-h-[44px]">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Maria utca 9, Budapest 1085</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Store Your Luggage.<br />
            <span className="text-accent">Explore Budapest.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto font-light">
            Safe & secure luggage storage in the heart of Budapest. Drop your bags and discover the city hands-free.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay">
            <Button 
              size="lg"
              onClick={() => window.open("https://api.whatsapp.com/send/?phone=36204776265&text=Hi!+I%27d+like+to+store+luggage+today.+Details:+number+of+bags+__,+drop-off+__,+pickup+__.++Is+there+availability%3F&type=phone_number&app_absent=0", '_blank')}
              className="bg-background text-primary hover:bg-background/90 shadow-xl px-8 py-6 text-lg font-semibold rounded-xl transition-all hover:scale-105 min-h-[44px]"
            >
              Chat on WhatsApp
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={scrollToPricing}
              className="bg-transparent border-2 border-background text-primary-foreground hover:bg-background/10 px-8 py-6 text-lg font-semibold rounded-xl min-h-[44px]"
            >
              View Pricing
            </Button>
          </div>
          <p className="text-sm text-primary-foreground/80 mt-2 italic">Fastest response via WhatsApp</p>

          {/* Quick info */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-primary-foreground/90">
          <div className="flex flex-col items-center">
            <div className="text-3xl font-bold">400 Ft</div>
            <div className="text-sm font-light">from / hour</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl font-bold">8-9PM</div>
            <div className="text-sm font-light">open daily</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl font-bold">8 min</div>
            <div className="text-sm font-light">to 100E shuttle</div>
          </div>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
