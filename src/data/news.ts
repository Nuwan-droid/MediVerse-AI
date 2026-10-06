export type NewsCategoryName =
  | "Fitness"
  | "Mental Health"
  | "Wellness"
  | "Nutrition"
  | "Heart Health";

export interface NewsArticle {
  slug: string;
  category: NewsCategoryName;
  title: string;
  summary: string;
  image: string;
  authors: string[];
  publishedAt: string;
  readTime: number;
  comments: number;
  views: number;
  shares: number;
  body: string[];
}

export const news: NewsArticle[] = [
  {
    slug: "group-workouts-boost-heart-health-and-mood",
    category: "Fitness",
    title: "Group Workouts Boost Heart Health and Mood, New Research Suggests",
    summary:
      "Exercising with others may help people stay consistent and feel better, according to a new analysis of community fitness programmes.",
    image: "/news/group-workout.jpg",
    authors: ["Evan Rose", "Dr. Maya Thompson"],
    publishedAt: "2026-10-02",
    readTime: 5,
    comments: 34,
    views: 158,
    shares: 158,
    body: [
      "Filling half your plate with vegetables and fruit, a quarter with whole grains and a quarter with protein is the simplest way to picture a balanced meal. The same principle of simple, repeatable habits applies to exercise: researchers say the routines people keep doing are the ones that deliver results.",
      "A new review of community fitness programmes found that people who trained in groups attended more sessions, reported better mood and showed larger improvements in resting heart rate than those who exercised alone. Researchers point to accountability, enjoyment and social connection as the main drivers.",
      "The shape of the routine matters more than any single workout. Variety across the week, rather than perfection in one session, is what tends to keep energy steady and makes active living easier to stick with.",
      "Small steps carry most of the benefit: a brisk walk with a friend, a weekly outdoor class or a short circuit session with colleagues all count towards the 150 minutes of moderate activity recommended for most adults each week.",
      "Anyone managing a medical condition or taking regular medication should talk with their doctor before making a major change to how they exercise.",
    ],
  },
  {
    slug: "why-quality-sleep-matters-a-complete-guide",
    category: "Wellness",
    title: "Why Quality Sleep Matters: A Complete Guide to Better Rest",
    summary:
      "Learn how sleep affects your mood, immunity and focus, plus habits for a more restful night.",
    image: "/sunset.png",
    authors: ["Evan Rose"],
    publishedAt: "2026-10-01",
    readTime: 6,
    comments: 21,
    views: 342,
    shares: 87,
    body: [
      "Sleep is one of the most powerful and least expensive tools for protecting health. During deep sleep the body repairs tissue, consolidates memory and regulates the hormones that control appetite and stress.",
      "Most adults need seven to nine hours each night. Going to bed and waking at consistent times, keeping the bedroom cool and dark, and avoiding caffeine in the afternoon are the habits sleep specialists recommend most often.",
      "Screens can delay the body clock, so switching them off 30 minutes before bed can help you fall asleep faster. If sleeplessness lasts for weeks, speak with a healthcare professional.",
    ],
  },
  {
    slug: "workplaces-expand-mental-health-support",
    category: "Mental Health",
    title: "Workplaces Expand Mental Health Support as Awareness Grows",
    summary:
      "More employers are adding counselling, flexible hours and stress-management training to help staff feel supported.",
    image: "/mental-health.png",
    authors: ["Dr. Maya Thompson"],
    publishedAt: "2026-09-30",
    readTime: 4,
    comments: 18,
    views: 276,
    shares: 64,
    body: [
      "Mental health is increasingly treated as a core part of workplace wellbeing. Employers are adding confidential counselling, mental health days and manager training to help teams spot early signs of burnout.",
      "Experts say the most effective programmes combine practical support with a culture where people feel safe to speak up. Small changes — realistic workloads, regular breaks and clear boundaries — often make the biggest difference.",
      "If you are struggling, reach out to someone you trust or a qualified professional. Support is available and asking for it is a sign of strength.",
    ],
  },
  {
    slug: "the-plate-method-a-simple-way-to-balance-meals",
    category: "Nutrition",
    title: "The Plate Method: A Simple Way to Build a Balanced Meal",
    summary:
      "Dietitians say picturing your plate in simple portions can make healthy eating easier without counting calories.",
    image: "/articles/nutrition-choices.jpg",
    authors: ["Evan Rose"],
    publishedAt: "2026-09-28",
    readTime: 4,
    comments: 29,
    views: 410,
    shares: 102,
    body: [
      "The plate method is a visual guide: fill half your plate with vegetables and fruit, a quarter with whole grains and a quarter with lean protein. It takes no counting and no special products.",
      "Small swaps carry most of the benefit — whole grains in place of refined ones, water instead of sugary drinks, and beans, fish or eggs as everyday protein.",
      "Anyone managing a medical condition should talk with their doctor or a registered dietitian before making a major change to their diet.",
    ],
  },
  {
    slug: "wearables-help-people-track-heart-health",
    category: "Heart Health",
    title: "Wearables Help People Keep an Eye on Heart Health",
    summary:
      "Smartwatches that track heart rate can prompt earlier conversations with doctors, but experts urge caution.",
    image: "/watch.png",
    authors: ["Dr. Maya Thompson", "Evan Rose"],
    publishedAt: "2026-09-26",
    readTime: 5,
    comments: 12,
    views: 198,
    shares: 45,
    body: [
      "Wearable devices can measure heart rate, activity and sleep around the clock, giving people a clearer picture of their daily habits.",
      "Cardiologists say these tools are useful for spotting trends, but they are not diagnostic devices. Unusual readings or symptoms such as chest pain or dizziness should always be assessed by a medical professional.",
    ],
  },
];

export const LEAD_NEWS_SLUG = news[0].slug;

export function getNews(slug: string) {
  return news.find((n) => n.slug === slug);
}

export function getLatestNews(excludeSlug: string, limit = 3) {
  return news.filter((n) => n.slug !== excludeSlug).slice(0, limit);
}

export function formatNewsDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

export function joinAuthors(authors: string[]) {
  if (authors.length <= 1) return authors[0] ?? "";
  return `${authors.slice(0, -1).join(", ")} and ${authors[authors.length - 1]}`;
}
