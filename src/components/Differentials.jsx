import React from 'react';
import { Globe2, Scale, Users, Zap, ShieldCheck } from 'lucide-react';

export default function Differentials() {
  const diffs = [
    {
      icon: <Globe2 className="w-6 h-6 text-gold-600" />,
      title: 'Atendimento Nacional',
      desc: 'Atuamos para clientes em qualquer estado do Brasil, com infraestrutura jurídica 100% digital e segura.'
    },
    {
      icon: <Scale className="w-6 h-6 text-gold-600" />,
      title: 'Especialização Focada',
      desc: 'Expertise aprofundada em Direito Cível, Consumidor e Previdenciário com estratégias alinhadas às últimas súmulas dos tribunais.'
    },
    {
      icon: <Users className="w-6 h-6 text-gold-600" />,
      title: 'Atendimento Humanizado',
      desc: 'Comunicação empática e linguagem acessível. Explicamos cada etapa do processo sem jargões ou juridiquês complicado.'
    },
    {
      icon: <Zap className="w-6 h-6 text-gold-600" />,
      title: 'Agilidade em Urgências',
      desc: 'Prioridade máxima para casos que envolvem bloqueio de patrimônio, remédios vitais e cirurgias com plantão judiciário.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-gold-600" />,
      title: 'Sigilo & Confidencialidade',
      desc: 'Tratamento rigoroso de seus dados e documentos conforme a LGPD e o Código de Ética e Disciplina da OAB.'
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#FAF8F5] text-midnight-950">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-300 bg-white text-xs font-mono font-medium text-gray-700 tracking-wider mb-3">
            <span>DIFERENCIAIS COMPETITIVOS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-sans tracking-tight text-midnight-950">
            Por que escolher a <span className="font-serif italic text-gold-600 font-normal">Henrique Leonel?</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-600">
            Conheça os pilares éticos e operacionais que transformam a experiência jurídica dos nossos clientes em tranquilidade e vitória.
          </p>
        </div>

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {diffs.map((diff, index) => (
            <div
              key={index}
              className={`p-7 rounded-[2rem] bg-white border border-gray-200/80 hover:border-gold-500/40 shadow-card-light hover:shadow-xl transition-all duration-300 flex flex-col justify-between ${
                index === 0 ? 'lg:col-span-1' : ''
              }`}
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center mb-5">
                  {diff.icon}
                </div>
                <h3 className="text-xl font-bold font-sans text-midnight-950 mb-2">
                  {diff.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {diff.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-gray-100 flex items-center gap-2 text-xs font-mono text-gray-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Pilar Garantido</span>
              </div>
            </div>
          ))}

          {/* Quick Contact Card to fill the 6th slot in 3x2 grid */}
          <div className="p-7 rounded-[2rem] bg-gradient-to-br from-[#0A101D] to-[#121A2C] text-white border border-gold-500/30 shadow-xl flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-gold-400 font-bold uppercase tracking-wider">
                Consulte Nossos Advogados
              </span>
              <h3 className="text-xl font-bold font-sans text-white mt-2 mb-3">
                Quer tirar uma dúvida direta agora?
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Nossos canais oficiais de atendimento estão prontos para receber o seu relato com discrição e agilidade.
              </p>
            </div>

            <a
              href="https://wa.me/5571999999999?text=Ol%C3%A1%20Dr.%20Henrique%20Leonel!%20Gostaria%20de%20falar%20sobre%20meu%20caso."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-gold-500 hover:bg-gold-400 text-midnight-950 font-bold text-xs tracking-wide transition-all shadow-md shadow-gold-500/20"
            >
              <span>Falar no WhatsApp</span>
              <span>↗</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
