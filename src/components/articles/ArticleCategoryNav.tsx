import Link from "next/link";
import { CATEGORY_NAV } from "@/data/articles";
import { cn } from "@/lib/utils";

interface ArticleCategoryNavProps {
  active?: string;
}

const tabs = [
  { label: "Home", slug: undefined, href: "/articles" },
  ...CATEGORY_NAV.map((c) => ({
    label: c.label,
    slug: c.slug as string | undefined,
    href: `/articles?category=${c.slug}`,
  })),
  { label: "Latest", slug: "latest" as string | undefined, href: "/articles#latest" },
];


export function ArticleCategoryNav({ active }: ArticleCategoryNavProps) {
  return (
    <div className="sticky top-[64px] z-40 w-full border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav
        aria-label="Article categories"
        className="hide-scrollbar mx-auto flex max-w-[1440px] items-stretch overflow-x-auto px-4 sm:justify-center sm:px-7"
      >
        {tabs.map((tab, i) => {
          const isActive = tab.slug === active;
          return (
            <div key={tab.label} className="flex items-stretch">
              {i > 0 && (
                <span aria-hidden className="my-3 w-px self-stretch bg-slate-200" />
              )}
              <Link
                href={tab.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "relative flex items-center whitespace-nowrap px-4 py-3.5 text-[14px] font-medium transition-colors sm:px-5",
                  isActive
                    ? "text-slate-950"
                    : "text-slate-600 hover:text-slate-950"
                )}
              >
                {isActive && (
                  <span className="absolute inset-x-3 top-0 h-[3px] rounded-b-full bg-slate-950" />
                )}
                {tab.label}
              </Link>
            </div>
          );
        })}
      </nav>
    </div>
  );
}
