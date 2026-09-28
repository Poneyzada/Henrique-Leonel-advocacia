import React, { useState } from 'react';
import { ArrowUpRight, Shield, Clock, PhoneCall, CheckCircle2, TrendingUp, UserX, FileText, ChevronDown, BarChart2, Globe, HeartHandshake, Lock } from 'lucide-react';
import ScalesOfJusticeSvg from '../components/ScalesOfJusticeSvg';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import LeadIntakeModal from '../components/LeadIntakeModal';

export default function LandingPagePlanoSaude() {
  const [leadModalOpen, setLeadModalOpen] = useState(false);
  const [leadOrigin, setLeadOrigin] = useState('LP Tráfego — Revisão de Plano de Saúde');

  const handleOpenLeadModal = (originText = 'LP Tráfego — Revisão de Plano de Saúde') => {
    setLeadOrigin(originText);
    setLeadModalOpen(true);
  };

  const handleWhatsApp = (customMsg = '') => {
    handleOpenLeadModal(`LP Plano de Saúde — ${customMsg || 'CTA'}`);
  };

  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      q: 'Todo reajuste de plano de saúde é abusivo?',
      a: 'Não, mas muitos ultrapassam os limites legais estabelecidos pela ANS ou aplicam índices desmedidos por faixa etária (especialmente aos 59 anos) e sinistralidade coletiva sem comprovação atuarial. Fazemos a análise técnica para identificar se há abusividade no seu caso.'
    },
    {
      q: 'Meu plano pode ser cancelado por inadimplência?',
      a: 'Existem regras muito rígidas na lei para cancelamento. É obrigatória notificação prévia válida até o 50º dia de atraso, e o cancelamento é expressamente vedado se o beneficiário estiver internado ou em tratamento médico contínuo.'
    },
    {
      q: 'Preciso ir até Salvador?',
      a: 'Não. Todo o atendimento é realizado 100% online, com protocolo eletrônico em todas as comarcas e tribunais do Brasil, para clientes de qualquer estado.'
    },
    {
      q: 'Quanto custa a avaliação inicial?',
      a: 'A avaliação inicial da sua documentação e do contrato do plano de saúde é 100% gratuita e sem nenhum compromisso.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-midnight-950 font-sans selection:bg-gold-500 selection:text-midnight-950">
      
      {/* Top Banner OAB */}
      <div className="bg-[#060A12] border-b border-gold-500/20 text-white py-2.5 px-4 text-center text-xs font-mono">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <img src="/logo-semnome.png" alt="HL" className="h-6 w-6 object-contain" />
            <span className="text-gold-400 font-semibold font-mono text-xs">⚖️ OAB/BA 60.205</span>
            <span className="hidden sm:inline text-gray-500">•</span>
            <span className="hidden sm:inline text-gray-200 font-serif tracking-wider uppercase text-xs">Henrique Leonel Advocacia</span>
          </div>
          <div className="flex items-center gap-4 text-gray-300">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Plantão Online
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
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-gold-500/40 text-gold-300 text-xs font-mono tracking-wider backdrop-blur-md">
                <span>🏥 REVISÃO DE PLANO DE SAÚDE</span>
                <span className="text-gray-500">•</span>
                <span className="text-emerald-400">ATENDIMENTO NACIONAL</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight font-sans text-white leading-[1.12]">
                Seu plano de saúde aumentou muito ou <span className="text-[#C9A84C]">foi cancelado sem motivo claro?</span>
              </h1>

              <p className="text-base sm:text-lg text-gray-300 font-normal leading-relaxed">
                Analisamos reajustes abusivos e cancelamentos indevidos, buscando reequilibrar sua relação com a operadora — com atendimento <strong className="text-white font-semibold">100% online em todo o Brasil</strong>.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => handleWhatsApp('Quero revisar meu plano de saúde – Avaliação gratuita')}
                  className="btn-magnetic w-full sm:w-auto px-8 py-4 sm:py-5 rounded-full bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 hover:from-gold-300 hover:to-gold-500 text-midnight-950 font-extrabold text-sm sm:text-base tracking-wide flex items-center justify-center gap-2.5 shadow-2xl shadow-gold-500/25 group text-center"
                >
                  <span>Quero revisar meu plano de saúde – Avaliação gratuita</span>
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
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  Resposta em até 24h
                </span>
              </div>

            </div>

            {/* Right Card */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="relative w-full max-w-sm rounded-[2.5rem] bg-[#0E1626] border border-gold-500/30 p-6 sm:p-8 shadow-2xl space-y-6">
                <div className="flex items-center gap-4 border-b border-white/10 pb-5">
                  <div className="w-14 h-14 rounded-2xl bg-gold-500/15 border border-gold-500/30 flex items-center justify-center text-gold-400 shrink-0">
                    <TrendingUp className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400 font-bold bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/30">
                      Revisional & Devolução
                    </span>
                    <h3 className="text-lg font-bold text-white mt-1">Revisão Contratual</h3>
                    <p className="text-xs text-gray-400">Redução de Boletos & Restituição</p>
                  </div>
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-gray-300">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                    <span>Cálculo do percentual legal de reajuste</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                    <span>Redução de até 50% nas mensalidades infladas</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                    <span>Devolução dos valores pagos a mais nos últimos 3 anos</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                    <span>Reativação de planos cancelados indevidamente</span>
                  </div>
                </div>

                <button
                  onClick={() => handleWhatsApp('Quero avaliar as faturas do meu plano de saúde.')}
                  className="w-full py-3.5 rounded-2xl bg-white/10 hover:bg-gold-500 hover:text-midnight-950 text-white font-bold text-xs tracking-wider transition-all duration-200 border border-white/20 flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-4 h-4 text-gold-400" />
                  <span>Solicitar Análise de Boletos</span>
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
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              Prática Abusiva
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-midnight-950 tracking-tight">
              Reajustes altos e cancelamentos podem estar fora da lei
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              Muitas operadoras aplicam reajustes muito acima do permitido, especialmente em planos coletivos e por faixa etária, ou cancelam contratos de forma unilateral — mesmo quando o beneficiário está em dia com os pagamentos.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-gray-200 flex items-start gap-3.5">
              <span className="text-2xl shrink-0">📈</span>
              <div>
                <h4 className="text-sm font-bold text-midnight-950">Seu plano teve um reajuste muito acima da inflação?</h4>
                <p className="text-xs text-gray-600 mt-1">Aumentos desproporcionais de 30%, 50% ou mais sem justificativa clara.</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-gray-200 flex items-start gap-3.5">
              <span className="text-2xl shrink-0">👴</span>
              <div>
                <h4 className="text-sm font-bold text-midnight-950">Reajustado por mudança de faixa etária abusiva?</h4>
                <p className="text-xs text-gray-600 mt-1">Especialmente na mudança para os 59 anos de idade.</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-gray-200 flex items-start gap-3.5">
              <span className="text-2xl shrink-0">❌</span>
              <div>
                <h4 className="text-sm font-bold text-midnight-950">Seu plano foi cancelado sem aviso adequado?</h4>
                <p className="text-xs text-gray-600 mt-1">Rescisão unilateral repentina sem notificação prévia válida.</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-gray-200 flex items-start gap-3.5">
              <span className="text-2xl shrink-0">📄</span>
              <div>
                <h4 className="text-sm font-bold text-midnight-950">Não entende os motivos apresentados pela operadora?</h4>
                <p className="text-xs text-gray-600 mt-1">Falta de clareza nas taxas de sinistralidade e cálculos atuariais.</p>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-midnight-950 font-medium text-sm flex items-center justify-between gap-4">
            <p>
              Esses casos podem ser questionados judicialmente. <strong>Você pode não precisar aceitar isso.</strong>
            </p>
            <button
              onClick={() => handleWhatsApp('Quero entender a revisão do meu plano.')}
              className="px-5 py-2.5 rounded-full bg-midnight-950 text-white hover:bg-gold-500 hover:text-midnight-950 font-bold text-xs whitespace-nowrap transition-colors"
            >
              Falar com Advogado
            </button>
          </div>
        </div>
      </section>

      {/* 3️⃣ A SOLUÇÃO */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5]">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-gold-600">
              Solução Jurídica
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-midnight-950 tracking-tight">
              Revisão contratual para reequilibrar seu plano de saúde
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              Fazemos uma análise detalhada do seu contrato, histórico de reajustes e conduta da operadora, buscando a via judicial mais adequada para reduzir valores abusivos ou reverter cancelamentos indevidos.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-white border border-gray-200 shadow-sm flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <span className="text-sm font-semibold text-gray-900">Análise do contrato e histórico de reajustes</span>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-gray-200 shadow-sm flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <span className="text-sm font-semibold text-gray-900">Verificação de abusividade conforme legislação e jurisprudência</span>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-gray-200 shadow-sm flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <span className="text-sm font-semibold text-gray-900">Ação judicial para revisão de valores ou reativação do plano</span>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-gray-200 shadow-sm flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <span className="text-sm font-semibold text-gray-900">Acompanhamento completo do processo até a decisão</span>
            </div>
          </div>

          <div className="pt-2 text-center">
            <button
              onClick={() => handleWhatsApp('Avaliar meu plano de saúde agora')}
              className="btn-magnetic inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-300 hover:to-gold-500 text-midnight-950 font-bold text-sm tracking-wide shadow-lg shadow-gold-500/25 group"
            >
              <span>Avaliar meu plano de saúde agora</span>
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
              Passo a Passo
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-sans text-white">
              Como funciona
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <span className="text-2xl font-mono font-extrabold text-gold-400">01</span>
              <h4 className="text-base font-bold text-white">Envie contrato e boletos</h4>
              <p className="text-xs text-gray-300">Pelo WhatsApp ou formulário de forma segura.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <span className="text-2xl font-mono font-extrabold text-gold-400">02</span>
              <h4 className="text-base font-bold text-white">Avaliação gratuita</h4>
              <p className="text-xs text-gray-300">Da abusividade do reajuste ou cancelamento indevido.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <span className="text-2xl font-mono font-extrabold text-gold-400">03</span>
              <h4 className="text-base font-bold text-white">Estratégia jurídica</h4>
              <p className="text-xs text-gray-300">Definida com precisão com base no seu caso e nos precedentes.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <span className="text-2xl font-mono font-extrabold text-gold-400">04</span>
              <h4 className="text-base font-bold text-white">Acompanhamento</h4>
              <p className="text-xs text-gray-300">Até a decisão judicial final e redução do boleto.</p>
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
                <BarChart2 className="w-5 h-5 text-gold-600" />
                <span>📊 Análise Técnica</span>
              </div>
              <p className="text-sm text-gray-600">Verificação detalhada de cláusulas e histórico de reajustes com base atuarial e jurídica.</p>
            </div>
            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-gray-200 space-y-2">
              <div className="flex items-center gap-2 text-gold-600 font-bold text-base">
                <Globe className="w-5 h-5 text-gold-600" />
                <span>🌎 Atendimento Nacional</span>
              </div>
              <p className="text-sm text-gray-600">100% online, para todo o Brasil com total agilidade.</p>
            </div>
            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-gray-200 space-y-2">
              <div className="flex items-center gap-2 text-gold-600 font-bold text-base">
                <HeartHandshake className="w-5 h-5 text-gold-600" />
                <span>🤝 Transparência</span>
              </div>
              <p className="text-sm text-gray-600">Explicação clara sobre a real viabilidade do seu caso antes de qualquer contratação.</p>
            </div>
            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-gray-200 space-y-2">
              <div className="flex items-center gap-2 text-gold-600 font-bold text-base">
                <Lock className="w-5 h-5 text-gold-600" />
                <span>🔒 Sigilo</span>
              </div>
              <p className="text-sm text-gray-600">Seus dados e contrato tratados com absoluta confidencialidade e sigilo profissional.</p>
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
              "Meu plano de saúde aplicou um aumento absurdo quando fiz 59 anos, duplicando o valor do boleto. O Dr. Henrique revisou todo o histórico contratual, entrou com a ação e o juiz determinou a redução imediata da fatura, além de ordenar a devolução das diferenças cobradas. Excelente atuação!"
            </p>
            <div className="text-xs font-mono text-gray-500">
              <span className="font-bold text-midnight-950">Cristina M.</span> — Salvador / BA • <span className="text-emerald-600 font-semibold">Mensalidade Reduzida em 45%</span>
            </div>
          </div>
        </div>
      </section>

      {/* 7️⃣ OFERTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#080E1B] text-white">
        <div className="max-w-4xl mx-auto p-8 sm:p-12 rounded-[2.5rem] bg-gradient-to-r from-gold-500/10 via-white/5 to-gold-500/10 border border-gold-500/30 text-center space-y-6">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            Avaliação Gratuita do seu Contrato
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-gray-200">
            <span className="flex items-center gap-1.5 bg-white/10 px-4 py-2 rounded-full">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Sem custo inicial
            </span>
            <span className="flex items-center gap-1.5 bg-white/10 px-4 py-2 rounded-full">
              <Clock className="w-4 h-4 text-gold-400" />
              Resposta em até 24h
            </span>
            <span className="flex items-center gap-1.5 bg-white/10 px-4 py-2 rounded-full">
              <Globe className="w-4 h-4 text-blue-400" />
              Atendimento 100% online
            </span>
          </div>

          <div>
            <button
              onClick={() => handleWhatsApp('Quero revisar meu plano agora')}
              className="btn-magnetic px-8 py-4 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-300 hover:to-gold-500 text-midnight-950 font-extrabold text-sm sm:text-base tracking-wide shadow-xl shadow-gold-500/25 inline-flex items-center gap-2"
            >
              <span>Quero revisar meu plano agora</span>
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
              Dúvidas sobre revisão de plano de saúde
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
            Não aceite reajustes ou cancelamentos sem entender seus direitos.
          </h2>
          <p className="text-sm sm:text-base text-gray-300">
            Fale com quem pode te orientar agora e restabelecer a justiça no seu contrato.
          </p>
          <div>
            <button
              onClick={() => handleWhatsApp('Falar com um advogado agora sobre plano de saúde')}
              className="btn-magnetic px-8 py-4 sm:py-5 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-300 hover:to-gold-500 text-midnight-950 font-extrabold text-base tracking-wide shadow-2xl shadow-gold-500/30 inline-flex items-center gap-2"
            >
              <PhoneCall className="w-5 h-5" />
              <span>Falar com um advogado agora</span>
              <ArrowUpRight className="w-5 h-5" />
            </button>
          </div>
          <div className="pt-2 text-xs font-mono text-gray-400">
            HENRIQUE LEONEL ADVOCACIA • OAB/BA 60.205
          </div>
        </div>
      </section>

      {/* Floating WhatsApp */}
      <FloatingWhatsApp onOpenIntake={() => handleOpenLeadModal('LP Plano de Saúde — WhatsApp Flutuante')} />

      {/* Modal de Triagem Pré-WhatsApp */}
      <LeadIntakeModal
        isOpen={leadModalOpen}
        onClose={() => setLeadModalOpen(false)}
        initialService="plano-saude"
        origin={leadOrigin}
        lockService={true}
      />

    </div>
  );
}
