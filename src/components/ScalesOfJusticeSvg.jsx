import React from 'react';

export default function ScalesOfJusticeSvg({ className = "w-full h-full opacity-20" }) {
  return (
    <svg
      viewBox="0 0 800 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        {/* Gradients for metallic luxury feel */}
        <linearGradient id="goldBeam" x1="100" y1="280" x2="700" y2="280" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#DFBA55" stopOpacity="0.8" />
          <stop offset="25%" stopColor="#FAF8F5" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#C9A84C" stopOpacity="0.7" />
          <stop offset="75%" stopColor="#FAF8F5" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#DFBA55" stopOpacity="0.8" />
        </linearGradient>

        <linearGradient id="silverPillar" x1="380" y1="120" x2="420" y2="680" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
          <stop offset="30%" stopColor="#94A3B8" stopOpacity="0.6" />
          <stop offset="70%" stopColor="#475569" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#CBD5E1" stopOpacity="0.7" />
        </linearGradient>

        <radialGradient id="panShine" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.4" />
          <stop offset="70%" stopColor="#C9A84C" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#0B1120" stopOpacity="0" />
        </radialGradient>

        <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#C9A84C" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#0B1120" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Ambient center glow */}
      <circle cx="400" cy="300" r="300" fill="url(#centerGlow)" />

      {/* Central Pillar Finial (Top Sphere and spike) */}
      <circle cx="400" cy="120" r="16" fill="url(#goldBeam)" />
      <polygon points="400,85 394,115 406,115" fill="#FAF8F5" opacity="0.8" />

      {/* Central Vertical Pillar */}
      <rect x="394" y="136" width="12" height="480" rx="6" fill="url(#silverPillar)" />
      <rect x="388" y="240" width="24" height="60" rx="4" fill="url(#goldBeam)" opacity="0.6" />

      {/* Horizontal Main Beam */}
      <path
        d="M 120,290 C 260,270 370,265 400,265 C 430,265 540,270 680,290"
        stroke="url(#goldBeam)"
        strokeWidth="10"
        strokeLinecap="round"
        fill="none"
      />
      {/* Beam central connector */}
      <circle cx="400" cy="265" r="22" fill="#0A101D" stroke="url(#goldBeam)" strokeWidth="5" />
      <circle cx="400" cy="265" r="8" fill="#DFBA55" />

      {/* Left Plate Assembly */}
      {/* Ring at beam end */}
      <circle cx="140" cy="288" r="8" fill="url(#goldBeam)" />
      {/* Chains */}
      <line x1="140" y1="296" x2="60" y2="460" stroke="#94A3B8" strokeWidth="2.5" strokeDasharray="6 4" opacity="0.7" />
      <line x1="140" y1="296" x2="220" y2="460" stroke="#94A3B8" strokeWidth="2.5" strokeDasharray="6 4" opacity="0.7" />
      <line x1="140" y1="296" x2="140" y2="460" stroke="#CBD5E1" strokeWidth="2.5" strokeDasharray="6 4" opacity="0.8" />
      
      {/* Left Pan (Bowl) */}
      <ellipse cx="140" cy="460" rx="90" ry="18" fill="url(#panShine)" stroke="url(#goldBeam)" strokeWidth="3" />
      <path
        d="M 50,460 C 50,520 230,520 230,460"
        stroke="url(#goldBeam)"
        strokeWidth="3.5"
        fill="#0D1629"
        fillOpacity="0.4"
      />

      {/* Right Plate Assembly */}
      {/* Ring at beam end */}
      <circle cx="660" cy="288" r="8" fill="url(#goldBeam)" />
      {/* Chains */}
      <line x1="660" y1="296" x2="580" y2="460" stroke="#94A3B8" strokeWidth="2.5" strokeDasharray="6 4" opacity="0.7" />
      <line x1="660" y1="296" x2="740" y2="460" stroke="#94A3B8" strokeWidth="2.5" strokeDasharray="6 4" opacity="0.7" />
      <line x1="660" y1="296" x2="660" y2="460" stroke="#CBD5E1" strokeWidth="2.5" strokeDasharray="6 4" opacity="0.8" />

      {/* Right Pan (Bowl) */}
      <ellipse cx="660" cy="460" rx="90" ry="18" fill="url(#panShine)" stroke="url(#goldBeam)" strokeWidth="3" />
      <path
        d="M 570,460 C 570,520 750,520 750,460"
        stroke="url(#goldBeam)"
        strokeWidth="3.5"
        fill="#0D1629"
        fillOpacity="0.4"
      />

      {/* Heavy Pedestal Base */}
      <path
        d="M 320,640 L 480,640 L 510,680 L 290,680 Z"
        fill="url(#goldBeam)"
        opacity="0.85"
      />
      <rect x="270" y="680" width="260" height="24" rx="6" fill="#162036" stroke="url(#goldBeam)" strokeWidth="3" />
    </svg>
  );
}
