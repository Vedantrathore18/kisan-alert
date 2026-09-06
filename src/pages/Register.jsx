import React, { useState } from 'react'
import { Leaf, Mail, Lock, ArrowRight, User, Phone } from 'lucide-react'
import useReveal from '../hooks/useReveal'
import { auth, db } from '../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import { useAuth } from '../context/AuthContext'

export default function Register() {
  useReveal()
  const { currentUser } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  
  // Auto-redirect if already logged in via Firebase
  React.useEffect(() => {
    if (currentUser) {
      window.location.hash = '#/dashboard'
    }
  }, [currentUser])

  const handleRegister = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    const name = document.getElementById('register-name').value
    const phone = document.getElementById('register-phone').value
    const email = document.getElementById('register-email').value
    const password = document.getElementById('register-password').value

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      const user = userCredential.user
      
      // Save extra details in Firestore
      await setDoc(doc(db, 'users', user.uid), {
        name,
        phone,
        email,
        createdAt: new Date()
      })

      window.location.hash = '#/dashboard'
    } catch (err) {
      console.error(err)
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-brand-50 via-white to-emerald-50 flex items-center justify-center overflow-hidden px-4 py-12">
      {/* decorative blobs */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 rounded-full bg-brand-300/40 blur-3xl animate-blob" />
      <div className="pointer-events-none absolute top-1/3 -right-32 w-96 h-96 rounded-full bg-emerald-200/50 blur-3xl animate-blob" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 w-96 h-96 rounded-full bg-lime-200/40 blur-3xl animate-blob" />

      <div className="w-full max-w-md reveal z-10">
        <div className="glass rounded-3xl p-8 md:p-10 shadow-2xl">
          <div className="text-center mb-8">
            <a href="#home" className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 shadow-lg mb-4 hover:scale-105 transition">
              <Leaf className="w-8 h-8 text-white" />
            </a>
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Create Account</h1>
            <p className="text-slate-600 mt-2">Join Kisan Alert to grow smarter.</p>
          </div>

          {error && <div className="mb-4 p-3 rounded-lg bg-red-100 text-red-700 text-sm font-medium">{error}</div>}

          <form className="space-y-4" onSubmit={handleRegister}>
            
            {/* Full Name */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">Full Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  id="register-name"
                  type="text"
                  className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all text-slate-900 placeholder:text-slate-400"
                  placeholder="Ramesh Kumar"
                  required
                />
              </div>
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">Phone Number</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Phone className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  id="register-phone"
                  type="tel"
                  className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all text-slate-900 placeholder:text-slate-400"
                  placeholder="+91 98765 43210"
                  required
                />
              </div>
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  id="register-email"
                  type="email"
                  className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all text-slate-900 placeholder:text-slate-400"
                  placeholder="ramesh@example.com"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  id="register-password"
                  type="password"
                  className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all text-slate-900 placeholder:text-slate-400"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <button type="submit" disabled={loading} className="w-full btn-primary justify-center text-lg py-3 mt-6 disabled:opacity-70 disabled:cursor-not-allowed">
              {loading ? 'Creating...' : 'Create Account'} <ArrowRight className="w-5 h-5 ml-1" />
            </button>
          </form>
          
          <div className="mt-6 text-center text-sm text-slate-600">
            Already have an account?{' '}
            <a href="#/login" className="font-semibold text-brand-600 hover:text-brand-700 transition-colors">
              Sign In
            </a>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <a href="#home" className="text-sm text-slate-500 hover:text-slate-700 transition-colors">
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  )
}
