import React from 'react';
import { ShieldCheck, Award, Clock, Star, ExternalLink, MapPin } from 'lucide-react';

export default function TrustBar() {
  const highlights = [
    {
      icon: ShieldCheck,
      title: '$2M Liability Insured',
      subtitle: 'Fully licensed in NY',
    },
    {
      icon: Award,
      title: '15+ Years Experience',
      subtitle: 'Certified arborists',
    },
    {
      icon: Clock,
      title: '24/7 Storm Response',
      subtitle: 'Emergency team ready',
    },
    {
      icon: Star,
      title: '5.0★ Google Rating',
      subtitle: '100+ Verified Reviews',
    },
  ];

  return (
    <section className="static-tree-bg py-8 bg-white text-slate-950 relative z-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
          {highlights.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div key={idx} className="flex items-center gap-3.5 group">
                <div className="w-11 h-11 rounded-2xl bg-forest-100 flex items-center justify-center text-forest-700 group-hover:bg-forest-600 group-hover:text-white transition-all duration-300">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-950 tracking-tight leading-tight">{item.title}</h4>
                  <p className="text-xs text-slate-500 mt-0.5">{item.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* GMP Link Ribbon */}
        <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2 text-slate-600">
            <MapPin className="w-4 h-4 text-forest-600" />
            <span>Serving Buffalo, NY & surrounding Erie County communities (77 Sheffield Ave, Buffalo, NY 14220)</span>
          </div>

          <a
            href="https://maps.app.goo.gl/HL9dPm6Km57adYJF8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-forest-700 hover:text-forest-900 font-semibold transition-colors group"
          >
            <span>View Business on Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
