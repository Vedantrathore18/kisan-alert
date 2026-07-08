import React from 'react'

export default function StatMini({ icon: Icon, label, value, tone, trend }) {
  return (
    <div className="group glass rounded-2xl p-4 hover:-translate-y-1 hover:shadow-xl transition-all">
      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${tone} grid place-items-center shadow-md text-white group-hover:scale-110 transition-transform`}>
        <Icon className="w-5 h-5" />
      </div>
      <div className="mt-3 text-[10px] font-bold uppercase tracking-widest text-slate-500">{label}</div>
      <div className="flex items-baseline justify-between">
        <div className="text-lg font-black text-slate-900">{value}</div>
        <div className="text-[10px] font-semibold text-brand-700">{trend}</div>
      </div>
    </div>
  )
}
