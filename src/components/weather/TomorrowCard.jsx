import React from 'react'
import { CloudRain, ArrowRight, Umbrella } from 'lucide-react'

export default function TomorrowCard() {
  return (
    <div className="glass rounded-3xl p-6 h-full flex flex-col relative overflow-hidden">
      <div className="absolute -top-16 -right-10 w-56 h-56 rounded-full bg-gradient-to-br from-sky-200 to-brand-200 blur-3xl opacity-70" />
      <div className="relative flex flex-col h-full">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-brand-600">Tomorrow</div>
            <div className="text-sm text-slate-500 mt-0.5">Mon · Jul 06</div>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-400 to-blue-600 grid place-items-center shadow-lg">
            <CloudRain className="w-6 h-6 text-white" />
          </div>
        </div>

        <div className="mt-4 flex items-end gap-2">
          <div className="text-5xl font-black text-slate-900 leading-none">25°</div>
          <div className="text-sm text-slate-500 pb-1.5">/ 19°</div>
        </div>
        <div className="text-sm text-slate-600 mt-1">Light Showers · Cool morning</div>

        <div className="mt-5 rounded-2xl p-4 bg-gradient-to-br from-sky-50 to-brand-50 border border-sky-100 flex items-start gap-3">
          <Umbrella className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
          <div>
            <div className="text-xs font-bold text-sky-700 uppercase tracking-widest">Rain Alert</div>
            <p className="text-sm text-slate-700 mt-0.5">Expect <b>18–22mm</b> rain between 3–7 PM. Cover seedlings and delay pesticide spray.</p>
          </div>
        </div>

        <div className="mt-auto pt-5 grid grid-cols-3 gap-2 text-center">
          <MiniPill label="Humidity" value="78%" />
          <MiniPill label="Wind" value="18 km/h" />
          <MiniPill label="Rain" value="85%" />
        </div>

        <button className="mt-4 inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-brand-600 text-white text-sm font-semibold hover:bg-brand-700 transition">
          View hourly plan <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}

function MiniPill({ label, value }) {
  return (
    <div className="rounded-xl bg-white/60 border border-white/70 py-2">
      <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{label}</div>
      <div className="text-sm font-bold text-slate-900">{value}</div>
    </div>
  )
}
