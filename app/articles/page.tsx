import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { ArticleCategoryNav } from "@/components/articles/ArticleCategoryNav";
import { ArticlesLanding } from "@/components/articles/ArticlesLanding";
import { CategorySection } from "@/components/articles/CategorySection";
import {
  CATEGORY_NAV,
  getArticlesByCategory,
} from "@/data/articles";

export const metadata: Metadata = {
  title: "Health Articles — Mediverse",
  description:
    "Trusted articles on nutrition, fitness, mental health and wellness, written to help you live a healthier life.",
};

export default async function ArticlesPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string | string[] }>;
}) {
  const params = await searchParams;
  const raw = Array.isArray(params.category) ? params.category[0] : params.category;
  const active = CATEGORY_NAV.find((c) => c.slug === raw) ??
    // categories reachable from cards/footer but not in the nav (e.g. Diabetes)
    (raw ? { label: raw.replace(/-/g, " "), slug: raw } : undefined);

  const filtered = active ? getArticlesByCategory(active.slug) : [];

  return (
    <div className="flex min-h-screen flex-col bg-[#f7f8fa]">
      <ArticleCategoryNav active={active?.slug} />

      <div className="mx-auto w-full max-w-[1200px] flex-1 px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        {active ? (
          <div className="space-y-6">
            <h1 className="sr-only">{active.label} articles</h1>
            {filtered.length > 0 ? (
              <CategorySection
                id={active.slug}
                title={active.label}
                articles={filtered}
              />
            ) : (
              <div className="rounded-3xl bg-white p-10 text-center shadow-sm">
                <p className="text-sm font-semibold text-slate-900">
                  No articles in this category yet
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  New {active.label.toLowerCase()} articles are coming soon.
                </p>
              </div>
            )}
          </div>
        ) : (
          <>
            <ArticlesLanding />

            <div className="mt-14 space-y-14 lg:mt-16">
              <CategorySection
                id="nutrition"
                title="Nutrition"
                articles={getArticlesByCategory("nutrition")}
              />
              <CategorySection
                id="fitness"
                title="Fitness"
                articles={getArticlesByCategory("fitness")}
              />
            </div>
          </>
        )}
      </div>

      <Footer />
    </div>
  );
}
