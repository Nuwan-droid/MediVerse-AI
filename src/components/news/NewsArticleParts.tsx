import Image from "next/image";
import { Eye, MessageSquare, Share2 } from "lucide-react";
import { formatNewsDate, joinAuthors } from "@/data/news";

export function NewsHero({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-slate-200 shadow-sm">
      <Image
        src={src}
        alt={alt}
        fill
        priority
        sizes="(max-width: 1024px) 100vw, 760px"
        className="object-cover"
      />
    </div>
  );
}

export function NewsCategory({ category }: { category: string }) {
  return (
    <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-600">
      {category}
    </span>
  );
}

export function NewsEngagement({
  comments,
  views,
  shares,
}: {
  comments: number;
  views: number;
  shares: number;
}) {
  const items = [
    { Icon: MessageSquare, value: comments, label: "comments" },
    { Icon: Eye, value: views, label: "views" },
    { Icon: Share2, value: shares, label: "shares" },
  ];
  return (
    <ul className="flex items-center gap-4 text-[11px] text-slate-500">
      {items.map(({ Icon, value, label }) => (
        <li key={label} className="flex items-center gap-1.5">
          <Icon className="h-3.5 w-3.5" aria-hidden />
          <span>
            {value}
            <span className="sr-only"> {label}</span>
          </span>
        </li>
      ))}
    </ul>
  );
}

export function NewsTitle({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="text-xl font-bold leading-snug tracking-tight text-slate-950 sm:text-2xl">
      {children}
    </h1>
  );
}

export function NewsAuthors({ authors }: { authors: string[] }) {
  return (
    <p className="text-[13px] text-slate-700">
      By <span className="font-medium">{joinAuthors(authors)}</span>
    </p>
  );
}

export function NewsMeta({ date, readTime }: { date: string; readTime: number }) {
  return (
    <p className="text-xs text-slate-500">
      <time dateTime={date}>{formatNewsDate(date)}</time> · {readTime} min read
    </p>
  );
}

export function NewsContent({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="space-y-5 text-sm leading-7 text-slate-600">
      {paragraphs.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </div>
  );
}
