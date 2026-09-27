import {
  ShieldCheck,
  Leaf,
  Users,
  HeartPulse,
} from "lucide-react";

const features = [
  {
    title: "Reliable Information",
    description: "Verified by healthcare professionals and trusted sources.",
    icon: ShieldCheck,
    bg: "bg-blue-100",
    color: "text-blue-500",
  },
  {
    title: "Better Lifestyle",
    description: "Small changes. Big improvements in your health.",
    icon: Leaf,
    bg: "bg-green-100",
    color: "text-green-500",
  },
  {
    title: "For Everyone",
    description: "Accessible, easy to use, and made for your journey.",
    icon: Users,
    bg: "bg-purple-100",
    color: "text-purple-500",
  },
  {
    title: "A Healthier Tomorrow",
    description: "Because your health matters. Today and always.",
    icon: HeartPulse,
    bg: "bg-teal-100",
    color: "text-teal-500",
  },
];

export function FeaturesBottom() {
  return (
    <section className="relative w-full overflow-hidden bg-slate-50">
      <div className="relative z-10 mx-auto grid max-w-[1500px] grid-cols-1 gap-6 px-6 py-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-12">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <div
              key={feature.title}
              className="flex items-start gap-4 border-b border-slate-200 pb-5 last:border-0 sm:border-b-0 lg:border-r lg:px-6 lg:last:border-r-0"
            >
              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${feature.bg}`}
              >
                <Icon className={`h-6 w-6 ${feature.color}`} />
              </div>

              <div>
                <h3 className="text-sm font-bold text-blue-950">
                  {feature.title}
                </h3>

                <p className="mt-1 text-xs leading-relaxed text-slate-500">
                  {feature.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>


    </section>
  );
}