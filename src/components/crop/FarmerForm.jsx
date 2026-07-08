import React, { useState } from 'react'
import { MapPin, Map, Home, Ruler, CalendarRange, Sprout, Droplets, Layers, Sparkles } from 'lucide-react'

const STATES = ['Maharashtra', 'Karnataka', 'Punjab', 'Uttar Pradesh', 'Tamil Nadu', 'Bihar', 'Madhya Pradesh', 'Gujarat', 'Telangana', 'West Bengal']
const SEASONS = ['Kharif', 'Rabi', 'Zaid']
const SOIL_TYPES = ['Loam', 'Clay', 'Sandy', 'Black Cotton', 'Red', 'Silty', 'Alluvial']
const WATER_LEVELS = ['Low', 'Moderate', 'High', 'Rain-fed only']
const CROPS = ['Wheat', 'Rice', 'Cotton', 'Soybean', 'Sugarcane', 'Maize', 'Groundnut', 'Onion', 'Tomato', 'None']

export default function FarmerForm({ onGenerate, loading }) {
  const [form, setForm] = useState({
    state: 'Maharashtra',
    district: 'Nashik',
    village: 'Sinnar',
    landArea: '2.5',
    season: 'Kharif',
    currentCrop: 'Wheat',
    water: 'Moderate',
    soil: 'Black Cotton',
  })

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    onGenerate(form)
  }

  return (
    <form onSubmit={submit} className="glass rounded-3xl p-6 md:p-7 h-full">
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 grid place-items-center shadow-lg">
          <Sprout className="w-5 h-5 text-white" />
        </div>
        <div>
          <h2 className="font-bold text-slate-900">Farmer Details</h2>
          <p className="text-xs text-slate-500">Fill in your farm profile</p>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        <Field icon={<MapPin className="w-4 h-4" />} label="State">
          <Select value={form.state} onChange={set('state')} options={STATES} />
        </Field>

        <div className="grid grid-cols-2 gap-3">
          <Field icon={<Map className="w-4 h-4" />} label="District">
            <Input value={form.district} onChange={set('district')} placeholder="e.g. Nashik" />
          </Field>
          <Field icon={<Home className="w-4 h-4" />} label="Village">
            <Input value={form.village} onChange={set('village')} placeholder="e.g. Sinnar" />
          </Field>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <Field icon={<Ruler className="w-4 h-4" />} label="Land Area (acres)">
            <Input type="number" step="0.1" value={form.landArea} onChange={set('landArea')} />
          </Field>
          <Field icon={<CalendarRange className="w-4 h-4" />} label="Season">
            <Select value={form.season} onChange={set('season')} options={SEASONS} />
          </Field>
        </div>

        <Field icon={<Sprout className="w-4 h-4" />} label="Current Crop">
          <Select value={form.currentCrop} onChange={set('currentCrop')} options={CROPS} />
        </Field>

        <Field icon={<Droplets className="w-4 h-4" />} label="Water Availability">
          <ChipGroup value={form.water} onChange={(v) => setForm({ ...form, water: v })} options={WATER_LEVELS} />
        </Field>

        <Field icon={<Layers className="w-4 h-4" />} label="Soil Type">
          <ChipGroup value={form.soil} onChange={(v) => setForm({ ...form, soil: v })} options={SOIL_TYPES} />
        </Field>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="mt-7 w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-2xl font-bold text-white
                   bg-gradient-to-r from-brand-600 to-emerald-600 shadow-xl shadow-brand-600/30
                   hover:from-brand-700 hover:to-emerald-700 hover:-translate-y-0.5
                   disabled:opacity-70 disabled:cursor-not-allowed transition-all"
      >
        <Sparkles className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} />
        {loading ? 'Analyzing...' : 'Generate Recommendation'}
      </button>

      <p className="mt-3 text-[11px] text-center text-slate-500">
        Weather API · Gemini AI · Kisan Alert Intelligence
      </p>
    </form>
  )
}

function Field({ icon, label, children }) {
  return (
    <label className="block">
      <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 mb-1.5">
        <span className="text-brand-600">{icon}</span>{label}
      </span>
      {children}
    </label>
  )
}

function Input(props) {
  return (
    <input
      {...props}
      className="w-full px-4 py-2.5 rounded-xl bg-white/70 border border-white/70 text-sm text-slate-800
                 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500/40 focus:border-brand-400 transition"
    />
  )
}

function Select({ value, onChange, options }) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={onChange}
        className="w-full appearance-none px-4 py-2.5 pr-9 rounded-xl bg-white/70 border border-white/70 text-sm text-slate-800
                   focus:outline-none focus:ring-2 focus:ring-brand-500/40 focus:border-brand-400 transition"
      >
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
      <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.13l3.71-3.9a.75.75 0 111.08 1.04l-4.25 4.47a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
      </svg>
    </div>
  )
}

function ChipGroup({ value, onChange, options }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {options.map((o) => {
        const active = o === value
        return (
          <button
            type="button"
            key={o}
            onClick={() => onChange(o)}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all
              ${active
                ? 'bg-gradient-to-r from-brand-500 to-brand-700 text-white shadow-md shadow-brand-600/30 scale-105'
                : 'bg-white/70 border border-white/70 text-slate-600 hover:bg-white hover:text-brand-700'}`}
          >
            {o}
          </button>
        )
      })}
    </div>
  )
}
