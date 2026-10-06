import { Footer } from "@/components/Footer";
import { ArticleAuthor } from "@/components/articles/ArticleAuthor";
import { ArticleCategoryNav } from "@/components/articles/ArticleCategoryNav";
import {
  ArticleContent,
  getTocItems,
} from "@/components/articles/ArticleContent";
import { ArticleDisclaimer } from "@/components/articles/ArticleDisclaimer";
import { ArticleHeader } from "@/components/articles/ArticleHeader";
import { ArticleLayout } from "@/components/articles/ArticleLayout";
import { ArticleSidebar } from "@/components/articles/ArticleSidebar";
import { RelatedArticles } from "@/components/articles/RelatedArticles";
import {
  categorySlug,
  getArticleBody,
  getArticleReferences,
  getRelatedArticles,
  CATEGORY_NAV,
  type Article,
} from "@/data/articles";

/**
 * ArticlePage
 * ├── ArticleHeader
 * ├── ArticleLayout (ArticleContent + ArticleSidebar)
 * ├── ArticleDisclaimer
 * ├── ArticleAuthor
 * ├── RelatedArticles
 * └── Footer
 */
export function ArticlePage({ article }: { article: Article }) {
  const body = getArticleBody(article);
  const references = getArticleReferences(article);
  const toc = [
    ...getTocItems(body),
    ...(references.length ? [{ id: "references", label: "References" }] : []),
  ];
  const related = getRelatedArticles(article, 3);

  const slug = categorySlug(article.category);
  const activeTab = CATEGORY_NAV.some((c) => c.slug === slug) ? slug : undefined;

  return (
    <div className="flex min-h-screen flex-col bg-[#f7f8fa]">
      <ArticleCategoryNav active={activeTab ?? "__none__"} />

      <ArticleHeader article={article} />

      <ArticleLayout
        sidebar={
          <ArticleSidebar toc={toc} title={article.title} related={related} />
        }
      >
        <ArticleContent blocks={body} references={references} />
      </ArticleLayout>

      <ArticleDisclaimer />
      <ArticleAuthor author={article.author} />
      <RelatedArticles articles={related} variant="grid" />

      <Footer />
    </div>
  );
}
