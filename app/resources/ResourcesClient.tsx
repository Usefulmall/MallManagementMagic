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
            const hasThumb = Boolean(resource.thumbnail)
            return (
              <div
                key={resource._id}
                className={`bg-white rounded-xl border border-gray-200 overflow-hidden flex flex-col ${
                  hasThumb ? 'md:col-span-2 lg:col-span-3 md:flex-row' : ''
                }`}
              >
                {hasThumb && (
                  <div className="md:w-1/2 bg-gray-100 border-b md:border-b-0 md:border-r border-gray-200 p-5 sm:p-8 flex items-center justify-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={resource.thumbnail}
                      alt={resource.thumbnailAlt || resource.title}
                      className="w-full h-auto max-w-xl bg-white shadow-lg ring-1 ring-black/10"
                    />
                  </div>
                )}

                <div
                  className={`p-6 sm:p-8 flex flex-col justify-between space-y-4 ${
                    hasThumb ? 'md:w-1/2' : 'flex-1'
                  }`}
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
                    <h3
                      className={`font-serif font-bold text-gray-900 leading-snug ${
                        hasThumb ? 'text-2xl sm:text-3xl' : 'text-lg'
                      }`}
                    >
                      {resource.title}
                    </h3>
                    <p className={`text-gray-600 leading-relaxed ${hasThumb ? 'text-base' : 'text-sm'}`}>
                      {resource.description}
                    </p>
                    {resource.intendedUse && (
                      <p className="text-xs text-gray-500 italic">
                        Intended use: {resource.intendedUse}
                      </p>
                    )}
                    {(resource.version || resource.publicationDate) && (
                      <p className="text-xs text-gray-400 font-mono">
                        {[resource.version, resource.publicationDate].filter(Boolean).join(' • ')}
                      </p>
                    )}
                    {resource.accessTerms && (
                      <p className="text-xs text-gray-500 font-mono">
                        Terms: {resource.accessTerms}
                      </p>
                    )}
                  </div>

                  {downloadOrDestination ? (
                    <a
                      href={downloadOrDestination}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-center inline-flex items-center justify-center gap-2 font-semibold py-2.5 rounded-lg transition-colors text-sm mt-4 ${
                        hasThumb
                          ? 'bg-[#0e2145] text-white hover:bg-[#16315f] md:self-start md:px-8'
                          : 'w-full border border-[#0e2145] text-[#0e2145] hover:bg-gray-50'
                      }`}
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
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
