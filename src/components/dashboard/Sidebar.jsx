import React, { useState } from 'react'
import {
  Leaf, LayoutDashboard, Sprout, CloudSun, Bug, PhoneCall,
  MessageSquare, BarChart3, Settings, LogOut, Menu, X
} from 'lucide-react'

const nav = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '#/dashboard' },
  { icon: Sprout, label: 'Crop AI', href: '#/crop' },
  { icon: CloudSun, label: 'Weather', href: '#/weather' },
  { icon: Bug, label: 'Disease Scan', href: '#' },
  { icon: PhoneCall, label: 'AI Voice Calls', href: '#/call' },
  { icon: MessageSquare, label: 'SMS Alerts', href: '#/alerts' },
  { icon: BarChart3, label: 'Insights', href: '#' },
]

export default function Sidebar() {
  const [open, setOpen] = useState(false)
  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-40 w-11 h-11 rounded-xl glass grid place-items-center"
        aria-label="Open menu"
      >
        <Menu className="w-5 h-5 text-brand-700" />
      </button>

      {/* Overlay */}
      {open && (
        <div className="lg:hidden fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40" onClick={() => setOpen(false)} />
      )}

      <aside className={`fixed top-0 left-0 h-screen w-72 z-50 p-4 transition-transform duration-300
        ${open ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}
      >
        <div className="glass rounded-3xl h-full flex flex-col p-5">
          <div className="flex items-center justify-between">
            <a href="#" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 grid place-items-center shadow-lg">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <span className="font-extrabold text-lg text-slate-900">
                Kisan<span className="text-brand-600">Alert</span>
              </span>
            </a>
            <button onClick={() => setOpen(false)} className="lg:hidden text-slate-500">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Farm chip */}
          <div className="mt-6 glass rounded-2xl p-3 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-brand-600 grid place-items-center text-white font-bold">R</div>
            <div className="min-w-0">
              <div className="text-sm font-bold text-slate-900 truncate">Ramesh Farm</div>
              <div className="text-xs text-slate-500 truncate">Nashik, Maharashtra</div>
            </div>
          </div>

          {/* Nav */}
          <nav className="mt-6 flex-1 space-y-1">
            {nav.map((n) => {
              const active = typeof window !== 'undefined' && window.location.hash.startsWith(n.href) && n.href !== '#'
              return (
                <a
                  key={n.label}
                  href={n.href}
                  className={`group flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium text-sm transition-all
                    ${active
                      ? 'bg-gradient-to-r from-brand-500 to-brand-700 text-white shadow-lg shadow-brand-600/30'
                      : 'text-slate-600 hover:bg-white/70 hover:text-brand-700'}`}
                >
                  <n.icon className={`w-5 h-5 ${active ? '' : 'group-hover:scale-110 transition'}`} />
                  <span>{n.label}</span>
                </a>
              )
            })}
          </nav>

          {/* Upgrade card */}
          <div className="mt-6 rounded-2xl p-4 bg-gradient-to-br from-brand-600 to-emerald-700 text-white shadow-xl">
            <div className="text-sm font-bold">Upgrade to Pro</div>
            <p className="text-xs text-white/80 mt-1">Unlock unlimited AI calls and premium insights.</p>
            <button className="mt-3 w-full py-2 rounded-lg bg-white/20 hover:bg-white/30 text-sm font-semibold backdrop-blur transition">Upgrade</button>
          </div>

          <div className="mt-4 pt-4 border-t border-white/60 flex items-center justify-between text-slate-500">
            <button className="flex items-center gap-2 text-sm hover:text-brand-700">
              <Settings className="w-4 h-4" /> Settings
            </button>
            <button className="flex items-center gap-2 text-sm hover:text-red-500">
              <LogOut className="w-4 h-4" /> Logout
            </button>
          </div>
        </div>
      </aside>
    </>
  )
}
