export const dynamic = "force-dynamic";

import { client } from "@/lib/sanity";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Knowledge Hub — UsefulMall",
  description:
    "Curated books, associations, journals and websites for shopping centre management professionals.",
};

async function getKnowledgeItems() {
  try {
    return await client.fetch(
      `*[_type == "knowledgeItem"] | order(title asc) { title, description, resourceType, externalUrl }`
    );
  } catch {
    return [];
  }
}

const TYPE_LABELS: Record<string, string> = {
  book: "Book",
  association: "Association",
  journal: "Journal",
  website: "Website",
};

const TYPE_COLORS: Record<string, string> = {
  book: "bg-blue-50 text-blue-700 border-blue-200",
  association: "bg-purple-50 text-purple-700 border-purple-200",
  journal: "bg-green-50 text-green-700 border-green-200",
  website: "bg-gold/10 text-gold border-gold/30",
};

const STATIC_ITEMS = [
  {
    title: "SACSC — South African Council of Shopping Centres",
    description:
      "The industry body for shopping centre professionals in South Africa. Source of research, events, and professional development.",
    resourceType: "association",
    externalUrl: "https://www.sacsc.co.za",
  },
  {
    title: "ICSC — International Council of Shopping Centers",
    description:
      "The global authority on shopping centres. Research, certifications, events, and international best practice.",
    resourceType: "association",
    externalUrl: "https://www.icsc.com",
  },
  {
    title: "Journal of Shopping Center Research",
    description:
      "Academic research on shopping centre performance, design, and consumer behaviour.",
    resourceType: "journal",
    externalUrl: "https://www.icsc.com/research",
  },
  {
    title: "Mall Management Institute Resources",
    description:
      "Professional development content for shopping centre practitioners globally.",
    resourceType: "website",
    externalUrl: "#",
  },
];

export default async function KnowledgeHubPage() {
  const items = await getKnowledgeItems();
  const displayItems = items.length > 0 ? items : STATIC_ITEMS;

  const byType = displayItems.reduce(
    (acc: Record<string, typeof displayItems>, item: { title: string; description: string; resourceType: string; externalUrl: string }) => {
      const type = item.resourceType || "website";
      if (!acc[type]) acc[type] = [];
      acc[type].push(item);
      return acc;
    },
    {}
  );

  const typeOrder = ["association", "book", "journal", "website"];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-navy-dark py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1200px] mx-auto">
          <span className="text-gold font-semibold text-xs uppercase tracking-widest block mb-3">
            Curated Resources
          </span>
          <h1 className="text-white font-bold text-4xl md:text-5xl font-serif mb-4">
            Knowledge Hub
          </h1>
          <p className="text-white/60 text-lg max-w-[600px]">
            A curated collection of the most useful books, professional associations, journals and
            websites for shopping centre management professionals.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1200px] mx-auto space-y-16">
          {typeOrder
            .filter((type) => byType[type]?.length > 0)
            .map((type) => (
              <div key={type}>
                <div className="flex items-center gap-4 mb-8">
                  <h2 className="text-navy-dark font-serif font-bold text-2xl">
                    {TYPE_LABELS[type] || "Resources"}s
                  </h2>
                  <div className="flex-1 h-px bg-border-grey"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {byType[type].map(
                    (
                      item: { title: string; description: string; resourceType: string; externalUrl: string },
                      i: number
                    ) => (
                      <div
                        key={i}
                        className="bg-light-grey rounded-lg p-6 border border-border-grey hover:shadow-md transition-shadow flex flex-col"
                      >
                        <div className="flex items-start justify-between mb-3 gap-3">
                          <h3 className="text-navy-dark font-bold text-base font-serif leading-snug flex-1">
                            {item.title}
                          </h3>
                          <span
                            className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase border whitespace-nowrap ${
                              TYPE_COLORS[item.resourceType] || TYPE_COLORS.website
                            }`}
                          >
                            {TYPE_LABELS[item.resourceType] || "Resource"}
                          </span>
                        </div>
                        {item.description && (
                          <p className="text-mid-grey text-sm leading-relaxed mb-4 flex-1">
                            {item.description}
                          </p>
                        )}
                        {item.externalUrl && item.externalUrl !== "#" && (
                          <a
                            href={item.externalUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gold hover:text-navy-dark font-semibold text-sm transition-colors mt-auto"
                          >
                            Visit &rarr;
                          </a>
                        )}
                      </div>
                    )
                  )}
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* CTA: suggest a resource */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-light-grey border-t border-border-grey">
        <div className="max-w-[600px] mx-auto text-center">
          <h2 className="text-navy-dark font-serif font-bold text-2xl mb-4">
            Know a Resource Worth Adding?
          </h2>
          <p className="text-mid-grey mb-6 text-sm leading-relaxed">
            If you have come across a book, journal, association or website that has made a real
            difference to your practice, let us know and we will consider adding it to the Hub.
          </p>
          <a
            href="/contact"
            className="inline-block bg-navy-dark hover:bg-navy text-white font-bold px-8 py-3 rounded-lg transition-colors uppercase tracking-wider text-sm"
          >
            Suggest a Resource
          </a>
        </div>
      </section>
    </div>
  );
}
