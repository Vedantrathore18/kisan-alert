import React, { useEffect, useState } from 'react'
import { Sparkles, Scan, Activity, Cpu } from 'lucide-react'

const SCAN_STEPS = [
  '🍃 Leaf geometry & vein contour mapping...',
  '🔬 Detecting lesion pigmentation & chlorosis...',
  '🧬 Matching fungal & viral spore databases...',
  '💊 Formulating organic & chemical treatment plan...',
]

export default function ScanningAnimation({ duration = 2200 }) {
  const [stepIndex, setStepIndex] = useState(0)
  const [progress, setProgress] = useState(12)

  useEffect(() => {
    const stepInterval = setInterval(() => {
      setStepIndex((prev) => (prev < SCAN_STEPS.length - 1 ? prev + 1 : prev))
    }, duration / SCAN_STEPS.length)

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 98) return 98
        return prev + Math.floor(Math.random() * 8) + 4
      })
    }, 120)

    return () => {
      clearInterval(stepInterval)
      clearInterval(progressInterval)
    }
  }, [duration])

  return (
    <div className="absolute inset-0 z-20 pointer-events-none flex flex-col justify-between p-4 overflow-hidden rounded-2xl">
      {/* Neon Laser Scanning Bar */}
      <div className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-[0_0_15px_#10b981] animate-bounce duration-1000" />
      <div className="absolute inset-0 bg-emerald-500/10 mix-blend-screen animate-pulse" />

      {/* Target Reticle Corners */}
      <div className="flex justify-between items-start">
        <div className="w-8 h-8 border-t-2 border-l-2 border-emerald-400 rounded-tl-lg shadow-[0_0_8px_#34d399]" />
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur border border-emerald-500/40 text-[11px] font-mono text-emerald-400">
          <Activity className="w-3 h-3 animate-spin text-emerald-400" />
          <span>AI VISION ACTIVE</span>
        </div>
        <div className="w-8 h-8 border-t-2 border-r-2 border-emerald-400 rounded-tr-lg shadow-[0_0_8px_#34d399]" />
      </div>

      {/* Center Target Crosshairs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center">
        <div className="w-20 h-20 rounded-full border border-dashed border-emerald-400/60 animate-spin flex items-center justify-center">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
        </div>
        <div className="mt-3 px-3 py-1 rounded-lg bg-black/75 backdrop-blur text-emerald-300 font-mono text-xs font-bold shadow-lg">
          {progress}% SCANNED
        </div>
      </div>

      {/* Bottom Status Logs */}
      <div className="flex justify-between items-end">
        <div className="w-8 h-8 border-b-2 border-l-2 border-emerald-400 rounded-bl-lg shadow-[0_0_8px_#34d399]" />
        <div className="max-w-[80%] text-center px-3 py-1.5 rounded-xl bg-slate-950/90 backdrop-blur border border-emerald-500/30 shadow-xl">
          <div className="flex items-center justify-center gap-1.5 text-xs text-emerald-300 font-medium truncate">
            <Cpu className="w-3.5 h-3.5 text-emerald-400 shrink-0 animate-pulse" />
            <span className="truncate">{SCAN_STEPS[stepIndex]}</span>
          </div>
        </div>
        <div className="w-8 h-8 border-b-2 border-r-2 border-emerald-400 rounded-br-lg shadow-[0_0_8px_#34d399]" />
      </div>
    </div>
  )
}
