import React from 'react';
import { ArrowUpRight, ShieldCheck, Quote, Scale, CheckCircle2 } from 'lucide-react';

export default function About({ onOpenServiceModal }) {
  const handleWhatsApp = () => {
    const msg = encodeURIComponent('Olá Dr. Henrique! Gostaria de conversar sobre meu caso e solicitar uma análise jurídica.');
    window.open(`https://wa.me/5571999999999?text=${msg}`, '_blank');
  };

  const painPoints = [
    {
      icon: '🏦',
      serviceKey: 'desbloqueio',
      badge: 'BANCÁRIO',
      title: 'Sua conta bancária ou digital foi bloqueada sem explicação?',
      desc: 'Bancos e fintechs que travam seu saldo e impedem você de acessar seu próprio dinheiro de subsistência.'
    },
    {
      icon: '💳',
      serviceKey: 'desbloqueio',
      badge: 'APLICATIVOS',
      title: 'Uber, iFood ou outro app reteve seus valores?',
      desc: 'Repasses retidos e contas de motoristas ou entregadores suspensas sem direito de defesa prévia.'
    },
    {
      icon: '🏥',
      serviceKey: 'medicamento',
      badge: 'SAÚDE & LIMINAR',
      title: 'Seu plano de saúde negou exame, cirurgia ou medicamento?',
      desc: 'Recusa indevida com desculpa de "ausência no rol da ANS", violando prescrições médicas vitais.'
    },
    {
      icon: '📄',
      serviceKey: 'plano-saude',
      badge: 'REAJUSTE ABUSIVO',
      title: 'Você recebeu um reajuste abusivo no seu plano de saúde?',
      desc: 'Aumentos excessivos por faixa etária (59 anos) ou sinistralidade coletiva sem base atuarial.'
    }
  ];

  return (
    <section id="sobre" className="relative py-20 sm:py-28 bg-[#FAF8F5] text-[#0D0D12]">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Split Header (1:1 with Behance Screenshot) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start pb-16 border-b border-gray-200">
          
          {/* Left Column: Badge & Stacked Headline */}
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-gray-300 bg-white text-xs font-mono font-medium text-gray-700 tracking-wider">
              <span>ABOUT ME • SOBRE O ESCRITÓRIO</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold font-sans tracking-tight text-midnight-950 leading-[1.12]">
              Construído na <br />
              Integridade, <br />
              Movido pela <br />
              <span className="text-[#C9A84C]">Justiça.</span>
            </h2>
          </div>

          {/* Right Column: Copy & CTA */}
          <div className="lg:col-span-7 space-y-5 lg:pl-6">
            <p className="text-base sm:text-lg text-gray-800 font-semibold leading-relaxed">
              Somos uma advocacia estratégica e focada no cliente, dedicada a proteger seus direitos e entregar soluções jurídicas ágeis, transparentes e orientadas a resultados concretos.
            </p>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Com experiência consolidada em causas Cíveis, Direito do Consumidor e Previdenciário, combinamos pensamento estratégico com execução rápida para guiar pessoas e empresas através de situações jurídicas de urgência com máxima confiança. Nosso compromisso é alcançar o desfecho favorável — porque o seu caso merece mais do que simples orientação; merece advocacia combativa.
            </p>

            <div className="pt-2">
              <button
                onClick={handleWhatsApp}
                className="btn-magnetic inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-300 hover:to-gold-500 text-midnight-950 font-bold text-sm tracking-wide shadow-md shadow-gold-500/20 group"
              >
                <span>Falar com um Especialista</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Lawyer Bio & Signature Quote Card (Inspired by Behance Case Study) */}
        <div className="pt-16 pb-12">
          <div className="rounded-[2.5rem] bg-white border border-gray-200/80 p-6 sm:p-10 shadow-card-light grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-4 flex flex-col items-center text-center">
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-gold-500/30 shadow-xl mb-4">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80"
                  alt="Dr. Henrique Leonel"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-midnight-950">Dr. Henrique Leonel</h3>
              <p className="text-xs font-mono text-gold-600 font-semibold">OAB/BA 60.205 • Especialista em Cível & Consumidor</p>
            </div>

            <div className="lg:col-span-8 flex flex-col justify-between space-y-4">
              <div className="relative pl-8 sm:pl-12">
                <Quote className="w-10 h-10 text-gold-500/30 absolute left-0 top-0 -translate-y-2" />
                <p className="text-base sm:text-lg text-gray-700 font-serif italic leading-relaxed">
                  "O direito não socorre aos que dormem. Quando uma conta é bloqueada sem aviso ou um remédio é negado no hospital, cada hora de espera é um prejuízo irreparável. Nossa missão é agir com agilidade cirúrgica para restabelecer a justiça na vida de cada cliente."
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-gray-500">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span>Atendimento 100% Online em Todo o Território Nacional</span>
                </div>
                <button
                  onClick={handleWhatsApp}
                  className="text-gold-600 font-bold hover:underline flex items-center gap-1"
                >
                  <span>Solicitar Consulta Imediata</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Section: Identificação com a Dor (Você não está sozinho) */}
        <div className="pt-8 sm:pt-12">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-gold-600">
              Identificação com o seu momento
            </span>
            <h3 className="mt-2 text-2xl sm:text-3xl font-extrabold text-midnight-950 tracking-tight">
              Você não está sozinho. Isso está acontecendo com milhares de pessoas.
            </h3>
            <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
              Bancos e aplicativos bloqueiam valores sem aviso prévio, muitas vezes sem justificativa clara. Ao mesmo tempo, planos de saúde negam cirurgias e remédios alegando ausência de cobertura — mesmo quando a lei garante seu direito.
            </p>
          </div>

          {/* 4 Pain Point Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {painPoints.map((item, idx) => (
              <div
                key={idx}
                onClick={() => onOpenServiceModal(item.serviceKey)}
                className="group relative p-6 rounded-[2rem] bg-white border border-gray-200/80 hover:border-gold-500/40 shadow-card-light hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-11 h-11 rounded-2xl bg-amber-50 group-hover:bg-gold-500/10 flex items-center justify-center text-2xl transition-colors">
                      {item.icon}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-gray-400 group-hover:text-gold-600 font-bold">
                      {item.badge}
                    </span>
                  </div>
                  
                  <h4 className="text-sm sm:text-base font-bold text-midnight-950 group-hover:text-gold-600 transition-colors leading-snug">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-xs text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-gold-600 group-hover:text-gold-700">
                  <span>Ver Solução Jurídica</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
