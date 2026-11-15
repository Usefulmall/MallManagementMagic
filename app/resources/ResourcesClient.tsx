"use client";

import { useState } from "react";

type Resource = {
  title: string;
  slug: { current: string };
  description: string;
  category: string;
  fileType: string;
  fileUrl: string | null;
};

const CATEGORIES = ["All", "Templates", "Checklists", "Procedures", "Financial", "Marketing", "Legal", "Emergency"];

export default function ResourcesClient({ resources }: { resources: Resource[] }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? resources
      : resources.filter(
          (r) => r.category?.toLowerCase() === activeCategory.toLowerCase()
        );

  const staticResources: Resource[] = [
    {
      title: "Lease Application Form",
      slug: { current: "lease-application-form" },
      description:
        "A professional template for capturing prospective tenant information and business details.",
      category: "Legal",
      fileType: "DOCX",
      fileUrl: null,
    },
    {
      title: "Shopping Centre Marketing Plan Template",
      slug: { current: "marketing-plan-template" },
      description:
        "A structured annual marketing plan framework adapted for shopping centre environments.",
      category: "Marketing",
      fileType: "DOCX",
      fileUrl: null,
    },
    {
      title: "Tenant Criteria Document",
      slug: { current: "tenant-criteria-document" },
      description:
        "Define your centre's ideal tenant profile and leasing standards in this ready-to-use template.",
      category: "Legal",
      fileType: "PDF",
      fileUrl: null,
    },
  ];

  const displayResources = filtered.length > 0 ? filtered : staticResources;

  return (
    <section className="py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1200px] mx-auto">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider transition-colors ${
                activeCategory === cat
                  ? "bg-navy-dark text-white"
                  : "bg-light-grey text-mid-grey hover:bg-navy-dark hover:text-white border border-border-grey"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        {displayResources.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-mid-grey">No resources in this category yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayResources.map((resource, i) => (
              <div
                key={i}
                className="bg-light-grey rounded-lg p-6 border border-border-grey flex flex-col hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-mid-grey uppercase font-bold tracking-wider">
                    {resource.category || "Resource"}
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
                <h3 className="text-navy-dark font-bold text-lg font-serif mb-3 leading-snug flex-1">
                  {resource.title}
                </h3>
                <p className="text-mid-grey text-sm mb-6 leading-relaxed">
                  {resource.description || "A professional resource for shopping centre managers."}
                </p>
                {resource.fileUrl ? (
                  <a
                    href={resource.fileUrl}
                    download
                    className="w-full text-center bg-gold hover:bg-gold/90 text-navy-dark font-bold py-2.5 rounded-md transition-colors text-sm uppercase tracking-wider"
                  >
                    Download
                  </a>
                ) : (
                  <button
                    disabled
                    className="w-full text-center border border-border-grey text-mid-grey/50 font-semibold py-2.5 rounded-md text-sm uppercase tracking-wider cursor-not-allowed"
                  >
                    Coming Soon
                  </button>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
