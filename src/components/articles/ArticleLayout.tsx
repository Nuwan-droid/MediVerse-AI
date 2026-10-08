interface ArticleLayoutProps {
  children: React.ReactNode;
  sidebar: React.ReactNode;
}

/** Two-column article body: readable content column + sticky sidebar. */
export function ArticleLayout({ children, sidebar }: ArticleLayoutProps) {
  return (
    <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-14 lg:px-8">
      <article className="min-w-0 max-w-3xl">{children}</article>
      {sidebar}
    </div>
  );
}
