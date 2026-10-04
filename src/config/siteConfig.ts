import { PricingPlan, AffiliateTierCommission, HostPersona } from '../types';

export const SITE_CONFIG = {
  brandName: 'LiveFluencer.AI',
  taglineBm: 'AI Live Host untuk Bisnes Anda',
  taglineEn: 'AI Live Host for Your Business',
  currency: 'RM',
  topUpRatePerMinRm: 2.50,
  topUpMinRm: 25,
  topUpMaxRm: 5000,
  topUpPresetsRm: [50, 100, 200],
  statsAvailableDate: '2 Okt 2026',
  appLoginUrl: (typeof import.meta !== 'undefined' && import.meta.env?.VITE_APP_LOGIN_URL) || '',
  appRegisterUrl: (typeof import.meta !== 'undefined' && import.meta.env?.VITE_APP_REGISTER_URL) || '',
  contactEmail: 'salam@livefluencer.ai',
};

// Central pricing plans as specified by user & Image 4
export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'trial',
    name: 'Trial',
    priceRm: 60,
    minutes: 30,
    ratePerMin: '~RM2.00',
    isRecommended: false,
    features: [
      '30 minit (30 kredit) siaran live',
      'AI Live Host sebutan BM & English',
      'Jawab komen secara live (Mod Auto & Manual)',
      'Bank soalan & jawapan (Q&A)',
      'Simulator live TikTok tanpa caj'
    ]
  },
  {
    id: 'lite',
    name: 'Lite',
    priceRm: 229,
    minutes: 120,
    ratePerMin: '~RM1.91',
    isRecommended: false,
    features: [
      '120 minit (120 kredit) siaran live',
      'AI Live Host sebutan BM & English',
      'Jawab komen secara live (Mod Auto & Manual)',
      'Bank soalan & jawapan (Q&A)',
      'Simulator live TikTok tanpa caj'
    ]
  },
  {
    id: 'starter',
    name: 'Starter',
    priceRm: 559,
    minutes: 300,
    ratePerMin: '~RM1.86',
    isRecommended: false,
    features: [
      '300 minit (300 kredit) siaran live',
      'AI Live Host sebutan BM & English',
      'Jawab komen secara live (Mod Auto & Manual)',
      'Bank soalan & jawapan (Q&A)',
      'Simulator live TikTok tanpa caj'
    ]
  },
  {
    id: 'grow',
    name: 'Grow',
    priceRm: 1099,
    minutes: 600,
    ratePerMin: '~RM1.83',
    isRecommended: true,
    features: [
      '600 minit (600 kredit) siaran live',
      'AI Live Host sebutan BM & English',
      'Jawab komen secara live (Mod Auto & Manual)',
      'Bank soalan & jawapan (Q&A)',
      'Simulator live TikTok tanpa caj'
    ]
  },
  {
    id: 'scale',
    name: 'Scale',
    priceRm: 1999,
    minutes: 1200,
    ratePerMin: '~RM1.67',
    isRecommended: false,
    features: [
      '1,200 minit (1,200 kredit) siaran live',
      'AI Live Host sebutan BM & English',
      'Jawab komen secara live (Mod Auto & Manual)',
      'Bank soalan & jawapan (Q&A)',
      'Simulator live TikTok tanpa caj'
    ]
  },
  {
    id: 'pro',
    name: 'Pro',
    priceRm: 3990,
    minutes: 2500,
    ratePerMin: '~RM1.60',
    isRecommended: false,
    isProvisional: true, // Note: RM3,990 from Image 4 (earlier notes mentioned RM3,890)
    features: [
      '2,500 minit (2,500 kredit) siaran live',
      'AI Live Host sebutan BM & English',
      'Jawab komen secara live (Mod Auto & Manual)',
      'Bank soalan & jawapan (Q&A)',
      'Simulator live TikTok tanpa caj'
    ]
  }
];

export const AFFILIATE_COMMISSIONS: AffiliateTierCommission[] = [
  { planId: 'trial', planName: 'Trial (RM60)', priceRm: 60, commissionRm: 5, eligibleForBonus: true },
  { planId: 'lite', planName: 'Lite (RM229)', priceRm: 229, commissionRm: 25, eligibleForBonus: true },
  { planId: 'starter', planName: 'Starter (RM559)', priceRm: 559, commissionRm: 50, eligibleForBonus: true },
  { planId: 'grow', planName: 'Grow (RM1,099)', priceRm: 1099, commissionRm: 80, eligibleForBonus: true },
  { planId: 'scale', planName: 'Scale (RM1,999)', priceRm: 1999, commissionRm: 100, eligibleForBonus: false },
  { planId: 'pro', planName: 'Pro (RM3,990)', priceRm: 3990, commissionRm: 150, eligibleForBonus: false },
];

export const HOST_PERSONAS: HostPersona[] = [
  {
    id: 'ecommerce',
    nameBm: 'Livestreamer E-Dagang',
    nameEn: 'E-commerce Livestreamer',
    descBm: 'Bertenaga, mahir membentangkan tawaran kilat, sentiasa mengarahkan penonton ke Beg Kuning.',
    descEn: 'High-energy, adept at presenting flash deals, consistently guiding viewers to the Yellow Bag / Buy button.',
    greetingSampleBm: 'Hai semua! Selamat datang ke live kami. Hari ini ada voucher istimewa kat Beg Kuning ya!',
    greetingSampleEn: 'Hi everyone! Welcome to our live. Special vouchers available in the shop bag right now!'
  },
  {
    id: 'kol',
    nameBm: 'KOL / Pengaruh Santai',
    nameEn: 'Casual KOL / Influencer',
    descBm: 'Gaya bersahaja seperti berkongsi tips dengan rakan baik, mesra dan santai.',
    descEn: 'Friendly and conversational, sharing genuine product feedback like chatting with close friends.',
    greetingSampleBm: 'Helo korang! Ramai tanya rutin harian I kan? Jom I tunjuk apa yang I guna...',
    greetingSampleEn: 'Hey guys! So many of you asked about my daily routine, let me show you what I use...'
  },
  {
    id: 'educator',
    nameBm: 'Pendidik / Pakar Produk',
    nameEn: 'Educator / Product Specialist',
    descBm: 'Penerangan berstruktur tentang bahan, cara penggunaan, dan penyelesaian masalah pelanggan.',
    descEn: 'Structured explanations regarding ingredients, usage directions, and customer problem-solving.',
    greetingSampleBm: 'Salam semua, jom kita fahami fungsi bahan aktif dalam formula ini sebelum anda memilih...',
    greetingSampleEn: 'Hello all, let us understand how these active ingredients work before you make your choice...'
  },
  {
    id: 'creator',
    nameBm: 'Pencipta Kreatif',
    nameEn: 'Creative Storyteller',
    descBm: 'Penceritaan menarik, interaktif, sesuai untuk bisnes kraf, fesyen dan gaya hidup.',
    descEn: 'Engaging storytelling and styling advice, ideal for crafts, fashion, and lifestyle brands.',
    greetingSampleBm: 'Cantik tak warna ni? Sesuai sangat kalau nak pakai pergi kenduri atau kerja tau!',
    greetingSampleEn: 'How pretty is this shade? It pairs perfectly for casual outings or work days!'
  },
  {
    id: 'support',
    nameBm: 'Sokongan Emosi & Khidmat',
    nameEn: 'Gentle & Welcoming Host',
    descBm: 'Suara lembut, penyabar, menyapa setiap penonton dengan penuh hormat dan keselesaan.',
    descEn: 'Gentle, patient, greeting every viewer warmly with utmost courtesy and hospitality.',
    greetingSampleBm: 'Terima kasih sudi singgah, Siti. Moga hari anda dipermudahkan dan tenang selalu.',
    greetingSampleEn: 'Thank you for stopping by, Siti. Wishing you a peaceful and lovely day ahead.'
  }
];
