import React, { useRef } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight, Lock, Scale, HeartPulse, ShieldAlert } from 'lucide-react';

export default function ServicesCarousel({ onOpenServiceModal, onOpenIntake }) {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollContainerRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const services = [
    {
      id: 'desbloqueio',
      badge: 'CORPORATIVO & APPS',
      title: 'Desbloqueio de Contas',
      desc: 'Atuação rápida para reverter bloqueios indevidos em contas bancárias tradicionais, fintechs (Nubank, Mercado Pago, PicPay) e aplicativos de motoristas e entregadores (Uber, iFood), buscando a liberação célere dos valores retidos.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80',
      icon: <Lock className="w-4 h-4 text-gold-400" />,
      isDarkCard: false,
    },
    {
      id: 'plano-saude',
      badge: 'CONTENCIOSO & SAÚDE',
      title: 'Revisão de Plano de Saúde',
      desc: 'Análise detalhada de reajustes exorbitantes por faixa etária (59 anos) ou sinistralidade, cancelamentos unilaterais indevidos e revisão de cláusulas para reequilibrar a sua relação com a operadora de saúde.',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80',
      icon: <Scale className="w-4 h-4 text-gold-400" />,
      isDarkCard: true, // Signature dark card from Behance shot
    },
    {
      id: 'medicamento',
      badge: 'URGÊNCIA & LIMINARES',
      title: 'Negativa de Tratamento',
      desc: 'Ação judicial com pedido de liminar imediata para assegurar o fornecimento de exames, cirurgias complexas, procedimentos e medicamentos prescritos pelo seu médico e recusados sob pretexto do "rol da ANS".',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80',
      icon: <HeartPulse className="w-4 h-4 text-gold-400" />,
      isDarkCard: false,
    },
    {
      id: 'desbloqueio',
      badge: 'CÍVEL & CONSUMIDOR',
      title: 'Direito do Consumidor & Defesa',
      desc: 'Defesa incisiva contra práticas abusivas de empresas, cobranças ilegais, negativação indevida nos órgãos de proteção ao crédito (SPC/Serasa) e busca por benefícios previdenciários justos.',
      image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=600&q=80',
      icon: <ShieldAlert className="w-4 h-4 text-gold-400" />,
      isDarkCard: false,
    },
  ];

  return (
    <section id="servicos" className="py-12 sm:py-20 px-3 sm:px-6 lg:px-8 bg-[#FAF8F5]">
      {/* Dark container with rounded-[3rem] 1:1 with Behance screenshot */}
      <div className="w-full max-w-7xl mx-auto bg-[#0A101D] text-white rounded-[2.5rem] sm:rounded-[3.5rem] p-6 sm:p-12 lg:p-16 border border-gold-500/20 shadow-2xl relative overflow-hidden">
        
        {/* Subtle background glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-900/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-gold-500/10 rounded-full blur-[120px] pointer-events-none" />

        {/* Section Header (1:1 with Behance Screenshot: "Trusted Expertise") */}
        <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono font-medium text-gold-400 tracking-wider">
              <span>NOSSAS ESPECIALIDADES • ÁREAS DE ATUAÇÃO</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-sans tracking-tight text-white">
              Atuação Jurídica <span className="text-[#C9A84C]">Especializada</span>
            </h2>
          </div>

          <div className="flex items-center gap-6">
            <p className="text-xs sm:text-sm text-gray-300 max-w-xs hidden sm:block">
              Soluções jurídicas seguras e combativas com comprovada agilidade e foco absoluto no resultado.
            </p>
            {/* Carousel Navigation Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => scroll('left')}
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-gold-500 hover:text-midnight-950 border border-white/15 flex items-center justify-center text-white transition-all duration-200"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll('right')}
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-gold-500 hover:text-midnight-950 border border-white/15 flex items-center justify-center text-white transition-all duration-200"
                aria-label="Próximo"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Cards Carousel with < ARRASTE > Badge */}
        <div className="relative">
          
          {/* Badge flutuante ARRASTE */}
          <div className="hidden lg:flex absolute -top-6 left-[58%] -translate-x-1/2 z-20 items-center justify-center">
            <div className="px-3.5 py-1.5 rounded-full bg-white text-midnight-950 text-[11px] font-mono font-extrabold shadow-2xl border border-gray-200 flex items-center gap-1.5 animate-pulse select-none">
              <span>‹</span>
              <span>ARRASTE</span>
              <span>›</span>
            </div>
          </div>

          <div 
            ref={scrollContainerRef}
            className="relative z-10 flex gap-6 overflow-x-auto no-scrollbar pb-6 snap-x snap-mandatory"
          >
            {services.map((item, index) => {
              const isDark = item.isDarkCard;
              return (
                <div
                  key={index}
                  onClick={() => onOpenServiceModal(item.id)}
                  className={`snap-start shrink-0 w-[290px] sm:w-[330px] lg:w-[350px] rounded-[2rem] p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 cursor-pointer group hover:-translate-y-2 ${
                    isDark
                      ? 'bg-[#101826] border-2 border-gold-500/50 shadow-2xl shadow-gold-500/10 text-white'
                      : 'bg-white text-midnight-950 border border-gray-100 shadow-xl'
                  }`}
                >
                  {/* Top Badge & Category */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className={`px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-mono font-bold tracking-wider uppercase ${
                          isDark 
                            ? 'bg-gold-500/20 text-gold-300 border border-gold-500/40' 
                            : 'bg-gray-100 text-gray-800 border border-gray-200'
                        }`}
                      >
                        {item.badge}
                      </span>
                      <span className="p-1.5 rounded-lg bg-gold-500/10">
                        {item.icon}
                      </span>
                    </div>

                    {/* Card Title */}
                    <h3 className={`text-xl sm:text-2xl font-bold font-sans tracking-tight mb-3 ${isDark ? 'text-white' : 'text-midnight-950'}`}>
                      {item.title}
                    </h3>

                    {/* Card Image in rounded frame */}
                    <div className="relative w-full h-40 sm:h-44 rounded-2xl overflow-hidden my-3">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    </div>

                    {/* Card Description */}
                    <p className={`text-xs sm:text-sm line-clamp-3 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                      {item.desc}
                    </p>
                  </div>

                  {/* Bottom Action Row with Circle Arrow Button */}
                  <div className="mt-6 pt-4 border-t border-gray-200/20 flex items-center justify-between gap-2">
                    <span className={`text-xs font-semibold ${isDark ? 'text-gold-400' : 'text-midnight-900 group-hover:text-gold-600'}`}>
                      Ver Como Atuamos
                    </span>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (onOpenIntake) {
                            onOpenIntake({
                              service: item.id,
                              origin: `Site Principal - Carrossel ${item.title}`
                            });
                          } else {
                            onOpenServiceModal(item.id);
                          }
                        }}
                        className="px-3 py-1.5 rounded-xl bg-gold-500 hover:bg-gold-400 text-midnight-950 font-bold text-xs flex items-center gap-1 shadow-sm transition-all"
                        title="Iniciar avaliação jurídica gratuita"
                      >
                        <span>Avaliar</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </button>
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                          isDark
                            ? 'bg-white/10 text-white'
                            : 'border border-gray-300 text-midnight-900'
                        }`}
                      >
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

        {/* Bottom Helper Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10 text-xs text-gray-400">
          <p className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            Clique em qualquer card para abrir o pop-up com as etapas e documentos necessários.
          </p>
          <button
            onClick={() => onOpenServiceModal('desbloqueio')}
            className="text-gold-400 hover:text-gold-300 font-semibold underline underline-offset-4 flex items-center gap-1"
          >
            <span>Ver detalhes de todos os serviços prioritários</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
}
