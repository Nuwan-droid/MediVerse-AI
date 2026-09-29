
import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Health Insights", href: "/articles" },
  { label: "Health News", href: "/news" },
  { label: "FAQ", href: "/#faq" },
];

const healthTopics = [
  { label: "Nutrition", href: "/articles" },
  { label: "Fitness", href: "/articles" },
  { label: "Diabetes", href: "/articles" },
  { label: "Wellness", href: "/articles" },
];

export function Footer() {
  return (
    <footer className="w-full bg-[#001b36] text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-9 px-6 py-10 sm:grid-cols-2 sm:px-8 lg:grid-cols-[2.2fr_0.8fr_0.8fr_0.8fr] lg:gap-12 lg:px-10">

        {/* Brand and description */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center text-[24px] font-bold leading-none tracking-tight"
          >
            <span className="text-[#60a5fa]">G</span>
            <span>ood for Health</span>
            <span className="ml-0.5 text-[#60a5fa]">.</span>
          </Link>

          <p className="mt-5 max-w-sm text-sm leading-[1.25] text-slate-300 sm:text-[15px]">
            Everything about health in one place. Trusted
            articles, tips and insights to help you live a
            healthier life.
          </p>

          {/* Social links */}
          <div className="mt-4 flex items-center gap-3">
            {/* Facebook */}
            <a
              href="#"
              aria-label="Facebook"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#172f4c] text-white transition hover:bg-[#294766]"
            >
              <span className="text-xl font-semibold">f</span>
            </a>

            {/* YouTube */}
            <a
              href="#"
              aria-label="YouTube"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#172f4c] text-white transition hover:bg-[#294766]"
            >
              <span className="flex h-[14px] w-[19px] items-center justify-center rounded-[4px] border border-white text-[9px] leading-none">
                ▶
              </span>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-3 text-sm font-semibold text-white">
            Quick Links
          </h3>

          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-xs text-slate-200 transition hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Health Topics */}
        <div>
          <h3 className="mb-3 text-sm font-semibold text-white">
            Health Topics
          </h3>

          <ul className="space-y-2">
            {healthTopics.map((topic) => (
              <li key={topic.label}>
                <Link
                  href={topic.href}
                  className="text-xs text-slate-200 transition hover:text-white"
                >
                  {topic.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-3 text-sm font-semibold text-white">
            Contact
          </h3>

          <ul className="space-y-2 text-xs text-slate-200">
            <li>
              <a
                href="mailto:"
                className="transition hover:text-white"
              >
                [your@email.com]
              </a>
            </li>

            <li>[Your phone number]</li>
            <li>[Your address]</li>
          </ul>
        </div>

      </div>
    </footer>
  );
}