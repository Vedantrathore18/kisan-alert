import React, { useMemo } from 'react'
import { LineChart, CloudRain } from 'lucide-react'

const week = [
  { d: 'Mon', hi: 30, lo: 22, rain: 10 },
  { d: 'Tue', hi: 28, lo: 21, rain: 20 },
  { d: 'Wed', hi: 25, lo: 19, rain: 85 },
  { d: 'Thu', hi: 26, lo: 20, rain: 60 },
  { d: 'Fri', hi: 29, lo: 22, rain: 15 },
  { d: 'Sat', hi: 32, lo: 24, rain: 5 },
  { d: 'Sun', hi: 31, lo: 23, rain: 10 },
]

export default function ForecastChart() {
  const W = 700, H = 220, P = 40
  const maxT = Math.max(...week.map(w => w.hi)) + 2
  const minT = Math.min(...week.map(w => w.lo)) - 2

  const scaleX = (i) => P + (i * (W - P * 2)) / (week.length - 1)
  const scaleY = (t) => H - P - ((t - minT) / (maxT - minT)) * (H - P * 2)

  const hiPath = useMemo(() => week.map((w, i) => `${i === 0 ? 'M' : 'L'} ${scaleX(i)} ${scaleY(w.hi)}`).join(' '), [])
  const loPath = useMemo(() => week.map((w, i) => `${i === 0 ? 'M' : 'L'} ${scaleX(i)} ${scaleY(w.lo)}`).join(' '), [])
  const areaPath = `${hiPath} L ${scaleX(week.length - 1)} ${H - P} L ${scaleX(0)} ${H - P} Z`

  const maxRain = Math.max(...week.map(w => w.rain))

  return (
    <div className="glass rounded-3xl p-6">
      <div className="flex items-start justify-between flex-wrap gap-3">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 grid place-items-center shadow-md">
            <LineChart className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-brand-600">7 Day Forecast</div>
            <h3 className="font-bold text-slate-900">Temperature & Rainfall Outlook</h3>
          </div>
        </div>
        <div className="flex items-center gap-3 text-xs">
          <Legend color="#1a663b" label="High °C" />
          <Legend color="#82d19f" label="Low °C" dashed />
          <Legend color="#38bdf8" label="Rain %" bar />
        </div>
      </div>

      {/* Chart */}
      <div className="mt-6 overflow-x-auto">
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full min-w-[560px] h-56">
          <defs>
            <linearGradient id="areaG" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#4fb877" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#4fb877" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* grid */}
          {[0, 1, 2, 3].map(i => {
            const y = P + i * ((H - P * 2) / 3)
            return <line key={i} x1={P} x2={W - P} y1={y} y2={y} stroke="rgba(15,23,42,0.06)" strokeDasharray="4 4"/>
          })}

          {/* rain bars */}
          {week.map((w, i) => {
            const x = scaleX(i) - 10
            const barH = (w.rain / 100) * (H - P * 2) * 0.55
            const y = H - P - barH
            return <rect key={i} x={x} y={y} width="20" height={barH} rx="6" fill="url(#areaG)" stroke="#38bdf8" strokeOpacity="0.4"/>
          })}

          {/* area */}
          <path d={areaPath} fill="url(#areaG)" />

          {/* low line dashed */}
          <path d={loPath} fill="none" stroke="#82d19f" strokeWidth="3" strokeDasharray="6 6" strokeLinecap="round" />
          {/* high line */}
          <path d={hiPath} fill="none" stroke="#1a663b" strokeWidth="3.5" strokeLinecap="round" />

          {/* points */}
          {week.map((w, i) => (
            <g key={i}>
              <circle cx={scaleX(i)} cy={scaleY(w.hi)} r="5" fill="#fff" stroke="#1a663b" strokeWidth="3" />
              <circle cx={scaleX(i)} cy={scaleY(w.lo)} r="4" fill="#fff" stroke="#82d19f" strokeWidth="2.5" />
              <text x={scaleX(i)} y={scaleY(w.hi) - 12} textAnchor="middle" fontSize="11" fontWeight="800" fill="#1a663b">{w.hi}°</text>
              <text x={scaleX(i)} y={H - 8} textAnchor="middle" fontSize="12" fontWeight="700" fill="#64748b">{w.d}</text>
            </g>
          ))}
        </svg>
      </div>

      <div className="mt-4 flex items-center gap-2 text-xs text-slate-500 justify-end">
        <CloudRain className="w-4 h-4 text-sky-500" />
        Peak rainfall: <b className="text-slate-700">Wed ({maxRain}%)</b> · Plan indoor tasks
      </div>
    </div>
  )
}

function Legend({ color, label, dashed, bar }) {
  return (
    <div className="flex items-center gap-1.5 font-semibold text-slate-600">
      {bar ? (
        <span className="w-3 h-3 rounded-sm" style={{ background: color, opacity: 0.6 }} />
      ) : (
        <span className={`w-6 h-0.5 ${dashed ? 'border-t-2 border-dashed' : ''}`} style={{ background: dashed ? 'transparent' : color, borderColor: color }} />
      )}
      {label}
    </div>
  )
}
