import React from 'react';
import { 
  Building2, 
  Video, 
  MessageSquare, 
  PlayCircle, 
  Settings, 
  Clock,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { Language } from '../types';

interface PricingProps {
  lang: Language;
  onOpenNotify: (planName?: string) => void;
  onOpenCustomPlan: () => void;
}

export const PricingSection: React.FC<PricingProps> = ({
  lang,
  onOpenNotify,
  onOpenCustomPlan,
}) => {
  const plans = [
    {
      id: 'trial',
      name: 'TRIAL',
      price: '60',
      minutes: '30 minit',
      minutesDesc: '30 kredit siaran langsung',
      rate: 'RM 2.00',
      rateSub: lang === 'bm' ? 'setiap minit' : 'per minute',
      isPopular: false,
    },
    {
      id: 'lite',
      name: 'LITE',
      price: '229',
      minutes: '120 minit',
      minutesDesc: '120 kredit siaran langsung',
      rate: 'RM 1.91',
      rateSub: lang === 'bm' ? 'setiap minit' : 'per minute',
      isPopular: false,
    },
    {
      id: 'starter',
      name: 'STARTER',
      price: '559',
      minutes: '300 minit',
      minutesDesc: '300 kredit siaran langsung',
      rate: 'RM 1.86',
      rateSub: lang === 'bm' ? 'setiap minit' : 'per minute',
      isPopular: false,
    },
    {
      id: 'grow',
      name: 'GROW',
      price: '1,099',
      minutes: '600 minit',
      minutesDesc: '600 kredit siaran langsung',
      rate: 'RM 1.83',
      rateSub: lang === 'bm' ? 'setiap minit' : 'per minute',
      isPopular: true,
    },
    {
      id: 'scale',
      name: 'SCALE',
      price: '1,999',
      minutes: '1,200 minit',
      minutesDesc: '1,200 kredit siaran langsung',
      rate: 'RM 1.67',
      rateSub: lang === 'bm' ? 'setiap minit' : 'per minute',
      isPopular: false,
    },
    {
      id: 'pro',
      name: 'PRO',
      price: '3,990',
      minutes: '2,500 minit',
      minutesDesc: '2,500 kredit siaran langsung',
      rate: 'RM 1.60',
      rateSub: lang === 'bm' ? 'setiap minit' : 'per minute',
      isPopular: false,
    },
  ];

  return (
    <section id="harga" className="py-10 sm:py-14 bg-[#040E1A] relative overflow-hidden text-center">
      {/* Background ambient lighting glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-cyan-500/10 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Title Matching Image 2 */}
        <div className="mb-14 space-y-3">
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            PRICING <span className="text-[#12C8F5] drop-shadow-[0_0_20px_rgba(18,200,245,0.7)]">PLAN</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 font-medium max-w-3xl mx-auto leading-relaxed">
            {lang === 'bm' 
              ? 'Semua pakej termasuk ciri AI Live Host yang sama. Perbezaan hanya pada jumlah kredit/minit.'
              : 'All packages include the exact same AI Live Host features. The only difference is in the credit/minute allocation.'}
          </p>
        </div>

        {/* 
          Spacious, Comfortable 4-Top / 3-Bottom Card Layout
          Eliminates microscopic squished text and blends seamlessly into dark canvas
        */}
        
        {/* Row 1: The First 4 Plans (Trial, Lite, Starter, Grow) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-6">
          {plans.slice(0, 4).map((p) => (
            <div
              key={p.id}
              className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between text-center relative transition-all duration-300 ${
                p.isPopular
                  ? 'bg-gradient-to-b from-[#1C0F24]/90 via-[#0B1A2C]/90 to-[#040E1A]/90 border-2 border-rose-500 shadow-[0_0_40px_rgba(244,63,94,0.35)] transform lg:-translate-y-2'
                  : 'glass-panel-dark border border-cyan-500/25 hover:border-cyan-400/50 shadow-xl hover:-translate-y-1'
              }`}
            >
              {/* Popular Star Badge */}
              {p.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#F43F5E] to-[#E11D48] text-white text-xs font-black uppercase px-4 py-1 rounded-full shadow-[0_4px_15px_rgba(244,63,94,0.6)] flex items-center gap-1.5 whitespace-nowrap">
                  <Sparkles className="w-3.5 h-3.5 fill-current" />
                  <span>{lang === 'bm' ? 'PALING POPULAR' : 'MOST POPULAR'}</span>
                </div>
              )}

              <div>
                {/* Plan Name */}
                <div className="text-sm font-black uppercase tracking-wider text-slate-300 mb-3">
                  {p.name}
                </div>

                {/* Price */}
                <div className="my-3">
                  <div className="flex items-baseline justify-center gap-1.5">
                    <span className="text-xl font-bold text-slate-400 font-mono">RM</span>
                    <span className="text-4xl sm:text-5xl font-black text-white font-mono tracking-tight tabular-nums">
                      {p.price}
                    </span>
                  </div>
                  <div className="text-base font-bold text-cyan-300 mt-1">
                    {p.minutes}
                  </div>
                  <div className="text-xs text-slate-400">
                    {p.minutesDesc}
                  </div>
                </div>

                {/* Rate Calculation */}
                <div className="pt-3 border-t border-white/10 my-4 bg-white/5 rounded-2xl p-2.5">
                  <div className="text-sm font-black text-white font-mono">
                    {p.rate}
                  </div>
                  <div className="text-xs text-slate-400 font-medium">
                    {p.rateSub}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  onClick={() => onOpenNotify(p.name)}
                  className={`w-full py-3 px-4 rounded-xl text-sm font-black transition-all cursor-pointer min-h-[46px] flex items-center justify-center gap-2 ${
                    p.isPopular
                      ? 'bg-gradient-to-r from-[#F43F5E] to-[#E11D48] hover:from-[#FB7185] hover:to-[#F43F5E] text-white shadow-[0_4px_20px_rgba(244,63,94,0.5)]'
                      : 'bg-white/10 hover:bg-white/15 text-white border border-white/15 hover:border-cyan-400/50'
                  }`}
                >
                  <span>{lang === 'bm' ? 'Pilih Plan' : 'Select Plan'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2: Scale, Pro, and Custom Plan (3 Spacious Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch mb-12">
          {plans.slice(4).map((p) => (
            <div
              key={p.id}
              className="rounded-3xl p-6 sm:p-7 flex flex-col justify-between text-center relative glass-panel-dark border border-cyan-500/25 hover:border-cyan-400/50 shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div>
                <div className="text-sm font-black uppercase tracking-wider text-slate-300 mb-3">
                  {p.name}
                </div>

                <div className="my-3">
                  <div className="flex items-baseline justify-center gap-1.5">
                    <span className="text-xl font-bold text-slate-400 font-mono">RM</span>
                    <span className="text-4xl sm:text-5xl font-black text-white font-mono tracking-tight tabular-nums">
                      {p.price}
                    </span>
                  </div>
                  <div className="text-base font-bold text-cyan-300 mt-1">
                    {p.minutes}
                  </div>
                  <div className="text-xs text-slate-400">
                    {p.minutesDesc}
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10 my-4 bg-white/5 rounded-2xl p-2.5">
                  <div className="text-sm font-black text-white font-mono">
                    {p.rate}
                  </div>
                  <div className="text-xs text-slate-400 font-medium">
                    {p.rateSub}
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenNotify(p.name)}
                  className="w-full py-3 px-4 rounded-xl text-sm font-black bg-white/10 hover:bg-white/15 text-white border border-white/15 hover:border-cyan-400/50 transition-all cursor-pointer min-h-[46px] flex items-center justify-center gap-2"
                >
                  <span>{lang === 'bm' ? 'Pilih Plan' : 'Select Plan'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}

          {/* Custom Plan Card (Blended & Spacious) */}
          <div className="rounded-3xl p-6 sm:p-7 flex flex-col justify-between text-center relative bg-gradient-to-br from-[#08233C]/80 via-[#061A2B]/80 to-[#040E1A]/90 border border-cyan-400/35 shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div>
              <div className="w-12 h-12 mx-auto rounded-2xl bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 mb-3 flex items-center justify-center shadow-[0_0_15px_rgba(18,200,245,0.2)]">
                <Building2 className="w-6 h-6" />
              </div>

              <div className="text-base font-black uppercase tracking-wider text-white mb-2">
                CUSTOM PLAN
              </div>

              <div className="text-sm text-slate-300 leading-relaxed my-4 px-2 font-normal">
                {lang === 'bm'
                  ? 'Perlukan jumlah minit berskala besar atau integrasi khas untuk jenama e-dagang anda?'
                  : 'Need enterprise-scale minute volumes or dedicated custom setup for your e-commerce brand?'}
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenCustomPlan}
                className="w-full py-3 px-4 rounded-xl text-sm font-black bg-gradient-to-r from-[#7C3AED] via-[#6366F1] to-[#06B6D4] hover:from-[#8B5CF6] hover:to-[#0891B2] text-white shadow-[0_0_20px_rgba(124,58,237,0.45)] transition-all cursor-pointer min-h-[46px] flex items-center justify-center gap-2"
              >
                <span>{lang === 'bm' ? 'Hubungi Kami' : 'Contact Us'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Feature Guarantee Bottom Banner (Blended Dark Glass with High Legibility) */}
        <div className="p-6 sm:p-8 rounded-3xl glass-panel-dark border border-cyan-500/30 text-white shadow-2xl backdrop-blur-xl">
          
          <div className="text-center font-black uppercase tracking-wider text-sm sm:text-base text-cyan-300 mb-6 font-mono">
            {lang === 'bm' 
              ? 'SEMUA PAKEJ TERMASUK CIRI AI LIVE HOST YANG SAMA' 
              : 'ALL PACKAGES INCLUDE THE SAME AI LIVE HOST FEATURES'}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-6 items-center text-left">
            
            {/* Feature 1 */}
            <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/[0.03] border border-white/5">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#0088FF] to-cyan-400 text-slate-950 flex items-center justify-center shrink-0 shadow-md">
                <Video className="w-5 h-5 fill-slate-950" />
              </div>
              <div className="text-sm font-bold text-white leading-snug">
                AI Host Profesional
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/[0.03] border border-white/5">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#0088FF] to-cyan-400 text-slate-950 flex items-center justify-center shrink-0 shadow-md">
                <MessageSquare className="w-5 h-5 fill-slate-950" />
              </div>
              <div className="text-sm font-bold text-white leading-snug">
                Skrip & Product Knowledge AI
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/[0.03] border border-white/5">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#0088FF] to-cyan-400 text-slate-950 flex items-center justify-center shrink-0 shadow-md">
                <PlayCircle className="w-5 h-5" />
              </div>
              <div className="text-sm font-bold text-white leading-snug">
                Live Streaming di TikTok
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/[0.03] border border-white/5">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#0088FF] to-cyan-400 text-slate-950 flex items-center justify-center shrink-0 shadow-md">
                <Settings className="w-5 h-5" />
              </div>
              <div className="text-sm font-bold text-white leading-snug">
                Mudah Digunakan
              </div>
            </div>

            {/* Feature 5 */}
            <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/[0.03] border border-white/5 sm:col-span-2 lg:col-span-1">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#0088FF] to-cyan-400 text-slate-950 flex items-center justify-center shrink-0 shadow-md">
                <Clock className="w-5 h-5" />
              </div>
              <div className="text-sm font-bold text-white leading-snug">
                <div>Live Bila-Bila Masa</div>
                <div className="text-xs text-slate-400 font-normal">Gunakan kredit mengikut keperluan</div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
