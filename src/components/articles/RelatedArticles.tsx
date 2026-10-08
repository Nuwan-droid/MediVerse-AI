import { ArticleCard } from "@/components/articles/ArticleCard";
import type { Article } from "@/data/articles";

interface RelatedArticlesProps {
  articles: Article[];
  /** `sidebar` renders a compact list, `grid` renders full cards. */
  variant?: "sidebar" | "grid";
}

export function RelatedArticles({ articles, variant = "grid" }: RelatedArticlesProps) {
  if (articles.length === 0) return null;

  if (variant === "sidebar") {
    return (
      <section aria-labelledby="related-sidebar-heading" className="rounded-3xl bg-white p-5 shadow-sm">
        <h2
          id="related-sidebar-heading"
          className="border-b border-slate-200 pb-2 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-900"
        >
          Related articles
        </h2>
        <ul className="divide-y divide-slate-200">
          {articles.map((article) => (
            <li key={article.slug} className="py-4 last:pb-0">
              <ArticleCard article={article} variant="compact" />
            </li>
          ))}
        </ul>
      </section>
    );
  }

  return (
    <section
      aria-labelledby="related-heading"
      className="mx-auto w-full max-w-[1200px] px-4 py-14 sm:px-6 lg:px-8"
    >
      <h2
        id="related-heading"
        className="border-b border-slate-300 pb-2 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-900"
      >
        You might also like
      </h2>
      <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} variant="grid" />
        ))}
      </div>
    </section>
  );
}
