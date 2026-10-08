import Image from "next/image";
import { ExternalLink, Quote } from "lucide-react";
import type { ArticleReference, ContentBlock } from "@/data/articles";

export interface TocItem {
  id: string;
  label: string;
}

/** Headings (sections + lists) that appear in the Table of Contents. */
export function getTocItems(blocks: ContentBlock[]): TocItem[] {
  return blocks.flatMap((b) =>
    b.type === "section" || b.type === "list" ? [{ id: b.id, label: b.heading }] : []
  );
}

export function ArticleIntroduction({ text }: { text: string }) {
  return (
    <p className="text-lg font-medium leading-relaxed text-slate-800 first-letter:float-left first-letter:mr-3 first-letter:text-5xl first-letter:font-bold first-letter:leading-[0.9] first-letter:text-blue-600">
      {text}
    </p>
  );
}

export function ArticleSection({
  id,
  heading,
  paragraphs,
}: {
  id: string;
  heading: string;
  paragraphs: string[];
}) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="scroll-mt-36">
      <h2
        id={`${id}-heading`}
        className="text-2xl font-bold tracking-tight text-slate-950"
      >
        {heading}
      </h2>
      <div className="mt-3 space-y-4 text-[15px] leading-7 text-slate-600">
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </section>
  );
}

export function ArticleImage({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) {
  return (
    <figure>
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl bg-slate-200">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 100vw, 760px"
          className="object-cover"
        />
      </div>
      <figcaption className="mt-3 text-center text-xs text-slate-500">
        {caption}
      </figcaption>
    </figure>
  );
}

export function ArticleQuote({ text, cite }: { text: string; cite: string }) {
  return (
    <blockquote className="relative rounded-3xl bg-blue-50 px-7 py-8 sm:px-10">
      <Quote className="absolute left-4 top-4 h-6 w-6 text-blue-200 sm:left-6" aria-hidden />
      <p className="relative text-xl font-semibold leading-snug text-blue-950">
        “{text}”
      </p>
      <footer className="mt-4 text-xs font-medium text-blue-700">— {cite}</footer>
    </blockquote>
  );
}

export function ArticleList({
  id,
  heading,
  items,
  ordered,
}: {
  id: string;
  heading: string;
  items: string[];
  ordered?: boolean;
}) {
  const Tag = ordered ? "ol" : "ul";
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="scroll-mt-36">
      <h2 id={`${id}-heading`} className="text-2xl font-bold tracking-tight text-slate-950">
        {heading}
      </h2>
      <Tag className="mt-4 space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-[15px] leading-7 text-slate-600">
            <span className="mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-100 text-[10px] font-bold text-blue-700">
              {ordered ? i + 1 : <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />}
            </span>
            <span>{item}</span>
          </li>
        ))}
      </Tag>
    </section>
  );
}

export function ArticleReferences({ references }: { references: ArticleReference[] }) {
  if (references.length === 0) return null;
  return (
    <section id="references" aria-labelledby="references-heading" className="scroll-mt-36 border-t border-slate-200 pt-8">
      <h2 id="references-heading" className="text-lg font-bold text-slate-950">
        References
      </h2>
      <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-slate-600 marker:text-slate-400">
        {references.map((ref) => (
          <li key={ref.url}>
            <a
              href={ref.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-blue-700 underline-offset-2 hover:underline"
            >
              {ref.label}
              <ExternalLink className="h-3 w-3" aria-hidden />
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function ArticleContent({
  blocks,
  references,
}: {
  blocks: ContentBlock[];
  references: ArticleReference[];
}) {
  return (
    <div className="space-y-10">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "introduction":
            return <ArticleIntroduction key={i} text={block.text} />;
          case "section":
            return <ArticleSection key={i} {...block} />;
          case "image":
            return <ArticleImage key={i} {...block} />;
          case "quote":
            return <ArticleQuote key={i} {...block} />;
          case "list":
            return <ArticleList key={i} {...block} />;
        }
      })}
      <ArticleReferences references={references} />
    </div>
  );
}
