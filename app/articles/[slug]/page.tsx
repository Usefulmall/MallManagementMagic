export const dynamic = 'force-dynamic'

import { client } from '@/lib/sanity'
import { PortableText } from '@portabletext/react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const categoryLabels: Record<string, string> = {
  operations: 'Operations', finance: 'Finance', leasing: 'Leasing',
  marketing: 'Marketing', facilities: 'Facilities', people: 'People Management',
  legal: 'Legal & Compliance', strategy: 'Strategy',
}

async function getArticle(slug: string) {
  try {
    return await client.fetch(`
      *[_type == "article" && slug.current == $slug][0] {
        title, category, publishedAt, excerpt, body
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
      <div className="text-center py-24">
        <h1 className="font-serif text-2xl font-bold text-gray-700">Article not found</h1>
        <a href="/articles" className="text-[#1e4285] text-sm mt-4 inline-block hover:underline">
          ← Back to Articles
        </a>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <a href="/articles" className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-[#1e4285] transition-colors font-medium">
        <ArrowLeft className="h-4 w-4" /> Back to Articles
      </a>
      <div className="space-y-4">
        <span className="inline-block bg-blue-50 text-[#1e4285] text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full font-mono">
          {categoryLabels[article.category] || article.category}
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">{article.title}</h1>
        <div className="flex items-center gap-3 text-xs text-gray-400 font-mono">
          <span>{new Date(article.publishedAt).toLocaleDateString('en-ZA', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          <span>·</span>
          <span>Johan Olwage</span>
        </div>
      </div>
      <hr className="border-gray-200" />
      <div className="prose prose-gray prose-lg max-w-none prose-headings:font-serif prose-headings:text-gray-900 prose-p:text-gray-600 prose-p:leading-relaxed prose-a:text-[#1e4285]">
        {article.body ? (
          <PortableText value={article.body} />
        ) : (
          <p className="text-gray-500 italic">Article content coming soon.</p>
        )}
      </div>
      <hr className="border-gray-200" />
      <div className="bg-[#0e2145] rounded-xl p-6 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p className="font-serif font-bold text-lg">Looking for practical tools?</p>
          <p className="text-white/70 text-sm">Download free templates and checklists.</p>
        </div>
        <a href="/resources" className="inline-flex items-center gap-2 bg-[#F0BE35] hover:bg-[#d9a82e] text-[#0e2145] font-bold rounded-lg px-5 py-2.5 text-sm transition-colors whitespace-nowrap">
          Browse Free Resources <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  )
}
