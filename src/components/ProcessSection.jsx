import React from 'react';
import { CalendarCheck, FileText, HardHat, Sparkles, CheckCircle, ArrowRight } from 'lucide-react';

export default function ProcessSection({ onSchedule }) {
  const handleMagicMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty('--magic-x', `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty('--magic-y', `${event.clientY - rect.top}px`);
  };

  const steps = [
    {
      number: '01',
      title: 'Free On-Site Assessment',
      icon: CalendarCheck,
      description: 'Our certified arborist inspects your trees, evaluates structural risk, and measures job complexity.',
      highlight: 'Same-day or next-day scheduling in Buffalo, NY.',
    },
    {
      number: '02',
      title: 'Transparent Written Quote',
      icon: FileText,
      description: 'You receive a detailed digital quote covering labor, equipment, insurance, and debris removal.',
      highlight: 'Zero hidden fees. Price lock guarantee.',
    },
    {
      number: '03',
      title: 'Safe Precision Work',
      icon: HardHat,
      description: 'Our insured team arrives with heavy bucket trucks, cranes, and protective ground mats to safeguard your lawn.',
      highlight: 'Full OSHA & ANSI A300 safety compliance.',
    },
    {
      number: '04',
      title: 'Zero-Trace Debris Clean',
      icon: Sparkles,
      description: 'We chip branches, rake your turf, haul away heavy timber, and conduct a final walkthrough with you.',
      highlight: '100% satisfaction before final payment.',
    },
  ];

  return (
    <section className="static-tree-bg static-tree-bg--forest py-24 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="pill-badge mb-4">
            <span>Seamless Service Experience</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-slate-950 tracking-tight mb-4">
            How We Work: From <br className="hidden sm:inline" />
            <span className="text-gradient-metallic">Inspection to Clean Property</span>
          </h2>
          
          <p className="text-base text-slate-600">
            Our 4-step process ensures complete safety, transparent pricing, and zero hassle for Buffalo homeowners.
          </p>
        </div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => {
            const IconComp = step.icon;
            return (
              <div
                key={idx}
                onPointerMove={handleMagicMove}
                className="magic-bento-card glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-slate-200/80 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="magic-bento-glow" aria-hidden="true" />
                <div className="magic-bento-particles" aria-hidden="true">
                  {[0, 1, 2, 3, 4, 5].map((particle) => <i key={particle} style={{ '--particle': particle }} />)}
                </div>
                <div className="magic-bento-content">
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-display font-extrabold text-3xl text-slate-300 group-hover:text-forest-600 transition-colors">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-950 group-hover:bg-slate-950 group-hover:text-forest-400 transition-all">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-display font-bold text-lg text-slate-950 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Highlight Ribbon */}
                <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-[11px] font-semibold text-forest-800">
                  <CheckCircle className="w-3.5 h-3.5 text-forest-600 flex-shrink-0" />
                  <span>{step.highlight}</span>
                </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout */}
        <div className="mt-16 text-center">
          <button
            onClick={onSchedule}
            className="inline-flex items-center gap-3 bg-slate-950 hover:bg-forest-700 text-white px-8 py-4 rounded-full font-semibold text-sm transition-all shadow-xl hover:shadow-2xl"
          >
            <span>Start Your 4-Step Tree Care Plan</span>
            <ArrowRight className="w-4 h-4 text-forest-400" />
          </button>
        </div>

      </div>
    </section>
  );
}
