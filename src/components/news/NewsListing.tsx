"use client";

import { useState } from "react";
import { NewsCard } from "@/components/news/NewsCard";
import { Button } from "@/components/ui/button";
import type { NewsArticle } from "@/data/news";

const INITIAL_COUNT = 9;
const LOAD_STEP = 9;

/** Heading + responsive card grid + "Load more" for the Health News landing page. */
export function NewsListing({ items }: { items: NewsArticle[] }) {
  const [visible, setVisible] = useState(INITIAL_COUNT);
  const shown = items.slice(0, visible);
  const hasMore = visible < items.length;

  return (
    <div className="mx-auto w-full max-w-[1200px] flex-1 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <header className="mb-8 sm:mb-10">
        <h1 className="text-3xl font-bold leading-tight tracking-tight text-black sm:text-4xl md:text-5xl">
          Latest Health News
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-slate-500 sm:text-base">
          Stay updated with the latest health discoveries, medical research,
          wellness tips, and healthcare innovations.
        </p>
      </header>

      <section
        aria-label="Health news articles"
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {shown.map((item, index) => (
          <NewsCard
            key={item.slug}
            item={item}
            featured={index === 0}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ))}
      </section>

      {hasMore && (
        <div className="mt-10 flex justify-center">
          <Button
            type="button"
            onClick={() => setVisible((v) => v + LOAD_STEP)}
            className="h-9 rounded-md bg-blue-600 px-6 text-[11px] font-semibold uppercase tracking-wide text-white hover:bg-blue-700"
          >
            Load more
          </Button>
        </div>
      )}
    </div>
  );
}
