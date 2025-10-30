import { MapPin, Bus, Clock } from "lucide-react";

const Location = () => {
  const whatsappLink = "https://api.whatsapp.com/send/?phone=36204776265&text=Hi!%20I%27d%20like%20to%20store%20luggage%20today.%20Details:%20bags%20__,%20drop-off%20__,%20pickup%20__.%20Is%20there%20availability%3F&type=phone_number&app_absent=0";

  return (
    <section id="location" className="py-20 md:py-24 bg-muted">
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center mb-16 animate-fade-in max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading mb-4">
            Location & Directions
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Central Budapest, 8-minute walk to airport shuttle
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Map - centered on Maria utca 9 */}
          <div className="animate-fade-in">
            <div className="overflow-hidden rounded-[var(--radius-card)] border-luxe shadow-luxe">
              <iframe
                title="Maria Luggage Storage — Map"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0, width: '100%', height: '360px' }}
                src="https://www.google.com/maps?q=Maria%20utca%209%2C%201085%20Budapest%2C%20Hungary&output=embed"
                allowFullScreen
              ></iframe>
            </div>
            <div className="mt-4 flex items-start gap-3 text-muted-foreground">
              <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" aria-hidden="true" />
              <div>
                <p className="font-semibold text-heading">Maria utca 9</p>
                <p>1085 Budapest, Hungary</p>
              </div>
            </div>
          </div>

          {/* Info Cards */}
          <div className="space-y-6 animate-fade-in-delay">
            {/* Airport note */}
            <div className="p-6 rounded-[var(--radius-card)] bg-card border-luxe">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary text-primary-foreground flex-shrink-0">
                  <Bus className="w-6 h-6" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-heading mb-2">
                    To/From Airport
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    <span className="font-semibold text-primary">8-minute walk (700 m)</span> to the <span className="font-semibold">100E Airport Shuttle</span> stop at Astoria M.
                  </p>
                  <div className="bg-muted p-4 rounded-lg">
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Store bags before your flight</li>
                      <li>• Drop-off after arrival</li>
                      <li>• Last-minute city exploration</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours & Contact */}
            <div className="p-6 rounded-[var(--radius-card)] bg-card border-luxe">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary text-primary-foreground flex-shrink-0">
                  <Clock className="w-6 h-6" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-heading mb-3">
                    Hours & Contact
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">Daily</span>
                      <span className="font-semibold text-heading">8:00 – 21:00</span>
                    </div>
                    <div className="bg-muted p-3 rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        Extended hours May–September<br />
                        <span className="text-xs">(call ahead to confirm)</span>
                      </p>
                    </div>
                    <a 
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full bg-primary text-primary-foreground hover:opacity-90 px-6 py-3 text-sm font-semibold rounded-[var(--radius-btn)] transition-opacity mt-4"
                    >
                      Chat on WhatsApp
                    </a>
                    <p className="text-xs text-muted-foreground text-center italic">Fastest response</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
