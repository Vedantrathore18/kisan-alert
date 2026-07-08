import React from 'react'
import { History, CheckCircle2, Clock, XCircle } from 'lucide-react'

const rows = [
  { date: 'Jul 04, 2026', crop: 'Wheat',   type: 'Irrigation',  detail: 'Irrigate before 10 AM',          status: 'done' },
  { date: 'Jul 03, 2026', crop: 'Tomato',  type: 'Fertilizer',  detail: 'Apply nitrogen booster',          status: 'done' },
  { date: 'Jul 02, 2026', crop: 'Onion',   type: 'Pest Control',detail: 'Neem spray for thrips',           status: 'pending' },
  { date: 'Jul 01, 2026', crop: 'Wheat',   type: 'Weather',     detail: 'Delay harvest — rain expected',   status: 'done' },
  { date: 'Jun 30, 2026', crop: 'Cotton',  type: 'Disease',     detail: 'Leaf curl virus prevention',      status: 'missed' },
  { date: 'Jun 29, 2026', crop: 'Tomato',  type: 'Market',      detail: 'Sell at Nashik APMC — high price',status: 'done' },
]

const statusMap = {
  done:    { label: 'Applied',  cls: 'bg-emerald-100 text-emerald-700', icon: CheckCircle2 },
  pending: { label: 'Pending',  cls: 'bg-amber-100 text-amber-700',      icon: Clock },
  missed:  { label: 'Missed',   cls: 'bg-red-100 text-red-700',          icon: XCircle },
}

export default function RecommendationHistory() {
  return (
    <div className="glass rounded-3xl p-6">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 grid place-items-center shadow-md">
            <History className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-slate-900">Recommendation History</h3>
            <p className="text-xs text-slate-500">Track what the AI suggested and how it performed.</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs">
          {['All','Applied','Pending','Missed'].map((t, i) => (
            <button key={t} className={`px-3 py-1.5 rounded-full font-semibold transition
              ${i === 0 ? 'bg-brand-600 text-white shadow' : 'bg-white/70 text-slate-600 hover:bg-white'}`}>
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-5 overflow-x-auto">
        <table className="w-full min-w-[640px] text-sm">
          <thead>
            <tr className="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
              <th className="py-3 px-3">Date</th>
              <th className="py-3 px-3">Crop</th>
              <th className="py-3 px-3">Type</th>
              <th className="py-3 px-3">Recommendation</th>
              <th className="py-3 px-3 text-right">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/60">
            {rows.map((r, i) => {
              const s = statusMap[r.status]
              return (
                <tr key={i} className="hover:bg-white/50 transition">
                  <td className="py-3 px-3 text-slate-600 whitespace-nowrap">{r.date}</td>
                  <td className="py-3 px-3">
                    <span className="inline-flex px-2.5 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-bold">{r.crop}</span>
                  </td>
                  <td className="py-3 px-3 text-slate-700 font-medium">{r.type}</td>
                  <td className="py-3 px-3 text-slate-600">{r.detail}</td>
                  <td className="py-3 px-3 text-right">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold ${s.cls}`}>
                      <s.icon className="w-3.5 h-3.5" />
                      {s.label}
                    </span>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
