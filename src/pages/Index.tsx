import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <main className="min-h-screen bg-background font-['Inter',sans-serif]">
      <Hero />
      <Features />
      <Pricing />
      <Location />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
