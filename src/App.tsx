import React, { useState } from 'react';
import { Language } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BenefitStrip } from './components/BenefitStrip';
import { SetupSteps } from './components/SetupSteps';
import { FeatureSections } from './components/FeatureSections';
import { PricingSection } from './components/PricingSection';
import { AffiliateSection } from './components/AffiliateSection';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { BlogPage } from './components/BlogPage';
import { FloatingSupport } from './components/FloatingSupport';
import { 
  NotifyModal, 
  CustomPlanModal, 
  AffiliateInterestModal,
  LoginHonestyModal, 
  LegalModal 
} from './components/Modals';

export function App() {
  // Default language: Malaysian Bahasa Melayu ('bm')
  const [lang, setLang] = useState<Language>('bm');

  // Navigation view state: 'home' or 'blog'
  const [currentView, setCurrentView] = useState<'home' | 'blog'>('home');

  // Modal open states
  const [notifyModalOpen, setNotifyModalOpen] = useState(false);
  const [selectedPlanName, setSelectedPlanName] = useState<string>('Pakej Grow');
  const [customPlanModalOpen, setCustomPlanModalOpen] = useState(false);
  const [affiliateModalOpen, setAffiliateModalOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | 'affiliateTerms'>('privacy');

  // Handlers
  const handleToggleLang = () => {
    setLang((prev) => (prev === 'bm' ? 'en' : 'bm'));
  };

  const handleOpenNotify = (planName?: string) => {
    if (planName) setSelectedPlanName(planName);
    setNotifyModalOpen(true);
  };

  const handleOpenLegal = (type: 'privacy' | 'terms' | 'affiliateTerms') => {
    setLegalModalType(type);
    setLegalModalOpen(true);
  };

  const scrollToPricing = () => {
    setCurrentView('home');
    setTimeout(() => {
      const el = document.getElementById('harga');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-[#040E1A] text-[#F5F8FC] flex flex-col font-sans selection:bg-[#12C8F5] selection:text-[#040E1A]">
      
      {/* Sticky Header with navigation to Home and Blog */}
      <Header
        lang={lang}
        onToggleLang={handleToggleLang}
        onOpenLogin={() => setLoginModalOpen(true)}
        onOpenGetStarted={() => handleOpenNotify('Akaun Percubaan')}
        onOpenBlog={() => {
          setCurrentView('blog');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onGoHome={() => setCurrentView('home')}
        currentView={currentView}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentView === 'blog' ? (
          <BlogPage
            lang={lang}
            onBackToHome={() => {
              setCurrentView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onExplorePricing={scrollToPricing}
          />
        ) : (
          <>
            {/* 1. Hero Section with seamless background photo (like Image 2) & non-stop floating hearts */}
            <Hero
              lang={lang}
              onExplorePricing={scrollToPricing}
            />

            {/* 2. Benefit Strip */}
            <BenefitStrip lang={lang} />

            {/* 3. 3 Setup Steps (tight padding, no dead space) */}
            <SetupSteps lang={lang} />

            {/* 4. Beautiful Re-designed Feature Cards (tight padding, no dead space) */}
            <FeatureSections lang={lang} />

            {/* 5. Pricing Section (tight padding, no dead space) */}
            <PricingSection
              lang={lang}
              onOpenNotify={handleOpenNotify}
              onOpenCustomPlan={() => setCustomPlanModalOpen(true)}
            />

            {/* 6. Affiliate Section (tight padding, no dead space) */}
            <AffiliateSection
              lang={lang}
              onOpenRegister={() => setAffiliateModalOpen(true)}
            />

            {/* 7. FAQ Section (tight padding, no dead space) */}
            <FAQSection lang={lang} />

            {/* 8. Final CTA (tight padding, no dead space) */}
            <FinalCTA
              lang={lang}
              onExploreDemo={scrollToPricing}
              onOpenNotify={() => handleOpenNotify('Umum')}
            />
          </>
        )}
      </main>

      {/* Footer with enlarged font sizes & Blog link */}
      <Footer
        lang={lang}
        onOpenPrivacy={() => handleOpenLegal('privacy')}
        onOpenTerms={() => handleOpenLegal('terms')}
        onOpenAffiliateTerms={() => handleOpenLegal('affiliateTerms')}
        onOpenContact={() => setCustomPlanModalOpen(true)}
        onOpenBlog={() => {
          setCurrentView('blog');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Floating BM Support Entry */}
      <FloatingSupport lang={lang} />

      {/* Interactive Modals */}
      <NotifyModal
        isOpen={notifyModalOpen}
        onClose={() => setNotifyModalOpen(false)}
        lang={lang}
        planName={selectedPlanName}
      />

      <CustomPlanModal
        isOpen={customPlanModalOpen}
        onClose={() => setCustomPlanModalOpen(false)}
        lang={lang}
      />

      <AffiliateInterestModal
        isOpen={affiliateModalOpen}
        onClose={() => setAffiliateModalOpen(false)}
        lang={lang}
      />

      <LoginHonestyModal
        isOpen={loginModalOpen}
        onClose={() => setLoginModalOpen(false)}
        lang={lang}
      />

      <LegalModal
        isOpen={legalModalOpen}
        onClose={() => setLegalModalOpen(false)}
        lang={lang}
        type={legalModalType}
      />

    </div>
  );
}

export default App;
