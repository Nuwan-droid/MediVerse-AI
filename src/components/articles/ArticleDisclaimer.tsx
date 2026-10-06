import { ShieldAlert } from "lucide-react";

export function ArticleDisclaimer() {
  return (
    <aside
      aria-label="Medical disclaimer"
      className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8"
    >
      <div className="flex items-start gap-4 rounded-3xl border border-amber-200 bg-amber-50 p-5 sm:p-6">
        <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" aria-hidden />
        <div>
          <h2 className="text-sm font-bold text-amber-900">Medical disclaimer</h2>
          <p className="mt-1 text-xs leading-relaxed text-amber-900/80 sm:text-[13px]">
            This article is for general information and education only and is not a
            substitute for professional medical advice, diagnosis or treatment. Always
            seek the advice of your doctor or another qualified health provider with
            any questions you may have about a medical condition. Never disregard
            professional advice or delay seeking it because of something you have read
            here.
          </p>
        </div>
      </div>
    </aside>
  );
}
