import React, { useState } from 'react';
import { 
  BookOpen, 
  Clock, 
  ArrowRight, 
  ArrowLeft, 
  Search, 
  Tag
} from 'lucide-react';
import { Language } from '../types';

export interface BlogPost {
  id: string;
  slug: string;
  titleBm: string;
  titleEn: string;
  excerptBm: string;
  excerptEn: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  authorRole: string;
  coverImage: string;
  featured?: boolean;
  contentBm: string[];
  contentEn: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'post-1',
    slug: 'ai-live-host-3x-gmv-tiktok',
    titleBm: 'Bagaimana AI Live Host Meningkatkan GMV TikTok Shop Sehingga 3x Ganda Tanpa Keletihan',
    titleEn: 'How AI Live Hosts 3x TikTok Shop GMV Without Human Burnout',
    excerptBm: 'Ketahui rahsia peniaga e-dagang tempatan bersiaran langsung 24/7 dan mengekalkan kadar konversi jualan yang tinggi secara konsisten.',
    excerptEn: 'Discover how local e-commerce sellers broadcast 24/7 and consistently maintain high sales conversion rates.',
    category: 'Strategi Live',
    readTime: '4 min baca',
    date: '3 Okt 2026',
    author: 'Syafiq Affandi',
    authorRole: 'Pakar Pertumbuhan E-Dagang',
    coverImage: '/src/assets/images/blog_tiktok_gmv_growth_1791135724196.jpg',
    featured: true,
    contentBm: [
      'Siaran langsung (Live Selling) kini menjadi saluran jualan nombor satu di platform seperti TikTok Shop dan Shopee di Malaysia. Namun, cabaran terbesar setiap pemilik bisnes ialah keletihan host manusia dan kos penggajian host profesional yang mencecah ribuan ringgit sebulan.',
      'Dengan LiveFluencer.Ai, bisnes kini boleh mengaktifkan AI Live Host yang bersuara fasih dalam Bahasa Melayu santai. Host digital ini tidak pernah penat, sentiasa ceria, dan bersedia menjawab ratusan soalan harga, postage, dan cara penebusan baucar Beg Kuning dalam masa sesaat.',
      'Kajian mendapati bahawa kedai yang bersiaran langsung melebihi 8 jam sehari menerima skor algoritma TikTok yang lebih tinggi, membawa ribuan penonton organik ke dalam bilik siaran tanpa sebarang kos iklan berbayar.',
      'Langkah seterusnya ialah menetapkan Bank Q&A rasmi produk anda dan membiarkan AI menguruskan penutupan jualan (closing sales) 24/7.'
    ],
    contentEn: [
      'Live streaming is now the number one revenue driver on platforms like TikTok Shop and Shopee in Malaysia. However, the biggest bottleneck for brands is host fatigue and the hefty costs of hiring multiple shifts of livestreamers.',
      'With LiveFluencer.Ai, businesses can deploy an AI Live Host fluent in natural colloquial Malaysian BM and English. The AI host never tires, remains perpetually energetic, and answers hundreds of queries on pricing and checkout vouchers instantly.',
      'Data reveals that channels broadcasting more than 8 hours daily receive algorithmic compounding on TikTok, driving organic traffic surges without paid advertising.',
      'The key is setting up your verified Q&A knowledge bank and letting the AI agent execute closing scripts around the clock.'
    ]
  },
  {
    id: 'post-2',
    slug: 'panduan-beg-kuning-tiktok-2026',
    titleBm: 'Panduan Lengkap Optimasi Beg Kuning TikTok Shop Untuk Naikkan Conversion Rate Live',
    titleEn: 'Complete Guide to Optimizing TikTok Shop Yellow Bag for Higher Live Conversions',
    excerptBm: '5 teknik psikologi memanggil penonton untuk menekan beg kuning dan menyelesaikan bayaran semasa siaran berlangsung.',
    excerptEn: '5 psychological call-to-actions to prompt viewers to click the yellow bag and checkout during live streams.',
    category: 'Tips & Trik',
    readTime: '3 min baca',
    date: '1 Okt 2026',
    author: 'Nurul Huda',
    authorRole: 'Pengurus Komuniti Live',
    coverImage: '/src/assets/images/blog_yellow_bag_tips_1791135740684.jpg',
    contentBm: [
      'Ramai penonton masuk ke bilik live anda tetapi keluar tanpa membeli. Mengapa ini berlaku? Punca utamanya ialah ketiadaan arahan tindakan (Call To Action) yang jelas dan berulang-ulang.',
      'AI Live Host kami dilatih secara khusus untuk membuat gerak isyarat tunjuk ke Beg Kuning di sudut kiri bawah telefon setiap kali harga promo atau baucar terhad disebut.',
      'Sapaan automatik kepada penonton baru seperti "Selamat datang Kak Siti, jemput tebus voucher RM10 kat Beg Kuning sebelum habis ya!" meningkatkan kadar klik sebanyak 42%.',
      'Pastikan juga stok kuantiti terhad dipaparkan untuk mencetuskan kesan psikologi FOMO (Fear Of Missing Out).'
    ],
    contentEn: [
      'Many viewers enter your live stream but bounce without purchasing. The primary cause is the absence of consistent, recurring calls-to-action.',
      'Our AI Live Host is trained to perform pointing gestures towards the Yellow Bag at the bottom left whenever promotional prices or flash vouchers are announced.',
      'Automated personalized welcomes such as "Welcome Kak Siti, make sure to claim the RM10 voucher in the Yellow Bag before it runs out!" increase CTR by 42%.',
      'Keep your limited inventory counts transparent to leverage urgency and FOMO.'
    ]
  },
  {
    id: 'post-3',
    slug: 'shopee-live-vs-tiktok-live-malaysia',
    titleBm: 'Shopee Live vs TikTok Shop Live: Mana Satu Lebih Sesuai Untuk Produk Anda?',
    titleEn: 'Shopee Live vs TikTok Shop Live: Which Platform Fits Your Brand Best?',
    excerptBm: 'Perbandingan menyeluruh dari segi demografi penonton tempatan, kuasa membeli, dan gelagat pengguna di Malaysia.',
    excerptEn: 'In-depth comparison of local Malaysian viewer demographics, buying power, and consumer behaviors.',
    category: 'Analisis Pasaran',
    readTime: '5 min baca',
    date: '28 Sep 2026',
    author: 'Irfan Hakim',
    authorRole: 'Penganalisis Data E-Dagang',
    coverImage: '/src/assets/images/blog_shopee_vs_tiktok_1791135755170.jpg',
    contentBm: [
      'Shopee Live cemerlang untuk pembeli yang sudah mempunyai niat membeli yang tinggi (high intent buyers). Mereka mencari baucar diskaun dan penghantaran percuma (Free Shipping RM15).',
      'TikTok Shop Live pula adalah platform penemuan (discovery-driven). Pengguna sering membeli secara impulsif apabila terhibur dengan celoteh dan keunikan gaya persembahan host.',
      'Dengan sokongan LiveFluencer.Ai pada kedua-dua platform, jenama pintar kini boleh bersiaran secara serentak (simulcast) untuk memaksimumkan pulangan setiap minit siaran.',
      'Kombinasi AI script yang mesra dan bank jawapan pantas memastikan jenama anda menguasai kedua-dua segmen pembeli.'
    ],
    contentEn: [
      'Shopee Live excels with high-intent shoppers seeking vouchers and free shipping deals.',
      'TikTok Shop Live is fundamentally discovery-driven. Consumers purchase impulsively when entertained by charismatic, energetic host engagements.',
      'With LiveFluencer.Ai powering both ecosystems, smart brands simulcast to capture demand across both audiences simultaneously.',
      'A friendly conversational AI script paired with instant Q&A ensures complete dominance across both channels.'
    ]
  },
  {
    id: 'post-4',
    slug: 'kajian-kes-skincare-rm45k',
    titleBm: 'Kajian Kes: Bagaimana Jenama Skincare Tempatan Menjana RM45,000 Dalam 14 Hari Bersama AI Host',
    titleEn: 'Case Study: How a Local Skincare Brand Generated RM45,000 in 14 Days with AI Host',
    excerptBm: 'Kisah benar jenama kecantikan AS Beauty yang mengatasi masalah kekurangan host dan melonjakkan jualan malam.',
    excerptEn: 'The real story of beauty brand AS Beauty overcoming host shortages to boost midnight sales.',
    category: 'Kajian Kes',
    readTime: '6 min baca',
    date: '24 Sep 2026',
    author: 'Syafiq Affandi',
    authorRole: 'Pakar Pertumbuhan E-Dagang',
    coverImage: '/src/assets/images/blog_skincare_case_study_1791135768955.jpg',
    contentBm: [
      'Sebelum menggunakan LiveFluencer.Ai, AS Beauty hanya mampu bersiaran 2 jam sehari kerana kekangan waktu kakitangan. Waktu puncak malam antara jam 11 malam hingga 3 pagi terbiar kosong.',
      'Selepas mengintegrasikan AI Host Nurul, mereka menjadualkan live automatik setiap malam bermula jam 10 malam sehingga jam 4 pagi.',
      'Hasilnya mengejutkan: 63% daripada pesanan berlaku semasa waktu tidur pemilik bisnes, menjana lebih RM45,000 dalam tempoh 14 hari pertama tanpa menambah pekerja baru.',
      'Kunci kejayaannya ialah jawapan pantas mengenai status kelulusan KKM dan keselamatan ramuan untuk kulit sensitif.'
    ],
    contentEn: [
      'Before LiveFluencer.Ai, AS Beauty could only broadcast 2 hours daily due to staff limits, missing peak midnight traffic between 11 PM and 3 AM.',
      'After integrating AI Host Nurul, they scheduled automated overnight live sessions from 10 PM to 4 AM every night.',
      'The result: 63% of total orders occurred while the founders slept, driving RM45,000 in revenue in just 14 days without hiring extra crew.',
      'The critical factor was instant, reassuring answers regarding safety certifications and suitability for sensitive skin.'
    ]
  }
];

export const BlogPage: React.FC<{
  lang: Language;
  onBackToHome: () => void;
  onExplorePricing: () => void;
}> = ({ lang, onBackToHome, onExplorePricing }) => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');

  const categories = ['Semua', 'Strategi Live', 'Tips & Trik', 'Analisis Pasaran', 'Kajian Kes'];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const title = lang === 'bm' ? post.titleBm : post.titleEn;
    const excerpt = lang === 'bm' ? post.excerptBm : post.excerptEn;
    const matchesSearch = title.toLowerCase().includes(searchQuery.toLowerCase()) || excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'Semua' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Single Article Reader View
  if (selectedPost) {
    const title = lang === 'bm' ? selectedPost.titleBm : selectedPost.titleEn;
    const content = lang === 'bm' ? selectedPost.contentBm : selectedPost.contentEn;

    return (
      <div className="py-8 sm:py-12 bg-[#040E1A] text-left">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Back Button */}
          <button
            onClick={() => setSelectedPost(null)}
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-bold text-sm mb-6 transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>{lang === 'bm' ? 'Kembali ke Semua Artikel' : 'Back to All Articles'}</span>
          </button>

          {/* Article Header */}
          <div className="space-y-4 pb-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-cyan-950/70 border border-cyan-400/40 text-cyan-300 uppercase font-mono">
                {selectedPost.category}
              </span>
              <span className="text-xs text-slate-400 flex items-center gap-1 font-mono">
                <Clock className="w-3.5 h-3.5" />
                <span>{selectedPost.readTime}</span>
              </span>
              <span className="text-xs text-slate-400">•</span>
              <span className="text-xs text-slate-400 font-mono">{selectedPost.date}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.2]">
              {title}
            </h1>

            {/* Author Byline */}
            <div className="flex items-center gap-3 pt-2">
              <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-cyan-400 to-purple-600 flex items-center justify-center text-slate-950 font-black text-base shadow">
                {selectedPost.author.charAt(0)}
              </div>
              <div>
                <div className="text-sm font-bold text-white">{selectedPost.author}</div>
                <div className="text-xs text-slate-400">{selectedPost.authorRole}</div>
              </div>
            </div>
          </div>

          {/* Large Hero Article Cover Image */}
          <div className="w-full aspect-[16/9] sm:aspect-[21/9] rounded-3xl overflow-hidden border border-cyan-500/30 shadow-[0_15px_40px_rgba(0,0,0,0.8)] my-6">
            <img
              src={selectedPost.coverImage}
              alt={title}
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Article Body */}
          <div className="py-6 space-y-6 text-slate-200 text-base sm:text-lg leading-relaxed">
            {content.map((paragraph, idx) => (
              <p key={idx} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Bottom Conversion Box */}
          <div className="mt-8 p-8 rounded-3xl glass-panel-dark border border-cyan-400/40 shadow-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="space-y-2 max-w-md">
              <div className="text-xs font-bold font-mono text-cyan-300 uppercase">
                {lang === 'bm' ? 'Tingkatkan Jualan Kedai Anda' : 'Scale Your Store GMV'}
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                {lang === 'bm' ? 'Bersedia Mengaktifkan AI Live Host Anda?' : 'Ready to Deploy Your 24/7 AI Live Host?'}
              </h3>
              <p className="text-sm text-slate-300">
                {lang === 'bm'
                  ? 'Ketahui pakej minit siaran yang sesuai dengan bajet perniagaan anda.'
                  : 'Find the ideal broadcast minute plan suited for your brand budget.'}
              </p>
            </div>
            <button
              onClick={() => {
                onBackToHome();
                setTimeout(() => onExplorePricing(), 100);
              }}
              className="px-7 py-3.5 rounded-full text-base font-bold text-white bg-gradient-to-r from-[#7C3AED] via-[#6366F1] to-[#06B6D4] hover:from-[#8B5CF6] hover:to-[#0891B2] shadow-[0_0_25px_rgba(124,58,237,0.5)] transition-all cursor-pointer whitespace-nowrap"
            >
              <span>{lang === 'bm' ? 'Lihat Pakej Harga' : 'Explore Pricing'}</span>
            </button>
          </div>

        </div>
      </div>
    );
  }

  // Blog Directory Listing View
  return (
    <div className="py-8 sm:py-12 bg-[#040E1A] text-left min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pb-6 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-400/40 text-cyan-300 text-xs font-bold uppercase font-mono tracking-wider mb-3">
              <BookOpen className="w-3.5 h-3.5" />
              <span>BLOG & PANDUAN LIVE SELLING</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              {lang === 'bm' ? (
                <>
                  Wawasan & Tips <span className="text-[#12C8F5]">E-Dagang Malaysia</span>
                </>
              ) : (
                <>
                  Insights & Tips for <span className="text-[#12C8F5]">Malaysian E-Commerce</span>
                </>
              )}
            </h1>
            <p className="text-base sm:text-lg text-slate-300 font-normal mt-2 max-w-2xl">
              {lang === 'bm'
                ? 'Strategi praktikal, kajian kes peniaga tempatan, dan teknik memaksimumkan GMV menggunakan AI Live Host.'
                : 'Actionable strategies, local seller case studies, and live selling GMV growth tactics.'}
            </p>
          </div>

          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-white font-bold text-sm bg-white/5 hover:bg-white/10 border border-white/10 px-5 py-2.5 rounded-xl transition-colors cursor-pointer self-start md:self-end"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{lang === 'bm' ? 'Kembali ke Laman Utama' : 'Back to Home'}</span>
          </button>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between mb-8">
          
          {/* Categories */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(18,200,245,0.4)]'
                    : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={lang === 'bm' ? 'Cari tajuk artikel...' : 'Search articles...'}
              className="w-full bg-black/40 border border-white/15 rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400"
            />
          </div>

        </div>

        {/* Articles Grid (with high-res Cover Image on each card) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          {filteredPosts.map((post) => {
            const title = lang === 'bm' ? post.titleBm : post.titleEn;
            const excerpt = lang === 'bm' ? post.excerptBm : post.excerptEn;

            return (
              <div
                key={post.id}
                onClick={() => setSelectedPost(post)}
                className="rounded-3xl glass-panel-dark border border-cyan-500/25 overflow-hidden flex flex-col justify-between hover:border-cyan-400/50 hover:shadow-[0_10px_35px_rgba(18,200,245,0.2)] transition-all cursor-pointer group"
              >
                {/* Blog Card Cover Image */}
                <div className="w-full aspect-[16/9] overflow-hidden relative bg-slate-900 border-b border-white/10">
                  <img
                    src={post.coverImage}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-cyan-400/40 text-cyan-300 font-bold uppercase text-[11px] font-mono shadow">
                      {post.category}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3 text-xs text-white/90 font-mono bg-black/60 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/10">
                    {post.readTime}
                  </div>
                </div>

                <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug mb-3">
                      {title}
                    </h3>

                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                      {excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                    <div className="flex items-center gap-2">
                      <span className="text-white font-semibold">{post.author}</span>
                      <span>•</span>
                      <span>{post.date}</span>
                    </div>
                    <span className="inline-flex items-center gap-1 text-cyan-400 font-bold group-hover:translate-x-1 transition-transform">
                      <span>{lang === 'bm' ? 'Baca Lanjut' : 'Read More'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
