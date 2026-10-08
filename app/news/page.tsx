import type { Metadata } from "next";
import { NewsArticlePage } from "@/components/news/NewsArticlePage";
import { LEAD_NEWS_SLUG, getNews } from "@/data/news";

export const metadata: Metadata = {
  title: "Health News — Mediverse",
  description:
    "Stay updated with the latest health discoveries, medical research, wellness tips and healthcare innovations.",
};

export default function NewsPage() {
  const article = getNews(LEAD_NEWS_SLUG)!;
  return <NewsArticlePage article={article} />;
}
