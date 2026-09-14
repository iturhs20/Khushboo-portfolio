import type { FC } from "react";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";

/**
 * Experience Section — Khushboo Kumari portfolio
 * Card-on-timeline layout, matching the hero/education palette
 * (deep plum / warm gold) and type pairing.
 *
 * Drop into e.g. app/components/ExperienceSection.tsx and render
 * <ExperienceSection />
 */

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-display",
});

const body = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

type Role = {
  title: string;
  dates: string;
  location: string;
  skills?: string;
};

type SingleEntry = {
  kind: "single";
  title: string;
  company: string;
  companyUrl: string;
  employmentType: string;
  dates: string;
  location: string;
};

type GroupedEntry = {
  kind: "grouped";
  company: string;
  companyUrl: string;
  employmentType: string;
  duration: string;
  workplaceType: string;
  roles: Role[];
};

type ExperienceEntry = SingleEntry | GroupedEntry;

const EXPERIENCE: ExperienceEntry[] = [
  {
    kind: "single",
    title: "AI GTM & Tech Development Volunteer",
    company: "AariyaTech UK",
    companyUrl: "https://www.linkedin.com/company/107233077/",
    employmentType: "Internship",
    dates: "May 2026 – Present · 5 mos",
    location: "United Kingdom · Remote",
  },
  {
    kind: "single",
    title: "Reservations Assistant",
    company: "DCU Rooms",
    companyUrl: "https://www.linkedin.com/company/3045078/",
    employmentType: "Full-time",
    dates: "Apr 2026 – Aug 2026 · 5 mos",
    location: "Dublin, County Dublin, Ireland · On-site",
  },
  {
    kind: "single",
    title: "Class Representative for MCM",
    company: "Dublin City University",
    companyUrl: "https://www.linkedin.com/school/12144/",
    employmentType: "Full-time",
    dates: "Sep 2025 – Aug 2026 · 1 yr",
    location: "Dublin City University · On-site",
  },
  {
    kind: "grouped",
    company: "Accenture",
    companyUrl: "https://www.linkedin.com/company/1033/",
    employmentType: "Full-time",
    duration: "4 yrs 1 mo",
    workplaceType: "Hybrid",
    roles: [
      {
        title: "Software Engineer",
        dates: "Sep 2022 – Aug 2025 · 3 yrs",
        location: "Pune District, Maharashtra, India",
        skills: "DBs, Architecture and +9 skills",
      },
      {
        title: "Associate Software Engineer",
        dates: "Aug 2021 – Sep 2022 · 1 yr 2 mos",
        location: "Pune Division, Maharashtra, India",
      },
    ],
  },
  {
    kind: "single",
    title: "Android App Development",
    company: "Central Coalfields Limited",
    companyUrl: "https://www.linkedin.com/company/8796770/",
    employmentType: "Internship",
    dates: "Dec 2019 – Jan 2020 · 2 mos",
    location: "Jharkhand, India",
  },
];

const ExperienceSection: FC = () => {
  return (
    <section
      className={`${display.variable} ${body.variable} bg-[#1C1626] font-[family-name:var(--font-body)]`}
    >
      <div className="mx-auto max-w-3xl px-6 py-20 sm:px-10">
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold text-[#F4F0FA] sm:text-4xl">
          Experience
        </h2>

        <ol className="mt-10">
          {EXPERIENCE.map((entry, i) => (
            <li key={i} className="relative pb-8 pl-7 last:pb-0 sm:pl-8">
              {/* timeline rail */}
              {i !== EXPERIENCE.length - 1 && (
                <span
                  aria-hidden
                  className="absolute left-[4px] top-3 h-[calc(100%-0.25rem)] w-px bg-[#F4F0FA]/12 sm:left-[5px]"
                />
              )}
              <span
                aria-hidden
                className="absolute left-0 top-1.5 h-[9px] w-[9px] rounded-full bg-[#E8B04B] sm:h-[11px] sm:w-[11px]"
              />

              <div className="rounded-2xl bg-[#241B33] p-5 sm:p-6">
                {entry.kind === "single" ? (
                  <>
                    <p className="text-[15px] font-semibold text-[#F4F0FA] sm:text-base">
                      {entry.title}
                    </p>
                    <a
                      href={entry.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-block text-sm text-[#B7AFC7] underline decoration-[#E8B04B]/30 underline-offset-4 transition-colors hover:text-[#E8B04B]"
                    >
                      {entry.company} · {entry.employmentType}
                    </a>
                    <p className="mt-2 text-[13px] text-[#B7AFC7]/70">
                      {entry.dates}
                    </p>
                    <p className="mt-0.5 text-[13px] text-[#B7AFC7]/70">
                      {entry.location}
                    </p>
                  </>
                ) : (
                  <>
                    <a
                      href={entry.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[15px] font-semibold text-[#F4F0FA] underline decoration-[#E8B04B]/30 underline-offset-4 transition-colors hover:text-[#E8B04B] sm:text-base"
                    >
                      {entry.company}
                    </a>
                    <p className="mt-1 text-sm text-[#B7AFC7]">
                      {entry.employmentType} · {entry.duration} ·{" "}
                      {entry.workplaceType}
                    </p>

                    <div className="mt-4 space-y-4 border-l border-[#F4F0FA]/12 pl-4">
                      {entry.roles.map((role) => (
                        <div key={role.title}>
                          <p className="text-sm font-medium text-[#F4F0FA]">
                            {role.title}
                          </p>
                          <p className="mt-1 text-[13px] text-[#B7AFC7]/70">
                            {role.dates}
                          </p>
                          <p className="mt-0.5 text-[13px] text-[#B7AFC7]/70">
                            {role.location}
                          </p>
                          {role.skills && (
                            <p className="mt-1.5 text-[13px] text-[#B7AFC7]">
                              {role.skills}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default ExperienceSection;