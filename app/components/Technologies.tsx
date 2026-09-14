import type { FC } from "react";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";

/**
 * Technologies Section — Khushboo Kumari portfolio
 * Asymmetric "bento" grid of category panels, matching the palette
 * (deep plum / warm gold) used across the rest of the page.
 *
 * Logos are pulled from the Simple Icons CDN (cdn.simpleicons.org) and
 * recolored to a single ivory tone so the whole set reads as one
 * cohesive mark set rather than a wall of clashing brand colors.
 * A few Gen AI items (RAG, LangGraph, Vector Databases, LLMs, Prompt
 * Engineering) are concepts/techniques rather than branded products,
 * so they don't have a logo — they're shown as plain text chips instead
 * of a fabricated icon.
 *
 * Drop into e.g. app/components/TechnologiesSection.tsx and render
 * <TechnologiesSection />
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

type TechItem = {
  name: string;
  slug?: string; // Simple Icons slug — omitted for non-branded concepts
};

type Category = {
  label: string;
  span: "full" | "half";
  items: TechItem[];
};

const ICON_COLOR = "F4F0FA";
const iconUrl = (slug: string) => `https://cdn.simpleicons.org/${slug}/${ICON_COLOR}`;

const CATEGORIES: Category[] = [
  {
    label: "Frontend",
    span: "full",
    items: [
      { name: "HTML", slug: "html5" },
      { name: "CSS", slug: "css3" },
      { name: "JavaScript", slug: "javascript" },
      { name: "React.js", slug: "react" },
      { name: "Next.js", slug: "nextdotjs" },
      { name: "Tailwind CSS", slug: "tailwindcss" },
    ],
  },
  {
    label: "Backend",
    span: "half",
    items: [
      { name: "Node.js", slug: "nodedotjs" },
      { name: "Express.js", slug: "express" },
      { name: "Flask", slug: "flask" },
      { name: "FastAPI", slug: "fastapi" },
    ],
  },
  {
    label: "Cloud & DevOps",
    span: "half",
    items: [
      { name: "AWS", slug: "amazonaws" },
      { name: "GCP", slug: "googlecloud" },
      { name: "Azure", slug: "microsoftazure" },
    ],
  },
  {
    label: "Gen AI",
    span: "full",
    items: [
      { name: "RAG" },
      { name: "LangChain", slug: "langchain" },
      { name: "LangGraph" },
      { name: "Vector Databases" },
      { name: "LLMs" },
      { name: "Prompt Engineering" },
    ],
  },
  {
    label: "Machine Learning",
    span: "full",
    items: [
      { name: "Scikit Learn", slug: "scikitlearn" },
      { name: "TensorFlow", slug: "tensorflow" },
      { name: "PyTorch", slug: "pytorch" },
      { name: "Keras", slug: "keras" },
      { name: "Google Colab", slug: "googlecolab" },
    ],
  },
];

const TechnologiesSection: FC = () => {
  return (
    <section
      className={`${display.variable} ${body.variable} bg-[#1C1626] font-[family-name:var(--font-body)]`}
    >
      <div className="mx-auto max-w-5xl px-6 py-20 sm:px-10">
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold text-[#F4F0FA] sm:text-4xl">
          Technologies
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {CATEGORIES.map((category) => (
            <div
              key={category.label}
              className={`rounded-2xl bg-[#241B33] p-6 sm:p-7 ${
                category.span === "full" ? "lg:col-span-2" : "lg:col-span-1"
              }`}
            >
              <p className="text-sm font-semibold text-[#E8B04B]">
                {category.label}
              </p>

              <div className="mt-4 flex flex-wrap gap-2.5">
                {category.items.map((item) => (
                  <span
                    key={item.name}
                    className="flex items-center gap-2 rounded-full border border-[#F4F0FA]/10 bg-[#1C1626] px-3.5 py-2 text-[13px] text-[#F4F0FA]"
                  >
                    {item.slug && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={iconUrl(item.slug)}
                        alt=""
                        aria-hidden
                        className="h-4 w-4 shrink-0"
                      />
                    )}
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;