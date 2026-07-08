import React from 'react'
import { CloudSun, Droplets, Wind, Sun, Cloud, CloudRain } from 'lucide-react'

const forecast = [
  { day: 'Mon', icon: Sun, t: 30 },
  { day: 'Tue', icon: CloudSun, t: 28 },
  { day: 'Wed', icon: CloudRain, t: 25 },
  { day: 'Thu', icon: Cloud, t: 27 },
  { day: 'Fri', icon: Sun, t: 31 },
]

export default function WeatherCard() {
  return (
    <div className="relative glass rounded-3xl p-6 overflow-hidden h-full">
      <div className="absolute -top-16 -right-10 w-56 h-56 rounded-full bg-gradient-to-br from-yellow-200 to-brand-200 blur-3xl opacity-70" />
      <div className="relative">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-brand-600">Weather</div>
            <div className="text-sm text-slate-500 mt-0.5">Nashik, Maharashtra</div>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-400 grid place-items-center shadow-lg">
            <CloudSun className="w-6 h-6 text-white" />
          </div>
        </div>

        <div className="mt-6 flex items-end gap-2">
          <div className="text-5xl font-black text-slate-900 leading-none">28°</div>
          <div className="text-sm text-slate-500 pb-1.5">Partly Sunny</div>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-2">
          <MiniStat icon={<Droplets className="w-4 h-4" />} label="Humidity" value="62%" />
          <MiniStat icon={<Wind className="w-4 h-4" />} label="Wind" value="12 km/h" />
          <MiniStat icon={<CloudRain className="w-4 h-4" />} label="Rain" value="20%" />
        </div>

        <div className="mt-5 pt-4 border-t border-white/60">
          <div className="flex justify-between">
            {forecast.map((d) => (
              <div key={d.day} className="flex flex-col items-center gap-1">
                <span className="text-[10px] font-semibold text-slate-500">{d.day}</span>
                <d.icon className="w-5 h-5 text-brand-600" />
                <span className="text-xs font-bold text-slate-800">{d.t}°</span>
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
    <div className="rounded-xl bg-white/60 border border-white/70 p-2.5">
      <div className="flex items-center gap-1.5 text-brand-600">{icon}<span className="text-[10px] font-semibold uppercase text-slate-500">{label}</span></div>
      <div className="mt-1 text-sm font-bold text-slate-900">{value}</div>
    </div>
  )
}
