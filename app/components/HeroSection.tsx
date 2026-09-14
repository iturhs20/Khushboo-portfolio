"use client";

import type { FC, SVGProps } from "react";
import { useEffect, useState } from "react";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";

/**
 * Hero Section — Khushboo Kumari portfolio
 * Same idea as a "name + rotating role + CTA + portrait" hero, rebuilt with
 * its own palette (deep plum / warm gold, vs. the earlier navy/brass version)
 * and a mirrored, image-left layout.
 *
 * Drop into e.g. app/components/HeroSection.tsx and render <HeroSection />
 */

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

const body = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

// --- Replace these with your real details ---
const PORTRAIT_URL =
  "https://media.licdn.com/dms/image/v2/D4D03AQGE9BAtGZoEmA/profile-displayphoto-crop_800_800/B4DZy2XTY.KQAI-/0/1772586093553?e=1790812800&v=beta&t=WzqhvQGk0uekW0VX8_cPFTKVrG9jQ057F45hvQrt_w4";
const LINKEDIN_URL = "https://www.linkedin.com/in/khushbookumari16/";
const EMAIL_ADDRESS = "kumarikhushboo1607@gmail.com"; // TODO: replace with real email
const GITHUB_URL = "https://github.com/kumarikhushboo1607"; // TODO: replace with real GitHub

const ROTATING_WORDS = [
  "intelligent systems",
  "generative AI products",
  "scalable applications",
];

const HeroSection: FC = () => {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
    }, 2400);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      className={`${display.variable} ${body.variable} relative overflow-hidden bg-[#1C1626] font-[family-name:var(--font-body)]`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-1/3 h-[480px] w-[480px] rounded-full opacity-[0.12] blur-3xl"
        style={{ background: "radial-gradient(circle, #E8B04B 0%, transparent 70%)" }}
      />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 py-24 sm:px-10 md:py-28 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:py-36">
        {/* Left — portrait */}
        <div className="hero-fade-1 flex justify-center lg:justify-start">
          <div className="relative w-full max-w-[380px]">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-[28px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={PORTRAIT_URL}
                alt="Portrait of Khushboo Kumari"
                className="h-full w-full object-cover"
              />
            </div>

            {/* floating info chip, overlaps the bottom-right corner */}
            <div className="absolute -bottom-5 -right-5 rounded-2xl bg-[#F4F0FA] px-4 py-3 shadow-[0_12px_30px_rgba(0,0,0,0.35)] sm:px-5">
              <p className="text-[13px] font-semibold leading-tight text-[#1C1626]">
                4+ years experience
              </p>
              <p className="text-[12px] leading-tight text-[#5B5270]">
                Software Engineer, Accenture
              </p>
            </div>
          </div>
        </div>

        {/* Right — text */}
        <div className="hero-fade-2 text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#E8B04B]/30 bg-[#E8B04B]/10 px-4 py-1.5 text-[13px] font-medium text-[#E8B04B]">
            Open to new opportunities
          </span>

          <h1 className="mt-6 font-[family-name:var(--font-display)] text-[clamp(2.75rem,6.5vw,4.75rem)] font-semibold leading-[1.05] tracking-tight text-[#F4F0FA]">
            Khushboo Kumari
          </h1>

          <p
            className="mt-4 h-9 font-[family-name:var(--font-display)] text-2xl italic text-[#B7AFC7] sm:text-3xl"
            aria-live="polite"
          >
            I build{" "}
            <span key={wordIndex} className="hero-word text-[#E8B04B]">
              {ROTATING_WORDS[wordIndex]}
            </span>
          </p>

          <p className="mx-auto mt-6 max-w-[42ch] text-[15px] leading-relaxed text-[#B7AFC7] sm:text-base lg:mx-0">
            Software engineer at Accenture with a Master&rsquo;s in Computing
            (AI) from Dublin City University. I&rsquo;m drawn to generative
            AI, applied machine learning, and building products that solve
            real problems responsibly.
          </p>

          <div className="mt-9 flex flex-col items-center gap-6 lg:flex-row lg:items-center">
            <a
              href={`mailto:${EMAIL_ADDRESS}`}
              className="rounded-full bg-[#E8B04B] px-7 py-3 text-[15px] font-semibold text-[#1C1626] transition-colors duration-200 hover:bg-[#F2C371]"
            >
              Connect with me
            </a>

            <div className="flex items-center gap-3">
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Khushboo Kumari on LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#F4F0FA]/15 text-[#F4F0FA] transition-colors duration-200 hover:border-[#E8B04B] hover:text-[#E8B04B]"
              >
                <LinkedInIcon className="h-[18px] w-[18px]" />
              </a>
              <a
                href={`mailto:${EMAIL_ADDRESS}`}
                aria-label="Email Khushboo Kumari"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#F4F0FA]/15 text-[#F4F0FA] transition-colors duration-200 hover:border-[#E8B04B] hover:text-[#E8B04B]"
              >
                <MailIcon className="h-[18px] w-[18px]" />
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Khushboo Kumari on GitHub"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#F4F0FA]/15 text-[#F4F0FA] transition-colors duration-200 hover:border-[#E8B04B] hover:text-[#E8B04B]"
              >
                <GitHubIcon className="h-[18px] w-[18px]" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-fade-1,
        .hero-fade-2 {
          animation: hero-fade 700ms cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .hero-fade-2 {
          animation-delay: 120ms;
        }
        @keyframes hero-fade {
          from {
            opacity: 0;
            transform: translateY(14px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .hero-word {
          display: inline-block;
          animation: word-swap 420ms ease both;
        }
        @keyframes word-swap {
          from {
            opacity: 0;
            transform: translateY(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-fade-1,
          .hero-fade-2,
          .hero-word {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;

// --- Icons (inline, no external dependency) ---

function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

function MailIcon(props: SVGProps<SVGSVGElement>) {
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
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 6 8.5 7 8.5-7" />
    </svg>
  );
}

function GitHubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.48 2 2 6.58 2 12.19c0 4.49 2.87 8.3 6.84 9.65.5.1.68-.22.68-.49 0-.24-.01-1.02-.01-1.86-2.78.61-3.37-1.21-3.37-1.21-.46-1.18-1.11-1.5-1.11-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.55 2.33 1.11 2.9.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.27 2.75 1.05a9.3 9.3 0 0 1 2.5-.34c.85 0 1.71.11 2.5.34 1.91-1.32 2.75-1.05 2.75-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.01 10.01 0 0 0 22 12.19C22 6.58 17.52 2 12 2Z"
      />
    </svg>
  );
}