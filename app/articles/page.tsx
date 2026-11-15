export const dynamic = 'force-dynamic'

import { client } from '@/lib/sanity'
import { ArrowRight, FileText } from 'lucide-react'

async function getArticles() {
  try {
    return await client.fetch(`
      *[_type == "article" && status == "published"] | order(publishedAt desc) {
        _id, title, author, slug, publishedAt, summary, topics
      }
    `)
  } catch {
    return []
  }
}

export default async function ArticlesPage() {
  const articles = await getArticles()

  return (
    <div className="space-y-10 py-6">
      {/* Header */}
      <div className="border-b border-gray-200 pb-8">
        <span className="text-xs font-bold font-mono text-[#0e2145] uppercase tracking-widest block mb-2">
          Practical Publications
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Articles
        </h1>
        <p className="text-gray-600 text-base max-w-2xl leading-relaxed">
          Practical thinking, experience and ideas about managing shopping centres.
        </p>
      </div>

      {/* Articles Listing */}
      {articles.length === 0 ? (
        <div className="bg-white rounded-xl border border-gray-200 p-8 sm:p-12 text-center max-w-xl mx-auto space-y-3">
          <FileText className="h-10 w-10 text-gray-400 mx-auto stroke-1" />
          <h2 className="font-serif text-lg font-bold text-gray-800">We are adding resources as they are reviewed</h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            Check back shortly for published articles.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article: any) => (
            <a
              key={article._id}
              href={`/articles/${article.slug?.current}`}
              className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col justify-between hover:border-gray-300 transition-colors group"
            >
              <div className="space-y-3">
                {article.topics && article.topics.length > 0 && (
                  <span className="inline-block bg-gray-100 text-gray-600 text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                    {article.topics[0]}
                  </span>
                )}
                <h2 className="font-serif font-bold text-gray-900 text-lg leading-snug group-hover:text-[#0e2145] transition-colors">
                  {article.title}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                  {article.summary}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400 font-mono">
                <span>
                  {article.publishedAt ? new Date(article.publishedAt).toLocaleDateString('en-GB', {
                    day: 'numeric', month: 'short', year: 'numeric'
                  }) : ''}
                </span>
                <span className="inline-flex items-center gap-1 text-[#0e2145] font-semibold text-sm group-hover:underline">
                  Read <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  )
}
