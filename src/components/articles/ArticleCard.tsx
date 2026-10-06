import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { ArticleCategoryBadge } from "@/components/articles/ArticleCategoryBadge";
import { formatDate, type Article } from "@/data/articles";
import { cn } from "@/lib/utils";

type ArticleCardVariant = "feature" | "compact" | "grid";

interface ArticleCardProps {
  article: Article;
  variant?: ArticleCardVariant;
  priority?: boolean;
  className?: string;
}

function ArrowButton({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-slate-900 shadow-sm ring-1 ring-slate-100 transition-transform duration-200 group-hover:translate-x-1",
        className
      )}
    >
      <ArrowRight className="h-4 w-4" />
    </span>
  );
}

/**
 * Common article card, built on the shared `Card` primitive.
 * - `feature`: image on top + info panel (Featured column)
 * - `compact`: title/date with thumbnail (Latest column)
 * - `grid`:    full card with image, excerpt and author footer (category sections)
 */
export function ArticleCard({
  article,
  variant = "grid",
  priority = false,
  className,
}: ArticleCardProps) {
  const href = `/articles/${article.slug}`;

  if (variant === "compact") {
    return (
      <Link href={href} className="group block">
        <Card
          className={cn(
            "flex-row items-center justify-between gap-4 rounded-none bg-transparent py-0 ring-0",
            className
          )}
        >
          <div className="min-w-0 flex-1">
            <h3 className="line-clamp-2 text-[13px] font-semibold leading-snug text-slate-950 transition-colors group-hover:text-blue-700">
              {article.title}
            </h3>
            <p className="mt-1.5 text-[10px] text-slate-500">
              {formatDate(article.publishedAt, "long")}
            </p>
          </div>
          <div className="relative h-14 w-16 shrink-0 overflow-hidden rounded-lg bg-slate-200">
            <Image
              src={article.image}
              alt={article.title}
              fill
              sizes="64px"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </Card>
      </Link>
    );
  }

  if (variant === "feature") {
    return (
      <Link href={href} className="group block h-full">
        <Card
          className={cn(
            "h-full gap-0 rounded-[1.75rem] bg-transparent py-0 shadow-none ring-0",
            className
          )}
        >
          <div className="relative min-h-[170px] flex-1 overflow-hidden rounded-[1.75rem] bg-slate-200">
            <Image
              src={article.image}
              alt={article.title}
              fill
              priority={priority}
              sizes="(max-width: 1024px) 100vw, 20vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="relative -mt-4 flex items-end justify-between gap-3 rounded-[1.75rem] bg-white p-4 shadow-sm ring-1 ring-slate-100 transition-shadow group-hover:shadow-md">
            <div className="min-w-0">
              <div className="flex items-center gap-2 text-[10px] text-slate-500">
                <ArticleCategoryBadge category={article.category} />
                <span>·</span>
                <span>{formatDate(article.publishedAt)}</span>
              </div>
              <h3 className="mt-3 text-[13px] font-semibold leading-snug text-slate-950">
                {article.title}
              </h3>
            </div>
            <ArrowButton className="bg-slate-50" />
          </div>
        </Card>
      </Link>
    );
  }

  return (
    <Link href={href} className="group block h-full">
      <Card
        className={cn(
          "h-full gap-0 rounded-3xl bg-white p-5 shadow-sm ring-0 transition-shadow hover:shadow-md",
          className
        )}
      >
        <div className="flex items-center gap-2 text-[10px] text-slate-500">
          <ArticleCategoryBadge category={article.category} />
          <span>·</span>
          <span>{article.readTime} min reads</span>
        </div>

        <h3 className="mt-3 line-clamp-2 text-sm font-semibold leading-snug text-slate-950 transition-colors group-hover:text-blue-700">
          {article.title}
        </h3>

        <div className="relative mt-3 aspect-[16/9] w-full overflow-hidden rounded-2xl bg-slate-100">
          <Image
            src={article.image}
            alt={article.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <p className="mt-3 line-clamp-3 text-[11px] leading-relaxed text-slate-500">
          {article.excerpt}
        </p>

        <div className="mt-auto flex items-center justify-between gap-3 pt-4">
          <div className="flex min-w-0 items-center gap-2 text-[10px] text-slate-500">
            <Image
              src={article.author.avatar}
              alt={article.author.name}
              width={20}
              height={20}
              className="h-5 w-5 rounded-full object-cover"
            />
            <span className="truncate font-medium text-slate-700">
              {article.author.name}
            </span>
            <span>·</span>
            <span className="whitespace-nowrap">
              {formatDate(article.publishedAt)}
            </span>
            <span>·</span>
            <span className="whitespace-nowrap">{article.readTime} min reads</span>
          </div>
          <ArrowButton className="bg-slate-50" />
        </div>
      </Card>
    </Link>
  );
}
