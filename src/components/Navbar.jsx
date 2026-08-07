import React, { useState } from 'react';
import { Phone, Menu, X, ArrowUpRight, ShieldCheck, MapPin } from 'lucide-react';
import logoUrl from '../../timber_line_ridge_tree_services_logo-Photoroom.png';

export default function Navbar({ activeTab, setActiveTab }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleNavClick = (id) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="lucid-navbar-shell">
      <div className="lucid-navbar-wrap">
        <nav className="glass-nav lucid-navbar rounded-full px-3 sm:px-5 flex items-center justify-between">
          <div className="lucid-navbar-glow" aria-hidden="true" />
          
          {/* Brand Logo */}
          <button 
            onClick={() => handleNavClick('home')}
            className="min-w-0 flex items-center gap-2.5 group text-left focus:outline-none"
          >
            <div className="navbar-logo-crop" aria-label="Timber Line Ridge Tree Services">
              <img src={logoUrl} alt="Timber Line Ridge Tree Services" />
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 rounded-full bg-slate-100/60 p-1">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? 'bg-forest-800 text-white shadow-md'
                      : 'text-slate-700 hover:bg-forest-800 hover:text-white hover:shadow-md'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* Right Call Action & Mobile Toggle */}
          <div className="flex shrink-0 items-center gap-3">
            <a
              href="tel:+17165078767"
              className="hidden sm:inline-flex items-center gap-2 border border-forest-700 bg-forest-600 text-white px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-300 shadow-md hover:border-forest-800 hover:bg-forest-800 hover:text-white hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
            >
              <Phone className="w-3.5 h-3.5 text-white" />
              <span>+1 (716) 507-8767</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-10 h-10 rounded-full bg-forest-800 flex items-center justify-center text-white hover:bg-forest-600 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-4 top-20 z-40">
          <div className="glass-card rounded-3xl p-6 shadow-2xl border border-slate-200 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-left px-5 py-3 rounded-2xl text-sm font-semibold transition-all ${
                    activeTab === link.id
                      ? 'bg-slate-950 text-white'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-200/80 flex flex-col gap-3">
              <a
                href="tel:+17165078767"
                className="w-full flex items-center justify-center gap-2 bg-slate-950 text-white py-3.5 rounded-2xl text-sm font-semibold shadow-md"
              >
                <Phone className="w-4 h-4 text-forest-400" />
                <span>Call +1 (716) 507-8767</span>
              </a>

              <a
                href="https://maps.app.goo.gl/HL9dPm6Km57adYJF8"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-slate-100 text-slate-800 py-3 rounded-2xl text-xs font-semibold hover:bg-slate-200 transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-forest-700" />
                <span>77 Sheffield Ave, Buffalo, NY 14220</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
