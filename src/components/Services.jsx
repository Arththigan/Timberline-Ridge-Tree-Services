import React, { useRef, useState } from 'react';
import { Trees, Zap, Scissors, Shovel, ShieldAlert, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';

function ScrollDeckCard({ progress, index, total, children }) {
  const isLast = index === total - 1;
  const step = total > 1 ? 0.72 / (total - 1) : 1;
  const start = 0.08 + index * step;
  const end = Math.min(start + 0.14, 0.94);
  const direction = index % 2 === 0 ? -1 : 1;
  const x = useTransform(progress, [start, end], ['0%', '0%']);
  const y = useTransform(progress, [start, end], ['0%', isLast ? '0%' : '-130%']);
  const rotate = useTransform(progress, [start, end], [index * 3, isLast ? index * 3 : direction * 7]);
  const opacity = useTransform(progress, [start, Math.min(end + 0.05, 1)], [1, isLast ? 1 : 0]);

  return (
    <motion.div
      className="service-card-stage"
      style={{ x, y, rotate, opacity, zIndex: total - index }}
    >
      {children}
    </motion.div>
  );
}

export default function Services({ onSelectService }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const deckRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: deckRef,
    offset: ['start start', 'end end'],
  });

  const servicesData = [
    {
      id: 'removal',
      category: 'removal',
      title: 'Hazardous Tree Removal',
      tag: 'CRANE ASSISTED',
      badgeColor: 'bg-red-500/10 text-red-700 border-red-200',
      description: 'Safe, controlled removal of dangerous, dying, or overgrown trees near homes, utility lines, and structures in Buffalo, NY.',
      features: ['Tight-space rigging & crane operation', 'Full debris haul-off', '$2M property protection insurance'],
      icon: Trees,
      isFeatured: true,
      accent: 'from-emerald-500 to-forest-700',
      image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1400&q=82',
      imageAlt: 'Professional arborist removing a hazardous tree with a chainsaw',
    },
    {
      id: 'pruning',
      category: 'maintenance',
      title: 'Precision Trimming & Pruning',
      tag: 'CANOPY CARE',
      badgeColor: 'bg-forest-500/10 text-forest-700 border-forest-200',
      description: 'Crown thinning, deadwooding, and structural pruning to improve tree health, aesthetics, and solar exposure.',
      features: ['Certified arborist pruning standards', 'Power line clearance', 'Storm prevention trimming'],
      icon: Scissors,
      isFeatured: false,
      accent: 'from-teal-500 to-emerald-700',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1400&q=82',
      imageAlt: 'Tree arborist pruning a branch high in a tree',
    },
    {
      id: 'stump',
      category: 'maintenance',
      title: 'Stump Grinding & Excavation',
      tag: 'DEEP GRINDING',
      badgeColor: 'bg-amber-500/10 text-amber-800 border-amber-200',
      description: 'Complete removal of unsightly tree stumps 6 to 12 inches below ground level, leaving lawn ready for turf or planting.',
      features: ['Mulch backfill option', 'Root flare grinding', 'Lawn protection matting'],
      icon: Shovel,
      isFeatured: false,
      accent: 'from-amber-500 to-orange-700',
      image: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=1400&q=82',
      imageAlt: 'Professional tree-service crew operating heavy machinery',
    },
    {
      id: 'emergency',
      category: 'emergency',
      title: '24/7 Emergency Storm Cleanup',
      tag: 'RAPID DISPATCH',
      badgeColor: 'bg-red-600 text-white font-bold',
      description: 'Immediate response team for trees fallen on roofs, driveways, or powerlines following Western NY severe weather.',
      features: ['Direct insurance billing assistance', 'Rapid crew mobilization', 'Immediate hazard mitigation'],
      icon: ShieldAlert,
      isFeatured: false,
      accent: 'from-red-600 to-rose-800',
      image: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1400&q=82',
      imageAlt: 'Storm-damaged fallen tree ready for cleanup',
    },
    {
      id: 'arborist',
      category: 'health',
      title: 'Plant Health & Cabling',
      tag: 'PRESERVATION',
      badgeColor: 'bg-blue-500/10 text-blue-700 border-blue-200',
      description: 'Diagnostic health assessments, disease treatment, insect control, and structural cabling to save prized trees.',
      features: ['Soil aeration & deep root feeding', 'Structural support cabling', 'Fungal & pest treatment'],
      icon: Sparkles,
      isFeatured: false,
      accent: 'from-blue-500 to-indigo-700',
      image: 'https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1400&q=82',
      imageAlt: 'Certified arborist working safely in a mature tree',
    },
  ];

  const filteredServices = activeFilter === 'all' 
    ? servicesData 
    : servicesData.filter(s => s.category === activeFilter);

  return (
    <section id="services" className="static-tree-bg static-tree-bg--canopy services-atmosphere py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="pill-badge mb-4">
            <Trees className="w-3.5 h-3.5 text-forest-700" />
            <span>Comprehensive Arborist Solutions</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-slate-950 tracking-tight mb-4">
            Tailored Tree Care for <br className="hidden sm:inline" />
            <span className="text-gradient-metallic">Every Buffalo Property</span>
          </h2>
          
          <p className="text-base text-slate-600">
            From emergency storm removal to precision pruning, Timberline Ridge brings state-of-the-art equipment and certified arborists to every job.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {[
              { id: 'all', label: 'All Services' },
              { id: 'removal', label: 'Tree Removal' },
              { id: 'maintenance', label: 'Trimming & Stumps' },
              { id: 'emergency', label: '24/7 Emergency' },
              { id: 'health', label: 'Health & Cabling' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                  activeFilter === tab.id
                    ? 'bg-slate-950 text-white shadow-md'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Lucidly-style scroll-driven card deck */}
        <div
          ref={deckRef}
          className="service-scroll-scene"
          style={{ height: filteredServices.length > 1 ? '400vh' : '100vh' }}
        >
          <div className="service-scroll-sticky">
          <div className="service-bg-orb service-bg-orb--one" aria-hidden="true" />
          <div className="service-bg-orb service-bg-orb--two" aria-hidden="true" />
          <div className="service-card-deck">
          <AnimatePresence mode="popLayout">
          {filteredServices.map((service, cardIndex) => {
            const IconComp = service.icon;
            return (
              <ScrollDeckCard
                key={service.id}
                progress={scrollYProgress}
                index={cardIndex}
                total={filteredServices.length}
              >
                <motion.article
                  whileHover={{ rotate: 0, y: -8, scale: 1.008 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 24 }}
                  className="service-stack-card group"
                >
                <img
                  className="service-card-photo"
                  src={service.image}
                  alt={service.imageAlt}
                  loading="lazy"
                />
                <div className="service-card-number" aria-hidden="true">{cardIndex + 1}</div>
                <div className="service-card-content">
                <div className="service-card-actions">
                  {/* Top Bar inside Card */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-slate-950 text-white flex items-center justify-center group-hover:bg-forest-600 transition-colors shadow-md">
                      <IconComp className="w-6 h-6" />
                    </div>

                    <span className={`text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full border ${service.badgeColor}`}>
                      {service.tag}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-950 mb-3 group-hover:text-forest-800 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                </div>

                <div>
                  {/* Feature Checklist */}
                  <ul className="space-y-2.5 mb-8">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-xs font-medium text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-forest-600 flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                {/* Bottom Action Button */}
                <button
                  onClick={() => onSelectService(service.id)}
                  className="w-full inline-flex items-center justify-between bg-slate-100 hover:bg-slate-950 hover:text-white text-slate-900 px-5 py-3 rounded-2xl text-xs font-bold transition-all duration-300"
                >
                  <span>Book Free Inspection</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                </div>
                </div>
                </motion.article>
              </ScrollDeckCard>
            );
          })}
          </AnimatePresence>
          </div>
          </div>
        </div>

        {/* Emergency Call Box */}
        <div className="services-emergency-cta mt-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-forest-200/40 rounded-full blur-3xl pointer-events-none" />
          <div className="relative mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-8 md:flex-row sm:px-10 sm:py-10">
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 text-red-400 border border-red-500/30 text-xs font-bold uppercase tracking-wider mb-3">
              <Zap className="w-3.5 h-3.5" />
              <span>Immediate Hazard?</span>
            </div>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-950 mb-2">
              Fallen Tree Blocking Road or Roof?
            </h3>
            <p className="text-sm text-slate-600 max-w-xl">
              Our emergency crew dispatches immediately across Buffalo, NY with heavy power equipment and safety rigging.
            </p>
          </div>

          <a
            href="tel:+17165078767"
            className="relative z-10 flex-shrink-0 inline-flex items-center gap-3 bg-red-600 hover:bg-red-500 text-white px-8 py-4 rounded-full font-bold text-sm transition-all shadow-lg hover:scale-105 active:scale-95"
          >
            <Zap className="w-4 h-4 fill-white" />
            <span>Call Emergency Hotline: +1 (716) 507-8767</span>
          </a>
          </div>
        </div>

      </div>
    </section>
  );
}
