import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, Scale } from 'lucide-react';

export default function Navbar({ onOpenServiceModal, onOpenIntake }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Sobre', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Casos', href: '#casos' },
    { name: 'Como Funciona', href: '#como-funciona' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'FAQ', href: '#faq' },
  ];

  const handleWhatsApp = () => {
    if (onOpenIntake) {
      onOpenIntake({
        service: 'bloqueio',
        origin: 'Site Principal - Menu Navbar'
      });
      return;
    }
    const msg = encodeURIComponent('Olá Dr. Henrique Leonel! Gostaria de agendar uma avaliação gratuita do meu caso.');
    window.open(`https://wa.me/5571999999999?text=${msg}`, '_blank');
  };

  return (
    <header className="fixed top-4 sm:top-6 inset-x-0 z-40 flex justify-center px-3 sm:px-6 pointer-events-none">
      <nav 
        className={`pointer-events-auto w-full max-w-6xl transition-all duration-300 rounded-full px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between border ${
          scrolled 
            ? 'bg-[#0A101D]/90 backdrop-blur-xl border-gold-500/25 shadow-2xl shadow-black/50 text-white' 
            : 'bg-white/10 backdrop-blur-md border-white/15 text-white'
        }`}
      >
        {/* Official Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="h-10 w-10 rounded-xl bg-white/5 border border-gold-500/30 p-1 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform overflow-hidden shadow-sm">
            <img 
              src="/logo-semnome.png" 
              alt="Henrique Leonel Advocacia" 
              className="h-full w-full object-contain" 
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif tracking-[0.14em] font-bold text-sm sm:text-base text-white group-hover:text-gold-300 transition-colors uppercase leading-tight">
              Henrique Leonel
            </span>
            <span className="text-[9px] font-mono tracking-[0.2em] text-gray-300 uppercase leading-none hidden sm:block">
              Advocacia & Consultoria
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs lg:text-sm font-medium text-gray-300 hover:text-gold-400 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gold-400 hover:after:w-full after:transition-all"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right CTA Button */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleWhatsApp}
            className="btn-magnetic hidden sm:flex items-center gap-1.5 px-4 lg:px-5 py-2 lg:py-2.5 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-300 hover:to-gold-500 text-midnight-950 font-bold text-xs lg:text-sm tracking-wide shadow-md shadow-gold-500/20 group"
          >
            <span>Avaliação Gratuita</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:text-gold-400 transition-colors"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto absolute top-16 inset-x-3 sm:inset-x-6 bg-[#0A101D]/95 backdrop-blur-2xl border border-gold-500/30 rounded-3xl p-5 shadow-2xl md:hidden text-white flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium py-2 px-3 rounded-xl hover:bg-white/5 text-gray-200 hover:text-gold-400"
            >
              {link.name}
            </a>
          ))}
          <hr className="border-white/10 my-1" />
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              handleWhatsApp();
            }}
            className="w-full py-3 rounded-2xl bg-gradient-to-r from-gold-400 to-gold-600 text-midnight-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-gold-500/20"
          >
            <span>Falar no WhatsApp</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
}
