import React from 'react'
import Sidebar from '../components/dashboard/Sidebar'
import Topbar from '../components/dashboard/Topbar'
import TodayWeather from '../components/weather/TodayWeather'
import TomorrowCard from '../components/weather/TomorrowCard'
import ForecastChart from '../components/weather/ForecastChart'
import ForecastList from '../components/weather/ForecastList'
import WeatherAlerts from '../components/weather/WeatherAlerts'
import FarmAdvice from '../components/weather/FarmAdvice'
import StatMini from '../components/weather/StatMini'
import { Droplets, Wind, Thermometer, CloudRain, Sun, Gauge } from 'lucide-react'
import useReveal from '../hooks/useReveal'

export default function Weather() {
  useReveal()
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-brand-50 via-white to-emerald-50 overflow-x-hidden">
      <div className="pointer-events-none fixed -top-40 -left-40 w-[28rem] h-[28rem] rounded-full bg-brand-300/40 blur-3xl animate-blob" />
      <div className="pointer-events-none fixed top-1/2 -right-40 w-[28rem] h-[28rem] rounded-full bg-emerald-200/50 blur-3xl animate-blob" />
      <div className="pointer-events-none fixed bottom-0 left-1/2 w-[28rem] h-[28rem] rounded-full bg-lime-200/40 blur-3xl animate-blob" />

      <div className="relative flex">
        <Sidebar />
        <div className="flex-1 min-w-0 lg:ml-72">
          <Topbar />
          <main className="p-4 md:p-8 space-y-6">
            {/* Header */}
            <div className="reveal flex flex-wrap items-end justify-between gap-3">
              <div>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-brand-700 text-xs font-semibold">
                  🌦️ Hyperlocal Intelligence · Nashik, Maharashtra
                </span>
                <h1 className="mt-3 text-2xl md:text-4xl font-black text-slate-900">
                  Weather <span className="bg-gradient-to-r from-brand-600 to-emerald-500 bg-clip-text text-transparent">Intelligence</span>
                </h1>
                <p className="text-slate-600 mt-2">Real-time forecasts and farm-level advice, updated every hour.</p>
              </div>
              <div className="glass rounded-2xl px-4 py-3 text-sm">
                <div className="text-slate-500 text-xs">Last updated</div>
                <div className="font-bold text-slate-900">Just now · 12:04 PM</div>
              </div>
            </div>

            {/* Row 1: Today (big) + Tomorrow */}
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="reveal lg:col-span-2"><TodayWeather /></div>
              <div className="reveal" style={{ transitionDelay: '80ms' }}><TomorrowCard /></div>
            </div>

            {/* Row 2: Mini stat strip */}
            <div className="reveal grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
              <StatMini icon={Thermometer} label="Temperature" value="28°C" tone="from-orange-400 to-red-500" trend="+2°" />
              <StatMini icon={Droplets}    label="Humidity"    value="62%"  tone="from-sky-400 to-blue-600" trend="-4%" />
              <StatMini icon={CloudRain}   label="Rain Chance" value="35%"  tone="from-cyan-400 to-blue-500" trend="+15%" />
              <StatMini icon={Wind}        label="Wind Speed"  value="12 km/h" tone="from-emerald-400 to-brand-600" trend="calm" />
              <StatMini icon={Sun}         label="UV Index"    value="7"    tone="from-yellow-400 to-orange-500" trend="high" />
              <StatMini icon={Gauge}       label="Pressure"    value="1012 hPa" tone="from-fuchsia-400 to-purple-600" trend="stable" />
            </div>

            {/* Row 3: 7-day chart */}
            <div className="reveal"><ForecastChart /></div>

            {/* Row 4: Detailed list + Alerts */}
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="reveal lg:col-span-2"><ForecastList /></div>
              <div className="reveal" style={{ transitionDelay: '80ms' }}><WeatherAlerts /></div>
            </div>

            {/* Row 5: Advice */}
            <div className="reveal"><FarmAdvice /></div>

            <footer className="pt-6 pb-2 text-center text-sm text-slate-500">
              Data sources · IMD · OpenWeather · Kisan Alert AI
            </footer>
          </main>
        </div>
      </div>
    </div>
  )
}
