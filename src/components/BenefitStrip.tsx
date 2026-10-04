import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../i18n/translations';

export const BenefitStrip: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = TRANSLATIONS[lang].benefitStrip;

  return (
    <section className="border-y border-cyan-500/20 bg-[#040E1A] py-6 sm:py-7 relative z-20 shadow-[0_4px_25px_rgba(0,0,0,0.5)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 md:gap-8 text-center text-slate-200 font-semibold text-base sm:text-lg lg:text-xl">
          <span className="text-white hover:text-cyan-400 transition-colors">{t.p1}</span>
          <span className="text-cyan-400 select-none font-bold" aria-hidden="true">•</span>
          <span className="text-white hover:text-cyan-400 transition-colors">{t.p2}</span>
          <span className="text-cyan-400 select-none font-bold" aria-hidden="true">•</span>
          <span className="text-cyan-300 font-mono font-bold tracking-tight hover:text-white transition-colors">{t.p3}</span>
          <span className="text-cyan-400 select-none font-bold" aria-hidden="true">•</span>
          <span className="text-white hover:text-cyan-400 transition-colors">{t.p4}</span>
        </div>
      </div>
    </section>
  );
};
