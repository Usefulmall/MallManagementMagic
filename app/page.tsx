import { Sparkles, Download, BookOpen, FileText, ArrowRight } from "lucide-react";
import Logo from "@/components/Logo";

const resources = [
  {
    id: "lease-application-form",
    title: "Lease Application Form",
    description: "A comprehensive tenant lease application form covering all essential information required to evaluate prospective tenants, including trading history, financial references, and fit-out intentions.",
    category: "Templates",
    fileType: "DOCX",
  },
  {
    id: "marketing-plan-template",
    title: "Shopping Centre Marketing Plan Template",
    description: "A structured annual marketing plan template covering campaign calendars, footfall targets, event planning, digital strategy, and budget allocation across all marketing channels.",
    category: "Templates",
    fileType: "DOCX",
  },
  {
    id: "tenant-criteria-document",
    title: "Tenant Criteria Document",
    description: "A professional tenant criteria framework outlining the minimum trading requirements, financial benchmarks, and fit-out standards expected of tenants within your shopping centre.",
    category: "Guides",
    fileType: "PDF",
  },
];

const fileTypeBadge: Record<string, string> = {
  PDF: "bg-red-50 text-red-600 border border-red-200",
  DOCX: "bg-blue-50 text-blue-600 border border-blue-200",
  XLSX: "bg-green-50 text-green-600 border border-green-200",
};

export default function Home() {
  return (
    <div className="space-y-12 py-6">

      {/* HERO */}
      <section className="relative rounded-xl overflow-hidden bg-[#0e2145] text-white border border-blue-950/40 shadow-md">
        <div className="absolute right-0 top-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute left-1/4 bottom-0 w-48 h-48 bg-amber-400/5 rounded-full blur-2xl pointer-events-none" />

        <div className="px-6 py-10 md:py-14 lg:px-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
          {/* Logo column */}
          <div className="md:col-span-4 flex justify-center md:justify-start">
            <div className="w-full max-w-[240px]">
              <Logo variant="full" />
            </div>
          </div>

          {/* Content column */}
          <div className="md:col-span-8 space-y-4 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 text-white text-[11px] font-semibold px-2.5 py-0.5 rounded-full">
              <Sparkles className="h-3 w-3 text-[#F0BE35]" />
              UsefulMall Version 1.0 Live
            </div>
            <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight text-white uppercase">
              Where Shopping Centre Managers{" "}
              <span className="text-[#F0BE35]">Learn the Real Job</span>
            </h1>
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start pt-2">
              <a
                href="/articles"
                className="inline-flex items-center justify-center gap-2 bg-[#F0BE35] hover:bg-[#d9a82e] text-[#0e2145] font-bold rounded-lg px-6 py-3 text-sm transition-colors"
              >
                <FileText className="h-4 w-4" />
                Read Articles
              </a>
              <a
                href="/resources"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold rounded-lg px-6 py-3 text-sm transition-colors"
              >
                <Download className="h-4 w-4" />
                Free Resources
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* NARRATIVE */}
      <section className="bg-white border border-gray-150 rounded-2xl p-6 sm:p-10 relative overflow-hidden shadow-sm">
        <div className="absolute right-0 top-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="space-y-5 max-w-3xl">
          <p className="text-lg sm:text-xl font-bold text-[#1e4285] font-serif leading-relaxed">
            Most shopping centre managers begin their careers in retailing, leasing, finance, marketing or facilities management.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Very few receive practical guidance on what the job of managing a shopping centre really involves.
          </p>
          <p className="text-xl sm:text-2xl font-black text-[#0e2145] font-serif leading-relaxed">
            UsefulMall exists to bridge that gap.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Whether you are looking for books, courses, practical resources or professional articles, our mission is simple:
          </p>
          <p className="text-lg sm:text-xl font-extrabold text-[#1e4285] font-serif leading-relaxed">
            Help shopping centre managers perform their jobs with greater confidence and effectiveness.
          </p>
        </div>
      </section>

      {/* FEATURED ARTICLES */}
      <section className="space-y-6">
        <div className="border-b border-gray-100 pb-5">
          <span className="text-xs font-bold font-mono text-blue-600 uppercase tracking-widest block mb-1">
            Practical Publications
          </span>
          <div className="flex items-end justify-between">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900">
              Latest Articles
            </h2>
            <a
              href="/articles"
              className="text-sm text-[#1e4285] font-semibold hover:underline flex items-center gap-1"
            >
              View all <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((num) => (
            <div
              key={num}
              className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <span className="inline-block bg-blue-50 text-[#1e4285] text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full mb-4 font-mono">
                  Operations
                </span>
                <h3 className="font-serif font-bold text-gray-900 text-base mb-2 leading-snug">
                  Article title will appear here once published
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  A brief excerpt from the article will appear here. Articles are published via the content dashboard.
                </p>
              </div>
              <a
                href="/articles"
                className="mt-4 inline-flex items-center gap-1 text-[#1e4285] font-semibold text-sm hover:underline"
              >
                Read more <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* FREE RESOURCES */}
      <section className="space-y-6">
        <div className="border-b border-gray-100 pb-5">
          <span className="text-xs font-bold font-mono text-blue-600 uppercase tracking-widest block mb-1">
            Instant Toolkit
          </span>
          <div className="flex items-end justify-between">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900">
              Free Resources
            </h2>
            <a
              href="/resources"
              className="text-sm text-[#1e4285] font-semibold hover:underline flex items-center gap-1"
            >
              Browse all <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {resources.map((res) => (
            <div
              key={res.id}
              className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-gray-400 uppercase font-mono font-bold tracking-wider">
                    {res.category}
                  </span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ${fileTypeBadge[res.fileType]}`}>
                    {res.fileType}
                  </span>
                </div>
                <h3 className="font-serif font-bold text-gray-900 text-base mb-2 leading-snug">
                  {res.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {res.description}
                </p>
              </div>
              <a
                href="#"
                className="mt-5 w-full text-center inline-flex items-center justify-center gap-2 border border-[#1e4285] text-[#1e4285] hover:bg-blue-50 font-semibold py-2.5 rounded-lg transition-colors text-sm"
              >
                <Download className="h-4 w-4" />
                Download
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* THE BOOK */}
      <section className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Text */}
          <div className="p-8 sm:p-10 space-y-5 flex flex-col justify-center">
            <div>
              <span className="text-xs font-bold font-mono text-[#F0BE35] uppercase tracking-widest block mb-2">
                Cornerstone Resource
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0e2145] leading-tight">
                The Practical Guide to Shopping Centre Management
              </h2>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Written by Johan Olwage, with over 30 years of hands-on experience managing shopping centres across South Africa. This guide distils decades of practical knowledge into an actionable reference every centre manager can use from day one.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href="https://www.amazon.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#0e2145] hover:bg-[#1e4285] text-white font-semibold rounded-lg px-6 py-3 text-sm transition-colors"
              >
                <BookOpen className="h-4 w-4" />
                Buy on Amazon
              </a>
              <a
                href="https://www.takealot.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-[#0e2145] text-[#0e2145] hover:bg-blue-50 font-semibold rounded-lg px-6 py-3 text-sm transition-colors"
              >
                Buy on Takealot
              </a>
            </div>
          </div>

          {/* Book cover placeholder */}
          <div className="bg-[#0e2145] flex items-center justify-center p-12 min-h-[280px]">
            <div className="text-center space-y-3">
              <div className="w-32 h-44 mx-auto bg-[#1e4285] border-2 border-[#F0BE35]/30 rounded-lg shadow-xl flex flex-col items-center justify-center p-4">
                <div className="w-8 h-8 mb-3">
                  <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M120 100 Q145 110 160 111" stroke="#F0BE35" strokeWidth="14" strokeLinecap="round"/>
                    <path d="M155 60 Q175 85 180 105" stroke="#F0BE35" strokeWidth="16" strokeLinecap="round"/>
                    <path d="M200 35 L200 100" stroke="#F0BE35" strokeWidth="18" strokeLinecap="round"/>
                    <path d="M245 60 Q225 85 220 105" stroke="#F0BE35" strokeWidth="16" strokeLinecap="round"/>
                    <path d="M280 100 Q255 110 240 111" stroke="#F0BE35" strokeWidth="14" strokeLinecap="round"/>
                    <path d="M100 135 Q150 115 200 135 Q250 115 300 135" stroke="white" strokeWidth="12" strokeLinecap="round" fill="none"/>
                  </svg>
                </div>
                <span className="text-[#F0BE35] font-serif font-bold text-xs text-center leading-tight">
                  The Practical Guide
                </span>
                <span className="text-white/60 text-[8px] text-center mt-1">
                  Johan Olwage
                </span>
              </div>
              <p className="text-white/40 text-xs font-mono">Book cover coming soon</p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="space-y-6">
        <div className="text-center">
          <span className="text-xs font-bold font-mono text-blue-600 uppercase tracking-widest block mb-1">
            Industry Feedback
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900">
            What Professionals Say
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              quote: "Johan Olwage has consolidated 30 years of complex operational procedures and leasing rules into an absolute masterclass textbook guide.",
              name: "Michael du Toit",
              role: "Asset Manager, Retail Trust",
            },
            {
              quote: "The HVAC audit guides and the tenant fit-out guidelines have saved our engineering and operations team hundreds of hours in compliance.",
              name: "Sarah Jenkins",
              role: "Regional Developer",
            },
            {
              quote: "A refreshing and incredibly visual handbook that gets straight to the point of what it takes to protect shopping centre net operating income.",
              name: "Robert Naidoo",
              role: "Centre General Manager",
            },
          ].map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm flex flex-col justify-between"
            >
              <p className="text-gray-600 italic text-sm leading-relaxed mb-5">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <span className="block font-bold text-[#0e2145] text-sm">{t.name}</span>
                <span className="block text-xs text-gray-400 font-mono">{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
