import React, { useState, useEffect, useRef } from 'react'
import { Search, Bell, Sun, Moon, ChevronDown, User, Settings, LogOut, Sprout } from 'lucide-react'

const NOTIFICATIONS = [
  { icon: '🌧️', title: 'Heavy Rain Alert', desc: 'Rain expected tomorrow 3-7 PM', time: '2h ago' },
  { icon: '🐛', title: 'Pest activity nearby', desc: 'Aphids reported in tomato fields', time: '5h ago' },
  { icon: '💰', title: 'Wheat price up', desc: '+₹120/quintal at Nashik APMC', time: '1d ago' },
]

export default function Topbar() {
  const [bell, setBell] = useState(false)
  const [profile, setProfile] = useState(false)
  const [dark, setDark] = useState(false)
  const [q, setQ] = useState('')
  const bellRef = useRef(null)
  const profRef = useRef(null)

  // Close on outside click
  useEffect(() => {
    const h = (e) => {
      if (bellRef.current && !bellRef.current.contains(e.target)) setBell(false)
      if (profRef.current && !profRef.current.contains(e.target)) setProfile(false)
    }
    document.addEventListener('mousedown', h)
    return () => document.removeEventListener('mousedown', h)
  }, [])

  const toggleTheme = () => {
    setDark(d => !d)
    document.documentElement.classList.toggle('dark-mode')
  }

  const handleSearch = (e) => {
    if (e.key === 'Enter' && q.trim()) {
      const term = q.toLowerCase()
      if (term.includes('crop') || term.includes('fasal')) window.location.hash = '#/crop'
      else if (term.includes('weather') || term.includes('mausam') || term.includes('rain')) window.location.hash = '#/weather'
      else if (term.includes('call') || term.includes('voice')) window.location.hash = '#/call'
      else alert(`Searching for "${q}"...`)
      setQ('')
    }
  }

  return (
    <div className="sticky top-0 z-30 px-4 md:px-8 pt-4">
      <div className="glass rounded-2xl px-4 md:px-6 py-3 flex items-center gap-3">
        <div className="lg:hidden w-11" />

        {/* Search */}
        <div className="relative flex-1 max-w-lg">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            onKeyDown={handleSearch}
            placeholder="Search crops, weather, calls... (Press Enter)"
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/60 border border-white/60 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500/40"
          />
        </div>

        <div className="ml-auto flex items-center gap-2">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            title={dark ? 'Light mode' : 'Dark mode'}
            className="hidden sm:grid w-10 h-10 rounded-xl glass place-items-center text-slate-600 hover:text-brand-600 hover:rotate-12 transition"
          >
            {dark ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </button>

          {/* Bell */}
          <div className="relative" ref={bellRef}>
            <button
              onClick={() => { setBell(!bell); setProfile(false) }}
              className="relative w-10 h-10 rounded-xl glass grid place-items-center text-slate-600 hover:text-brand-600 transition"
            >
              <Bell className="w-4 h-4" />
              <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 rounded-full bg-red-500 ring-2 ring-white animate-pulse" />
            </button>

            {bell && (
              <div className="absolute right-0 mt-2 w-80 glass rounded-2xl p-3 shadow-2xl animate-fade-up z-50">
                <div className="flex items-center justify-between px-2 pb-2 border-b border-white/60">
                  <h4 className="font-bold text-slate-900 text-sm">Notifications</h4>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-red-500 text-white font-bold">{NOTIFICATIONS.length} new</span>
                </div>
                <ul className="mt-2 space-y-1 max-h-72 overflow-y-auto">
                  {NOTIFICATIONS.map((n, i) => (
                    <li key={i} className="flex items-start gap-3 p-2 rounded-xl hover:bg-white/60 cursor-pointer transition">
                      <span className="text-2xl">{n.icon}</span>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-bold text-slate-900 truncate">{n.title}</div>
                        <div className="text-xs text-slate-600 truncate">{n.desc}</div>
                        <div className="text-[10px] text-slate-400 mt-0.5">{n.time}</div>
                      </div>
                    </li>
                  ))}
                </ul>
                <button className="mt-2 w-full py-2 rounded-xl text-xs font-bold text-brand-700 hover:bg-brand-50 transition">
                  View all alerts →
                </button>
              </div>
            )}
          </div>

          {/* Profile */}
          <div className="relative" ref={profRef}>
            <button
              onClick={() => { setProfile(!profile); setBell(false) }}
              className="hidden sm:flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-xl glass hover:shadow-md transition"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 text-white font-bold grid place-items-center text-sm">R</div>
              <div className="text-left">
                <div className="text-xs font-bold text-slate-900 leading-tight">Ramesh P.</div>
                <div className="text-[10px] text-slate-500 leading-tight">Farmer · Pro</div>
              </div>
              <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${profile ? 'rotate-180' : ''}`} />
            </button>

            {profile && (
              <div className="absolute right-0 mt-2 w-64 glass rounded-2xl p-3 shadow-2xl animate-fade-up z-50">
                <div className="p-3 flex items-center gap-3 border-b border-white/60">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white font-black grid place-items-center text-lg">R</div>
                  <div>
                    <div className="font-bold text-slate-900">Ramesh Patil</div>
                    <div className="text-xs text-slate-500">Nashik, Maharashtra</div>
                    <div className="text-[10px] inline-block mt-1 px-2 py-0.5 rounded-full bg-brand-100 text-brand-700 font-bold">PRO PLAN</div>
                  </div>
                </div>
                <ul className="mt-2 space-y-1">
                  <MenuItem icon={User}    label="My Profile" />
                  <MenuItem icon={Sprout}  label="My Crops"    href="#/crop" />
                  <MenuItem icon={Settings} label="Settings" />
                  <MenuItem icon={LogOut}  label="Logout"     href="#/" danger />
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function MenuItem({ icon: Icon, label, href, danger }) {
  const cls = danger ? 'text-red-600 hover:bg-red-50' : 'text-slate-700 hover:bg-white/70'
  return (
    <li>
      <a href={href || '#'} className={`flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium transition ${cls}`}>
        <Icon className="w-4 h-4" />
        {label}
      </a>
    </li>
  )
}
