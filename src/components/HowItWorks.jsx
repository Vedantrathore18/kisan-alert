import React from 'react'
import { UserPlus, ScanLine, BrainCircuit, PhoneCall, Sprout } from 'lucide-react'

const steps = [
  { icon: UserPlus, title: 'Sign Up', desc: 'Farmer registers with phone number and basic farm details.' },
  { icon: ScanLine, title: 'Share Farm Data', desc: 'Add soil type, crop history or upload a leaf photo instantly.' },
  { icon: BrainCircuit, title: 'AI Analysis', desc: 'Our AI processes weather, market and disease data in real time.' },
  { icon: PhoneCall, title: 'Get Personalized Advice', desc: 'Receive voice calls, SMS alerts and dashboard recommendations.' },
  { icon: Sprout, title: 'Grow Smarter', desc: 'Take action, boost yield and reduce risk — season after season.' },
]

export default function HowItWorks() {
  return (
    <section id="how" className="relative py-24 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center reveal">
          <span className="text-brand-600 font-semibold uppercase tracking-widest text-xs">How it Works</span>
          <h2 className="section-title mt-3">Simple. Smart. Impactful.</h2>
          <p className="section-sub">Five easy steps from onboarding to smarter farming decisions.</p>
        </div>

        <div className="relative mt-16">
          {/* connecting line */}
          <div className="hidden lg:block absolute top-10 left-0 right-0 h-1 bg-gradient-to-r from-brand-200 via-brand-500 to-brand-200 rounded-full" />

          <ol className="grid gap-8 lg:grid-cols-5">
            {steps.map((s, i) => (
              <li key={i} className="reveal relative" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="flex flex-col items-center text-center">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-2xl glass grid place-items-center shadow-xl">
                      <s.icon className="w-8 h-8 text-brand-600" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-brand-600 text-white text-xs font-bold grid place-items-center shadow-lg">
                      {i + 1}
                    </div>
                  </div>
                  <h3 className="mt-5 font-bold text-slate-900">{s.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 max-w-[16rem]">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
