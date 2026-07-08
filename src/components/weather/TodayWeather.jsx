import React from 'react'
import { CloudSun, Droplets, Wind, CloudRain, Sunrise, Sunset, MapPin } from 'lucide-react'

const hourly = [
  { h: '9 AM',  t: 25, r: 5 },
  { h: '11 AM', t: 27, r: 10 },
  { h: '1 PM',  t: 30, r: 20 },
  { h: '3 PM',  t: 31, r: 35 },
  { h: '5 PM',  t: 29, r: 40 },
  { h: '7 PM',  t: 26, r: 30 },
  { h: '9 PM',  t: 24, r: 15 },
]

export default function TodayWeather() {
  const max = Math.max(...hourly.map(h => h.t))
  const min = Math.min(...hourly.map(h => h.t))

  return (
    <div className="relative rounded-3xl p-6 md:p-8 overflow-hidden text-white shadow-2xl bg-gradient-to-br from-brand-600 via-emerald-700 to-brand-800 h-full">
      <div className="absolute -top-24 -right-16 w-72 h-72 rounded-full bg-yellow-300/30 blur-3xl" />
      <div className="absolute -bottom-20 -left-16 w-72 h-72 rounded-full bg-emerald-300/30 blur-3xl" />
      <div className="absolute inset-0 opacity-30 mix-blend-overlay"
           style={{ backgroundImage: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.5), transparent 45%)' }} />

      <div className="relative">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur border border-white/30 text-xs font-semibold">
              <MapPin className="w-3.5 h-3.5" /> Nashik, Maharashtra · Today
            </div>
            <div className="mt-5 flex items-end gap-4">
              <CloudSun className="w-24 h-24 text-yellow-300 drop-shadow-lg animate-float" />
              <div>
                <div className="text-7xl md:text-8xl font-black leading-none tracking-tight">28°</div>
                <div className="text-white/80 text-lg mt-1">Partly Sunny · Feels like 30°</div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl">
              <MiniStat icon={<Droplets className="w-4 h-4" />} label="Humidity" value="62%" />
              <MiniStat icon={<Wind className="w-4 h-4" />} label="Wind" value="12 km/h" />
              <MiniStat icon={<CloudRain className="w-4 h-4" />} label="Rain" value="35%" />
              <MiniStat icon={<Sunrise className="w-4 h-4" />} label="Sunrise" value="6:12 AM" />
            </div>
          </div>
        </div>

        {/* Hourly strip */}
        <div className="mt-8 pt-6 border-t border-white/20">
          <div className="flex items-center justify-between mb-3">
            <div className="text-xs font-bold uppercase tracking-widest text-white/80">Hour by Hour</div>
            <div className="text-xs text-white/70">High {max}° · Low {min}°</div>
          </div>
          <div className="flex justify-between gap-2 overflow-x-auto pb-1">
            {hourly.map((h, i) => (
              <div key={i} className="min-w-[52px] flex flex-col items-center gap-1 bg-white/10 backdrop-blur border border-white/20 rounded-2xl px-2 py-3 hover:bg-white/20 transition">
                <span className="text-[11px] text-white/80 font-semibold">{h.h}</span>
                <CloudSun className="w-5 h-5 text-yellow-200" />
                <span className="text-sm font-bold">{h.t}°</span>
                <span className="text-[10px] text-white/70">{h.r}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function MiniStat({ icon, label, value }) {
  return (
    <div className="rounded-2xl bg-white/15 backdrop-blur border border-white/25 p-3">
      <div className="flex items-center gap-1.5 text-white/80 text-[10px] font-bold uppercase tracking-wider">{icon}{label}</div>
      <div className="mt-1 text-lg font-black">{value}</div>
    </div>
  )
}
