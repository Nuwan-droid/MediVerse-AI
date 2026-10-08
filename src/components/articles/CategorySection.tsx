import { ArticleCard } from "@/components/articles/ArticleCard";
import type { Article } from "@/data/articles";

interface CategorySectionProps {
  id?: string;
  title: string;
  articles: Article[];
}

/** Titled category block (e.g. Nutrition, Fitness) rendering a grid of cards. */
export function CategorySection({ id, title, articles }: CategorySectionProps) {
  if (articles.length === 0) return null;

  return (
    <section id={id} aria-labelledby={`${id ?? title}-heading`} className="scroll-mt-32">
      <h2
        id={`${id ?? title}-heading`}
        className="border-b border-slate-300 pb-2 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-900"
      >
        {title}
      </h2>
      <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} variant="grid" />
        ))}
      </div>
    </section>
  );
}
