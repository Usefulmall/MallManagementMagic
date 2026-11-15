import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Johan Olwage — UsefulMall",
  description:
    "Johan Olwage is a shopping centre management professional with over 30 years of experience. Author of The Practical Guide to Shopping Centre Management.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-navy-dark py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1200px] mx-auto">
          <span className="text-gold font-semibold text-xs uppercase tracking-widest block mb-3">
            The Person Behind UsefulMall
          </span>
          <h1 className="text-white font-bold text-4xl md:text-5xl font-serif mb-4">
            About Johan Olwage
          </h1>
          <p className="text-white/60 text-lg max-w-[600px]">
            Shopping centre manager, author, and industry educator based in Langebaan, South Africa.
          </p>
        </div>
      </section>

      {/* Bio section */}
      <section className="py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {/* Photo */}
          <div className="flex justify-center md:justify-start">
            <div className="w-64 h-64 rounded-2xl bg-light-grey border border-border-grey flex items-center justify-center shadow-md overflow-hidden">
              {/* Photo will be added via Sanity or direct upload */}
              <div className="text-center p-6">
                <div className="w-20 h-20 rounded-full bg-navy-dark/10 mx-auto mb-3 flex items-center justify-center">
                  <span className="text-navy-dark text-3xl font-serif font-bold">J</span>
                </div>
                <span className="text-mid-grey text-xs">Johan Olwage</span>
              </div>
            </div>
          </div>

          {/* Bio text */}
          <div className="md:col-span-2 space-y-5 text-mid-grey leading-relaxed">
            <h2 className="text-navy-dark font-bold text-2xl font-serif">
              30+ Years in Shopping Centre Management
            </h2>
            <p>
              Johan Olwage has spent more than three decades working in and around shopping centres
              across South Africa. He has managed centres of varying sizes and formats — from
              community centres to regional malls — and has worked across the full spectrum of
              disciplines that the profession demands: operations, leasing, financial management,
              marketing, tenant relations, and facilities.
            </p>
            <p>
              The insights and frameworks contained in his book, and on this platform, are not
              derived from academic study. They come from real experience — managing real centres,
              dealing with real tenants, real owners, real problems, and real results.
            </p>
            <p>
              UsefulMall was created because Johan found that newly appointed managers often arrived
              in the role with little practical guidance. The profession has no widely recognised
              training pathway, and much of what experienced managers know was learned the hard way.
              This platform exists to change that.
            </p>
            <blockquote className="border-l-4 border-gold pl-6 my-6">
              <p className="text-navy-dark font-medium text-lg italic leading-relaxed">
                &ldquo;The job is learnable. Everything a great shopping centre manager does can be
                taught, documented, and passed on. That is what UsefulMall is for.&rdquo;
              </p>
              <footer className="mt-3 text-mid-grey text-sm">— Johan Olwage</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-light-grey border-y border-border-grey">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-navy-dark font-bold text-3xl font-serif mb-3">
              Experience &amp; Credentials
            </h2>
            <div className="h-1 w-16 bg-gold mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: "30+",
                label: "Years of Experience",
                desc: "Over three decades managing shopping centres across South Africa.",
              },
              {
                number: "1",
                label: "Published Book",
                desc: "The Practical Guide to Shopping Centre Management — a comprehensive professional reference.",
              },
              {
                number: "∞",
                label: "Commitment to the Profession",
                desc: "UsefulMall is a long-term project to build the definitive knowledge resource for the industry.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-lg p-8 border border-border-grey text-center">
                <span className="block text-gold font-serif font-bold text-5xl mb-2">
                  {item.number}
                </span>
                <span className="block text-navy-dark font-semibold text-sm uppercase tracking-wider mb-3">
                  {item.label}
                </span>
                <p className="text-mid-grey text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-[800px] mx-auto text-center">
          <span className="text-gold font-semibold text-xs uppercase tracking-widest block mb-4">
            The Mission
          </span>
          <h2 className="text-navy-dark font-bold text-3xl font-serif mb-6">
            Why UsefulMall Exists
          </h2>
          <p className="text-mid-grey leading-relaxed text-lg mb-8">
            UsefulMall exists to help shopping centre managers learn the real job. Not through
            theoretical frameworks or generic management advice — but through practical, specific,
            field-tested knowledge that makes an immediate difference in how a centre is run.
          </p>
          <a
            href="/contact"
            className="inline-block bg-gold hover:bg-gold/90 text-navy-dark font-bold px-8 py-3 rounded-lg transition-colors uppercase tracking-wider text-sm"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
