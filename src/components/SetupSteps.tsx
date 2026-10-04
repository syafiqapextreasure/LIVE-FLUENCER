import React from 'react';
import { 
  Camera, 
  UserCheck, 
  PlayCircle, 
  ArrowRight, 
  Radio, 
  Sliders, 
  Sparkles,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../i18n/translations';

export const SetupSteps: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = TRANSLATIONS[lang].setupSteps;

  return (
    <section className="py-10 sm:py-14 bg-[#040E1A] relative overflow-hidden text-left">
      {/* Background glow accents matching Hero */}
      <div className="absolute top-1/2 left-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-400/40 text-cyan-300 text-xs sm:text-sm font-bold tracking-wider uppercase shadow-[0_0_15px_rgba(18,200,245,0.2)]">
            <span>{lang === 'bm' ? '3 LANGKAH MUDAH' : '3 SIMPLE STEPS'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight text-balance">
            {t.title}
          </h2>
          <p className="text-xl sm:text-2xl text-cyan-400 font-semibold tracking-wide">
            {t.subtitle}
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {/* Step 1 */}
          <div className="rounded-3xl glass-panel-dark p-7 sm:p-8 border border-cyan-500/25 shadow-xl flex flex-col justify-between group hover:border-cyan-400/60 transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/15 border border-cyan-400/30 flex items-center justify-center text-cyan-300 group-hover:scale-105 transition-transform shadow-[0_0_15px_rgba(18,200,245,0.2)]">
                  <Camera className="w-7 h-7" />
                </div>
                <span className="font-mono text-xs uppercase tracking-wider text-cyan-300 font-bold bg-cyan-950/60 border border-cyan-500/30 px-3 py-1 rounded-full">
                  01
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                {t.step1Title}
              </h3>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6 font-normal">
                {t.step1Desc}
              </p>
            </div>

            {/* Redesigned High-End Micro-Preview: Real Biometric Lens Avatar */}
            <div className="pt-4 border-t border-white/10 flex items-center gap-3.5">
              <div className="relative w-13 h-13 rounded-2xl p-0.5 bg-gradient-to-tr from-cyan-400 via-blue-500 to-indigo-500 shadow-[0_0_20px_rgba(18,200,245,0.4)] shrink-0 group-hover:scale-105 transition-transform">
                <div className="w-full h-full rounded-[14px] overflow-hidden bg-slate-950 relative">
                  <img
                    src="/src/assets/images/hero_host_studio_exact_1791106783503.jpg"
                    alt="Malaysian AI Host"
                    className="w-full h-full object-cover object-[52%_15%]"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle biometric scan overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-950/60 via-transparent to-transparent" />
                  <div className="absolute top-1 right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 border border-white shadow-[0_0_8px_rgba(52,211,153,0.9)] animate-pulse" />
                </div>
              </div>
              <div className="text-left">
                <div className="font-bold text-white text-sm">1 Foto Wajah Jelas</div>
                <div className="text-cyan-300 text-xs font-semibold">Sebutan BM / English Semula Jadi</div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="rounded-3xl glass-panel-dark p-7 sm:p-8 border border-purple-500/25 shadow-xl flex flex-col justify-between group hover:border-purple-400/60 transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-purple-500/15 border border-purple-400/30 flex items-center justify-center text-purple-300 group-hover:scale-105 transition-transform shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                  <UserCheck className="w-7 h-7" />
                </div>
                <span className="font-mono text-xs uppercase tracking-wider text-purple-300 font-bold bg-purple-950/60 border border-purple-500/30 px-3 py-1 rounded-full">
                  02
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                {t.step2Title}
              </h3>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6 font-normal">
                {t.step2Desc}
              </p>
            </div>

            {/* Redesigned High-End Micro-Preview: Glowing Neural Audio / Persona Equalizer */}
            <div className="pt-4 border-t border-white/10 flex items-center gap-3.5">
              <div className="relative w-13 h-13 rounded-2xl p-0.5 bg-gradient-to-tr from-purple-500 via-pink-500 to-indigo-500 shadow-[0_0_20px_rgba(168,85,247,0.4)] shrink-0 group-hover:scale-105 transition-transform">
                <div className="w-full h-full rounded-[14px] bg-[#0E071A] flex items-center justify-center flex-col relative overflow-hidden border border-purple-400/40">
                  {/* Subtle soundwave equalizer animation bars */}
                  <div className="flex items-end gap-1 mb-0.5">
                    <span className="w-1 h-3 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0ms' }} />
                    <span className="w-1 h-5 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '150ms' }} />
                    <span className="w-1 h-3.5 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '300ms' }} />
                    <span className="w-1 h-2 bg-purple-300 rounded-full animate-pulse" style={{ animationDelay: '450ms' }} />
                  </div>
                  <div className="text-[8px] font-black tracking-widest text-purple-200 uppercase font-mono">
                    5 VOICES
                  </div>
                </div>
              </div>
              <div className="text-left">
                <div className="font-bold text-white text-sm">5 Gaya Personaliti</div>
                <div className="text-purple-300 text-xs font-semibold">Kawalan Topik Dilarang & Salam</div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="rounded-3xl glass-panel-dark p-7 sm:p-8 border border-cyan-500/25 shadow-xl flex flex-col justify-between group hover:border-cyan-400/60 transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/15 border border-cyan-400/30 flex items-center justify-center text-cyan-300 group-hover:scale-105 transition-transform shadow-[0_0_15px_rgba(18,200,245,0.2)]">
                  <PlayCircle className="w-7 h-7" />
                </div>
                <span className="font-mono text-xs uppercase tracking-wider text-cyan-300 font-bold bg-cyan-950/60 border border-cyan-500/30 px-3 py-1 rounded-full">
                  03
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                {t.step3Title}
              </h3>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6 font-normal">
                {t.step3Desc}
              </p>
            </div>

            {/* Redesigned High-End Micro-Preview: Glowing Broadcast ON-AIR Beacon */}
            <div className="pt-4 border-t border-white/10 flex items-center gap-3.5">
              <div className="relative w-13 h-13 rounded-2xl p-0.5 bg-gradient-to-tr from-rose-500 via-pink-600 to-red-600 shadow-[0_0_20px_rgba(244,63,94,0.45)] shrink-0 group-hover:scale-105 transition-transform">
                <div className="w-full h-full rounded-[14px] bg-[#120409] flex items-center justify-center flex-col relative overflow-hidden border border-rose-400/50">
                  <div className="flex items-center gap-1 mb-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-ping" />
                    <Radio className="w-4 h-4 text-rose-300" />
                  </div>
                  <div className="text-[9px] font-black tracking-widest text-rose-200 uppercase font-mono leading-none">
                    ON AIR
                  </div>
                </div>
              </div>
              <div className="text-left">
                <div className="font-bold text-white text-sm">Jadual Auto & Rehearsal</div>
                <div className="text-rose-300 text-xs font-semibold">Henti Automatik Jika Tab Tutup</div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom connector hint */}
        <div className="mt-10 text-center text-slate-400 text-sm flex items-center justify-center gap-2">
          <span>{lang === 'bm' ? 'Mudah, pantas, dan bersedia untuk perniagaan e-dagang tempatan anda' : 'Easy, fast, and purpose-built for local e-commerce businesses'}</span>
          <ArrowRight className="w-4 h-4 text-cyan-400" />
        </div>

      </div>
    </section>
  );
};
