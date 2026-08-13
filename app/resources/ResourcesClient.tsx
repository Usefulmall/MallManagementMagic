'use client'

import { useState } from 'react'
import { Download } from 'lucide-react'

const categoryLabels: Record<string, string> = {
  all: 'All Resources',
  leasing: 'Leasing & Tenants',
  finance: 'Finance & Budgeting',
  operations: 'Operations & Maintenance',
  marketing: 'Marketing & Events',
  safety: 'Health, Safety & Compliance',
  people: 'People & HR',
  strategy: 'Strategy & Reporting',
}

const fileTypeBadge: Record<string, string> = {
  PDF: 'bg-red-50 text-red-600 border border-red-200',
  DOCX: 'bg-blue-50 text-blue-600 border border-blue-200',
  XLSX: 'bg-green-50 text-green-600 border border-green-200',
}

export default function ResourcesClient({ resources }: { resources: any[] }) {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = ['all', ...Array.from(
    new Set(resources.map((r) => r.category).filter(Boolean))
  )]

  const filtered = activeCategory === 'all'
    ? resources
    : resources.filter((r) => r.category === activeCategory)

  return (
    <div className="space-y-8">
      {/* Category filter */}
      {resources.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold font-mono uppercase tracking-wider transition-all ${
                activeCategory === cat
                  ? 'bg-[#0e2145] text-white'
                  : 'bg-white border border-gray-200 text-gray-500 hover:border-[#0e2145] hover:text-[#0e2145]'
              }`}
            >
              {categoryLabels[cat] || cat}
            </button>
          ))}
        </div>
      )}

      {/* Resource cards or empty state */}
      {filtered.length === 0 ? (
        <div className="text-center py-24 bg-white rounded-2xl border border-gray-200">
          <span className="text-4xl mb-4 block">📁</span>
          <h2 className="font-serif text-xl font-bold text-gray-700 mb-2">
            No resources yet
          </h2>
          <p className="text-gray-400 text-sm">
            Resources are being prepared and will appear here shortly.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((resource: any) => (
            <div
              key={resource._id}
              className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-gray-400 uppercase font-mono font-bold tracking-wider">
                    {categoryLabels[resource.category] || resource.category}
                  </span>
                  {resource.fileType && (
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ${fileTypeBadge[resource.fileType] || 'bg-gray-100 text-gray-600'}`}>
                      {resource.fileType}
                    </span>
                  )}
                </div>
                <h3 className="font-serif font-bold text-gray-900 text-base mb-2 leading-snug">
                  {resource.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {resource.description}
                </p>
              </div>
              {resource.fileUrl ? (
                <a
                  href={resource.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 w-full text-center inline-flex items-center justify-center gap-2 border border-[#1e4285] text-[#1e4285] hover:bg-blue-50 font-semibold py-2.5 rounded-lg transition-colors text-sm"
                >
                  <Download className="h-4 w-4" />
                  Download
                </a>
              ) : (
                <button
                  disabled
                  className="mt-5 w-full text-center inline-flex items-center justify-center gap-2 border border-gray-200 text-gray-400 font-semibold py-2.5 rounded-lg text-sm cursor-not-allowed"
                >
                  <Download className="h-4 w-4" />
                  Coming soon
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
