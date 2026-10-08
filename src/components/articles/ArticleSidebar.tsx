import { RelatedArticles } from "@/components/articles/RelatedArticles";
import { ShareArticle } from "@/components/articles/ShareArticle";
import { TableOfContents } from "@/components/articles/TableOfContents";
import type { TocItem } from "@/components/articles/ArticleContent";
import type { Article } from "@/data/articles";

interface ArticleSidebarProps {
  toc: TocItem[];
  title: string;
  related: Article[];
}

export function ArticleSidebar({ toc, title, related }: ArticleSidebarProps) {
  return (
    <aside aria-label="Article sidebar" className="space-y-5 lg:sticky lg:top-[136px] lg:self-start">
      <TableOfContents items={toc} />
      <ShareArticle title={title} />
      <RelatedArticles articles={related} variant="sidebar" />
    </aside>
  );
}
