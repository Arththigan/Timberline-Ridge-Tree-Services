import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Services from './components/Services';
import ProcessSection from './components/ProcessSection';
import AboutUs from './components/AboutUs';
import Testimonials from './components/Testimonials';
import FAQSection from './components/FAQSection';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import LegalPage from './components/LegalPage';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [legalPage, setLegalPage] = useState(() => window.location.hash === '#privacy-policy' ? 'privacy' : window.location.hash === '#terms-conditions' ? 'terms' : null);

  useEffect(() => {
    const syncPage = () => setLegalPage(window.location.hash === '#privacy-policy' ? 'privacy' : window.location.hash === '#terms-conditions' ? 'terms' : null);
    window.addEventListener('popstate', syncPage);
    return () => window.removeEventListener('popstate', syncPage);
  }, []);

  const handleNavigate = (tabId) => {
    setLegalPage(null);
    window.history.pushState(null, '', `#${tabId}`);
    setActiveTab(tabId);
    window.setTimeout(() => document.getElementById(tabId)?.scrollIntoView({ behavior: 'smooth' }), 0);
  };

  const handleLegalNavigate = (page) => {
    setLegalPage(page);
    window.history.pushState(null, '', page === 'privacy' ? '#privacy-policy' : page === 'terms' ? '#terms-conditions' : '#home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="site-shell min-h-screen text-slate-900 flex flex-col font-sans selection:bg-forest-600 selection:text-white">
      <div className="site-ambient-background" aria-hidden="true" />
      <div className="site-fixed-worker-background" aria-hidden="true" />
      <div className="site-floating-decor" aria-hidden="true">
        <i className="site-decor-leaf site-decor-leaf--1" />
        <i className="site-decor-leaf site-decor-leaf--2" />
        <i className="site-decor-leaf site-decor-leaf--3" />
        <i className="site-decor-ring site-decor-ring--1" />
        <i className="site-decor-ring site-decor-ring--2" />
        <i className="site-decor-dot site-decor-dot--1" />
        <i className="site-decor-dot site-decor-dot--2" />
      </div>
      {/* Floating Glassmorphic Pill Navbar */}
      <Navbar activeTab={legalPage ? '' : activeTab} setActiveTab={handleNavigate} />

      {/* Main Content Sections */}
      {legalPage ? <LegalPage type={legalPage} onSwitch={handleLegalNavigate} /> : <main className="flex-grow">
        <Hero onNavigate={handleNavigate} />
        <TrustBar />
        <Services onSelectService={(id) => handleNavigate('contact')} />
        <ProcessSection onSchedule={() => handleNavigate('contact')} />
        <AboutUs onNavigate={handleNavigate} />
        <Testimonials />
        <FAQSection />
        <ContactUs />
      </main>}

      {/* Full Footer */}
      <Footer setActiveTab={handleNavigate} onLegalNavigate={handleLegalNavigate} />
    </div>
  );
}
