import React, { useState } from 'react';
import { Star, Quote, CheckCircle, Trees } from 'lucide-react';

export default function Testimonials() {
  const [activeTab, setActiveTab] = useState(0);

  const reviews = [
    {
      name: 'Robert Vance',
      location: 'South Buffalo, NY',
      service: 'Hazardous Tree Removal',
      quote: 'A massive 80ft maple was rotting over our driveway. Timberline Ridge arrived right on schedule, brought out high-reach rigging, and brought the entire tree down in sections without a single scratch on our property. Highly recommended!',
      rating: 5,
      date: 'July 2026',
    },
    {
      name: 'Sarah & Mark Higgins',
      location: 'Amherst / Buffalo Metro',
      service: 'Emergency Storm Cleanup',
      quote: 'During the severe windstorm last month, a large oak branch crushed our powerline drop. Timberline Ridge was on site within 45 minutes, cleared the hazard safely, and helped coordinate with the utility crew.',
      rating: 5,
      date: 'June 2026',
    },
    {
      name: 'David Kowalski',
      location: 'West Seneca, NY',
      service: 'Stump Grinding & Pruning',
      quote: 'Exceptional service! They ground down three large pin oak stumps 10 inches below ground level and smoothed out the topsoil so cleanly you can hardly tell trees were ever there. Great crew!',
      rating: 5,
      date: 'May 2026',
    },
    {
      name: 'Elena Rostova',
      location: 'Cheektowaga, NY',
      service: 'Commercial Canopy Shaping',
      quote: 'We hired Timberline Ridge for our office complex landscape cleanup. Professional written quote, fully insured credentials provided upfront, and flawless execution. Will be using them annually.',
      rating: 5,
      date: 'April 2026',
    },
  ];

  return (
    <section className="static-tree-bg static-tree-bg--canopy py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="pill-badge mb-4">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>Verified Customer Feedback</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-slate-950 tracking-tight mb-4">
            Trusted by Hundreds of <br className="hidden sm:inline" />
            <span className="text-gradient-metallic">Buffalo Homeowners</span>
          </h2>
          
          <p className="text-base text-slate-600">
            Read what local residents and property managers say about our speed, safety, and thorough cleanups.
          </p>
        </div>

        {/* Tab Switcher & Main Quote Box */}
        <div className="max-w-4xl mx-auto">
          
          {/* Tabs header */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {reviews.map((rev, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                  activeTab === idx
                    ? 'bg-slate-950 text-white shadow-md'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {rev.name} ({rev.location})
              </button>
            ))}
          </div>

          {/* Active Review Card */}
          <div className="glass-card rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-200/90 relative">
            <Quote className="w-12 h-12 text-forest-200 absolute top-8 right-8 pointer-events-none" />

            <div className="flex items-center gap-1 mb-6">
              {[...Array(reviews[activeTab].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
              <span className="text-xs font-bold text-slate-700 ml-2">5.0 / 5.0 Rating</span>
            </div>

            <p className="font-display text-lg sm:text-2xl text-slate-900 font-medium leading-relaxed mb-8 italic">
              "{reviews[activeTab].quote}"
            </p>

            <div className="flex items-center justify-between pt-6 border-t border-slate-200/80 flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-slate-950 text-forest-400 flex items-center justify-center font-bold text-base">
                  {reviews[activeTab].name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-950 text-sm">{reviews[activeTab].name}</h4>
                  <p className="text-xs text-slate-500">{reviews[activeTab].location}</p>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-forest-50 border border-forest-200 text-forest-800 px-3 py-1.5 rounded-full text-xs font-bold">
                <CheckCircle className="w-3.5 h-3.5 text-forest-600" />
                <span>Service: {reviews[activeTab].service}</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
