import { Shield, Clock, Users, MapPin } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "100% Secure",
      description: "Your belongings are safe with us. Secure storage facility with 24/7 monitoring.",
    },
    {
      icon: Clock,
      title: "Quick Drop-off",
      description: "No complicated booking process. Just drop off your bags and go explore Budapest.",
    },
    {
      icon: Users,
      title: "Tourist Friendly",
      description: "English-speaking staff ready to help you with directions and local recommendations.",
    },
    {
      icon: MapPin,
      title: "Central Location",
      description: "Located in the heart of Budapest, 8-minute walk to the 100E Airport Shuttle stop.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose Maria Luggage Storage?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We make storing your luggage simple, secure, and stress-free
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-lg bg-card border border-border hover:border-primary transition-colors duration-200 animate-fade-in flex flex-col items-center text-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-6 flex items-center justify-center p-4 rounded-lg bg-primary text-primary-foreground w-16 h-16">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
