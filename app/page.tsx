export const dynamic = 'force-dynamic'

import { BookOpen, GraduationCap, Download, FileText, ArrowRight } from "lucide-react";
import { client } from "@/lib/sanity";
import Logo from "@/components/Logo";

async function getData() {
  try {
    const [books, courses, resources, articles] = await Promise.all([
      client.fetch(`*[_type == "book" && status == "published"][0..2] { _id, title, author, shortDescription, availabilityLink, isJohansBook }`),
      client.fetch(`*[_type == "course" && status == "published"][0..2] { _id, courseName, provider, description, providerLink }`),
      client.fetch(`*[_type == "resource" && status == "published"][0..2] { _id, title, description, fileType, "fileUrl": file.asset->url, externalDestination }`),
      client.fetch(`*[_type == "article" && status == "published"] | order(publishedAt desc)[0..2] { _id, title, slug, summary }`),
    ])
    return {
      books: books || [],
      courses: courses || [],
      resources: resources || [],
      articles: articles || []
    }
  } catch {
    return { books: [], courses: [], resources: [], articles: [] }
  }
}

export default async function Home() {
  const { books, courses, resources, articles } = await getData()

  return (
    <div className="space-y-12 py-6">

      {/* HERO */}
      <section className="rounded-xl bg-[#0e2145] text-white p-8 sm:p-12 border border-blue-950">
        <div className="max-w-3xl space-y-6">
          <div className="w-48 mb-2">
            <Logo variant="full" />
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            Where Shopping Centre Managers Learn the Real Job
          </h1>
          <p className="text-gray-200 text-base sm:text-lg leading-relaxed">
            Managing a shopping centre is a complex job, but few managers are formally taught how to do it. UsefulMall brings together practical books, courses, free resources and articles to help Shopping Centre Managers learn the real job.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a href="/books" className="inline-flex items-center justify-center gap-2 bg-[#F0BE35] hover:bg-[#d9a82e] text-[#0e2145] font-bold rounded-lg px-5 py-2.5 text-sm transition-colors">
              <BookOpen className="h-4 w-4" /> Explore Books
            </a>
            <a href="/courses" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold rounded-lg px-5 py-2.5 text-sm transition-colors">
              <GraduationCap className="h-4 w-4" /> Find Courses
            </a>
            <a href="/resources" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold rounded-lg px-5 py-2.5 text-sm transition-colors">
              <Download className="h-4 w-4" /> Free Resources
            </a>
            <a href="/articles" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold rounded-lg px-5 py-2.5 text-sm transition-colors">
              <FileText className="h-4 w-4" /> Read Articles
            </a>
          </div>
        </div>
      </section>

      {/* FOUR ENTRY POINTS */}
      <section className="space-y-6">
        <div className="border-b border-gray-200 pb-4">
          <h2 className="font-serif text-2xl font-bold text-gray-900">Explore Content Pillars</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Books Pillar */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col justify-between space-y-4">
            <div>
              <div className="p-2.5 bg-blue-50 text-[#0e2145] rounded-lg w-fit mb-3">
                <BookOpen className="h-6 w-6" />
              </div>
              <h3 className="font-serif font-bold text-gray-900 text-lg mb-2">Books</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Books and publications that can help Shopping Centre Managers understand and develop their profession.
              </p>
            </div>
            <a href="/books" className="inline-flex items-center gap-1 text-[#0e2145] font-semibold text-sm hover:underline pt-2">
              Browse Books <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Courses Pillar */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col justify-between space-y-4">
            <div>
              <div className="p-2.5 bg-blue-50 text-[#0e2145] rounded-lg w-fit mb-3">
                <GraduationCap className="h-6 w-6" />
              </div>
              <h3 className="font-serif font-bold text-gray-900 text-lg mb-2">Courses</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Courses and learning opportunities relevant to shopping centre management, from online learning to formal education and professional development.
              </p>
            </div>
            <a href="/courses" className="inline-flex items-center gap-1 text-[#0e2145] font-semibold text-sm hover:underline pt-2">
              Browse Courses <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Free Resources Pillar */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col justify-between space-y-4">
            <div>
              <div className="p-2.5 bg-blue-50 text-[#0e2145] rounded-lg w-fit mb-3">
                <Download className="h-6 w-6" />
              </div>
              <h3 className="font-serif font-bold text-gray-900 text-lg mb-2">Free Resources</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Practical resources made available to Shopping Centre Managers without charge.
              </p>
            </div>
            <a href="/resources" className="inline-flex items-center gap-1 text-[#0e2145] font-semibold text-sm hover:underline pt-2">
              Browse Free Resources <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Articles Pillar */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col justify-between space-y-4">
            <div>
              <div className="p-2.5 bg-blue-50 text-[#0e2145] rounded-lg w-fit mb-3">
                <FileText className="h-6 w-6" />
              </div>
              <h3 className="font-serif font-bold text-gray-900 text-lg mb-2">Articles</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Practical thinking, experience and ideas about managing shopping centres.
              </p>
            </div>
            <a href="/articles" className="inline-flex items-center gap-1 text-[#0e2145] font-semibold text-sm hover:underline pt-2">
              Read Articles <ArrowRight className="h-4 w-4" />
            </a>
          </div>

        </div>
      </section>

      {/* FEATURED MATERIAL (ONLY WHEN PUBLISHED RECORDS EXIST) */}
      {(books.length > 0 || courses.length > 0 || resources.length > 0 || articles.length > 0) && (
        <section className="space-y-6 pt-4 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="font-serif text-2xl font-bold text-gray-900">Featured Publications & Resources</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {articles.map((art: any) => (
              <a key={art._id} href={`/articles/${art.slug?.current}`} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-gray-300 transition-colors block">
                <span className="text-xs font-mono font-semibold text-gray-500 uppercase tracking-wider block mb-2">Article</span>
                <h3 className="font-serif font-bold text-gray-900 text-lg mb-2">{art.title}</h3>
                <p className="text-gray-600 text-sm line-clamp-3">{art.summary}</p>
              </a>
            ))}
            {books.map((bk: any) => (
              <div key={bk._id} className="bg-white p-6 rounded-xl border border-gray-200 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono font-semibold text-gray-500 uppercase tracking-wider block mb-2">Book</span>
                  <h3 className="font-serif font-bold text-gray-900 text-lg mb-1">{bk.title}</h3>
                  <p className="text-xs text-gray-500 font-medium mb-3">By {bk.author}</p>
                  <p className="text-gray-600 text-sm">{bk.shortDescription}</p>
                </div>
                {bk.availabilityLink && (
                  <a href={bk.availabilityLink} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center text-sm font-semibold text-[#0e2145] hover:underline">
                    View Details & Purchasing <ArrowRight className="h-3.5 w-3.5 ml-1" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

    </div>
  )
}
