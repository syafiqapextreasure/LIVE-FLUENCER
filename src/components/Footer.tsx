import React from 'react';
import { ShieldCheck, Headphones, Heart } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../i18n/translations';
import { BrandLogo } from './BrandLogo';

interface FooterProps {
  lang: Language;
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onOpenAffiliateTerms: () => void;
  onOpenContact: () => void;
  onOpenBlog: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  lang,
  onOpenPrivacy,
  onOpenTerms,
  onOpenAffiliateTerms,
  onOpenContact,
  onOpenBlog,
}) => {
  const t = TRANSLATIONS[lang].footer;

  return (
    <footer className="bg-[#030A14] border-t border-cyan-500/20 pt-12 pb-16 text-slate-300 relative text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-10 border-b border-white/10">
          
          {/* Brand Column (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <a href="#" className="inline-block" aria-label="LiveFluencer.Ai Laman Utama">
              <BrandLogo size="md" showSubtext={true} />
            </a>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-lg">
              {t.brandDesc}
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-1 text-sm sm:text-base text-slate-200 font-semibold">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>{t.safePayment}</span>
              </div>
              <div className="flex items-center gap-2">
                <Headphones className="w-5 h-5 text-cyan-400 shrink-0" />
                <span>{t.localSupport}</span>
              </div>
            </div>
          </div>

          {/* Product Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-base sm:text-lg font-black text-white uppercase tracking-wider font-mono">
              {t.productCol}
            </h4>
            <ul className="space-y-3 text-base sm:text-lg font-medium">
              <li>
                <a href="#ciri" className="text-slate-200 hover:text-cyan-300 transition-colors">
                  {t.linkFeatures}
                </a>
              </li>
              <li>
                <a href="#harga" className="text-slate-200 hover:text-cyan-300 transition-colors">
                  {t.linkPricing}
                </a>
              </li>
              <li>
                <a href="#affiliate" className="text-slate-200 hover:text-cyan-300 transition-colors">
                  {t.linkAffiliate}
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenBlog}
                  className="text-slate-200 hover:text-cyan-300 transition-colors cursor-pointer text-left font-medium"
                >
                  Blog & Panduan Live
                </button>
              </li>
              <li>
                <a href="#faq" className="text-slate-200 hover:text-cyan-300 transition-colors">
                  Soalan Lazim (FAQ)
                </a>
              </li>
            </ul>
          </div>

          {/* Support & Legal Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-base sm:text-lg font-black text-white uppercase tracking-wider font-mono">
              {t.legalCol}
            </h4>
            <ul className="space-y-3 text-base sm:text-lg font-medium">
              <li>
                <button
                  onClick={onOpenContact}
                  className="text-slate-200 hover:text-cyan-300 transition-colors text-left cursor-pointer font-medium"
                >
                  {t.linkContact}
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenPrivacy}
                  className="text-slate-200 hover:text-cyan-300 transition-colors text-left cursor-pointer font-medium"
                >
                  {t.linkPrivacy}
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenTerms}
                  className="text-slate-200 hover:text-cyan-300 transition-colors text-left cursor-pointer font-medium"
                >
                  {t.linkTerms}
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenAffiliateTerms}
                  className="text-slate-200 hover:text-cyan-300 transition-colors text-left cursor-pointer font-medium"
                >
                  {t.linkAffiliateTerms}
                </button>
              </li>
            </ul>
            <p className="text-xs sm:text-sm text-slate-400 leading-snug pt-2">
              {t.draftNotice}
            </p>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Slogan with enlarged legible text */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-sm sm:text-base text-slate-300 font-medium gap-3">
          <p>{t.copyright}</p>
          <p className="flex items-center gap-1.5 font-semibold text-slate-200">
            <span>Direka khusus untuk ekosistem live-selling Malaysia</span>
            <Heart className="w-4 h-4 text-rose-500 fill-rose-500 inline" />
          </p>
        </div>

      </div>
    </footer>
  );
};
