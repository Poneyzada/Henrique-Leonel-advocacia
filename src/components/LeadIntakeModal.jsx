import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ShieldCheck, ArrowUpRight, Lock, MessageSquare, AlertCircle, Sparkles } from 'lucide-react';
import { INTAKE_SERVICES, openWhatsAppLead } from '../config/contact';

export default function LeadIntakeModal({
  isOpen,
  onClose,
  initialService = 'bloqueio',
  origin = 'Site Principal',
  lockService = false
}) {
  // Mapear aliases caso venha 'desbloqueio' ou 'tratamento'
  const normalizeServiceId = (id) => {
    if (!id) return 'bloqueio';
    if (id === 'desbloqueio') return 'bloqueio';
    if (id === 'tratamento') return 'medicamento';
    if (id === 'plano') return 'plano-saude';
    return id;
  };

  const [selectedService, setSelectedService] = useState(normalizeServiceId(initialService));
  const [selectedSubOption, setSelectedSubOption] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [details, setDetails] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sincronizar quando abrir ou mudar o initialService
  useEffect(() => {
    if (isOpen) {
      const norm = normalizeServiceId(initialService);
      setSelectedService(norm);
      // Auto selecionar a primeira subopção do serviço
      const svc = INTAKE_SERVICES[norm] || INTAKE_SERVICES.bloqueio;
      if (svc.subOptions && svc.subOptions.length > 0) {
        setSelectedSubOption(svc.subOptions[0].title);
      }
      setErrorMsg('');
      setIsSubmitting(false);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, initialService]);

  // Atualizar sub-opção padrão ao trocar de aba de serviço
  const handleServiceChange = (svcId) => {
    setSelectedService(svcId);
    const svc = INTAKE_SERVICES[svcId];
    if (svc && svc.subOptions && svc.subOptions.length > 0) {
      setSelectedSubOption(svc.subOptions[0].title);
    }
  };

  if (!isOpen) return null;

  const currentServiceConfig = INTAKE_SERVICES[selectedService] || INTAKE_SERVICES.bloqueio;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      setErrorMsg('Por favor, informe seu nome para que o Dr. Henrique possa te atender.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      openWhatsAppLead({
        name,
        email,
        service: selectedService,
        serviceLabel: currentServiceConfig.label,
        subOption: selectedSubOption,
        details,
        origin
      });
      setIsSubmitting(false);
      onClose();
    }, 400);
  };

  const handleSkipDirectly = () => {
    openWhatsAppLead({
      name: name.trim() || 'Cliente do Site',
      email: email.trim(),
      service: selectedService,
      serviceLabel: currentServiceConfig.label,
      subOption: selectedSubOption || 'Consulta Geral',
      details,
      origin: `${origin} (Acesso Direto sem formulário)`
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-[#060A12]/85 backdrop-blur-md transition-opacity duration-300"
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-2xl bg-[#0B1120] text-white rounded-[2rem] sm:rounded-[2.5rem] border border-gold-500/35 shadow-2xl shadow-black/90 overflow-hidden z-10 my-auto">
        
        {/* Ambient Top Glow */}
        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-gold-500/20 via-gold-500/5 to-transparent pointer-events-none" />

        {/* Header */}
        <div className="relative flex items-center justify-between p-5 sm:p-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white/5 border border-gold-500/30 p-1 flex items-center justify-center shrink-0">
              <img src="/logo-semnome.png" alt="HL" className="h-full w-full object-contain" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono tracking-wider text-gold-400 uppercase font-semibold">
                  Henrique Leonel Advocacia • OAB/BA 60.205
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold font-sans text-white">
                Avaliação Jurídica Gratuita
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white transition-colors"
            aria-label="Fechar"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body Content */}
        <form onSubmit={handleSubmit} className="p-5 sm:p-7 space-y-6 max-h-[78vh] overflow-y-auto">
          
          {/* Context Origin Badge */}
          <div className="flex items-center justify-between text-xs text-gray-400 bg-white/[0.02] p-2.5 px-3.5 rounded-xl border border-white/5">
            <span className="flex items-center gap-1.5 font-mono text-[11px]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Plantão de Atendimento 100% Online</span>
            </span>
            <span className="text-[11px] font-mono text-gold-400/90 truncate max-w-[200px]" title={origin}>
              📍 {origin}
            </span>
          </div>

          {/* 1. Escolha do Serviço (se não estiver travado) */}
          {!lockService && (
            <div className="space-y-2">
              <label className="block text-xs font-mono uppercase tracking-wider text-gold-400 font-semibold">
                1. Selecione a Área do seu Caso:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {Object.values(INTAKE_SERVICES).map((svc) => {
                  const isSelected = selectedService === svc.id;
                  return (
                    <button
                      key={svc.id}
                      type="button"
                      onClick={() => handleServiceChange(svc.id)}
                      className={`p-3 rounded-xl border text-left transition-all flex items-center gap-2.5 text-xs sm:text-sm font-medium ${
                        isSelected
                          ? 'bg-gold-500/20 border-gold-500 text-white shadow-sm shadow-gold-500/20 font-bold'
                          : 'bg-white/[0.03] border-white/10 text-gray-400 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <span className="text-base">{svc.icon}</span>
                      <span className="truncate">{svc.label.split('&')[0]}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* 2. Sub-opções de Qualificação (ex: Bloqueio Bancário vs Bloqueio em App) */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <label className="block text-xs font-mono uppercase tracking-wider text-gold-400 font-semibold">
                {lockService ? '1' : '2'}. Qual a sua situação exata?
              </label>
              <span className="text-[10px] font-mono text-gray-400">
                {currentServiceConfig.subOptions.length} opções disponíveis
              </span>
            </div>

            <div className="grid grid-cols-1 gap-2.5">
              {currentServiceConfig.subOptions.map((opt) => {
                const isSelected = selectedSubOption === opt.title;
                return (
                  <div
                    key={opt.id}
                    onClick={() => setSelectedSubOption(opt.title)}
                    className={`cursor-pointer p-3.5 sm:p-4 rounded-2xl border transition-all flex items-start gap-3.5 ${
                      isSelected
                        ? 'bg-gradient-to-r from-gold-500/20 to-gold-500/5 border-gold-400 text-white shadow-md shadow-gold-500/10'
                        : 'bg-white/[0.02] border-white/10 text-gray-300 hover:border-gold-500/40 hover:bg-white/[0.04]'
                    }`}
                  >
                    <span className="text-xl sm:text-2xl shrink-0 mt-0.5">{opt.icon}</span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className={`text-xs sm:text-sm font-bold ${isSelected ? 'text-gold-300' : 'text-white'}`}>
                          {opt.title}
                        </p>
                        <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ml-2 ${
                          isSelected ? 'border-gold-400 bg-gold-500' : 'border-gray-500'
                        }`}>
                          {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-midnight-950" />}
                        </div>
                      </div>
                      <p className="text-[11px] sm:text-xs text-gray-400 mt-0.5 leading-relaxed">
                        {opt.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 3. Dados do Cliente (Nome obrigatório, Email opcional) */}
          <div className="space-y-3">
            <label className="block text-xs font-mono uppercase tracking-wider text-gold-400 font-semibold">
              {lockService ? '2' : '3'}. Seus Dados para Resposta:
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-sans text-gray-300 mb-1">
                  Seu Nome Completo <span className="text-gold-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (errorMsg) setErrorMsg('');
                  }}
                  placeholder="Ex: João da Silva"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500 text-sm text-white placeholder-gray-500"
                />
              </div>

              <div>
                <label className="block text-[11px] font-sans text-gray-300 mb-1 flex items-center justify-between">
                  <span>Seu E-mail</span>
                  <span className="text-[10px] text-gray-400 font-mono italic">(Opcional)</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Ex: joao@email.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500 text-sm text-white placeholder-gray-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-sans text-gray-300 mb-1 flex items-center justify-between">
                <span>Quer adiantar algum detalhe?</span>
                <span className="text-[10px] text-gray-400 font-mono italic">(Opcional)</span>
              </label>
              <textarea
                rows={2}
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="Ex: Valor retido, nome do banco, app ou medicamento negado..."
                className="w-full px-3.5 py-2 rounded-xl bg-white/5 border border-white/15 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500 text-xs sm:text-sm text-white placeholder-gray-500 resize-none"
              />
            </div>
          </div>

          {/* Mensagem de Erro amigável */}
          {errorMsg && (
            <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Submit Action */}
          <div className="pt-2 space-y-3">
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-magnetic w-full py-4 rounded-2xl bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 hover:from-gold-300 hover:to-gold-500 text-midnight-950 font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 shadow-xl shadow-gold-500/25 transition-all group disabled:opacity-50"
            >
              <MessageSquare className="w-4 h-4 fill-midnight-950 text-midnight-950" />
              <span>
                {isSubmitting ? 'Iniciando atendimento...' : '👉 Iniciar Atendimento no WhatsApp'}
              </span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>

            {/* Link direto para pular */}
            <div className="text-center pt-1">
              <button
                type="button"
                onClick={handleSkipDirectly}
                className="text-xs text-gray-400 hover:text-gold-300 transition-colors underline underline-offset-4"
              >
                Ou prefiro ir direto ao WhatsApp sem preencher dados →
              </button>
            </div>
          </div>

          {/* Rodapé de Confiança e Privacidade */}
          <div className="pt-2 border-t border-white/10 flex items-center justify-center gap-2 text-[10px] font-mono text-gray-400 text-center">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>Sigilo Profissional da OAB/BA e LGPD • Avaliação Inicial 100% Gratuita</span>
          </div>

        </form>

      </div>
    </div>
  );
}
