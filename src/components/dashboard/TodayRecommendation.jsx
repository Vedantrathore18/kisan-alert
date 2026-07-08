import React from 'react'
import { Sparkles, Droplets, Sprout, Sun, ArrowRight } from 'lucide-react'

const tips = [
  { icon: Droplets, text: 'Irrigate wheat field before 10 AM — soil moisture at 32%.' },
  { icon: Sprout, text: 'Apply nitrogen booster to tomato beds this evening.' },
  { icon: Sun, text: 'Delay pesticide spray — light rain expected tomorrow.' },
]

export default function TodayRecommendation() {
  return (
    <div className="relative rounded-3xl p-6 h-full overflow-hidden bg-gradient-to-br from-brand-600 via-brand-700 to-emerald-800 text-white shadow-xl">
      <div className="absolute inset-0 opacity-30 mix-blend-overlay"
           style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.4), transparent 40%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.3), transparent 40%)' }} />
      <div className="relative">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-white/80">AI Recommendation</div>
            <div className="text-sm text-white/70 mt-0.5">Powered by Kisan AI · Today</div>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur grid place-items-center border border-white/30">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
        </div>

        <ul className="mt-6 space-y-3">
          {tips.map((t, i) => (
            <li key={i} className="flex items-start gap-3 bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-3">
              <div className="w-9 h-9 rounded-xl bg-white/20 grid place-items-center shrink-0">
                <t.icon className="w-4 h-4" />
              </div>
              <p className="text-sm leading-relaxed">{t.text}</p>
            </li>
          ))}
        </ul>

        <button className="mt-5 w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white text-brand-700 font-semibold text-sm hover:bg-brand-50 transition">
          View full plan <ArrowRight className="w-4 h-4"/>
        </button>
      </div>
    </div>
  )
}
