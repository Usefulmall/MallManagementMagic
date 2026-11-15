export const dynamic = "force-dynamic";

import { client } from "@/lib/sanity";

async function getArticles() {
  try {
    return await client.fetch(
      `*[_type == "article"] | order(publishedAt desc) { title, slug, category, excerpt, publishedAt }`
    );
  } catch {
    return [];
  }
}

export default async function ArticlesPage() {
  const articles = await getArticles();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-navy-dark py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1200px] mx-auto">
          <span className="text-gold font-semibold text-xs uppercase tracking-widest block mb-3">
            Knowledge
          </span>
          <h1 className="text-white font-bold text-4xl md:text-5xl font-serif mb-4">Articles</h1>
          <p className="text-white/60 text-lg max-w-[600px]">
            Practical articles on operations, leasing, financial management, and leadership — written for shopping centre professionals.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1200px] mx-auto">
          {articles.length === 0 ? (
            <div className="text-center py-24">
              <div className="w-16 h-1 bg-gold mx-auto mb-6 rounded-full"></div>
              <h2 className="text-navy-dark font-serif font-bold text-2xl mb-3">Articles Coming Soon</h2>
              <p className="text-mid-grey max-w-md mx-auto">
                Content is being added to the platform. Check back soon for in-depth articles on shopping centre management.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article: { title: string; slug: { current: string }; category: string; excerpt: string; publishedAt: string }) => (
                <a
                  key={article.slug.current}
                  href={`/articles/${article.slug.current}`}
                  className="bg-light-grey rounded-lg p-6 border border-border-grey hover:shadow-md transition-shadow flex flex-col"
                >
                  {article.category && (
                    <span className="bg-gold/10 text-gold rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider self-start mb-4">
                      {article.category}
                    </span>
                  )}
                  <h2 className="text-navy-dark font-bold text-lg font-serif mb-3 leading-snug flex-1">
                    {article.title}
                  </h2>
                  {article.excerpt && (
                    <p className="text-mid-grey text-sm mb-4 leading-relaxed">
                      {article.excerpt}
                    </p>
                  )}
                  <span className="text-gold font-semibold text-sm">Read more &rarr;</span>
                </a>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
