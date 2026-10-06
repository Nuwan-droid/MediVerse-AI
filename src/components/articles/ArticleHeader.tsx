import Image from "next/image";
import { CalendarDays, Clock, RefreshCw } from "lucide-react";
import { ArticleCategoryBadge } from "@/components/articles/ArticleCategoryBadge";
import { formatDate, type Article, type ArticleAuthorData } from "@/data/articles";

export function ArticleTitle({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="mt-5 max-w-3xl text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-[2.75rem]">
      {children}
    </h1>
  );
}

export function ArticleExcerpt({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
      {children}
    </p>
  );
}

export function AuthorInfo({ author }: { author: ArticleAuthorData }) {
  return (
    <div className="flex items-center gap-3">
      <Image
        src={author.avatar}
        alt={author.name}
        width={40}
        height={40}
        className="h-10 w-10 rounded-full object-cover ring-2 ring-white"
      />
      <div className="leading-tight">
        <p className="text-[10px] uppercase tracking-wider text-slate-400">Written by</p>
        <p className="text-sm font-semibold text-slate-900">{author.name}</p>
      </div>
    </div>
  );
}

export function PublishedDate({ date }: { date: string }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <CalendarDays className="h-3.5 w-3.5 text-slate-400" aria-hidden />
      <span className="sr-only">Published</span>
      <time dateTime={date}>{formatDate(date, "long")}</time>
    </span>
  );
}

export function UpdatedDate({ date, published }: { date: string; published: string }) {
  if (date === published) return null;
  return (
    <span className="inline-flex items-center gap-1.5">
      <RefreshCw className="h-3.5 w-3.5 text-slate-400" aria-hidden />
      Updated <time dateTime={date}>{formatDate(date, "long")}</time>
    </span>
  );
}

export function ReadingTime({ minutes }: { minutes: number }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <Clock className="h-3.5 w-3.5 text-slate-400" aria-hidden />
      {minutes} min read
    </span>
  );
}

export function ArticleMeta({ article }: { article: Article }) {
  return (
    <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 border-y border-slate-200 py-4 text-xs text-slate-500">
      <AuthorInfo author={article.author} />
      <PublishedDate date={article.publishedAt} />
      <UpdatedDate date={article.updatedAt} published={article.publishedAt} />
      <ReadingTime minutes={article.readTime} />
    </div>
  );
}

export function ArticleHero({ src, alt }: { src: string; alt: string }) {
  return (
    <figure className="mt-8">
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[2rem] bg-slate-200 shadow-sm sm:aspect-[2/1]">
        <Image
          src={src}
          alt={alt}
          fill
          priority
          sizes="(max-width: 1200px) 100vw, 1200px"
          className="object-cover"
        />
      </div>
    </figure>
  );
}

export function ArticleHeader({ article }: { article: Article }) {
  return (
    <header className="mx-auto w-full max-w-[1200px] px-4 pt-10 sm:px-6 lg:px-8">
      <ArticleCategoryBadge category={article.category} href tone="blue" />
      <ArticleTitle>{article.title}</ArticleTitle>
      <ArticleExcerpt>{article.excerpt}</ArticleExcerpt>
      <ArticleMeta article={article} />
      <ArticleHero src={article.image} alt={article.title} />
    </header>
  );
}
