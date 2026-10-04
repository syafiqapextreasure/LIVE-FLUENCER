import React, { useState } from 'react';
import { 
  Clock, 
  Video, 
  Search, 
  Sparkles, 
  Gift, 
  CheckCircle, 
  FileText,
  Calendar,
  AlertCircle
} from 'lucide-react';
import { Language, ChatMessage } from '../types';
import { TRANSLATIONS } from '../i18n/translations';

const SAMPLE_LOGS: ChatMessage[] = [
  { id: '1', sender: 'viewer', senderName: '@hafiz_kl', text: 'Berapa harga promo hari ini?', time: '14:05', tag: 'harga' },
  { id: '2', sender: 'host', senderName: 'Host Nurul (AI)', text: 'Hai Hafiz! Set Glowing promo sekarang RM59 sahaja, jimat RM20!', time: '14:05', tag: 'harga' },
  { id: '3', sender: 'viewer', senderName: '@siti_aminah', text: 'Pos ke Kuching Sarawak berapa hari sampai?', time: '14:07', tag: 'penghantaran' },
  { id: '4', sender: 'host', senderName: 'Host Nurul (AI)', text: 'Pos ke Sarawak RM10, sampai dalam 3-5 hari bekerja ya Siti.', time: '14:07', tag: 'penghantaran' },
  { id: '5', sender: 'viewer', senderName: '@hafiz_kl', text: 'Sent 🌹 5x Rose', time: '14:10', tag: 'hadiah', giftName: 'Rose', diamondCount: 50 },
  { id: '6', sender: 'host', senderName: 'Host Nurul (AI)', text: 'Terima kasih banyak Hafiz atas 5x Rose! Moga murah rezeki selalu.', time: '14:10', tag: 'hadiah' },
  { id: '7', sender: 'viewer', senderName: '@maya_cantik', text: 'Ada kelulusan KKM tak skincare ni?', time: '14:14', tag: 'am' },
  { id: '8', sender: 'host', senderName: 'Host Nurul (AI)', text: 'Ada sis, ada notifikasi KKM sah dan bebas paraben & merkuri.', time: '14:14', tag: 'am' },
  { id: '9', sender: 'viewer', senderName: '@faris_tech', text: 'Boleh COD kawasan Petaling Jaya?', time: '14:18', tag: 'penghantaran' },
  { id: '10', sender: 'host', senderName: 'Host Nurul (AI)', text: 'Boleh COD, tekan beg kuning dan pilih kaedah Cash On Delivery.', time: '14:18', tag: 'penghantaran' },
];

export const DashboardShowcase: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = TRANSLATIONS[lang].dashboard;
  const [activeTab, setActiveTab] = useState<'overview' | 'logs'>('overview');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState<'all' | 'harga' | 'penghantaran' | 'hadiah'>('all');

  const filteredLogs = SAMPLE_LOGS.filter((msg) => {
    const matchesFilter = activeFilter === 'all' || msg.tag === activeFilter;
    const matchesSearch = 
      msg.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
      msg.senderName.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <section className="py-24 sm:py-32 bg-[#040E1A] relative overflow-hidden text-left">
      {/* Background glow accents matching Hero */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-400/40 text-cyan-300 text-xs sm:text-sm font-bold tracking-wider uppercase shadow-[0_0_15px_rgba(18,200,245,0.2)]">
            <FileText className="w-4 h-4 text-cyan-400" />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight text-balance">
            {t.heading}
          </h2>
          <p className="text-xl sm:text-2xl text-slate-300 font-normal leading-relaxed">
            {t.subheading}
          </p>

          {/* Data disclaimer badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 font-mono">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>{t.dataNotice}</span>
          </div>
        </div>

        {/* 3 Main Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          
          <div className="p-7 rounded-3xl glass-panel-dark border border-cyan-500/25 shadow-xl text-left">
            <div className="flex items-center justify-between text-slate-400 text-sm font-medium mb-2">
              <span>{t.cardBalance}</span>
              <Clock className="w-5 h-5 text-cyan-400" />
            </div>
            <div className="text-4xl font-extrabold font-mono text-cyan-300 tracking-tight tabular-nums">
              480 <span className="text-lg font-sans font-normal text-slate-300">{t.minsUnit}</span>
            </div>
            <div className="mt-2 text-xs text-slate-400">
              1 kredit = 1 minit siaran langsung
            </div>
          </div>

          <div className="p-7 rounded-3xl glass-panel-dark border border-purple-500/25 shadow-xl text-left">
            <div className="flex items-center justify-between text-slate-400 text-sm font-medium mb-2">
              <span>{t.cardLiveTime}</span>
              <Video className="w-5 h-5 text-purple-400" />
            </div>
            <div className="text-4xl font-extrabold font-mono text-white tracking-tight tabular-nums">
              14 <span className="text-lg font-sans font-normal text-slate-300">{t.hoursUnit}</span> 20 <span className="text-lg font-sans font-normal text-slate-300">{t.minsUnit}</span>
            </div>
            <div className="mt-2 text-xs text-slate-400">
              Penggunaan aktif bulan Oktober 2026
            </div>
          </div>

          <div className="p-7 rounded-3xl glass-panel-dark border border-cyan-500/25 shadow-xl text-left">
            <div className="flex items-center justify-between text-slate-400 text-sm font-medium mb-2">
              <span>{t.cardSessions}</span>
              <Calendar className="w-5 h-5 text-cyan-400" />
            </div>
            <div className="text-4xl font-extrabold font-mono text-emerald-400 tracking-tight tabular-nums">
              9 <span className="text-lg font-sans font-normal text-slate-300">sesi selesai</span>
            </div>
            <div className="mt-2 text-xs text-slate-400">
              Purata 1 jam 35 minit setiap sesi
            </div>
          </div>

        </div>

        {/* Detailed Session Report Panel */}
        <div className="rounded-3xl glass-panel-dark border border-cyan-500/25 shadow-2xl p-6 sm:p-8 text-left">
          
          {/* Top Session Header & Tabs */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs text-cyan-400 font-mono font-bold uppercase tracking-wider mb-1">
                <span>Laporan Sesi Contoh</span>
                <span>•</span>
                <span>2 Okt 2026</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {t.sessionName}
              </h3>
            </div>

            {/* Tab switchers */}
            <div className="flex items-center gap-2 p-1 bg-black/50 rounded-xl border border-white/10 self-start sm:self-center">
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                  activeTab === 'overview'
                    ? 'bg-cyan-500 text-slate-950 shadow'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {t.tabOverview}
              </button>
              <button
                onClick={() => setActiveTab('logs')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                  activeTab === 'logs'
                    ? 'bg-cyan-500 text-slate-950 shadow'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {t.tabLogs}
              </button>
            </div>
          </div>

          {/* Tab 1: Session Overview */}
          {activeTab === 'overview' && (
            <div className="pt-6 space-y-8 animate-in fade-in duration-200">
              
              {/* Engagement Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-xs text-slate-400 mb-1">{t.commentsAnswered}</div>
                  <div className="text-2xl font-bold font-mono text-cyan-300 tabular-nums">142</div>
                  <div className="text-[11px] text-emerald-400 mt-1 flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" />
                    <span>{t.qaMatches}: 98</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-xs text-slate-400 mb-1">{t.peakViewers}</div>
                  <div className="text-2xl font-bold font-mono text-white tabular-nums">320</div>
                  <div className="text-[11px] text-slate-400 mt-1">
                    {t.joinsTotal}: 1,840
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-xs text-slate-400 mb-1">{t.giftsReceived}</div>
                  <div className="text-2xl font-bold font-mono text-rose-300 tabular-nums">450 <span className="text-xs text-slate-400 font-sans">berlian</span></div>
                  <div className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                    <Gift className="w-3 h-3" />
                    <span>18x Rose, 4x Heart</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-xs text-slate-400 mb-1">{t.followersGained}</div>
                  <div className="text-2xl font-bold font-mono text-purple-300 tabular-nums">+86</div>
                  <div className="text-[11px] text-slate-400 mt-1">
                    {t.sharesCount}: 42 • {t.likesCount}: 12.4k
                  </div>
                </div>
              </div>

              {/* Top Gifters & Safe Fallback Stats */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div className="p-5 rounded-2xl bg-black/50 border border-white/10">
                  <div className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                    <Gift className="w-4 h-4 text-rose-400" />
                    <span>{t.topGifters}</span>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center justify-between p-2 rounded-xl bg-white/5">
                      <span className="font-bold text-cyan-300">1. @hafiz_kl</span>
                      <span className="font-mono text-rose-300 font-semibold">180 Berlian</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-xl bg-white/5">
                      <span className="font-bold text-cyan-300">2. @nur_shahira</span>
                      <span className="font-mono text-rose-300 font-semibold">120 Berlian</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-xl bg-white/5">
                      <span className="font-bold text-cyan-300">3. @azman_petaling</span>
                      <span className="font-mono text-rose-300 font-semibold">75 Berlian</span>
                    </div>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-black/50 border border-white/10 flex flex-col justify-between">
                  <div>
                    <div className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-cyan-400" />
                      <span>Ketepatan & Perlindungan Jawapan</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Sistem menggunakan padanan verbatim dari Bank Q&A anda untuk soalan harga dan promosi. Untuk 6 soalan di luar skop produk, host dengan sopan menyarankan penonton menghantar mesej DM terus kepada seller.
                    </p>
                  </div>
                  <div className="pt-3 text-[11px] text-cyan-400 font-mono">
                    Autosave setiap 30 saat aktif sepanjang sesi
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* Tab 2: Searchable & Filterable Chat Logs */}
          {activeTab === 'logs' && (
            <div className="pt-6 space-y-4 animate-in fade-in duration-200">
              
              {/* Search & Filter Bar */}
              <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder={t.searchLogPlaceholder}
                    className="w-full bg-black/40 border border-white/15 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400"
                  />
                </div>

                {/* Filter buttons */}
                <div className="flex items-center gap-1.5 flex-wrap">
                  <button
                    onClick={() => setActiveFilter('all')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer ${
                      activeFilter === 'all' ? 'bg-cyan-500 text-slate-950' : 'bg-white/5 text-slate-300 hover:text-white'
                    }`}
                  >
                    {t.filterAll}
                  </button>
                  <button
                    onClick={() => setActiveFilter('harga')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer ${
                      activeFilter === 'harga' ? 'bg-cyan-500 text-slate-950' : 'bg-white/5 text-slate-300 hover:text-white'
                    }`}
                  >
                    {t.filterPrice}
                  </button>
                  <button
                    onClick={() => setActiveFilter('penghantaran')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer ${
                      activeFilter === 'penghantaran' ? 'bg-cyan-500 text-slate-950' : 'bg-white/5 text-slate-300 hover:text-white'
                    }`}
                  >
                    {t.filterShipping}
                  </button>
                  <button
                    onClick={() => setActiveFilter('hadiah')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer ${
                      activeFilter === 'hadiah' ? 'bg-cyan-500 text-slate-950' : 'bg-white/5 text-slate-300 hover:text-white'
                    }`}
                  >
                    {t.filterGifts}
                  </button>
                </div>
              </div>

              {/* Logs List */}
              <div className="space-y-2 max-h-80 overflow-y-auto pr-1">
                {filteredLogs.length > 0 ? (
                  filteredLogs.map((log) => (
                    <div
                      key={log.id}
                      className={`p-3 rounded-xl text-xs border flex items-start justify-between gap-4 ${
                        log.sender === 'host'
                          ? 'bg-cyan-950/40 border-cyan-500/30'
                          : 'bg-black/30 border-white/5'
                      }`}
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className={`font-bold ${log.sender === 'host' ? 'text-cyan-300' : 'text-slate-300'}`}>
                            {log.senderName}
                          </span>
                          {log.tag && (
                            <span className="text-[10px] text-slate-400 font-mono uppercase bg-white/5 px-1.5 py-0.5 rounded">
                              {log.tag}
                            </span>
                          )}
                        </div>
                        <p className="text-white text-[13px] leading-relaxed">
                          {log.text}
                        </p>
                      </div>
                      <span className="text-[11px] font-mono text-slate-400 shrink-0">
                        {log.time}
                      </span>
                    </div>
                  ))
                ) : (
                  <div className="py-8 text-center text-xs text-slate-400">
                    Tiada log sepadan dengan carian anda.
                  </div>
                )}
              </div>

            </div>
          )}

          {/* Footer note: stats date constraint */}
          <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
            <div className="flex items-center gap-1.5">
              <AlertCircle className="w-3.5 h-3.5 text-cyan-400" />
              <span>{t.statsNotice}</span>
            </div>
            <span className="font-mono text-[11px]">Format Laporan Rasmi</span>
          </div>

        </div>

      </div>
    </section>
  );
};
