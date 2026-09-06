import React, { useEffect } from 'react'
import { Leaf, Mail, Lock, ArrowRight } from 'lucide-react'
import useReveal from '../hooks/useReveal'

export default function Login() {
  useReveal()
  
  useEffect(() => {
    if (localStorage.getItem('userName')) {
      window.location.hash = '#/dashboard'
    }
  }, [])

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-brand-50 via-white to-emerald-50 flex items-center justify-center overflow-hidden px-4">
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
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Welcome Back</h1>
            <p className="text-slate-600 mt-2">Sign in to manage your farm smarter.</p>
          </div>

          <form className="space-y-5" onSubmit={(e) => { 
            e.preventDefault(); 
            const email = document.getElementById('login-email').value;
            if (email) {
              const namePart = email.split('@')[0];
              const name = namePart.charAt(0).toUpperCase() + namePart.slice(1);
              localStorage.setItem('userName', name);
            }
            window.location.hash = '#/dashboard';
          }}>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  id="login-email"
                  type="email"
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 bg-white/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all text-slate-900 placeholder:text-slate-400"
                  placeholder="ramesh@example.com"
                  required
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-semibold text-slate-700">Password</label>
                <a href="#" className="text-sm font-medium text-brand-600 hover:text-brand-700">Forgot password?</a>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  type="password"
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 bg-white/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all text-slate-900 placeholder:text-slate-400"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-slate-300 text-brand-600 focus:ring-brand-500"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-slate-600">
                Remember me for 30 days
              </label>
            </div>

            <button type="submit" className="w-full btn-primary justify-center text-lg py-3 mt-4">
              Sign In <ArrowRight className="w-5 h-5 ml-1" />
            </button>
          </form>
          
          <div className="mt-8 text-center text-sm text-slate-600">
            Don't have an account?{' '}
            <a href="#/register" className="font-semibold text-brand-600 hover:text-brand-700 transition-colors">
              Get Started
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
