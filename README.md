# LiveFluencer.AI — Malaysian AI Live-Host Platform

A complete, responsive business website for **LiveFluencer.AI**, built with React 19, TypeScript, Tailwind CSS, and lightweight motion.

## Key Features & Highlights

1. **Brand & Visuals**:
   - Wordmark: `LIVEFLUENCER.AI` (`LIVE` and `.AI` in white on dark; `FLUENCER` in vibrant cyan `#12C8F5`).
   - Authentic Malaysian representations: Hijabi host graphics, tudung-wearing avatars (Host Nurul, Host Siti, etc.), modest business attire, and authentic local studio aesthetic.
   - Glassmorphic design with deep navy `#041421`, cyan `#12C8F5`, restrained violet `#8B5CF6`, and warm white `#F5F8FC`.
   - Strong WCAG AA typography: body 20px desktop / 18px mobile, navigation/buttons ≥ 18px, headings 34–64px.

2. **Language Support**:
   - Default: Natural Malaysian Bahasa Melayu (BM).
   - Seamless one-click BM / English switching via the header toggle.

3. **Interactive Rehearsal Simulator**:
   - Local test sandbox for live hosting with zero credit deduction.
   - Sample comments ("Berapa harga?", "Ada penghantaran ke Sabah?").
   - Viewer interactions: Join (+Viewer), Like (+50 Likes), Share, and Gift (Rose).
   - Mode switching: Auto Mode (instant voice reply) and Manual Mode (editable text draft with "Sahkan & Hantar").
   - Broadcast controls: Live, BRB (Be Right Back), Cutaway (Product Close-Up), Mute, and STOP.

4. **Transparent Pricing & Top-Up Calculator**:
   - Centralized configuration in `src/config/siteConfig.ts`.
   - Packages: Trial (RM60), Lite (RM229), Starter (RM559), Grow (RM1,099 — Recommended), Scale (RM1,999), Pro (RM3,990).
   - Real-time top-up calculator at RM2.50/min (min RM25, max RM5,000) with planned `LF-XXXXXX` bank transfer reference explanation.
   - All packages guarantee 100% identical AI host capabilities; the difference is only in allocated minutes.

5. **Affiliate Programme & Partner Bonus**:
   - 30-day cookie attribution with self-referral detection.
   - Commission lifecycle: Menunggu → Diluluskan → Dibayar.
   - First-purchase commission schedule: Trial RM5 to Pro RM150.
   - Partner bonus: additional +20% of eligible commission upon reaching 10+ new customers/month (Trial–Grow).
   - 3% recurring commission on top-ups for 6 months.

6. **Customer Support & Pre-Launch Disclaimers**:
   - Floating BM support drawer with screenshot/file attachment preview.
   - Clear honesty disclaimers for pre-launch draft status and local previews.

## Central Configuration

Prices, top-up rates, affiliate numbers, and backend URLs can be updated in `src/config/siteConfig.ts`:

```typescript
export const SITE_CONFIG = {
  topUpRatePerMinRm: 2.50,
  topUpMinRm: 25,
  topUpMaxRm: 5000,
  ...
};
```
