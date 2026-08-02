export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* SECTION A — HERO */}
      <section className="bg-light-blue py-24 md:py-32 px-6 md:px-12 lg:px-20 text-center">
        <div className="max-w-[1200px] mx-auto">
          <h1 className="text-navy font-bold text-4xl md:text-5xl lg:text-6xl font-sans tracking-tight mb-6 max-w-[900px] mx-auto leading-tight">
            Where Shopping Centre Managers Learn the Real Job
          </h1>
          <p className="text-mid-grey text-lg md:text-xl max-w-[600px] mx-auto mb-10 leading-relaxed font-sans">
            Practical knowledge, free resources, and professional guidance &mdash; built for the people who run shopping centres.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
            <a
              href="/articles"
              className="w-full sm:w-auto bg-navy hover:bg-navy/90 text-white font-semibold rounded-lg px-8 py-3 transition-colors uppercase tracking-wider text-sm shadow-sm"
            >
              Read Articles
            </a>
            <a
              href="/resources"
              className="w-full sm:w-auto bg-gold hover:bg-gold/90 text-white font-semibold rounded-lg px-8 py-3 transition-colors uppercase tracking-wider text-sm shadow-sm"
            >
              Browse Resources
            </a>
          </div>

          <div>
            <a
              href="#"
              className="text-gold hover:text-navy font-semibold text-sm transition-colors"
            >
              Download a Sample Chapter &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* SECTION B — FEATURED ARTICLES */}
      <section className="py-20 px-6 md:px-12 lg:px-20 max-w-[1200px] mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-navy font-bold text-3xl font-sans mb-3">Latest Articles</h2>
          <div className="h-1 w-16 bg-gold mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[1, 2, 3].map((num) => (
            <div
              key={num}
              className="bg-light-grey rounded-lg p-6 shadow-sm border border-border-grey flex flex-col justify-between"
            >
              <div>
                <div className="mb-4">
                  <span className="bg-gold/10 text-gold rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                    Operations
                  </span>
                </div>
                <h3 className="text-navy font-bold text-lg font-serif mb-3 leading-snug">
                  Essential Operations Checklist {num}
                </h3>
                <p className="text-mid-grey text-sm mb-6 leading-relaxed">
                  Discover the daily and weekly building maintenance checklists that separate regional malls from community properties.
                </p>
              </div>
              <a
                href="/articles"
                className="text-gold hover:text-navy font-semibold text-sm transition-colors flex items-center"
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

      {/* SECTION C — FEATURED RESOURCES */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-light-grey border-y border-border-grey w-full">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-navy font-bold text-3xl font-sans mb-3">Free Resources</h2>
            <div className="h-1 w-16 bg-gold mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[1, 2, 3].map((num) => (
              <div
                key={num}
                className="bg-white rounded-lg p-6 shadow-sm border border-border-grey flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs text-mid-grey uppercase font-bold tracking-wider">
                      Template
                    </span>
                    <span className="bg-red-50 text-red-600 border border-red-200 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                      PDF
                    </span>
                  </div>
                  <h3 className="text-navy font-bold text-lg font-serif mb-3 leading-snug">
                    Resource Document Guide {num}
                  </h3>
                  <p className="text-mid-grey text-sm mb-6 leading-relaxed">
                    A comprehensive professional guidelines checklist designed to support onboarding and service delivery audits.
                  </p>
                </div>
                <a
                  href="/resources"
                  className="w-full text-center border border-navy text-navy hover:bg-light-blue font-semibold py-2.5 rounded-md transition-colors text-sm uppercase tracking-wider"
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

      {/* SECTION D — BOOK HIGHLIGHT */}
      <section className="py-20 px-6 md:px-12 lg:px-20 max-w-[1200px] mx-auto w-full bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-gold uppercase font-bold tracking-widest text-xs">Recommended Reading</span>
            <h2 className="text-navy font-bold text-3xl md:text-4xl font-serif leading-tight">
              The Practical Guide to Shopping Centre Management
            </h2>
            <p className="text-mid-grey leading-relaxed">
              Written by veteran shopping centre professional Johan Olwage. It details over 30 years of operational, financial, and strategic leasing expertise consolidated into an actionable, textbook-style playbook.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                className="bg-navy hover:bg-navy/90 text-white font-semibold text-center rounded-lg px-6 py-3 transition-colors uppercase tracking-wider text-sm shadow-sm"
              >
                Buy on Amazon
              </a>
              <a
                href="#"
                className="bg-gold hover:bg-gold/90 text-white font-semibold text-center rounded-lg px-6 py-3 transition-colors uppercase tracking-wider text-sm shadow-sm"
              >
                Buy on Takealot
              </a>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="w-full max-w-sm aspect-[3/4] bg-light-grey border border-border-grey rounded-lg shadow-md flex items-center justify-center p-8">
              <div className="text-center">
                <span className="block text-navy font-serif font-bold text-2xl mb-2">Book Cover</span>
                <span className="block text-mid-grey text-sm">Shopping Centre Management</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION E — TESTIMONIALS */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-white border-t border-border-grey w-full">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-navy font-bold text-3xl font-sans mb-3">What Professionals Say</h2>
            <div className="h-1 w-16 bg-gold mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-light-blue rounded-lg p-6 shadow-sm border border-border-grey/10 flex flex-col justify-between">
              <p className="text-mid-grey italic text-sm mb-6 leading-relaxed">
                &ldquo;Johan Olwage has consolidated 30 years of complex operational procedures and leasing rules into an absolute masterclass textbook guide.&rdquo;
              </p>
              <div>
                <span className="block font-bold text-navy text-sm">Michael du Toit</span>
                <span className="block text-xs text-mid-grey">Asset Manager, Retail Trust</span>
              </div>
            </div>
            <div className="bg-light-blue rounded-lg p-6 shadow-sm border border-border-grey/10 flex flex-col justify-between">
              <p className="text-mid-grey italic text-sm mb-6 leading-relaxed">
                &ldquo;The HVAC audit guides and the tenant fit-out guidelines have saved our engineering and operations team hundreds of hours in compliance.&rdquo;
              </p>
              <div>
                <span className="block font-bold text-navy text-sm">Sarah Jenkins</span>
                <span className="block text-xs text-mid-grey">Regional Developer</span>
              </div>
            </div>
            <div className="bg-light-blue rounded-lg p-6 shadow-sm border border-border-grey/10 flex flex-col justify-between">
              <p className="text-mid-grey italic text-sm mb-6 leading-relaxed">
                &ldquo;A refreshing and incredibly visual handbook that gets straight to the point of what it takes to protect shopping centre net operating income.&rdquo;
              </p>
              <div>
                <span className="block font-bold text-navy text-sm">Robert Naidoo</span>
                <span className="block text-xs text-mid-grey">Centre General Manager</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
