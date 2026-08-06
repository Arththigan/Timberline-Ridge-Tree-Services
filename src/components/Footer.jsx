import React from 'react';
import { Phone, MapPin, ExternalLink, ArrowUpRight, ShieldCheck } from 'lucide-react';
import logoUrl from '../../timber_line_ridge_tree_services_logo-Photoroom.png';

export default function Footer({ setActiveTab, onLegalNavigate }) {
  const scrollToSection = (id) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 text-white pt-16 pb-12 relative overflow-hidden border-t border-slate-800">
      
      {/* Top Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-24 bg-forest-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info (2 columns on large) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="footer-logo-crop">
              <img src={logoUrl} alt="Timber Line Ridge Tree Services" />
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Buffalo's trusted arborists for hazardous tree removal, precision pruning, stump grinding, and 24/7 storm damage emergency response. Fully insured & certified.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-forest-400" />
              <span>NY Licensed & $2M Liability Insured</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-slate-400 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <button onClick={() => scrollToSection('home')} className="hover:text-forest-400 transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-forest-400 transition-colors">
                  Tree Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="hover:text-forest-400 transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="hover:text-forest-400 transition-colors">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Key Services */}
          <div>
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-slate-400 mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>Tree Removal</li>
              <li>Pruning & Trimming</li>
              <li>Stump Grinding</li>
              <li>24/7 Emergency Response</li>
              <li>Arborist Consultations</li>
            </ul>
          </div>

          {/* Contact Details & GMP */}
          <div>
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-slate-400 mb-4">
              Contact & Location
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              <div>
                <span className="text-slate-500 block text-[10px]">ADDRESS:</span>
                <span className="font-medium text-white">77 Sheffield Ave</span>
                <span className="block text-slate-400">Buffalo, NY 14220</span>
              </div>

              <div>
                <span className="text-slate-500 block text-[10px]">PHONE HOTLINE:</span>
                <a href="tel:+17165078767" className="font-bold text-forest-400 hover:text-forest-300 transition-colors">
                  +1 (716) 507-8767
                </a>
              </div>

              <a
                href="https://maps.app.goo.gl/HL9dPm6Km57adYJF8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-forest-400 hover:text-white font-semibold pt-1 transition-colors"
              >
                <span>Google Maps Business Link</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© 2026 Timberline Ridge Tree Services. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <button onClick={() => onLegalNavigate('privacy')} className="hover:text-forest-400 transition-colors">Privacy Policy</button>
            <button onClick={() => onLegalNavigate('terms')} className="hover:text-forest-400 transition-colors">Terms & Conditions</button>
          </div>
          <div className="flex items-center gap-6">
            <span>77 Sheffield Ave, Buffalo, NY 14220</span>
            <span>+1 (716) 507-8767</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
