import Image from "next/image";
import Link from "next/link";
import { ArticleCard } from "@/components/articles/ArticleCard";
import { ArticleCategoryBadge } from "@/components/articles/ArticleCategoryBadge";
import {
  FEATURED_SLUGS,
  HERO_SLUG,
  LATEST_SLUGS,
  getArticle,
  getArticlesBySlugs,
} from "@/data/articles";

/** Left column — featured articles built from the common card. */
function FeaturedArticles() {
  const featured = getArticlesBySlugs(FEATURED_SLUGS);
  return (
    <section aria-label="Featured articles" className="flex flex-col gap-5">
      {featured.map((article, i) => (
        <div key={article.slug} className="flex-1">
          <ArticleCard article={article} variant="feature" priority={i === 0} />
        </div>
      ))}
    </section>
  );
}

/** Middle column — large image + description. */
function HeroArticle() {
  const hero = getArticle(HERO_SLUG);
  if (!hero) return null;

  return (
    <section aria-label="Top story">
      <Link href={`/articles/${hero.slug}`} className="group block">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-slate-200 shadow-sm sm:aspect-[5/6] lg:aspect-[3/4]">
          <Image
            src={hero.image}
            alt={hero.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
        </div>

        <div className="flex flex-col items-center px-2 pt-4 text-center">
          <ArticleCategoryBadge category={hero.category} tone="white" className="-mt-8 relative z-10 shadow-sm" />
          <h1 className="mt-5 max-w-md text-2xl font-bold leading-tight tracking-tight text-slate-950 transition-colors group-hover:text-blue-700 sm:text-3xl">
            {hero.title}
          </h1>
          <p className="mt-3 max-w-md text-[11px] leading-relaxed text-slate-500 sm:text-xs">
            {hero.excerpt}
          </p>
        </div>
      </Link>
    </section>
  );
}

/** Right column — latest articles. */
function LatestList() {
  const latest = getArticlesBySlugs(LATEST_SLUGS);
  return (
    <section id="latest" aria-labelledby="latest-heading" className="scroll-mt-32">
      <h2
        id="latest-heading"
        className="border-b border-slate-300 pb-2 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-900"
      >
        Latest
      </h2>
      <ul className="divide-y divide-slate-200">
        {latest.map((article) => (
          <li key={article.slug} className="py-4">
            <ArticleCard article={article} variant="compact" />
          </li>
        ))}
      </ul>
    </section>
  );
}

export function ArticlesLanding() {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_1px_minmax(0,2.3fr)_1px_minmax(0,1.15fr)] lg:gap-6">
      <div className="order-2 lg:order-1">
        <FeaturedArticles />
      </div>
      <span aria-hidden className="order-2 hidden bg-slate-200 lg:block" />
      <div className="order-1 lg:order-3">
        <HeroArticle />
      </div>
      <span aria-hidden className="order-4 hidden bg-slate-200 lg:block" />
      <div className="order-3 lg:order-5">
        <LatestList />
      </div>
    </div>
  );
}
