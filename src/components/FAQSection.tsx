import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../i18n/translations';

export const FAQSection: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = TRANSLATIONS[lang].faq;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="faq" className="py-10 sm:py-14 bg-[#040E1A] relative overflow-hidden text-left">
      {/* Background soft glow matching Hero */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-400/40 text-cyan-300 text-xs sm:text-sm font-bold tracking-wider uppercase shadow-[0_0_15px_rgba(18,200,245,0.2)]">
            <HelpCircle className="w-4 h-4 text-cyan-400" />
            <span>{t.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight text-balance">
            {t.heading}
          </h2>

          <p className="text-xl sm:text-2xl text-slate-300 font-normal leading-relaxed">
            {t.subheading}
          </p>
        </div>

        {/* Accordions List */}
        <div className="space-y-4 text-left">
          {t.items.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="rounded-2xl glass-panel-dark border border-cyan-500/25 overflow-hidden transition-all duration-200 hover:border-cyan-400/50 shadow-lg"
              >
                <button
                  onClick={() => toggleIndex(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg sm:text-xl font-bold text-white leading-snug">
                    {item.q}
                  </span>
                  <div className="shrink-0 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 shadow">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-7 text-slate-300 text-base sm:text-lg leading-relaxed animate-in fade-in duration-200 border-t border-white/5 pt-4">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
