
"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, ArrowRight } from "lucide-react";

const faqs = [
  {
    question: "How much sleep do adults really need?",
    answer:
      "Most adults need around 7–9 hours of sleep each night. A regular sleep schedule and a comfortable sleep environment can help improve sleep quality.",
  },
  {
    question: "How much exercise should I get each week?",
    answer:
      "Health guidelines generally recommend at least 150 minutes of moderate activity per week, such as brisk walking, plus muscle-strengthening exercises on two or more days. Even short, regular walks make a real difference.",
  },
  {
    question: "How do I know if I'm drinking enough water?",
    answer:
      "Your fluid needs depend on your activity, climate, and health. Drinking regularly throughout the day and checking that your urine is pale yellow can be helpful general guides.",
  },
  {
    question: "How much sleep do adults really need?",
    answer:
      "Most adults need around 7–9 hours of sleep each night. Try to keep a consistent bedtime and wake-up time to support restful sleep.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState(1);

  return (
    <section id="faq" className="bg-[#f7f7f9] py-8 sm:py-10 lg:py-12">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-5 sm:px-8 lg:grid-cols-2 lg:items-start lg:gap-12">
        {/* Left side */}
        <div className="pt-1">
          <div className="mb-4 flex items-center gap-3">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100">
              <span className="h-2 w-2 rounded-full bg-blue-600" />
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-800">
              FAQ
            </span>
          </div>

          <h2 className="max-w-md text-4xl font-bold leading-[1.15] tracking-tight text-black sm:text-[44px]">
            Frequently asked
            <br />
            Question
          </h2>

          <p className="mt-5 max-w-md text-sm leading-[1.25] text-slate-500 sm:text-base">
            Find quick answer to common question below.
            <br className="hidden sm:block" />
            Need more help? contact us anytime
          </p>

          <a
            href="mailto:"
            className="mt-6 inline-flex h-[52px] items-center gap-4 rounded-full bg-blue-600 py-1 pl-6 pr-1 text-sm font-medium text-white transition hover:bg-blue-700"
          >
            Send Email
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-950">
              <ArrowRight className="h-5 w-5" />
            </span>
          </a>
        </div>

        {/* Right side: FAQ accordion */}
        <div className="space-y-2">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={`${faq.question}-${index}`}
                className={`overflow-hidden rounded-[28px] border-0 outline-none transition-colors duration-200 ${
                  isOpen ? "bg-white" : "bg-[#e2edf6]"
                }`}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex min-h-[52px] w-full items-center justify-between gap-3 border-0 px-4 py-1.5 text-left outline-none focus:outline-none focus-visible:outline-none focus-visible:ring-0 sm:px-5"
                >
                  <span className="text-[11px] font-medium text-slate-950 sm:text-xs">
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
                      isOpen ? "bg-[#e2edf6]" : "bg-white"
                    }`}
                  >
                    {isOpen ? (
                      <ChevronUp className="h-4 w-4 text-slate-950" />
                    ) : (
                      <ChevronDown className="h-4 w-4 text-slate-950" />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 pr-12 sm:px-5 sm:pb-5">
                    <p className="max-w-xl text-[9px] leading-[1.5] text-slate-500 sm:text-[10px]">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}