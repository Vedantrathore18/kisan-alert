import React, { useState, useEffect } from 'react'
import Sidebar from '../components/dashboard/Sidebar'
import Topbar from '../components/dashboard/Topbar'
import ImageUploader from '../components/disease/ImageUploader'
import DiagnosisResult from '../components/disease/DiagnosisResult'
import LeafVisual from '../components/disease/LeafVisual'
import ScanningAnimation from '../components/disease/ScanningAnimation'
import { SAMPLE_DISEASES, GENERIC_DISEASE } from '../components/disease/diseaseDatabase'
import useReveal from '../hooks/useReveal'
import {
  Sparkles, Camera, PhoneCall, ShieldCheck, Sun, CheckCircle2,
  AlertCircle, Bug, HeartHandshake, HelpCircle, HardDrive, RotateCcw
} from 'lucide-react'

const STORAGE_KEY = 'kisan_alert_disease_scan_cache'

function getInitialCache() {
  if (typeof window === 'undefined') return null
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) return JSON.parse(raw)
  } catch (err) {
    console.warn('Failed to read disease scan cache', err)
  }
  return null
}

export default function DiseaseScan() {
  useReveal()
  const cached = getInitialCache()

  const [selectedSample, setSelectedSample] = useState(() => (cached ? cached.selectedSample : SAMPLE_DISEASES[0]))
  const [customImage, setCustomImage] = useState(() => (cached ? cached.customImage : null))
  const [selectedCrop, setSelectedCrop] = useState(() => (cached ? (cached.selectedCrop || 'All Crops (Auto Detect)') : 'All Crops (Auto Detect)'))
  const [isScanning, setIsScanning] = useState(false)
  const [result, setResult] = useState(() => (cached ? cached.result : null))
  const [lastScannedAt, setLastScannedAt] = useState(() => (cached ? cached.lastScannedAt : null))

  // Auto-sync state to browser storage (Chrome cache memory)
  useEffect(() => {
    try {
      if (result || customImage || selectedSample) {
        const payload = {
          selectedSample,
          customImage,
          selectedCrop,
          result,
          lastScannedAt: lastScannedAt || new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(payload))
        } catch (e) {
          // Fallback if base64 image exceeds 5MB quota
          const lightPayload = { ...payload, customImage: null }
          localStorage.setItem(STORAGE_KEY, JSON.stringify(lightPayload))
        }
      }
    } catch (err) {
      console.warn('Error persisting disease scan state:', err)
    }
  }, [selectedSample, customImage, selectedCrop, result, lastScannedAt])

  const handleSelectSample = (sample) => {
    setSelectedSample(sample)
    setCustomImage(null)
    setResult(null)
    setLastScannedAt(null)
  }

  const handleUploadImage = (imageDataUrl, filename) => {
    setCustomImage(imageDataUrl)
    setSelectedSample(null)
    setResult(null)
    setLastScannedAt(null)
  }

  const handleClear = () => {
    setSelectedSample(null)
    setCustomImage(null)
    setResult(null)
    setLastScannedAt(null)
    try {
      localStorage.removeItem(STORAGE_KEY)
    } catch (err) {
      console.warn('Error clearing cache', err)
    }
  }

  const handleStartScan = () => {
    if (!selectedSample && !customImage) return

    setIsScanning(true)
    setResult(null)

    // Simulate AI Vision Engine latency (2.4s)
    setTimeout(() => {
      let diagnosis = selectedSample
      if (customImage && !selectedSample) {
        diagnosis = {
          ...GENERIC_DISEASE,
          crop: selectedCrop !== 'All Crops (Auto Detect)' ? selectedCrop.split(' ')[0] : 'Crop Foliage',
          cropHindi: selectedCrop !== 'All Crops (Auto Detect)' ? selectedCrop : 'पौधा'
        }
      }
      const scanTimestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      setResult(diagnosis)
      setLastScannedAt(scanTimestamp)
      setIsScanning(false)
    }, 2400)
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-brand-50 via-white to-emerald-50 overflow-x-hidden">
      {/* Ambient background glow blobs */}
      <div className="pointer-events-none fixed -top-40 -left-40 w-[28rem] h-[28rem] rounded-full bg-brand-300/40 blur-3xl animate-blob" />
      <div className="pointer-events-none fixed top-1/2 -right-40 w-[28rem] h-[28rem] rounded-full bg-emerald-200/50 blur-3xl animate-blob" />
      <div className="pointer-events-none fixed -bottom-32 left-1/3 w-[26rem] h-[26rem] rounded-full bg-teal-200/40 blur-3xl animate-blob" />

      <div className="relative flex">
        <Sidebar />
        <div className="flex-1 min-w-0 lg:ml-72">
          <Topbar />

          <main className="p-4 md:p-8 space-y-6">
            {/* Page Header */}
            <div className="reveal">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass text-brand-700 text-xs font-bold shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 text-brand-600" />
                  AI Plant Pathology · Vision AI + Agronomy Doctor
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                  ⚡ 98.4% Accuracy
                </span>
                {result && lastScannedAt && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-semibold animate-fade-in">
                    <HardDrive className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Chrome Cache: पिछली जांच सुरक्षित है ({lastScannedAt})</span>
                  </span>
                )}
              </div>

              <h1 className="mt-3 text-2xl md:text-4xl font-black text-slate-900">
                Crop <span className="bg-gradient-to-r from-brand-600 to-emerald-500 bg-clip-text text-transparent">Disease Scanner</span> (फसल रोग डॉक्टर)
              </h1>
              <p className="text-slate-600 mt-2 max-w-2xl text-sm leading-relaxed">
                पत्ती की फोटो अपलोड करें या नीचे दिए गए सैंपल में से चुनें। हमारा AI दृष्टि मॉडल बीमारी की पहचान करके सही रासायनिक दवा की मात्रा, जैविक नुस्खा और बचाव के उपाय बताएगा।
              </p>
            </div>

            {/* Split layout: Upload & Settings on Left (2 cols), Result or Scanner on Right (3 cols) */}
            <div className="grid gap-6 lg:grid-cols-5">
              <div className="reveal lg:col-span-2">
                <ImageUploader
                  selectedSample={selectedSample}
                  customImage={customImage}
                  selectedCrop={selectedCrop}
                  isScanning={isScanning}
                  onSelectSample={handleSelectSample}
                  onUploadImage={handleUploadImage}
                  onSelectCrop={setSelectedCrop}
                  onStartScan={handleStartScan}
                  onClear={handleClear}
                />
              </div>

              <div className="reveal lg:col-span-3" style={{ transitionDelay: '100ms' }}>
                {isScanning ? (
                  <ScanningContainer
                    selectedSample={selectedSample}
                    customImage={customImage}
                  />
                ) : result ? (
                  <DiagnosisResult
                    data={result}
                    onReset={handleClear}
                  />
                ) : (
                  <EmptyDiseaseState onQuickStart={() => handleSelectSample(SAMPLE_DISEASES[0])} />
                )}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

function ScanningContainer({ selectedSample, customImage }) {
  return (
    <div className="glass rounded-3xl p-6 md:p-8 min-h-[520px] flex flex-col items-center justify-center relative overflow-hidden">
      <div className="w-full max-w-md aspect-square relative rounded-2xl overflow-hidden shadow-2xl border border-emerald-500/40">
        <LeafVisual
          item={selectedSample}
          customImage={customImage}
          className="w-full h-full"
        />
        <ScanningAnimation duration={2400} />
      </div>

      <div className="mt-6 text-center">
        <h3 className="text-lg font-black text-slate-900">
          Analyzing Crop Pathology...
        </h3>
        <p className="text-xs text-slate-500 mt-1">
          AI मॉडल पत्तियों के धब्बों और फफूंद के लक्षणों की जांच कर रहा है
        </p>
      </div>
    </div>
  )
}

function EmptyDiseaseState({ onQuickStart }) {
  return (
    <div className="glass rounded-3xl p-6 md:p-8 min-h-[520px] flex flex-col justify-between relative overflow-hidden">
      <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-brand-200/50 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-emerald-200/50 blur-3xl pointer-events-none" />

      <div className="relative">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-500 to-emerald-600 grid place-items-center text-white shadow-xl shadow-brand-600/30">
            <Bug className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-bold text-brand-600 uppercase tracking-widest">Guide & Tips</span>
            <h3 className="text-xl font-black text-slate-900">फोटो कैसे लें ताकि AI तुरंत बीमारी पकड़ सके?</h3>
          </div>
        </div>

        {/* 3 Photo Taking Tips */}
        <div className="mt-6 grid sm:grid-cols-3 gap-3">
          <div className="p-4 rounded-2xl bg-white/80 border border-slate-100 shadow-sm">
            <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-700 grid place-items-center mb-2 text-sm font-bold">
              1
            </div>
            <div className="text-xs font-bold text-slate-900">अच्छी रोशनी (Clear Daylight)</div>
            <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
              धूप या साफ दिन के उजाले में फोटो लें ताकि पत्ती का असली रंग दिखे।
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white/80 border border-slate-100 shadow-sm">
            <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 grid place-items-center mb-2 text-sm font-bold">
              2
            </div>
            <div className="text-xs font-bold text-slate-900">धब्बे पर फोकस (Focus on Lesion)</div>
            <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
              बीमारी वाले धब्बे या मुड़ी हुई पत्तियों को कैमरे के केंद्र में रखें।
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white/80 border border-slate-100 shadow-sm">
            <div className="w-8 h-8 rounded-xl bg-cyan-100 text-cyan-700 grid place-items-center mb-2 text-sm font-bold">
              3
            </div>
            <div className="text-xs font-bold text-slate-900">धुंधलापन न हो (No Blur)</div>
            <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
              हाथ को स्थिर रखकर 15 से 20 सेमी की दूरी से साफ फोटो खींचे।
            </p>
          </div>
        </div>

        {/* Instant test callout */}
        <div className="mt-6 p-5 rounded-2xl bg-gradient-to-r from-brand-600 to-emerald-600 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xl">
          <div>
            <div className="font-bold text-sm">Abhi try karein bina photo khinche!</div>
            <div className="text-xs text-white/80 mt-0.5">
              Tomato Early Blight demo leaf sample ready hai.
            </div>
          </div>
          <button
            onClick={onQuickStart}
            className="px-4 py-2 rounded-xl bg-white text-brand-700 font-bold text-xs hover:bg-brand-50 transition shadow-md whitespace-nowrap"
          >
            Load Tomato Sample →
          </button>
        </div>
      </div>

      {/* Footer Support Banner */}
      <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
        <div className="flex items-center gap-2">
          <PhoneCall className="w-4 h-4 text-emerald-600" />
          <span>Kisan Toll-Free Helpline: <strong>1800-180-1551</strong></span>
        </div>
        <a href="#/call" className="font-bold text-brand-700 hover:underline">
          Speak with AI Voice Doctor →
        </a>
      </div>
    </div>
  )
}
