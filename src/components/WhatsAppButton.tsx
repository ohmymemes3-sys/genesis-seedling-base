import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const whatsappLink = "https://api.whatsapp.com/send/?phone=36204776265&text=Hi!%20I%27d%20like%20to%20store%20luggage%20today.%20Details:%20bags%20__,%20drop-off%20__,%20pickup%20__.%20Is%20there%20availability%3F&type=phone_number&app_absent=0";

  return (
    <>
      {/* Floating WhatsApp button - mobile optimized */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:opacity-90 text-white rounded-full w-14 h-14 md:w-16 md:h-16 flex items-center justify-center shadow-luxe transition-opacity animate-slide-up group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 md:w-7 md:h-7" aria-hidden="true" />
        
        {/* Tooltip on desktop */}
        <span className="absolute -top-12 right-0 bg-heading text-background px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden md:block">
          Chat on WhatsApp
        </span>
      </a>
    </>
  );
};

export default WhatsAppButton;
