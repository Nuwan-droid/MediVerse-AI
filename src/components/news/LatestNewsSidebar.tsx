import { NewsCard } from "@/components/news/NewsCard";
import type { NewsArticle } from "@/data/news";

export function LatestNewsSidebar({ items }: { items: NewsArticle[] }) {
  return (
    <aside aria-labelledby="latest-news-heading" className="lg:sticky lg:top-[136px] lg:self-start">
      <h2
        id="latest-news-heading"
        className="mb-3 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-900"
      >
        Latest News
      </h2>
      <div className="space-y-4">
        {items.map((item) => (
          <NewsCard key={item.slug} item={item} />
        ))}
      </div>
    </aside>
  );
}
