import { NewsActions } from "@/components/news/NewsActions";
import {
  NewsAuthors,
  NewsCategory,
  NewsContent,
  NewsEngagement,
  NewsHero,
  NewsMeta,
  NewsTitle,
} from "@/components/news/NewsArticleParts";
import type { NewsArticle } from "@/data/news";

export function NewsArticleMain({ article }: { article: NewsArticle }) {
  return (
    <article className="min-w-0">
      <h2 className="mb-3 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-900">
        Health News
      </h2>

      <NewsHero src={article.image} alt={article.title} />

      <div className="mt-4 flex items-center justify-between gap-3">
        <NewsCategory category={article.category} />
        <NewsEngagement
          comments={article.comments}
          views={article.views}
          shares={article.shares}
        />
      </div>

      <div className="mt-5 flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
        <div className="min-w-0 space-y-2">
          <NewsTitle>{article.title}</NewsTitle>
          <NewsAuthors authors={article.authors} />
          <NewsMeta date={article.publishedAt} readTime={article.readTime} />
        </div>
        <NewsActions title={article.title} />
      </div>

      <div className="mt-6">
        <NewsContent paragraphs={article.body} />
      </div>
    </article>
  );
}
