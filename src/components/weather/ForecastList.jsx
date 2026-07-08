import React from 'react'
import { Sun, CloudSun, CloudRain, Cloud, Cloudy, Calendar } from 'lucide-react'

const days = [
  { d: 'Mon', full: 'Jul 06', icon: Sun,       cond: 'Sunny',       hi: 30, lo: 22, rain: 10, wind: 10 },
  { d: 'Tue', full: 'Jul 07', icon: CloudSun,  cond: 'Partly Sunny',hi: 28, lo: 21, rain: 20, wind: 14 },
  { d: 'Wed', full: 'Jul 08', icon: CloudRain, cond: 'Heavy Rain',  hi: 25, lo: 19, rain: 85, wind: 22 },
  { d: 'Thu', full: 'Jul 09', icon: CloudRain, cond: 'Showers',     hi: 26, lo: 20, rain: 60, wind: 18 },
  { d: 'Fri', full: 'Jul 10', icon: Cloud,     cond: 'Cloudy',      hi: 29, lo: 22, rain: 15, wind: 12 },
  { d: 'Sat', full: 'Jul 11', icon: Sun,       cond: 'Sunny',       hi: 32, lo: 24, rain: 5,  wind: 10 },
  { d: 'Sun', full: 'Jul 12', icon: Cloudy,    cond: 'Overcast',    hi: 31, lo: 23, rain: 10, wind: 11 },
]

export default function ForecastList() {
  return (
    <div className="glass rounded-3xl p-6 h-full">
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 grid place-items-center shadow-md">
          <Calendar className="w-5 h-5 text-white" />
        </div>
        <div>
          <div className="text-xs font-bold uppercase tracking-widest text-brand-600">Detailed Forecast</div>
          <h3 className="font-bold text-slate-900">Next 7 Days</h3>
        </div>
      </div>

      <ul className="mt-5 space-y-2">
        {days.map((d, i) => (
          <li key={i}
            className="grid grid-cols-12 items-center gap-2 p-3 rounded-2xl hover:bg-white/60 border border-transparent hover:border-white/70 transition group">
            <div className="col-span-3">
              <div className="font-bold text-slate-900">{d.d}</div>
              <div className="text-xs text-slate-500">{d.full}</div>
            </div>

            <div className="col-span-4 flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-100 to-emerald-100 grid place-items-center group-hover:scale-110 transition-transform">
                <d.icon className="w-4 h-4 text-brand-700" />
              </div>
              <span className="text-sm text-slate-700 font-medium truncate">{d.cond}</span>
            </div>

            <div className="col-span-2 text-xs text-sky-600 font-bold text-center">💧 {d.rain}%</div>

            <div className="col-span-3 text-right">
              <span className="text-sm font-black text-slate-900">{d.hi}°</span>
              <span className="text-xs text-slate-400 ml-1">/ {d.lo}°</span>
            </div>

            {/* Temperature range bar */}
            <div className="col-span-12 h-1.5 rounded-full bg-slate-200/60 overflow-hidden">
              <div className="h-full rounded-full bg-gradient-to-r from-sky-400 via-brand-500 to-orange-400"
                   style={{ marginLeft: `${((d.lo - 15) / 20) * 100}%`, width: `${((d.hi - d.lo) / 20) * 100}%` }} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
