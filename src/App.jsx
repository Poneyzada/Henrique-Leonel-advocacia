import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ServicesCarousel from './components/ServicesCarousel';
import LegalWorksTable from './components/LegalWorksTable';
import Methodology from './components/Methodology';
import Differentials from './components/Differentials';
import Testimonials from './components/Testimonials';
import OfferBanner from './components/OfferBanner';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ServiceModal from './components/ServiceModal';

import LandingPageBloqueio from './pages/LandingPageBloqueio';
import LandingPagePlanoSaude from './pages/LandingPagePlanoSaude';
import LandingPageTratamento from './pages/LandingPageTratamento';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('desbloqueio');
  const [viewMode, setViewMode] = useState('main');
  const mainRef = useRef(null);

  // Check URL Path, Query Params or Hash
  useEffect(() => {
    const handleRoute = () => {
      const path = window.location.pathname.toLowerCase();
      const params = new URLSearchParams(window.location.search);
      const lpParam = params.get('lp');
      const servicoParam = params.get('servico') || params.get('service');
      const hash = window.location.hash.replace('#', '').toLowerCase();

      // Check if user requested a dedicated landing page for paid traffic
      if (lpParam === 'bloqueio' || lpParam === 'desbloqueio' || path === '/bloqueio-de-conta' || path === '/desbloqueio') {
        setViewMode('lp-bloqueio');
        window.scrollTo(0, 0);
        return;
      }
      if (lpParam === 'plano-saude' || lpParam === 'plano' || path === '/revisao-plano-de-saude' || path === '/plano-saude') {
        setViewMode('lp-plano-saude');
        window.scrollTo(0, 0);
        return;
      }
      if (lpParam === 'tratamento' || lpParam === 'medicamento' || path === '/negativa-de-tratamento' || path === '/medicamento') {
        setViewMode('lp-tratamento');
        window.scrollTo(0, 0);
        return;
      }

      // Default to main site
      setViewMode('main');

      // Check if hash or servico triggers the popup modal in the main site
      const target = hash || servicoParam;
      if (target === 'desbloqueio' || target === 'bloqueio' || target === 'uber' || target === 'ifood') {
        setActiveTab('desbloqueio');
        setModalOpen(true);
      } else if (target === 'plano-saude' || target === 'plano' || target === 'revisao-plano') {
        setActiveTab('plano-saude');
        setModalOpen(true);
      } else if (target === 'medicamento' || target === 'cirurgia' || target === 'tratamento' || target === 'negativa') {
        setActiveTab('medicamento');
        setModalOpen(true);
      }
    };

    handleRoute();
    window.addEventListener('popstate', handleRoute);
    window.addEventListener('hashchange', handleRoute);
    return () => {
      window.removeEventListener('popstate', handleRoute);
      window.removeEventListener('hashchange', handleRoute);
    };
  }, []);

  const handleOpenServiceModal = (tabId = 'desbloqueio') => {
    setActiveTab(tabId);
    setModalOpen(true);
    if (window.history.pushState) {
      window.history.pushState(null, '', `#${tabId}`);
    }
  };

  const handleCloseServiceModal = () => {
    setModalOpen(false);
    if (window.history.pushState) {
      window.history.pushState(null, '', window.location.pathname + window.location.search);
    }
  };

  const handleSelectTab = (tabId) => {
    setActiveTab(tabId);
    if (window.history.replaceState) {
      window.history.replaceState(null, '', `#${tabId}`);
    }
  };

  // GSAP Context Lifecycle for Main site
  useEffect(() => {
    if (viewMode !== 'main') return;

    const ctx = gsap.context(() => {
      const targets = gsap.utils.toArray('.gsap-fade-in');
      if (targets.length > 0) {
        gsap.from(targets, {
          opacity: 0,
          y: 25,
          duration: 0.9,
          stagger: 0.12,
          ease: 'power3.out'
        });
      }
    }, mainRef);

    return () => ctx.revert();
  }, [viewMode]);

  // Render Dedicated Landing Page 1 (Bloqueio de Contas)
  if (viewMode === 'lp-bloqueio') {
    return <LandingPageBloqueio />;
  }

  // Render Dedicated Landing Page 2 (Revisão de Planos de Saúde)
  if (viewMode === 'lp-plano-saude') {
    return <LandingPagePlanoSaude />;
  }

  // Render Dedicated Landing Page 3 (Negativa de Tratamento/Medicamento)
  if (viewMode === 'lp-tratamento') {
    return <LandingPageTratamento />;
  }

  // Render Master Landing Page (Robert / Henrique Leonel Style with Popups & Deep Links)
  return (
    <div ref={mainRef} className="relative min-h-screen bg-[#FAF8F5] text-[#0D0D12] overflow-x-hidden">
      
      {/* Floating Island Navigation */}
      <Navbar onOpenServiceModal={handleOpenServiceModal} />

      {/* Hero Section (100dvh Cinematic Blueprint) */}
      <Hero onOpenServiceModal={handleOpenServiceModal} />

      {/* About & Pain Points Identification */}
      <About onOpenServiceModal={handleOpenServiceModal} />

      {/* Services Carousel ("Trusted Expertise" in Dark Container) */}
      <ServicesCarousel onOpenServiceModal={handleOpenServiceModal} />

      {/* Some Of My Legal Works / Atuações Práticas Table */}
      <LegalWorksTable onOpenServiceModal={handleOpenServiceModal} />

      {/* How It Works / Methodology */}
      <Methodology />

      {/* Firm Differentials */}
      <Differentials />

      {/* Social Proof / Testimonials */}
      <Testimonials />

      {/* Risk-Free Offer Banner */}
      <OfferBanner />

      {/* FAQ Objection-Handling */}
      <FAQ />

      {/* High-Impact Closing CTA */}
      <FinalCTA />

      {/* Institutional Legal Footer */}
      <Footer onOpenServiceModal={handleOpenServiceModal} />

      {/* 24/7 Floating WhatsApp Assistant */}
      <FloatingWhatsApp />

      {/* 3-in-1 Dedicated Service Modal Pop-up (With Deep Links & Copyable URL) */}
      <ServiceModal
        isOpen={modalOpen}
        activeTab={activeTab}
        onClose={handleCloseServiceModal}
        onSelectTab={handleSelectTab}
      />

    </div>
  );
}
