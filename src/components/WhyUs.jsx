import React from 'react'
import { ShieldCheck, Globe2, Zap, HeartHandshake } from 'lucide-react'

const benefits = [
  { icon: Globe2, title: 'Built for Bharat', desc: 'Works in regional languages, on low-end phones and even via SMS.' },
  { icon: Zap, title: 'Real-time Intelligence', desc: 'Live weather, market and pest data delivered when it matters.' },
  { icon: ShieldCheck, title: 'Trusted & Secure', desc: 'Your farm data stays private with enterprise-grade security.' },
  { icon: HeartHandshake, title: 'Farmer-First Design', desc: 'Co-designed with real farmers to be genuinely simple to use.' },
]

export default function WhyUs() {
  return (
    <section className="relative py-24 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center reveal">
          <span className="text-brand-600 font-semibold uppercase tracking-widest text-xs">Why Kisan Alert</span>
          <h2 className="section-title mt-3">Built to empower every farmer</h2>
          <p className="section-sub">Not just another app — a partner that speaks your language and works alongside you.</p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <div key={i} className="reveal glass rounded-3xl p-6 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500" style={{ transitionDelay: `${i*80}ms` }}>
              <div className="w-12 h-12 rounded-2xl bg-brand-50 grid place-items-center">
                <b.icon className="w-6 h-6 text-brand-600" />
              </div>
              <h3 className="mt-4 font-bold text-slate-900">{b.title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
