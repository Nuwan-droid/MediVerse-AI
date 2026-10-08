export type ArticleCategory =
  | "Nutrition"
  | "Fitness"
  | "Diabetes"
  | "Mental Health"
  | "Wellness"
  | "Healthy Living"
  | "Expert Advice";

export interface ArticleAuthorData {
  name: string;
  role: string;
  avatar: string;
  bio: string;
}

export type ContentBlock =
  | { type: "introduction"; text: string }
  | { type: "section"; id: string; heading: string; paragraphs: string[] }
  | { type: "image"; src: string; alt: string; caption: string }
  | { type: "quote"; text: string; cite: string }
  | {
      type: "list";
      id: string;
      heading: string;
      ordered?: boolean;
      items: string[];
    };

export interface ArticleReference {
  label: string;
  url: string;
}

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: ArticleCategory;
  image: string;
  /** ISO date (YYYY-MM-DD) */
  publishedAt: string;
  /** ISO date (YYYY-MM-DD) */
  updatedAt: string;
  readTime: number;
  author: ArticleAuthorData;
  body?: ContentBlock[];
  references?: ArticleReference[];
}

export const AUTHOR_EVAN: ArticleAuthorData = {
  name: "Evan Rose",
  role: "Health & Wellness Writer",
  avatar: "/profile.png",
  bio: "Evan writes about everyday nutrition, movement and mental wellbeing. He works with clinicians to turn medical research into clear, practical guidance that anyone can follow.",
};

export const CATEGORY_NAV: { label: string; slug: string }[] = [
  { label: "Nutrition", slug: "nutrition" },
  { label: "Fitness", slug: "fitness" },
  { label: "Mental Health", slug: "mental-health" },
  { label: "Wellness", slug: "wellness" },
  { label: "Healthy Living", slug: "healthy-living" },
  { label: "Expert Advice", slug: "expert-advice" },
];

const SHORT_EXCERPT =
  "A health research card highlighting the latest diabetes studies, breakthroughs, and treatment innovations, and clear navigation to encourage users to explore new discoveries.";

export const articles: Article[] = [
  {
    slug: "small-daily-habits-that-can-improve-your-health",
    title: "Small Daily Habits That Can Improve Your Health",
    excerpt:
      "Building a healthier lifestyle does not require major changes. Simple habits such as eating balanced meals, staying active, getting enough sleep and drinking plenty of water can support your overall wellbeing.",
    category: "Wellness",
    image: "/articles/hero-wellness.jpg",
    publishedAt: "2026-09-20",
    updatedAt: "2026-09-28",
    readTime: 6,
    author: AUTHOR_EVAN,
    body: [
      {
        type: "introduction",
        text: "Most of us picture a healthy life as a dramatic overhaul — new diet, new gym membership, new routine. In reality, the habits that move the needle are small, repeatable and surprisingly easy to start. This guide walks through the daily actions that research consistently links to better energy, mood and long-term health.",
      },
      {
        type: "section",
        id: "start-with-hydration",
        heading: "Start with hydration",
        paragraphs: [
          "Water supports digestion, circulation, temperature control and concentration. Even mild dehydration can leave you feeling tired, foggy and irritable, which is why a glass of water first thing in the morning is one of the easiest wins available.",
          "Keep a reusable bottle within reach and sip steadily through the day rather than waiting until you feel thirsty. Pale yellow urine is a simple, practical sign that you are drinking enough.",
        ],
      },
      {
        type: "image",
        src: "/articles/hydration-water.jpg",
        alt: "A glass of water with lemon and mint on a garden table",
        caption: "Adding lemon or mint can make plain water easier to enjoy.",
      },
      {
        type: "section",
        id: "eat-balanced-meals",
        heading: "Eat balanced meals",
        paragraphs: [
          "A balanced plate combines vegetables, lean protein, whole grains and healthy fats. You do not have to count every calorie — aim for colour, variety and mostly whole foods most of the time.",
          "Planning two or three simple meals ahead for the week removes much of the daily decision fatigue that leads to less nourishing choices.",
        ],
      },
      {
        type: "quote",
        text: "The best health routine is the one you can keep doing on your busiest day.",
        cite: "Dr. Maya Thompson, Preventive Medicine",
      },
      {
        type: "list",
        id: "daily-checklist",
        heading: "A simple daily checklist",
        items: [
          "Drink a glass of water when you wake up.",
          "Move for at least 30 minutes — walking counts.",
          "Fill half your plate with vegetables at one meal.",
          "Take five slow, deep breaths when stress rises.",
          "Switch off screens 30 minutes before bed.",
        ],
      },
      {
        type: "section",
        id: "protect-your-sleep",
        heading: "Protect your sleep",
        paragraphs: [
          "Adults generally need seven to nine hours of sleep. Consistent bed and wake times, a cool dark bedroom and limiting caffeine after lunch all help your body settle into a steady rhythm.",
          "Good sleep improves memory, immune function and appetite regulation, so it quietly supports every other habit on this list.",
        ],
      },
    ],
    references: [
      {
        label: "World Health Organization — Physical activity fact sheet",
        url: "https://www.who.int/news-room/fact-sheets/detail/physical-activity",
      },
      {
        label: "CDC — About Sleep",
        url: "https://www.cdc.gov/sleep/about/index.html",
      },
      {
        label: "NHS — Eight tips for healthy eating",
        url: "https://www.nhs.uk/live-well/eat-well/how-to-eat-a-balanced-diet/eight-tips-for-healthy-eating/",
      },
    ],
  },
  {
    slug: "top-10-foods-to-avoid-with-diabetes",
    title: "Top 10 Foods to Avoid with Diabetes",
    excerpt:
      "Learn how everyday food choices can affect blood sugar and discover simple ways to build healthier eating habits.",
    category: "Diabetes",
    image: "/article-diabetes-v2.jpg",
    publishedAt: "2026-09-20",
    updatedAt: "2026-09-20",
    readTime: 5,
    author: AUTHOR_EVAN,
  },
  {
    slug: "diabetes-and-exercise-getting-started",
    title: "Diabetes and Exercise: Getting Started Safely",
    excerpt:
      "Discover how regular movement and simple exercises can support blood sugar management and overall wellbeing.",
    category: "Diabetes",
    image: "/articles/runner-outdoor.jpg",
    publishedAt: "2026-09-19",
    updatedAt: "2026-09-19",
    readTime: 5,
    author: AUTHOR_EVAN,
  },
  {
    slug: "how-better-sleep-can-improve-your-day",
    title: "How Better Sleep Can Improve Your Day",
    excerpt:
      "Quality sleep sharpens focus, steadies mood and supports immunity. Here is how to build a calmer evening routine.",
    category: "Wellness",
    image: "/sleeping.png",
    publishedAt: "2026-09-20",
    updatedAt: "2026-09-20",
    readTime: 4,
    author: AUTHOR_EVAN,
  },
  {
    slug: "5-simple-habits-for-a-healthier-lifestyle",
    title: "5 Simple Habits for a Healthier Lifestyle",
    excerpt:
      "Five realistic habits you can start today to feel more energised and build healthy routines that last.",
    category: "Healthy Living",
    image: "/article-nutrition-v2.jpg",
    publishedAt: "2026-09-20",
    updatedAt: "2026-09-20",
    readTime: 5,
    author: AUTHOR_EVAN,
  },
  {
    slug: "simple-ways-to-manage-everyday-stress",
    title: "Simple Ways to Manage Everyday Stress",
    excerpt:
      "Practical, evidence-based techniques to calm your mind and reduce the physical effects of daily stress.",
    category: "Mental Health",
    image: "/mental-health.png",
    publishedAt: "2026-09-20",
    updatedAt: "2026-09-20",
    readTime: 6,
    author: AUTHOR_EVAN,
  },
  {
    slug: "why-drinking-enough-water-is-important",
    title: "Why Drinking Enough Water Is Important",
    excerpt:
      "From focus to digestion, find out what proper hydration does for your body and how to make it a habit.",
    category: "Wellness",
    image: "/articles/hydration-water.jpg",
    publishedAt: "2026-09-20",
    updatedAt: "2026-09-20",
    readTime: 3,
    author: AUTHOR_EVAN,
  },
  {
    slug: "easy-exercises-you-can-do-at-home",
    title: "Easy Exercises You Can Do at Home",
    excerpt: SHORT_EXCERPT,
    category: "Fitness",
    image: "/articles/fitness-home.jpg",
    publishedAt: "2026-08-29",
    updatedAt: "2026-08-29",
    readTime: 5,
    author: AUTHOR_EVAN,
  },
  {
    slug: "simple-foods-that-support-a-healthier-heart",
    title: "Simple Foods That Support a Healthier Heart",
    excerpt: SHORT_EXCERPT,
    category: "Nutrition",
    image: "/articles/nutrition-foods.jpg",
    publishedAt: "2026-08-29",
    updatedAt: "2026-08-29",
    readTime: 5,
    author: AUTHOR_EVAN,
  },
  {
    slug: "a-beginners-guide-to-balanced-eating",
    title: "A Beginner's Guide to Balanced Eating",
    excerpt: SHORT_EXCERPT,
    category: "Nutrition",
    image: "/articles/nutrition-balanced.jpg",
    publishedAt: "2026-08-29",
    updatedAt: "2026-08-29",
    readTime: 5,
    author: AUTHOR_EVAN,
  },
  {
    slug: "how-to-make-healthier-food-choices",
    title: "How to Make Healthier Food Choices",
    excerpt: SHORT_EXCERPT,
    category: "Nutrition",
    image: "/articles/nutrition-choices.jpg",
    publishedAt: "2026-08-29",
    updatedAt: "2026-08-29",
    readTime: 5,
    author: AUTHOR_EVAN,
  },
  {
    slug: "why-walking-30-minutes-a-day-matters",
    title: "Why Walking 30 Minutes a Day Matters",
    excerpt: SHORT_EXCERPT,
    category: "Fitness",
    image: "/articles/fitness-walking.jpg",
    publishedAt: "2026-08-29",
    updatedAt: "2026-08-29",
    readTime: 5,
    author: AUTHOR_EVAN,
  },
  {
    slug: "the-benefits-of-strength-training",
    title: "The Benefits of Strength Training",
    excerpt: SHORT_EXCERPT,
    category: "Fitness",
    image: "/articles/fitness-strength.jpg",
    publishedAt: "2026-08-29",
    updatedAt: "2026-08-29",
    readTime: 5,
    author: AUTHOR_EVAN,
  },
  {
    slug: "doctor-approved-habits-for-staying-healthy-all-year",
    title: "Doctor-Approved Habits for Staying Healthy All Year",
    excerpt:
      "Physicians share the preventive habits they recommend most — from regular check-ups to everyday routines.",
    category: "Expert Advice",
    image: "/article-research-v2.jpg",
    publishedAt: "2026-09-15",
    updatedAt: "2026-09-15",
    readTime: 7,
    author: AUTHOR_EVAN,
  },
  {
    slug: "how-wearables-can-support-diabetes-care",
    title: "How Wearable Devices Can Support Diabetes Care",
    excerpt:
      "From heart-rate tracking to activity reminders, wearables can help people with diabetes spot patterns and stay on track.",
    category: "Diabetes",
    image: "/watch.png",
    publishedAt: "2026-09-18",
    updatedAt: "2026-09-18",
    readTime: 5,
    author: AUTHOR_EVAN,
  },
  {
    slug: "mindful-breathing-a-five-minute-reset",
    title: "Mindful Breathing: A Five-Minute Reset for Busy Days",
    excerpt:
      "A simple breathing routine you can do anywhere to lower stress and bring your focus back.",
    category: "Mental Health",
    image: "/sunset.png",
    publishedAt: "2026-09-17",
    updatedAt: "2026-09-17",
    readTime: 4,
    author: AUTHOR_EVAN,
  },
  {
    slug: "heart-healthy-snacks-to-keep-on-hand",
    title: "Heart-Healthy Snacks to Keep on Hand",
    excerpt:
      "Easy, nourishing snack ideas that keep energy steady and support a healthier heart between meals.",
    category: "Nutrition",
    image: "/articles/nutrition-balanced.jpg",
    publishedAt: "2026-09-16",
    updatedAt: "2026-09-16",
    readTime: 4,
    author: AUTHOR_EVAN,
  },
  {
    slug: "how-to-stay-active-when-you-work-at-a-desk",
    title: "How to Stay Active When You Work at a Desk",
    excerpt:
      "Short movement breaks and small routine changes that counter the effects of sitting for long periods.",
    category: "Fitness",
    image: "/articles/fitness-walking.jpg",
    publishedAt: "2026-09-14",
    updatedAt: "2026-09-14",
    readTime: 5,
    author: AUTHOR_EVAN,
  },
  {
    slug: "building-a-simple-morning-routine-that-sticks",
    title: "Building a Simple Morning Routine That Sticks",
    excerpt:
      "Start the day well with a few realistic habits that support energy, mood and focus.",
    category: "Healthy Living",
    image: "/articles/runner-outdoor.jpg",
    publishedAt: "2026-09-12",
    updatedAt: "2026-09-12",
    readTime: 5,
    author: AUTHOR_EVAN,
  },
];

/* ───────────────────────── Selectors ───────────────────────── */

export const HERO_SLUG = "small-daily-habits-that-can-improve-your-health";
export const FEATURED_SLUGS = [
  "top-10-foods-to-avoid-with-diabetes",
  "diabetes-and-exercise-getting-started",
  "how-wearables-can-support-diabetes-care",
];
export const LATEST_SLUGS = [
  "how-better-sleep-can-improve-your-day",
  "5-simple-habits-for-a-healthier-lifestyle",
  "simple-ways-to-manage-everyday-stress",
  "why-drinking-enough-water-is-important",
  "easy-exercises-you-can-do-at-home",
  "mindful-breathing-a-five-minute-reset",
  "heart-healthy-snacks-to-keep-on-hand",
  "how-to-stay-active-when-you-work-at-a-desk",
  "building-a-simple-morning-routine-that-sticks",
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}

export function getArticlesBySlugs(slugs: string[]) {
  return slugs
    .map((s) => getArticle(s))
    .filter((a): a is Article => Boolean(a));
}

export function categorySlug(category: string) {
  return category.toLowerCase().replace(/\s+/g, "-");
}

export function getArticlesByCategory(category: string) {
  return articles.filter((a) => categorySlug(a.category) === category);
}

export function getRelatedArticles(article: Article, limit = 3) {
  const sameCategory = articles.filter(
    (a) => a.slug !== article.slug && a.category === article.category
  );
  const others = articles.filter(
    (a) => a.slug !== article.slug && a.category !== article.category
  );
  return [...sameCategory, ...others].slice(0, limit);
}

export function formatDate(iso: string, style: "short" | "long" = "short") {
  const date = new Date(`${iso}T00:00:00Z`);
  return date.toLocaleDateString("en-US", {
    month: style === "long" ? "long" : "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

/* ──────────────── Fallback body for articles without one ──────────────── */

const CATEGORY_TIPS: Record<ArticleCategory, string[]> = {
  Nutrition: [
    "Fill half of your plate with vegetables or fruit.",
    "Choose whole grains over refined grains where possible.",
    "Include a source of lean protein with every meal.",
    "Read nutrition labels and watch for added sugar and sodium.",
  ],
  Fitness: [
    "Aim for at least 150 minutes of moderate activity each week.",
    "Warm up for five minutes before you start.",
    "Add two short strength sessions each week.",
    "Increase intensity gradually to avoid injury.",
  ],
  Diabetes: [
    "Monitor your blood glucose as advised by your care team.",
    "Pair carbohydrates with protein or fibre to slow absorption.",
    "Stay consistent with meal timing and medication.",
    "Keep regular appointments to review your care plan.",
  ],
  "Mental Health": [
    "Take short breaks to breathe slowly and reset.",
    "Spend time outdoors and stay connected with people you trust.",
    "Keep a regular sleep schedule.",
    "Reach out to a professional if stress feels overwhelming.",
  ],
  Wellness: [
    "Keep a consistent sleep and wake time.",
    "Drink water steadily through the day.",
    "Build short movement breaks into your routine.",
    "Limit screens before bed.",
  ],
  "Healthy Living": [
    "Start with one habit and build from there.",
    "Plan meals and activity around your real schedule.",
    "Track progress in a way that feels encouraging.",
    "Celebrate consistency rather than perfection.",
  ],
  "Expert Advice": [
    "Schedule routine screenings appropriate for your age.",
    "Keep vaccinations up to date.",
    "Discuss new symptoms with your doctor early.",
    "Maintain a regular activity and nutrition routine.",
  ],
};

export function getArticleBody(article: Article): ContentBlock[] {
  if (article.body) return article.body;
  const tips = CATEGORY_TIPS[article.category];
  const topic = article.category.toLowerCase();

  return [
    {
      type: "introduction",
      text: `${article.excerpt} In this guide we break the topic down into clear, practical steps you can start using today.`,
    },
    {
      type: "section",
      id: "why-it-matters",
      heading: "Why it matters",
      paragraphs: [
        `Good ${topic} habits compound over time. Small, consistent changes are easier to maintain than dramatic ones, and they are far more likely to deliver lasting benefits for your health.`,
        "Everyone's needs are different, so use the guidance below as a starting point and adapt it to your own circumstances, preferences and medical advice.",
      ],
    },
    { type: "image", src: article.image, alt: article.title, caption: article.title },
    {
      type: "list",
      id: "practical-steps",
      heading: "Practical steps to get started",
      items: tips,
    },
    {
      type: "quote",
      text: "You do not need to be perfect. You just need to keep showing up for yourself.",
      cite: "Mediverse Editorial Team",
    },
    {
      type: "section",
      id: "making-it-stick",
      heading: "Making it stick",
      paragraphs: [
        "Link new habits to things you already do — a glass of water with your morning coffee, a short walk after lunch. Tracking progress, even informally, helps keep you motivated.",
        "If something is not working, adjust rather than abandon it. A flexible plan you follow beats a perfect plan you drop.",
      ],
    },
  ];
}

export function getArticleReferences(article: Article): ArticleReference[] {
  return (
    article.references ?? [
      {
        label: "World Health Organization — Health topics",
        url: "https://www.who.int/health-topics",
      },
      {
        label: "National Institutes of Health — Health information",
        url: "https://www.nih.gov/health-information",
      },
    ]
  );
}
