export const dynamic = "force-dynamic";

import { client } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";

async function getArticle(slug: string) {
  try {
    return await client.fetch(
      `*[_type == "article" && slug.current == $slug][0] { title, category, excerpt, publishedAt, body }`,
      { slug }
    );
  } catch {
    return null;
  }
}

export default async function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const article = await getArticle(params.slug);

  if (!article) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-navy-dark font-serif font-bold text-3xl mb-4">Article Not Found</h1>
          <a href="/articles" className="text-gold hover:text-navy-dark font-semibold transition-colors">
            &larr; Back to Articles
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Article Header */}
      <section className="bg-navy-dark py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-[800px] mx-auto">
          {article.category && (
            <span className="bg-gold/20 text-gold rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider inline-block mb-4">
              {article.category}
            </span>
          )}
          <h1 className="text-white font-bold text-3xl md:text-4xl font-serif leading-snug mb-4">
            {article.title}
          </h1>
          {article.excerpt && (
            <p className="text-white/60 text-lg leading-relaxed">{article.excerpt}</p>
          )}
        </div>
      </section>

      {/* Article Body */}
      <section className="py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-[800px] mx-auto">
          {article.body ? (
            <div className="prose prose-lg max-w-none text-mid-grey leading-relaxed">
              <PortableText value={article.body} />
            </div>
          ) : (
            <p className="text-mid-grey">Content coming soon.</p>
          )}

          {/* CTA */}
          <div className="mt-16 p-8 bg-light-grey rounded-lg border border-border-grey text-center">
            <h3 className="text-navy-dark font-serif font-bold text-xl mb-3">
              Explore Free Resources
            </h3>
            <p className="text-mid-grey text-sm mb-6">
              Download practical templates, checklists and documents for shopping centre professionals.
            </p>
            <a
              href="/resources"
              className="bg-gold hover:bg-gold/90 text-navy-dark font-bold px-6 py-3 rounded-lg transition-colors uppercase tracking-wider text-sm inline-block"
            >
              Browse Resources
            </a>
          </div>

          <div className="mt-8 text-center">
            <a href="/articles" className="text-gold hover:text-navy-dark font-semibold text-sm transition-colors">
              &larr; Back to All Articles
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
