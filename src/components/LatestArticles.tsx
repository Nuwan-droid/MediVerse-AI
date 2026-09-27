
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Clock,
  Calendar,
  MessageSquare,
  Eye,
} from "lucide-react";

const articles = [
  {
    title: "The Best Diet for Diabetes in 2026",
    description:
      "Explore heart-healthy meals like grilled salmon and quinoa that stabilize blood sugar and provide lasting energy throughout your day.",
    category: "Nutrition",
    image: "/article-nutrition-v2.jpg",
    readTime: "5 min reads",
    date: "Aug. 29, 2026",
    author: "Evan Rose",
  },
  {
    title: "Top 10 Foods to Avoid with Diabetes",
    description:
      "Learn how everyday food choices can affect blood sugar and discover simple ways to build healthier eating habits.",
    category: "Diabetes",
    image: "/article-diabetes-v2.jpg",
    readTime: "5 min reads",
    date: "Aug. 29, 2026",
    author: "Evan Rose",
  },
  {
    title: "Diabetes and Exercise",
    description:
      "Discover how regular movement and simple exercises can support blood sugar management and overall wellbeing.",
    category: "Diabetes",
    image: "/article-exercise-v2.jpg",
    readTime: "5 min reads",
    date: "Aug. 29, 2026",
    author: "Evan Rose",
  },
  {
    title: "Latest Research on Diabetes in 2026",
    description:
      "A health research card highlighting the latest diabetes studies, breakthroughs, and treatment innovations. Explore new discoveries and emerging care options.",
    category: "Diabetes",
    image: "/article-research-v2.jpg",
    readTime: "5 min reads",
    date: "Aug. 29, 2026",
    author: "Evan Rose",
  },
];

function ArrowButton() {
  return (
    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-slate-900 shadow-sm transition-transform duration-200 group-hover:translate-x-1">
      <ArrowRight className="h-5 w-5" />
    </span>
  );
}

function ArticleMeta({
  article,
}: {
  article: (typeof articles)[number];
}) {
  return (
    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[10px] text-slate-500">
      <span className="rounded-full bg-violet-100 px-2 py-1 font-medium text-slate-700">
        {article.category}
      </span>
      <span>·</span>
      <span>{article.readTime}</span>
    </div>
  );
}

export function LatestArticles() {
  const featured = articles[0];
  const smallArticles = articles.slice(1, 3);
  const research = articles[3];

  return (
    <section className="bg-[#f7f7f9] py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="mb-7 flex flex-col justify-between gap-4 sm:mb-9 sm:flex-row sm:items-start">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <span className="h-2 w-2 rounded-full bg-blue-600" />
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-700">
                Related Articles
              </span>
            </div>

            <h2 className="text-3xl font-bold leading-tight tracking-tight text-black sm:text-4xl md:text-5xl">
              Latest Health Insights
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-500 sm:text-base">
              Explore our latest articles, tips, and expert advice to help you
              live a healthier, happier life.
            </p>
          </div>

          <Link
            href="/articles"
            className="mt-1 inline-flex shrink-0 items-center gap-2 text-sm font-medium text-blue-700 transition-colors hover:text-blue-900"
          >
            View All Articles
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Featured article and compact articles */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
          {/* Large featured article */}
          <Link
            href="/articles"
            className="group relative block min-h-[300px] overflow-hidden rounded-3xl bg-slate-200 sm:min-h-[360px] lg:col-span-6 lg:h-[265px]"
          >
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3 sm:bottom-5 sm:left-5 sm:right-5">
              <div className="max-w-[82%] rounded-xl border border-white/40 bg-white/65 p-3 shadow-md backdrop-blur-md sm:p-4">
                <span className="mb-2 inline-flex rounded-full border border-slate-200 bg-white px-2 py-1 text-[10px] font-medium text-slate-800">
                  {featured.category}
                </span>

                <h3 className="text-base font-bold leading-snug text-slate-950 sm:text-lg">
                  {featured.title}
                </h3>

                <div className="mt-2 flex flex-wrap items-center gap-2 text-[10px] text-slate-500">
                  <span className="font-medium text-slate-700">
                    {featured.author}
                  </span>
                  <span>·</span>
                  <span>{featured.date}</span>
                  <span>·</span>
                  <span>{featured.readTime}</span>
                </div>
              </div>

              <ArrowButton />
            </div>
          </Link>

          {/* Two image cards in the middle */}
          <div className="grid grid-cols-2 gap-3 lg:col-span-3 lg:grid-cols-1 lg:grid-rows-2">
            {smallArticles.map((article) => (
              <Link
                key={article.title}
                href="/articles"
                className="group relative block h-[150px] overflow-hidden rounded-2xl bg-slate-200 sm:h-[190px] lg:h-auto"
              >
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </Link>
            ))}
          </div>

          {/* Compact article information cards */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:col-span-3 lg:grid-cols-1 lg:grid-rows-2">
            {smallArticles.map((article) => (
              <Link
                key={article.title}
                href="/articles"
                className="group flex min-h-[112px] flex-col justify-between rounded-2xl bg-white p-4 shadow-sm transition-shadow hover:shadow-md lg:min-h-0"
              >
                <div>
                  <ArticleMeta article={article} />
                  <h3 className="mt-3 line-clamp-2 text-sm font-semibold leading-snug text-slate-950">
                    {article.title}
                  </h3>
                </div>

                <div className="mt-3 flex items-center justify-between text-[10px] text-slate-400">
                  <span className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <MessageSquare className="h-3 w-3" />
                      34
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye className="h-3 w-3" />
                      158
                    </span>
                  </span>
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-slate-900 transition-transform group-hover:translate-x-1">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Research article cards */}
        <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
          {[0, 1].map((item) => (
            <Link
              key={item}
              href="/articles"
              className="group flex flex-col overflow-hidden rounded-3xl bg-white p-5 shadow-sm transition-shadow hover:shadow-md sm:p-6"
            >
              <div className="mb-3">
                <ArticleMeta article={research} />
                <h3 className="mt-3 text-lg font-semibold leading-snug text-slate-950 sm:text-xl">
                  {research.title}
                </h3>
              </div>

              <div className="relative mt-1 h-[190px] w-full overflow-hidden rounded-2xl bg-slate-100 sm:h-[220px]">
                <Image
                  src={research.image}
                  alt={research.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <p className="mt-4 line-clamp-2 text-[11px] leading-relaxed text-slate-500">
                {research.description}
              </p>

              <div className="mt-4 flex items-center justify-between gap-3 border-t border-slate-100 pt-3">
                <div className="flex flex-wrap items-center gap-2 text-[10px] text-slate-500">
                  <span className="font-medium text-slate-700">
                    {research.author}
                  </span>
                  <span>·</span>
                  <span>{research.date}</span>
                  <span>·</span>
                  <span>{research.readTime}</span>
                </div>
                <ArrowButton />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}