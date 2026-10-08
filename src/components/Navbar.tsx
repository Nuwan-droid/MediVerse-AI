"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Articles", href: "/articles" },
    { label: "Health News", href: "/news" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-[#f7f8fa]">
      <div className="relative mx-auto max-w-[1440px] px-7">
        <div className="flex h-[64px] items-center justify-between">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <span className="text-[24px] font-black tracking-tight text-black sm:text-[26px]">
              <span className="text-blue-500">G</span>ood for Health
              <span className="text-blue-500">•</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 sm:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`group relative py-1 text-[15px] transition-colors hover:text-black ${
                  isActive(link.href)
                    ? "font-bold text-black"
                    : "font-normal text-slate-500"
                }`}
              >
                {link.label}
                <span
                  aria-hidden
                  className={`absolute -bottom-0.5 left-0 h-[2px] w-full origin-left rounded-full bg-black transition-transform duration-300 ease-out group-hover:scale-x-100 ${
                    isActive(link.href) ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-md text-slate-700 hover:bg-slate-200 sm:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="border-t border-slate-200 py-2 sm:hidden">
            <div className="flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={`rounded-md px-3 py-3 text-sm hover:bg-slate-100 ${
                    isActive(link.href)
                      ? "bg-slate-100 font-medium text-black"
                      : "text-slate-700"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}