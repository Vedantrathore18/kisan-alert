import React from 'react'

export default function LeafVisual({ item, customImage, className = '' }) {
  if (customImage) {
    return (
      <div className={`relative overflow-hidden rounded-2xl bg-slate-950 flex items-center justify-center ${className}`}>
        <img
          src={customImage}
          alt="Uploaded Leaf"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
      </div>
    )
  }

  const type = item?.svgType || 'concentric-spots'

  return (
    <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-950 via-slate-900 to-emerald-900 flex items-center justify-center ${className}`}>
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#05966915_1px,transparent_1px),linear-gradient(to_bottom,#05966915_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

      {/* SVG Leaf Visuals */}
      {type === 'concentric-spots' && <TomatoLeafVisual />}
      {type === 'yellow-stripes' && <WheatLeafVisual />}
      {type === 'curled-margins' && <CottonLeafVisual />}
      {type === 'wavy-margins' && <RiceLeafVisual />}
      {type === 'dark-water-soaked' && <PotatoLeafVisual />}
      {!['concentric-spots', 'yellow-stripes', 'curled-margins', 'wavy-margins', 'dark-water-soaked'].includes(type) && <DefaultLeafVisual />}

      {/* Subtle overlay shading */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none" />
    </div>
  )
}

function TomatoLeafVisual() {
  return (
    <svg viewBox="0 0 200 200" className="w-4/5 h-4/5 max-w-[220px] max-h-[220px] drop-shadow-2xl">
      {/* Main leaf body */}
      <path
        d="M100 20 C140 40 180 80 160 140 C140 180 110 190 100 195 C90 190 60 180 40 140 C20 80 60 40 100 20 Z"
        fill="#22733d"
        stroke="#165b2f"
        strokeWidth="2"
      />
      {/* Leaf veins */}
      <path d="M100 20 L100 195" stroke="#4ade80" strokeWidth="2.5" opacity="0.6" />
      <path d="M100 70 Q130 65 155 80" stroke="#4ade80" strokeWidth="1.5" opacity="0.5" fill="none" />
      <path d="M100 70 Q70 65 45 80" stroke="#4ade80" strokeWidth="1.5" opacity="0.5" fill="none" />
      <path d="M100 110 Q135 105 158 120" stroke="#4ade80" strokeWidth="1.5" opacity="0.5" fill="none" />
      <path d="M100 110 Q65 105 42 120" stroke="#4ade80" strokeWidth="1.5" opacity="0.5" fill="none" />
      <path d="M100 150 Q125 150 140 165" stroke="#4ade80" strokeWidth="1.5" opacity="0.5" fill="none" />
      <path d="M100 150 Q75 150 60 165" stroke="#4ade80" strokeWidth="1.5" opacity="0.5" fill="none" />

      {/* Early Blight Concentric Rings (Spots) */}
      {/* Spot 1 */}
      <circle cx="80" cy="85" r="22" fill="#eab308" opacity="0.65" />
      <circle cx="80" cy="85" r="16" fill="#78350f" />
      <circle cx="80" cy="85" r="11" fill="#451a03" stroke="#b45309" strokeWidth="1.5" />
      <circle cx="80" cy="85" r="6" fill="#1c1917" />

      {/* Spot 2 */}
      <circle cx="125" cy="130" r="18" fill="#eab308" opacity="0.7" />
      <circle cx="125" cy="130" r="13" fill="#78350f" />
      <circle cx="125" cy="130" r="8" fill="#451a03" stroke="#b45309" strokeWidth="1.2" />
      <circle cx="125" cy="130" r="4" fill="#1c1917" />

      {/* Spot 3 (Margin) */}
      <circle cx="140" cy="90" r="12" fill="#ca8a04" opacity="0.75" />
      <circle cx="140" cy="90" r="8" fill="#542307" />
      <circle cx="140" cy="90" r="4" fill="#291204" />
    </svg>
  )
}

function WheatLeafVisual() {
  return (
    <svg viewBox="0 0 200 200" className="w-4/5 h-4/5 max-w-[220px] max-h-[220px] drop-shadow-2xl">
      {/* Long blade of wheat leaf */}
      <path
        d="M90 10 Q105 10 115 10 Q145 90 120 195 L80 195 Q55 90 85 10 Z"
        fill="#2e7d32"
        stroke="#1b5e20"
        strokeWidth="2"
      />
      {/* Parallel Veins */}
      <line x1="100" y1="10" x2="100" y2="195" stroke="#86efac" strokeWidth="2" opacity="0.6" />
      <line x1="92" y1="20" x2="88" y2="195" stroke="#86efac" strokeWidth="1" opacity="0.4" />
      <line x1="108" y1="20" x2="112" y2="195" stroke="#86efac" strokeWidth="1" opacity="0.4" />

      {/* Yellow Rust Stripes */}
      <g fill="#facc15" stroke="#ca8a04" strokeWidth="0.8">
        {/* Stripe 1 */}
        <line x1="94" y1="40" x2="94" y2="175" stroke="#eab308" strokeWidth="5" strokeDasharray="6 3" />
        {/* Stripe 2 */}
        <line x1="106" y1="55" x2="106" y2="185" stroke="#f59e0b" strokeWidth="4.5" strokeDasharray="5 2.5" />
        {/* Stripe 3 */}
        <line x1="100" y1="80" x2="100" y2="160" stroke="#fbbf24" strokeWidth="3" strokeDasharray="4 2" />
        {/* Orange Rust Pustules */}
        <circle cx="94" cy="50" r="2.5" fill="#ea580c" />
        <circle cx="94" cy="70" r="2.8" fill="#ea580c" />
        <circle cx="106" cy="95" r="2.6" fill="#ea580c" />
        <circle cx="94" cy="115" r="2.5" fill="#ea580c" />
        <circle cx="106" cy="140" r="2.7" fill="#ea580c" />
      </g>
    </svg>
  )
}

function CottonLeafVisual() {
  return (
    <svg viewBox="0 0 200 200" className="w-4/5 h-4/5 max-w-[220px] max-h-[220px] drop-shadow-2xl">
      {/* 3-lobed cotton leaf with curled wrinkled margin */}
      <path
        d="M100 25 C120 45 135 45 155 35 C145 65 175 90 170 120 C150 140 145 175 100 190 C55 175 50 140 30 120 C25 90 55 65 45 35 C65 45 80 45 100 25 Z"
        fill="#3f6212"
        stroke="#1a2e05"
        strokeWidth="2.5"
      />
      {/* Main palmate veins */}
      <path d="M100 190 L100 35" stroke="#bef264" strokeWidth="4" />
      <path d="M100 140 L160 55" stroke="#bef264" strokeWidth="3.5" />
      <path d="M100 140 L40 55" stroke="#bef264" strokeWidth="3.5" />
      <path d="M100 155 L150 120" stroke="#bef264" strokeWidth="2.5" />
      <path d="M100 155 L50 120" stroke="#bef264" strokeWidth="2.5" />

      {/* Swollen Green Veins & Enations (Thickened veins) */}
      <path d="M100 90 Q125 80 140 70" stroke="#65a30d" strokeWidth="3" strokeDasharray="3 2" fill="none" />
      <path d="M100 100 Q75 90 60 80" stroke="#65a30d" strokeWidth="3" strokeDasharray="3 2" fill="none" />

      {/* Wrinkling & Curling visual arcs */}
      <path d="M145 40 Q160 55 165 80" stroke="#a3e635" strokeWidth="2" strokeDasharray="4 3" fill="none" />
      <path d="M55 40 Q40 55 35 80" stroke="#a3e635" strokeWidth="2" strokeDasharray="4 3" fill="none" />
      <circle cx="130" cy="95" r="14" fill="#a3e635" opacity="0.25" />
      <circle cx="70" cy="100" r="12" fill="#a3e635" opacity="0.25" />
    </svg>
  )
}

function RiceLeafVisual() {
  return (
    <svg viewBox="0 0 200 200" className="w-4/5 h-4/5 max-w-[220px] max-h-[220px] drop-shadow-2xl">
      {/* Narrow pointed rice leaf */}
      <path
        d="M100 15 Q125 70 120 190 L80 190 Q75 70 100 15 Z"
        fill="#15803d"
        stroke="#14532d"
        strokeWidth="2"
      />
      <line x1="100" y1="15" x2="100" y2="190" stroke="#86efac" strokeWidth="2" opacity="0.5" />

      {/* Bacterial Leaf Blight wavy lesions on borders */}
      {/* Right margin lesion */}
      <path
        d="M100 15 Q115 40 118 70 Q112 90 122 120 Q110 145 119 180 L108 180 Q105 130 108 80 Q102 50 100 15 Z"
        fill="#fde047"
        stroke="#ca8a04"
        strokeWidth="1.2"
        opacity="0.88"
      />
      {/* Grayish drying center */}
      <path
        d="M102 30 Q114 60 115 110 L110 110 Q107 60 102 30 Z"
        fill="#e2e8f0"
        opacity="0.8"
      />
      {/* Bacterial ooze dots */}
      <circle cx="114" cy="75" r="2" fill="#ca8a04" />
      <circle cx="116" cy="95" r="2" fill="#ca8a04" />
      <circle cx="113" cy="130" r="2.2" fill="#ca8a04" />
    </svg>
  )
}

function PotatoLeafVisual() {
  return (
    <svg viewBox="0 0 200 200" className="w-4/5 h-4/5 max-w-[220px] max-h-[220px] drop-shadow-2xl">
      {/* Oval potato leaflet */}
      <path
        d="M100 25 C145 35 165 75 160 135 C150 175 115 190 100 190 C85 190 50 175 40 135 C35 75 55 35 100 25 Z"
        fill="#1e5128"
        stroke="#0f3016"
        strokeWidth="2"
      />
      <path d="M100 25 L100 190" stroke="#4ade80" strokeWidth="2" opacity="0.6" />
      <path d="M100 80 Q130 75 155 90" stroke="#4ade80" strokeWidth="1.5" opacity="0.4" fill="none" />
      <path d="M100 80 Q70 75 45 90" stroke="#4ade80" strokeWidth="1.5" opacity="0.4" fill="none" />

      {/* Late Blight Water-soaked Necrotic Blotches */}
      {/* Big dark necrotic lesion at top */}
      <path
        d="M80 30 Q110 35 135 50 Q110 75 85 65 Q70 50 80 30 Z"
        fill="#1c1917"
        stroke="#78716c"
        strokeWidth="1.5"
      />
      {/* Pale green/yellow water halo */}
      <path
        d="M75 25 Q115 30 145 50 Q115 85 80 72 Z"
        fill="none"
        stroke="#fef08a"
        strokeWidth="2.5"
        opacity="0.6"
      />

      {/* Downy mildew white edge */}
      <path
        d="M88 65 Q105 75 125 58"
        stroke="#ffffff"
        strokeWidth="2"
        strokeDasharray="2 1.5"
        fill="none"
        opacity="0.9"
      />

      {/* Bottom lesion */}
      <path
        d="M110 115 Q145 120 155 145 Q125 165 105 140 Z"
        fill="#292524"
        stroke="#57534e"
        strokeWidth="1.5"
      />
    </svg>
  )
}

function DefaultLeafVisual() {
  return (
    <svg viewBox="0 0 200 200" className="w-4/5 h-4/5 max-w-[220px] max-h-[220px] drop-shadow-2xl">
      <path
        d="M100 20 C150 40 170 100 150 150 C130 185 110 195 100 195 C90 195 70 185 50 150 C30 100 50 40 100 20 Z"
        fill="#166534"
        stroke="#14532d"
        strokeWidth="2"
      />
      <line x1="100" y1="20" x2="100" y2="195" stroke="#86efac" strokeWidth="2.5" opacity="0.6" />
      <circle cx="85" cy="85" r="14" fill="#a16207" stroke="#713f12" strokeWidth="2" />
      <circle cx="120" cy="120" r="18" fill="#a16207" stroke="#713f12" strokeWidth="2" />
    </svg>
  )
}
