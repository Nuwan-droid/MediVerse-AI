import Link from "next/link";
import { categorySlug } from "@/data/articles";
import { cn } from "@/lib/utils";

interface ArticleCategoryBadgeProps {
  category: string;
  /** Render as a link to the category listing. */
  href?: boolean;
  tone?: "violet" | "white" | "blue";
  className?: string;
}

const tones = {
  violet: "bg-violet-100 text-slate-700",
  white: "border border-slate-200 bg-white text-slate-800",
  blue: "bg-blue-50 text-blue-700",
};

export function ArticleCategoryBadge({
  category,
  href = false,
  tone = "violet",
  className,
}: ArticleCategoryBadgeProps) {
  const classes = cn(
    "inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-medium leading-none",
    tones[tone],
    href && "transition-opacity hover:opacity-80",
    className
  );

  if (href) {
    return (
      <Link href={`/articles?category=${categorySlug(category)}`} className={classes}>
        {category}
      </Link>
    );
  }

  return <span className={classes}>{category}</span>;
}
