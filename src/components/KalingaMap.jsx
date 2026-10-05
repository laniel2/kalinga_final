// Stylised locator map: Philippines (left) with Kalinga highlighted, enlarged province (right).
// Shapes are simplified illustrations, not survey-accurate boundaries.
const PH = (
  <g>
    {/* Luzon */}
    <path transform="translate(-14 0) scale(1.3 1)" d="M52 2 62 6 66 16 60 26 67 38 63 52 71 62 65 74 73 84 82 92 98 100 112 112 118 124 108 128 96 120 86 116 74 112 62 106 50 108 44 96 38 86 30 74 26 60 24 46 30 34 38 24 44 12Z" />
    
    {/* Mindoro, Palawan, Visayas, Mindanao */}
    <path d="M48 142 60 136 66 148 58 160 48 156Z" />
    <path d="M6 168 14 164 40 202 52 232 46 236 28 214 12 186Z" />
    <path d="M108 138 120 134 124 152 114 160 106 150Z" />
    <path d="M70 168 84 160 90 176 80 188 68 182Z" />
    <path d="M90 188 102 182 108 208 98 222 88 206Z" />
    <path d="M112 176 124 172 126 196 116 200Z" />
    <path d="M110 218 124 214 128 226 114 230Z" />
    <path d="M82 246 112 240 142 246 160 262 154 288 140 302 120 312 104 302 86 306 80 284 84 262Z" />
  </g>
);

const PROVINCE =
  "M538 98 560 88 574 66 600 42 622 20 642 10 660 28 652 50 664 74 680 96 692 118 682 146 690 176 678 206 692 234 666 258 642 268 624 296 604 312 582 328 562 310 538 294 520 268 508 242 492 218 500 190 484 168 498 144 520 132Z";

export default function KalingaMap() {
  return (
    <svg className="kmap" viewBox="0 0 740 420" role="img" aria-label="Map showing Kalinga in northern Luzon, bordered by Apayao, Cagayan, Isabela, Mountain Province and Abra">
      <defs>
        <linearGradient id="kfill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#c8935a" />
          <stop offset="1" stopColor="#7a4b25" />
        </linearGradient>
        <filter id="krelief" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.016 0.028" numOctaves="4" seed="11" result="n" />
          <feDiffuseLighting in="n" lightingColor="#f0c690" surfaceScale="10">
            <feDistantLight azimuth="225" elevation="46" />
          </feDiffuseLighting>
        </filter>
        <clipPath id="kclip">
          <path d={PROVINCE} />
        </clipPath>
        <radialGradient id="kglow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#e9b27a" stopOpacity="0.5" />
          <stop offset="1" stopColor="#e9b27a" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Philippines */}
      <g transform="translate(120 24) scale(1.32)" fill="#a8744a" opacity="0.92" stroke="#2a1608" strokeWidth="0.6">
        {PH}
        <circle cx="48" cy="26" r="14" fill="url(#kglow)" stroke="none" />
        <path d="M45 22 52 20 54 28 47 31Z" fill="#fff3e0" stroke="none" />
      </g>

      {/* Connector lines from the locator to the enlarged province */}
      <g stroke="#c98a4b" strokeWidth="1.1" strokeDasharray="4 4" fill="none" opacity="0.85">
        <path d="M196 52 L560 14" />
        <path d="M196 66 L520 300" />
      </g>

      {/* Kalinga, enlarged */}
      <g transform="translate(-30 0)">
        <g clipPath="url(#kclip)">
          <rect x="470" y="0" width="240" height="340" fill="url(#kfill)" />
          <rect x="470" y="0" width="240" height="340" filter="url(#krelief)" style={{ mixBlendMode: "soft-light" }} opacity="0.85" />
        </g>
        <path d={PROVINCE} fill="none" stroke="#fff3e0" strokeWidth="1.6" strokeLinejoin="round" />
        <text x="590" y="190" textAnchor="middle" className="kmap__name">KALINGA</text>
        <circle cx="572" cy="224" r="6" fill="#fff" />
        <text x="586" y="230" className="kmap__city">Tabuk City</text>
      </g>

      {/* Neighbours */}
      <g className="kmap__nb">
        <text x="496" y="34" textAnchor="middle">Apayao</text>
        <text x="432" y="150" textAnchor="middle">Abra</text>
        <text x="736" y="96" textAnchor="end">Cagayan</text>
        <text x="736" y="252" textAnchor="end">Isabela</text>
        <text x="470" y="352" textAnchor="middle">Mountain</text>
        <text x="470" y="370" textAnchor="middle">Province</text>
      </g>

      {/* North arrow */}
      <g transform="translate(704 22)" fill="#c98a4b">
        <text x="0" y="-10" textAnchor="middle" className="kmap__n">N</text>
        <path d="M0 0 9 28 0 22 -9 28Z" />
      </g>

      {/* Scale bar */}
      <g transform="translate(488 396)" stroke="#e9d5bd" strokeWidth="1.2" fill="none">
        <path d="M0 0H250M0 -5V5M62 -4V4M125 -4V4M250 -5V5" />
      </g>
      <g className="kmap__scale" textAnchor="middle">
        <text x="488" y="414">0</text>
        <text x="550" y="414">10</text>
        <text x="613" y="414">20</text>
        <text x="738" y="414" textAnchor="end">40 KM</text>
      </g>
    </svg>
  );
}
