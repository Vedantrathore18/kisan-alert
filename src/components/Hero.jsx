import React from 'react'
import { ArrowRight, Phone, Sparkles, CloudSun, Bug, Wheat } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 md:pt-40 pb-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="reveal">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-brand-700 text-xs font-semibold">
            <Sparkles className="w-4 h-4" /> Powered by Generative AI
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl font-black tracking-tight text-slate-900 leading-[1.05]">
            AI-Powered
            <span className="block bg-gradient-to-r from-brand-600 via-brand-500 to-emerald-500 bg-clip-text text-transparent">
              Agriculture Assistant
            </span>
          </h1>
          <p className="mt-6 text-lg text-slate-600 max-w-xl">
            Helping farmers through crop recommendations, weather intelligence, AI voice calls, disease detection and SMS alerts — all in one intelligent platform built for the field.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#/dashboard" className="btn-primary">
              Get Started <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#/call" className="btn-ghost">
              <Phone className="w-4 h-4" /> Try Voice Assistant
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6 text-sm text-slate-500">
            <div className="flex -space-x-2">
              {['#2ea05c','#4fb877','#82d19f'].map((c,i)=>(
                <div key={i} className="w-9 h-9 rounded-full border-2 border-white" style={{background:c}} />
              ))}
            </div>
            <div>
              <div className="font-semibold text-slate-900">10,000+ farmers</div>
              <div>trust Kisan Alert daily</div>
            </div>
          </div>
        </div>

        {/* Illustration */}
        <div className="reveal relative">
          <div className="relative aspect-square max-w-lg mx-auto">
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-brand-200 via-white to-emerald-100 blur-2xl opacity-70" />
            <div className="relative glass rounded-[2.5rem] p-8 h-full flex items-center justify-center overflow-hidden">
              <FarmerIllustration />

              {/* floating chips */}
              <FloatChip className="top-6 left-6" icon={<CloudSun className="w-4 h-4" />} label="28°C · Sunny" />
              <FloatChip className="top-10 right-4 [animation-delay:1s]" icon={<Wheat className="w-4 h-4" />} label="Wheat · Optimal" />
              <FloatChip className="bottom-8 left-4 [animation-delay:2s]" icon={<Bug className="w-4 h-4" />} label="Healthy Crop" />
              <FloatChip className="bottom-10 right-8 [animation-delay:0.5s]" icon={<Phone className="w-4 h-4" />} label="AI Calling" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FloatChip({ className='', icon, label }) {
  return (
    <div className={`absolute glass rounded-full px-3 py-1.5 flex items-center gap-2 text-xs font-semibold text-brand-700 shadow-lg animate-float ${className}`}>
      {icon}<span>{label}</span>
    </div>
  )
}

function FarmerIllustration() {
  return (
    <svg viewBox="0 0 400 400" className="w-full h-full">
      <defs>
        <linearGradient id="sky" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#e9f7ef"/>
          <stop offset="100%" stopColor="#ffffff"/>
        </linearGradient>
        <linearGradient id="ground" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#4fb877"/>
          <stop offset="100%" stopColor="#1f8148"/>
        </linearGradient>
      </defs>
      <circle cx="200" cy="200" r="180" fill="url(#sky)"/>
      {/* sun */}
      <circle cx="320" cy="90" r="28" fill="#ffd76a"/>
      {/* hills */}
      <path d="M20 280 Q120 200 200 260 T380 250 L380 380 L20 380 Z" fill="url(#ground)"/>
      {/* field rows */}
      <g stroke="#175131" strokeWidth="2" opacity="0.35">
        <path d="M40 320 Q200 300 360 330" fill="none"/>
        <path d="M40 345 Q200 325 360 355" fill="none"/>
      </g>
      {/* farmer body */}
      <g transform="translate(150 155)">
        <ellipse cx="50" cy="180" rx="60" ry="10" fill="#000" opacity="0.1"/>
        {/* legs */}
        <rect x="35" y="120" width="14" height="60" rx="6" fill="#1a663b"/>
        <rect x="55" y="120" width="14" height="60" rx="6" fill="#1a663b"/>
        {/* body */}
        <path d="M20 60 Q50 40 80 60 L85 130 L15 130 Z" fill="#2ea05c"/>
        {/* arm holding phone */}
        <rect x="70" y="70" width="12" height="45" rx="6" fill="#2ea05c" transform="rotate(20 76 92)"/>
        {/* phone */}
        <rect x="88" y="55" width="26" height="40" rx="5" fill="#0f172a"/>
        <rect x="91" y="59" width="20" height="30" rx="2" fill="#4fb877"/>
        <circle cx="101" cy="74" r="4" fill="#fff"/>
        {/* head */}
        <circle cx="50" cy="35" r="22" fill="#f4c58a"/>
        {/* hat */}
        <ellipse cx="50" cy="18" rx="34" ry="8" fill="#b8860b"/>
        <path d="M30 18 Q50 -2 70 18 Z" fill="#daa520"/>
        {/* smile */}
        <path d="M42 42 Q50 48 58 42" stroke="#0f172a" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <circle cx="43" cy="34" r="1.6" fill="#0f172a"/>
        <circle cx="57" cy="34" r="1.6" fill="#0f172a"/>
      </g>
      {/* signal waves */}
      <g stroke="#2ea05c" strokeWidth="2" fill="none" opacity="0.7">
        <path d="M290 130 Q305 145 290 160"/>
        <path d="M300 120 Q325 145 300 170"/>
        <path d="M310 110 Q345 145 310 180"/>
      </g>
    </svg>
  )
}
