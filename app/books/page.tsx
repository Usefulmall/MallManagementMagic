export const dynamic = 'force-dynamic'

import { client } from '@/lib/sanity'
import { BookOpen, ExternalLink } from 'lucide-react'

async function getBooks() {
  try {
    return await client.fetch(`
      *[_type == "book" && status == "published"] | order(isJohansBook desc, _createdAt desc) {
        _id, title, author, publisher, publicationYear, countryOrigin, shortDescription, whyItHelps, availabilityLink, category, isJohansBook,
        "coverUrl": coverImage.asset->url
      }
    `)
  } catch {
    return []
  }
}

export default async function BooksPage() {
  const books = await getBooks()

  return (
    <div className="space-y-10 py-6">
      {/* Header */}
      <div className="border-b border-gray-200 pb-8">
        <span className="text-xs font-bold font-mono text-[#0e2145] uppercase tracking-widest block mb-2">
          Curated Literature
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Books & Publications
        </h1>
        <p className="text-gray-600 text-base max-w-2xl leading-relaxed">
          Books and publications that can help Shopping Centre Managers understand and develop their profession.
        </p>
      </div>

      {/* Books Listing */}
      {books.length === 0 ? (
        <div className="bg-white rounded-xl border border-gray-200 p-8 sm:p-12 text-center max-w-xl mx-auto space-y-3">
          <BookOpen className="h-10 w-10 text-gray-400 mx-auto stroke-1" />
          <h2 className="font-serif text-lg font-bold text-gray-800">No books listed yet</h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            We are adding resources as they are reviewed.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {books.map((book: any) => (
            <div key={book._id} className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                {book.isJohansBook && (
                  <span className="inline-block bg-[#0e2145] text-white text-[11px] font-semibold px-2.5 py-0.5 rounded-full font-mono">
                    Featured Publication
                  </span>
                )}
                <div>
                  <h2 className="font-serif text-xl font-bold text-gray-900 leading-snug">{book.title}</h2>
                  <p className="text-sm font-medium text-gray-600 mt-1">By {book.author}</p>
                </div>
                {(book.publisher || book.publicationYear || book.countryOrigin) && (
                  <p className="text-xs text-gray-400 font-mono">
                    {[book.publisher, book.publicationYear, book.countryOrigin].filter(Boolean).join(' • ')}
                  </p>
                )}
                <div className="pt-2 space-y-2">
                  <p className="text-sm text-gray-700 leading-relaxed">{book.shortDescription}</p>
                  {book.whyItHelps && (
                    <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 mt-3">
                      <span className="block text-xs font-semibold text-gray-900 mb-1">Why it helps a manager:</span>
                      <p className="text-xs text-gray-600 leading-relaxed">{book.whyItHelps}</p>
                    </div>
                  )}
                </div>
              </div>

              {book.availabilityLink && (
                <div className="pt-4 border-t border-gray-100">
                  <a
                    href={book.availabilityLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#0e2145] hover:underline"
                  >
                    View Listing / Purchase <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
