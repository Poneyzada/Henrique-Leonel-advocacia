import React from 'react';
import { ArrowUpRight, Shield, Award, CheckCircle2, MessageSquare, Star, Clock } from 'lucide-react';
import ScalesOfJusticeSvg from './ScalesOfJusticeSvg';

export default function Hero({ onOpenServiceModal }) {
  const handleWhatsApp = (serviceTopic = '') => {
    let text = 'Olá Dr. Henrique Leonel! Preciso de uma avaliação jurídica gratuita sobre meu caso.';
    if (serviceTopic) {
      text = `Olá Dr. Henrique Leonel! Preciso de ajuda com ${serviceTopic}. Gostaria de uma avaliação gratuita.`;
    }
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/5571999999999?text=${encoded}`, '_blank');
  };

  return (
    <section className="relative min-h-[100dvh] w-full bg-[#080E1B] text-white pt-24 sm:pt-28 pb-6 flex flex-col justify-between overflow-hidden">
      
      {/* Cinematic Background Gradient Overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_15%,rgba(20,35,65,0.75)_0%,rgba(8,14,27,1)_100%)] pointer-events-none z-0" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gold-500/10 rounded-full blur-[130px] pointer-events-none z-0" />
      
      {/* 3D Flow Cinematic Video Background (Desktop & Mobile) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex items-center justify-center">
        {/* Mobile Video (Vertical 9:16 Aspect) */}
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

        {/* Desktop Video (Horizontal 16:9 Aspect) */}
        <video
          autoPlay
          loop
          muted
          playsInline
          webkit-playsinline="true"
          className="w-full h-full object-cover object-center opacity-40 sm:opacity-55 mix-blend-screen scale-105 hidden md:block"
        >
          <source src="/hero-desktop.webm" type="video/webm" />
        </video>

        {/* Ambient Vignette & Gradient Overlays so text and portrait blend flawlessly */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080E1B] via-transparent to-[#080E1B]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080E1B]/90 via-[#080E1B]/30 to-transparent lg:block hidden" />
      </div>

      {/* Main Hero Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          
          {/* Left Column: Headlines & Main CTA (1:1 with Behance Screenshot) */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center space-y-5 pt-4 lg:pt-0">
            
            {/* OAB Regulated Badge (1:1 with SRA REGULATED badge in Behance) */}
            <div className="gsap-fade-in inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-gold-500/30 text-gold-300 text-[11px] font-mono tracking-wider w-fit backdrop-blur-md shadow-sm">
              <span className="text-gold-400">⚖️</span>
              <span>OAB/BA REGULAMENTADO: 60.205</span>
            </div>

            {/* Massive Editorial Headline matching Behance: "Your Legal Solutions Partner" */}
            <div className="space-y-1 gsap-fade-in">
              <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight font-sans text-white leading-[1.08]">
                Sua Solução Jurídica
              </h1>
              <div className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-sans font-extrabold text-[#C9A84C] tracking-tight leading-[1.1]">
                Estratégica & Ágil.
              </div>
            </div>

            {/* Direct Problem/Solution Subheadline */}
            <div className="space-y-2 max-w-xl gsap-fade-in">
              <p className="text-xs sm:text-sm font-semibold text-gold-300/90 flex items-center gap-2">
                <span>🔒</span>
                <span>Sua conta foi bloqueada? Seu plano negou o tratamento?</span>
              </p>
              <p className="text-xs sm:text-sm lg:text-base text-gray-300 font-normal leading-relaxed">
                A <strong className="text-white font-semibold">Henrique Leonel Advocacia</strong> atua com velocidade para desbloquear contas bancárias e apps, reverter negativas de planos de saúde e garantir seus direitos — com atendimento <strong className="text-white font-semibold">100% online em todo o Brasil</strong>.
              </p>
            </div>

            {/* Interactive Service Pop-up Quick Triggers */}
            <div className="flex flex-wrap gap-2 pt-1">
              <button
                onClick={() => onOpenServiceModal('desbloqueio')}
                className="px-3 py-1.5 rounded-full text-xs font-medium bg-white/5 hover:bg-gold-500/20 text-gray-200 hover:text-gold-300 border border-white/10 hover:border-gold-500/40 transition-all flex items-center gap-1.5"
              >
                <span>🔓 Desbloqueio de Contas</span>
                <ArrowUpRight className="w-3 h-3 text-gold-400" />
              </button>
              <button
                onClick={() => onOpenServiceModal('plano-saude')}
                className="px-3 py-1.5 rounded-full text-xs font-medium bg-white/5 hover:bg-gold-500/20 text-gray-200 hover:text-gold-300 border border-white/10 hover:border-gold-500/40 transition-all flex items-center gap-1.5"
              >
                <span>🏥 Revisão de Plano</span>
                <ArrowUpRight className="w-3 h-3 text-gold-400" />
              </button>
              <button
                onClick={() => onOpenServiceModal('medicamento')}
                className="px-3 py-1.5 rounded-full text-xs font-medium bg-white/5 hover:bg-gold-500/20 text-gray-200 hover:text-gold-300 border border-white/10 hover:border-gold-500/40 transition-all flex items-center gap-1.5"
              >
                <span>💉 Negativa de Remédio/Cirurgia</span>
                <ArrowUpRight className="w-3 h-3 text-gold-400" />
              </button>
            </div>

            {/* Primary Action Button */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={() => handleWhatsApp()}
                className="btn-magnetic px-7 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 hover:from-gold-300 hover:to-gold-500 text-midnight-950 font-extrabold text-sm sm:text-base tracking-wide flex items-center justify-center gap-2.5 shadow-xl shadow-gold-500/25 group"
              >
                <span>Fale agora com um advogado – Avaliação gratuita</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </div>

            {/* Trust Proof Badges */}
            <div className="flex flex-wrap items-center gap-3 text-[11px] sm:text-xs font-mono text-gray-400 pt-1">
              <span className="flex items-center gap-1 text-gold-400 font-semibold">
                <Star className="w-3.5 h-3.5 fill-gold-400 text-gold-400" />
                OAB/BA 60.205
              </span>
              <span className="text-gray-600">•</span>
              <span className="flex items-center gap-1 text-gray-300">
                <Clock className="w-3.5 h-3.5 text-gold-400" />
                Resposta em até 24h
              </span>
              <span className="text-gray-600">•</span>
              <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Atendimento 100% Online
              </span>
            </div>

          </div>

          {/* Center/Right Column: Lawyer Image & Trust Card (Exact composition from Behance) */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex items-center justify-center min-h-[380px] sm:min-h-[460px] lg:min-h-[500px]">
            
            {/* Ambient Portrait Spotlight Glow */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[340px] sm:w-[440px] h-[340px] sm:h-[440px] rounded-full bg-gradient-to-tr from-blue-900/40 via-gold-500/10 to-transparent blur-3xl" />
            </div>

            {/* Lawyer Portrait (Rendered with gradient mask at bottom) */}
            <div className="relative w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[430px] aspect-[4/5] mx-auto z-10 flex items-end justify-center">
              
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=85"
                alt="Dr. Henrique Leonel - Advogado OAB/BA 60.205"
                className="w-full h-full object-cover object-top drop-shadow-2xl rounded-b-[2rem]"
                style={{
                  maskImage: 'linear-gradient(to bottom, black 72%, transparent 98%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 72%, transparent 98%)'
                }}
              />

              {/* Tag below lawyer */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-[#0A101D]/90 backdrop-blur-md border border-gold-500/40 text-center whitespace-nowrap shadow-lg">
                <p className="text-xs font-bold text-white tracking-wide">Dr. Henrique Leonel</p>
                <p className="text-[10px] font-mono text-gold-400">OAB/BA 60.205 • Sócio Fundador</p>
              </div>
            </div>

            {/* Floating Trust / Review Card (1:1 with Behance Screenshot on the right) */}
            <div className="absolute -top-2 sm:top-10 right-0 sm:-right-4 max-w-[210px] sm:max-w-[230px] p-3.5 rounded-2xl bg-[#0F172A]/95 backdrop-blur-xl border border-gold-500/30 shadow-2xl shadow-black/80 z-20 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-[11px] font-bold text-blue-600 shadow-sm">
                    G
                  </span>
                  <span className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center text-[11px] font-bold text-white shadow-sm">
                    f
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="flex text-amber-400 text-xs">
                    {'★'.repeat(5)}
                  </div>
                  <span className="text-[11px] font-mono font-bold text-white">4.9</span>
                </div>
              </div>
              <p className="text-[11px] text-gray-300 font-sans leading-tight">
                Orientação jurídica estratégica com foco em resultados ágeis para seu caso.
              </p>
              <button
                onClick={() => handleWhatsApp()}
                className="w-full py-1.5 px-2.5 rounded-lg bg-gradient-to-r from-gold-400 to-gold-600 text-midnight-950 font-bold text-[11px] flex items-center justify-center gap-1 hover:brightness-110 transition-all"
              >
                <span>Avaliação Gratuita</span>
                <ArrowUpRight className="w-3 h-3" />
              </button>
            </div>

          </div>

        </div>

      </div>

      {/* Bottom Hero Stats Bar (Exact 1:1 replica of Behance stats bar with 4 metrics) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-5 px-6 sm:px-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-md divide-y md:divide-y-0 md:divide-x divide-white/10">
          
          <div className="flex items-center gap-3 pr-4">
            <span className="w-9 h-9 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 shrink-0">
              <Award className="w-4 h-4" />
            </span>
            <div>
              <p className="text-xl sm:text-2xl font-bold font-sans text-white">10+</p>
              <p className="text-[11px] sm:text-xs text-gray-400 font-mono">Anos de Atuação</p>
            </div>
          </div>

          <div className="flex items-center gap-3 pt-3 md:pt-0 md:px-4">
            <span className="w-9 h-9 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 shrink-0">
              <CheckCircle2 className="w-4 h-4" />
            </span>
            <div>
              <p className="text-xl sm:text-2xl font-bold font-sans text-white">95%</p>
              <p className="text-[11px] sm:text-xs text-gray-400 font-mono">Taxa de Êxito</p>
            </div>
          </div>

          <div className="flex items-center gap-3 pt-3 md:pt-0 md:px-4">
            <span className="w-9 h-9 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 shrink-0">
              <MessageSquare className="w-4 h-4" />
            </span>
            <div>
              <p className="text-xl sm:text-2xl font-bold font-sans text-white">250+</p>
              <p className="text-[11px] sm:text-xs text-gray-400 font-mono">Casos Concluídos</p>
            </div>
          </div>

          <div className="flex items-center gap-3 pt-3 md:pt-0 md:pl-4">
            <span className="w-9 h-9 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 shrink-0">
              <Shield className="w-4 h-4" />
            </span>
            <div>
              <p className="text-xl sm:text-2xl font-bold font-sans text-white">100%</p>
              <p className="text-[11px] sm:text-xs text-gray-400 font-mono">Atendimento Online</p>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
