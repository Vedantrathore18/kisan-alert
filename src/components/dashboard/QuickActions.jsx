import React from 'react'
import { ScanLine, PhoneCall, MessageSquare, Sprout, Zap } from 'lucide-react'

const actions = [
  { icon: ScanLine,     label: 'Scan Leaf',    color: 'from-brand-500 to-emerald-600' },
  { icon: PhoneCall,    label: 'AI Call',      color: 'from-amber-400 to-orange-500' },
  { icon: MessageSquare,label: 'Send SMS',     color: 'from-sky-400 to-blue-600' },
  { icon: Sprout,       label: 'Add Crop',     color: 'from-lime-400 to-brand-600' },
]

export default function QuickActions() {
  return (
    <div className="glass rounded-3xl p-6 h-full">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 grid place-items-center shadow-md">
          <Zap className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="font-bold text-slate-900">Quick Actions</h3>
          <p className="text-xs text-slate-500">One tap. Done.</p>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3">
        {actions.map((a) => (
          <button
            key={a.label}
            className="group relative overflow-hidden rounded-2xl p-4 bg-white/70 border border-white/70 hover:-translate-y-1 hover:shadow-xl transition-all"
          >
            <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${a.color} grid place-items-center shadow-lg mb-3 group-hover:scale-110 transition-transform`}>
              <a.icon className="w-5 h-5 text-white" />
            </div>
            <div className="text-sm font-bold text-slate-900 text-left">{a.label}</div>
            <div className="text-[11px] text-slate-500 text-left">Start now</div>
          </button>
        ))}
      </div>

      <div className="mt-4 rounded-2xl p-4 bg-gradient-to-br from-brand-50 to-emerald-50 border border-brand-100">
        <div className="text-xs font-semibold text-brand-700 uppercase tracking-widest">Today's tip</div>
        <p className="mt-1 text-sm text-slate-700">Check soil moisture at sunrise — best window to plan irrigation.</p>
      </div>
    </div>
  )
}
