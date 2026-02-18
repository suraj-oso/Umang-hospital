import Link from "next/link";
import Image from "next/image";
import { getDoctors } from "@/data/doctors";

const VISIBLE_EXPERTISE = 5;

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden>
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
    </svg>
  );
}

function GraduationCapIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden>
      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
    </svg>
  );
}

export default function ExpertTeam() {
  const doctors = getDoctors();

  return (
    <section className="border-t border-gray-200 bg-gray-50/50 py-10 sm:py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-wider text-gray-500">
          OUR SPECIALISTS
        </p>
        <h2 className="mt-2 text-center text-2xl font-bold text-[#1e3a5f] sm:text-3xl md:text-4xl">
          Meet Our Expert Team
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-gray-600 sm:mt-4 sm:text-base">
          Board-Certified Specialists Dedicated To Providing The Highest Quality Care.
        </p>

        <div className="mt-8 grid gap-6 sm:mt-12 sm:grid-cols-2 lg:gap-8">
          {doctors.map((doc) => {
            const expertise = doc.expertise ?? [];
            const visible = expertise.slice(0, VISIBLE_EXPERTISE);
            const moreCount = expertise.length - VISIBLE_EXPERTISE;

            return (
              <article
                key={doc.slug}
                className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md"
              >
                {/* Header: dark bar with avatar + name + role */}
                <div className="flex items-center gap-4 bg-[#1e3a5f] px-4 py-4 sm:px-5 sm:py-4">
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-white/30 bg-white/10 sm:h-16 sm:w-16">
                    <Image
                      src={doc.image}
                      alt=""
                      fill
                      className="object-cover object-top"
                      sizes="64px"
                    />
                  </div>
                  <div className="min-w-0">
                    <h3 className="truncate text-lg font-bold text-white sm:text-xl">
                      {doc.name}
                    </h3>
                    <p className="mt-0.5 truncate text-sm text-white/85">
                      {doc.role}
                    </p>
                  </div>
                </div>

                {/* Body */}
                <div className="p-4 sm:p-5">
                  {/* Qualification & Experience row */}
                  <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 text-xs text-gray-600">
                    <span className="flex items-center gap-1.5">
                      <GraduationCapIcon className="h-4 w-4 shrink-0 text-gray-500" />
                      {doc.qualification}
                    </span>
                    <span className="flex items-center gap-1.5 shrink-0">
                      <ClockIcon className="h-4 w-4 shrink-0 text-gray-500" />
                      {doc.experience} years Experience
                    </span>
                  </div>

                  {/* Department */}
                  {doc.department && (
                    <div className="mt-3">
                      <p className="text-xs font-semibold text-gray-700">DEPARTMENT</p>
                      <p className="mt-0.5 text-sm text-[var(--umang-teal)]">
                        {doc.department}
                      </p>
                    </div>
                  )}

                  {/* About (truncated) */}
                  <p className="mt-3 line-clamp-2 text-xs leading-relaxed text-gray-600 sm:line-clamp-3">
                    {doc.about}
                  </p>

                  {/* Specialization pills - light gray bg, dark gray text, consistent gaps */}
                  {(expertise.length > 0) && (
                    <div className="mt-4">
                      <p className="text-xs font-bold text-gray-800">SPECIALIZATIONS</p>
                      <div className="mt-2.5 flex flex-wrap gap-x-2.5 gap-y-2">
                        {visible.map((item, i) => (
                          <span
                            key={i}
                            className="inline-flex rounded-md bg-gray-100 px-2.5 py-1.5 text-xs font-medium text-gray-700"
                          >
                            {item}
                          </span>
                        ))}
                        {moreCount > 0 && (
                          <span className="inline-flex rounded-md bg-gray-100 px-2.5 py-1.5 text-xs font-medium text-gray-700">
                            +{moreCount} more
                          </span>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Action buttons - clear gap between primary and secondary */}
                  <div className="mt-5 flex flex-wrap items-center gap-4">
                    <Link
                      href={`/doctors/${doc.slug}`}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-[var(--umang-green)] px-4 py-2.5 text-sm font-medium text-white transition hover:opacity-95"
                    >
                      View Full Profile
                      <span aria-hidden>→</span>
                    </Link>
                    <Link
                      href="/#appointment"
                      className="inline-flex items-center rounded-lg border-2 border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-800 transition hover:bg-gray-50"
                    >
                      Book Appointment
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
