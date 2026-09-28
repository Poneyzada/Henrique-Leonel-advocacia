import React from 'react';
import { ArrowUpRight, Shield, Award, CheckCircle2, Clock, PhoneCall, AlertTriangle, Zap, Globe, MessageSquare, HelpCircle, Lock, ChevronDown } from 'lucide-react';
import ScalesOfJusticeSvg from '../components/ScalesOfJusticeSvg';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import LeadIntakeModal from '../components/LeadIntakeModal';

export default function LandingPageBloqueio() {
  const [leadModalOpen, setLeadModalOpen] = React.useState(false);
  const [leadOrigin, setLeadOrigin] = React.useState('LP Tráfego — Bloqueio de Contas');

  const handleOpenLeadModal = (originText = 'LP Tráfego — Bloqueio de Contas') => {
    setLeadOrigin(originText);
    setLeadModalOpen(true);
  };

  const handleWhatsApp = (customMsg = '') => {
    handleOpenLeadModal(`LP Bloqueio — ${customMsg || 'CTA'}`);
  };

  const [openFaq, setOpenFaq] = React.useState(0);

  const faqs = [
    {
      q: 'Quanto tempo demora para desbloquear a conta?',
      a: 'Depende de cada caso e da instituição, mas atuamos com pedidos de tutela provisória de urgência (liminar). Em situações de verbas salariais ou fundos de subsistência, juízes costumam analisar os pedidos com máxima prioridade em questão de dias.'
    },
    {
      q: 'Funciona para contas de Uber e iFood também?',
      a: 'Sim! Atuamos fortemente em bloqueios de contas bancárias tradicionais e também em suspensões arbitrárias de aplicativos de trabalho como Uber, iFood, 99, Mercado Pago e PicPay com valores retidos.'
    },
    {
      q: 'Preciso ir até Salvador?',
      a: 'Não. Todo o atendimento e o processo judicial eletrônico são realizados 100% online para clientes de qualquer cidade ou estado do Brasil, com total segurança e comodidade.'
    },
    {
      q: 'Quanto custa a avaliação inicial?',
      a: 'A avaliação inicial da sua documentação e da viabilidade jurídica do seu caso é 100% gratuita e sem compromisso.'
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

      {/* 1️⃣ HERO SECTION (Targeted for Paid Traffic) */}
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
              
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-gold-500/40 text-gold-300 text-xs font-mono tracking-wider backdrop-blur-md">
                <span>🔒 DESBLOQUEIO DE CONTAS & APPS</span>
                <span className="text-gray-500">•</span>
                <span className="text-emerald-400">ATENDIMENTO NACIONAL</span>
              </div>

              {/* Exact User Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight font-sans text-white leading-[1.12]">
                Sua conta foi bloqueada e você <span className="text-[#C9A84C]">não sabe por quê?</span>
              </h1>

              {/* Exact User Subheadline */}
              <p className="text-base sm:text-lg text-gray-300 font-normal leading-relaxed">
                Atuamos para reverter bloqueios indevidos em contas bancárias, Uber, iFood, PicPay e outras plataformas — com atendimento <strong className="text-white font-semibold">100% online em todo o Brasil</strong>.
              </p>

              {/* Supported Platforms Badges */}
              <div className="flex flex-wrap items-center gap-2 pt-1 text-xs font-mono text-gray-300">
                <span className="px-3 py-1 rounded-xl bg-white/5 border border-white/10">Uber & 99</span>
                <span className="px-3 py-1 rounded-xl bg-white/5 border border-white/10">iFood Entregador</span>
                <span className="px-3 py-1 rounded-xl bg-white/5 border border-white/10">Nubank & Inter</span>
                <span className="px-3 py-1 rounded-xl bg-white/5 border border-white/10">Mercado Pago & PicPay</span>
                <span className="px-3 py-1 rounded-xl bg-white/5 border border-white/10">Bancos Tradicionais</span>
              </div>

              {/* Exact User CTA */}
              <div className="pt-2">
                <button
                  onClick={() => handleWhatsApp('Quero desbloquear minha conta – Avaliação gratuita')}
                  className="btn-magnetic w-full sm:w-auto px-8 py-4 sm:py-5 rounded-full bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 hover:from-gold-300 hover:to-gold-500 text-midnight-950 font-extrabold text-sm sm:text-base tracking-wide flex items-center justify-center gap-2.5 shadow-2xl shadow-gold-500/25 group text-center"
                >
                  <span>Quero desbloquear minha conta – Avaliação gratuita</span>
                  <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </div>

              {/* Exact Selo de Confiança */}
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

            {/* Right Card / Visual */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              
              <div className="relative w-full max-w-sm rounded-[2.5rem] bg-[#0E1626] border border-gold-500/30 p-6 sm:p-8 shadow-2xl space-y-6">
                
                <div className="flex items-center gap-4 border-b border-white/10 pb-5">
                  <div className="w-14 h-14 rounded-2xl bg-gold-500/15 border border-gold-500/30 flex items-center justify-center text-gold-400 shrink-0">
                    <Lock className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-red-400 font-bold bg-red-500/10 px-2 py-0.5 rounded-full border border-red-500/30">
                      Urgência Jurídica
                    </span>
                    <h3 className="text-lg font-bold text-white mt-1">Reversão de Bloqueio</h3>
                    <p className="text-xs text-gray-400">Tutela Provisória de Urgência</p>
                  </div>
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-gray-300">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                    <span>Pedido de Liminar para desbloqueio célere</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                    <span>Fixação de multa diária contra o banco/app</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                    <span>Pedido de Indenização por Danos Morais e Lucros Cessantes</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                    <span>Avaliação 100% gratuita do seu caso</span>
                  </div>
                </div>

                <button
                  onClick={() => handleWhatsApp('Gostaria de uma avaliação gratuita do bloqueio da minha conta.')}
                  className="w-full py-3.5 rounded-2xl bg-white/10 hover:bg-gold-500 hover:text-midnight-950 text-white font-bold text-xs tracking-wider transition-all duration-200 border border-white/20 flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-4 h-4 text-gold-400 group-hover:text-midnight-950" />
                  <span>Falar Agora no WhatsApp</span>
                </button>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* 2️⃣ O PROBLEMA (Identificação com a Dor) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto space-y-8">
          
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-red-600 bg-red-50 px-3 py-1 rounded-full border border-red-200">
              Situação Abusiva
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-midnight-950 tracking-tight">
              Ficar sem acesso ao seu próprio dinheiro não pode ser normal
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              Bancos e aplicativos têm bloqueado contas e valores sem aviso prévio, alegando "suspeita de fraude" ou "análise de segurança" — muitas vezes sem qualquer explicação clara, deixando pessoas sem acesso ao próprio dinheiro por dias ou semanas.
            </p>
          </div>

          {/* Bullets de Identificação do Usuário */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-gray-200 flex items-start gap-3.5">
              <span className="text-2xl shrink-0">🏦</span>
              <div>
                <h4 className="text-sm font-bold text-midnight-950">Conta bancária bloqueada sem justificativa?</h4>
                <p className="text-xs text-gray-600 mt-1">Saldo retido sem prévia comunicação ou motivo plausível.</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-gray-200 flex items-start gap-3.5">
              <span className="text-2xl shrink-0">🚗</span>
              <div>
                <h4 className="text-sm font-bold text-midnight-950">Conta de motorista/entregador suspensa com valores retidos?</h4>
                <p className="text-xs text-gray-600 mt-1">Uber, iFood ou 99 bloqueando o fruto do seu trabalho diário.</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-gray-200 flex items-start gap-3.5">
              <span className="text-2xl shrink-0">💳</span>
              <div>
                <h4 className="text-sm font-bold text-midnight-950">Conta digital indisponível?</h4>
                <p className="text-xs text-gray-600 mt-1">PicPay, Mercado Pago, Nubank travando movimentações e saques.</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-gray-200 flex items-start gap-3.5">
              <span className="text-2xl shrink-0">📵</span>
              <div>
                <h4 className="text-sm font-bold text-midnight-950">Tentou contato com a empresa e não teve resposta?</h4>
                <p className="text-xs text-gray-600 mt-1">Suporte automatizado sem solução ou prazos que nunca acabam.</p>
              </div>
            </div>

          </div>

          <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-midnight-950 font-medium text-sm flex items-center justify-between gap-4">
            <p>
              Se isso está acontecendo com você, <strong>existe caminho jurídico para buscar o desbloqueio imediato</strong> e pleitear indenização por perdas e danos.
            </p>
            <button
              onClick={() => handleWhatsApp('Quero desbloquear minha conta!')}
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
              Estratégia Combate
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-midnight-950 tracking-tight">
              Atuação jurídica rápida para reverter o bloqueio
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              Analisamos seu caso e buscamos as medidas judiciais cabíveis — incluindo pedidos de urgência — para restabelecer seu acesso à conta e aos valores retidos o mais rápido possível.
            </p>
          </div>

          {/* O que fazemos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-white border border-gray-200 shadow-sm flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <span className="text-sm font-semibold text-gray-900">Análise da causa do bloqueio</span>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-gray-200 shadow-sm flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <span className="text-sm font-semibold text-gray-900">Notificação extrajudicial à instituição, quando cabível</span>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-gray-200 shadow-sm flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <span className="text-sm font-semibold text-gray-900">Ação judicial com pedido de tutela de urgência (liminar)</span>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-gray-200 shadow-sm flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <span className="text-sm font-semibold text-gray-900">Acompanhamento integral até a resolução do caso</span>
            </div>
          </div>

          <div className="pt-2 text-center">
            <button
              onClick={() => handleWhatsApp('Avaliar meu caso agora')}
              className="btn-magnetic inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-300 hover:to-gold-500 text-midnight-950 font-bold text-sm tracking-wide shadow-lg shadow-gold-500/25 group"
            >
              <span>Avaliar meu caso agora</span>
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
              Processo Transparente
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-sans text-white">
              Como funciona o atendimento
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <span className="text-2xl font-mono font-extrabold text-gold-400">01</span>
              <h4 className="text-base font-bold text-white">Envie seu caso</h4>
              <p className="text-xs text-gray-300">Pelo WhatsApp de forma rápida e segura, anexando os prints.</p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <span className="text-2xl font-mono font-extrabold text-gold-400">02</span>
              <h4 className="text-base font-bold text-white">Avaliação gratuita</h4>
              <p className="text-xs text-gray-300">Nossa equipe analisa a situação e a documentação sem nenhum custo.</p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <span className="text-2xl font-mono font-extrabold text-gold-400">03</span>
              <h4 className="text-base font-bold text-white">Estratégia definida</h4>
              <p className="text-xs text-gray-300">Com pedido de urgência (liminar), quando aplicável, sem juridiquês.</p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <span className="text-2xl font-mono font-extrabold text-gold-400">04</span>
              <h4 className="text-base font-bold text-white">Acompanhamento</h4>
              <p className="text-xs text-gray-300">Até o efetivo desbloqueio e liberação integral dos seus valores.</p>
            </div>

          </div>

        </div>
      </section>

      {/* 5️⃣ POR QUE ESCOLHER A HENRIQUE LEONEL ADVOCACIA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto space-y-10">
          
          <div className="text-center space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-gold-600">
              Nossos Pilares
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-midnight-950">
              Por que escolher a Henrique Leonel Advocacia
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-gray-200 space-y-2">
              <div className="flex items-center gap-2 text-gold-600 font-bold text-base">
                <Zap className="w-5 h-5 text-gold-600" />
                <span>⚡ Agilidade</span>
              </div>
              <p className="text-sm text-gray-600">Foco prioritário em pedidos de urgência (liminares) para reaver o dinheiro rápido.</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-gray-200 space-y-2">
              <div className="flex items-center gap-2 text-gold-600 font-bold text-base">
                <Globe className="w-5 h-5 text-gold-600" />
                <span>🌎 Atendimento Nacional</span>
              </div>
              <p className="text-sm text-gray-600">100% online, para clientes de qualquer cidade ou estado do Brasil.</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-gray-200 space-y-2">
              <div className="flex items-center gap-2 text-gold-600 font-bold text-base">
                <MessageSquare className="w-5 h-5 text-gold-600" />
                <span>🤝 Linguagem Simples</span>
              </div>
              <p className="text-sm text-gray-600">Sem juridiquês, com transparência total e explicação clara a cada passo.</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-gray-200 space-y-2">
              <div className="flex items-center gap-2 text-gold-600 font-bold text-base">
                <Shield className="w-5 h-5 text-gold-600" />
                <span>🔒 Sigilo</span>
              </div>
              <p className="text-sm text-gray-600">Seu caso e seus documentos tratados com confidencialidade e sigilo profissional.</p>
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
              "Minha conta onde recebia os pagamentos da minha empresa e de corridas foi bloqueada repentinamente por uma fintech. Estava desesperado sem conseguir pagar minhas contas. O Dr. Henrique entrou com o pedido de liminar e em menos de 72 horas minha conta foi restabelecida com todo o saldo liberado. Recomendo demais!"
            </p>
            <div className="text-xs font-mono text-gray-500">
              <span className="font-bold text-midnight-950">Marcelo R.</span> — Salvador / BA • <span className="text-emerald-600 font-semibold">Conta Desbloqueada em 72h</span>
            </div>
          </div>

        </div>
      </section>

      {/* 7️⃣ OFERTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#080E1B] text-white">
        <div className="max-w-4xl mx-auto p-8 sm:p-12 rounded-[2.5rem] bg-gradient-to-r from-gold-500/10 via-white/5 to-gold-500/10 border border-gold-500/30 text-center space-y-6">
          
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            Avaliação Gratuita do seu Caso
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
              onClick={() => handleWhatsApp('Quero desbloquear minha conta agora')}
              className="btn-magnetic px-8 py-4 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-300 hover:to-gold-500 text-midnight-950 font-extrabold text-sm sm:text-base tracking-wide shadow-xl shadow-gold-500/25 inline-flex items-center gap-2"
            >
              <span>Quero desbloquear minha conta agora</span>
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
              Dúvidas sobre o desbloqueio
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
            Cada dia sem acesso à sua conta é um problema que pode ser evitado.
          </h2>
          <p className="text-sm sm:text-base text-gray-300">
            Fale agora com quem pode te ajudar a buscar o desbloqueio rápido na Justiça.
          </p>
          <div>
            <button
              onClick={() => handleWhatsApp('Falar com um advogado agora')}
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
      <FloatingWhatsApp onOpenIntake={() => handleOpenLeadModal('LP Bloqueio — WhatsApp Flutuante')} />

      {/* Modal de Triagem Pré-WhatsApp */}
      <LeadIntakeModal
        isOpen={leadModalOpen}
        onClose={() => setLeadModalOpen(false)}
        initialService="bloqueio"
        origin={leadOrigin}
        lockService={true}
      />

    </div>
  );
}
