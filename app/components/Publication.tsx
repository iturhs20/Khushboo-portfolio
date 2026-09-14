import type { FC, SVGProps } from "react";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";

/**
 * Publications Section — Khushboo Kumari portfolio
 * Single-card layout, matching the hero/education/experience palette
 * (deep plum / warm gold) and type pairing.
 *
 * Drop into e.g. app/components/PublicationsSection.tsx and render
 * <PublicationsSection />
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

const PUBLICATION = {
  title: "Detection of Pothole in Real-Time Using Android Based Application",
  date: "Jun 23, 2021",
  source: "SSRN",
  url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3865683",
};

const PublicationsSection: FC = () => {
  return (
    <section
      className={`${display.variable} ${body.variable} bg-[#1C1626] font-[family-name:var(--font-body)]`}
    >
      <div className="mx-auto max-w-3xl px-6 py-20 sm:px-10">
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold text-[#F4F0FA] sm:text-4xl">
          Publications
        </h2>

        <a
          href={PUBLICATION.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-10 flex flex-col gap-4 rounded-2xl bg-[#241B33] p-6 transition-colors duration-200 hover:bg-[#2B2140] sm:flex-row sm:items-center sm:justify-between sm:p-7"
        >
          <div className="flex items-start gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E8B04B]/10 text-[#E8B04B]">
              <DocumentIcon className="h-5 w-5" />
            </span>

            <div>
              <p className="text-[16px] font-semibold leading-snug text-[#F4F0FA] sm:text-[17px]">
                {PUBLICATION.title}
              </p>
              <p className="mt-1.5 text-[13px] text-[#B7AFC7]/70">
                {PUBLICATION.source} · {PUBLICATION.date}
              </p>
            </div>
          </div>

          <span className="flex shrink-0 items-center gap-1.5 self-start text-[13px] font-medium text-[#E8B04B] sm:self-center">
            View paper
            <ArrowIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </span>
        </a>
      </div>
    </section>
  );
};

export default PublicationsSection;

// --- Icons (inline, no external dependency) ---

function DocumentIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M7 3h7l4 4v14a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
      <path d="M14 3v4h4" />
      <path d="M9 12.5h6M9 15.5h6M9 9.5h2" />
    </svg>
  );
}

function ArrowIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M7 17 17 7M7 7h10v10" />
    </svg>
  );
}