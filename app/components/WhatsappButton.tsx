// components/ui/WhatsAppButton.tsx
import { FaWhatsapp } from "react-icons/fa6";

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
  position?: "bottom-right" | "bottom-left";
}

export function WhatsAppButton({
  phoneNumber = "573116406379",
  message = "Hello, I would like more information about your maritime services.",
  position = "bottom-right",
}: WhatsAppButtonProps) {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const positionClasses = {
    "bottom-right": "bottom-6 right-6",
    "bottom-left": "bottom-6 left-6",
  };

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed ${positionClasses[position]} z-50 group`}
      aria-label="Contact us on WhatsApp"
    >
      {/* Main button */}
      <div className="relative">
        {/* Pulse animation ring */}
        <div className="absolute inset-0 rounded-full bg-[#c1a45f] opacity-75 animate-ping" />
        
        {/* Button background with gradient */}
        <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#c1a45f] to-[#a8883e] shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl md:h-16 md:w-16">
          {/* Inner glow effect */}
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.3),transparent_70%)]" />
          
          {/* WhatsApp icon */}
          <FaWhatsapp className="relative h-6 w-6 text-white drop-shadow-sm md:h-7 md:w-7" />
        </div>
        
        {/* Tooltip on hover */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg bg-[#0b1e3e] px-3 py-1.5 text-xs font-medium text-[#f7f6f2] opacity-0 transition-all duration-300 group-hover:opacity-100 md:mr-4">
          Contact us on WhatsApp
          <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-[#0b1e3e]" />
        </div>
      </div>
    </a>
  );
}