import React from 'react';
import { Scale, MapPin, Mail, ShieldCheck, ArrowUpRight } from 'lucide-react';

export default function Footer({ onOpenServiceModal }) {
  return (
    <footer className="bg-[#05080E] text-white pt-16 pb-12 rounded-t-[3rem] sm:rounded-t-[4rem] border-t border-gold-500/20 relative overflow-hidden">
      
      {/* Background ambient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 rounded-2xl bg-white/10 border border-gold-500/30 p-1.5 flex items-center justify-center shrink-0 overflow-hidden shadow-sm">
                <img 
                  src="/logo-semnome.png" 
                  alt="Henrique Leonel" 
                  className="h-full w-full object-contain" 
                />
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-extrabold text-lg tracking-tight text-white">
                  Henrique <span className="text-gold-400 font-serif italic font-normal">Leonel</span>
                </span>
                <span className="text-[10px] font-mono tracking-widest text-gray-400 uppercase -mt-1">
                  Advocacia & Consultoria
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-sm">
              Soluções jurídicas estratégicas e ágeis nas áreas Cível, Consumidor e Previdenciário. Atuação rápida para desbloqueio de contas bancárias e garantia de tratamentos e medicamentos de saúde.
            </p>

            <div className="space-y-1.5 text-xs font-mono text-gray-300">
              <p>OAB/BA 60.205</p>
              <p>CNPJ: 57.611.163/0001-28</p>
            </div>
          </div>

          {/* Practice Areas / Services Popups */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-gold-400">
              Áreas Prioritárias
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
              <li>
                <button
                  onClick={() => onOpenServiceModal('desbloqueio')}
                  className="hover:text-gold-400 transition-colors flex items-center gap-1.5"
                >
                  <span>🔓 Desbloqueio de Contas & Apps</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenServiceModal('plano-saude')}
                  className="hover:text-gold-400 transition-colors flex items-center gap-1.5"
                >
                  <span>🏥 Revisão de Plano de Saúde</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenServiceModal('medicamento')}
                  className="hover:text-gold-400 transition-colors flex items-center gap-1.5"
                >
                  <span>💉 Negativa de Medicamento/Cirurgia</span>
                </button>
              </li>
              <li>
                <a href="#servicos" className="hover:text-gold-400 transition-colors">
                  ⚖️ Direito Cível & Consumidor
                </a>
              </li>
            </ul>
          </div>

          {/* Institutional & Contact */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-gold-400">
              Sede & Atendimento
            </h4>
            
            <div className="space-y-3 text-xs sm:text-sm text-gray-300">
              <p className="flex items-start gap-2 text-gray-300">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>
                  Av. Tancredo Neves, 620, Empresarial Mundo Plaza, Sala 309, Caminho das Árvores – Salvador/BA
                </span>
              </p>

              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                <a href="mailto:contato@henriqueleonel.adv.br" className="hover:text-gold-400 transition-colors">
                  contato@henriqueleonel.adv.br
                </a>
              </p>

              <p className="flex items-center gap-2">
                <svg className="w-4 h-4 text-gold-400 shrink-0 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <a 
                  href="https://instagram.com/henrique_leonel" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-gold-400 transition-colors"
                >
                  @henrique_leonel
                </a>
              </p>
            </div>
          </div>

        </div>

        {/* System Status Operational Indicator (Mandatory prompt requirement) */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Status badge with pulsing green light */}
          <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-[11px] font-mono tracking-wider text-gray-300 uppercase">
              Sistema Operacional • Atendimento 100% Online em Todo o Brasil
            </span>
          </div>

          <p className="text-xs text-gray-400 font-mono">
            © {new Date().getFullYear()} Henrique Leonel Advocacia. Todos os direitos reservados.
          </p>
        </div>

        {/* OAB Legal Disclaimer */}
        <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-[11px] text-gray-400 leading-relaxed text-center sm:text-left">
          <p>
            <strong>Aviso Legal OAB:</strong> Este site possui caráter exclusivamente informativo e institucional, em estrita conformidade com o Provimento nº 205/2021 do Conselho Federal da OAB e o Código de Ética e Disciplina. As informações aqui contidas não configuram promessa ou garantia de resultado de processos judiciais. Cada caso é analisado individualmente conforme suas particularidades e a legislação vigente.
          </p>
        </div>

      </div>
    </footer>
  );
}
