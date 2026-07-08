import React from 'react'
import { HeartPulse, TrendingUp } from 'lucide-react'

export default function HealthScore() {
  const score = 86
  const radius = 70
  const circ = 2 * Math.PI * radius
  const offset = circ - (score / 100) * circ

  return (
    <div className="relative glass rounded-3xl p-6 h-full overflow-hidden">
      <div className="absolute -bottom-16 -left-10 w-56 h-56 rounded-full bg-gradient-to-br from-brand-200 to-emerald-200 blur-3xl opacity-70" />
      <div className="relative">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-brand-600">Farm Health</div>
            <div className="text-sm text-slate-500 mt-0.5">Overall crop status</div>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-500 to-emerald-600 grid place-items-center shadow-lg">
            <HeartPulse className="w-6 h-6 text-white" />
          </div>
        </div>

        <div className="mt-4 flex items-center justify-center">
          <div className="relative w-44 h-44">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 160 160">
              <circle cx="80" cy="80" r={radius} fill="none" stroke="rgba(46,160,92,0.15)" strokeWidth="14"/>
              <circle
                cx="80" cy="80" r={radius}
                fill="none"
                stroke="url(#hg)"
                strokeWidth="14"
                strokeLinecap="round"
                strokeDasharray={circ}
                strokeDashoffset={offset}
                style={{ transition: 'stroke-dashoffset 1.2s ease' }}
              />
              <defs>
                <linearGradient id="hg" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0%" stopColor="#4fb877"/>
                  <stop offset="100%" stopColor="#1a663b"/>
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 grid place-items-center text-center">
              <div>
                <div className="text-4xl font-black text-slate-900">{score}</div>
                <div className="text-xs text-brand-700 font-semibold">Excellent</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-center gap-2 text-sm">
          <TrendingUp className="w-4 h-4 text-emerald-600"/>
          <span className="text-slate-600">Up <span className="font-bold text-emerald-600">4 pts</span> from last week</span>
        </div>
      </div>
    </div>
  )
}
