export const dynamic = 'force-dynamic'

import { client } from '@/lib/sanity'
import { ArrowRight } from 'lucide-react'

const categoryLabels: Record<string, string> = {
  operations: 'Operations',
  finance: 'Finance',
  leasing: 'Leasing',
  marketing: 'Marketing',
  facilities: 'Facilities',
  people: 'People Management',
  legal: 'Legal & Compliance',
  strategy: 'Strategy',
}

async function getArticles() {
  try {
    return await client.fetch(`
      *[_type == "article"] | order(publishedAt desc) {
        _id, title, slug, category, publishedAt, excerpt
      }
    `)
  } catch {
    return []
  }
}

export default async function ArticlesPage() {
  const articles = await getArticles()

  return (
    <div className="space-y-10">
      {/* Heading */}
      <div className="border-b border-gray-100 pb-8">
        <span className="text-xs font-bold font-mono text-blue-600 uppercase tracking-widest block mb-2">
          Practical Publications
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Operations & Management Articles
        </h1>
        <p className="text-gray-500 text-base max-w-2xl">
          Practical articles written by Johan Olwage, drawing on 30+ years of
          shopping centre management experience.
        </p>
      </div>

      {/* Articles grid or empty state */}
      {articles.length === 0 ? (
        <div className="text-center py-24 bg-white rounded-2xl border border-gray-200">
          <span className="text-4xl mb-4 block">📝</span>
          <h2 className="font-serif text-xl font-bold text-gray-700 mb-2">
            Articles coming soon
          </h2>
          <p className="text-gray-400 text-sm">
            Check back shortly — content is being prepared.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article: any) => (
            <a
              key={article._id}
              href={`/articles/${article.slug.current}`}
              className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group"
            >
              <div>
                <span className="inline-block bg-blue-50 text-[#1e4285] text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full mb-4 font-mono">
                  {categoryLabels[article.category] || article.category}
                </span>
                <h2 className="font-serif font-bold text-gray-900 text-base mb-2 leading-snug group-hover:text-[#1e4285] transition-colors">
                  {article.title}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs text-gray-400 font-mono">
                  {new Date(article.publishedAt).toLocaleDateString('en-ZA', {
                    year: 'numeric', month: 'short', day: 'numeric'
                  })}
                </span>
                <span className="inline-flex items-center gap-1 text-[#1e4285] font-semibold text-sm group-hover:underline">
                  Read more <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  )
}
