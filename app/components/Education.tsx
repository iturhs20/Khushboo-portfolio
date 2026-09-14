import type { FC } from "react";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";

/**
 * Education Section — Khushboo Kumari portfolio
 * Matches the hero's palette (deep plum / warm gold) and type pairing
 * (Cormorant Garamond + Plus Jakarta Sans) for visual consistency.
 *
 * Drop into e.g. app/components/EducationSection.tsx and render
 * <EducationSection />
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

type EducationEntry = {
  institution: string;
  institutionUrl?: string;
  degree: string;
  dates: string;
  grade: string;
};

const EDUCATION: EducationEntry[] = [
  {
    institution: "Dublin City University",
    institutionUrl: "https://www.linkedin.com/school/12144/",
    degree: "Master's in Computing, Artificial Intelligence",
    dates: "Sep 2025 – Aug 2026",
    grade: "Grade: 2:1",
  },
  {
    institution: "Savitribai Phule Pune University",
    degree: "Bachelor of Engineering, Computer Engineering",
    dates: "2017 – 2021",
    grade: "Grade: 8.07 CGPA",
  },
];

const EducationSection: FC = () => {
  return (
    <section
      className={`${display.variable} ${body.variable} bg-[#1C1626] font-[family-name:var(--font-body)]`}
    >
      <div className="mx-auto max-w-3xl px-6 py-20 sm:px-10">
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold text-[#F4F0FA] sm:text-4xl">
          Education
        </h2>

        <ol className="mt-10 border-l border-[#F4F0FA]/12">
          {EDUCATION.map((entry) => (
            <li key={entry.institution} className="relative pb-9 pl-7 last:pb-0">
              <span
                aria-hidden
                className="absolute -left-[5px] top-1.5 h-[9px] w-[9px] rounded-full bg-[#E8B04B]"
              />

              {entry.institutionUrl ? (
                <a
                  href={entry.institutionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[17px] font-semibold text-[#F4F0FA] underline decoration-[#E8B04B]/40 underline-offset-4 transition-colors hover:text-[#E8B04B]"
                >
                  {entry.institution}
                </a>
              ) : (
                <p className="text-[17px] font-semibold text-[#F4F0FA]">
                  {entry.institution}
                </p>
              )}

              <p className="mt-1 text-[15px] text-[#B7AFC7]">{entry.degree}</p>

              <p className="mt-1.5 text-[13px] text-[#B7AFC7]/70">
                {entry.dates} · {entry.grade}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default EducationSection;