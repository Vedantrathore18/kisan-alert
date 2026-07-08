import React from 'react'
import { Leaf, Twitter, Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative mt-16 px-4 md:px-6 pb-8">
      <div className="max-w-7xl mx-auto glass rounded-3xl p-10">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 grid place-items-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <span className="font-extrabold text-lg text-slate-900">Kisan<span className="text-brand-600">Alert</span></span>
            </div>
            <p className="mt-4 text-slate-600 max-w-md text-sm leading-relaxed">
              AI-powered agriculture assistant helping small and marginal farmers make smart, data-driven decisions — every season.
            </p>
            <div className="mt-5 flex gap-3">
              {[Twitter, Github, Linkedin, Mail].map((I, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full glass grid place-items-center text-brand-700 hover:bg-brand-600 hover:text-white transition">
                  <I className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterCol title="Product" links={['Features','How it Works','Voice Assistant','Dashboard']} />
          <FooterCol title="Company" links={['About','Contact','Careers','Privacy']} />
        </div>

        <div className="mt-10 pt-6 border-t border-white/60 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Kisan Alert. Built with love for Bharat's farmers.</p>
          <p>Made at Hackathon 2026</p>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({ title, links }) {
  return (
    <div>
      <h4 className="font-bold text-slate-900">{title}</h4>
      <ul className="mt-4 space-y-2 text-sm">
        {links.map((l) => (
          <li key={l}><a href="#" className="text-slate-600 hover:text-brand-600 transition">{l}</a></li>
        ))}
      </ul>
    </div>
  )
}
