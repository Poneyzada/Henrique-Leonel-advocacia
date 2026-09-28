import React from 'react';
import { Send, FileSearch, Compass, Laptop, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function Methodology() {
  const steps = [
    {
      num: '01',
      phase: 'FASE 01',
      title: 'Envie Seu Caso',
      desc: 'Mande uma mensagem direta no WhatsApp relatando brevemente sua situação e anexando os prints e comprovantes básicos.',
      badge: 'Contato Imediato',
      position: 'top-left'
    },
    {
      num: '02',
      phase: 'FASE 02',
      title: 'Avaliação Gratuita',
      desc: 'Nossa equipe jurídica analisa seus documentos e a viabilidade da ação em até 24 horas úteis, sem qualquer custo.',
      badge: 'Análise em até 24h',
      position: 'top-right'
    },
    {
      num: '03',
      phase: 'FASE 03',
      title: 'Estratégia Sem Juridiquês',
      desc: 'Você recebe um plano de ação claro com pedido de liminar para desbloqueio ou liberação médica emergencial.',
      badge: 'Plano de Ação Claro',
      position: 'bottom-left'
    },
    {
      num: '04',
      phase: 'FASE 04',
      title: 'Acompanhamento 100% Online',
      desc: 'Atuação combativa e suporte humanizado do protocolo inicial até a liberação final, você informado a cada passo.',
      badge: 'Do Início ao Fim',
      position: 'bottom-right'
    }
  ];

  const handleWhatsApp = () => {
    const msg = encodeURIComponent('Olá Dr. Henrique! Gostaria de enviar meu caso para avaliação gratuita.');
    window.open(`https://wa.me/5571999999999?text=${msg}`, '_blank');
  };

  return (
    <section id="como-funciona" className="py-20 sm:py-28 bg-[#090F1C] text-white relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-gold-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-0 right-10 w-96 h-96 bg-blue-900/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Massive Translucent Watermark Typography from Behance ("04 ETAPAS / AGILIDADE") */}
      <div className="absolute -bottom-10 -left-6 text-[90px] sm:text-[140px] lg:text-[180px] font-black text-white/[0.025] select-none pointer-events-none tracking-tighter font-sans">
        04 ETAPAS
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-gold-500/30 text-xs font-mono font-medium text-gold-400 tracking-wider mb-3">
            <span>THE PROCESS • COMO FUNCIONA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-sans tracking-tight text-white leading-tight">
            Simples, Rápido e <span className="text-[#C9A84C]">Sem Burocracia.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-300">
            Eliminamos todo o desgaste tradicional da advocacia com processos digitais fluidos, transparentes e focados no seu alívio imediato.
          </p>
        </div>

        {/* Curvy Timeline Diagram (Behance signature layout) */}
        <div className="relative">
          
          {/* Curving decorative connection line (SVG) on desktop */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none z-0">
            <svg className="w-full h-full" viewBox="0 0 1100 400" fill="none">
              <path
                d="M 240,110 C 380,40 460,190 600,110 C 740,30 820,170 960,110"
                stroke="#C9A84C"
                strokeWidth="2.5"
                strokeDasharray="8 6"
                opacity="0.4"
              />
              <circle cx="240" cy="110" r="7" fill="#C9A84C" />
              <circle cx="600" cy="110" r="7" fill="#C9A84C" />
              <circle cx="960" cy="110" r="7" fill="#C9A84C" />
            </svg>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="group p-6 sm:p-7 rounded-[2.2rem] bg-[#101826]/90 hover:bg-[#141E30] border border-white/10 hover:border-gold-500/40 shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[11px] font-mono font-bold text-gold-400 tracking-wider">
                      {step.phase}
                    </span>
                    <span className="text-3xl sm:text-4xl font-mono font-extrabold text-white/20 group-hover:text-gold-400 transition-colors">
                      {step.num}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold font-sans text-white mb-2.5 group-hover:text-gold-300 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-gray-400">
                  <span className="text-gold-400 font-semibold">{step.badge}</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Action Row */}
        <div className="mt-14 text-center">
          <button
            onClick={handleWhatsApp}
            className="btn-magnetic inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-300 hover:to-gold-500 text-midnight-950 font-bold text-sm tracking-wide shadow-xl shadow-gold-500/20 group"
          >
            <span>Iniciar Análise do Meu Caso Sem Custo</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </div>

      </div>
    </section>
  );
}
