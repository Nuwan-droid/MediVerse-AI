
import Image from "next/image";
import Link from "next/link";

const newsItems = [
  {
    category: "Sleep",
    title: "Why Quality Sleep Matters: A Complete Guide to Better Rest",
    description:
      "Learn how sleep affects your mood, immunity and focus, plus habits for a more restful night.",
    image: "/sleeping.png",
  },
  {
    category: "Nutrition",
    title: "Why Quality Sleep Matters: A Complete Guide to Better Rest",
    description:
      "Learn how sleep affects your mood, immunity and focus, plus habits for a more restful night.",
    image: "/article-nutrition.jpg",
  },
  {
    category: "Heart Health",
    title: "Why Quality Sleep Matters: A Complete Guide to Better Rest",
    description:
      "Learn how sleep affects your mood, immunity and focus, plus habits for a more restful night.",
    image: "/watch.png",
  },
  {
    category: "Fitness",
    title: "Why Quality Sleep Matters: A Complete Guide to Better Rest",
    description:
      "Learn how sleep affects your mood, immunity and focus, plus habits for a more restful night.",
    image: "/people.png",
  },
  {
    category: "Wellness",
    title: "Why Quality Sleep Matters: A Complete Guide to Better Rest",
    description:
      "Learn how sleep affects your mood, immunity and focus, plus habits for a more restful night.",
    image: "/sunset.png",
  },
  {
    category: "Mental Health",
    title: "Why Quality Sleep Matters: A Complete Guide to Better Rest",
    description:
      "Learn how sleep affects your mood, immunity and focus, plus habits for a more restful night.",
    image: "/mental-health.png",
  },
];

export function LatestHealthNews() {
  return (
    <section className="bg-[#f7f7f9] py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-8 sm:mb-10">
          <div className="mb-3 flex items-center gap-3">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100">
              <span className="h-2 w-2 rounded-full bg-blue-600" />
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-700">
              Health News
            </span>
          </div>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-black sm:text-4xl md:text-5xl">
            Latest Health News
          </h2>

          <p className="mt-2 text-sm leading-relaxed text-slate-500 sm:text-base">
            Stay updated with the latest health discoveries, medical research,
            wellness tips, and healthcare innovations.
          </p>
        </div>

        {/* News cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {newsItems.map((item, index) => (
            <Link
              href="/news"
              key={index}
              className={`group overflow-hidden rounded-2xl p-2 transition-shadow duration-300 hover:shadow-md ${
                index === 0 ? "bg-[#202124]" : "bg-white"
              }`}
            >
              {/* Image */}
              <div className="relative h-[185px] overflow-hidden rounded-xl bg-slate-200 sm:h-[155px]">
                <Image
                  src={item.image}
                  alt={item.category}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <span className="absolute left-3 top-3 rounded-full bg-blue-600 px-3 py-1 text-[10px] font-medium text-white">
                  {item.category}
                </span>
              </div>

              {/* Text */}
              <div className="px-1 pb-2 pt-3">
                <h3
                  className={`line-clamp-2 text-[13px] font-semibold leading-[1.35] ${
                    index === 0 ? "text-white" : "text-slate-950"
                  }`}
                >
                  {item.title}
                </h3>

                <p
                  className={`mt-1 line-clamp-2 text-[10px] leading-[1.5] ${
                    index === 0 ? "text-white/75" : "text-slate-500"
                  }`}
                >
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}