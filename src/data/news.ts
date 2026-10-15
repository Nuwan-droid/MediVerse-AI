export type NewsCategoryName =
  | "Fitness"
  | "Mental Health"
  | "Wellness"
  | "Nutrition"
  | "Heart Health"
  | "Sleep";

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

/**
 * Listing order — the news landing page renders this array top to bottom
 * (first page of 9, then "Load more" reveals the rest).
 */
export const news: NewsArticle[] = [
  {
    slug: "build-a-better-bedtime-routine",
    category: "Sleep",
    title: "Build a Better Bedtime Routine for Deeper, More Restful Sleep",
    summary:
      "Sleep specialists share the evening habits that help the body wind down and make waking up easier.",
    image: "/sleeping.png",
    authors: ["Dr. Maya Thompson"],
    publishedAt: "2026-10-05",
    readTime: 5,
    comments: 26,
    views: 301,
    shares: 74,
    body: [
      "A consistent bedtime routine signals to the body that it is time to slow down. Dimming the lights, putting screens away and doing something calm, such as reading or gentle stretching, can make it easier to fall asleep.",
      "Sleep specialists suggest keeping the same wake-up time every day, even at weekends, and keeping the bedroom cool, dark and quiet. Heavy meals and caffeine late in the day are common causes of restless nights.",
      "If trouble sleeping continues for several weeks or affects your daily life, speak with a healthcare professional.",
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
    slug: "daily-walking-is-one-of-the-simplest-ways-to-stay-active",
    category: "Fitness",
    title: "Daily Walking Is One of the Simplest Ways to Stay Active",
    summary:
      "A regular brisk walk can support your heart, mood and energy levels without any special equipment.",
    image: "/articles/fitness-walking.jpg",
    authors: ["Evan Rose"],
    publishedAt: "2026-10-03",
    readTime: 4,
    comments: 15,
    views: 224,
    shares: 51,
    body: [
      "Walking needs no gym, no kit and no booking. A brisk walk most days of the week is an easy way to build towards the 150 minutes of moderate activity recommended for most adults.",
      "Walking after meals, taking calls on the move and choosing stairs over lifts all add up. Start with a pace and distance that feels comfortable and increase gradually.",
      "Anyone with a medical condition should check with their doctor before starting a new exercise routine.",
    ],
  },
  {
    slug: "staying-hydrated-why-water-matters",
    category: "Wellness",
    title: "Staying Hydrated: Why Water Matters for Energy and Focus",
    summary:
      "Even mild dehydration can affect concentration and mood. Here are easy ways to drink enough through the day.",
    image: "/articles/hydration-water.jpg",
    authors: ["Dr. Maya Thompson"],
    publishedAt: "2026-09-29",
    readTime: 3,
    comments: 9,
    views: 187,
    shares: 38,
    body: [
      "Water supports digestion, temperature control and concentration. Feeling tired, getting headaches or having dark urine can be signs you need to drink more.",
      "Keep a bottle within reach, drink a glass with each meal and choose water-rich foods such as fruit and vegetables. Needs vary with activity, climate and health, so listen to your body.",
    ],
  },
  {
    slug: "simple-daily-habits-for-better-mental-wellbeing",
    category: "Mental Health",
    title: "Simple Daily Habits That Support Better Mental Wellbeing",
    summary:
      "Small routines such as time outdoors, regular breaks and staying connected can help you manage stress.",
    image: "/articles/hero-wellness.jpg",
    authors: ["Dr. Maya Thompson"],
    publishedAt: "2026-09-27",
    readTime: 4,
    comments: 20,
    views: 259,
    shares: 60,
    body: [
      "Looking after your mental wellbeing does not have to mean big changes. Time outdoors, regular movement, enough sleep and meaningful time with friends all help the mind cope with stress.",
      "Try short breaks during the day, set realistic goals and notice what helps you feel calm. If low mood or anxiety persists, reach out to a qualified professional.",
    ],
  },
  {
    slug: "eating-more-fibre-for-gut-and-heart-health",
    category: "Nutrition",
    title: "Eating More Fibre: Easy Ways to Support Gut and Heart Health",
    summary:
      "Whole grains, beans, fruit and vegetables make it easy to add fibre to everyday meals.",
    image: "/articles/nutrition-balanced.jpg",
    authors: ["Evan Rose"],
    publishedAt: "2026-09-25",
    readTime: 4,
    comments: 11,
    views: 233,
    shares: 47,
    body: [
      "Fibre helps keep digestion regular and is linked with better heart health. Most adults eat less than the recommended amount.",
      "Swap refined grains for wholegrain versions, add beans or lentils to soups and salads, and keep the skin on fruit and vegetables where you can. Increase fibre gradually and drink plenty of water.",
    ],
  },
  {
    slug: "strength-training-twice-a-week",
    category: "Fitness",
    title: "Strength Training Twice a Week Helps You Stay Active as You Age",
    summary:
      "Two short sessions a week can help maintain muscle, bone strength and independence.",
    image: "/articles/fitness-strength.jpg",
    authors: ["Evan Rose", "Dr. Maya Thompson"],
    publishedAt: "2026-09-24",
    readTime: 5,
    comments: 14,
    views: 205,
    shares: 42,
    body: [
      "Muscle and bone strength naturally decline with age, but regular strength training can slow the process. Health guidelines recommend muscle-strengthening activity on at least two days a week.",
      "Bodyweight exercises, resistance bands and light weights are all effective. Focus on good form, rest between sessions and build up gradually. Check with your doctor if you have a health condition.",
    ],
  },
  {
    slug: "why-regular-cardio-is-good-for-your-heart",
    category: "Heart Health",
    title: "Why Regular Cardio Is Good for Your Heart",
    summary:
      "Running, cycling or swimming a few times a week can help keep your heart and circulation healthy.",
    image: "/articles/runner-outdoor.jpg",
    authors: ["Dr. Maya Thompson"],
    publishedAt: "2026-09-22",
    readTime: 5,
    comments: 17,
    views: 268,
    shares: 55,
    body: [
      "Cardio exercise makes the heart work harder, which over time helps it pump more efficiently and supports healthy blood pressure and cholesterol levels.",
      "Choose an activity you enjoy and aim for regular sessions that raise your breathing and heart rate. If you have chest pain, dizziness or a heart condition, speak with your doctor before exercising.",
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
