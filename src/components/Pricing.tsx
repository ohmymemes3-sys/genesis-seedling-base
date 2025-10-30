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
    <section id="pricing" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Pay only upon pickup. No advance booking required. No hidden fees.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Single Bag Card */}
          <Card className="relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-2 animate-fade-in">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary to-secondary"></div>
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl md:text-3xl font-bold text-foreground">Single Bag</CardTitle>
              <CardDescription className="text-base md:text-lg">Perfect for solo travelers</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 md:space-y-4">
              {singleBagPrices.map((item, index) => (
                <div 
                  key={index} 
                  className="flex justify-between items-center py-2 md:py-3 border-b border-border last:border-0 min-h-[44px]"
                >
                  <span className="text-sm md:text-base text-muted-foreground font-medium">{item.duration}</span>
                  <span className="text-lg md:text-xl font-bold text-primary">{item.price}</span>
                </div>
              ))}
              <div className="pt-4 space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>100% Secure storage</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Central location</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Group Storage Card */}
          <Card className="relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-primary animate-fade-in-delay">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary to-accent"></div>
            <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs md:text-sm font-semibold">
              Popular
            </div>
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl md:text-3xl font-bold text-foreground">Group Storage</CardTitle>
              <CardDescription className="text-base md:text-lg">5 bags - Best value for groups</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 md:space-y-4">
              {groupPrices.map((item, index) => (
                <div 
                  key={index} 
                  className="flex justify-between items-center py-2 md:py-3 border-b border-border last:border-0 min-h-[44px]"
                >
                  <span className="text-sm md:text-base text-muted-foreground font-medium">{item.duration}</span>
                  <span className="text-lg md:text-xl font-bold text-primary">{item.price}</span>
                </div>
              ))}
              <div className="pt-4 space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Up to 5 bags included</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Save up to 20%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Payment info */}
        <div className="mt-12 text-center px-4">
          <p className="text-base md:text-lg text-muted-foreground">
            💳 <span className="font-semibold text-foreground">Payment upon pickup</span> — Cash or card accepted
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Extended hours during May–September (call ahead to confirm)
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
