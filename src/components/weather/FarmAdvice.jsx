import React from 'react'
import { Droplets, Sprout, ShieldCheck, Tractor, Sparkles } from 'lucide-react'

const advice = [
  {
    icon: Droplets,
    tone: 'from-sky-400 to-blue-600',
    title: 'Irrigation Advice',
    body: 'Skip irrigation on Wed & Thu — rainfall of 60–85% will keep soil moist. Resume on Fri morning before 9 AM.',
    tag: 'Water',
  },
  {
    icon: Sprout,
    tone: 'from-brand-500 to-emerald-700',
    title: 'Sowing Window',
    body: 'Best window for kharif sowing: Thu evening to Sat morning after showers, when soil moisture is optimal.',
    tag: 'Sowing',
  },
  {
    icon: ShieldCheck,
    tone: 'from-amber-500 to-orange-600',
    title: 'Pesticide Plan',
    body: 'Do NOT spray on Wed or Thu — rain will wash away chemicals. Sat morning is ideal for foliar sprays.',
    tag: 'Protection',
  },
  {
    icon: Tractor,
    tone: 'from-fuchsia-500 to-purple-700',
    title: 'Field Operations',
    body: 'Plough and prepare beds on Mon–Tue. Avoid heavy machinery on Wed–Thu due to soft, wet ground.',
    tag: 'Operations',
  },
]

export default function FarmAdvice() {
  return (
    <div className="relative glass rounded-3xl p-6 md:p-8 overflow-hidden">
      <div className="absolute -top-16 -left-10 w-64 h-64 rounded-full bg-brand-200/50 blur-3xl" />
      <div className="absolute -bottom-16 -right-10 w-64 h-64 rounded-full bg-emerald-200/50 blur-3xl" />

      <div className="relative">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-brand-500 to-emerald-600 grid place-items-center shadow-md">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-brand-600">AI Advice</div>
            <h3 className="font-bold text-slate-900 text-lg">This Week's Farm Plan</h3>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {advice.map((a, i) => (
            <div key={i}
                 className="group relative bg-white/70 border border-white/70 rounded-2xl p-5 hover:-translate-y-2 hover:shadow-xl transition-all">
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${a.tone} grid place-items-center shadow-lg text-white group-hover:rotate-6 transition-transform`}>
                <a.icon className="w-6 h-6" />
              </div>
              <div className="mt-4 flex items-center gap-2">
                <h4 className="font-bold text-slate-900">{a.title}</h4>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-brand-50 text-brand-700 font-bold uppercase tracking-widest">{a.tag}</span>
              </div>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{a.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
