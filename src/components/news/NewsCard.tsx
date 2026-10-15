import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import type { NewsArticle } from "@/data/news";

interface NewsCardProps {
  item: NewsArticle;
  /** Image `sizes` hint; defaults to the sidebar width. */
  sizes?: string;
}

/** News card, built on the shared `Card` primitive. */
export function NewsCard({
  item,
  sizes = "(max-width: 1024px) 100vw, 360px",
}: NewsCardProps) {
  return (
    <Link href={`/news/${item.slug}`} className="group block h-full">
      <Card className="h-full gap-0 rounded-2xl bg-white p-2 shadow-sm ring-0 transition-shadow duration-300 hover:shadow-md">
        <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-slate-200">
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes={sizes}
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <span className="absolute left-3 top-3 rounded-full bg-blue-600 px-3 py-1 text-[10px] font-medium text-white">
            {item.category}
          </span>
        </div>
        <div className="px-1 pb-2 pt-3">
          <h3 className="line-clamp-2 text-[13px] font-semibold leading-[1.35] text-slate-950 transition-colors group-hover:text-blue-700">
            {item.title}
          </h3>
          <p className="mt-1 line-clamp-2 text-[11px] leading-[1.5] text-slate-500 sm:text-xs">
            {item.summary}
          </p>
        </div>
      </Card>
    </Link>
  );
}
