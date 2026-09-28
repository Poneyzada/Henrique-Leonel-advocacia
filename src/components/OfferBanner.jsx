import React from 'react';
import { ArrowUpRight, CheckCircle2, Shield, Clock, Globe } from 'lucide-react';

export default function OfferBanner({ onOpenIntake }) {
  const handleWhatsApp = () => {
    if (onOpenIntake) {
      onOpenIntake({
        service: 'bloqueio',
        origin: 'Site Principal - Banner Oferta Sem Risco'
      });
      return;
    }
    const msg = encodeURIComponent('Olá Dr. Henrique Leonel! Gostaria de solicitar minha avaliação inicial gratuita.');
    window.open(`https://wa.me/5571999999999?text=${msg}`, '_blank');
  };

  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5]">
      <div className="w-full max-w-7xl mx-auto rounded-[2.5rem] sm:rounded-[3.5rem] bg-gradient-to-br from-[#0A101D] via-[#0E1626] to-[#0A101D] text-white p-8 sm:p-14 lg:p-16 border border-gold-500/30 shadow-2xl relative overflow-hidden">
        
        {/* Glow ambient */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/15 border border-gold-500/30 text-gold-400 text-xs font-mono font-semibold tracking-wider">
              <span>PROPOSTA SEM RISCO</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-sans tracking-tight text-white leading-tight">
              Avaliação Inicial <span className="font-serif italic text-gold-400 font-normal">100% Gratuita.</span>
            </h2>

            <p className="text-sm sm:text-base text-gray-300 max-w-2xl leading-relaxed">
              Antes de tomar qualquer decisão ou desembolsar qualquer valor, você tem o direito fundamental de entender sua real situação jurídica com total clareza e transparência.
            </p>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3">
              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/[0.04] border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs sm:text-sm text-gray-200 font-medium">Análise sem compromisso</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/[0.04] border border-white/10">
                <Clock className="w-4 h-4 text-gold-400 shrink-0" />
                <span className="text-xs sm:text-sm text-gray-200 font-medium">Resposta em até 24h</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/[0.04] border border-white/10">
                <Globe className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="text-xs sm:text-sm text-gray-200 font-medium">Atendimento nacional</span>
              </div>
            </div>
          </div>

          {/* Right Action */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center">
            <button
              onClick={handleWhatsApp}
              className="btn-magnetic w-full sm:w-auto px-8 py-4 sm:py-5 rounded-full bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 hover:from-gold-300 hover:to-gold-500 text-midnight-950 font-extrabold text-sm sm:text-base tracking-wide flex items-center justify-center gap-2.5 shadow-xl shadow-gold-500/25 group text-center"
            >
              <span>Quero minha avaliação gratuita agora</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
            <p className="text-[11px] font-mono text-gray-400 mt-3 text-center lg:text-right">
              🔒 Total sigilo e proteção sob a LGPD e Ética OAB.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
