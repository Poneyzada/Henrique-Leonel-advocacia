import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ShieldCheck, AlertCircle, ArrowUpRight, Copy, Check, Clock, FileText, PhoneCall, Scale, ExternalLink } from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';

export default function ServiceModal({ isOpen, activeTab, onClose, onSelectTab }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentService = SERVICES_DATA[activeTab] || SERVICES_DATA.desbloqueio;

  const copyDirectLink = () => {
    const url = `${window.location.origin}${window.location.pathname}#${currentService.hash}`;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const openWhatsApp = () => {
    const encoded = encodeURIComponent(currentService.whatsappMessage);
    window.open(`https://wa.me/5571999999999?text=${encoded}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-[#060A12]/85 backdrop-blur-md transition-opacity duration-300"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl bg-[#0B1120] text-white rounded-[2rem] sm:rounded-[2.5rem] border border-gold-500/30 shadow-2xl shadow-black/80 overflow-hidden z-10 my-auto">
        
        {/* Subtle Ambient Gold Glow Header */}
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-gold-500/15 via-gold-500/5 to-transparent pointer-events-none" />

        {/* Modal Topbar */}
        <div className="relative flex items-center justify-between p-5 sm:p-7 border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center w-10 h-10 rounded-2xl bg-gold-500/10 border border-gold-500/30 text-gold-400">
              <Scale className="w-5 h-5" />
            </span>
            <div>
              <span className="text-[11px] font-mono tracking-wider text-gold-400 uppercase font-semibold">
                Área de Atuação Especializada
              </span>
              <h3 className="text-lg sm:text-xl font-bold font-sans text-white">
                Henrique Leonel Advocacia
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Dedicated Landing Page Direct Button */}
            <a
              href={currentService.dedicatedLpUrl}
              className="hidden sm:flex items-center gap-1.5 px-3 py-2 text-xs font-mono rounded-xl bg-gold-500/20 hover:bg-gold-500/30 text-gold-300 hover:text-white border border-gold-500/40 transition-all duration-200"
              title="Abrir página dedicada e exclusiva deste serviço"
            >
              <span>Página Completa</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            {/* Share / Copy Link Button */}
            <button
              onClick={copyDirectLink}
              title="Copiar link direto para este serviço"
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-mono rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 transition-all duration-200"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-green-400" />
                  <span className="text-green-400">Copiado!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-gold-400" />
                  <span className="hidden sm:inline">Copiar Link</span>
                </>
              )}
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white transition-colors"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Interactive Tabs Header */}
        <div className="px-5 sm:px-7 pt-4 border-b border-white/10 bg-[#080E1A]/80">
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-3">
            <button
              onClick={() => onSelectTab('desbloqueio')}
              className={`px-4 py-2.5 rounded-xl font-medium text-xs sm:text-sm whitespace-nowrap transition-all duration-200 flex items-center gap-2 ${
                activeTab === 'desbloqueio'
                  ? 'bg-gold-500 text-midnight-950 font-semibold shadow-md shadow-gold-500/20'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <span>🔓</span>
              <span>1. Bloqueio de Conta & Apps</span>
            </button>

            <button
              onClick={() => onSelectTab('plano-saude')}
              className={`px-4 py-2.5 rounded-xl font-medium text-xs sm:text-sm whitespace-nowrap transition-all duration-200 flex items-center gap-2 ${
                activeTab === 'plano-saude'
                  ? 'bg-gold-500 text-midnight-950 font-semibold shadow-md shadow-gold-500/20'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <span>🏥</span>
              <span>2. Revisão de Plano de Saúde</span>
            </button>

            <button
              onClick={() => onSelectTab('medicamento')}
              className={`px-4 py-2.5 rounded-xl font-medium text-xs sm:text-sm whitespace-nowrap transition-all duration-200 flex items-center gap-2 ${
                activeTab === 'medicamento'
                  ? 'bg-gold-500 text-midnight-950 font-semibold shadow-md shadow-gold-500/20'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <span>💉</span>
              <span>3. Negativa de Tratamento/Medicamento</span>
            </button>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="max-h-[68vh] overflow-y-auto p-5 sm:p-8 space-y-8">
          
          {/* Service Title & Badges */}
          <div>
            <div className="flex flex-wrap items-center gap-2.5 mb-3">
              <span className="px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider bg-gold-500/15 text-gold-400 border border-gold-500/30">
                {currentService.tag}
              </span>
              <span className="px-3 py-1 rounded-full text-[11px] font-mono tracking-wider bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                {currentService.urgencyLevel}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold font-sans text-white tracking-tight">
              {currentService.title}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-gray-300 font-normal leading-relaxed">
              {currentService.subtitle}
            </p>
          </div>

          {/* Problem & Legal Context Box */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4">
            <h4 className="text-sm font-semibold font-mono uppercase tracking-wider text-gold-400 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-gold-400" />
              {currentService.heroHighlight}
            </h4>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              {currentService.problemOverview}
            </p>

            {/* Bullets de Identificação do Usuário */}
            <div className="space-y-2.5 pt-2">
              {currentService.keyPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="text-sm font-semibold text-gray-200">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 4 Step Protocol */}
          <div>
            <h4 className="text-sm font-semibold font-mono uppercase tracking-wider text-gold-400 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold-400 animate-ping" />
              Como Funciona a Atuação
            </h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {currentService.howWeAct.map((stepItem, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-midnight-950/70 border border-white/10 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-mono font-bold text-gold-400/80">
                      PASSO {stepItem.step}
                    </span>
                    <h5 className="mt-1 text-sm font-bold text-white font-sans">
                      {stepItem.title}
                    </h5>
                    <p className="mt-2 text-xs text-gray-400 leading-relaxed">
                      {stepItem.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Differentials */}
          {currentService.differentials && (
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10">
              <h4 className="text-xs font-mono uppercase tracking-wider text-gold-400 mb-3">
                Por que escolher a Henrique Leonel Advocacia:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                {currentService.differentials.map((diff, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-gold-400 font-bold shrink-0">{diff.title}:</span>
                    <span className="text-gray-300">{diff.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Documents Checklist */}
          <div className="p-5 rounded-2xl bg-midnight-900/90 border border-gold-500/20">
            <h4 className="text-xs font-mono uppercase tracking-wider text-gold-400 mb-3 flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Documentos Recomendados para Iniciar a Avaliação:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-gray-300">
              {currentService.documentsNeeded.map((doc, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{doc}</span>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-gray-400 mt-3 italic">
              * Caso falte algum documento, nossa equipe te orienta no passo a passo pelo WhatsApp.
            </p>
          </div>

          {/* FAQ Accordion Inside Modal */}
          {currentService.faq && (
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-gold-400 mb-3">
                Perguntas Frequentes Sobre Esta Demanda:
              </h4>
              <div className="space-y-2">
                {currentService.faq.map((item, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-xs sm:text-sm">
                    <p className="font-bold text-white mb-1">Q: {item.q}</p>
                    <p className="text-gray-300 leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Conversion Footer / CTA */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl bg-gradient-to-r from-gold-500/10 via-midnight-800 to-gold-500/10 border border-gold-500/40">
            <div>
              <p className="text-xs font-mono uppercase text-gold-400 font-semibold">
                Avaliação Gratuita do seu Caso • Resposta em até 24h
              </p>
              <h4 className="text-base sm:text-lg font-bold text-white">
                Fale agora com um advogado especialista
              </h4>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-2 w-full sm:w-auto">
              <a
                href={currentService.dedicatedLpUrl}
                className="w-full sm:w-auto px-4 py-3 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs text-center border border-white/20 transition-all"
              >
                Ver Página Exclusiva ↗
              </a>
              <button
                onClick={openWhatsApp}
                className="btn-magnetic w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-300 hover:to-gold-500 text-midnight-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-gold-500/30 transition-all duration-300 group"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Falar Agora no WhatsApp</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
