import React from 'react';

interface HostVisualProps {
  gesture?: 'default' | 'lift' | 'show' | 'put_back' | 'point';
  isSpeaking?: boolean;
  className?: string;
  hostName?: string;
  themeColor?: string;
}

export const HijabiHostAvatar: React.FC<{
  name: string;
  hijabColor?: string;
  blazerColor?: string;
  size?: number;
  className?: string;
}> = ({
  name,
  hijabColor = '#F472B6', // gentle rose
  blazerColor = '#1E293B',
  size = 56,
  className = '',
}) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center rounded-full overflow-hidden shrink-0 border-2 border-cyan-400/40 shadow-md ${className}`}
      style={{ width: size, height: size, backgroundColor: '#09233B' }}
      title={name}
    >
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full object-cover"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label={name}
      >
        {/* Soft background glow */}
        <circle cx="50" cy="50" r="50" fill="#0A2D4A" />
        <circle cx="50" cy="30" r="30" fill="#12C8F5" fillOpacity="0.12" />

        {/* Shoulders & modest clothing */}
        <path
          d="M18 100 C18 78 32 72 50 72 C68 72 82 78 82 100 Z"
          fill={blazerColor}
        />
        {/* Inner top collar */}
        <path
          d="M40 72 Q50 82 60 72 Z"
          fill="#FFFFFF"
          fillOpacity="0.9"
        />

        {/* Hijab / Tudung Back & Drape */}
        <path
          d="M24 50 C22 72 32 86 50 86 C68 86 78 72 76 50 C76 28 66 12 50 12 C34 12 24 28 24 50 Z"
          fill={hijabColor}
        />
        {/* Tudung Fold Highlights */}
        <path
          d="M32 40 C30 58 40 78 50 82 C60 78 70 58 68 40"
          stroke="rgba(255,255,255,0.25)"
          strokeWidth="1.5"
          fill="none"
        />

        {/* Authentic Malaysian Face Tone (warm caramel-light beige) */}
        <ellipse cx="50" cy="46" rx="17" ry="20" fill="#E6BA95" />

        {/* Hijab front inner frame & forehead wrap */}
        <path
          d="M34 40 C34 31 41 26 50 26 C59 26 66 31 66 40 C66 33 59 30 50 30 C41 30 34 33 34 40 Z"
          fill="rgba(0,0,0,0.15)"
        />
        <path
          d="M33 42 C36 32 42 28 50 28 C58 28 64 32 67 42 C67 56 62 64 50 64 C38 64 33 56 33 42 Z"
          fill="#E6BA95"
        />

        {/* Gentle Malaysian eyes */}
        <ellipse cx="43" cy="44" rx="2.4" ry="1.6" fill="#1E1E24" />
        <ellipse cx="57" cy="44" rx="2.4" ry="1.6" fill="#1E1E24" />
        <circle cx="44" cy="43.3" r="0.6" fill="#FFFFFF" />
        <circle cx="58" cy="43.3" r="0.6" fill="#FFFFFF" />

        {/* Delicate eyelashes & natural eyebrows */}
        <path d="M39 40 Q43 38 47 39.5" stroke="#2B1810" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M53 39.5 Q57 38 61 40" stroke="#2B1810" strokeWidth="1.2" strokeLinecap="round" />

        {/* Soft nose curve */}
        <path d="M49 45 Q50 49 48 50 Q50 51 52 50" stroke="#C49A76" strokeWidth="1" strokeLinecap="round" fill="none" />

        {/* Warm smile & lips with soft rose tint */}
        <path
          d="M45 54 Q50 59 55 54"
          stroke="#C05665"
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
        />
        {/* Rosy cheeks */}
        <circle cx="39" cy="48" r="2.5" fill="#F472B6" fillOpacity="0.25" />
        <circle cx="61" cy="48" r="2.5" fill="#F472B6" fillOpacity="0.25" />

        {/* Hijab front chin pin / modest brooch */}
        <circle cx="50" cy="65" r="1.5" fill="#F59E0B" />
      </svg>
    </div>
  );
};

export const LivePhoneHostPresenter: React.FC<HostVisualProps> = ({
  gesture = 'default',
  isSpeaking = false,
  className = '',
  hostName = 'Nurul',
}) => {
  return (
    <div className={`relative w-full h-full flex flex-col items-center justify-center select-none ${className}`}>
      {/* Background studio ambiance */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A2238] via-[#041421] to-[#030E18] overflow-hidden rounded-[28px]">
        {/* Ring Light Glow Behind Host */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full border-4 border-cyan-400/20 blur-md pointer-events-none" />
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-44 h-44 rounded-full bg-cyan-400/10 blur-xl pointer-events-none" />

        {/* Studio background shelves / aesthetic soft bokeh */}
        <div className="absolute top-6 left-6 w-16 h-8 rounded bg-white/5 border border-white/10 blur-[1px]" />
        <div className="absolute top-18 right-8 w-20 h-6 rounded bg-violet-500/10 border border-violet-400/10 blur-[1px]" />
      </div>

      {/* SVG Character: Malaysian Hijabi Host with Live Movements */}
      <svg
        viewBox="0 0 320 460"
        className="relative z-10 w-full h-full object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label={`AI Host ${hostName} presenting live`}
      >
        {/* Ambient Ring Light in Studio */}
        <circle cx="160" cy="140" r="110" stroke="url(#ringGlow)" strokeWidth="6" opacity="0.4" />

        <defs>
          <linearGradient id="ringGlow" x1="0" y1="0" x2="320" y2="280" gradientUnits="userSpaceOnUse">
            <stop stopColor="#12C8F5" />
            <stop offset="0.5" stopColor="#8B5CF6" />
            <stop offset="1" stopColor="#12C8F5" />
          </linearGradient>
          <linearGradient id="hijabGrad" x1="160" y1="40" x2="160" y2="300" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F9A8D4" />
            <stop offset="0.5" stopColor="#EC4899" />
            <stop offset="1" stopColor="#BE185D" />
          </linearGradient>
          <linearGradient id="blazerGrad" x1="160" y1="260" x2="160" y2="460" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1E293B" />
            <stop offset="1" stopColor="#0F172A" />
          </linearGradient>
          <linearGradient id="productSerum" x1="0" y1="0" x2="40" y2="80" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FDE047" />
            <stop offset="0.6" stopColor="#F59E0B" />
            <stop offset="1" stopColor="#D97706" />
          </linearGradient>
        </defs>

        {/* Shoulders and Modest Blazer */}
        <path
          d="M60 460 C60 360 100 320 160 320 C220 320 260 360 260 460 Z"
          fill="url(#blazerGrad)"
        />
        {/* Lapel / Modern Modest Collar */}
        <path d="M120 320 L160 390 L200 320 L180 320 L160 360 L140 320 Z" fill="#334155" />
        <path d="M145 320 L160 355 L175 320 Z" fill="#F8FAFC" />

        {/* Hijab Drape over shoulders */}
        <path
          d="M90 220 C70 300 110 370 160 370 C210 370 250 300 230 220 C230 110 200 60 160 60 C120 60 90 110 90 220 Z"
          fill="url(#hijabGrad)"
        />

        {/* Elegant Tudung folds */}
        <path
          d="M110 180 Q160 270 210 180"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M125 220 Q160 295 195 220"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* Head & Face Contour */}
        <ellipse cx="160" cy="175" rx="46" ry="54" fill="#E6BA95" />

        {/* Inner Hijab Awning / Forehead framing */}
        <path
          d="M118 165 C122 135 138 120 160 120 C182 120 198 135 202 165 C202 145 184 130 160 130 C136 130 118 145 118 165 Z"
          fill="rgba(0,0,0,0.18)"
        />
        <path
          d="M116 168 C122 138 138 124 160 124 C182 124 198 138 204 168 C204 208 190 228 160 228 C130 228 116 208 116 168 Z"
          fill="#E6BA95"
        />

        {/* Soft Blush */}
        <circle cx="132" cy="186" r="8" fill="#F472B6" fillOpacity="0.28" />
        <circle cx="188" cy="186" r="8" fill="#F472B6" fillOpacity="0.28" />

        {/* Eyes & Eyebrows */}
        <g className="transition-transform duration-300">
          {/* Eyebrows */}
          <path d="M130 156 Q142 152 152 156" stroke="#261710" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M168 156 Q178 152 190 156" stroke="#261710" strokeWidth="2.5" strokeLinecap="round" />

          {/* Almond Eyes */}
          <ellipse cx="142" cy="168" rx="6.5" ry="4.5" fill="#1C140F" />
          <ellipse cx="178" cy="168" rx="6.5" ry="4.5" fill="#1C140F" />
          {/* Pupil reflections */}
          <circle cx="144" cy="166" r="1.8" fill="#FFFFFF" />
          <circle cx="180" cy="166" r="1.8" fill="#FFFFFF" />
          {/* Eyelash eyeliner flick */}
          <path d="M134 167 Q142 162 150 167" stroke="#1A120B" strokeWidth="1.8" strokeLinecap="round" fill="none" />
          <path d="M170 167 Q178 162 186 167" stroke="#1A120B" strokeWidth="1.8" strokeLinecap="round" fill="none" />
        </g>

        {/* Nose */}
        <path d="M158 172 Q160 183 155 186 Q160 188 165 186" stroke="#C99870" strokeWidth="1.8" strokeLinecap="round" fill="none" />

        {/* Mouth with Talking State animation */}
        {isSpeaking ? (
          <g>
            <path
              d="M148 202 Q160 216 172 202 Q160 206 148 202 Z"
              fill="#BE185D"
            />
            {/* Teeth hint */}
            <path d="M152 203 Q160 206 168 203" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
          </g>
        ) : (
          <path
            d="M148 202 Q160 212 172 202"
            stroke="#DB2777"
            strokeWidth="3.2"
            strokeLinecap="round"
            fill="none"
          />
        )}

        {/* Hijab brooch pin */}
        <circle cx="160" cy="232" r="3.5" fill="#F59E0B" stroke="#FDE68A" strokeWidth="1" />

        {/* Hand and Gestures */}
        {gesture === 'lift' && (
          <g className="animate-pulse">
            {/* Hand holding skincare bottle up */}
            <rect x="75" y="240" width="34" height="60" rx="8" fill="url(#productSerum)" stroke="#FEF08A" strokeWidth="2" />
            <rect x="86" y="226" width="12" height="14" rx="2" fill="#FFFFFF" />
            <circle cx="92" cy="221" r="5" fill="#E2E8F0" />
            {/* Modest sleeve & hand */}
            <path d="M40 360 C50 310 70 290 85 285" stroke="#1E293B" strokeWidth="22" strokeLinecap="round" />
            <circle cx="85" cy="285" r="9" fill="#E6BA95" />
          </g>
        )}

        {gesture === 'show' && (
          <g>
            {/* Hand showing product directly towards camera */}
            <rect x="135" y="250" width="50" height="90" rx="12" fill="url(#productSerum)" stroke="#FDE047" strokeWidth="3" filter="drop-shadow(0 4px 12px rgba(245,158,11,0.5))" />
            <rect x="153" y="232" width="14" height="18" rx="3" fill="#FFFFFF" />
            <circle cx="160" cy="226" r="6" fill="#F8FAFC" />
            {/* Product Label Preview */}
            <rect x="142" y="280" width="36" height="24" rx="4" fill="#FFFFFF" fillOpacity="0.85" />
            <rect x="146" y="285" width="28" height="4" rx="2" fill="#D97706" />
            <rect x="146" y="293" width="18" height="3" rx="1.5" fill="#475569" />
            {/* Hands holding product */}
            <circle cx="132" cy="300" r="10" fill="#E6BA95" />
            <circle cx="188" cy="300" r="10" fill="#E6BA95" />
          </g>
        )}

        {gesture === 'point' && (
          <g>
            {/* Hand pointing towards Yellow Bag bottom corner */}
            <path d="M220 380 Q250 360 270 395" stroke="#1E293B" strokeWidth="20" strokeLinecap="round" />
            <circle cx="270" cy="395" r="9" fill="#E6BA95" />
            {/* Pointing finger */}
            <path d="M270 395 L290 420" stroke="#E6BA95" strokeWidth="6" strokeLinecap="round" />
          </g>
        )}

        {gesture === 'put_back' && (
          <g>
            {/* Hand placing product back on studio desk */}
            <rect x="60" y="380" width="28" height="48" rx="6" fill="url(#productSerum)" stroke="#FEF08A" strokeWidth="1.5" />
            <rect x="70" y="370" width="8" height="10" rx="2" fill="#FFFFFF" />
            <path d="M40 430 Q55 395 68 395" stroke="#1E293B" strokeWidth="18" strokeLinecap="round" />
            <circle cx="68" cy="395" r="7" fill="#E6BA95" />
          </g>
        )}
      </svg>
    </div>
  );
};
