import Image from "next/image";
import type { ArticleAuthorData } from "@/data/articles";

export function ArticleAuthor({ author }: { author: ArticleAuthorData }) {
  return (
    <section
      aria-labelledby="author-heading"
      className="mx-auto mt-8 w-full max-w-[1200px] px-4 sm:px-6 lg:px-8"
    >
      <div className="flex flex-col items-start gap-5 rounded-3xl bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:p-8">
        <Image
          src={author.avatar}
          alt={author.name}
          width={80}
          height={80}
          className="h-20 w-20 shrink-0 rounded-full object-cover ring-4 ring-blue-50"
        />
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-blue-600">
            About the author
          </p>
          <h2 id="author-heading" className="mt-1 text-lg font-bold text-slate-950">
            {author.name}
          </h2>
          <p className="text-xs text-slate-500">{author.role}</p>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600">
            {author.bio}
          </p>
        </div>
      </div>
    </section>
  );
}
