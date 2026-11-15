export const dynamic = 'force-dynamic'

import { client } from '@/lib/sanity'
import ResourcesClient from './ResourcesClient'

async function getResources() {
  try {
    return await client.fetch(`
      *[_type == "resource" && status == "published" && !(_id in path("drafts.**"))] | order(_createdAt desc) {
        _id, title, slug, resourceType, description, intendedUse, fileType,
        "fileUrl": file.asset->url, externalDestination, accessTerms, version, publicationDate
      }
    `)
  } catch {
    return []
  }
}

export default async function ResourcesPage() {
  const resources = await getResources()

  return (
    <div className="space-y-10 py-6">
      {/* Header */}
      <div className="border-b border-gray-200 pb-8">
        <span className="text-xs font-bold font-mono text-[#0e2145] uppercase tracking-widest block mb-2">
          Practical Resources
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Free Resources
        </h1>
        <p className="text-gray-600 text-base max-w-2xl leading-relaxed">
          Practical resources made available to Shopping Centre Managers without charge.
        </p>
      </div>

      <ResourcesClient resources={resources} />
    </div>
  )
}
