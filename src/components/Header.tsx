import React, { useState } from 'react';
import { Menu, X, Globe, User, ArrowRight, BookOpen } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../i18n/translations';
import { BrandLogo } from './BrandLogo';

interface HeaderProps {
  lang: Language;
  onToggleLang: () => void;
  onOpenLogin: () => void;
  onOpenGetStarted: () => void;
  onOpenBlog?: () => void;
  onGoHome?: () => void;
  currentView?: 'home' | 'blog';
}

export const Header: React.FC<HeaderProps> = ({
  lang,
  onToggleLang,
  onOpenLogin,
  onOpenGetStarted,
  onOpenBlog,
  onGoHome,
  currentView = 'home',
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = TRANSLATIONS[lang].nav;

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onGoHome) onGoHome();
    if (currentView === 'blog') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNavSectionClick = (e: React.MouseEvent, sectionId: string) => {
    if (currentView === 'blog' && onGoHome) {
      e.preventDefault();
      onGoHome();
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-2xl bg-[#040E1A]/90 border-b border-cyan-500/20 shadow-[0_4px_30px_rgba(0,0,0,0.5)] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Zone with Robot Mascot */}
        <button
          onClick={handleHomeClick}
          className="flex items-center group text-decoration-none focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-xl p-1 text-left cursor-pointer"
          aria-label="LiveFluencer.Ai Laman Utama"
        >
          <BrandLogo size="md" showSubtext={true} />
        </button>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-6 lg:gap-8 text-[17px] font-semibold text-slate-200"
          aria-label="Navigasi Utama"
        >
          <button
            onClick={handleHomeClick}
            className={`hover:text-[#12C8F5] transition-colors py-2 cursor-pointer ${
              currentView === 'home' ? 'text-white font-bold' : 'text-slate-300'
            }`}
          >
            {lang === 'bm' ? 'Utama' : 'Home'}
          </button>
          
          <a
            href="#ciri"
            onClick={(e) => handleNavSectionClick(e, 'ciri')}
            className="hover:text-[#12C8F5] transition-colors py-2"
          >
            {t.features}
          </a>

          <a
            href="#harga"
            onClick={(e) => handleNavSectionClick(e, 'harga')}
            className="hover:text-[#12C8F5] transition-colors py-2"
          >
            {t.pricing}
          </a>

          <a
            href="#affiliate"
            onClick={(e) => handleNavSectionClick(e, 'affiliate')}
            className="hover:text-[#12C8F5] transition-colors py-2"
          >
            {t.affiliate}
          </a>

          {/* New Blog Link */}
          <button
            onClick={() => {
              if (onOpenBlog) onOpenBlog();
            }}
            className={`hover:text-[#12C8F5] transition-colors py-2 cursor-pointer flex items-center gap-1.5 ${
              currentView === 'blog' ? 'text-cyan-300 font-bold' : 'text-slate-200'
            }`}
          >
            <BookOpen className="w-4 h-4 text-cyan-400" />
            <span>Blog</span>
          </button>

          <a
            href="#faq"
            onClick={(e) => handleNavSectionClick(e, 'faq')}
            className="hover:text-[#12C8F5] transition-colors py-2"
          >
            FAQ
          </a>
        </nav>

        {/* Action Zone: Language Toggle + Log In + Get Started */}
        <div className="hidden md:flex items-center gap-3.5">
          {/* BM / EN Language Toggle */}
          <button
            onClick={onToggleLang}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors cursor-pointer min-h-[42px]"
            title={lang === 'bm' ? 'Switch to English' : 'Tukar ke Bahasa Melayu'}
            aria-label="Tukar Bahasa"
          >
            <Globe className="w-4 h-4 text-cyan-400" />
            <span className="font-mono text-xs tracking-wider">{lang.toUpperCase()}</span>
          </button>

          {/* Log In */}
          <button
            onClick={onOpenLogin}
            className="px-5 py-2.5 rounded-xl text-[17px] font-semibold text-slate-200 hover:text-white bg-slate-900/60 hover:bg-slate-800/80 border border-white/10 transition-colors cursor-pointer min-h-[46px]"
          >
            {t.login}
          </button>

          {/* Primary Action Button: Get Started */}
          <button
            onClick={onOpenGetStarted}
            className="px-6 py-2.5 rounded-xl text-[17px] font-bold text-white bg-gradient-to-r from-[#7C3AED] via-[#6366F1] to-[#06B6D4] hover:from-[#8B5CF6] hover:to-[#0891B2] shadow-[0_0_25px_rgba(124,58,237,0.5)] hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] transition-all transform hover:-translate-y-0.5 cursor-pointer min-h-[46px] flex items-center gap-2"
          >
            <span>{t.getStarted}</span>
          </button>
        </div>

        {/* Mobile Menu Controls */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onToggleLang}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold text-slate-200 bg-white/10 border border-white/10 min-h-[40px]"
            aria-label="Tukar Bahasa"
          >
            <Globe className="w-3.5 h-3.5 text-cyan-400" />
            <span>{lang.toUpperCase()}</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl text-slate-200 hover:text-white bg-white/5 border border-white/10 min-h-[44px] min-w-[44px] flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Tutup Menu' : 'Buka Menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-3 pb-6 bg-[#040E1A]/95 backdrop-blur-2xl border-b border-cyan-500/20 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-1 text-base font-semibold text-slate-200">
            <button
              onClick={(e) => {
                setMobileMenuOpen(false);
                handleHomeClick(e);
              }}
              className="px-4 py-2.5 text-left rounded-xl hover:bg-white/5 hover:text-cyan-400 transition-colors"
            >
              {lang === 'bm' ? 'Utama' : 'Home'}
            </button>
            <a
              href="#ciri"
              onClick={(e) => {
                setMobileMenuOpen(false);
                handleNavSectionClick(e, 'ciri');
              }}
              className="px-4 py-2.5 rounded-xl hover:bg-white/5 hover:text-cyan-400 transition-colors"
            >
              {t.features}
            </a>
            <a
              href="#harga"
              onClick={(e) => {
                setMobileMenuOpen(false);
                handleNavSectionClick(e, 'harga');
              }}
              className="px-4 py-2.5 rounded-xl hover:bg-white/5 hover:text-cyan-400 transition-colors"
            >
              {t.pricing}
            </a>
            <a
              href="#affiliate"
              onClick={(e) => {
                setMobileMenuOpen(false);
                handleNavSectionClick(e, 'affiliate');
              }}
              className="px-4 py-2.5 rounded-xl hover:bg-white/5 hover:text-cyan-400 transition-colors"
            >
              {t.affiliate}
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenBlog) onOpenBlog();
              }}
              className="px-4 py-2.5 text-left rounded-xl hover:bg-white/5 hover:text-cyan-400 transition-colors flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4 text-cyan-400" />
              <span>Blog</span>
            </button>
            <a
              href="#faq"
              onClick={(e) => {
                setMobileMenuOpen(false);
                handleNavSectionClick(e, 'faq');
              }}
              className="px-4 py-2.5 rounded-xl hover:bg-white/5 hover:text-cyan-400 transition-colors"
            >
              FAQ
            </a>
          </nav>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenLogin();
              }}
              className="w-full py-3 px-4 rounded-xl text-base font-semibold text-slate-200 bg-white/5 border border-white/10 flex items-center justify-center gap-2"
            >
              <User className="w-4 h-4 text-cyan-400" />
              <span>{t.login}</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenGetStarted();
              }}
              className="w-full py-3 px-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-[#7C3AED] via-[#6366F1] to-[#06B6D4] flex items-center justify-center gap-2 shadow-lg"
            >
              <span>{t.getStarted}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
