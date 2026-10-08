"use client";

import { useState } from "react";
import { Bookmark, BookmarkCheck, Share2 } from "lucide-react";
import { cn } from "@/lib/utils";

/** Save + share actions for a news article. */
export function NewsActions({ title }: { title: string }) {
  const [saved, setSaved] = useState(false);
  const [notice, setNotice] = useState("");

  const flash = (msg: string) => {
    setNotice(msg);
    setTimeout(() => setNotice(""), 2000);
  };

  const share = async () => {
    const url = window.location.href;
    try {
      if (navigator.share) {
        await navigator.share({ title, url });
      } else {
        await navigator.clipboard.writeText(url);
        flash("Link copied");
      }
    } catch {
      /* share dismissed or unavailable */
    }
  };

  return (
    <div className="flex w-full shrink-0 flex-col gap-2 sm:w-44">
      <button
        type="button"
        aria-pressed={saved}
        onClick={() => {
          setSaved((s) => !s);
          flash(saved ? "Removed from saved" : "Article saved");
        }}
        className={cn(
          "flex h-10 items-center justify-center gap-2 rounded-full border text-xs font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600",
          saved
            ? "border-blue-600 bg-blue-600 text-white"
            : "border-slate-300 bg-white text-slate-900 hover:border-slate-900"
        )}
      >
        {saved ? <BookmarkCheck className="h-4 w-4" /> : <Bookmark className="h-4 w-4" />}
        {saved ? "Saved" : "Save Article"}
      </button>
      <button
        type="button"
        onClick={share}
        className="flex h-10 items-center justify-center gap-2 rounded-full bg-blue-100 text-xs font-medium text-blue-600 transition-colors hover:bg-blue-600 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
      >
        <Share2 className="h-4 w-4" />
        Share on media
      </button>
      <p className="h-3 text-center text-[10px] text-emerald-600" role="status" aria-live="polite">
        {notice}
      </p>
    </div>
  );
}
