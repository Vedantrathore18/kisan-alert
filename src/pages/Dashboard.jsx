import React from 'react'
import Sidebar from '../components/dashboard/Sidebar'
import Topbar from '../components/dashboard/Topbar'
import WeatherCard from '../components/dashboard/WeatherCard'
import HealthScore from '../components/dashboard/HealthScore'
import TodayRecommendation from '../components/dashboard/TodayRecommendation'
import RecentAlerts from '../components/dashboard/RecentAlerts'
import QuickActions from '../components/dashboard/QuickActions'
import RecommendationHistory from '../components/dashboard/RecommendationHistory'
import useReveal from '../hooks/useReveal'

export default function Dashboard() {
  useReveal()
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-brand-50 via-white to-emerald-50 overflow-x-hidden">
      {/* decorative blobs */}
      <div className="pointer-events-none fixed -top-40 -left-40 w-[28rem] h-[28rem] rounded-full bg-brand-300/40 blur-3xl animate-blob" />
      <div className="pointer-events-none fixed top-1/2 -right-40 w-[28rem] h-[28rem] rounded-full bg-emerald-200/50 blur-3xl animate-blob" />

      <div className="relative flex">
        <Sidebar />
        <div className="flex-1 min-w-0 lg:ml-72">
          <Topbar />
          <main className="p-4 md:p-8 space-y-6">
            {/* Welcome */}
            <div className="reveal">
              <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900">
                Namaste, <span className="text-brand-600">Ramesh</span> 👋
              </h1>
              <p className="text-slate-600 mt-1">Here's what's happening on your farm today.</p>
            </div>

            {/* Row 1: Weather + Health + Today's Recommendation */}
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="reveal"><WeatherCard /></div>
              <div className="reveal" style={{transitionDelay:'80ms'}}><HealthScore /></div>
              <div className="reveal" style={{transitionDelay:'160ms'}}><TodayRecommendation /></div>
            </div>

            {/* Row 2: Alerts + Quick Actions */}
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="reveal lg:col-span-2"><RecentAlerts /></div>
              <div className="reveal" style={{transitionDelay:'80ms'}}><QuickActions /></div>
            </div>

            {/* Row 3: History */}
            <div className="reveal"><RecommendationHistory /></div>

            <footer className="pt-6 pb-2 text-center text-sm text-slate-500">
              © {new Date().getFullYear()} Kisan Alert — Grow smarter, every season.
            </footer>
          </main>
        </div>
      </div>
    </div>
  )
}
