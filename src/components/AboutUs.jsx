import React from 'react';
import { ShieldCheck, MapPin, Phone, Award, Trees, Users, CheckCircle2, Truck, ArrowUpRight } from 'lucide-react';

export default function AboutUs({ onNavigate }) {
  const stats = [
    { label: 'Years Serving Buffalo', value: '15+' },
    { label: 'Trees Removed & Trimmed', value: '4,500+' },
    { label: 'Satisfied Property Owners', value: '3,200+' },
    { label: 'On-Time Response Rate', value: '99.8%' },
  ];

  const values = [
    {
      title: 'Safety First Protocol',
      description: 'Every job site undergoes a comprehensive hazard analysis before any cutting begins.',
    },
    {
      title: 'Certified WNY Arborists',
      description: 'Our team stays updated on local tree species health, oak wilt prevention, and emerald ash borer treatments.',
    },
    {
      title: 'Modern Equipment Fleet',
      description: '75ft bucket trucks, high-capacity chippers, and turf protection gear minimize landscape footprint.',
    },
  ];

  return (
    <section id="about" className="static-tree-bg static-tree-bg--trunks py-16 sm:py-24 bg-gradient-to-br from-[#f4fbf6] via-[#f8fbff] to-[#eef7f2] text-slate-900 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Top Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center mb-10 sm:mb-16">
          
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/75 text-forest-700 border border-forest-200 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm backdrop-blur-sm">
              <Trees className="w-3.5 h-3.5" />
              <span>About Timberline Ridge</span>
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-slate-950 tracking-tight mb-6">
              Buffalo’s Premier Tree Service <br />
              <span className="text-gradient-forest">& Land Care Experts</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
              Founded and operated right here in Western New York, **Timberline Ridge Tree Services** has built a reputation for uncompromised safety, extreme precision, and transparent pricing.
            </p>

            <p className="text-sm text-slate-600 leading-relaxed mb-8">
              Whether handling massive storm-damaged oaks hanging over residential roofs or shaping ornamental maples for commercial plazas, our certified crew arrives equipped to execute flawlessly.
            </p>

            {/* Address Badge */}
            <div className="glass-card rounded-2xl p-4 flex flex-col items-start gap-4 border border-white/80 mb-8 shadow-lg shadow-emerald-900/5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-forest-600 text-white flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-950">Headquarters & Dispatch Hub</h3>
                  <p className="text-xs text-slate-600">77 Sheffield Ave, Buffalo, NY 14220</p>
                </div>
              </div>

              <a
                href="https://maps.app.goo.gl/HL9dPm6Km57adYJF8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-forest-700 hover:text-forest-900 transition-colors"
              >
                <span>Google Maps</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <button
                onClick={() => onNavigate('contact')}
                className="w-full bg-forest-600 hover:bg-forest-500 text-white px-7 py-3.5 rounded-full text-xs font-bold transition-all shadow-lg hover:scale-105 sm:w-auto"
              >
                Contact Our Team
              </button>

              <a
                href="tel:+17165078767"
                className="flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/80 px-6 py-3.5 text-xs font-bold text-slate-900 shadow-sm transition-all hover:bg-white sm:w-auto"
              >
                <Phone className="w-3.5 h-3.5 text-forest-400" />
                <span>+1 (716) 507-8767</span>
              </a>
            </div>
          </div>

          {/* Right Bento Box Stats & Values */}
          <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="glass-card rounded-2xl p-4 sm:p-6 border border-white/80 shadow-lg shadow-emerald-900/5 hover:-translate-y-1 transition-transform">
                  <div className="font-display font-extrabold text-3xl sm:text-4xl text-forest-700 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs font-medium text-slate-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Core Values List */}
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/80 space-y-4 shadow-xl shadow-emerald-900/5">
              <h3 className="text-sm font-bold text-slate-950 uppercase tracking-wider mb-2">Our Operational Promise</h3>
              
              {values.map((v, i) => (
                <div key={i} className="flex gap-3">
                  <CheckCircle2 className="w-4 h-4 text-forest-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">{v.title}</h4>
                    <p className="text-xs text-slate-600 leading-snug">{v.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
