import React from 'react'
import { Quote, Star } from 'lucide-react'

const items = [
  {
    name: 'Ramesh Patil',
    role: 'Wheat Farmer, Maharashtra',
    text: 'The AI called me before the rains and told me to delay spraying. My crop was saved. This is truly for us farmers.',
    color: 'from-brand-200 to-emerald-100',
  },
  {
    name: 'Sunita Devi',
    role: 'Vegetable Grower, Bihar',
    text: 'I just clicked a photo of my tomato leaf and got the disease name and remedy. My yield doubled this season.',
    color: 'from-lime-100 to-brand-100',
  },
  {
    name: 'Karthik Reddy',
    role: 'Paddy Farmer, Telangana',
    text: 'SMS alerts in Telugu on market prices helped me sell at the right time. Kisan Alert made me a smarter farmer.',
    color: 'from-emerald-100 to-brand-200',
  },
]

export default function Testimonials() {
  return (
    <section id="contact" className="relative py-24 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center reveal">
          <span className="text-brand-600 font-semibold uppercase tracking-widest text-xs">Testimonials</span>
          <h2 className="section-title mt-3">Loved by farmers across India</h2>
          <p className="section-sub">Real stories from farmers using Kisan Alert every day.</p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <div key={i} className="reveal relative glass rounded-3xl p-7 hover:-translate-y-2 transition-all duration-500" style={{ transitionDelay: `${i*100}ms` }}>
              <div className={`absolute -top-4 -right-4 w-24 h-24 rounded-full bg-gradient-to-br ${t.color} blur-2xl opacity-70`} />
              <Quote className="w-8 h-8 text-brand-500" />
              <p className="mt-4 text-slate-700 leading-relaxed">&ldquo;{t.text}&rdquo;</p>
              <div className="mt-6 flex items-center gap-1 text-brand-500">
                {Array.from({length:5}).map((_,j)=>(<Star key={j} className="w-4 h-4 fill-current" />))}
              </div>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-white grid place-items-center font-bold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-slate-900">{t.name}</div>
                  <div className="text-xs text-slate-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
