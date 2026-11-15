import { BookOpen, ExternalLink } from 'lucide-react'
import { books, type Book } from '@/lib/books'

export const metadata = {
  title: 'Books & Publications | UsefulMall',
  description:
    'Books and publications that can help Shopping Centre Managers understand and develop their profession.',
}

function Cover({ book, className = '' }: { book: Book; className?: string }) {
  if (!book.cover) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-gray-100 border border-gray-200 text-gray-400 ${className}`}
        aria-label={book.coverAlt}
      >
        <BookOpen className="h-8 w-8 stroke-1 mb-2" />
        <span className="text-[11px] font-mono uppercase tracking-wider">Cover coming soon</span>
      </div>
    )
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={book.cover}
      alt={book.coverAlt}
      className={`object-contain bg-gray-50 border border-gray-200 shadow-sm ${className}`}
    />
  )
}

function Meta({ book }: { book: Book }) {
  const line = [book.publisher, book.year].filter(Boolean).join(' • ')
  if (!line) return null
  return <p className="text-xs text-gray-400 font-mono">{line}</p>
}

export default function BooksPage() {
  const featured = books.find((b) => b.featured)
  const others = books.filter((b) => !b.featured)

  return (
    <div className="space-y-12 py-6">
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

      {/* Featured book */}
      {featured && (
        <section aria-labelledby="featured-book" className="rounded-2xl bg-[#0e2145] text-white p-6 sm:p-10">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start">
            <Cover
              book={featured}
              className="w-48 sm:w-56 h-auto aspect-square rounded-lg shrink-0 !bg-white !border-white/20"
            />
            <div className="space-y-5 text-center md:text-left">
              <span className="inline-block bg-[#F0BE35] text-[#0e2145] text-[11px] font-bold px-3 py-1 rounded-full font-mono uppercase tracking-wider">
                Featured Publication
              </span>
              <div>
                <h2 id="featured-book" className="font-serif text-2xl sm:text-3xl font-bold leading-snug">
                  {featured.title}
                </h2>
                <p className="text-white/80 mt-2 font-medium">By {featured.author}</p>
              </div>
              <p className="text-white/80 leading-relaxed max-w-2xl">{featured.description}</p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start pt-1">
                {featured.links.map((link, i) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={
                      i === 0
                        ? 'inline-flex flex-col items-start rounded-lg bg-[#F0BE35] px-5 py-3 text-[#0e2145] font-bold hover:brightness-95 transition'
                        : 'inline-flex flex-col items-start rounded-lg border border-white/30 px-5 py-3 text-white font-semibold hover:bg-white/10 transition'
                    }
                  >
                    <span className="inline-flex items-center gap-2 text-sm">
                      {link.label} <ExternalLink className="h-3.5 w-3.5" />
                    </span>
                    {link.market && <span className="text-[11px] opacity-70 font-normal">{link.market}</span>}
                  </a>
                ))}
              </div>
              <Meta book={featured} />
            </div>
          </div>
        </section>
      )}

      {/* Other books */}
      <section aria-labelledby="more-books" className="space-y-6">
        <h2 id="more-books" className="font-serif text-2xl font-bold text-gray-900">
          Further Reading
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {others.map((book) => (
            <article
              key={book.id}
              className="bg-white rounded-xl border border-gray-200 p-5 flex gap-5"
            >
              <Cover book={book} className="w-24 sm:w-28 h-36 sm:h-40 rounded shrink-0" />
              <div className="flex flex-col justify-between min-w-0 space-y-3">
                <div className="space-y-2">
                  <h3 className="font-serif text-lg font-bold text-gray-900 leading-snug">{book.title}</h3>
                  <p className="text-sm font-medium text-gray-600">By {book.author}</p>
                  <Meta book={book} />
                  <p className="text-sm text-gray-700 leading-relaxed">{book.description}</p>
                </div>
                <div className="pt-2 border-t border-gray-100 flex flex-wrap gap-x-4 gap-y-1">
                  {book.links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0e2145] hover:underline"
                    >
                      {link.label} <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
