export const dynamic = 'force-dynamic'

import { client } from '@/lib/sanity'
import { PortableText } from '@portabletext/react'
import { ArrowLeft } from 'lucide-react'

async function getArticle(slug: string) {
  try {
    return await client.fetch(`
      *[_type == "article" && slug.current == $slug && status == "published"][0] {
        title, author, publishedAt, summary, body, topics
      }
    `, { slug })
  } catch {
    return null
  }
}

export default async function ArticlePage({
  params,
}: {
  params: { slug: string }
}) {
  const article = await getArticle(params.slug)

  if (!article) {
    return (
      <div className="text-center py-24 space-y-4">
        <h1 className="font-serif text-2xl font-bold text-gray-800">Article not found</h1>
        <p className="text-gray-500 text-sm">The requested article is either unavailable or has not been published.</p>
        <a href="/articles" className="text-[#0e2145] text-sm font-semibold inline-block hover:underline">
          ← Back to Articles
        </a>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto space-y-8 py-6">
      <a href="/articles" className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-[#0e2145] transition-colors font-medium">
        <ArrowLeft className="h-4 w-4" /> Back to Articles
      </a>
      <div className="space-y-4">
        {article.topics && article.topics.length > 0 && (
          <span className="inline-block bg-gray-100 text-gray-600 text-[11px] font-mono font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded">
            {article.topics.join(' • ')}
          </span>
        )}
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">{article.title}</h1>
        <div className="flex items-center gap-3 text-xs text-gray-500 font-mono border-b border-gray-100 pb-4">
          <span>By {article.author || 'Johan Olwage'}</span>
          {article.publishedAt && (
            <>
              <span>•</span>
              <span>{new Date(article.publishedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
            </>
          )}
        </div>
      </div>

      {article.summary && (
        <p className="text-lg text-gray-700 font-medium leading-relaxed italic bg-gray-50 p-4 rounded-lg border-l-4 border-[#0e2145]">
          {article.summary}
        </p>
      )}

      <div className="prose prose-gray prose-lg max-w-none prose-headings:font-serif prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed">
        {article.body ? (
          <PortableText value={article.body} />
        ) : (
          <p className="text-gray-500 italic">Article body is empty.</p>
        )}
      </div>
    </div>
  )
}
