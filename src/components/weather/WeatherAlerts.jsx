import React from 'react'
import { AlertTriangle, Flame, Droplets, CloudLightning, Wind } from 'lucide-react'

const alerts = [
  { icon: CloudLightning, tone: 'from-sky-500 to-blue-700',  title: 'Heavy Rain Alert', when: 'Wed 3–7 PM', desc: '18–22mm expected. Delay spraying and cover seedlings.' },
  { icon: Flame,          tone: 'from-orange-500 to-red-600',title: 'Heatwave Watch',   when: 'Sat–Sun',    desc: 'Temperature may cross 34°C. Irrigate early morning.' },
  { icon: Droplets,       tone: 'from-amber-500 to-orange-600', title: 'Dry Spell Ahead', when: 'Fri onwards', desc: 'Low rainfall predicted. Plan for supplemental irrigation.' },
  { icon: Wind,           tone: 'from-emerald-500 to-brand-700', title: 'High Wind',    when: 'Wed',        desc: '22 km/h gusts. Secure lightweight covers and stakes.' },
]

export default function WeatherAlerts() {
  return (
    <div className="glass rounded-3xl p-6 h-full">
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 grid place-items-center shadow-md">
          <AlertTriangle className="w-5 h-5 text-white" />
        </div>
        <div>
          <div className="text-xs font-bold uppercase tracking-widest text-brand-600">Weather Alerts</div>
          <h3 className="font-bold text-slate-900">Active Warnings</h3>
        </div>
      </div>

      <ul className="mt-5 space-y-3">
        {alerts.map((a, i) => (
          <li key={i}
              className="relative overflow-hidden rounded-2xl p-4 bg-white/60 border border-white/70 hover:-translate-y-0.5 hover:shadow-lg transition-all">
            <div className={`absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b ${a.tone}`} />
            <div className="flex items-start gap-3 pl-2">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${a.tone} grid place-items-center shadow shrink-0`}>
                <a.icon className="w-5 h-5 text-white" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <h4 className="font-bold text-slate-900 text-sm truncate">{a.title}</h4>
                  <span className="text-[11px] px-2 py-0.5 rounded-full bg-brand-50 text-brand-700 font-bold whitespace-nowrap">{a.when}</span>
                </div>
                <p className="mt-1 text-xs text-slate-600 leading-relaxed">{a.desc}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
