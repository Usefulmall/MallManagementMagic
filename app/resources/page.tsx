export const dynamic = 'force-dynamic'

import { client } from '@/lib/sanity'
import ResourcesClient from './ResourcesClient'

async function getResources() {
  try {
    return await client.fetch(`
      *[_type == "resource"] | order(_createdAt desc) {
        _id, title, slug, description, category, fileType,
        "fileUrl": file.asset->url
      }
    `)
  } catch {
    return []
  }
}

export default async function ResourcesPage() {
  const resources = await getResources()

  return (
    <div className="space-y-10">
      {/* Heading */}
      <div className="border-b border-gray-100 pb-8">
        <span className="text-xs font-bold font-mono text-blue-600 uppercase tracking-widest block mb-2">
          Instant Toolkit
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Free Checklists & Templates
        </h1>
        <p className="text-gray-500 text-base max-w-2xl">
          Download and use immediately. No login required. Built for shopping
          centre managers who need practical tools, not theory.
        </p>
      </div>

      <ResourcesClient resources={resources} />
    </div>
  )
}
