import React, { useState } from 'react';
import { MessageSquare, X, Send, Paperclip, CheckCircle2, ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../i18n/translations';

export const FloatingSupport: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = TRANSLATIONS[lang].supportWidget;
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [attachedFileName, setAttachedFileName] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setAttachedFileName(e.target.files[0].name);
    }
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() && !attachedFileName) return;
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setMessage('');
    setAttachedFileName(null);
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Button (bottom-right) */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-[#12C8F5] text-slate-950 font-bold text-sm shadow-[0_4px_25px_rgba(18,200,245,0.45)] hover:shadow-[0_4px_30px_rgba(18,200,245,0.65)] hover:scale-105 transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
          aria-label={t.floatingBtn}
          aria-expanded={isOpen}
        >
          <MessageSquare className="w-5 h-5 fill-slate-950" />
          <span className="tracking-wide">{t.floatingBtn}</span>
        </button>
      </div>

      {/* Support Drawer / Dialog */}
      {isOpen && (
        <div className="fixed bottom-22 right-4 sm:right-6 z-50 w-full max-w-sm rounded-3xl glass-panel-dark border-2 border-cyan-400/50 shadow-2xl p-5 text-left animate-in slide-in-from-bottom-5 duration-200">
          
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div>
              <h4 className="text-base font-bold text-white flex items-center gap-1.5">
                <span>{t.title}</span>
              </h4>
              <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-medium mt-0.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{t.status}</span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Tutup"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          {isSubmitted ? (
            <div className="py-6 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h5 className="text-lg font-bold text-white">Mesej Diterima!</h5>
              <p className="text-xs text-slate-300 leading-relaxed">
                Pasukan sokongan tempatan kami di Malaysia telah menerima pertanyaan anda dan akan membalas segera.
              </p>
              <button
                onClick={handleReset}
                className="mt-3 px-4 py-2 bg-white/10 hover:bg-white/15 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer"
              >
                Tutup Sembang
              </button>
            </div>
          ) : (
            <form onSubmit={handleSend} className="pt-3 space-y-3">
              <p className="text-xs text-slate-300 leading-relaxed">
                {t.intro}
              </p>

              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={t.inputPlaceholder}
                rows={3}
                required
                className="w-full bg-black/40 border border-white/15 rounded-xl p-3 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 resize-none"
              />

              {/* File Attachment preview */}
              <div className="flex items-center justify-between">
                <label className="inline-flex items-center gap-1.5 text-xs text-cyan-300 hover:text-cyan-200 cursor-pointer bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
                  <Paperclip className="w-3.5 h-3.5" />
                  <span>{t.attachBtn}</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </label>

                {attachedFileName && (
                  <span className="text-[11px] text-slate-300 truncate max-w-[150px]">
                    {attachedFileName}
                  </span>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-[#12C8F5] hover:from-cyan-300 hover:to-cyan-400 flex items-center justify-center gap-1.5 shadow transition-all cursor-pointer min-h-[40px]"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{t.sendBtn}</span>
              </button>

              <div className="pt-2 text-[10px] text-slate-400 text-center flex items-center justify-center gap-1">
                <ShieldCheck className="w-3 h-3 text-cyan-400 shrink-0" />
                <span>{t.mockNotice}</span>
              </div>
            </form>
          )}

        </div>
      )}
    </>
  );
};
