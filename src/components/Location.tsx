import { MapPin, Bus, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Location = () => {
  return (
    <section id="location" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Find Us in Central Budapest
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Easy to reach, close to major attractions and public transport
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Map */}
          <div className="animate-fade-in">
            <Card className="overflow-hidden border">
              <CardContent className="p-0">
                <div className="aspect-video relative">
                  <iframe
                    title="Maria Luggage Storage — Map"
                    src="https://www.google.com/maps?q=Maria%20utca%209%2C%201085%20Budapest%2C%20Hungary&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
            <div className="mt-4 flex items-start gap-3 text-muted-foreground">
              <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold text-foreground">Maria Utca 9</p>
                <p>1085 Budapest, Hungary</p>
              </div>
            </div>
          </div>

          {/* Info Cards */}
          <div className="space-y-6 animate-fade-in-delay">
            <Card className="border border-primary/20 hover:border-primary transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary text-primary-foreground">
                    <Bus className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      To/From Airport
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      We're just an <span className="font-semibold text-primary">8-minute walk (700m)</span> from the <span className="font-semibold">100E Airport Shuttle Bus</span> stop at Astoria M.
                    </p>
                    <div className="bg-accent p-4 rounded-lg">
                      <p className="text-sm font-medium text-foreground mb-1">Perfect for:</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>✓ Storing bags before your flight</li>
                        <li>✓ Drop-off after airport arrival</li>
                        <li>✓ Last-minute exploration before departure</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border hover:border-primary transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary text-primary-foreground">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      Opening Hours
                    </h3>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Monday - Sunday</span>
                        <span className="font-semibold text-foreground">8:00 AM - 9:00 PM</span>
                      </div>
                      <div className="bg-accent p-3 rounded-lg">
                        <p className="text-sm text-muted-foreground">
                          ☀️ <span className="font-medium text-foreground">Extended hours</span> during May-September (call ahead to confirm)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
