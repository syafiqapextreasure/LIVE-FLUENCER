import React from 'react';

export const CrystalPlayIcon: React.FC<{ size?: number; className?: string }> = ({
  size = 58,
  className = '',
}) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 rounded-2xl overflow-hidden select-none ${className}`}
      style={{ width: size, height: size }}
    >
      <img
        src="/src/assets/images/livefluencer_crystal_logo_1791137121514.jpg"
        alt="LiveFluencer Logo"
        className="w-full h-full object-contain scale-[1.35] filter drop-shadow-[0_0_16px_rgba(255,0,128,0.7)]"
        referrerPolicy="no-referrer"
      />
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
  // Logo icon stays at the exact same prominent size
  const iconSize = size === 'sm' ? 44 : size === 'lg' ? 70 : 58;
  
  // Label name made a bit smaller and more refined as requested
  const mainFontSize = size === 'sm' ? 'text-lg sm:text-xl' : size === 'lg' ? 'text-2xl sm:text-3xl' : 'text-[21px] sm:text-[23px]';
  const taglineSize = size === 'sm' ? 'text-[8.5px]' : size === 'lg' ? 'text-[11px]' : 'text-[9.5px] sm:text-[10px]';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* 3D Faceted Crystal Play Button Logo Icon (Size maintained) */}
      <CrystalPlayIcon size={iconSize} />

      {/* Brand Name & Tagline (Refined, a bit smaller) */}
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

        {/* Tagline matching reference image */}
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
