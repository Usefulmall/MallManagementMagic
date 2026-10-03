'use client'

import { Download, ExternalLink, FileText } from 'lucide-react'

export default function ResourcesClient({ resources }: { resources: any[] }) {
  return (
    <div className="space-y-8">
      {resources.length === 0 ? (
        <div className="bg-white rounded-xl border border-gray-200 p-8 sm:p-12 text-center max-w-xl mx-auto space-y-3">
          <FileText className="h-10 w-10 text-gray-400 mx-auto stroke-1" />
          <h2 className="font-serif text-lg font-bold text-gray-800">No free resources available yet</h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            We are adding resources as they are reviewed.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource: any) => {
            const downloadOrDestination = resource.fileUrl || resource.externalDestination
            return (
              <div
                key={resource._id}
                className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    {resource.resourceType && (
                      <span className="text-[11px] font-mono font-semibold uppercase text-gray-500 bg-gray-100 px-2.5 py-0.5 rounded-full">
                        {resource.resourceType}
                      </span>
                    )}
                    {resource.fileType && (
                      <span className="text-[10px] font-mono font-bold uppercase text-[#0e2145] bg-blue-50 border border-blue-100 px-2 py-0.5 rounded">
                        {resource.fileType}
                      </span>
                    )}
                  </div>
                  <h3 className="font-serif font-bold text-gray-900 text-lg leading-snug">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {resource.description}
                  </p>
                  {resource.intendedUse && (
                    <p className="text-xs text-gray-500 italic">
                      Intended use: {resource.intendedUse}
                    </p>
                  )}
                  {resource.accessTerms && (
                    <p className="text-xs text-gray-400 font-mono">
                      {resource.accessTerms}
                    </p>
                  )}
                </div>

                {downloadOrDestination ? (
                  <a
                    href={downloadOrDestination}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center inline-flex items-center justify-center gap-2 border border-[#0e2145] text-[#0e2145] hover:bg-gray-50 font-semibold py-2 rounded-lg transition-colors text-sm mt-4"
                  >
                    {resource.fileUrl ? (
                      <>
                        <Download className="h-4 w-4" />
                        Download Resource
                      </>
                    ) : (
                      <>
                        <ExternalLink className="h-4 w-4" />
                        Access Resource
                      </>
                    )}
                  </a>
                ) : null}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
