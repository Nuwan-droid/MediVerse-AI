import { Footer } from "@/components/Footer";
import { ArticleCategoryNav } from "@/components/articles/ArticleCategoryNav";
import { LatestNewsSidebar } from "@/components/news/LatestNewsSidebar";
import { NewsArticleLayout } from "@/components/news/NewsArticleLayout";
import { NewsArticleMain } from "@/components/news/NewsArticleMain";
import { getLatestNews, type NewsArticle } from "@/data/news";

export function NewsArticlePage({ article }: { article: NewsArticle }) {
  return (
    <div className="flex min-h-screen flex-col bg-[#f7f8fa]">
      <ArticleCategoryNav />
      <NewsArticleLayout
        main={<NewsArticleMain article={article} />}
        sidebar={<LatestNewsSidebar items={getLatestNews(article.slug, 3)} />}
      />
      <Footer />
    </div>
  );
}
