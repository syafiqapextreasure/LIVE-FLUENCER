import React, { useState } from 'react';
import { 
  UserCheck, 
  MessageSquare, 
  HeartHandshake, 
  CalendarClock, 
  Coins, 
  BarChart3, 
  CheckCircle2, 
  Sparkles,
  Zap
} from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../i18n/translations';
import { HOST_PERSONAS } from '../config/siteConfig';

export const FeatureSections: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = TRANSLATIONS[lang].features;
  const [selectedPersona, setSelectedPersona] = useState(0);

  const featureCards = [
    {
      id: 'host',
      icon: UserCheck,
      badge: 'Format 9:16',
      title: t.cardA.title,
      tagline: t.cardA.tagline,
      description: t.cardA.summary,
      points: [
        lang === 'bm' ? 'Muat naik 1 foto jelas untuk jana host bergerak' : 'Upload 1 clear photo to render realistic moving host',
        lang === 'bm' ? 'Pilihan 5 personaliti unik & intonasi BM tempatan' : '5 unique persona styles & natural Malaysian BM tone',
        lang === 'bm' ? 'Tetapan ucapan salam & topik dilarang tersuai' : 'Custom greeting scripts & blacklisted topic safety',
      ],
      borderGlow: 'hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(18,200,245,0.2)]',
      iconColor: 'text-cyan-400',
    },
    {
      id: 'qa',
      icon: MessageSquare,
      badge: 'Bank Q&A Rasmi',
      title: t.cardB.title,
      tagline: t.cardB.tagline,
      description: t.cardB.summary,
      points: [
        lang === 'bm' ? 'Jawapan suara tepat mengikut harga & promosi rasmi' : 'Accurate voice replies following your official prices',
        lang === 'bm' ? 'Padanan soalan verbatim tanpa mereka maklumat palsu' : 'Verbatim answers without hallucinating false info',
        lang === 'bm' ? 'Pilihan Mod Auto segera atau Mod Manual semak deraf' : 'Instant Auto Mode or Manual Mode draft review',
      ],
      borderGlow: 'hover:border-purple-400/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]',
      iconColor: 'text-purple-400',
    },
    {
      id: 'engagement',
      icon: HeartHandshake,
      badge: 'Interaksi & Gerak',
      title: t.cardC.title,
      tagline: t.cardC.tagline,
      description: t.cardC.summary,
      points: [
        lang === 'bm' ? 'Sapaan nama penonton & ucapan kelompok pintar' : 'Thank viewers by name & smart group greetings',
        lang === 'bm' ? 'Keutamaan khas untuk pemberi hadiah & berlian' : 'Gift priority queue for dedicated supporters',
        lang === 'bm' ? 'Gerak isyarat produk: angkat, tunjuk ke Beg Kuning' : 'Product gestures: lift, show camera, point to Buy',
      ],
      borderGlow: 'hover:border-rose-400/50 hover:shadow-[0_0_30px_rgba(244,63,94,0.2)]',
      iconColor: 'text-rose-400',
    },
    {
      id: 'planning',
      icon: CalendarClock,
      badge: 'Jadual Automatik',
      title: t.cardD.title,
      tagline: t.cardD.tagline,
      description: t.cardD.summary,
      points: [
        lang === 'bm' ? 'Jana pelan live automatik mengikut durasi sesi' : 'Auto-generate live schedule based on target duration',
        lang === 'bm' ? 'Poin percakapan & selang masa boleh disunting' : 'Editable talking points & customized time intervals',
        lang === 'bm' ? 'Kawalan siaran pantas: Live, BRB, Cutaway, Mute, STOP' : 'Fast stream controls: Live, BRB, Cutaway, Mute, STOP',
      ],
      borderGlow: 'hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(18,200,245,0.2)]',
      iconColor: 'text-cyan-400',
    },
    {
      id: 'cost',
      icon: Coins,
      badge: '1 Kredit = 1 Minit',
      title: t.cardE.title,
      tagline: t.cardE.tagline,
      description: t.cardE.summary,
      points: [
        lang === 'bm' ? 'Tiada yuran langganan bulanan — bayar minit diguna' : 'No recurring monthly lock-in — pay as you use',
        lang === 'bm' ? 'Perlindungan pelayan: henti automatik jika tab tutup' : 'Server-enforced stop terminates session if tab closes',
        lang === 'bm' ? 'Buku lejar telus memaparkan baki kredit & pecahan kos' : 'Transparent ledger showing minute balance & breakdown',
      ],
      borderGlow: 'hover:border-purple-400/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]',
      iconColor: 'text-purple-400',
    },
    {
      id: 'analytics',
      icon: BarChart3,
      badge: 'Laporan Sesi',
      title: t.cardF.title,
      tagline: t.cardF.tagline,
      description: t.cardF.summary,
      points: [
        lang === 'bm' ? 'Kad ringkasan pantas: baki minit & jam live bulan ini' : 'Summary cards: remaining minutes & live hours this month',
        lang === 'bm' ? 'Perincian sesi: komen dijawab, padanan Q&A & tontonan' : 'Session reports: comments answered, Q&A matches & views',
        lang === 'bm' ? 'Log perbualan host & penonton boleh dicari & ditapis' : 'Searchable & filterable host & viewer chat logs',
      ],
      borderGlow: 'hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(18,200,245,0.2)]',
      iconColor: 'text-cyan-400',
    },
  ];

  return (
    <section id="ciri" className="py-10 sm:py-14 bg-[#040E1A] relative overflow-hidden text-left">
      {/* Background ambient lighting glows */}
      <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-400/40 text-cyan-300 text-xs sm:text-sm font-bold tracking-wider uppercase shadow-[0_0_15px_rgba(18,200,245,0.2)]">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>{t.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight text-balance">
            {t.heading}
          </h2>

          <p className="text-xl sm:text-2xl text-slate-300 font-normal leading-relaxed">
            {t.subheading}
          </p>
        </div>

        {/* 6 Balanced, Uniform Height Feature Cards (Comfortable & Larger Text) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {featureCards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.id}
                className={`rounded-3xl glass-panel-dark p-7 sm:p-8 border border-cyan-500/25 shadow-xl flex flex-col justify-between transition-all duration-300 ${card.borderGlow} h-full group`}
              >
                <div>
                  {/* Top Row: Icon & Category Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-300 shadow-[0_0_15px_rgba(18,200,245,0.2)] group-hover:scale-105 transition-transform">
                      <Icon className={`w-6 h-6 ${card.iconColor}`} />
                    </div>
                    <span className="font-mono text-xs uppercase tracking-wider text-cyan-300 font-bold bg-cyan-950/60 border border-cyan-500/30 px-3 py-1 rounded-full">
                      {card.badge}
                    </span>
                  </div>

                  {/* Tagline */}
                  <div className="text-xs uppercase tracking-wider font-bold text-cyan-400 mb-1">
                    {card.tagline}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                    {card.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-slate-300 text-base leading-relaxed mb-6 font-normal">
                    {card.description}
                  </p>

                  {/* 3 Bullet Points (Enlarged text size as requested in Image 1) */}
                  <ul className="space-y-3.5 border-t border-white/10 pt-5">
                    {card.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3 leading-snug">
                        <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5 drop-shadow-[0_0_8px_rgba(18,200,245,0.6)]" />
                        <span className="text-[15px] sm:text-base text-slate-100 font-medium">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Subtle bottom accent line */}
                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs text-slate-400 font-medium">
                  <span className="text-cyan-300 font-semibold flex items-center gap-1.5 text-xs sm:text-sm">
                    <Zap className="w-4 h-4" />
                    <span>{lang === 'bm' ? 'Ciri Terbina' : 'Built-in Feature'}</span>
                  </span>
                  <span className="font-mono text-slate-400 text-xs sm:text-sm font-semibold">LiveFluencer.Ai</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* 
          Interactive Persona Style Selector Bar (Enlarged text size as requested in Image 2) 
        */}
        <div className="mt-8 p-6 sm:p-8 rounded-3xl glass-panel-dark border border-cyan-500/25 shadow-xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-cyan-400 mb-1.5">
                <Sparkles className="w-4 h-4" />
                <span>{lang === 'bm' ? 'PILIHAN 5 GAYA PERSONALITI HOST:' : '5 HOST PERSONA STYLES:'}</span>
              </div>
              <h4 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                {lang === 'bm' ? 'Sesuaikan Watak Host Dengan Produk Anda' : 'Tailor Your Host Persona to Your Brand'}
              </h4>
            </div>

            {/* Persona Switcher Buttons (Enlarged size & text) */}
            <div className="flex flex-wrap gap-2.5">
              {HOST_PERSONAS.map((p, idx) => (
                <button
                  key={p.id}
                  onClick={() => setSelectedPersona(idx)}
                  className={`px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base font-bold transition-all cursor-pointer ${
                    selectedPersona === idx
                      ? 'bg-gradient-to-r from-cyan-400 to-[#12C8F5] text-slate-950 shadow-[0_0_20px_rgba(18,200,245,0.45)]'
                      : 'bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10'
                  }`}
                >
                  {lang === 'bm' ? p.nameBm : p.nameEn}
                </button>
              ))}
            </div>
          </div>

          {/* Active Persona Preview Banner (Enlarged text & clear hierarchy) */}
          <div className="mt-6 p-5 sm:p-6 rounded-2xl bg-black/60 border border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
            <div className="space-y-1.5">
              <span className="text-xs sm:text-sm font-mono text-cyan-300 font-bold uppercase tracking-wider">
                {lang === 'bm' ? 'CONTOH UCAPAN SALAM HOST:' : 'HOST GREETING SCRIPT SAMPLE:'}
              </span>
              <p className="text-base sm:text-lg font-bold text-white italic leading-relaxed">
                "{lang === 'bm' ? HOST_PERSONAS[selectedPersona].greetingSampleBm : HOST_PERSONAS[selectedPersona].greetingSampleEn}"
              </p>
            </div>
            <div className="text-sm sm:text-base text-slate-200 font-medium shrink-0 max-w-sm text-left sm:text-right leading-relaxed">
              {lang === 'bm' ? HOST_PERSONAS[selectedPersona].descBm : HOST_PERSONAS[selectedPersona].descEn}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
