import React from 'react';
import { ArrowRight, Phone, ShieldCheck, Trees } from 'lucide-react';
import ScrollExpand from './ScrollExpand';

const HERO_IMAGE = 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&fm=webp&w=960&q=72';
const HERO_IMAGE_SRCSET = [640, 960, 1400]
  .map(width => `https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&fm=webp&w=${width}&q=72 ${width}w`)
  .join(', ');

export default function Hero({ onNavigate }) {
  return (
    <section id="home" className="relative bg-[#eaf4ef]">
      <ScrollExpand
        src={HERO_IMAGE}
        srcSet={HERO_IMAGE_SRCSET}
        alt="Looking upward into a healthy green tree canopy"
        title={<h1 className="hero-gradient-heading">Precision Tree Care, Built Around<br />Safety.</h1>}
        scrollHint="Scroll to explore"
        startWidth={58}
        startHeight={60}
        mediaZoom={1.24}
        scrollDistance={1.05}
        holdDistance={0.3}
        smoothing={0.08}
        overlayScrim={0.76}
      >
        <div className="max-w-3xl">
          <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[.16em] backdrop-blur-md">
            <Trees className="h-4 w-4 text-emerald-300" /> Buffalo's certified tree-care specialists
          </div>
          <h2 className="font-display text-4xl font-extrabold tracking-tight sm:text-6xl">
            Safer trees. Stronger properties.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-lg">
            Expert removal, pruning, stump grinding and 24/7 storm response across Buffalo, New York.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button onClick={() => onNavigate('contact')} className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-emerald-100 sm:w-auto">
              Request Free Quote <ArrowRight className="h-4 w-4" />
            </button>
            <a href="tel:+17165078767" className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-md transition hover:bg-white/20 sm:w-auto">
              <Phone className="h-4 w-4" /> +1 (716) 507-8767
            </a>
          </div>
          <div className="mt-7 flex items-center justify-center gap-2 text-xs text-white/65">
            <ShieldCheck className="h-4 w-4 text-emerald-300" /> Fully insured · Licensed · 24/7 emergency response
          </div>
        </div>
      </ScrollExpand>
    </section>
  );
}
