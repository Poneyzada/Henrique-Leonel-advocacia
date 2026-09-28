import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  const handleClick = () => {
    const msg = encodeURIComponent('Olá Dr. Henrique! Gostaria de falar com um advogado sobre meu caso.');
    window.open(`https://wa.me/5571999999999?text=${msg}`, '_blank');
  };

  return (
    <aside aria-label="Atendimento via WhatsApp" className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2 pointer-events-none">
      
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div className="pointer-events-auto relative p-3 rounded-2xl bg-[#0A101D] text-white border border-gold-500/40 shadow-2xl shadow-black/60 text-xs flex items-center gap-3 animate-bounce">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-medium text-gray-200">
              Dr. Henrique online • <strong>Avaliação gratuita</strong>
            </span>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-gray-400 hover:text-white"
            aria-label="Fechar aviso"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={handleClick}
        className="pointer-events-auto btn-magnetic relative w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 to-emerald-400 text-white flex items-center justify-center shadow-2xl shadow-emerald-500/40 hover:scale-110 active:scale-95 transition-transform group"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-white" />

        {/* Online Green Pulsing Ring */}
        <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white items-center justify-center text-[9px] font-bold text-white">
            1
          </span>
        </span>
      </button>

    </aside>
  );
}
