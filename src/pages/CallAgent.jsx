import React, { useEffect, useMemo, useRef, useState } from 'react'
import {
  Phone, PhoneOff, Mic, MicOff, Volume2, Keyboard, Video,
  Sparkles, MessageSquare, ChevronLeft, Signal, Wifi, BatteryFull, Bot, User, Play
} from 'lucide-react'

// Scripted conversation modeled after the Kisan Alert flow
const SCRIPT = [
  { who: 'ai',     text: 'Namaste 🙏 Welcome to Kisan Alert. Aap kaunsi bhasha mein baat karna chahenge?' },
  { who: 'farmer', text: 'Hindi.' },
  { who: 'ai',     text: 'Theek hai. Aap kis district se hain?' },
  { who: 'farmer', text: 'Ujjain.' },
  { who: 'ai',     text: 'Kitne acre zameen hai aapke paas?' },
  { who: 'farmer', text: 'Teen acre.' },
  { who: 'ai',     text: 'Mitti kaunsi hai — kaali, laal ya doomat?' },
  { who: 'farmer', text: 'Kaali mitti.' },
  { who: 'ai',     text: 'Paani ki suvidha kaisi hai?' },
  { who: 'farmer', text: 'Madhyam.' },
  { who: 'ai',     text: 'Ek pal — main mausam aur AI check kar raha hoon...', thinking: true },
  { who: 'ai',     text: 'Aapke liye sabse behtar fasal hai Soybean 🌱. Anumaanit yield 20 quintal per acre. Poori jaankari SMS par bhej di gayi hai. Dhanyavaad!' },
]

const STATUSES = {
  idle:      { label: 'Tap to start call',       color: 'text-emerald-200' },
  connecting:{ label: 'Connecting…',              color: 'text-yellow-300' },
  ringing:   { label: 'Ringing…',                 color: 'text-emerald-200' },
  listening: { label: 'Listening',                color: 'text-emerald-300' },
  thinking:  { label: 'AI is thinking…',          color: 'text-yellow-200' },
  speaking:  { label: 'Speaking',                 color: 'text-white' },
  ended:     { label: 'Call ended',               color: 'text-red-300' },
}

const BACKEND = 'https://kisan-alert-backend-587f.onrender.com'

export default function CallAgent() {
  const [callState, setCallState] = useState('idle')
  const [step, setStep]           = useState(-1)
  const [transcript, setTranscript] = useState([])
  const [muted, setMuted] = useState(false)
  const [seconds, setSeconds] = useState(0)
  const [phone, setPhone] = useState('+91')
  const [callMode, setCallMode] = useState('demo') // 'demo' or 'real'
  const timerRef = useRef(null)
  const stepTimeout = useRef(null)
  const listRef = useRef(null)

  const startRealCall = async () => {
    if (!phone || phone.length < 10) { alert('Enter a valid phone number with country code'); return }
    setCallState('connecting'); setTranscript([]); setSeconds(0)
    try {
      const res = await fetch(`${BACKEND}/voice/start`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `to=${encodeURIComponent(phone)}`,
      })
      const data = await res.json()
      if (data.call_sid) {
        setCallState('ringing')
        setTranscript(t => [...t, { who: 'ai', text: `📞 Calling ${phone}... Please answer your phone.` }])
        setTimeout(() => setCallState('speaking'), 3000)
      } else {
        alert('Call failed: ' + JSON.stringify(data))
        setCallState('idle')
      }
    } catch (e) {
      alert('Backend unreachable. Using demo mode.')
      setCallState('idle')
    }
  }

  // Timer
  useEffect(() => {
    if (['connecting', 'ringing', 'listening', 'thinking', 'speaking'].includes(callState)) {
      timerRef.current = setInterval(() => setSeconds(s => s + 1), 1000)
    } else {
      clearInterval(timerRef.current)
    }
    return () => clearInterval(timerRef.current)
  }, [callState])

  // Auto-scroll transcript
  useEffect(() => {
    if (listRef.current) listRef.current.scrollTop = listRef.current.scrollHeight
  }, [transcript])

  const startCall = () => {
    setSeconds(0); setTranscript([]); setStep(-1)
    setCallState('connecting')
    setTimeout(() => setCallState('ringing'), 800)
    setTimeout(() => { setCallState('speaking'); setStep(0) }, 1900)
  }

  // Progress through script
  useEffect(() => {
    if (step < 0 || step >= SCRIPT.length) return
    const line = SCRIPT[step]
    const speakingWho = line.who
    const nextState = line.thinking ? 'thinking' : (speakingWho === 'ai' ? 'speaking' : 'listening')
    setCallState(nextState)

    // typing effect
    let i = 0
    const partial = { ...line, text: '' }
    setTranscript(t => [...t, partial])
    const type = setInterval(() => {
      i++
      setTranscript(t => {
        const cp = [...t]
        cp[cp.length - 1] = { ...line, text: line.text.slice(0, i) }
        return cp
      })
      if (i >= line.text.length) {
        clearInterval(type)
        const delay = line.thinking ? 1400 : Math.max(700, line.text.length * 22)
        stepTimeout.current = setTimeout(() => {
          if (step + 1 >= SCRIPT.length) {
            setCallState('ended')
          } else {
            setStep(step + 1)
          }
        }, delay)
      }
    }, 28)

    return () => { clearInterval(type); clearTimeout(stepTimeout.current) }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step])

  const endCall = () => {
    clearTimeout(stepTimeout.current)
    setCallState('ended')
  }
  const restart = () => {
    setCallState('idle'); setStep(-1); setTranscript([]); setSeconds(0)
  }

  const mmss = useMemo(() => {
    const m = String(Math.floor(seconds / 60)).padStart(2, '0')
    const s = String(seconds % 60).padStart(2, '0')
    return `${m}:${s}`
  }, [seconds])

  const active = ['connecting','ringing','listening','thinking','speaking'].includes(callState)
  const status = STATUSES[callState]

  return (
    <div className="min-h-screen w-full bg-slate-950 text-white overflow-hidden relative">
      {/* Ambient gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#134e3a_0%,#0b1b16_45%,#020617_100%)]" />
      <div className="pointer-events-none absolute -top-40 -left-40 w-[36rem] h-[36rem] rounded-full bg-brand-500/20 blur-[120px] animate-blob" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 w-[36rem] h-[36rem] rounded-full bg-emerald-400/20 blur-[120px] animate-blob" />

      <div className="relative min-h-screen grid lg:grid-cols-5 gap-6 p-4 md:p-6">
        {/* PHONE FRAME (WhatsApp-style call) */}
        <div className="lg:col-span-2 flex flex-col items-center gap-4">
          <PhoneFrame
            callState={callState}
            status={status}
            mmss={mmss}
            muted={muted}
            setMuted={setMuted}
            startCall={callMode === 'real' ? startRealCall : startCall}
            endCall={endCall}
            restart={restart}
          />
          {callState === 'idle' && (
            <div className="w-full max-w-[380px] bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-4 space-y-3">
              <div className="flex gap-2">
                <button onClick={() => setCallMode('demo')} className={`flex-1 py-2 rounded-lg text-xs font-bold transition ${callMode==='demo'?'bg-emerald-500 text-white':'bg-white/10 text-white/70'}`}>🎬 Demo</button>
                <button onClick={() => setCallMode('real')} className={`flex-1 py-2 rounded-lg text-xs font-bold transition ${callMode==='real'?'bg-emerald-500 text-white':'bg-white/10 text-white/70'}`}>📞 Real Call</button>
              </div>
              {callMode === 'real' && (
                <>
                  <input type="tel" value={phone} onChange={e=>setPhone(e.target.value)} placeholder="+919876543210" className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white text-sm focus:outline-none focus:border-emerald-400"/>
                  <p className="text-[10px] text-emerald-200/70 leading-relaxed">Enter your phone with country code. You must first verify it in Twilio Console (trial account requirement).</p>
                </>
              )}
            </div>
          )}
        </div>

        {/* SIDE PANEL — transcript + workflow */}
        <div className="lg:col-span-3 space-y-6">
          <TopHeader callState={callState} />
          <TranscriptPanel transcript={transcript} listRef={listRef} active={active} />
          <WorkflowStrip step={step} callState={callState} />
        </div>
      </div>
    </div>
  )
}

/* ---------- Phone Frame ---------- */

function PhoneFrame({ callState, status, mmss, muted, setMuted, startCall, endCall, restart }) {
  const isEnded = callState === 'ended'
  const isIdle  = callState === 'idle'
  const isSpeaking = callState === 'speaking'
  const isListening = callState === 'listening'
  const isThinking = callState === 'thinking'

  return (
    <div className="relative w-full max-w-[380px] mx-auto">
      {/* device shell */}
      <div className="relative rounded-[3rem] bg-gradient-to-b from-slate-900 to-black p-2 shadow-[0_30px_120px_-20px_rgba(46,160,92,0.55)] ring-1 ring-white/10">
        {/* screen */}
        <div className="relative rounded-[2.4rem] overflow-hidden aspect-[9/19.5] bg-[radial-gradient(ellipse_at_top,#1f8148_0%,#0b3d28_60%,#031b12_100%)]">
          {/* notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 mt-2 w-28 h-6 rounded-full bg-black/80 z-20 flex items-center justify-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <div className="w-1 h-1 rounded-full bg-slate-500" />
          </div>

          {/* status bar */}
          <div className="relative z-10 pt-2 px-6 flex items-center justify-between text-[11px] font-bold text-white/90">
            <span>9:41</span>
            <div className="flex items-center gap-1">
              <Signal className="w-3.5 h-3.5" />
              <Wifi className="w-3.5 h-3.5" />
              <BatteryFull className="w-4 h-4" />
            </div>
          </div>

          {/* header */}
          <div className="relative z-10 mt-6 px-6 flex items-center justify-between text-white/90">
            <button className="w-8 h-8 rounded-full grid place-items-center bg-white/10 hover:bg-white/20 transition">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="text-center">
              <div className="text-[11px] uppercase tracking-widest text-emerald-200/80 font-bold">Kisan Alert</div>
              <div className="text-xs text-white/70">End-to-end AI call</div>
            </div>
            <button className="w-8 h-8 rounded-full grid place-items-center bg-white/10 hover:bg-white/20 transition">
              <Video className="w-4 h-4" />
            </button>
          </div>

          {/* Avatar w/ pulsing rings */}
          <div className="relative z-10 mt-10 flex flex-col items-center">
            <div className="relative w-40 h-40 grid place-items-center">
              {(callState !== 'ended' && callState !== 'idle') && (
                <>
                  <span className="absolute inset-0 rounded-full bg-emerald-400/20 animate-ping" />
                  <span className="absolute inset-3 rounded-full bg-emerald-400/20 animate-ping [animation-delay:0.4s]" />
                  <span className="absolute inset-6 rounded-full bg-emerald-400/25 animate-ping [animation-delay:0.8s]" />
                </>
              )}
              <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-emerald-400 via-brand-500 to-brand-800 grid place-items-center shadow-2xl ring-4 ring-white/10">
                <Bot className={`w-14 h-14 text-white ${isSpeaking ? 'animate-pulse' : ''}`} />
                {isThinking && (
                  <div className="absolute -bottom-2 right-2 w-8 h-8 rounded-full bg-yellow-400 text-slate-900 grid place-items-center animate-bounce shadow-lg">
                    <Sparkles className="w-4 h-4" />
                  </div>
                )}
              </div>
            </div>

            <div className="mt-6 text-center">
              <div className="text-xl font-bold">Kisan AI Agent</div>
              <div className="text-xs text-white/70">+91 80000 12345 · Twilio</div>
              <div className={`mt-2 text-sm font-semibold ${status.color}`}>{status.label}</div>
              <div className="mt-1 text-3xl font-black tracking-widest tabular-nums text-white">
                {isIdle ? '00:00' : mmss}
              </div>
            </div>
          </div>

          {/* Waveform */}
          <div className="relative z-10 mt-6 px-6">
            <Waveform state={callState} muted={muted} />
          </div>

          {/* Bottom controls */}
          <div className="absolute bottom-0 inset-x-0 z-10 px-6 pb-8">
            {isIdle && (
              <button onClick={startCall}
                      className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-400 to-brand-600 font-bold text-lg shadow-2xl shadow-emerald-500/30 hover:brightness-110 transition inline-flex items-center justify-center gap-2">
                <Play className="w-5 h-5 fill-current" /> Start Simulated Call
              </button>
            )}

            {!isIdle && !isEnded && (
              <div className="grid grid-cols-4 gap-3 mb-4">
                <SmallBtn onClick={() => setMuted(m => !m)} active={muted} label={muted ? 'Unmute' : 'Mute'}>
                  {muted ? <MicOff className="w-5 h-5"/> : <Mic className="w-5 h-5"/>}
                </SmallBtn>
                <SmallBtn label="Speaker" active>
                  <Volume2 className="w-5 h-5"/>
                </SmallBtn>
                <SmallBtn label="Keypad">
                  <Keyboard className="w-5 h-5"/>
                </SmallBtn>
                <SmallBtn label="Chat">
                  <MessageSquare className="w-5 h-5"/>
                </SmallBtn>
              </div>
            )}

            {!isIdle && !isEnded && (
              <button onClick={endCall}
                      className="w-full py-4 rounded-full bg-gradient-to-b from-red-500 to-red-700 font-bold text-white shadow-2xl shadow-red-600/50 hover:brightness-110 transition inline-flex items-center justify-center gap-2">
                <PhoneOff className="w-5 h-5"/> End Call
              </button>
            )}

            {isEnded && (
              <button onClick={restart}
                      className="w-full py-4 rounded-2xl bg-white/10 border border-white/20 backdrop-blur font-bold text-white hover:bg-white/20 transition inline-flex items-center justify-center gap-2">
                <Phone className="w-5 h-5"/> Call Again
              </button>
            )}
          </div>
        </div>
      </div>
      {/* device shine */}
      <div className="pointer-events-none absolute inset-0 rounded-[3rem] ring-1 ring-white/10" />
    </div>
  )
}

function SmallBtn({ children, label, active, onClick }) {
  return (
    <button onClick={onClick}
      className={`flex flex-col items-center gap-1 py-3 rounded-2xl text-xs font-semibold transition
        ${active ? 'bg-white text-slate-900' : 'bg-white/10 text-white hover:bg-white/20'}`}>
      {children}
      <span>{label}</span>
    </button>
  )
}

/* ---------- Waveform ---------- */

function Waveform({ state, muted }) {
  const bars = 32
  const active = state === 'speaking' || state === 'listening'
  return (
    <div className="h-16 flex items-center justify-center gap-[3px]">
      {Array.from({ length: bars }).map((_, i) => {
        const h = active && !muted
          ? 20 + Math.abs(Math.sin((i + Date.now()/300) * 0.6)) * 40
          : 6
        return (
          <span key={i}
            className={`w-1.5 rounded-full transition-all duration-200 ${
              state === 'listening' ? 'bg-emerald-300' :
              state === 'speaking'  ? 'bg-white' :
              state === 'thinking'  ? 'bg-yellow-300/70' :
              'bg-white/30'
            }`}
            style={{
              height: `${h}px`,
              animation: active && !muted ? `pulse 1s ${i * 40}ms infinite ease-in-out` : 'none',
            }}
          />
        )
      })}
    </div>
  )
}

/* ---------- Side panel top header ---------- */

function TopHeader({ callState }) {
  return (
    <div className="flex items-center justify-between flex-wrap gap-3">
      <div>
        <a href="#/dashboard" className="text-xs text-emerald-300/80 hover:text-emerald-200 inline-flex items-center gap-1">
          <ChevronLeft className="w-3.5 h-3.5"/> Back to Dashboard
        </a>
        <h1 className="mt-1 text-2xl md:text-3xl font-black">
          AI <span className="bg-gradient-to-r from-emerald-300 to-brand-400 bg-clip-text text-transparent">Calling Agent</span>
        </h1>
        <p className="text-white/60 text-sm mt-1">Twilio → FastAPI → Gemini → Voice. Farmers get real conversations in their language.</p>
      </div>
      <div className="rounded-2xl px-4 py-3 bg-white/5 backdrop-blur border border-white/10 text-xs">
        <div className="text-white/60">Call session</div>
        <div className="font-bold">{callState === 'ended' ? 'Completed ✅' : 'Live'}</div>
      </div>
    </div>
  )
}

/* ---------- Transcript panel ---------- */

function TranscriptPanel({ transcript, listRef, active }) {
  return (
    <div className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-5 md:p-6 shadow-2xl">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-400 to-brand-600 grid place-items-center">
            <MessageSquare className="w-4 h-4 text-white"/>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-emerald-300 font-bold">Live Transcript</div>
            <div className="text-sm text-white/60">Real-time speech-to-text</div>
          </div>
        </div>
        {active && (
          <span className="inline-flex items-center gap-1.5 text-xs text-emerald-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"/> Live
          </span>
        )}
      </div>

      <div ref={listRef} className="h-[420px] overflow-y-auto pr-2 space-y-3 scroll-smooth">
        {transcript.length === 0 && (
          <div className="h-full flex flex-col items-center justify-center text-center text-white/60">
            <Mic className="w-10 h-10 mb-3 text-emerald-300/70"/>
            <p>The transcript will appear here as the AI and farmer speak.</p>
            <p className="text-xs mt-1">Tap <b>Start Simulated Call</b> on the phone.</p>
          </div>
        )}
        {transcript.map((m, i) => (
          <Bubble key={i} who={m.who} text={m.text} thinking={m.thinking}/>
        ))}
      </div>
    </div>
  )
}

function Bubble({ who, text, thinking }) {
  const isAI = who === 'ai'
  return (
    <div className={`flex items-end gap-2 ${isAI ? 'justify-start' : 'justify-end'} animate-fade-up`}>
      {isAI && (
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-brand-700 grid place-items-center shrink-0">
          <Bot className="w-4 h-4 text-white"/>
        </div>
      )}
      <div className={`max-w-[75%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed shadow-lg
        ${isAI
          ? 'bg-white/95 text-slate-900 rounded-bl-sm'
          : 'bg-gradient-to-br from-emerald-500 to-brand-700 text-white rounded-br-sm'}`}>
        <div className="text-[10px] uppercase font-bold tracking-widest opacity-70 mb-0.5">
          {isAI ? 'Kisan AI' : 'Farmer'}
        </div>
        <div className="whitespace-pre-wrap">
          {text}
          {thinking && <span className="ml-1 inline-flex gap-0.5">
            <Dot d={0}/><Dot d={150}/><Dot d={300}/>
          </span>}
        </div>
      </div>
      {!isAI && (
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 grid place-items-center shrink-0">
          <User className="w-4 h-4 text-white"/>
        </div>
      )}
    </div>
  )
}

function Dot({ d }) {
  return <span className="w-1.5 h-1.5 rounded-full bg-slate-500 animate-bounce" style={{ animationDelay: `${d}ms` }} />
}

/* ---------- Workflow strip ---------- */

const workflow = [
  { key: 'call',    label: 'Farmer Calls',   icon: Phone },
  { key: 'twilio',  label: 'Twilio',         icon: Signal },
  { key: 'stt',     label: 'Speech → Text',  icon: Mic },
  { key: 'gemini',  label: 'Gemini AI',      icon: Sparkles },
  { key: 'tts',     label: 'Text → Voice',   icon: Volume2 },
  { key: 'sms',     label: 'SMS Sent',       icon: MessageSquare },
]

function WorkflowStrip({ step, callState }) {
  // Highlight based on which stage we're in
  const activeIndex =
    callState === 'idle' ? -1 :
    callState === 'connecting' || callState === 'ringing' ? 1 :
    callState === 'listening' ? 2 :
    callState === 'thinking'  ? 3 :
    callState === 'speaking'  ? 4 :
    callState === 'ended'     ? 5 : 0

  return (
    <div className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-5 md:p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-xs uppercase tracking-widest text-emerald-300 font-bold">Backend Pipeline</div>
          <div className="text-sm text-white/70">Farmer → Twilio → FastAPI → Gemini → Voice + SMS</div>
        </div>
      </div>

      <div className="relative">
        <div className="absolute top-6 left-6 right-6 h-1 rounded-full bg-white/10">
          <div className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-brand-500 transition-all duration-700"
               style={{ width: `${Math.max(0, ((activeIndex + 1) / workflow.length) * 100)}%` }}/>
        </div>
        <ol className="relative grid grid-cols-6 gap-2">
          {workflow.map((s, i) => {
            const done = i <= activeIndex
            const now  = i === activeIndex
            return (
              <li key={s.key} className="flex flex-col items-center text-center">
                <div className={`relative w-12 h-12 rounded-2xl grid place-items-center border transition-all
                  ${done
                    ? 'bg-gradient-to-br from-emerald-400 to-brand-700 border-white/20 shadow-lg shadow-emerald-500/40'
                    : 'bg-white/5 border-white/10 text-white/50'}`}>
                  <s.icon className={`w-5 h-5 ${done ? 'text-white' : ''}`}/>
                  {now && <span className="absolute inset-0 rounded-2xl ring-2 ring-emerald-300 animate-ping"/>}
                </div>
                <div className={`mt-2 text-[10px] md:text-xs font-bold ${done ? 'text-white' : 'text-white/50'}`}>
                  {s.label}
                </div>
              </li>
            )
          })}
        </ol>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-3 text-xs">
        <InfoTile title="Language" value="Hindi · Auto-detect" tone="from-amber-400 to-orange-500"/>
        <InfoTile title="Latency"  value="~450ms end-to-end"    tone="from-emerald-400 to-brand-600"/>
        <InfoTile title="Fallback" value="SMS if no answer"     tone="from-sky-400 to-blue-600"/>
      </div>
    </div>
  )
}

function InfoTile({ title, value, tone }) {
  return (
    <div className="rounded-2xl p-3 bg-white/5 border border-white/10 flex items-center gap-3">
      <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${tone} grid place-items-center text-white`}>
        <Sparkles className="w-4 h-4"/>
      </div>
      <div>
        <div className="text-[10px] uppercase tracking-widest text-white/60 font-bold">{title}</div>
        <div className="text-sm font-bold text-white">{value}</div>
      </div>
    </div>
  )
}
