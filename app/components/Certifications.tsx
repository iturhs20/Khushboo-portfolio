"use client";

import type { FC, SVGProps } from "react";
import { useRef } from "react";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";

/**
 * Certifications Section — Khushboo Kumari portfolio
 * Horizontally scrolling carousel with snap points, matching the
 * hero/education/experience/publications palette (deep plum / warm gold).
 *
 * Drop into e.g. app/components/CertificationsSection.tsx and render
 * <CertificationsSection />
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

type Certification = {
  title: string;
  issuer: string;
  issued: string;
  credentialId?: string;
  url?: string;
};

const CERTIFICATIONS: Certification[] = [
  {
    title: "Search with MongoDB",
    issuer: "MongoDB",
    issued: "Issued Jun 2026",
    credentialId: "37f772a5-d09d-44c1-8fff-102d1cdff36e",
  },
  {
    title: "AI Engineer for Developers Associate",
    issuer: "DataCamp",
    issued: "Issued Feb 2026 · Expires Feb 2028",
    credentialId: "AIEDA0010227975223",
    url: "https://www.datacamp.com/certificate/AIEDA0010227975223",
  },
  {
    title: "Digital Skills: Artificial Intelligence — Accenture",
    issuer: "FutureLearn",
    issued: "Issued May 2020",
    url: "https://www.futurelearn.com/certificates/dn5ekc1",
  },
  {
    title: "AI Engineer for Data Scientists Associate",
    issuer: "DataCamp",
    issued: "Issued Jan 2026 · Expires Jan 2028",
    credentialId: "AEDS0012253456416",
    url: "https://www.datacamp.com/certificate/AEDS0012253456416",
  },
  {
    title:
      "Microsoft Azure AI Essentials Professional Certificate by Microsoft and LinkedIn",
    issuer: "Microsoft",
    issued: "Issued Oct 2025",
    url: "https://www.linkedin.com/learning/certificates/ef07788a6f2d31ffa9c76806ae32f54a05831daa126acc0bcc89b7e412cf989f?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BxU3NK%2FTXQxG61Mpy6E9QQQ%3D%3D",
  },
  {
    title: "Microsoft Azure AI Essentials: Workloads and Machine Learning on Azure",
    issuer: "LinkedIn",
    issued: "Issued Oct 2025",
    url: "https://www.linkedin.com/learning/certificates/f1e73a213d9580c4754c0d3686b06c1974c52efe91fb3d19b9ca68b6595292d8?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BxU3NK%2FTXQxG61Mpy6E9QQQ%3D%3D",
  },
  {
    title: "Introduction to Git",
    issuer: "DataCamp",
    issued: "Issued Sep 2025",
    url: "https://www.datacamp.com/completed/statement-of-accomplishment/course/21eb097b900f07253a6393b81d63224d5f150f95?utm_medium=organic_social&utm_campaign=sharewidget&utm_content=soa&utm_source=copylink",
  },
  {
    title: "Introduction to R",
    issuer: "DataCamp",
    issued: "Issued Sep 2025",
    url: "https://www.linkedin.com/safety/go/?url=https%3A%2F%2Fwww.datacamp.com%2Fcompleted%2Fstatement-of-accomplishment%2Fcourse%2F1709b581e3a71c13ce6a9b03d6c024bc219106af&urlhash=oJGp&mt=1_NfD2E1RstcXEzg2IAupoqR0fl8UR9g9nGlu8gkZOmTXccmpWD0JvfZzQrZfYGVyP99UiTcRsa_eJwdLoABkrXjUyHU&isSdui=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BxU3NK%2FTXQxG61Mpy6E9QQQ%3D%3D",
  },
  {
    title: "Tata - GenAI Powered Data Analytics Job Simulation",
    issuer: "Forage",
    issued: "Issued Aug 2025",
    credentialId: "YTRyWojvGAtxfBD5T",
    url: "https://www.linkedin.com/safety/go/?url=https%3A%2F%2Fforage-uploads-prod.s3.amazonaws.com%2Fcompletion-certificates%2FifobHAoMjQs9s6bKS%2FgMTdCXwDdLYoXZ3wG_ifobHAoMjQs9s6bKS_4KXRExuxr4fcnzixQ_1755085471501_completion_certificate.pdf&urlhash=V7MK&mt=pSv-7-dxJnBnrM32TOoJH66wBOOlUeSpSMPuSgOfDs0H3opLbM9PeWEq8z-9OdDz3GmIbPiaUVYzz0FtzBET_AR4F5YG&isSdui=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BxU3NK%2FTXQxG61Mpy6E9QQQ%3D%3D",
  },
  {
    title: "Python",
    issuer: "GeeksforGeeks",
    issued: "Issued Apr 2025",
    url: "https://www.linkedin.com/safety/go/?url=https%3A%2F%2Fmedia.geeksforgeeks.org%2Fcourses%2Fcertificates%2Ff3d8a040bdbc5d9c10095ddb2dd92fde.pdf&urlhash=HGED&mt=4XzC1O0kGKypVeQ-pxhQMCYGxl7z-gwNv5K_CSEYDKr0YcO4MfNuGX1rdgEBp1M5gUTIi10j1LF-FNm3pXbQJi1Fjvi7&isSdui=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BxU3NK%2FTXQxG61Mpy6E9QQQ%3D%3D",
  },
  {
    title: "Java",
    issuer: "HackerRank",
    issued: "Issued Jun 2020",
    url: "https://www.linkedin.com/safety/go/?url=https%3A%2F%2Fwww.hackerrank.com%2Fcertificates%2F695dfe3fcae7&urlhash=bbma&mt=L9NzMuLPiWupA7A--4QIrVFgetTMxBcjkOXVRRkZ0CYr1O5PEcAU0tkSbPgu-7LCgA693sPl_a65eLHqpqcW7f3U1ad4&isSdui=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BxU3NK%2FTXQxG61Mpy6E9QQQ%3D%3D",
  },
  {
    title: "Project: Deep Learning Inference with Azure ML Studio",
    issuer: "Coursera",
    issued: "Issued Mar 2020",
    credentialId: "9FMZP4PYTTW9",
    url: "https://www.linkedin.com/safety/go/?url=https%3A%2F%2Fwww.coursera.org%2Faccount%2Faccomplishments%2Fverify%2F9FMZP4PYTTW9&urlhash=PJSH&mt=rI5LZgXHtger84sbZViY4BzX-NhCmN-GdnQ3ytCI-0faT_GCfoo8a7t6g6RIewtI8Mlva993OyBnh7vMsIu6KfBjwvm1&isSdui=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BxU3NK%2FTXQxG61Mpy6E9QQQ%3D%3D",
  },
];

const CertificationsSection: FC = () => {
  const trackRef = useRef<HTMLUListElement>(null);

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector("li");
    const step = card ? card.getBoundingClientRect().width + 20 : 320;
    track.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  return (
    <section
      className={`${display.variable} ${body.variable} bg-[#1C1626] font-[family-name:var(--font-body)]`}
    >
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold text-[#F4F0FA] sm:text-4xl">
            Certifications
          </h2>

          <div className="hidden shrink-0 gap-2 sm:flex">
            <button
              type="button"
              aria-label="Scroll certifications left"
              onClick={() => scrollByCard(-1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#F4F0FA]/15 text-[#F4F0FA] transition-colors duration-200 hover:border-[#E8B04B] hover:text-[#E8B04B]"
            >
              <ChevronIcon className="h-4 w-4 rotate-180" />
            </button>
            <button
              type="button"
              aria-label="Scroll certifications right"
              onClick={() => scrollByCard(1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#F4F0FA]/15 text-[#F4F0FA] transition-colors duration-200 hover:border-[#E8B04B] hover:text-[#E8B04B]"
            >
              <ChevronIcon className="h-4 w-4" />
            </button>
          </div>
        </div>

        <ul
          ref={trackRef}
          className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {CERTIFICATIONS.map((cert) => (
            <li
              key={cert.title}
              className="flex w-[78vw] shrink-0 snap-start flex-col rounded-2xl bg-[#241B33] p-5 sm:w-[300px] sm:p-6"
            >
              <p className="text-[15px] font-semibold leading-snug text-[#F4F0FA]">
                {cert.title}
              </p>
              <p className="mt-1.5 text-sm text-[#E8B04B]">{cert.issuer}</p>

              <div className="mt-3 space-y-0.5 text-[12.5px] text-[#B7AFC7]/70">
                <p>{cert.issued}</p>
                {cert.credentialId && (
                  <p className="break-all">
                    Credential ID {cert.credentialId}
                  </p>
                )}
              </div>

              {cert.url && (
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-medium text-[#E8B04B] transition-colors hover:text-[#F2C371]"
                >
                  View credential
                  <ArrowIcon className="h-3 w-3" />
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CertificationsSection;

// --- Icons (inline, no external dependency) ---

function ChevronIcon(props: SVGProps<SVGSVGElement>) {
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
      <path d="m9 6 6 6-6 6" />
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