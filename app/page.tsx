export const dynamic = "force-dynamic";

import { client } from "@/lib/sanity";

async function getArticles() {
  try {
    return await client.fetch(
      `*[_type == "article"] | order(publishedAt desc)[0...3] { title, slug, category, excerpt }`
    );
  } catch {
    return [];
  }
}

async function getResources() {
  try {
    return await client.fetch(
      `*[_type == "resource"][0...3] { title, description, category, fileType }`
    );
  } catch {
    return [];
  }
}

export default async function Home() {
  const [articles, resources] = await Promise.all([getArticles(), getResources()]);

  const displayArticles =
    articles.length > 0
      ? articles
      : [
          {
            title: "Understanding Net Operating Income in Shopping Centres",
            slug: { current: "#" },
            category: "Financial Management",
            excerpt:
              "NOI is the single most important metric in shopping centre management. Here is how to protect and grow it.",
          },
          {
            title: "The Essentials of Tenant Mix Strategy",
            slug: { current: "#" },
            category: "Leasing",
            excerpt:
              "A well-planned tenant mix drives foot traffic, increases dwell time, and strengthens your rental income.",
          },
          {
            title: "Daily Operations Checklist for Centre Managers",
            slug: { current: "#" },
            category: "Operations",
            excerpt:
              "The disciplines that separate high-performing centres from average ones begin with consistent daily routines.",
          },
        ];

  const displayResources =
    resources.length > 0
      ? resources
      : [
          {
            title: "Lease Application Form",
            description:
              "A professional template for capturing prospective tenant information and business details.",
            category: "Legal",
            fileType: "DOCX",
          },
          {
            title: "Shopping Centre Marketing Plan Template",
            description:
              "A structured annual marketing plan framework adapted for shopping centre environments.",
            category: "Marketing",
            fileType: "DOCX",
          },
          {
            title: "Tenant Criteria Document",
            description:
              "Define your centre's ideal tenant profile and leasing standards in this ready-to-use template.",
            category: "Leasing",
            fileType: "PDF",
          },
        ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* HERO */}
      <section className="bg-navy-dark py-24 md:py-32 px-6 md:px-12 lg:px-20 text-center">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-6">
            <span className="text-gold font-semibold text-xs uppercase tracking-widest">
              Professional Knowledge Platform
            </span>
          </div>
          <h1 className="text-white font-bold text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight mb-6 max-w-[900px] mx-auto leading-tight">
            Where Shopping Centre Managers Learn the Real Job
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-[600px] mx-auto mb-10 leading-relaxed">
            Practical knowledge, free resources, and professional guidance — built for the people who run shopping centres.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
            <a
              href="/articles"
              className="w-full sm:w-auto bg-gold hover:bg-gold/90 text-navy-dark font-bold rounded-lg px-8 py-3 transition-colors uppercase tracking-wider text-sm shadow-sm"
            >
              Read Articles
            </a>
            <a
              href="/resources"
              className="w-full sm:w-auto border-2 border-white/40 hover:border-gold text-white hover:text-gold font-semibold rounded-lg px-8 py-3 transition-colors uppercase tracking-wider text-sm"
            >
              Browse Resources
            </a>
          </div>
          <a href="/the-book" className="text-gold/80 hover:text-gold font-medium text-sm transition-colors">
            Learn about the book &rarr;
          </a>
        </div>
      </section>

      {/* NARRATIVE STRIP */}
      <section className="bg-light-grey border-y border-border-grey py-12 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1200px] mx-auto text-center">
          <p className="text-mid-grey text-lg leading-relaxed max-w-[800px] mx-auto">
            UsefulMall is built by a shopping centre professional for shopping centre professionals.
            Everything here is designed to answer one question:{" "}
            <em className="text-navy font-medium">
              how does this help a manager perform their job better?
            </em>
          </p>
        </div>
      </section>

      {/* FEATURED ARTICLES */}
      <section className="py-20 px-6 md:px-12 lg:px-20 max-w-[1200px] mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-navy-dark font-bold text-3xl font-serif mb-3">Latest Articles</h2>
          <div className="h-1 w-16 bg-gold mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {displayArticles.map((article: { title: string; slug: { current: string }; category: string; excerpt: string }, i: number) => (
            <div
              key={i}
              className="bg-light-grey rounded-lg p-6 shadow-sm border border-border-grey flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <div className="mb-4">
                  <span className="bg-gold/10 text-gold rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                    {article.category || "General"}
                  </span>
                </div>
                <h3 className="text-navy-dark font-bold text-lg font-serif mb-3 leading-snug">
                  {article.title}
                </h3>
                <p className="text-mid-grey text-sm mb-6 leading-relaxed">
                  {article.excerpt || "Read more about this topic in our articles section."}
                </p>
              </div>
              <a
                href={`/articles/${article.slug?.current || ""}`}
                className="text-gold hover:text-navy-dark font-semibold text-sm transition-colors"
              >
                Read more &rarr;
              </a>
            </div>
          ))}
        </div>
        <div className="text-center">
          <a
            href="/articles"
            className="inline-block border-2 border-navy text-navy hover:bg-navy hover:text-white font-semibold px-8 py-3 rounded-lg transition-colors uppercase tracking-wider text-sm"
          >
            View All Articles
          </a>
        </div>
      </section>

      {/* FREE RESOURCES */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-light-grey border-y border-border-grey w-full">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-navy-dark font-bold text-3xl font-serif mb-3">Free Resources</h2>
            <div className="h-1 w-16 bg-gold mx-auto rounded-full"></div>
            <p className="text-mid-grey mt-4 text-sm">
              Practical templates and documents you can use immediately.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {displayResources.map((resource: { title: string; description: string; category: string; fileType: string }, i: number) => (
              <div
                key={i}
                className="bg-white rounded-lg p-6 shadow-sm border border-border-grey flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs text-mid-grey uppercase font-bold tracking-wider">
                      {resource.category || "Template"}
                    </span>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase border ${
                        resource.fileType === "PDF"
                          ? "bg-red-50 text-red-600 border-red-200"
                          : resource.fileType === "XLSX"
                          ? "bg-green-50 text-green-700 border-green-200"
                          : "bg-blue-50 text-blue-700 border-blue-200"
                      }`}
                    >
                      {resource.fileType || "DOCX"}
                    </span>
                  </div>
                  <h3 className="text-navy-dark font-bold text-lg font-serif mb-3 leading-snug">
                    {resource.title}
                  </h3>
                  <p className="text-mid-grey text-sm mb-6 leading-relaxed">
                    {resource.description || "A professional resource for shopping centre managers."}
                  </p>
                </div>
                <a
                  href="/resources"
                  className="w-full text-center border border-navy text-navy hover:bg-navy hover:text-white font-semibold py-2.5 rounded-md transition-colors text-sm uppercase tracking-wider"
                >
                  Download
                </a>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a
              href="/resources"
              className="inline-block border-2 border-navy text-navy hover:bg-navy hover:text-white font-semibold px-8 py-3 rounded-lg transition-colors uppercase tracking-wider text-sm"
            >
              Browse All Resources
            </a>
          </div>
        </div>
      </section>

      {/* BOOK HIGHLIGHT */}
      <section className="py-20 px-6 md:px-12 lg:px-20 max-w-[1200px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-gold uppercase font-bold tracking-widest text-xs">The Book</span>
            <h2 className="text-navy-dark font-bold text-3xl md:text-4xl font-serif leading-tight">
              The Practical Guide to Shopping Centre Management
            </h2>
            <p className="text-mid-grey leading-relaxed">
              Written by veteran shopping centre professional Johan Olwage. Over 30 years of operational,
              financial, and strategic leasing expertise consolidated into an actionable, textbook-style playbook.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/the-book"
                className="bg-navy-dark hover:bg-navy text-white font-semibold text-center rounded-lg px-6 py-3 transition-colors uppercase tracking-wider text-sm shadow-sm"
              >
                Learn More
              </a>
              <a
                href="/the-book"
                className="border-2 border-gold text-gold hover:bg-gold hover:text-navy-dark font-semibold text-center rounded-lg px-6 py-3 transition-colors uppercase tracking-wider text-sm"
              >
                Where to Buy
              </a>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="w-full max-w-xs aspect-[3/4] bg-navy-dark rounded-lg shadow-xl flex items-center justify-center p-8 border border-gold/20">
              <div className="text-center">
                <div className="w-12 h-1 bg-gold mx-auto mb-4 rounded-full"></div>
                <span className="block text-white font-serif font-bold text-xl mb-2 leading-snug">
                  The Practical Guide to Shopping Centre Management
                </span>
                <div className="w-8 h-1 bg-gold/40 mx-auto mt-4 rounded-full"></div>
                <span className="block text-gold/70 text-xs mt-3 uppercase tracking-widest">Johan Olwage</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-light-grey border-t border-border-grey w-full">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-navy-dark font-bold text-3xl font-serif mb-3">What Professionals Say</h2>
            <div className="h-1 w-16 bg-gold mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Johan Olwage has consolidated 30 years of complex operational procedures and leasing rules into an absolute masterclass textbook guide.",
                name: "Michael du Toit",
                role: "Asset Manager, Retail Trust",
              },
              {
                quote:
                  "The HVAC audit guides and the tenant fit-out guidelines have saved our engineering and operations team hundreds of hours in compliance.",
                name: "Sarah Jenkins",
                role: "Regional Developer",
              },
              {
                quote:
                  "A refreshing and incredibly visual handbook that gets straight to the point of what it takes to protect shopping centre net operating income.",
                name: "Robert Naidoo",
                role: "Centre General Manager",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-lg p-6 shadow-sm border border-border-grey flex flex-col justify-between"
              >
                <p className="text-mid-grey italic text-sm mb-6 leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <span className="block font-bold text-navy-dark text-sm">{t.name}</span>
                  <span className="block text-xs text-mid-grey">{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
