import React from 'react'
import { Bell, Bug, CloudRain, TrendingUp, ShieldAlert } from 'lucide-react'

const alerts = [
  { icon: Bug, tone: 'red',    title: 'Pest activity detected', desc: 'Aphids reported in nearby tomato fields.', time: '2h ago' },
  { icon: CloudRain, tone: 'blue', title: 'Heavy rain incoming', desc: '35mm rain expected tomorrow. Cover seedlings.', time: '5h ago' },
  { icon: TrendingUp, tone: 'green', title: 'Wheat prices up',   desc: 'Market price up ₹120/quintal at Nashik APMC.', time: '1d ago' },
  { icon: ShieldAlert, tone: 'yellow', title: 'Scheme deadline', desc: 'PM-KISAN 18th installment closes in 3 days.', time: '2d ago' },
]

const toneMap = {
  red:    'from-red-400 to-red-600',
  blue:   'from-sky-400 to-blue-600',
  green:  'from-emerald-400 to-brand-600',
  yellow: 'from-amber-400 to-orange-500',
}

export default function RecentAlerts() {
  return (
    <div className="glass rounded-3xl p-6 h-full">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 grid place-items-center shadow-md">
            <Bell className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-slate-900">Recent Alerts</h3>
            <p className="text-xs text-slate-500">Live from your region</p>
          </div>
        </div>
        <a href="#" className="text-sm font-semibold text-brand-700 hover:underline">View all</a>
      </div>

      <ul className="mt-5 divide-y divide-white/60">
        {alerts.map((a, i) => (
          <li key={i} className="flex items-start gap-3 py-3 group hover:bg-white/40 rounded-xl px-2 transition">
            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${toneMap[a.tone]} grid place-items-center shadow`}>
              <a.icon className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <p className="text-sm font-bold text-slate-900 truncate">{a.title}</p>
                <span className="text-[11px] text-slate-500 whitespace-nowrap">{a.time}</span>
              </div>
              <p className="text-xs text-slate-600 mt-0.5">{a.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
