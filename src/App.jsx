import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import WhyUs from './components/WhyUs'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import Dashboard from './pages/Dashboard'
import CropRecommendation from './pages/CropRecommendation'
import Weather from './pages/Weather'
import CallAgent from './pages/CallAgent'
import Alerts from './pages/Alerts'
import useReveal from './hooks/useReveal'

function Landing() {
  useReveal()
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-gradient-to-b from-brand-50 via-white to-white">
      <div className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 rounded-full bg-brand-300/40 blur-3xl animate-blob" />
      <div className="pointer-events-none absolute top-1/3 -right-32 w-96 h-96 rounded-full bg-emerald-200/50 blur-3xl animate-blob" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 w-96 h-96 rounded-full bg-lime-200/40 blur-3xl animate-blob" />

      <Navbar />
      <main className="relative">
        <Hero />
        <Features />
        <HowItWorks />
        <WhyUs />
        <Testimonials />
      </main>
      <Footer />

      {/* Floating link to demo the dashboard */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-2 items-end">
        <a href="#/crop" className="btn-ghost shadow-2xl">🌾 Crop AI</a>
        <a href="#/dashboard" className="btn-primary shadow-2xl">View Dashboard →</a>
      </div>
    </div>
  )
}

export default function App() {
  const [route, setRoute] = useState(window.location.hash)
  useEffect(() => {
    const onHash = () => setRoute(window.location.hash)
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  if (route.startsWith('#/dashboard')) return <Dashboard />
  if (route.startsWith('#/crop')) return <CropRecommendation />
  if (route.startsWith('#/weather')) return <Weather />
  if (route.startsWith('#/call')) return <CallAgent />
  if (route.startsWith('#/alerts')) return <Alerts />
  return <Landing />
}
