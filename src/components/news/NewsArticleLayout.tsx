interface NewsArticleLayoutProps {
  main: React.ReactNode;
  sidebar: React.ReactNode;
}

/** Two-column news layout: article main + latest news sidebar. */
export function NewsArticleLayout({ main, sidebar }: NewsArticleLayoutProps) {
  return (
    <div className="mx-auto grid w-full max-w-[1200px] flex-1 grid-cols-1 gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-8 lg:px-8 lg:py-10">
      {main}
      {sidebar}
    </div>
  );
}
