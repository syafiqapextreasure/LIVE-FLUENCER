import React from 'react';
import { ArrowRight, RotateCw, Percent, Sparkles, Users } from 'lucide-react';
import { Language } from '../types';

interface AffiliateProps {
  lang: Language;
  onOpenRegister: () => void;
}

export const AffiliateSection: React.FC<AffiliateProps> = ({
  lang,
  onOpenRegister,
}) => {
  const commissions = [
    { plan: 'Trial (RM60)', amount: 'RM 5' },
    { plan: 'Lite (RM229)', amount: 'RM 25' },
    { plan: 'Starter (RM559)', amount: 'RM 50' },
    { plan: 'Grow (RM1,099)', amount: 'RM 80' },
    { plan: 'Scale (RM1,999)', amount: 'RM 100' },
    { plan: 'Pro (RM3,990)', amount: 'RM 150' },
  ];

  return (
    <section id="affiliate" className="py-10 sm:py-14 bg-[#040E1A] relative overflow-hidden text-left">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[500px] bg-purple-600/15 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Glassmorphic Container Blended with Background */}
        <div className="rounded-3xl glass-panel-dark border-2 border-cyan-500/30 text-white shadow-2xl p-6 sm:p-10 lg:p-12 backdrop-blur-2xl bg-[#061828]/85">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Headline & CTA Button */}
            <div className="lg:col-span-4 space-y-5">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-400/40 text-cyan-300 text-xs font-bold tracking-wider uppercase font-mono shadow">
                <Users className="w-3.5 h-3.5 text-cyan-400" />
                <span>PROGRAM AFFILIATE</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-white tracking-tight leading-[1.15]">
                {lang === 'bm' ? (
                  <>
                    JADI AFFILIATE & <br />
                    <span className="bg-gradient-to-r from-[#A855F7] via-[#EC4899] to-[#F43F5E] bg-clip-text text-transparent">
                      DAPATKAN KOMISEN
                    </span>
                  </>
                ) : (
                  <>
                    BECOME AN AFFILIATE & <br />
                    <span className="bg-gradient-to-r from-[#A855F7] via-[#EC4899] to-[#F43F5E] bg-clip-text text-transparent">
                      EARN COMMISSIONS
                    </span>
                  </>
                )}
              </h2>

              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
                {lang === 'bm'
                  ? 'Promosikan LiveFluencer.Ai kepada peniaga e-dagang dan jana pendapatan pasif berulang.'
                  : 'Promote LiveFluencer.Ai to e-commerce sellers and generate recurring passive income.'}
              </p>

              <div className="pt-2">
                <button
                  onClick={onOpenRegister}
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-base sm:text-lg font-black text-white bg-gradient-to-r from-[#F43F5E] via-[#EC4899] to-[#E11D48] hover:from-[#FB7185] hover:to-[#F43F5E] shadow-[0_0_25px_rgba(244,63,94,0.5)] transition-all transform hover:-translate-y-0.5 cursor-pointer min-h-[52px]"
                >
                  <span>{lang === 'bm' ? 'Sertai Sekarang' : 'Join Now'}</span>
                  <ArrowRight className="w-5 h-5 stroke-[2.5]" />
                </button>
              </div>

            </div>

            {/* Middle Column: Commission Table (Large, High-Contrast Typography) */}
            <div className="lg:col-span-4">
              <div className="mb-3 text-left">
                <div className="text-sm font-black uppercase text-cyan-300 tracking-wider flex items-center gap-2 font-mono">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span>KOMISEN FIRST PURCHASE</span>
                </div>
                <div className="text-xs text-slate-400 font-mono mt-0.5">
                  (Setiap affiliate berdaftar)
                </div>
              </div>

              {/* Table with comfortable readable text */}
              <div className="rounded-2xl overflow-hidden border border-cyan-500/25 shadow-xl bg-black/50 backdrop-blur-md">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-[#0B2138] text-cyan-300 font-black text-xs uppercase tracking-wider border-b border-cyan-500/30 font-mono">
                      <th className="py-3 px-4 sm:px-5">Plan</th>
                      <th className="py-3 px-4 sm:px-5 text-right">Komisen</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10 text-sm">
                    {commissions.map((c, idx) => (
                      <tr key={idx} className="hover:bg-white/5 transition-colors">
                        <td className="py-3 px-4 sm:px-5 font-bold text-white text-sm sm:text-base">
                          {c.plan}
                        </td>
                        <td className="py-3 px-4 sm:px-5 text-right font-black text-cyan-300 font-mono text-base sm:text-lg tabular-nums">
                          {c.amount}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Right Column: Stacked Bonus Cards (Spacious & Legible) */}
            <div className="lg:col-span-4 space-y-4">
              
              {/* Partner Bonus Card */}
              <div className="p-5 sm:p-6 rounded-2xl border border-rose-500/35 bg-gradient-to-br from-rose-950/40 via-purple-950/20 to-black/50 shadow-lg flex items-start gap-4">
                <div className="w-13 h-13 rounded-2xl bg-rose-500/20 border border-rose-400/40 text-rose-300 flex items-center justify-center shrink-0 shadow-md">
                  <Percent className="w-6 h-6 stroke-[3]" />
                </div>
                <div className="space-y-1.5">
                  <div className="text-sm sm:text-base font-black text-rose-300 leading-tight">
                    +20% PARTNER BONUS <br />
                    <span className="text-xs font-bold text-rose-400 font-mono">(Hanya Trial – Grow)</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                    {lang === 'bm'
                      ? 'Dapatkan tambahan 20% komisen bila capai 10+ pelanggan baru sebulan (Tidak termasuk Scale & Pro).'
                      : 'Earn an additional 20% commission upon reaching 10+ new customers monthly (Excludes Scale & Pro).'}
                  </p>
                </div>
              </div>

              {/* Recurring Commission Card */}
              <div className="p-5 sm:p-6 rounded-2xl border border-purple-500/35 bg-gradient-to-br from-purple-950/40 via-cyan-950/20 to-black/50 shadow-lg flex items-start gap-4">
                <div className="w-13 h-13 rounded-2xl bg-purple-500/20 border border-purple-400/40 text-purple-300 flex items-center justify-center shrink-0 shadow-md">
                  <RotateCw className="w-6 h-6 stroke-[2.5]" />
                </div>
                <div className="space-y-1.5">
                  <div className="text-sm sm:text-base font-black text-purple-300 leading-tight">
                    3% KOMISEN BERULANG SELAMA 6 BULAN
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                    {lang === 'bm'
                      ? 'Dari setiap tambah nilai (top-up) minit yang dibuat oleh pelanggan rujukan anda.'
                      : 'On every minute top-up completed by your referred users across 6 months.'}
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
