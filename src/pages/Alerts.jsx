import React from 'react'
import Sidebar from '../components/dashboard/Sidebar'
import Topbar from '../components/dashboard/Topbar'
import { MessageSquare, Bell, CheckCircle2, Cloud, Bug, TrendingUp, Sprout, Send } from 'lucide-react'
import useReveal from '../hooks/useReveal'

const alerts = [
  { icon: Cloud,     tone: 'from-sky-400 to-blue-600',    title: 'Heavy Rain Alert',      body: 'Rain expected 3-7 PM tomorrow. Delay pesticide spray.', time: '2h ago', channel: 'SMS + Voice' },
  { icon: Bug,       tone: 'from-red-400 to-red-600',     title: 'Pest Warning',          body: 'Aphids reported in nearby tomato fields. Inspect crops.', time: '5h ago', channel: 'SMS' },
  { icon: TrendingUp,tone: 'from-emerald-400 to-brand-600',title: 'Market Price Alert',    body: 'Wheat prices up ₹120/quintal at Nashik APMC today.', time: '1d ago', channel: 'SMS' },
  { icon: Sprout,    tone: 'from-lime-400 to-brand-600',  title: 'Irrigation Reminder',   body: 'Time to irrigate wheat field. Soil moisture at 32%.', time: '1d ago', channel: 'Voice' },
  { icon: Cloud,     tone: 'from-amber-400 to-orange-500',title: 'Heatwave Watch',        body: 'Temperature crossing 34°C weekend. Water crops early.', time: '2d ago', channel: 'SMS + App' },
]

export default function Alerts() {
  useReveal()
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-brand-50 via-white to-emerald-50 overflow-x-hidden">
      <div className="pointer-events-none fixed -top-40 -left-40 w-[28rem] h-[28rem] rounded-full bg-brand-300/40 blur-3xl animate-blob" />
      <div className="pointer-events-none fixed top-1/2 -right-40 w-[28rem] h-[28rem] rounded-full bg-emerald-200/50 blur-3xl animate-blob" />

      <div className="relative flex">
        <Sidebar />
        <div className="flex-1 min-w-0 lg:ml-72">
          <Topbar />
          <main className="p-4 md:p-8 space-y-6">
            <div className="reveal">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-brand-700 text-xs font-semibold">📩 SMS + Voice Alerts</span>
              <h1 className="mt-3 text-2xl md:text-4xl font-black text-slate-900">Your <span className="bg-gradient-to-r from-brand-600 to-emerald-500 bg-clip-text text-transparent">Alerts</span></h1>
              <p className="text-slate-600 mt-2">All important updates delivered directly to your phone.</p>
            </div>

            <div className="reveal grid gap-4 sm:grid-cols-3">
              <Stat n="24" label="Alerts this month" tone="from-brand-500 to-brand-700" icon={MessageSquare}/>
              <Stat n="18" label="Delivered via SMS" tone="from-sky-500 to-blue-700" icon={Send}/>
              <Stat n="12" label="Actions taken"      tone="from-emerald-500 to-brand-700" icon={CheckCircle2}/>
            </div>

            <div className="reveal glass rounded-3xl p-6">
              <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 grid place-items-center shadow-md">
                    <Bell className="w-5 h-5 text-white"/>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Recent Alerts</h3>
                    <p className="text-xs text-slate-500">Sent to +91 96698 90693</p>
                  </div>
                </div>
                <button className="px-4 py-2 rounded-xl bg-brand-600 text-white text-sm font-bold hover:bg-brand-700 transition">
                  Mark all read
                </button>
              </div>
              <ul className="space-y-3">
                {alerts.map((a, i) => (
                  <li key={i} className="reveal group rounded-2xl p-4 bg-white/60 border border-white/70 hover:-translate-y-0.5 hover:shadow-lg transition-all" style={{transitionDelay: `${i*60}ms`}}>
                    <div className="flex items-start gap-3">
                      <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${a.tone} grid place-items-center shadow shrink-0`}>
                        <a.icon className="w-5 h-5 text-white"/>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2 flex-wrap">
                          <h4 className="font-bold text-slate-900">{a.title}</h4>
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-brand-50 text-brand-700 font-bold">{a.channel}</span>
                            <span className="text-xs text-slate-500">{a.time}</span>
                          </div>
                        </div>
                        <p className="mt-1 text-sm text-slate-600">{a.body}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

function Stat({ n, label, tone, icon: Icon }) {
  return (
    <div className="glass rounded-2xl p-5 hover:-translate-y-1 transition">
      <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${tone} grid place-items-center shadow-md`}>
        <Icon className="w-5 h-5 text-white"/>
      </div>
      <div className="mt-3 text-3xl font-black text-slate-900">{n}</div>
      <div className="text-sm text-slate-600">{label}</div>
    </div>
  )
}
