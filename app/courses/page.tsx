export const dynamic = 'force-dynamic'

import { client } from '@/lib/sanity'
import { GraduationCap, ExternalLink } from 'lucide-react'

async function getCourses() {
  try {
    return await client.fetch(`
      *[_type == "course" && status == "published"] | order(_createdAt desc) {
        _id, courseName, provider, countryRegion, deliveryMode, description, subjectCategory, providerLink, availability, reviewedDate
      }
    `)
  } catch {
    return []
  }
}

export default async function CoursesPage() {
  const courses = await getCourses()

  return (
    <div className="space-y-10 py-6">
      {/* Header */}
      <div className="border-b border-gray-200 pb-8">
        <span className="text-xs font-bold font-mono text-[#0e2145] uppercase tracking-widest block mb-2">
          Professional Development
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Courses & Programmes
        </h1>
        <p className="text-gray-600 text-base max-w-2xl leading-relaxed">
          Courses and learning opportunities relevant to shopping centre management, from online learning to formal education and professional development.
        </p>
      </div>

      {/* Courses Listing */}
      {courses.length === 0 ? (
        <div className="bg-white rounded-xl border border-gray-200 p-8 sm:p-12 text-center max-w-xl mx-auto space-y-3">
          <GraduationCap className="h-10 w-10 text-gray-400 mx-auto stroke-1" />
          <h2 className="font-serif text-lg font-bold text-gray-800">No courses listed yet</h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            We are adding resources as they are reviewed.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course: any) => (
            <div key={course._id} className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <h2 className="font-serif text-xl font-bold text-gray-900 leading-snug">{course.courseName}</h2>
                  {course.deliveryMode && (
                    <span className="bg-gray-100 text-gray-700 text-xs font-mono px-2.5 py-1 rounded-full uppercase font-medium whitespace-nowrap">
                      {course.deliveryMode}
                    </span>
                  )}
                </div>
                <p className="text-sm font-semibold text-[#0e2145]">Provider: {course.provider}</p>
                {(course.countryRegion || course.subjectCategory) && (
                  <p className="text-xs text-gray-400 font-mono">
                    {[course.subjectCategory, course.countryRegion].filter(Boolean).join(' • ')}
                  </p>
                )}
                <p className="text-sm text-gray-700 leading-relaxed pt-1">{course.description}</p>
              </div>

              {course.providerLink && (
                <div className="pt-4 border-t border-gray-100">
                  <a
                    href={course.providerLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#0e2145] hover:underline"
                  >
                    View Provider Page <ExternalLink className="h-3.5 w-3.5" />
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
