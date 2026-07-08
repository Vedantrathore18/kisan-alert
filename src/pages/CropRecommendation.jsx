import React, { useState } from 'react'
import Sidebar from '../components/dashboard/Sidebar'
import Topbar from '../components/dashboard/Topbar'
import FarmerForm from '../components/crop/FarmerForm'
import RecommendationCard from '../components/crop/RecommendationCard'
import EmptyState from '../components/crop/EmptyState'
import useReveal from '../hooks/useReveal'

// Mock "AI" — swap with backend call (Weather API → Gemini) later
const MOCK_RESULTS = {
  Kharif: {
    bestCrop: 'Soybean',
    emoji: '🌱',
    reason: 'Ideal for black cotton soil in Kharif with moderate rainfall (750-1000mm). Fits your water availability and current market demand is strong in Maharashtra APMCs.',
    yield: '18-22 quintals/acre',
    profit: '₹42,000 - ₹55,000/acre',
    water: 'Low to moderate — 450mm across season, mostly rain-fed.',
    fertilizer: 'DAP 50kg + Urea 25kg + MOP 20kg per acre. Add Rhizobium culture at sowing.',
    confidence: 92,
    alternates: ['Cotton', 'Pigeon Pea', 'Groundnut'],
  },
  Rabi: {
    bestCrop: 'Wheat',
    emoji: '🌾',
    reason: 'Rabi season with adequate irrigation is optimal for wheat (HD-2967 variety). Loam soil and cool temperatures fit growth stages perfectly.',
    yield: '20-25 quintals/acre',
    profit: '₹38,000 - ₹48,000/acre',
    water: 'Moderate — 4-5 irrigations at CRI, tillering, jointing, flowering, grain-fill.',
    fertilizer: 'NPK 120:60:40 kg/ha. Split urea in 3 doses. Zinc sulphate 25kg/ha for loam.',
    confidence: 89,
    alternates: ['Chickpea', 'Mustard', 'Barley'],
  },
  Zaid: {
    bestCrop: 'Watermelon',
    emoji: '🍉',
    reason: 'Summer Zaid crop with high market price and good drainage in sandy loam. Short duration (75-90 days) fits pre-monsoon window.',
    yield: '15-18 tonnes/acre',
    profit: '₹60,000 - ₹90,000/acre',
    water: 'High — drip irrigation recommended, 550-600mm across season.',
    fertilizer: 'FYM 8t/acre + NPK 80:40:60. Weekly foliar spray of micronutrients.',
    confidence: 85,
    alternates: ['Muskmelon', 'Cucumber', 'Fodder Maize'],
  },
}

export default function CropRecommendation() {
  useReveal()
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)

  const handleGenerate = (form) => {
    setLoading(true)
    setResult(null)
    // Simulate backend → Weather API → Gemini
    setTimeout(() => {
      const base = MOCK_RESULTS[form.season] || MOCK_RESULTS.Kharif
      setResult({ ...base, form })
      setLoading(false)
    }, 1600)
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-brand-50 via-white to-emerald-50 overflow-x-hidden">
      <div className="pointer-events-none fixed -top-40 -left-40 w-[28rem] h-[28rem] rounded-full bg-brand-300/40 blur-3xl animate-blob" />
      <div className="pointer-events-none fixed top-1/2 -right-40 w-[28rem] h-[28rem] rounded-full bg-emerald-200/50 blur-3xl animate-blob" />

      <div className="relative flex">
        <Sidebar />
        <div className="flex-1 min-w-0 lg:ml-72">
          <Topbar />
          <main className="p-4 md:p-8 space-y-6">
            {/* Header */}
            <div className="reveal">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-brand-700 text-xs font-semibold">
                ✨ AI Powered · Weather + Gemini
              </span>
              <h1 className="mt-3 text-2xl md:text-4xl font-black text-slate-900">
                Smart <span className="bg-gradient-to-r from-brand-600 to-emerald-500 bg-clip-text text-transparent">Crop Recommendation</span>
              </h1>
              <p className="text-slate-600 mt-2 max-w-2xl">
                Tell us about your farm. Our AI analyzes local weather, soil, water and market data to recommend the most profitable crop for your next season.
              </p>
            </div>

            {/* Split layout */}
            <div className="grid gap-6 lg:grid-cols-5">
              <div className="reveal lg:col-span-2">
                <FarmerForm onGenerate={handleGenerate} loading={loading} />
              </div>
              <div className="reveal lg:col-span-3" style={{ transitionDelay: '120ms' }}>
                {loading ? <LoadingCard /> : result ? <RecommendationCard data={result} /> : <EmptyState />}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

function LoadingCard() {
  const steps = [
    '📡 Fetching hyperlocal weather...',
    '🌱 Analyzing soil & water profile...',
    '🤖 Consulting Gemini AI model...',
    '📊 Comparing yields & market prices...',
  ]
  return (
    <div className="glass rounded-3xl p-8 h-full min-h-[520px] flex flex-col items-center justify-center text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-100/40 to-emerald-100/40" />
      <div className="relative">
        <div className="w-24 h-24 mx-auto relative">
          <div className="absolute inset-0 rounded-full border-4 border-brand-200" />
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-brand-600 animate-spin" />
          <div className="absolute inset-0 grid place-items-center text-4xl">🌾</div>
        </div>
        <h3 className="mt-6 text-xl font-bold text-slate-900">Generating recommendation...</h3>
        <ul className="mt-5 space-y-2 text-sm text-slate-600">
          {steps.map((s, i) => (
            <li key={i} className="opacity-0 animate-fade-up" style={{ animationDelay: `${i * 350}ms`, animationFillMode: 'forwards' }}>
              {s}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
