"use client";

import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";

const WhatsAppWidget = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 🚀 Yeh check ensures ke SSR build ke waqt window object error na de
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-3 group">
      <div className="bg-white text-gray-800 py-2 px-4 rounded-xl shadow-lg border border-gray-100 mb-1 scale-0 group-hover:scale-100 origin-bottom-right transition-all duration-300 font-montserrat text-sm font-medium">
        Chat with our expert team! 👋
      </div>

      <a
        href="https://wa.me/447903332433?text=Hi%20BizGrow%20Expert,%20I'm%20interested%20in%20your%20services."
        target="_blank"
        aria-label="Chat on WhatsApp"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-16 h-16 bg-[#997819] text-white rounded-full shadow-[0_8px_30px_rgb(37,211,102,0.4)] hover:scale-110 transition-transform duration-300"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></span>
        <MessageCircle size={32} fill="currentColor" className="relative z-10" />
        <span className="absolute top-0 right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
      </a>
    </div>
  );
};

export default WhatsAppWidget;