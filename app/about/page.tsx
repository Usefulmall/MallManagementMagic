import { BookOpen, ShieldCheck } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-10 py-6">
      {/* Header */}
      <div className="border-b border-gray-200 pb-8">
        <span className="text-xs font-bold font-mono text-[#0e2145] uppercase tracking-widest block mb-2">
          About
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          About Johan & UsefulMall
        </h1>
        <p className="text-gray-600 text-[#0e2145] text-lg font-medium leading-relaxed">
          Where Shopping Centre Managers Learn the Real Job
        </p>
      </div>

      {/* Main Narrative */}
      <div className="space-y-6 text-gray-700 leading-relaxed">
        <p>
          Managing a shopping centre is a complex, multi-faceted responsibility spanning commercial strategy, retail operations, facilities management, tenant relations, and financial performance. Yet, despite the scale of responsibility, very few shopping centre managers receive formal, structured training specifically tailored to the real work of centre management.
        </p>

        <p>
          UsefulMall was created by Johan Olwage to help bridge that gap. Drawing on decades of practical, hands-on experience in shopping centre management in South Africa and international markets, UsefulMall brings together credible, curated resources, publications, and practical tools to assist centre managers in doing their jobs with confidence and competence.
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 space-y-3 my-6">
          <div className="flex items-center gap-2 text-[#0e2145]">
            <ShieldCheck className="h-5 w-5" />
            <h2 className="font-serif text-lg font-bold">The Editorial Commitment</h2>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            UsefulMall operates as an independent resource centre dedicated strictly to practical utility and credibility. Every book, course, article, and resource listed on UsefulMall is selected because it delivers real value to professionals managing retail property.
          </p>
        </div>

        <h2 className="font-serif text-2xl font-bold text-gray-900 pt-2">Johan Olwage</h2>
        <p>
          Johan Olwage is an experienced shopping centre management practitioner and author. Throughout his career in retail property management, Johan has focused on standardising operational excellence, clarifying tenant-landlord dynamics, and documenting practical workflows that centre teams can apply from day one.
        </p>
        <p>
          His publication, <em>The Practical Guide to Shopping Centre Management</em>, distils hands-on lessons learned across shopping centre operations into an accessible reference for new and experienced managers alike.
        </p>
      </div>

      {/* Call to Action */}
      <div className="border-t border-gray-200 pt-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div>
          <h3 className="font-serif font-bold text-gray-900">Explore UsefulMall Resources</h3>
          <p className="text-sm text-gray-500">Discover curated books, courses, free tools and articles.</p>
        </div>
        <a
          href="/books"
          className="inline-flex items-center justify-center gap-2 bg-[#0e2145] hover:bg-[#1a3466] text-white font-semibold rounded-lg px-5 py-2.5 text-sm transition-colors whitespace-nowrap"
        >
          <BookOpen className="h-4 w-4" /> Browse Books
        </a>
      </div>
    </div>
  )
}
