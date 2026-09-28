import React, { useState } from 'react';
import { ArrowUpRight, Shield, Clock, PhoneCall, CheckCircle2, HeartPulse, Stethoscope, Pill, Hospital, ChevronDown, Zap, Globe, HeartHandshake, Lock } from 'lucide-react';
import ScalesOfJusticeSvg from '../components/ScalesOfJusticeSvg';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import LeadIntakeModal from '../components/LeadIntakeModal';

export default function LandingPageTratamento() {
  const [leadModalOpen, setLeadModalOpen] = useState(false);
  const [leadOrigin, setLeadOrigin] = useState('LP Tráfego — Negativa de Medicamento/Cirurgia');

  const handleOpenLeadModal = (originText = 'LP Tráfego — Negativa de Medicamento/Cirurgia') => {
    setLeadOrigin(originText);
    setLeadModalOpen(true);
  };

  const handleWhatsApp = (customMsg = '') => {
    handleOpenLeadModal(`LP Medicamento — ${customMsg || 'CTA'}`);
  };

  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      q: 'Em quanto tempo consigo uma decisão judicial?',
      a: 'Em casos urgentes que envolvem risco à vida ou à saúde, ingressamos com pedido de tutela de urgência (liminar), que pode ser apreciado pelo juiz ou em regime de plantão judiciário em 24h a 72h, com imposição de multa diária ao plano de saúde.'
    },
    {
      q: 'O plano pode negar um medicamento por não estar no rol da ANS?',
      a: 'A jurisprudência dominante do Superior Tribunal de Justiça (STJ) e as súmulas dos Tribunais estabelecem que o rol da ANS é exemplificativo. Havendo prescrição médica e comprovação de eficácia científica, a negativa de cobertura é considerada abusiva e ilegal.'
    },
    {
      q: 'Preciso ir até Salvador?',
      a: 'Não. Todo o atendimento e protocolo de urgência são feitos 100% online para clientes de qualquer cidade ou estado do Brasil, com plantão eletrônico ágil.'
    },
    {
      q: 'Quanto custa a avaliação inicial?',
      a: 'A avaliação inicial da sua documentação e do relatório médico é 100% gratuita, com prioridade máxima para casos urgentes.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-midnight-950 font-sans selection:bg-gold-500 selection:text-midnight-950">
      
      {/* Top Banner OAB */}
      <div className="bg-[#060A12] border-b border-gold-500/20 text-white py-2.5 px-4 text-center text-xs font-mono">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 text-gold-400 font-semibold">
            <span>⚖️ OAB/BA 60.205</span>
            <span className="hidden sm:inline text-gray-500">•</span>
            <span className="hidden sm:inline text-gray-300">Henrique Leonel Advocacia & Consultoria</span>
          </div>
          <div className="flex items-center gap-4 text-gray-300">
            <span className="flex items-center gap-1.5 text-rose-400 font-semibold">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
              Plantão de Urgência Ativo
            </span>
            <a href="/" className="hover:text-gold-400 underline underline-offset-2 transition-colors hidden sm:block">
              Ir para o Site Geral
            </a>
          </div>
        </div>
      </div>

      {/* 1️⃣ HERO SECTION */}
      <section className="relative min-h-[90vh] bg-[#080E1B] text-white pt-16 sm:pt-24 pb-14 px-4 sm:px-6 lg:px-8 flex flex-col justify-center overflow-hidden">
        
        {/* Ambience & 3D Video Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_15%,rgba(20,35,65,0.75)_0%,rgba(8,14,27,1)_100%)] pointer-events-none z-0" />
        
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex items-center justify-center">
          {/* Mobile Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            webkit-playsinline="true"
            className="w-full h-full object-cover object-center opacity-45 mix-blend-screen scale-105 md:hidden block"
          >
            <source src="/hero-mobile.webm" type="video/webm" />
            <source src="/hero-desktop.webm" type="video/webm" />
          </video>

          {/* Desktop Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            webkit-playsinline="true"
            className="w-full h-full object-cover object-center opacity-40 sm:opacity-50 mix-blend-screen scale-105 hidden md:block"
          >
            <source src="/hero-desktop.webm" type="video/webm" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-[#080E1B] via-transparent to-[#080E1B]/80" />
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-mono tracking-wider backdrop-blur-md">
                <span>💉 NEGATIVA DE TRATAMENTO / CIRURGIA / REMÉDIO</span>
                <span className="text-gray-500">•</span>
                <span className="text-rose-400 font-bold">CASOS URGENTES</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight font-sans text-white leading-[1.12]">
                Seu plano de saúde negou um <span className="text-[#C9A84C]">tratamento, exame ou medicamento?</span>
              </h1>

              <p className="text-base sm:text-lg text-gray-300 font-normal leading-relaxed">
                Atuamos com urgência para garantir acesso a tratamentos, cirurgias e medicamentos negados indevidamente pelo plano de saúde — atendimento <strong className="text-white font-semibold">100% online em todo o Brasil</strong>.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => handleWhatsApp('Quero garantir meu tratamento – Avaliação gratuita e urgente')}
                  className="btn-magnetic w-full sm:w-auto px-8 py-4 sm:py-5 rounded-full bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 hover:from-gold-300 hover:to-gold-500 text-midnight-950 font-extrabold text-sm sm:text-base tracking-wide flex items-center justify-center gap-2.5 shadow-2xl shadow-gold-500/25 group text-center"
                >
                  <span>Quero garantir meu tratamento – Avaliação gratuita e urgente</span>
                  <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-gray-400 pt-1">
                <span className="text-gold-400 font-semibold flex items-center gap-1">
                  ⚖️ OAB/BA 60.205
                </span>
                <span>•</span>
                <span className="text-gray-300">Atendimento Nacional</span>
                <span>•</span>
                <span className="text-rose-400 font-semibold flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  Prioridade em Casos Urgentes
                </span>
              </div>

            </div>

            {/* Right Card */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="relative w-full max-w-sm rounded-[2.5rem] bg-[#0E1626] border border-gold-500/30 p-6 sm:p-8 shadow-2xl space-y-6">
                <div className="flex items-center gap-4 border-b border-white/10 pb-5">
                  <div className="w-14 h-14 rounded-2xl bg-rose-500/15 border border-rose-500/30 flex items-center justify-center text-rose-400 shrink-0">
                    <HeartPulse className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-rose-400 font-bold bg-rose-500/10 px-2 py-0.5 rounded-full border border-rose-500/30">
                      Plantão Liminar
                    </span>
                    <h3 className="text-lg font-bold text-white mt-1">Liminar de Saúde</h3>
                    <p className="text-xs text-gray-400">Liberação em 24h a 72h</p>
                  </div>
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-gray-300">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Ordem judicial sob pena de multa diária ao plano</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Medicamentos oncológicos e de alto custo</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Cirurgias de urgência, próteses e home care</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Superação da tese do Rol Taxativo da ANS</span>
                  </div>
                </div>

                <button
                  onClick={() => handleWhatsApp('Preciso de uma liminar urgente para liberação de tratamento médico.')}
                  className="w-full py-3.5 rounded-2xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs tracking-wider transition-all duration-200 shadow-lg shadow-rose-600/30 flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Falar com Advogado no Plantão</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2️⃣ O PROBLEMA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
              Urgência Vital
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-midnight-950 tracking-tight">
              Sua saúde não pode esperar a burocracia do plano
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              Planos de saúde frequentemente negam exames, cirurgias, terapias e medicamentos prescritos por médicos, alegando "ausência de cobertura contratual" ou ausência no rol da ANS — mesmo quando a lei garante esse direito ao paciente.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-gray-200 flex items-start gap-3.5">
              <span className="text-2xl shrink-0">🩺</span>
              <div>
                <h4 className="text-sm font-bold text-midnight-950">Seu médico prescreveu um tratamento e o plano negou?</h4>
                <p className="text-xs text-gray-600 mt-1">Quem define o tratamento é o médico assistente, nunca o convênio.</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-gray-200 flex items-start gap-3.5">
              <span className="text-2xl shrink-0">💊</span>
              <div>
                <h4 className="text-sm font-bold text-midnight-950">Um medicamento essencial foi recusado pela operadora?</h4>
                <p className="text-xs text-gray-600 mt-1">Remédios de alto custo ou oncológicos não podem ser negados arbitrariamente.</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-gray-200 flex items-start gap-3.5">
              <span className="text-2xl shrink-0">🏥</span>
              <div>
                <h4 className="text-sm font-bold text-midnight-950">Uma cirurgia foi cancelada por "falta de cobertura"?</h4>
                <p className="text-xs text-gray-600 mt-1">Recusas ilegais de materiais cirúrgicos, próteses, órteses ou leitos de UTI.</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-gray-200 flex items-start gap-3.5">
              <span className="text-2xl shrink-0">⏳</span>
              <div>
                <h4 className="text-sm font-bold text-midnight-950">Está enfrentando demora inaceitável para autorização?</h4>
                <p className="text-xs text-gray-600 mt-1">Prazos estourados da ANS gerando risco iminente à sua recuperação.</p>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-midnight-950 font-medium text-sm flex items-center justify-between gap-4">
            <p>
              Esses casos podem ser urgentes — <strong>e existe caminho jurídico rápido para reverter a negativa através de liminar.</strong>
            </p>
            <button
              onClick={() => handleWhatsApp('Preciso reverter a negativa de tratamento urgente.')}
              className="px-5 py-2.5 rounded-full bg-rose-600 text-white hover:bg-rose-700 font-bold text-xs whitespace-nowrap transition-colors"
            >
              Falar no Plantão
            </button>
          </div>
        </div>
      </section>

      {/* 3️⃣ A SOLUÇÃO */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5]">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-gold-600">
              Ação Imediata
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-midnight-950 tracking-tight">
              Ação judicial de urgência para garantir seu tratamento
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              Analisamos a negativa recebida e, quando cabível, buscamos uma decisão judicial de urgência (liminar) para garantir a realização do tratamento, exame ou fornecimento do medicamento o mais rápido possível.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-white border border-gray-200 shadow-sm flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <span className="text-sm font-semibold text-gray-900">Análise da negativa e do relatório médico</span>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-gray-200 shadow-sm flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <span className="text-sm font-semibold text-gray-900">Verificação de abusividade conforme CDC e legislação de saúde</span>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-gray-200 shadow-sm flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <span className="text-sm font-semibold text-gray-900">Pedido de tutela de urgência (liminar) quando necessário</span>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-gray-200 shadow-sm flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <span className="text-sm font-semibold text-gray-900">Acompanhamento rigoroso até a efetiva liberação</span>
            </div>
          </div>

          <div className="pt-2 text-center">
            <button
              onClick={() => handleWhatsApp('Avaliar minha negativa agora')}
              className="btn-magnetic inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-300 hover:to-gold-500 text-midnight-950 font-bold text-sm tracking-wide shadow-lg shadow-gold-500/25 group"
            >
              <span>Avaliar minha negativa agora</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </div>
        </div>
      </section>

      {/* 4️⃣ COMO FUNCIONA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#090F1C] text-white">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="text-center space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-gold-400">
              Rápido e sem burocracia
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-sans text-white">
              Como funciona o atendimento
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <span className="text-2xl font-mono font-extrabold text-gold-400">01</span>
              <h4 className="text-base font-bold text-white">Envie laudo e negativa</h4>
              <p className="text-xs text-gray-300">Pelo WhatsApp direto com total agilidade.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <span className="text-2xl font-mono font-extrabold text-gold-400">02</span>
              <h4 className="text-base font-bold text-white">Avaliação urgente</h4>
              <p className="text-xs text-gray-300">Gratuita e emergencial sobre a viabilidade da liminar.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <span className="text-2xl font-mono font-extrabold text-gold-400">03</span>
              <h4 className="text-base font-bold text-white">Ação com liminar</h4>
              <p className="text-xs text-gray-300">Ajuizamento imediato no plantão judiciário sob multa diária.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <span className="text-2xl font-mono font-extrabold text-gold-400">04</span>
              <h4 className="text-base font-bold text-white">Liberação garantida</h4>
              <p className="text-xs text-gray-300">Acompanhamento próximo até a entrega do remédio ou cirurgia.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5️⃣ POR QUE ESCOLHER A HENRIQUE LEONEL ADVOCACIA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="text-center space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-gold-600">
              Diferenciais
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-midnight-950">
              Por que escolher a Henrique Leonel Advocacia
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-gray-200 space-y-2">
              <div className="flex items-center gap-2 text-gold-600 font-bold text-base">
                <Zap className="w-5 h-5 text-gold-600" />
                <span>⚡ Urgência</span>
              </div>
              <p className="text-sm text-gray-600">Foco absoluto em pedidos de liminar para casos críticos de saúde com risco à vida.</p>
            </div>
            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-gray-200 space-y-2">
              <div className="flex items-center gap-2 text-gold-600 font-bold text-base">
                <Globe className="w-5 h-5 text-gold-600" />
                <span>🌎 Atendimento Nacional</span>
              </div>
              <p className="text-sm text-gray-600">100% online, para todo o Brasil com processo judicial eletrônico célere.</p>
            </div>
            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-gray-200 space-y-2">
              <div className="flex items-center gap-2 text-gold-600 font-bold text-base">
                <HeartHandshake className="w-5 h-5 text-gold-600" />
                <span>🤝 Cuidado Humanizado</span>
              </div>
              <p className="text-sm text-gray-600">Atendimento sensível ao momento delicado e angustiante do paciente e familiares.</p>
            </div>
            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-gray-200 space-y-2">
              <div className="flex items-center gap-2 text-gold-600 font-bold text-base">
                <Lock className="w-5 h-5 text-gold-600" />
                <span>🔒 Sigilo</span>
              </div>
              <p className="text-sm text-gray-600">Dados médicos e relatórios tratados com total confidencialidade e sigilo profissional.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6️⃣ PROVA SOCIAL */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5] border-t border-gray-200">
        <div className="max-w-4xl mx-auto space-y-8 text-center">
          <div>
            <div className="flex justify-center text-amber-400 text-lg mb-2">
              {'★'.repeat(5)}
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-midnight-950">
              O que dizem os clientes
            </h2>
          </div>

          <div className="max-w-2xl mx-auto p-8 rounded-3xl bg-white border border-gray-200 shadow-card-light space-y-4">
            <p className="text-base sm:text-lg text-gray-700 font-serif italic leading-relaxed">
              "Meu pai necessitava com urgência de um fármaco oncológico importado e o plano negou dizendo que não constava no rol da ANS. O Dr. Henrique agiu em menos de 24 horas, conseguiu uma liminar e o remédio foi fornecido pelo hospital. Gratidão eterna por salvarem a vida dele."
            </p>
            <div className="text-xs font-mono text-gray-500">
              <span className="font-bold text-midnight-950">Rodrigo A.</span> — Salvador / BA • <span className="text-emerald-600 font-semibold">Liminar Concedida em 48h</span>
            </div>
          </div>
        </div>
      </section>

      {/* 7️⃣ OFERTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#080E1B] text-white">
        <div className="max-w-4xl mx-auto p-8 sm:p-12 rounded-[2.5rem] bg-gradient-to-r from-gold-500/10 via-white/5 to-gold-500/10 border border-gold-500/30 text-center space-y-6">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            Avaliação Gratuita e Urgente do seu Caso
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-gray-200">
            <span className="flex items-center gap-1.5 bg-white/10 px-4 py-2 rounded-full">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Sem custo inicial
            </span>
            <span className="flex items-center gap-1.5 bg-white/10 px-4 py-2 rounded-full">
              <Clock className="w-4 h-4 text-rose-400" />
              Prioridade em casos urgentes
            </span>
            <span className="flex items-center gap-1.5 bg-white/10 px-4 py-2 rounded-full">
              <Globe className="w-4 h-4 text-blue-400" />
              Atendimento 100% online
            </span>
          </div>

          <div>
            <button
              onClick={() => handleWhatsApp('Quero garantir meu tratamento agora')}
              className="btn-magnetic px-8 py-4 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-300 hover:to-gold-500 text-midnight-950 font-extrabold text-sm sm:text-base tracking-wide shadow-xl shadow-gold-500/25 inline-flex items-center gap-2"
            >
              <span>Quero garantir meu tratamento agora</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 8️⃣ FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-200">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-gold-600">
              Perguntas Frequentes
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-midnight-950">
              Dúvidas sobre negativa de tratamento
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={i} className="rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm">
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : i)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-midnight-950 hover:bg-gray-50"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${isOpen ? 'rotate-180 text-gold-600' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="p-5 pt-0 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9️⃣ CTA FINAL */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#070C16] text-white text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            Sua saúde não pode esperar.
          </h2>
          <p className="text-sm sm:text-base text-gray-300">
            Fale agora com quem pode agir com urgência pelo seu caso.
          </p>
          <div>
            <button
              onClick={() => handleWhatsApp('Falar com um advogado agora – Atendimento Urgente')}
              className="btn-magnetic px-8 py-4 sm:py-5 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-300 hover:to-gold-500 text-midnight-950 font-extrabold text-base tracking-wide shadow-2xl shadow-gold-500/30 inline-flex items-center gap-2"
            >
              <PhoneCall className="w-5 h-5" />
              <span>Falar com um advogado agora – Atendimento Urgente</span>
              <ArrowUpRight className="w-5 h-5" />
            </button>
          </div>
          <div className="pt-2 text-xs font-mono text-gray-400">
            HENRIQUE LEONEL ADVOCACIA • OAB/BA 60.205
          </div>
        </div>
      </section>

      {/* Floating WhatsApp */}
      <FloatingWhatsApp onOpenIntake={() => handleOpenLeadModal('LP Medicamento — WhatsApp Flutuante')} />

      {/* Modal de Triagem Pré-WhatsApp */}
      <LeadIntakeModal
        isOpen={leadModalOpen}
        onClose={() => setLeadModalOpen(false)}
        initialService="medicamento"
        origin={leadOrigin}
        lockService={true}
      />

    </div>
  );
}
