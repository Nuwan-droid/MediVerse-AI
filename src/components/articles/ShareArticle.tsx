"use client";

import { useState } from "react";
import { Check, Link2 } from "lucide-react";

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
      <path d="M18.244 2H21.5l-7.19 8.21L22.75 22h-6.62l-5.19-6.79L5 22H1.74l7.69-8.78L1.25 2h6.79l4.69 6.2L18.244 2Zm-1.16 18h1.83L7.01 3.9H5.05L17.084 20Z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
      <path d="M13.5 22v-8.2h2.8l.5-3.3h-3.3V8.4c0-.95.4-1.7 1.8-1.7h1.6V3.8A20 20 0 0 0 14.6 3.7c-2.6 0-4.3 1.6-4.3 4.4v2.4H7.5v3.3h2.8V22h3.2Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4V21H3V9.75Zm6.5 0h3.8v1.54h.05c.53-1 1.84-2.04 3.78-2.04 4.04 0 4.77 2.66 4.77 6.1V21h-4v-4.9c0-1.17-.02-2.67-1.63-2.67-1.63 0-1.88 1.27-1.88 2.58V21h-4V9.75Z" />
    </svg>
  );
}

const buttonClass =
  "flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition-colors hover:bg-blue-600 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600";

export function ShareArticle({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);

  const open = (build: (url: string, text: string) => string) => () => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(title);
    window.open(build(url, text), "_blank", "noopener,noreferrer,width=600,height=500");
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable — ignore */
    }
  };

  return (
    <section aria-labelledby="share-heading" className="rounded-3xl bg-white p-5 shadow-sm">
      <h2 id="share-heading" className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-900">
        Share this article
      </h2>
      <div className="mt-4 flex items-center gap-3">
        <button
          type="button"
          aria-label="Share on X"
          className={buttonClass}
          onClick={open((u, t) => `https://twitter.com/intent/tweet?url=${u}&text=${t}`)}
        >
          <XIcon />
        </button>
        <button
          type="button"
          aria-label="Share on Facebook"
          className={buttonClass}
          onClick={open((u) => `https://www.facebook.com/sharer/sharer.php?u=${u}`)}
        >
          <FacebookIcon />
        </button>
        <button
          type="button"
          aria-label="Share on LinkedIn"
          className={buttonClass}
          onClick={open((u) => `https://www.linkedin.com/sharing/share-offsite/?url=${u}`)}
        >
          <LinkedInIcon />
        </button>
        <button
          type="button"
          aria-label={copied ? "Link copied" : "Copy link"}
          className={buttonClass}
          onClick={copy}
        >
          {copied ? <Check className="h-4 w-4" /> : <Link2 className="h-4 w-4" />}
        </button>
      </div>
      <p className="mt-3 h-4 text-[11px] text-emerald-600" role="status" aria-live="polite">
        {copied ? "Link copied to clipboard" : ""}
      </p>
    </section>
  );
}
