import React from 'react';
import { Play, ArrowRight, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../i18n/translations';

interface FinalCTAProps {
  lang: Language;
  onExploreDemo: () => void;
  onOpenNotify: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({
  lang,
  onExploreDemo,
  onOpenNotify,
}) => {
  const t = TRANSLATIONS[lang].finalCta;

  return (
    <section className="py-10 sm:py-16 bg-[#040E1A] relative overflow-hidden text-center">
      {/* Glow behind final banner matching Hero */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-cyan-500/20 via-purple-600/25 to-pink-500/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-8 sm:p-14 rounded-3xl glass-panel-dark border-2 border-cyan-400/40 shadow-2xl space-y-6">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-400/40 text-cyan-300 text-xs sm:text-sm font-bold tracking-wider uppercase shadow-[0_0_15px_rgba(18,200,245,0.2)]">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>{lang === 'bm' ? 'MULA TANPA RISIKO' : 'START RISK-FREE'}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight text-balance">
            {t.headline}
          </h2>

          <p className="text-xl sm:text-2xl text-slate-300 font-normal max-w-2xl mx-auto leading-relaxed">
            {t.subheading}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onExploreDemo}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-lg font-bold text-white bg-gradient-to-r from-[#7C3AED] via-[#6366F1] to-[#06B6D4] hover:from-[#8B5CF6] hover:to-[#0891B2] shadow-[0_0_30px_rgba(124,58,237,0.5)] transition-all transform hover:-translate-y-0.5 cursor-pointer min-h-[52px]"
            >
              <Play className="w-5 h-5 fill-current" />
              <span>{t.btnDemo}</span>
            </button>

            <button
              onClick={onOpenNotify}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-lg font-bold text-white bg-slate-900/80 hover:bg-slate-800/90 border border-white/20 hover:border-cyan-400 transition-all cursor-pointer min-h-[52px]"
            >
              <span>{t.btnNotify}</span>
              <ArrowRight className="w-5 h-5 text-cyan-400" />
            </button>
          </div>

          <div className="pt-4 text-xs text-slate-400">
            {lang === 'bm'
              ? '100% percuma untuk menguji simulator • Tiada pendaftaran kad kredit diperlukan'
              : '100% free to test the simulator • No credit card required'}
          </div>

        </div>
      </div>
    </section>
  );
};
