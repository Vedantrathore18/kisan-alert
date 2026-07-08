import React from 'react'
import { Sprout, PhoneCall, Bug, CloudSun, MessageSquare, LayoutDashboard } from 'lucide-react'

const items = [
  { icon: Sprout, title: 'Smart Crop Recommendation', desc: 'ML models suggest the right crop based on soil, season and local climate data.' },
  { icon: PhoneCall, title: 'AI Calling Agent', desc: 'A voice AI that calls farmers in their language to guide decisions and answer queries.' },
  { icon: Bug, title: 'Disease Detection', desc: 'Snap a leaf, detect diseases instantly and get treatment plans powered by vision AI.' },
  { icon: CloudSun, title: 'Weather Advisory', desc: 'Hyperlocal weather forecasts with actionable, farm-level recommendations.' },
  { icon: MessageSquare, title: 'SMS Alerts', desc: 'Timely SMS alerts on pests, market prices and schemes — works on any phone.' },
  { icon: LayoutDashboard, title: 'Farmer Dashboard', desc: 'A simple dashboard to track crops, alerts, calls and yield insights over time.' },
]

export default function Features() {
  return (
    <section id="features" className="relative py-24 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center reveal">
          <span className="text-brand-600 font-semibold uppercase tracking-widest text-xs">Features</span>
          <h2 className="section-title mt-3">Everything a farmer needs, in one app</h2>
          <p className="section-sub">From sowing to selling — Kisan Alert brings AI into every step of the farming journey.</p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((f, i) => (
            <FeatureCard key={i} {...f} delay={i * 60} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ icon: Icon, title, desc, delay = 0 }) {
  return (
    <div
      className="reveal group relative glass rounded-3xl p-7 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand-500/0 to-brand-500/0 group-hover:from-brand-500/10 group-hover:to-emerald-400/10 transition" />
      <div className="relative">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 grid place-items-center shadow-lg shadow-brand-600/30 group-hover:rotate-6 transition-transform">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="mt-5 text-lg font-bold text-slate-900">{title}</h3>
        <p className="mt-2 text-slate-600 text-sm leading-relaxed">{desc}</p>
        <div className="mt-5 inline-flex items-center gap-1 text-sm text-brand-700 font-semibold opacity-0 group-hover:opacity-100 transition">
          Learn more →
        </div>
      </div>
    </div>
  )
}
