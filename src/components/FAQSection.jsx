import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone, ArrowUpRight } from 'lucide-react';

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      question: 'How quickly can your emergency team respond to storm damage in Buffalo?',
      answer: 'Our emergency dispatch operates 24/7. During severe weather events in Western NY, we prioritize active hazards like trees resting on structures, powerlines, or blocking main accessways, typically arriving within 1 to 2 hours.',
    },
    {
      question: 'Is Timberline Ridge fully insured for heavy machinery & property protection?',
      answer: 'Yes. We carry $2,000,000 in general commercial liability coverage and comprehensive NY State workers’ compensation. Proof of insurance certificate can be emailed directly to you prior to job kickoff.',
    },
    {
      question: 'Do I need a municipal permit for removing a tree on my property in Buffalo, NY?',
      answer: 'For private property trees, permits are generally not required unless the tree is located within a designated historic conservation district or municipal right-of-way. We inspect permit needs during our free site evaluation.',
    },
    {
      question: 'How do you calculate tree removal or trimming pricing?',
      answer: 'Estimates depend on tree height, trunk diameter, proximity to electrical lines or house roofs, access for bucket trucks, and whether stump grinding or wood hauling is requested. We provide guaranteed written quotes with zero hidden fees.',
    },
    {
      question: 'How do you prevent heavy trucks from damaging lawn turf?',
      answer: 'We utilize specialized composite ground protection mats and outrigger pads that distribute machine weight evenly, preventing rutting or soil compaction on soft lawns.',
    },
  ];

  return (
    <section className="static-tree-bg static-tree-bg--forest py-24 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl rounded-3xl border border-white/80 bg-white/80 px-5 py-8 text-center shadow-[0_20px_55px_-30px_rgba(15,23,42,0.45)] backdrop-blur-md sm:px-10">
          <div className="pill-badge mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-forest-700" />
            <span>Got Questions?</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-slate-950 tracking-tight mb-4">
            Frequently Asked <span className="text-gradient-metallic">Questions</span>
          </h2>
          
          <p className="text-base font-medium text-slate-700">
            Clear answers regarding pricing, insurance, safety, and dispatch times.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`glass-card rounded-2xl transition-all duration-300 border ${
                  isOpen ? 'border-slate-400 shadow-md bg-slate-50/50' : 'border-slate-200/80 hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-display font-bold text-base sm:text-lg text-slate-950">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-800 transition-transform duration-300 flex-shrink-0 ${
                    isOpen ? 'rotate-180 bg-slate-950 text-white' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Need more info CTA */}
        <div className="mt-12 text-center bg-slate-100/80 rounded-2xl p-6 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-bold text-slate-950 text-sm">Have a specific question about your tree?</h4>
            <p className="text-xs text-slate-600">Call our Buffalo arborists directly at +1 (716) 507-8767.</p>
          </div>
          <a
            href="tel:+17165078767"
            className="bg-slate-950 hover:bg-forest-700 text-white px-6 py-3 rounded-full text-xs font-bold transition-colors flex items-center gap-2 whitespace-nowrap"
          >
            <Phone className="w-3.5 h-3.5 text-forest-400" />
            <span>Speak to Arborist</span>
          </a>
        </div>

      </div>
    </section>
  );
}
