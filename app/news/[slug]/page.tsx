import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NewsArticlePage } from "@/components/news/NewsArticlePage";
import { getNews, news } from "@/data/news";

export function generateStaticParams() {
  return news.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getNews(slug);
  if (!article) return { title: "News not found — Mediverse" };
  return { title: `${article.title} — Mediverse`, description: article.summary };
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getNews(slug);
  if (!article) notFound();
  return <NewsArticlePage article={article} />;
}
