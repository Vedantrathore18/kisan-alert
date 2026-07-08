import React, { useEffect, useState } from 'react'
import { Leaf, Menu, X } from 'lucide-react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Features', href: '#features' },
  { label: 'How it Works', href: '#how' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
      <nav className={`mx-auto max-w-7xl px-4 md:px-6`}>
        <div className={`glass rounded-2xl px-4 md:px-6 py-3 flex items-center justify-between transition-all ${scrolled ? 'shadow-xl' : ''}`}>
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 grid place-items-center shadow-md group-hover:scale-105 transition">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <span className="font-extrabold text-lg tracking-tight text-slate-900">
              Kisan<span className="text-brand-600">Alert</span>
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm font-medium text-slate-700 hover:text-brand-600 transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-brand-600 after:transition-all hover:after:w-full">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-3">
            <a href="#/dashboard" className="text-sm font-semibold text-slate-700 hover:text-brand-600">Login</a>
            <a href="#/dashboard" className="btn-primary !py-2 !px-5 text-sm">Get Started</a>
          </div>

          <button className="md:hidden text-slate-700" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-2 glass rounded-2xl p-4 flex flex-col gap-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-slate-700 font-medium">{l.label}</a>
            ))}
            <a href="#/dashboard" className="btn-ghost justify-center">Login</a>
            <a href="#/dashboard" className="btn-primary justify-center">Get Started</a>
          </div>
        )}
      </nav>
    </header>
  )
}
