'use client'

import { useState, FormEvent } from 'react'
import { Mail, CheckCircle, AlertCircle, Send } from 'lucide-react'

export default function ContactPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    setErrorMessage('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      })

      if (res.ok) {
        setStatus('success')
        setName('')
        setEmail('')
        setMessage('')
      } else {
        const data = await res.json().catch(() => ({}))
        setStatus('error')
        setErrorMessage(data.error || 'Contact destination is not currently configured. Please try again later or reach out directly via email.')
      }
    } catch {
      setStatus('error')
      setErrorMessage('Contact destination is not currently configured. Please try again later or reach out directly via email.')
    }
  }

  return (
    <div className="max-w-2xl mx-auto space-y-10 py-6">
      {/* Header */}
      <div className="border-b border-gray-200 pb-8">
        <span className="text-xs font-bold font-mono text-[#0e2145] uppercase tracking-widest block mb-2">
          Get in touch
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Contact UsefulMall
        </h1>
        <p className="text-gray-600 text-base leading-relaxed">
          Have a question, suggested resource, or feedback? Send a message to the UsefulMall editorial team.
        </p>
      </div>

      {/* Direct email info */}
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Mail className="h-5 w-5 text-[#0e2145]" />
          <div>
            <span className="block text-xs font-mono text-gray-500 uppercase font-semibold">Direct Email</span>
            <a href="mailto:boss@usefulmall.com" className="text-sm font-semibold text-[#0e2145] hover:underline">
              boss@usefulmall.com
            </a>
          </div>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-gray-200 p-6 sm:p-8 space-y-6">
        <h2 className="font-serif text-xl font-bold text-gray-900 border-b border-gray-100 pb-3">Send a Message</h2>

        {status === 'success' && (
          <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-lg flex items-center gap-3 text-sm">
            <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0" />
            <p>Thank you for reaching out. Your message has been sent successfully.</p>
          </div>
        )}

        {status === 'error' && (
          <div className="bg-amber-50 border border-amber-200 text-amber-900 p-4 rounded-lg flex items-start gap-3 text-sm">
            <AlertCircle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold mb-1">Notice</p>
              <p>{errorMessage}</p>
            </div>
          </div>
        )}

        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-xs font-mono font-semibold text-gray-700 uppercase mb-1">
              Your Name
            </label>
            <input
              id="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0e2145] focus:border-transparent"
              placeholder="e.g. Jane Doe"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-mono font-semibold text-gray-700 uppercase mb-1">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0e2145] focus:border-transparent"
              placeholder="e.g. jane@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-mono font-semibold text-gray-700 uppercase mb-1">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0e2145] focus:border-transparent"
              placeholder="How can we help you?"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0e2145] hover:bg-[#1a3466] text-white font-semibold rounded-lg px-6 py-2.5 text-sm transition-colors disabled:opacity-50"
        >
          <Send className="h-4 w-4" />
          {status === 'submitting' ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  )
}
