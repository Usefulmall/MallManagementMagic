'use client'

import { useState } from 'react'
import { Mail, Send } from 'lucide-react'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', subject: '', message: '' })
      } else {
        const data = await res.json()
        setErrorMsg(data.error || 'Something went wrong. Please try again.')
        setStatus('error')
      }
    } catch {
      setErrorMsg('Could not send your message. Please check your connection and try again.')
      setStatus('error')
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
          Have a question, suggested resource, or feedback? Reach out directly to the UsefulMall editorial team.
        </p>
      </div>

      {/* Direct Email Contact Box */}
      <div className="bg-white rounded-xl border border-gray-200 p-8 space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-blue-50 text-[#0e2145] rounded-lg">
            <Mail className="h-6 w-6" />
          </div>
          <div>
            <h2 className="font-serif text-xl font-bold text-gray-900">Direct Email</h2>
            <p className="text-xs text-gray-500 font-mono">UsefulMall Editorial &amp; Management</p>
          </div>
        </div>

        <p className="text-gray-600 text-sm leading-relaxed">
          You can write to us directly at any time. We welcome feedback, editorial suggestions, and inquiries regarding shopping centre management resources.
        </p>

        <div className="pt-2">
          <a
            href="mailto:boss@usefulmall.com"
            className="inline-flex items-center gap-2 bg-[#0e2145] hover:bg-[#1a3466] text-white font-semibold rounded-lg px-6 py-3 text-sm transition-colors"
          >
            <Mail className="h-4 w-4" />
            boss@usefulmall.com
          </a>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white rounded-xl border border-gray-200 p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 bg-blue-50 text-[#0e2145] rounded-lg">
            <Send className="h-6 w-6" />
          </div>
          <div>
            <h2 className="font-serif text-xl font-bold text-gray-900">Send a Message</h2>
            <p className="text-xs text-gray-500 font-mono">We&apos;ll reply to your email address</p>
          </div>
        </div>

        {status === 'success' ? (
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-serif font-bold text-gray-900 text-lg mb-2">Message Sent</h3>
            <p className="text-gray-600 text-sm mb-4">Thank you for reaching out. We will get back to you as soon as possible.</p>
            <button
              onClick={() => setStatus('idle')}
              className="text-[#0e2145] hover:underline font-semibold text-sm"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Your Name <span className="text-[#F0BE35]">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="e.g. Sarah Jenkins"
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#0e2145] focus:ring-1 focus:ring-[#0e2145] transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Your Email <span className="text-[#F0BE35]">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="e.g. sarah@company.co.za"
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#0e2145] focus:ring-1 focus:ring-[#0e2145] transition-colors"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-1.5">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                value={form.subject}
                onChange={handleChange}
                placeholder="e.g. Question about the book"
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#0e2145] focus:ring-1 focus:ring-[#0e2145] transition-colors"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1.5">
                Message <span className="text-[#F0BE35]">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Your message here..."
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#0e2145] focus:ring-1 focus:ring-[#0e2145] transition-colors resize-none"
              />
            </div>

            {status === 'error' && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700 text-sm">
                {errorMsg}
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              className="inline-flex items-center gap-2 bg-[#0e2145] hover:bg-[#1a3466] disabled:opacity-60 text-white font-semibold rounded-lg px-8 py-3 text-sm transition-colors"
            >
              <Send className="h-4 w-4" />
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
