import React, { useRef } from 'react'
import { Camera, Upload, Sparkles, Image as ImageIcon, CheckCircle, RefreshCw } from 'lucide-react'
import LeafVisual from './LeafVisual'
import { SAMPLE_DISEASES, CROPS_LIST } from './diseaseDatabase'

export default function ImageUploader({
  selectedSample,
  customImage,
  selectedCrop,
  isScanning,
  onSelectSample,
  onUploadImage,
  onSelectCrop,
  onStartScan,
  onClear
}) {
  const cameraInputRef = useRef(null)
  const fileInputRef = useRef(null)

  const handleFileChange = (e) => {
    const file = e.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (event) => {
      onUploadImage(event.target.result, file.name)
    }
    reader.readAsDataURL(file)
  }

  const hasSelection = Boolean(selectedSample || customImage)

  return (
    <div className="glass rounded-3xl p-6 md:p-7 space-y-6">
      {/* Title */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-brand-500 to-emerald-600 grid place-items-center text-white shadow-lg shadow-brand-600/30">
            <Camera className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-bold text-slate-900 text-base">Capture / Upload Leaf</h2>
            <p className="text-xs text-slate-500">पत्ती का फोटो लें या अपलोड करें</p>
          </div>
        </div>

        {hasSelection && !isScanning && (
          <button
            onClick={onClear}
            className="text-xs font-semibold text-slate-500 hover:text-red-500 transition"
          >
            Clear / नया चुनें
          </button>
        )}
      </div>

      {/* Crop Filter Dropdown */}
      <div>
        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
          Fasal Chunein (Crop Type)
        </label>
        <select
          value={selectedCrop}
          onChange={(e) => onSelectCrop(e.target.value)}
          disabled={isScanning}
          className="w-full px-4 py-3 rounded-xl bg-white/80 border border-slate-200 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-500/40 cursor-pointer"
        >
          {CROPS_LIST.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      {/* Main Upload / Camera Viewport */}
      <div className="relative">
        {hasSelection ? (
          <div className="relative group rounded-2xl overflow-hidden border-2 border-emerald-500/50 shadow-xl aspect-square max-h-[320px] w-full">
            <LeafVisual
              item={selectedSample}
              customImage={customImage}
              className="w-full h-full"
            />
            {/* Overlay tag */}
            <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/70 backdrop-blur text-emerald-300 text-xs font-bold flex items-center gap-1.5 border border-emerald-400/30">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>{selectedSample ? `${selectedSample.crop} (${selectedSample.cropHindi})` : 'Custom Upload'}</span>
            </div>
          </div>
        ) : (
          <div className="border-2 border-dashed border-emerald-400/60 rounded-2xl p-6 md:p-8 bg-emerald-50/40 text-center hover:bg-emerald-50/70 transition flex flex-col items-center justify-center min-h-[220px]">
            <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-700 grid place-items-center mb-3">
              <Camera className="w-7 h-7 animate-bounce" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm">
              Take a clear leaf photo or browse
            </h3>
            <p className="text-xs text-slate-500 mt-1 max-w-xs">
              रोग ग्रसित पत्ती की साफ फोटो लें ताकि AI सही बीमारी पहचान सके
            </p>

            {/* Upload Buttons */}
            <div className="mt-4 flex flex-wrap gap-2.5 justify-center">
              {/* Native Mobile Camera Capture */}
              <button
                type="button"
                onClick={() => cameraInputRef.current?.click()}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-brand-600 to-emerald-600 hover:from-brand-700 hover:to-emerald-700 text-white font-bold text-xs shadow-md shadow-brand-600/20 transition active:scale-95"
              >
                <Camera className="w-4 h-4" />
                <span>Camera se khinchein</span>
              </button>

              {/* Gallery / File Browse */}
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-200 hover:border-brand-400 text-slate-700 font-bold text-xs shadow-sm transition active:scale-95"
              >
                <Upload className="w-4 h-4 text-brand-600" />
                <span>Gallery se chunein</span>
              </button>
            </div>
          </div>
        )}

        {/* Hidden inputs for Camera and File upload */}
        <input
          ref={cameraInputRef}
          type="file"
          accept="image/*"
          capture="environment"
          onChange={handleFileChange}
          className="hidden"
        />
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />
      </div>

      {/* Quick Test Demo Samples (Kisan/User ke instant test ke liye) */}
      <div className="pt-2 border-t border-slate-100">
        <div className="flex items-center justify-between mb-3">
          <label className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-brand-600" />
            <span>Test with Samples (डेमो पत्तियां)</span>
          </label>
          <span className="text-[11px] text-slate-500 font-medium">1-Click Test</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {SAMPLE_DISEASES.map((sample) => {
            const isSelected = selectedSample?.id === sample.id
            return (
              <button
                key={sample.id}
                type="button"
                onClick={() => onSelectSample(sample)}
                disabled={isScanning}
                className={`p-2.5 rounded-xl text-left border transition flex items-center gap-2 ${
                  isSelected
                    ? 'bg-emerald-600 text-white border-emerald-600 shadow-md ring-2 ring-emerald-400/40'
                    : 'bg-white/80 hover:bg-white text-slate-700 border-slate-200 hover:border-brand-300'
                }`}
              >
                <span className="text-xl">{sample.icon}</span>
                <div className="min-w-0">
                  <div className={`text-xs font-bold truncate ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                    {sample.cropHindi}
                  </div>
                  <div className={`text-[10px] truncate ${isSelected ? 'text-emerald-100' : 'text-slate-500'}`}>
                    {sample.diseaseName}
                  </div>
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {/* Main Scan Action Button */}
      <div>
        <button
          type="button"
          onClick={onStartScan}
          disabled={!hasSelection || isScanning}
          className={`w-full py-4 px-6 rounded-2xl font-black text-sm flex items-center justify-center gap-2.5 transition shadow-xl ${
            !hasSelection
              ? 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none'
              : isScanning
              ? 'bg-emerald-700 text-white cursor-wait animate-pulse shadow-emerald-700/40'
              : 'bg-gradient-to-r from-brand-600 via-emerald-600 to-teal-600 hover:from-brand-500 hover:to-teal-500 text-white shadow-emerald-600/30 hover:scale-[1.01] active:scale-[0.99]'
          }`}
        >
          {isScanning ? (
            <>
              <RefreshCw className="w-5 h-5 animate-spin" />
              <span>Scanning leaf textures with AI...</span>
            </>
          ) : (
            <>
              <Sparkles className="w-5 h-5" />
              <span>⚡ Scan & Diagnose Crop (रोग की पहचान करें)</span>
            </>
          )}
        </button>
        {!hasSelection && (
          <p className="text-center text-xs text-slate-400 mt-2">
            Pehle koi photo upload karein ya upar diye gaye demo sample par click karein
          </p>
        )}
      </div>
    </div>
  )
}
