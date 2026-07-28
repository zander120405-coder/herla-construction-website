import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/27826554815"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="wa-pulse fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] text-white shadow-lg hover:bg-[#20bd5a] hover:shadow-xl hover:scale-105 group"
    >
      <div className="flex items-center gap-3 px-4 py-3">
        <MessageCircle className="w-6 h-6 flex-shrink-0" />
        <span className="text-sm font-bold uppercase tracking-widest hidden sm:block">
          Chat on WhatsApp
        </span>
      </div>
    </a>
  );
}
