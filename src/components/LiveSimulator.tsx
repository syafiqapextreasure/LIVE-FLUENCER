import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, 
  Square, 
  Coffee, 
  Volume2, 
  VolumeX, 
  Layers, 
  Send, 
  RotateCcw, 
  Sparkles, 
  Heart, 
  Share2, 
  UserPlus, 
  Gift, 
  Check, 
  Info,
  Edit3
} from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../i18n/translations';
import { LivePhoneHostPresenter } from './HostVisuals';

interface SimulatorProps {
  lang: Language;
}

interface SimComment {
  id: string;
  user: string;
  text: string;
  type: 'viewer' | 'host' | 'system' | 'gift';
  time: string;
}

const SIMULATOR_HEARTS = [
  { id: 1, left: '74%', delay: '0s', duration: '2.8s', size: 16, color: '#F43F5E' },
  { id: 2, left: '82%', delay: '0.5s', duration: '3.1s', size: 20, color: '#EC4899' },
  { id: 3, left: '90%', delay: '1.0s', duration: '2.9s', size: 14, color: '#FB7185' },
  { id: 4, left: '78%', delay: '1.5s', duration: '3.3s', size: 18, color: '#E11D48' },
  { id: 5, left: '86%', delay: '2.0s', duration: '2.7s', size: 16, color: '#FDA4AF' },
];

export const LiveSimulator: React.FC<SimulatorProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang].simulator;

  // Simulator operational states
  const [streamState, setStreamState] = useState<'live' | 'brb' | 'cutaway' | 'stopped'>('live');
  const [mode, setMode] = useState<'auto' | 'manual'>('auto');
  const [isMuted, setIsMuted] = useState(false);
  const [gesture, setGesture] = useState<'default' | 'lift' | 'show' | 'put_back' | 'point'>('default');
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [speechText, setSpeechText] = useState('');
  
  // Viewer stats
  const [viewerCount, setViewerCount] = useState(148);
  const [likeCount, setLikeCount] = useState(1280);

  // Comments feed
  const [comments, setComments] = useState<SimComment[]>([
    {
      id: 'c1',
      user: 'siti_norhaliza',
      text: lang === 'bm' ? 'Hai sis! Serum ni sesuai untuk kulit kering tak?' : 'Hi sis! Is this serum good for dry skin?',
      type: 'viewer',
      time: '14:02'
    },
    {
      id: 'c2',
      user: 'Host Nurul (AI)',
      text: lang === 'bm' ? 'Hai Siti! Sesuai sangat, formula ni ada Hyaluronic Acid & Ceramide untuk lembapkan kulit sepanjang hari ya.' : 'Hi Siti! Absolutely, it is formulated with Hyaluronic Acid & Ceramide for all-day hydration.',
      type: 'host',
      time: '14:02'
    }
  ]);

  // Input states
  const [customComment, setCustomComment] = useState('');
  const [pendingDraft, setPendingDraft] = useState<string | null>(null);

  const commentEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll comments within the phone screen
  useEffect(() => {
    commentEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [comments, isSpeaking]);

  const speakHost = (text: string, gestureToUse: 'default' | 'lift' | 'show' | 'put_back' | 'point' = 'show') => {
    if (streamState === 'stopped' || streamState === 'brb') return;
    
    setIsSpeaking(true);
    setSpeechText(text);
    setGesture(gestureToUse);

    if (!isMuted && typeof window !== 'undefined' && 'speechSynthesis' in window) {
      try {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = lang === 'bm' ? 'ms-MY' : 'en-US';
        utterance.rate = 1.0;
        window.speechSynthesis.speak(utterance);
      } catch {
        // graceful silence
      }
    }

    setTimeout(() => {
      setIsSpeaking(false);
      setSpeechText('');
      setGesture('default');
    }, 4500);
  };

  const handleIncomingComment = (userText: string, defaultReply: string, gestureToUse: 'default' | 'lift' | 'show' | 'put_back' | 'point' = 'show') => {
    if (streamState === 'stopped') return;

    const newViewerComment: SimComment = {
      id: Date.now().toString(),
      user: 'Anda (Penonton)',
      text: userText,
      type: 'viewer',
      time: 'Sekarang'
    };

    setComments((prev) => [...prev, newViewerComment]);

    if (mode === 'auto') {
      setTimeout(() => {
        const newHostComment: SimComment = {
          id: (Date.now() + 1).toString(),
          user: 'Host Nurul (AI)',
          text: defaultReply,
          type: 'host',
          time: 'Sekarang'
        };
        setComments((prev) => [...prev, newHostComment]);
        speakHost(defaultReply, gestureToUse);
      }, 700);
    } else {
      setPendingDraft(defaultReply);
    }
  };

  const handleSendDraft = () => {
    if (!pendingDraft || streamState === 'stopped') return;
    const newHostComment: SimComment = {
      id: Date.now().toString(),
      user: 'Host Nurul (AI)',
      text: pendingDraft,
      type: 'host',
      time: 'Sekarang'
    };
    setComments((prev) => [...prev, newHostComment]);
    speakHost(pendingDraft, 'show');
    setPendingDraft(null);
  };

  const triggerJoin = () => {
    if (streamState === 'stopped') return;
    setViewerCount((v) => v + 1);
    const joinText = lang === 'bm' ? 'Farah & 3 penonton lain menyertai siaran live' : 'Farah & 3 other viewers joined the live';
    setComments((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        user: 'Sistem',
        text: joinText,
        type: 'system',
        time: 'Sekarang'
      }
    ]);
    const greetingText = lang === 'bm' ? 'Selamat datang Farah dan rakan-rakan baru! Jemput tengok tawaran Beg Kuning ya.' : 'Welcome Farah and all new viewers! Feel free to check our Yellow Bag specials.';
    speakHost(greetingText, 'default');
  };

  const triggerLike = () => {
    if (streamState === 'stopped') return;
    setLikeCount((l) => l + 50);
  };

  const triggerShare = () => {
    if (streamState === 'stopped') return;
    const shareText = lang === 'bm' ? 'Faizal berkongsi siaran live ini' : 'Faizal shared this live stream';
    setComments((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        user: 'Sistem',
        text: shareText,
        type: 'system',
        time: 'Sekarang'
      }
    ]);
    speakHost(lang === 'bm' ? 'Terima kasih banyak Faizal sebab share live kami! Moga murah rezeki.' : 'Thank you so much Faizal for sharing the live stream!', 'default');
  };

  const triggerGift = () => {
    if (streamState === 'stopped') return;
    const giftText = lang === 'bm' ? 'Imran menghantar 🌹 1x Rose' : 'Imran sent 🌹 1x Rose';
    setComments((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        user: 'Sistem Hadiah',
        text: giftText,
        type: 'gift',
        time: 'Sekarang'
      }
    ]);
    speakHost(lang === 'bm' ? 'Wah terima kasih Imran atas hadiah Rose yang cantik ini! Hargai sangat sokongan anda.' : 'Wow thank you so much Imran for the lovely Rose! Really appreciate your support.', 'default');
  };

  const handleRestart = () => {
    setStreamState('live');
    setViewerCount(150);
    setLikeCount(1300);
    setComments([
      {
        id: 'init1',
        user: 'Host Nurul (AI)',
        text: lang === 'bm' ? 'Salam semua! Live kembali bersiaran. Sila ajukan apa jua soalan mengenai produk kami.' : 'Hello everyone! Live is back on. Feel free to ask any questions about our products.',
        type: 'host',
        time: 'Sekarang'
      }
    ]);
    speakHost(lang === 'bm' ? 'Salam semua, jom kita mula!' : 'Hello all, let us begin!', 'default');
  };

  return (
    <section id="demo" className="py-24 sm:py-32 bg-[#040E1A] relative overflow-hidden">
      {/* Background glow highlights matching Hero */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
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
          
          {/* Visible Disclaimer Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500/15 border border-amber-400/40 text-amber-300 text-sm font-bold shadow-sm">
            <Info className="w-4 h-4 shrink-0 text-amber-400" />
            <span>{t.disclaimer}</span>
          </div>
        </div>

        {/* Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: 9:16 Phone Screen */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[340px] h-[640px] rounded-[44px] p-3.5 bg-gradient-to-b from-slate-700 via-slate-900 to-black shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85),0_0_35px_rgba(18,200,245,0.25)] border-4 border-slate-700/80 ring-1 ring-cyan-500/40 flex flex-col justify-between overflow-hidden">
              
              {/* Phone Speaker Notch */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-32 h-5 bg-slate-950 rounded-full z-30 flex items-center justify-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-800" />
                <div className="w-12 h-1 rounded-full bg-slate-800" />
              </div>

              {/* Status Header */}
              <div className="relative z-20 pt-5 px-2 flex items-center justify-between text-xs text-white">
                <div className="flex items-center gap-1.5">
                  <span className={`px-2.5 py-0.5 rounded-md text-[11px] font-black tracking-wider uppercase shadow ${
                    streamState === 'live' ? 'bg-rose-600 text-white' :
                    streamState === 'brb' ? 'bg-amber-600 text-white' :
                    streamState === 'cutaway' ? 'bg-cyan-600 text-white' : 'bg-slate-700 text-slate-300'
                  }`}>
                    {streamState === 'live' ? 'LIVE' :
                     streamState === 'brb' ? 'BRB' :
                     streamState === 'cutaway' ? 'CUTAWAY' : 'STOPPED'}
                  </span>
                  
                  <div className="flex items-center gap-1 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-full text-slate-200">
                    <span className="font-mono text-[11px] font-bold">{viewerCount}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <div className="bg-cyan-400 text-slate-950 px-2 py-0.5 rounded font-black text-[10px] tracking-wider">
                    SIMULASI
                  </div>
                </div>
              </div>

              {/* Live Host Presenter / Screen States */}
              <div className="absolute inset-0 z-10 pt-12 pb-24 flex items-center justify-center">
                {streamState === 'live' && (
                  <LivePhoneHostPresenter
                    gesture={gesture}
                    isSpeaking={isSpeaking}
                    hostName="Nurul"
                  />
                )}

                {streamState === 'brb' && (
                  <div className="w-full h-full flex flex-col items-center justify-center text-center p-6 bg-slate-950/90 backdrop-blur-md text-white space-y-3">
                    <Coffee className="w-14 h-14 text-amber-400 animate-bounce" />
                    <div className="text-xl font-bold">{t.statusBrb}</div>
                    <p className="text-xs text-slate-300">Host sedang berehat sebentar (1 minit). Sila kekal bersama kami.</p>
                  </div>
                )}

                {streamState === 'cutaway' && (
                  <div className="w-full h-full flex flex-col items-center justify-center text-center p-6 bg-cyan-950/90 backdrop-blur-md text-white space-y-4">
                    <div className="w-24 h-40 rounded-2xl bg-amber-500/20 border-2 border-amber-400 flex flex-col items-center justify-center shadow-lg">
                      <div className="w-6 h-6 rounded-full bg-amber-400 mb-2" />
                      <div className="font-extrabold text-amber-300 text-sm">GLOW SERUM</div>
                      <div className="text-[10px] text-white">50ml • RM59</div>
                    </div>
                    <div className="text-sm font-bold text-cyan-300">Sorotan Produk Terperinci</div>
                    <p className="text-xs text-slate-300">Penonton melihat butiran ramuan dan tekstur produk.</p>
                  </div>
                )}

                {streamState === 'stopped' && (
                  <div className="w-full h-full flex flex-col items-center justify-center text-center p-6 bg-black/90 backdrop-blur-md text-white space-y-3">
                    <Square className="w-12 h-12 text-rose-500" />
                    <div className="text-xl font-bold text-rose-400">{t.statusStopped}</div>
                    <p className="text-xs text-slate-300">Siaran telah dihentikan secara selamat. Baki minit terpelihara.</p>
                    <button
                      onClick={handleRestart}
                      className="px-4 py-2 bg-gradient-to-r from-cyan-400 to-[#12C8F5] text-slate-950 rounded-xl text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>{t.btnRestart}</span>
                    </button>
                  </div>
                )}
              </div>

              {/* Host Speech Bubble Overlay when speaking */}
              {isSpeaking && speechText && (
                <div className="absolute top-20 left-4 right-4 z-20 p-3 rounded-2xl bg-cyan-950/95 border border-cyan-400/50 backdrop-blur-md shadow-2xl animate-in zoom-in-95 duration-200">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-cyan-300 mb-1">
                    <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                    <span>Host Nurul bercakap:</span>
                  </div>
                  <p className="text-xs text-white leading-relaxed font-medium">
                    "{speechText}"
                  </p>
                </div>
              )}

              {/* Continuous floating hearts in simulator when live */}
              {streamState === 'live' && (
                <div className="absolute inset-0 pointer-events-none overflow-hidden z-25">
                  {SIMULATOR_HEARTS.map((h) => (
                    <div
                      key={h.id}
                      className="absolute bottom-14 floating-heart"
                      style={{
                        left: h.left,
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
                          filter: `drop-shadow(0 0 6px ${h.color})`,
                        }}
                      />
                    </div>
                  ))}
                </div>
              )}

              {/* Floating Live Comments inside Phone */}
              <div className="relative z-20 mt-auto pb-2 space-y-2 text-left max-h-48 overflow-y-auto pr-1">
                {comments.slice(-4).map((c) => (
                  <div
                    key={c.id}
                    className={`p-2 rounded-xl text-xs backdrop-blur-md shadow-sm animate-in fade-in slide-in-from-bottom-2 ${
                      c.type === 'host'
                        ? 'bg-cyan-950/85 border border-cyan-400/40 text-white ml-2'
                        : c.type === 'system'
                        ? 'bg-black/60 border border-white/10 text-cyan-300 text-[11px]'
                        : c.type === 'gift'
                        ? 'bg-rose-950/80 border border-rose-400/50 text-rose-200 font-bold'
                        : 'bg-black/75 border border-white/10 text-white mr-2'
                    }`}
                  >
                    <span className="font-bold text-[11px] block text-cyan-300">
                      {c.user}:
                    </span>
                    <span className="text-[12px] leading-snug">{c.text}</span>
                  </div>
                ))}
                <div ref={commentEndRef} />
              </div>

              {/* Bottom Phone Action Bar */}
              <div className="relative z-20 pt-1 flex items-center justify-between border-t border-white/10">
                <button
                  onClick={() => speakHost(lang === 'bm' ? 'Tekan Beg Kuning di bawah untuk tebus baucar diskaun RM10 sekarang!' : 'Click the Yellow Bag below to redeem your RM10 discount voucher now!', 'point')}
                  className="flex items-center gap-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 px-3 py-1.5 rounded-lg text-xs font-black shadow cursor-pointer"
                >
                  <span>Beg Kuning</span>
                </button>
                <div className="flex items-center gap-2">
                  <button
                    onClick={triggerLike}
                    className="flex items-center gap-1 text-rose-400 bg-rose-500/20 px-2.5 py-1 rounded-full text-xs font-bold border border-rose-500/30 hover:bg-rose-500/30 cursor-pointer"
                  >
                    <Heart className="w-3.5 h-3.5 fill-rose-500" />
                    <span>{likeCount}</span>
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Interactive Controls Console */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Bar: Live Controls & Mode Selector */}
            <div className="p-6 rounded-3xl glass-panel-dark border border-cyan-500/25 space-y-6 text-left">
              
              {/* Broadcast Action Buttons */}
              <div>
                <div className="text-xs uppercase tracking-wider font-mono text-cyan-400 font-bold mb-3">
                  Kawalan Sesi Siaran:
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                  <button
                    onClick={() => setStreamState('live')}
                    className={`px-3 py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 border transition-all cursor-pointer min-h-[44px] ${
                      streamState === 'live'
                        ? 'bg-rose-600 text-white border-rose-400 shadow-[0_0_15px_rgba(244,63,94,0.4)]'
                        : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10'
                    }`}
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Live</span>
                  </button>

                  <button
                    onClick={() => setStreamState('brb')}
                    className={`px-3 py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 border transition-all cursor-pointer min-h-[44px] ${
                      streamState === 'brb'
                        ? 'bg-purple-600 text-white border-purple-400'
                        : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10'
                    }`}
                  >
                    <Coffee className="w-3.5 h-3.5" />
                    <span>{t.btnBrb}</span>
                  </button>

                  <button
                    onClick={() => setStreamState('cutaway')}
                    className={`px-3 py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 border transition-all cursor-pointer min-h-[44px] ${
                      streamState === 'cutaway'
                        ? 'bg-cyan-600 text-white border-cyan-400'
                        : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10'
                    }`}
                  >
                    <Layers className="w-3.5 h-3.5" />
                    <span>{t.btnCutaway}</span>
                  </button>

                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className={`px-3 py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 border transition-all cursor-pointer min-h-[44px] ${
                      isMuted
                        ? 'bg-slate-700 text-slate-200 border-slate-500'
                        : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10'
                    }`}
                  >
                    {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                    <span>{isMuted ? t.btnUnmute : t.btnMute}</span>
                  </button>

                  <button
                    onClick={() => setStreamState('stopped')}
                    className={`px-3 py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 border transition-all cursor-pointer min-h-[44px] ${
                      streamState === 'stopped'
                        ? 'bg-red-700 text-white border-red-500'
                        : 'bg-red-950/40 text-red-300 border-red-500/30 hover:bg-red-900/40'
                    }`}
                  >
                    <Square className="w-3.5 h-3.5 fill-current" />
                    <span>{t.btnStop}</span>
                  </button>
                </div>
              </div>

              {/* Auto vs Manual Mode Switcher */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <span className="text-sm font-semibold text-white">
                  {t.modeLabel}
                </span>
                <div className="inline-flex p-1 bg-black/50 rounded-xl border border-white/10">
                  <button
                    onClick={() => setMode('auto')}
                    className={`px-4 py-2 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                      mode === 'auto'
                        ? 'bg-cyan-500 text-slate-950 shadow'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    {t.modeAuto}
                  </button>
                  <button
                    onClick={() => setMode('manual')}
                    className={`px-4 py-2 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                      mode === 'manual'
                        ? 'bg-cyan-500 text-slate-950 shadow'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    {t.modeManual}
                  </button>
                </div>
              </div>

            </div>

            {/* Quick Test Comments */}
            <div className="p-6 rounded-3xl glass-panel-dark border border-cyan-500/25 space-y-4 text-left">
              <div className="text-xs uppercase tracking-wider font-mono text-cyan-400 font-bold">
                {t.quickCommentsTitle}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                <button
                  onClick={() => handleIncomingComment(
                    t.qc1,
                    lang === 'bm'
                      ? 'Set Skincare Glowing ni cuma RM59 sahaja hari ini sis! Jimat RM20 berbanding harga biasa.'
                      : 'This Glowing Skincare set is only RM59 today sis! Save RM20 off the normal price.',
                    'show'
                  )}
                  className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-left text-xs text-slate-200 hover:text-white transition-all cursor-pointer"
                >
                  <span className="font-bold text-cyan-300 block mb-1">Soalan 1:</span>
                  <span>"{t.qc1}"</span>
                </button>

                <button
                  onClick={() => handleIncomingComment(
                    t.qc2,
                    lang === 'bm'
                      ? 'Ada sis! Kami pos ke seluruh Sabah dan Sarawak dengan kurier ekspres RM10 sahaja.'
                      : 'Yes sis! We ship nationwide to Sabah and Sarawak via express courier for just RM10.',
                    'default'
                  )}
                  className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-left text-xs text-slate-200 hover:text-white transition-all cursor-pointer"
                >
                  <span className="font-bold text-cyan-300 block mb-1">Soalan 2:</span>
                  <span>"{t.qc2}"</span>
                </button>

                <button
                  onClick={() => handleIncomingComment(
                    t.qc3,
                    lang === 'bm'
                      ? 'Boleh COD kak! Boleh pilih bayar tunai masa barang sampai di alamat anda melalui Beg Kuning.'
                      : 'Yes, COD is supported! You can select Cash On Delivery upon checkout.',
                    'lift'
                  )}
                  className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-left text-xs text-slate-200 hover:text-white transition-all cursor-pointer"
                >
                  <span className="font-bold text-cyan-300 block mb-1">Soalan 3:</span>
                  <span>"{t.qc3}"</span>
                </button>
              </div>

              {/* Custom Comment Field */}
              <div className="pt-2 flex gap-2">
                <input
                  type="text"
                  value={customComment}
                  onChange={(e) => setCustomComment(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && customComment.trim()) {
                      handleIncomingComment(
                        customComment,
                        lang === 'bm'
                          ? `Terima kasih atas soalan: "${customComment}". Maklumat lanjut ada dalam beg kuning atau boleh hantar DM ya!`
                          : `Thank you for asking: "${customComment}". More details in shop bag or feel free to DM!`,
                        'show'
                      );
                      setCustomComment('');
                    }
                  }}
                  placeholder={t.sendCustomPlaceholder}
                  className="flex-1 bg-black/40 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 min-h-[48px]"
                />
                <button
                  onClick={() => {
                    if (customComment.trim()) {
                      handleIncomingComment(
                        customComment,
                        lang === 'bm'
                          ? `Terima kasih atas soalan: "${customComment}". Maklumat lanjut ada dalam beg kuning atau boleh hantar DM ya!`
                          : `Thank you for asking: "${customComment}". More details in shop bag or feel free to DM!`,
                        'show'
                      );
                      setCustomComment('');
                    }
                  }}
                  className="px-5 py-3 bg-gradient-to-r from-cyan-400 to-[#12C8F5] text-slate-950 font-bold rounded-xl text-sm flex items-center gap-1.5 cursor-pointer min-h-[48px] shadow"
                >
                  <Send className="w-4 h-4" />
                  <span>{t.sendBtn}</span>
                </button>
              </div>
            </div>

            {/* Manual Draft Review Box */}
            {mode === 'manual' && pendingDraft && (
              <div className="p-6 rounded-3xl bg-cyan-950/60 border-2 border-cyan-400 shadow-2xl space-y-3 text-left animate-in fade-in duration-200">
                <div className="flex items-center justify-between text-cyan-300">
                  <div className="flex items-center gap-2 font-bold text-sm">
                    <Edit3 className="w-4 h-4" />
                    <span>{t.draftTitle}</span>
                  </div>
                  <span className="text-xs bg-cyan-500/20 text-cyan-300 px-2.5 py-0.5 rounded-full font-mono">Mod Semakan</span>
                </div>
                <p className="text-xs text-slate-300">{t.draftHint}</p>
                
                <textarea
                  value={pendingDraft}
                  onChange={(e) => setPendingDraft(e.target.value)}
                  rows={2}
                  className="w-full bg-black/50 border border-cyan-500/40 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-cyan-300 resize-none font-medium"
                />

                <div className="flex justify-end gap-2">
                  <button
                    onClick={() => setPendingDraft(null)}
                    className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 cursor-pointer"
                  >
                    Batal
                  </button>
                  <button
                    onClick={handleSendDraft}
                    className="px-5 py-2.5 rounded-xl text-xs font-bold text-[#041421] bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-cyan-200 flex items-center gap-1.5 shadow-md cursor-pointer"
                  >
                    <Check className="w-4 h-4" />
                    <span>{t.draftSendBtn}</span>
                  </button>
                </div>
              </div>
            )}

            {/* Event Simulator Triggers */}
            <div className="p-6 rounded-3xl glass-panel-dark border border-cyan-500/25 space-y-3 text-left">
              <div className="text-xs uppercase tracking-wider font-mono text-cyan-400 font-bold">
                {t.eventsTitle}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                <button
                  onClick={triggerJoin}
                  className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-slate-200 flex items-center justify-center gap-2 cursor-pointer min-h-[44px]"
                >
                  <UserPlus className="w-4 h-4 text-cyan-400" />
                  <span>{t.evJoin}</span>
                </button>

                <button
                  onClick={triggerLike}
                  className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-slate-200 flex items-center justify-center gap-2 cursor-pointer min-h-[44px]"
                >
                  <Heart className="w-4 h-4 text-rose-400" />
                  <span>{t.evLike}</span>
                </button>

                <button
                  onClick={triggerShare}
                  className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-slate-200 flex items-center justify-center gap-2 cursor-pointer min-h-[44px]"
                >
                  <Share2 className="w-4 h-4 text-blue-400" />
                  <span>{t.evShare}</span>
                </button>

                <button
                  onClick={triggerGift}
                  className="p-3 rounded-xl bg-rose-950/40 hover:bg-rose-900/40 border border-rose-500/30 text-xs font-semibold text-rose-200 flex items-center justify-center gap-2 cursor-pointer min-h-[44px]"
                >
                  <Gift className="w-4 h-4 text-rose-400" />
                  <span>{t.evGift}</span>
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
