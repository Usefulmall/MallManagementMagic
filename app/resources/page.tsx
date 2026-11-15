export const dynamic = "force-dynamic";

import { client } from "@/lib/sanity";
import ResourcesClient from "./ResourcesClient";

async function getResources() {
  try {
    return await client.fetch(
      `*[_type == "resource"] | order(title asc) {
        title,
        slug,
        description,
        category,
        fileType,
        "fileUrl": file.asset->url
      }`
    );
  } catch {
    return [];
  }
}

export default async function ResourcesPage() {
  const resources = await getResources();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-navy-dark py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1200px] mx-auto">
          <span className="text-gold font-semibold text-xs uppercase tracking-widest block mb-3">
            Downloads
          </span>
          <h1 className="text-white font-bold text-4xl md:text-5xl font-serif mb-4">
            Free Resources
          </h1>
          <p className="text-white/60 text-lg max-w-[600px]">
            Practical templates, checklists and documents you can download and use immediately.
          </p>
        </div>
      </section>

      <ResourcesClient resources={resources} />
    </div>
  );
}
