import type { FC, SVGProps } from "react";
import { Plus_Jakarta_Sans } from "next/font/google";

/**
 * Footer — Khushboo Kumari portfolio
 * Matches the palette (deep plum / warm gold) used across the rest
 * of the page. Kept deliberately short: name, contact links, copyright.
 *
 * Drop into e.g. app/components/Footer.tsx and render <Footer />
 */

const body = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

const LINKEDIN_URL = "https://www.linkedin.com/in/khushbookumari16/";
const EMAIL_ADDRESS = "kumarikhushboo1607@gmail.com"; // TODO: replace with real email
const GITHUB_URL = "https://github.com/kumarikhushboo1607"; // TODO: replace with real GitHub

const Footer: FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      className={`${body.variable} border-t border-[#F4F0FA]/10 bg-[#1C1626] font-[family-name:var(--font-body)]`}
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-5 px-6 py-10 sm:flex-row sm:justify-between sm:px-10">
        <p className="text-sm font-medium text-[#F4F0FA]">Khushboo Kumari</p>

        <div className="flex items-center gap-4">
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Khushboo Kumari on LinkedIn"
            className="text-[#B7AFC7] transition-colors duration-200 hover:text-[#E8B04B]"
          >
            <LinkedInIcon className="h-[18px] w-[18px]" />
          </a>
          <a
            href={`mailto:${EMAIL_ADDRESS}`}
            aria-label="Email Khushboo Kumari"
            className="text-[#B7AFC7] transition-colors duration-200 hover:text-[#E8B04B]"
          >
            <MailIcon className="h-[18px] w-[18px]" />
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Khushboo Kumari on GitHub"
            className="text-[#B7AFC7] transition-colors duration-200 hover:text-[#E8B04B]"
          >
            <GitHubIcon className="h-[18px] w-[18px]" />
          </a>
        </div>

        <p className="text-[13px] text-[#B7AFC7]/60">
          © {year} Khushboo Kumari. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

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