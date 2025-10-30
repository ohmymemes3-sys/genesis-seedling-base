import { Check } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Pricing = () => {
  const singleBagPrices = [
    { duration: "1 hour", price: "400 Ft" },
    { duration: "5 hours", price: "1,600 Ft" },
    { duration: "10 hours", price: "3,200 Ft" },
    { duration: "24 hours", price: "6,400 Ft" },
    { duration: "Every additional 30 min", price: "+200 Ft" },
  ];

  const groupPrices = [
    { duration: "1 hour", price: "1,600 Ft" },
    { duration: "5 hours", price: "7,200 Ft" },
    { duration: "10 hours", price: "12,000 Ft" },
    { duration: "24 hours", price: "24,000 Ft" },
    { duration: "Every additional 30 min", price: "+1,000 Ft" },
  ];

  return (
    <section id="pricing" className="py-20 md:py-24 bg-background">
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center mb-16 animate-fade-in max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading mb-4">
            Transparent Pricing
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-2">
            Pay upon pickup • No advance booking required
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {/* Single Bag Card */}
          <Card className="card relative overflow-hidden transition-luxe border-luxe animate-fade-in">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl md:text-3xl font-bold text-heading">Single Bag</CardTitle>
              <CardDescription className="text-base md:text-lg">Perfect for solo travelers</CardDescription>
            </CardHeader>
            <CardContent className="space-y-0">
              {singleBagPrices.map((item, index) => (
                <div 
                  key={index} 
                  className="flex justify-between items-center py-3 md:py-4 border-b border-border last:border-0 min-h-[48px]"
                >
                  <span className="text-sm md:text-base text-foreground font-medium">{item.duration}</span>
                  <span className="text-lg md:text-xl font-bold text-primary">{item.price}</span>
                </div>
              ))}
              <div className="pt-6 space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" aria-hidden="true" />
                  <span>Secure storage</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" aria-hidden="true" />
                  <span>Central location</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Group Storage Card */}
          <Card className="card relative overflow-hidden transition-luxe border-2 border-primary animate-fade-in-delay">
            <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1.5 rounded-lg text-xs font-semibold">
              Popular
            </div>
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl md:text-3xl font-bold text-heading">Group Storage</CardTitle>
              <CardDescription className="text-base md:text-lg">5 bags — best value</CardDescription>
            </CardHeader>
            <CardContent className="space-y-0">
              {groupPrices.map((item, index) => (
                <div 
                  key={index} 
                  className="flex justify-between items-center py-3 md:py-4 border-b border-border last:border-0 min-h-[48px]"
                >
                  <span className="text-sm md:text-base text-foreground font-medium">{item.duration}</span>
                  <span className="text-lg md:text-xl font-bold text-primary">{item.price}</span>
                </div>
              ))}
              <div className="pt-6 space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" aria-hidden="true" />
                  <span>Up to 5 bags</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" aria-hidden="true" />
                  <span>Save up to 20%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Payment info */}
        <div className="mt-12 text-center px-4">
          <p className="text-base text-muted-foreground">
            Cash or card accepted
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Extended hours May–September (call ahead to confirm)
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
