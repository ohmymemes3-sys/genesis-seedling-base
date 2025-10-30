import { Shield, Clock, Users, MapPin } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "100% Secure",
      description: "Safe storage with professional monitoring.",
    },
    {
      icon: Clock,
      title: "Quick Drop-off",
      description: "No booking needed. Drop and go.",
    },
    {
      icon: Users,
      title: "Tourist Friendly",
      description: "English-speaking staff, happy to help.",
    },
    {
      icon: MapPin,
      title: "Central Location",
      description: "8-minute walk to 100E Airport Shuttle.",
    },
  ];

  return (
    <section id="features" className="py-20 md:py-24 bg-muted">
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center mb-16 animate-fade-in max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading mb-4">
            Why Choose Us
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Premium luggage storage in the heart of Budapest
          </p>
        </div>

        {/* Centered features grid - exactly 4 features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature flex flex-col items-center justify-center text-center p-6 md:p-8 rounded-[var(--radius-card)] bg-card border-luxe hover:shadow-luxe transition-luxe animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon in 48x48 box */}
              <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-lg bg-primary text-primary-foreground">
                <feature.icon className="w-6 h-6" aria-hidden="true" />
              </div>
              
              {/* Title */}
              <h3 className="text-lg font-semibold text-heading mb-2">
                {feature.title}
              </h3>
              
              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed">
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
