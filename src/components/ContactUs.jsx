import React, { useEffect } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function ContactUs() {
  useEffect(() => {
    const scriptId = 'kdlead-form-embed-script';
    if (document.getElementById(scriptId)) return;

    const script = document.createElement('script');
    script.id = scriptId;
    script.src = 'https://link.kdlead.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section id="contact" className="static-tree-bg static-tree-bg--trunks py-24 bg-slate-50 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-forest-200/30 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="pill-badge mb-4">
            <Mail className="w-3.5 h-3.5 text-forest-700" />
            <span>Connect With Us</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-slate-950 tracking-tight mb-4">
            Get Your Free <span className="text-gradient-metallic">On-Site Estimate</span>
          </h2>
          
          <p className="text-base text-slate-600">
            Reach out to schedule a free arborist evaluation or call our dispatch hotline directly for immediate emergency tree care.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-8 lg:grid-cols-12">
          
          {/* KDLead embedded estimate form */}
          <div className="overflow-hidden rounded-[2rem] border border-white/80 bg-white shadow-2xl shadow-slate-950/20 lg:col-span-7">
            <iframe
              src="https://link.kdlead.com/widget/form/VKrLvh7rNiLUrECZPaxm"
              className="block h-[620px] w-full rounded-[2rem] border-0"
              id="inline-VKrLvh7rNiLUrECZPaxm"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Form 0"
              data-height="620"
              data-layout-iframe-id="inline-VKrLvh7rNiLUrECZPaxm"
              data-form-id="VKrLvh7rNiLUrECZPaxm"
              title="Free On-Site Estimate Form"
            />
          </div>

          <div className="space-y-5 lg:col-span-5">
            {/* Headquarters map */}
            <div className="overflow-hidden rounded-2xl border border-white/70 shadow-xl">
              <iframe
                src="https://www.google.com/maps?q=77%20Sheffield%20Ave%2C%20Buffalo%2C%20NY%2014220&output=embed"
                className="block h-[240px] w-full border-0 sm:h-[280px]"
                title="Timberline Ridge Headquarters Map"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            <div className="space-y-4 rounded-2xl border border-white/80 bg-white/90 p-5 shadow-xl backdrop-blur-md sm:p-6">
              <h3 className="font-display text-lg font-extrabold text-slate-950">Business Contact</h3>

              <a href="tel:+17165078767" className="flex items-center gap-3 text-sm font-semibold text-slate-700 transition-colors hover:text-forest-700">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-forest-100 text-forest-700">
                  <Phone className="h-4 w-4" />
                </span>
                <span>+1 (716) 507-8767</span>
              </a>

              <a href="mailto:info@timberlineridgetreeservices.com" className="flex items-center gap-3 text-sm font-semibold text-slate-700 transition-colors hover:text-forest-700">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-forest-100 text-forest-700">
                  <Mail className="h-4 w-4" />
                </span>
                <span className="break-all">info@timberlineridgetreeservices.com</span>
              </a>

              <a href="https://maps.app.goo.gl/HL9dPm6Km57adYJF8" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-sm font-semibold text-slate-700 transition-colors hover:text-forest-700">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-forest-100 text-forest-700">
                  <MapPin className="h-4 w-4" />
                </span>
                <span>77 Sheffield Ave, Buffalo, NY 14220, United States</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
