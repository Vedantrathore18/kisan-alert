import React from 'react'
import {
  Trophy, Lightbulb, TrendingUp, IndianRupee, Droplets, FlaskConical,
  ShieldCheck, Download, Share2, Sprout
} from 'lucide-react'

export default function RecommendationCard({ data }) {
  const {
    bestCrop, emoji, reason, yield: yieldVal, profit, water, fertilizer, confidence, alternates, form
  } = data

  return (
    <div className="space-y-6 animate-fade-up">
      {/* Hero result card */}
      <div className="relative rounded-3xl p-6 md:p-8 overflow-hidden text-white shadow-2xl bg-gradient-to-br from-brand-600 via-brand-700 to-emerald-800">
        <div className="absolute inset-0 opacity-30 mix-blend-overlay"
             style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.5), transparent 45%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.35), transparent 45%)' }} />
        <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-white/10 blur-2xl" />
        <div className="relative">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur border border-white/30 text-xs font-semibold">
                <Trophy className="w-3.5 h-3.5" /> Best Match for {form?.season} · {form?.district}
              </div>
              <div className="mt-4 flex items-end gap-3">
                <span className="text-6xl md:text-7xl leading-none drop-shadow-lg">{emoji}</span>
                <div>
                  <div className="text-white/80 text-sm">Recommended Crop</div>
                  <h2 className="text-3xl md:text-5xl font-black leading-tight">{bestCrop}</h2>
                </div>
              </div>
            </div>

            {/* Confidence ring */}
            <ConfidenceRing value={confidence} />
          </div>

          <div className="mt-6 flex gap-3">
            <button className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-brand-700 font-semibold text-sm hover:bg-brand-50 transition">
              <Download className="w-4 h-4" /> Download Plan
            </button>
            <button className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/20 backdrop-blur border border-white/30 text-white font-semibold text-sm hover:bg-white/30 transition">
              <Share2 className="w-4 h-4" /> Share via SMS
            </button>
          </div>
        </div>
      </div>

      {/* Why this crop */}
      <div className="glass rounded-3xl p-6">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 grid place-items-center shadow-md">
            <Lightbulb className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-brand-600 font-bold">Why {bestCrop}?</div>
            <h3 className="font-bold text-slate-900">AI Reasoning</h3>
          </div>
        </div>
        <p className="mt-4 text-slate-700 leading-relaxed">{reason}</p>
      </div>

      {/* Stat grid */}
      <div className="grid gap-4 sm:grid-cols-2">
        <StatCard
          icon={<TrendingUp className="w-5 h-5" />}
          label="Expected Yield"
          value={yieldVal}
          tone="from-emerald-400 to-brand-600"
        />
        <StatCard
          icon={<IndianRupee className="w-5 h-5" />}
          label="Expected Profit"
          value={profit}
          tone="from-yellow-400 to-orange-500"
        />
        <StatCard
          icon={<Droplets className="w-5 h-5" />}
          label="Water Requirement"
          value={water}
          tone="from-sky-400 to-blue-600"
          multiline
        />
        <StatCard
          icon={<FlaskConical className="w-5 h-5" />}
          label="Fertilizer Advice"
          value={fertilizer}
          tone="from-fuchsia-400 to-purple-600"
          multiline
        />
      </div>

      {/* Alternates */}
      <div className="glass rounded-3xl p-6">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 grid place-items-center shadow-md">
            <Sprout className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-brand-600 font-bold">Also Consider</div>
            <h3 className="font-bold text-slate-900">Alternate Crops</h3>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {alternates.map((c) => (
            <span key={c} className="px-4 py-2 rounded-full bg-white/70 border border-white/70 text-sm font-semibold text-slate-700 hover:bg-brand-50 hover:text-brand-700 transition cursor-pointer">
              {c}
            </span>
          ))}
        </div>
      </div>

      {/* Trust bar */}
      <div className="flex items-center gap-2 text-xs text-slate-500 justify-center">
        <ShieldCheck className="w-4 h-4 text-brand-600" />
        Verified by Kisan Alert AI · Data from IMD, ICAR & Gemini
      </div>
    </div>
  )
}

function StatCard({ icon, label, value, tone, multiline }) {
  return (
    <div className="glass rounded-2xl p-5 group hover:-translate-y-1 hover:shadow-xl transition-all">
      <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${tone} grid place-items-center shadow-md text-white group-hover:scale-110 transition-transform`}>
        {icon}
      </div>
      <div className="mt-3 text-xs font-bold uppercase tracking-widest text-slate-500">{label}</div>
      <div className={`mt-1 ${multiline ? 'text-sm text-slate-700 leading-relaxed' : 'text-xl font-black text-slate-900'}`}>
        {value}
      </div>
    </div>
  )
}

function ConfidenceRing({ value }) {
  const r = 32
  const c = 2 * Math.PI * r
  const off = c - (value / 100) * c
  return (
    <div className="relative w-24 h-24 shrink-0">
      <svg viewBox="0 0 80 80" className="w-full h-full -rotate-90">
        <circle cx="40" cy="40" r={r} fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="8"/>
        <circle
          cx="40" cy="40" r={r} fill="none"
          stroke="#ffffff" strokeWidth="8" strokeLinecap="round"
          strokeDasharray={c} strokeDashoffset={off}
          style={{ transition: 'stroke-dashoffset 1.2s ease' }}
        />
      </svg>
      <div className="absolute inset-0 grid place-items-center text-center">
        <div>
          <div className="text-xl font-black leading-none">{value}%</div>
          <div className="text-[10px] uppercase tracking-widest text-white/80">Confidence</div>
        </div>
      </div>
    </div>
  )
}
