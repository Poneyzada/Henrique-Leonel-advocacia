import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      stars: 5,
      service: 'Desbloqueio de Conta & Saldo',
      text: 'Minha conta jurídica onde recebo os pagamentos da minha empresa foi travada repentinamente por uma fintech sem motivo. O Dr. Henrique entrou com o pedido de liminar e em menos de 72 horas meu saldo foi 100% liberado. Trabalho ágil e transparente!',
      author: 'Marcelo R.',
      location: 'Salvador / BA',
      verified: true
    },
    {
      stars: 5,
      service: 'Revisão de Plano de Saúde',
      text: 'Meu plano sofreu um aumento exorbitante de quase 70% na faixa dos 59 anos. O escritório analisou as faturas, ingressou com a ação e o juiz determinou a redução imediata da mensalidade, além de condenar o plano a devolver o que paguei a mais.',
      author: 'Cristina M.',
      location: 'São Paulo / SP',
      verified: true
    },
    {
      stars: 5,
      service: 'Liberação de Medicamento Oncológico',
      text: 'O plano de saúde negou um fármaco prescrito pelo oncologista sob a desculpa de não estar no rol da ANS. O Dr. Henrique ajuizou o pedido de urgência e conseguimos a liminar em 48 horas. Atendimento humano em um momento tão delicado.',
      author: 'Rodrigo A.',
      location: 'Belo Horizonte / MG',
      verified: true
    }
  ];

  return (
    <section id="depoimentos" className="py-20 sm:py-28 bg-[#FAF8F5] text-midnight-950 border-t border-gray-200">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 sm:mb-20">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-300 bg-white text-xs font-mono font-medium text-gray-700 tracking-wider mb-3">
              <span>AVALIAÇÕES & PROVA SOCIAL</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-sans tracking-tight text-midnight-950">
              O que nossos <span className="font-serif italic text-gold-600 font-normal">clientes dizem</span>
            </h2>
          </div>

          <div className="flex items-center gap-3 p-3 px-4 rounded-2xl bg-white border border-gray-200 shadow-sm">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <span className="text-xs font-mono font-bold text-gray-800">
              4.9 / 5.0 no Google Avaliações
            </span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="p-7 sm:p-8 rounded-[2rem] bg-white border border-gray-200/80 hover:border-gold-500/40 shadow-card-light hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(item.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-gold-500/30" />
                </div>

                <span className="inline-block text-[11px] font-mono uppercase tracking-wider text-gold-600 font-bold mb-3">
                  {item.service}
                </span>

                <p className="text-sm text-gray-700 leading-relaxed italic">
                  "{item.text}"
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-midnight-950 font-sans">
                    {item.author}
                  </h4>
                  <p className="text-xs text-gray-500 font-mono">
                    {item.location}
                  </p>
                </div>

                {item.verified && (
                  <span className="flex items-center gap-1 text-[11px] font-mono text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    <CheckCircle2 className="w-3 h-3" />
                    Verificado
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
