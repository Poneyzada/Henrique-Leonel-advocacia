import React, { useState } from 'react';
import { ArrowUpRight, Clock, FileCheck, CheckCircle2 } from 'lucide-react';

export default function LegalWorksTable({ onOpenServiceModal, onOpenIntake }) {
  const [filter, setFilter] = useState('todos');

  const works = [
    {
      id: 'desbloqueio',
      title: 'Desbloqueio de Saldo em App de Entrega/Mobilidade',
      category: 'DIREITO DIGITAL & APPS',
      date: 'NOV 2025',
      timeframe: 'Tutela em 72h',
      status: 'Liminar Concedida',
      summary: 'Reversão de desativação arbitrária e liberação de saldo de trabalho com indenização por lucros cessantes.',
      isHighlighted: false,
    },
    {
      id: 'medicamento',
      title: 'Fornecimento de Medicamento Oncológico de Alto Custo',
      category: 'DIREITO À SAÚDE',
      date: 'OUT 2025',
      timeframe: 'Decisão em 48h',
      status: 'Cumprimento Imediato',
      summary: 'Ordem judicial contra plano de saúde para custeio integral de fármaco importado negado por falta no rol da ANS.',
      isHighlighted: false,
    },
    {
      id: 'plano-saude',
      title: 'Ação Revisional de Mensalidade por Faixa Etária (59 Anos)',
      category: 'DIREITO DO CONSUMIDOR',
      date: 'SET 2025',
      timeframe: 'Redução de 45%',
      status: 'Restituição dos Pagos',
      summary: 'Anulação de cláusula abusiva de reajuste desproporcional com restituição dos valores pagos nos últimos 3 anos.',
      isHighlighted: true, // Signature highlighted gold row from Behance screenshot!
      thumbnail: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=300&q=80',
    },
    {
      id: 'desbloqueio',
      title: 'Desbloqueio de Conta Corrente Bancária e Salário',
      category: 'DIREITO BANCÁRIO',
      date: 'AGO 2025',
      timeframe: 'Liminar Urgente',
      status: 'Saldo Liberado',
      summary: 'Restabelecimento do acesso à conta travada por análise de segurança infundada de instituição financeira.',
      isHighlighted: false,
    },
    {
      id: 'medicamento',
      title: 'Cobertura de Cirurgia Robótica e Internação em UTI',
      category: 'URGÊNCIA HOSPITALAR',
      date: 'JUL 2025',
      timeframe: 'Plantão Judiciário',
      status: 'Ordem Liminar',
      summary: 'Operadora obrigada a autorizar procedimento cirúrgico vital sob pena de multa diária de R$ 5.000.',
      isHighlighted: false,
    }
  ];

  const filteredWorks = filter === 'todos' 
    ? works 
    : works.filter(w => w.id === filter);

  return (
    <section id="casos" className="py-20 sm:py-28 bg-[#FAF8F5] text-midnight-950 border-t border-gray-200/80">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (1:1 with Behance Screenshot: "Some Of My Legal Works") */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-gray-200">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-gray-300 bg-white text-xs font-mono font-medium text-gray-700 tracking-wider mb-3">
              <span>THE WORKS I AM PROUD OF • CASOS DE SUCESSO</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-sans tracking-tight text-midnight-950">
              Some Of My <span className="text-[#C9A84C]">Legal Works</span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <p className="text-xs sm:text-sm text-gray-600 max-w-xs">
              Explore uma seleção de casos e soluções que conduzimos com rigor técnico, rapidez e sucesso comprovado.
            </p>
            <button
              onClick={() => onOpenServiceModal('desbloqueio')}
              className="btn-magnetic px-6 py-3 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-300 hover:to-gold-500 text-midnight-950 font-bold text-xs sm:text-sm tracking-wide shadow-md shadow-gold-500/20 flex items-center justify-center gap-1.5 whitespace-nowrap"
            >
              <span>Ver Pop-ups dos Serviços</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar py-6">
          <button
            onClick={() => setFilter('todos')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              filter === 'todos'
                ? 'bg-midnight-950 text-white shadow-md'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            Todos os Casos
          </button>
          <button
            onClick={() => setFilter('desbloqueio')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              filter === 'desbloqueio'
                ? 'bg-gold-500 text-midnight-950 shadow-md font-bold'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            🔓 Desbloqueio de Contas
          </button>
          <button
            onClick={() => setFilter('plano-saude')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              filter === 'plano-saude'
                ? 'bg-gold-500 text-midnight-950 shadow-md font-bold'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            🏥 Revisão de Planos de Saúde
          </button>
          <button
            onClick={() => setFilter('medicamento')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              filter === 'medicamento'
                ? 'bg-gold-500 text-midnight-950 shadow-md font-bold'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            💉 Negativas de Tratamentos
          </button>
        </div>

        {/* Table Header (1:1 with Behance Screenshot: Titles, Categories, Date) */}
        <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-3 text-xs font-mono font-bold text-gray-500 uppercase tracking-wider border-b border-gray-200">
          <div className="col-span-6">Titles (Título do Caso)</div>
          <div className="col-span-3">Categories (Categoria)</div>
          <div className="col-span-2">Date (Data / Prazo)</div>
          <div className="col-span-1 text-right">Ação</div>
        </div>

        {/* Table Rows (With the signature Gold Highlighted Row from Behance) */}
        <div className="space-y-2 pt-2">
          {filteredWorks.map((work, idx) => {
            const isHighlight = work.isHighlighted;

            return (
              <div
                key={idx}
                onClick={() => {
                  if (onOpenIntake) {
                    onOpenIntake({
                      service: work.id,
                      origin: `Site Principal - Tabela de Casos: ${work.title}`
                    });
                  } else {
                    onOpenServiceModal(work.id);
                  }
                }}
                className={`group grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 px-4 sm:px-6 py-5 sm:py-6 items-center rounded-2xl transition-all duration-300 cursor-pointer ${
                  isHighlight
                    ? 'bg-[#C9A84C] text-midnight-950 shadow-xl shadow-gold-500/25 scale-[1.01]'
                    : 'bg-white hover:bg-gray-50 text-midnight-950 border border-gray-200/80 shadow-sm hover:shadow-md'
                }`}
              >
                {/* Title & Summary */}
                <div className="md:col-span-6 flex items-center gap-3">
                  {isHighlight && work.thumbnail && (
                    <img
                      src={work.thumbnail}
                      alt={work.title}
                      className="w-12 h-12 rounded-xl object-cover shrink-0 border-2 border-white/60 shadow-md hidden sm:block"
                    />
                  )}
                  <div>
                    <h4 className={`text-base sm:text-lg font-bold font-sans ${isHighlight ? 'text-midnight-950' : 'text-midnight-950 group-hover:text-gold-600 transition-colors'}`}>
                      {work.title}
                    </h4>
                    <p className={`text-xs mt-1 line-clamp-1 ${isHighlight ? 'text-midnight-900/90 font-medium' : 'text-gray-500'}`}>
                      {work.summary}
                    </p>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="md:col-span-3 flex items-center">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-mono font-bold tracking-wider uppercase ${
                      isHighlight
                        ? 'bg-midnight-950/15 text-midnight-950 border border-midnight-950/30'
                        : 'bg-gray-100 text-gray-800 border border-gray-200'
                    }`}
                  >
                    {work.category}
                  </span>
                </div>

                {/* Date / Timeframe */}
                <div className="md:col-span-2 flex items-center gap-2">
                  <span className={`text-xs font-mono font-bold ${isHighlight ? 'text-midnight-950' : 'text-gray-800'}`}>
                    {work.date}
                  </span>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${isHighlight ? 'bg-midnight-950/10 text-midnight-950 font-semibold' : 'bg-emerald-50 text-emerald-700'}`}>
                    {work.timeframe}
                  </span>
                </div>

                {/* Action Arrow */}
                <div className="md:col-span-1 flex items-center justify-end">
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 ${
                      isHighlight
                        ? 'bg-midnight-950 text-gold-400 group-hover:scale-110 shadow-md'
                        : 'border border-gray-300 group-hover:border-gold-500 group-hover:bg-gold-500 group-hover:text-midnight-950 text-gray-700'
                    }`}
                  >
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Informative Note */}
        <div className="mt-8 p-4 rounded-2xl bg-white border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <p className="flex items-center gap-2">
            <FileCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>
              Precisa de ajuda com um caso semelhante? Abrimos uma <strong>análise jurídica prévia sem nenhum custo</strong> para avaliar os documentos.
            </span>
          </p>
          <button
            onClick={() => onOpenServiceModal('desbloqueio')}
            className="text-gold-600 font-bold hover:underline whitespace-nowrap"
          >
            Abrir Detalhamento Jurídico ↗
          </button>
        </div>

      </div>
    </section>
  );
}
