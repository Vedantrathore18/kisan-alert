import React from 'react'
import { Sparkles, Wand2 } from 'lucide-react'

export default function EmptyState() {
  return (
    <div className="relative glass rounded-3xl p-8 h-full min-h-[520px] flex flex-col items-center justify-center text-center overflow-hidden">
      <div className="absolute -top-20 -right-16 w-64 h-64 rounded-full bg-brand-200/60 blur-3xl animate-blob" />
      <div className="absolute -bottom-20 -left-16 w-64 h-64 rounded-full bg-emerald-200/60 blur-3xl animate-blob" />

      <div className="relative">
        <div className="w-24 h-24 mx-auto rounded-3xl bg-gradient-to-br from-brand-500 to-emerald-600 grid place-items-center shadow-2xl shadow-brand-600/40 animate-float">
          <Wand2 className="w-12 h-12 text-white" />
        </div>

        <h3 className="mt-6 text-2xl font-black text-slate-900">
          Your AI recommendation will appear here
        </h3>
        <p className="mt-3 text-slate-600 max-w-md mx-auto">
          Fill in your farm details on the left, then tap <span className="font-bold text-brand-700">Generate Recommendation</span> to get a personalized crop plan.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {['Weather', 'Soil', 'Water', 'Market Prices', 'Yield', 'Gemini AI'].map((t) => (
            <span key={t} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass text-brand-700 text-xs font-semibold">
              <Sparkles className="w-3 h-3" /> {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
