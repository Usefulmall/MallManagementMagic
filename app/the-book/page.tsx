import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Book — UsefulMall",
  description:
    "The Practical Guide to Shopping Centre Management by Johan Olwage. Available on Amazon and Takealot.",
};

export default function TheBookPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-navy-dark py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Book cover placeholder */}
          <div className="flex justify-center md:justify-start">
            <div className="w-64 aspect-[3/4] bg-navy rounded-xl shadow-2xl flex flex-col items-center justify-center p-8 border border-gold/30">
              <div className="w-10 h-1 bg-gold mx-auto mb-5 rounded-full"></div>
              <span className="block text-white font-serif font-bold text-lg text-center leading-snug mb-4">
                The Practical Guide to Shopping Centre Management
              </span>
              <div className="w-6 h-1 bg-gold/40 mx-auto my-4 rounded-full"></div>
              <span className="block text-gold/80 text-xs uppercase tracking-widest text-center">
                Johan Olwage
              </span>
            </div>
          </div>

          {/* Title + buy buttons */}
          <div className="space-y-6">
            <span className="text-gold font-semibold text-xs uppercase tracking-widest block">
              The Book
            </span>
            <h1 className="text-white font-bold text-3xl md:text-4xl font-serif leading-tight">
              The Practical Guide to Shopping Centre Management
            </h1>
            <p className="text-white/60 text-lg leading-relaxed">
              A comprehensive, textbook-style playbook distilled from over 30 years of hands-on
              shopping centre management experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="#"
                className="bg-gold hover:bg-gold/90 text-navy-dark font-bold text-center rounded-lg px-8 py-3 transition-colors uppercase tracking-wider text-sm shadow-md"
              >
                Buy on Amazon
              </a>
              <a
                href="#"
                className="border-2 border-white/40 hover:border-gold text-white hover:text-gold font-semibold text-center rounded-lg px-8 py-3 transition-colors uppercase tracking-wider text-sm"
              >
                Buy on Takealot
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About the book */}
      <section className="py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-[800px] mx-auto">
          <span className="text-gold font-semibold text-xs uppercase tracking-widest block mb-4">
            About the Book
          </span>
          <h2 className="text-navy-dark font-bold text-3xl font-serif mb-6 leading-tight">
            Everything a Shopping Centre Manager Needs to Know
          </h2>
          <div className="space-y-5 text-mid-grey leading-relaxed">
            <p>
              Shopping centre management is one of the most complex disciplines in commercial property.
              It requires a manager to simultaneously master operations, tenant relations, financial
              reporting, leasing, marketing, facilities management, and stakeholder communication —
              often with little formal training and under constant pressure.
            </p>
            <p>
              This book was written to fill that gap. It is not a textbook full of theory. It is a
              practical handbook built from three decades of real-world experience managing shopping
              centres across different formats, ownership structures, and market conditions.
            </p>
            <p>
              Whether you are newly appointed and trying to understand what the job actually entails,
              or an experienced professional looking to sharpen your financial and leasing disciplines,
              this guide has been written for you.
            </p>
          </div>
        </div>
      </section>

      {/* What's inside */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-light-grey border-y border-border-grey">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-navy-dark font-bold text-3xl font-serif mb-3">What&apos;s Inside</h2>
            <div className="h-1 w-16 bg-gold mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Operations",
                desc: "Daily management disciplines, maintenance cycles, contractor management, and building performance.",
              },
              {
                title: "Leasing & Tenant Mix",
                desc: "How to build a productive tenant mix, negotiate leases, and protect your rental income.",
              },
              {
                title: "Financial Management",
                desc: "Understanding NOI, budgeting, expense control, and reporting to asset managers and owners.",
              },
              {
                title: "Tenant Relations",
                desc: "Communication frameworks, dispute resolution, and how to build a productive centre community.",
              },
              {
                title: "Marketing",
                desc: "Centre marketing strategy, campaign planning, digital presence, and community engagement.",
              },
              {
                title: "Facilities & Compliance",
                desc: "HVAC, electrical, fire, and safety compliance — including audit frameworks and fit-out management.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-lg p-6 border border-border-grey">
                <div className="w-8 h-1 bg-gold rounded-full mb-4"></div>
                <h3 className="text-navy-dark font-serif font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-mid-grey text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-navy-dark font-bold text-3xl font-serif mb-3">What Readers Say</h2>
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
                className="bg-light-grey rounded-lg p-6 border border-border-grey flex flex-col"
              >
                <p className="text-mid-grey italic text-sm mb-6 leading-relaxed flex-1">
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

      {/* CTA */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-navy-dark">
        <div className="max-w-[600px] mx-auto text-center">
          <h2 className="text-white font-serif font-bold text-3xl mb-4">Ready to Get Your Copy?</h2>
          <p className="text-white/60 mb-8">
            Available now on Amazon and Takealot. Order your copy today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="bg-gold hover:bg-gold/90 text-navy-dark font-bold rounded-lg px-8 py-3 transition-colors uppercase tracking-wider text-sm"
            >
              Buy on Amazon
            </a>
            <a
              href="#"
              className="border-2 border-white/40 hover:border-gold text-white hover:text-gold font-semibold rounded-lg px-8 py-3 transition-colors uppercase tracking-wider text-sm"
            >
              Buy on Takealot
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
