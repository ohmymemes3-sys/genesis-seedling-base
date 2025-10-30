import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const whatsappLink = "https://api.whatsapp.com/send/?phone=36204776265&text=Hi!+I%27d+like+to+store+luggage+today.+Details:+number+of+bags+__,+drop-off+__,+pickup+__.++Is+there+availability%3F&type=phone_number&app_absent=0";
  
  const handleWhatsAppClick = () => {
    window.open(whatsappLink, '_blank');
  };

  return (
    <>
      {/* Floating button */}
      <div className="fixed bottom-6 right-6 z-50 animate-slide-up">
        <Button
          onClick={handleWhatsAppClick}
          size="lg"
          className="bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-2xl rounded-full w-14 h-14 md:w-16 md:h-16 p-0 flex items-center justify-center group transition-all hover:scale-110"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-7 h-7 md:w-8 md:h-8 group-hover:scale-110 transition-transform" />
        </Button>
        <div className="absolute -top-12 right-0 bg-foreground text-background px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden md:block">
          Chat on WhatsApp
        </div>
      </div>
    </>
  );
};

export default WhatsAppButton;
