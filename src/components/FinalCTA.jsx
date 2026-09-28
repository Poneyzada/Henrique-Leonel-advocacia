import React from 'react';
import { ArrowUpRight, PhoneCall, Mail, ShieldAlert } from 'lucide-react';

export default function FinalCTA() {
  const handleWhatsApp = () => {
    const msg = encodeURIComponent('Olá Dr. Henrique Leonel! Preciso falar com um advogado agora sobre o meu caso.');
    window.open(`https://wa.me/5571999999999?text=${msg}`, '_blank');
  };

  return (
    <section className="py-20 sm:py-28 bg-[#070C16] text-white relative overflow-hidden">
      
      {/* Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gold-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-gold-500/30 text-gold-400 text-xs font-mono tracking-wider">
          <ShieldAlert className="w-3.5 h-3.5 text-gold-400" />
          <span>URGÊNCIA JURÍDICA</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-sans tracking-tight leading-[1.15]">
          Não deixe seus direitos de lado. <br />
          <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-gold-600 font-normal">
            Aja agora.
          </span>
        </h2>

        <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Cada dia que passa pode dificultar a solução do seu problema — seja o desbloqueio urgente do seu saldo de trabalho ou a concessão de um tratamento médico vital. Fale com a <strong>Henrique Leonel Advocacia</strong> e entenda seus direitos ainda hoje.
        </p>

        {/* Big Magnetic WhatsApp CTA */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={handleWhatsApp}
            className="btn-magnetic w-full sm:w-auto px-9 py-4 sm:py-5 rounded-full bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 hover:from-gold-300 hover:to-gold-500 text-midnight-950 font-extrabold text-base tracking-wide flex items-center justify-center gap-2.5 shadow-2xl shadow-gold-500/30 group"
          >
            <PhoneCall className="w-5 h-5" />
            <span>Falar com um advogado agora – Atendimento Nacional</span>
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </div>

        {/* Quick Contact Info */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-mono text-gray-400">
          <a
            href="https://wa.me/5571999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold-400 transition-colors flex items-center gap-2"
          >
            <span>📱 WhatsApp Oficial: (71) 99999-9999</span>
          </a>
          <span className="hidden sm:inline">•</span>
          <a
            href="mailto:contato@henriqueleonel.adv.br"
            className="hover:text-gold-400 transition-colors flex items-center gap-2"
          >
            <Mail className="w-4 h-4 text-gold-400" />
            <span>contato@henriqueleonel.adv.br</span>
          </a>
        </div>

      </div>
    </section>
  );
}
