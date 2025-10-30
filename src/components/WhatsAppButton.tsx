import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const whatsappNumber = "+36XXXXXXXXX"; // Replace with actual WhatsApp number
  const message = encodeURIComponent("Hi! I'd like to inquire about luggage storage at Maria Luggage Storage.");
  
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <>
      {/* Floating button */}
      <div className="fixed bottom-6 right-6 z-50 animate-slide-up">
        <Button
          onClick={handleWhatsAppClick}
          size="lg"
          className="bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-2xl rounded-full w-16 h-16 p-0 flex items-center justify-center group transition-all hover:scale-110"
          aria-label="Contact us on WhatsApp"
        >
          <MessageCircle className="w-8 h-8 group-hover:scale-110 transition-transform" />
        </Button>
        <div className="absolute -top-12 right-0 bg-foreground text-background px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Chat on WhatsApp
        </div>
      </div>
    </>
  );
};

export default WhatsAppButton;
