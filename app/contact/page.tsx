import { Mail } from 'lucide-react'

export default function ContactPage() {
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
            <p className="text-xs text-gray-500 font-mono">UsefulMall Editorial & Management</p>
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
    </div>
  )
}
