import React, { useState, useEffect, useRef, useMemo } from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  Play, 
  Eye, 
  TrendingUp, 
  Camera, 
  MessageSquare, 
  FileText, 
  Tag, 
  Users, 
  BarChart3, 
  Headphones,
  Heart
} from 'lucide-react';
import { Language } from '../types';
import { RobotMascotIcon } from './BrandLogo';
import heroStudioImg from '../assets/images/hero_host_studio_exact_1791106783503.jpg';

interface HeroProps {
  lang: Language;
  onExplorePricing: () => void;
}

// 14 continuous non-stop floating hearts with staggered delays, sway, and sizes
const CONTINUOUS_HEARTS = [
  { id: 1, right: '4%', delay: '0s', duration: '3.0s', size: 20, color: '#F43F5E' },
  { id: 2, right: '8%', delay: '0.4s', duration: '2.8s', size: 26, color: '#EC4899' },
  { id: 3, right: '12%', delay: '0.8s', duration: '3.3s', size: 18, color: '#FB7185' },
  { id: 4, right: '6%', delay: '1.2s', duration: '3.1s', size: 24, color: '#E11D48' },
  { id: 5, right: '10%', delay: '1.6s', duration: '2.9s', size: 22, color: '#F43F5E' },
  { id: 6, right: '14%', delay: '2.0s', duration: '3.4s', size: 28, color: '#EC4899' },
  { id: 7, right: '5%', delay: '2.4s', duration: '3.0s', size: 16, color: '#FDA4AF' },
  { id: 8, right: '9%', delay: '2.8s', duration: '3.2s', size: 22, color: '#F43F5E' },
  { id: 9, right: '13%', delay: '3.2s', duration: '2.7s', size: 19, color: '#BE123C' },
  { id: 10, right: '7%', delay: '3.6s', duration: '3.5s', size: 25, color: '#FB7185' },
  { id: 11, right: '11%', delay: '4.0s', duration: '3.1s', size: 18, color: '#EC4899' },
  { id: 12, right: '15%', delay: '4.4s', duration: '2.9s', size: 24, color: '#F43F5E' },
  { id: 13, right: '8%', delay: '4.8s', duration: '3.2s', size: 20, color: '#FB7185' },
  { id: 14, right: '12%', delay: '5.2s', duration: '3.0s', size: 22, color: '#EC4899' },
];

const BM_COMMENTS = [
  { id: 1, text: 'Suka sangat! ❤️❤️', icon: '❤️' },
  { id: 2, text: 'Berapa harga sis?', icon: '💬' },
  { id: 3, text: 'Ada COD tak?', icon: '📦' },
  { id: 4, text: 'Wahh best!', icon: '✨' },
  { id: 5, text: 'Order 2 ya!', icon: '🛍️' },
  { id: 6, text: 'Stok masih ada?', icon: '🔥' },
  { id: 7, text: 'Warna pink ada lagi?', icon: '🌸' },
  { id: 8, text: 'Dah checkout! Tq host ❤️', icon: '⚡' },
  { id: 9, text: 'Voucher Beg Kuning dah claim!', icon: '🎟️' },
  { id: 10, text: 'Laju betul host balas haha', icon: '🚀' },
  { id: 11, text: 'Kualiti padu ni, berbaloi!', icon: '👍' },
  { id: 12, text: 'Boleh pos esok ke?', icon: '🚚' },
];

const EN_COMMENTS = [
  { id: 1, text: 'Love it so much! ❤️❤️', icon: '❤️' },
  { id: 2, text: 'How much is it?', icon: '💬' },
  { id: 3, text: 'Do you offer COD?', icon: '📦' },
  { id: 4, text: 'Looks amazing!', icon: '✨' },
  { id: 5, text: 'Ordered 2 sets!', icon: '🛍️' },
  { id: 6, text: 'Any stock left?', icon: '🔥' },
  { id: 7, text: 'Is pink available?', icon: '🌸' },
  { id: 8, text: 'Just checked out! Thanks host ❤️', icon: '⚡' },
  { id: 9, text: 'Claimed yellow bag voucher!', icon: '🎟️' },
  { id: 10, text: 'AI responds so fast haha', icon: '🚀' },
  { id: 11, text: 'Top tier quality, worth it!', icon: '👍' },
  { id: 12, text: 'Can you ship tomorrow?', icon: '🚚' },
];

/**
 * Real-time TikTok/Shopee style animated comment stream:
 * - New comments enter smoothly from the bottom
 * - Existing comments scroll upwards
 * - Top comment dissolves and disappears under the gradient mask
 */
const LiveCommentsStream: React.FC<{ lang: Language }> = ({ lang }) => {
  const commentCatalog = useMemo(() => (lang === 'bm' ? BM_COMMENTS : EN_COMMENTS), [lang]);

  // Keep a queue of visible comments (6 visible slots)
  const [items, setItems] = useState(() =>
    commentCatalog.slice(0, 6).map((c, i) => ({ ...c, key: `${c.id}-${i}` }))
  );
  const nextIdxRef = useRef(6);

  useEffect(() => {
    setItems(commentCatalog.slice(0, 6).map((c, i) => ({ ...c, key: `${c.id}-${i}` })));
    nextIdxRef.current = 6;

    const interval = setInterval(() => {
      setItems((prev) => {
        const nextItem = commentCatalog[nextIdxRef.current % commentCatalog.length];
        nextIdxRef.current += 1;
        // Shift window: drop top item, append new item at bottom
        return [...prev.slice(1), { ...nextItem, key: `${nextItem.id}-${Date.now()}` }];
      });
    }, 2200);

    return () => clearInterval(interval);
  }, [commentCatalog]);

  return (
    <div className="relative h-[290px] sm:h-[310px] w-full max-w-[230px] overflow-hidden flex flex-col justify-end pr-2 sm:pr-4 my-auto pointer-events-auto [mask-image:linear-gradient(to_bottom,transparent_0%,black_18%,black_100%)] select-none">
      <div className="flex flex-col items-end gap-2 transition-transform duration-500 ease-out">
        {items.map((c, idx) => {
          const isTop = idx === 0;
          return (
            <div
              key={c.key}
              className={`p-2 sm:p-2.5 rounded-2xl bg-black/80 backdrop-blur-md border border-white/15 text-xs text-white shadow-lg max-w-[215px] transition-all duration-500 ease-out ${
                isTop
                  ? 'opacity-20 -translate-y-2 scale-95'
                  : 'opacity-100 translate-y-0 scale-100 comment-bubble-in'
              }`}
            >
              <div className="flex items-center gap-1.5">
                <span className="text-xs shrink-0">{c.icon}</span>
                <span className="font-semibold text-slate-100 text-[11px] sm:text-[12px] whitespace-nowrap">
                  {c.text}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const Hero: React.FC<HeroProps> = ({
  lang,
  onExplorePricing,
}) => {
  return (
    <section className="relative pt-8 pb-16 lg:pt-14 lg:pb-20 bg-[#040E1A] overflow-hidden text-left min-h-[640px] flex flex-col justify-between">
      
      {/* 
        HERO BACKGROUND IMAGE (Like Image 2):
        Seamless full-bleed studio photo positioned on the right, smoothly fading into the dark navy canvas on the left.
      */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        {/* Right side background image */}
        <div className="absolute top-0 right-0 bottom-0 w-full lg:w-[62%] h-full">
          <img
            src={heroStudioImg || '/images/hero_host_studio_exact_1791106783503.jpg'}
            alt="Malaysian AI Live Host in studio"
            className="w-full h-full object-cover object-[center_20%] lg:object-center opacity-85 lg:opacity-95"
            referrerPolicy="no-referrer"
          />
          {/* Subtle gradient vignette to blend seamlessly into canvas */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#040E1A] via-transparent to-[#040E1A]/80 lg:hidden" />
          <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-[#040E1A] via-[#040E1A]/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#040E1A] via-transparent to-[#040E1A]/40" />
        </div>

        {/* Ambient atmospheric glows */}
        <div className="absolute top-10 left-10 w-[550px] h-[550px] bg-cyan-500/10 rounded-full blur-[160px]" />
        <div className="absolute top-20 right-10 w-[600px] h-[600px] bg-purple-600/15 rounded-full blur-[170px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[500px]">
          
          {/* Left Column: Headlines, Checkpoints & CTAs */}
          <div className="lg:col-span-6 space-y-6 max-w-xl">
            
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-400/40 text-cyan-300 text-xs sm:text-sm font-bold tracking-wider uppercase shadow-[0_0_15px_rgba(18,200,245,0.25)] backdrop-blur-md">
              <span>{lang === 'bm' ? 'AI LIVE HOST UNTUK TIKTOK & SHOPEE' : 'AI LIVE HOST FOR TIKTOK & SHOPEE'}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black text-white tracking-tight leading-[1.1] text-balance drop-shadow-md">
              {lang === 'bm' ? (
                <>
                  AI Live Host <span className="text-[#12C8F5] drop-shadow-[0_0_20px_rgba(18,200,245,0.7)]">24/7</span> Anda Yang{' '}
                  <span className="bg-gradient-to-r from-[#A855F7] via-[#C084FC] to-[#EC4899] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(168,85,247,0.5)]">
                    Menjual Untuk Anda
                  </span>
                </>
              ) : (
                <>
                  Your <span className="text-[#12C8F5] drop-shadow-[0_0_20px_rgba(18,200,245,0.7)]">24/7</span> AI Live Host That{' '}
                  <span className="bg-gradient-to-r from-[#A855F7] via-[#C084FC] to-[#EC4899] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(168,85,247,0.5)]">
                    Sells for You
                  </span>
                </>
              )}
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-slate-200 font-normal leading-relaxed drop-shadow">
              {lang === 'bm'
                ? 'Interaksi masa nyata dengan penonton, penglibatan lebih pintar, jualan lebih tinggi — tanpa batasan fizikal atau keletihan host manusia.'
                : 'Real-time interaction with viewers, smarter engagement, higher GMV — without the limitations of human hosts.'}
            </p>

            {/* 4 Feature Bullet Checkpoints */}
            <div className="space-y-3 pt-1">
              <div className="flex items-center gap-3 text-slate-100 text-sm sm:text-base font-semibold drop-shadow">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 drop-shadow-[0_0_8px_rgba(18,200,245,0.8)]" />
                <span>{lang === 'bm' ? 'Host AI dengan interaksi masa nyata' : 'AI Host with real-time interaction'}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-100 text-sm sm:text-base font-semibold drop-shadow">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 drop-shadow-[0_0_8px_rgba(18,200,245,0.8)]" />
                <span>{lang === 'bm' ? 'Kefahaman produk & bank Q&A pantas' : 'Product knowledge & instant Q&A'}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-100 text-sm sm:text-base font-semibold drop-shadow">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 drop-shadow-[0_0_8px_rgba(18,200,245,0.8)]" />
                <span>{lang === 'bm' ? 'Auto komen, tawaran promosi & diskaun' : 'Auto comments, offers & promotions'}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-100 text-sm sm:text-base font-semibold drop-shadow">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 drop-shadow-[0_0_8px_rgba(18,200,245,0.8)]" />
                <span>{lang === 'bm' ? 'Konsisten, profesional dan tidak pernah penat' : 'Consistent, professional and never gets tired'}</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <button
                onClick={onExplorePricing}
                className="px-8 py-3.5 rounded-full text-base sm:text-lg font-bold text-white bg-gradient-to-r from-[#7C3AED] via-[#6366F1] to-[#06B6D4] hover:from-[#8B5CF6] hover:to-[#0891B2] shadow-[0_0_30px_rgba(124,58,237,0.5)] hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] transition-all transform hover:-translate-y-0.5 cursor-pointer flex items-center gap-2 min-h-[50px]"
              >
                <span>{lang === 'bm' ? 'Mula Sekarang' : 'Start Now'}</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href="#ciri"
                className="px-7 py-3.5 rounded-full text-base sm:text-lg font-bold text-white bg-slate-900/80 hover:bg-slate-800/90 border border-white/20 hover:border-cyan-400/50 shadow-md transition-all transform hover:-translate-y-0.5 cursor-pointer flex items-center gap-2.5 min-h-[50px]"
              >
                <Play className="w-4 h-4 fill-white text-white" />
                <span>{lang === 'bm' ? 'Lihat Ciri-Ciri' : 'Explore Features'}</span>
              </a>
            </div>

            {/* Slogan */}
            <div className="text-xs sm:text-sm text-slate-400 font-medium pt-1">
              {lang === 'bm' ? '– Go Live. Jual Lebih. Berkembang Pantas.' : '– Go Live. Sell More. Grow Faster.'}
            </div>

          </div>

          {/* Right Column: Floating Live Badges & Comments directly over background photo */}
          <div className="lg:col-span-6 relative h-[480px] sm:h-[540px] flex flex-col justify-between pointer-events-none">
            
            {/* Top Row: Neon Brand Sign & Live Viewer Counter */}
            <div className="flex items-center justify-between w-full pt-2">
              
              {/* Glowing Neon Sign at Top Left */}
              <div className="flex items-center gap-2.5 bg-black/75 backdrop-blur-md px-3.5 py-1.5 rounded-2xl border border-pink-500/30 shadow-[0_0_25px_rgba(255,0,127,0.35)] pointer-events-auto">
                <RobotMascotIcon size={26} />
                <span 
                  className="text-sm tracking-tight flex items-center"
                  style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 900 }}
                >
                  <span className="text-[#FF007F]">LIVE</span>
                  <span className="text-white">FLUENCER.</span>
                  <span className="text-[#00A3FF]">AI</span>
                </span>
                <div className="ml-1 px-1.5 py-0.5 rounded border border-rose-500 bg-rose-600/35 text-rose-300 font-black text-[9px] tracking-widest uppercase shadow-[0_0_12px_rgba(244,63,94,0.9)]">
                  LIVE
                </div>
              </div>

              {/* Top Right Live Viewer Counter Badge */}
              <div className="flex items-center gap-1.5 bg-black/75 backdrop-blur-md border border-white/15 px-3.5 py-1.5 rounded-full text-xs text-white shadow-xl pointer-events-auto">
                <Eye className="w-3.5 h-3.5 text-rose-400" />
                <span className="font-mono font-bold text-rose-300">12.5K</span>
                <span className="bg-rose-600 text-white font-black text-[10px] px-1.5 py-0.2 rounded uppercase ml-0.5 animate-pulse shadow-[0_0_8px_rgba(225,29,72,0.8)]">
                  LIVE
                </span>
              </div>

            </div>

            {/* Floating Live Comments animated stream (TikTok / Shopee Live style) */}
            <LiveCommentsStream lang={lang} />

            {/* Bottom Row: 3x GMV Glass Banner Card */}
            <div className="w-full flex justify-end pb-2">
              <div className="p-3 sm:px-4 sm:py-3 rounded-2xl glass-panel-dark border border-cyan-400/40 shadow-[0_12px_35px_rgba(0,0,0,0.85)] flex items-center gap-3 pointer-events-auto backdrop-blur-xl">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 flex items-center justify-center shrink-0 shadow-md">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-100 leading-snug">
                  {lang === 'bm' ? (
                    <>
                      Peniaga LiveFluencer.Ai nikmati{' '}
                      <span className="text-[#12C8F5] font-black text-sm sm:text-base">3x lebih tinggi GMV</span>
                    </>
                  ) : (
                    <>
                      Brands using LiveFluencer.Ai see up to{' '}
                      <span className="text-[#12C8F5] font-black text-sm sm:text-base">3x higher GMV</span>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* NON-STOP CONTINUOUS FLOATING HEARTS STREAMING UPWARDS */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden z-30">
              {CONTINUOUS_HEARTS.map((h) => (
                <div
                  key={h.id}
                  className="absolute bottom-6 floating-heart"
                  style={{
                    right: h.right,
                    ['--delay' as string]: h.delay,
                    ['--duration' as string]: h.duration,
                  }}
                >
                  <Heart
                    style={{
                      width: h.size,
                      height: h.size,
                      fill: h.color,
                      color: h.color,
                      filter: `drop-shadow(0 0 8px ${h.color})`,
                    }}
                  />
                </div>
              ))}
            </div>

          </div>

        </div>

        {/* Channel & Trust Strip (Exactly matching Image 2) */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 flex flex-col lg:flex-row items-center justify-between gap-6 text-slate-300">
          
          {/* E-Commerce Channel Badges */}
          <div className="flex items-center gap-6 sm:gap-8 text-base sm:text-lg font-bold text-white tracking-wide">
            <div className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
              <span className="w-6 h-6 rounded-full bg-black border border-white/20 flex items-center justify-center text-xs font-mono font-black text-cyan-400">
                ♪
              </span>
              <span>TikTok</span>
            </div>
            <div className="flex items-center gap-2 hover:text-amber-400 transition-colors">
              <span className="w-6 h-6 rounded-full bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-xs font-black text-amber-400">
                S
              </span>
              <span>Shopee</span>
            </div>
            <div className="flex items-center gap-2 hover:text-blue-400 transition-colors">
              <span className="w-6 h-6 rounded-full bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-xs font-black text-blue-400">
                L
              </span>
              <span>Lazada</span>
            </div>
          </div>

          {/* Divider & Trust Marker */}
          <div className="hidden lg:block h-6 w-px bg-slate-700" />

          {/* Trusted Statement & Local Malaysian Brands */}
          <div className="flex flex-wrap items-center justify-center lg:justify-end gap-4 sm:gap-6 text-xs sm:text-sm text-slate-400 font-semibold">
            <span className="text-slate-400 font-mono uppercase tracking-wider text-[11px] sm:text-xs">
              TRUSTED BY GROWING BRANDS IN MALAYSIA
            </span>
            <span className="text-slate-200 font-bold hover:text-cyan-300 transition-colors">AS's Beauty</span>
            <span className="text-slate-200 font-bold hover:text-cyan-300 transition-colors">Ayam Gepuk ORI JAKARTA</span>
            <span className="text-slate-200 font-bold hover:text-cyan-300 transition-colors">Raja Perfume</span>
            <span className="text-slate-400 text-xs italic">and more...</span>
          </div>

        </div>

        {/* 7 Quick Feature Highlights Row */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 text-center">
          
          <div className="p-3.5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-cyan-400/40 transition-all">
            <div className="w-8 h-8 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mx-auto mb-2">
              <Camera className="w-4 h-4" />
            </div>
            <div className="font-bold text-xs sm:text-sm text-white">AI Host</div>
            <div className="text-[10px] text-slate-400 mt-0.5">Natural & Engaging</div>
          </div>

          <div className="p-3.5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-cyan-400/40 transition-all">
            <div className="w-8 h-8 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mx-auto mb-2">
              <MessageSquare className="w-4 h-4" />
            </div>
            <div className="font-bold text-xs sm:text-sm text-white">AI Comment Agent</div>
            <div className="text-[10px] text-slate-400 mt-0.5">Real-time Interaction</div>
          </div>

          <div className="p-3.5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-cyan-400/40 transition-all">
            <div className="w-8 h-8 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mx-auto mb-2">
              <FileText className="w-4 h-4" />
            </div>
            <div className="font-bold text-xs sm:text-sm text-white">AI Sales Script</div>
            <div className="text-[10px] text-slate-400 mt-0.5">Converts Viewers</div>
          </div>

          <div className="p-3.5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-cyan-400/40 transition-all">
            <div className="w-8 h-8 rounded-xl bg-cyan-500/10 text-cyan-300 flex items-center justify-center mx-auto mb-2">
              <Tag className="w-4 h-4" />
            </div>
            <div className="font-bold text-xs sm:text-sm text-white">AI Offer Engine</div>
            <div className="text-[10px] text-slate-400 mt-0.5">Smart Promotions</div>
          </div>

          <div className="p-3.5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-cyan-400/40 transition-all">
            <div className="w-8 h-8 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mx-auto mb-2">
              <Users className="w-4 h-4" />
            </div>
            <div className="font-bold text-xs sm:text-sm text-white">AI Affiliate Agent</div>
            <div className="text-[10px] text-slate-400 mt-0.5">Expands Reach</div>
          </div>

          <div className="p-3.5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-cyan-400/40 transition-all">
            <div className="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto mb-2">
              <BarChart3 className="w-4 h-4" />
            </div>
            <div className="font-bold text-xs sm:text-sm text-white">AI Analytics</div>
            <div className="text-[10px] text-slate-400 mt-0.5">Track Performance</div>
          </div>

          <div className="p-3.5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-cyan-400/40 transition-all col-span-2 sm:col-span-1">
            <div className="w-8 h-8 rounded-xl bg-rose-500/10 text-rose-400 flex items-center justify-center mx-auto mb-2">
              <Headphones className="w-4 h-4" />
            </div>
            <div className="font-bold text-xs sm:text-sm text-white">Human Escalation</div>
            <div className="text-[10px] text-slate-400 mt-0.5">When Needed</div>
          </div>

        </div>

      </div>
    </section>
  );
};
