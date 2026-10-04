import React, { useState } from 'react';
import crystalLogoImg from '../assets/images/livefluencer_crystal_logo_1791137121514.jpg';

export const CrystalPlayIcon: React.FC<{ size?: number; className?: string }> = ({
  size = 58,
  className = '',
}) => {
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 rounded-2xl overflow-hidden select-none ${className}`}
      style={{ width: size, height: size }}
    >
      {!hasError ? (
        <img
          src={crystalLogoImg || '/images/livefluencer_crystal_logo_1791137121514.jpg'}
          alt="LiveFluencer Logo"
          className="w-full h-full object-contain scale-[1.35] filter drop-shadow-[0_0_16px_rgba(255,0,128,0.7)]"
          onError={() => setHasError(true)}
          loading="eager"
        />
      ) : (
        /* Standalone High-Precision SVG Fallback in case of any network failure */
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-[0_0_16px_rgba(255,0,128,0.7)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="fallbackTopPink" x1="16" y1="12" x2="52" y2="34" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFA6D8" />
              <stop offset="40%" stopColor="#FF007F" />
              <stop offset="100%" stopColor="#D946EF" />
            </linearGradient>
            <linearGradient id="fallbackViolet" x1="45" y1="18" x2="88" y2="50" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#C084FC" />
              <stop offset="45%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
            <linearGradient id="fallbackCyan" x1="88" y1="50" x2="52" y2="68" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="50%" stopColor="#00C2FF" />
              <stop offset="100%" stopColor="#0088FF" />
            </linearGradient>
            <linearGradient id="fallbackBottom" x1="52" y1="68" x2="18" y2="86" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="45%" stopColor="#00E5FF" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>
            <linearGradient id="fallbackPurple" x1="18" y1="86" x2="38" y2="50" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="50%" stopColor="#6366F1" />
              <stop offset="100%" stopColor="#7C3AED" />
            </linearGradient>
            <clipPath id="fallbackClip">
              <path d="M 28 14 C 20 9 14 14 14 23 L 14 77 C 14 86 20 91 28 86 L 84 56 C 91 52 91 48 84 44 Z" />
            </clipPath>
          </defs>
          <g clipPath="url(#fallbackClip)">
            <rect width="100" height="100" fill="#06081A" />
            <polygon points="14,12 52,34 38,50 14,34" fill="url(#fallbackTopPink)" />
            <polygon points="14,12 52,34 88,50" fill="url(#fallbackViolet)" />
            <polygon points="88,50 52,34 68,50" fill="url(#fallbackCyan)" />
            <polygon points="88,50 68,50 52,66" fill="#00C2FF" />
            <polygon points="88,50 52,66 28,86" fill="url(#fallbackBottom)" />
            <polygon points="28,86 52,66 38,50 14,70" fill="url(#fallbackPurple)" />
            <polygon points="14,12 14,70 38,50" fill="#FF007F" />
            <path d="M 20 30 C 20 20 26 15 36 15 C 42 15 48 18 52 22" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" opacity="0.95" />
            <polygon points="36,32 66,50 36,68" fill="#050A14" />
          </g>
        </svg>
      )}
    </div>
  );
};

// Backwards-compatible export
export const RobotMascotIcon = CrystalPlayIcon;

export const BrandLogo: React.FC<{
  showSubtext?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}> = ({ showSubtext = true, className = '', size = 'md' }) => {
  // Logo icon stays at prominent size
  const iconSize = size === 'sm' ? 44 : size === 'lg' ? 70 : 58;
  
  // Label name compact and proportional
  const mainFontSize = size === 'sm' ? 'text-lg sm:text-xl' : size === 'lg' ? 'text-2xl sm:text-3xl' : 'text-[21px] sm:text-[23px]';
  const taglineSize = size === 'sm' ? 'text-[8.5px]' : size === 'lg' ? 'text-[11px]' : 'text-[9.5px] sm:text-[10px]';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* 3D Faceted Crystal Play Button Logo Icon */}
      <CrystalPlayIcon size={iconSize} />

      {/* Brand Name & Tagline */}
      <div className="flex flex-col text-left justify-center">
        <div 
          className={`${mainFontSize} leading-none flex items-center tracking-tight`}
          style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 900 }}
        >
          {/* LIVE in Neon Magenta/Pink */}
          <span 
            className="text-[#FF007F] drop-shadow-[0_0_12px_rgba(255,0,127,0.5)]"
            style={{ color: '#FF007F' }}
          >
            LIVE
          </span>

          {/* FLUENCER. in Pure Crisp White (Including the dot!) */}
          <span 
            className="text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]"
            style={{ color: '#FFFFFF' }}
          >
            FLUENCER.
          </span>

          {/* AI in Radiant Electric Sky Blue */}
          <span 
            className="text-[#00A3FF] drop-shadow-[0_0_12px_rgba(0,163,255,0.6)]"
            style={{ color: '#00A3FF' }}
          >
            AI
          </span>
        </div>

        {/* Tagline */}
        {showSubtext && (
          <span 
            className={`${taglineSize} uppercase mt-1 font-semibold text-slate-200`}
            style={{ 
              fontFamily: "'Outfit', sans-serif",
              letterSpacing: '0.14em',
              color: '#CBD5E1'
            }}
          >
            YOUR AI SALES HOST – LIVE EVERY DAY
          </span>
        )}
      </div>
    </div>
  );
};
