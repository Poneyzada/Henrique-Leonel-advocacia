import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ArrowUpRight } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'Preciso ir até o escritório em Salvador?',
      a: 'Não. Todo o atendimento é realizado 100% online por WhatsApp, e-mail ou videochamada. Atuamos com processo eletrônico judicial em todas as comarcas e tribunais do Brasil, permitindo defender seus direitos independentemente de onde você mora.'
    },
    {
      q: 'Quanto tempo demora para reverter um bloqueio de conta ou saldo retido?',
      a: 'Cada caso possui particularidades, mas para situações de bloqueio ilegal e verbas alimentares, atuamos com Pedido de Tutela Provisória de Urgência (Liminar). Juízes costumam analisar esses pedidos de urgência com máxima celeridade, muitas vezes entre 48h e 72h.'
    },
    {
      q: 'Meu plano de saúde pode negar um tratamento prescrito pelo médico?',
      a: 'Na grande maioria dos casos, a negativa é abusiva e ilegal. A jurisprudência consolidada do Superior Tribunal de Justiça (STJ) determina que quem decide o tratamento ou medicamento adequado para o paciente é o médico assistente, e não a operadora de saúde. O chamado "rol da ANS" não pode restringir o direito à vida.'
    },
    {
      q: 'Quanto custa a avaliação inicial do meu caso?',
      a: 'A avaliação inicial é 100% gratuita e sem nenhum compromisso. Nossa equipe analisa os fatos e documentos enviados para diagnosticar a viabilidade jurídica da ação antes de qualquer contratação.'
    },
    {
      q: 'Como posso enviar minha documentação com segurança?',
      a: 'Você pode enviar diretamente em formato digital (foto ou PDF) pelo nosso canal oficial de WhatsApp ou por e-mail. Seus dados e documentos são protegidos sob rigoroso sigilo profissional da OAB e pelas normas da Lei Geral de Proteção de Dados (LGPD).'
    }
  ];

  const handleWhatsApp = () => {
    const msg = encodeURIComponent('Olá Dr. Henrique! Gostaria de tirar uma dúvida sobre meu caso.');
    window.open(`https://wa.me/5571999999999?text=${msg}`, '_blank');
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#FAF8F5] text-midnight-950 border-t border-gray-200">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-300 bg-white text-xs font-mono font-medium text-gray-700 tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-gold-600" />
            <span>PERGUNTAS FREQUENTES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-sans tracking-tight text-midnight-950">
            Dúvidas mais <span className="font-serif italic text-gold-600 font-normal">comuns</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-600">
            Esclareça rapidamente os principais pontos sobre nossa atuação jurídica 100% online.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-gray-200/90 bg-white overflow-hidden transition-all duration-200 shadow-sm"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-gray-50/80 transition-colors"
                >
                  <span className="font-bold text-base sm:text-lg text-midnight-950 font-sans">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-gold-500 text-midnight-950' : 'text-gray-600'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-gray-600 leading-relaxed border-t border-gray-100 animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions? */}
        <div className="mt-10 p-6 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold text-midnight-950">
              Ainda tem alguma dúvida específica sobre a sua situação?
            </h4>
            <p className="text-xs text-gray-600">
              Nossa equipe responde diretamente no WhatsApp com total agilidade.
            </p>
          </div>
          <button
            onClick={handleWhatsApp}
            className="btn-magnetic px-5 py-2.5 rounded-full bg-midnight-950 hover:bg-gold-500 hover:text-midnight-950 text-white font-bold text-xs tracking-wide transition-colors flex items-center gap-1.5 shrink-0"
          >
            <span>Perguntar no WhatsApp</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
}
