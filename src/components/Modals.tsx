import React, { useState } from 'react';
import { X, CheckCircle2, ShieldAlert, ArrowRight, ExternalLink, Mail, Phone, User, MessageSquare } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../i18n/translations';
import { SITE_CONFIG } from '../config/siteConfig';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

// 1. Notify Modal (Maklumkan Saya for Pricing Packages)
export const NotifyModal: React.FC<ModalProps & { planName?: string }> = ({
  isOpen,
  onClose,
  lang,
  planName = 'Pakej',
}) => {
  const t = TRANSLATIONS[lang].modals;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-3xl glass-panel-dark border-2 border-cyan-400/40 p-6 sm:p-8 text-left shadow-2xl">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
          aria-label={t.close}
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white">{t.successTitle}</h3>
            <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
              Minat anda untuk pakej <strong className="text-cyan-300">{planName}</strong> telah direkodkan. Anda akan menjadi yang terawal menerima notifikasi sebaik sahaja portal pendaftaran dibuka.
            </p>
            <div className="pt-2 text-xs text-slate-400 font-mono">
              [Pratonton Tempatan — Tiada data dihantar ke pelayan luar]
            </div>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-4 px-6 py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-bold text-sm cursor-pointer"
            >
              {t.close}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <div className="inline-block px-2.5 py-0.5 rounded-md text-xs font-mono font-bold bg-cyan-500/20 text-cyan-300 mb-2">
                Pakej: {planName}
              </div>
              <h3 className="text-2xl font-extrabold text-white tracking-tight">
                {t.notifyTitle}
              </h3>
              <p className="text-sm text-slate-300 mt-1 leading-relaxed">
                {t.notifyDesc}
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">{t.nameLabel} *</label>
                <div className="relative">
                  <User className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="cth. Puan Siti / Butik Seri"
                    className="w-full bg-black/40 border border-white/15 rounded-xl pl-9 pr-3 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">{t.emailLabel} *</label>
                <div className="relative">
                  <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="nama@bisnes.com"
                    className="w-full bg-black/40 border border-white/15 rounded-xl pl-9 pr-3 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">{t.phoneLabel} *</label>
                <div className="relative">
                  <Phone className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+60 12-345 6789"
                    className="w-full bg-black/40 border border-white/15 rounded-xl pl-9 pr-3 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl text-base font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-[#12C8F5] hover:from-cyan-300 hover:to-cyan-400 transition-all shadow-lg cursor-pointer mt-4"
            >
              {t.submitBtn}
            </button>
          </form>
        )}

      </div>
    </div>
  );
};

// 2. Custom Plan Enquiry Modal
export const CustomPlanModal: React.FC<ModalProps> = ({ isOpen, onClose, lang }) => {
  const t = TRANSLATIONS[lang].modals;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-3xl glass-panel-dark border-2 border-cyan-400/40 p-6 sm:p-8 text-left shadow-2xl max-h-[90vh] overflow-y-auto">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
          aria-label={t.close}
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white">{t.successTitle}</h3>
            <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
              Pertanyaan pelan tersuai anda telah direkodkan. Pasukan pakar kami akan menghubungi anda untuk membincangkan keperluan volume minit, multi-host, atau integrasi khas.
            </p>
            <div className="pt-2 text-xs text-slate-400 font-mono">
              [Pratonton Tempatan — Tiada backend disambungkan buat masa ini]
            </div>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-4 px-6 py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-bold text-sm cursor-pointer"
            >
              {t.close}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <h3 className="text-2xl font-extrabold text-white tracking-tight">
                {t.customTitle}
              </h3>
              <p className="text-sm text-slate-300 mt-1 leading-relaxed">
                {t.customDesc}
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">{t.nameLabel} *</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Nama penuh atau nama agensi"
                  className="w-full bg-black/40 border border-white/15 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">{t.emailLabel} *</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="nama@agensi.com"
                  className="w-full bg-black/40 border border-white/15 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">{t.phoneLabel} *</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+60 1x-xxx xxxx"
                  className="w-full bg-black/40 border border-white/15 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">{t.msgLabel}</label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Contoh: Kami perlukan 5,000 minit sebulan dan 3 avatar host berbeza untuk jenama fesyen dan kecantikan kami."
                  className="w-full bg-black/40 border border-white/15 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-cyan-400 resize-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl text-base font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-[#12C8F5] hover:from-cyan-300 hover:to-cyan-400 transition-all shadow-lg cursor-pointer mt-4"
            >
              {t.submitBtn}
            </button>
          </form>
        )}

      </div>
    </div>
  );
};

// 3. Affiliate Registration Interest Modal
export const AffiliateInterestModal: React.FC<ModalProps> = ({ isOpen, onClose, lang }) => {
  const t = TRANSLATIONS[lang].modals;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [platform, setPlatform] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-3xl glass-panel-dark border-2 border-cyan-400/40 p-6 sm:p-8 text-left shadow-2xl">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
          aria-label={t.close}
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white">{t.successTitle}</h3>
            <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
              Pendaftaran minat affiliate anda telah direkodkan. Kami akan menghantar pautan pengaktifan portal dan kod rujukan anda sebaik sahaja program dibuka secara rasmi.
            </p>
            <div className="pt-2 text-xs text-slate-400 font-mono">
              [Pratonton Tempatan — Tiada pendaftaran affiliate sebenar buat masa ini]
            </div>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-4 px-6 py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-bold text-sm cursor-pointer"
            >
              {t.close}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <h3 className="text-2xl font-extrabold text-white tracking-tight">
                {t.affiliateTitle}
              </h3>
              <p className="text-sm text-slate-300 mt-1 leading-relaxed">
                {t.affiliateDesc}
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">{t.nameLabel} *</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Nama anda"
                  className="w-full bg-black/40 border border-white/15 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">{t.emailLabel} *</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="nama@emel.com"
                  className="w-full bg-black/40 border border-white/15 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">{t.phoneLabel} *</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+60 1x-xxx xxxx"
                  className="w-full bg-black/40 border border-white/15 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Akaun TikTok / Media Sosial Anda</label>
                <input
                  type="text"
                  value={platform}
                  onChange={(e) => setPlatform(e.target.value)}
                  placeholder="@username_tiktok"
                  className="w-full bg-black/40 border border-white/15 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl text-base font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-[#12C8F5] hover:from-cyan-300 hover:to-cyan-400 transition-all shadow-lg cursor-pointer mt-4"
            >
              {t.submitBtn}
            </button>
          </form>
        )}

      </div>
    </div>
  );
};

// 4. Honest Login / Auth Guidance Dialog
export const LoginHonestyModal: React.FC<ModalProps> = ({ isOpen, onClose, lang }) => {
  const t = TRANSLATIONS[lang].modals;
  const appUrl = SITE_CONFIG.appLoginUrl;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-md rounded-3xl glass-panel-dark border-2 border-cyan-400/40 p-6 sm:p-8 text-left shadow-2xl space-y-4">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
          aria-label={t.close}
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-12 h-12 rounded-2xl bg-cyan-500/15 border border-cyan-400/30 flex items-center justify-center text-cyan-300">
          <ShieldAlert className="w-6 h-6" />
        </div>

        <h3 className="text-2xl font-bold text-white tracking-tight">
          {t.authTitle}
        </h3>

        <p className="text-sm text-slate-300 leading-relaxed">
          {t.authDesc}
        </p>

        <div className="p-4 rounded-2xl bg-black/40 border border-white/10 text-xs text-slate-300 space-y-2">
          <div className="font-bold text-cyan-300">Status Sambungan:</div>
          {appUrl ? (
            <div>
              <p className="mb-2">Aplikasi sasaran dikonfigurasikan pada: <code className="text-cyan-400">{appUrl}</code></p>
              <a
                href={appUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-cyan-500 text-slate-950 font-bold"
              >
                <span>Buka Portal Log Masuk</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          ) : (
            <p className="leading-relaxed">
              {t.authNotice}
            </p>
          )}
        </div>

        <button
          onClick={onClose}
          className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-sm cursor-pointer"
        >
          {t.close}
        </button>

      </div>
    </div>
  );
};

// 5. Legal Terms & Privacy Modals (clearly marked drafts)
export const LegalModal: React.FC<ModalProps & {
  type: 'privacy' | 'terms' | 'affiliateTerms';
}> = ({ isOpen, onClose, lang, type }) => {
  const t = TRANSLATIONS[lang].modals;

  if (!isOpen) return null;

  const title =
    type === 'privacy'
      ? t.privacyTitle
      : type === 'terms'
      ? t.termsTitle
      : t.affiliateTermsTitle;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl rounded-3xl glass-panel-dark border-2 border-cyan-400/30 p-6 sm:p-8 text-left shadow-2xl max-h-[85vh] flex flex-col">
        
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-amber-300 font-bold bg-amber-500/20 px-2 py-0.5 rounded">
              Draf Rasmi Pra-Pelancaran
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
              {title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
            aria-label={t.close}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable document content */}
        <div className="overflow-y-auto py-6 space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed pr-2">
          {type === 'privacy' && (
            <>
              <p>
                <strong>1. Pengenalan:</strong> Dasar Privasi ini menerangkan bagaimana LiveFluencer.AI ("kami") mengendalikan maklumat peribadi selaras dengan Akta Perlindungan Data Peribadi 2010 (PDPA) Malaysia.
              </p>
              <p>
                <strong>2. Pengumpulan Data:</strong> Kami hanya mengumpul maklumat yang dibekalkan secara sukarela oleh pengguna untuk tujuan prapelancaran, demonstrasi teknologi, dan pemakluman ketersediaan pakej kredit.
              </p>
              <p>
                <strong>3. Hak Cipta Imej & Avatar:</strong> Sebarang foto wajah yang dimuat naik untuk penjanaan host AI kekal menjadi hak milik mutlak pengguna dan tidak akan dikongsi kepada pihak ketiga tanpa kebenaran bertulis.
              </p>
              <p>
                <strong>4. Keselamatan Pelayan:</strong> Data akaun dilindungi dengan enkripsi moden dan sesi live diselia oleh pelayan bagi melindungi baki kredit pengguna.
              </p>
              <p className="italic text-slate-400">
                *Nota: Dokumen ini adalah draf rujukan pra-pelancaran dan akan dimuktamadkan sepenuhnya semasa pembukaan komersial rasmi platform.
              </p>
            </>
          )}

          {type === 'terms' && (
            <>
              <p>
                <strong>1. Syarat Penggunaan:</strong> Dengan mengakses tapak ini, anda bersetuju bahawa ciri-ciri yang dipaparkan adalah representasi keupayaan produk sedia ada LiveFluencer.AI.
              </p>
              <p>
                <strong>2. Pengiraan Kredit Minit:</strong> 1 kredit bersamaan dengan 1 minit siaran langsung sebenar. Kos dan had masa dipaparkan sebelum caj bermula, dan pelayan menghentikan sesi secara automatik jika tab penyemak imbas ditutup.
              </p>
              <p>
                <strong>3. Keselamatan Kandungan:</strong> Pengguna bertanggungjawab memastikan produk yang dipromosikan mematuhi undang-undang pengguna Malaysia, keperluan KKM (jika berkaitan kosmetik/kesihatan), dan garis panduan platform TikTok.
              </p>
              <p>
                <strong>4. Tiada Jaminan Luar Realiti:</strong> Kami tidak menjamin kenaikan angka jualan (GMV) yang tidak bersandarkan usaha dan kualiti produk penjual itu sendiri.
              </p>
              <p className="italic text-slate-400">
                *Nota: Syarat terperinci tertakluk kepada dokumen akhir perjanjian pelanggan rasmi.
              </p>
            </>
          )}

          {type === 'affiliateTerms' && (
            <>
              <p>
                <strong>1. Atribusi & Tempoh Kuki:</strong> Komisen dijejaki melalui kod atau pautan rujukan selamat dengan tempoh atribusi 30 hari.
              </p>
              <p>
                <strong>2. Larangan Rujukan Diri:</strong> Sistem dilengkapi pengesanan pencegahan rujukan sendiri (self-referral prevention). Pembelian untuk kegunaan akaun sendiri tidak layak menerima komisen affiliate.
              </p>
              <p>
                <strong>3. Kitaran Status Komisen:</strong> Komisen akan melalui proses telus: Menunggu (Pending) → Diluluskan (Approved) → Dibayar (Paid).
              </p>
              <p>
                <strong>4. Bonus Rakan Niaga (+20%):</strong> Terpakai bagi pakej Trial hingga Grow sahaja apabila mencapai 10 atau lebih pelanggan baru sebulan. Bonus adalah 20% daripada jumlah komisen yang layak, bukan daripada harga jualan pakej.
              </p>
              <p>
                <strong>5. Komisen Berulang (3%):</strong> Terpakai ke atas tambah nilai (top-up) pelanggan tajaan selama 6 bulan pertama.
              </p>
              <p className="italic text-slate-400">
                *Nota: Syarat muktamad pembayaran dan ambang pengeluaran akan ditetapkan semasa pembukaan rasmi portal affiliate.
              </p>
            </>
          )}
        </div>

        <div className="pt-4 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-bold text-sm cursor-pointer"
          >
            Faham & Tutup
          </button>
        </div>

      </div>
    </div>
  );
};
