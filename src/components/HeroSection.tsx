import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative h-[550px] w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.jpeg"
          alt="Woman enjoying a mountain landscape"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-white/10" />
      </div>

      {/* Hero content */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1440px] items-center px-7 sm:px-8 lg:px-7">
        <div className="w-full max-w-[510px]">
          <h1 className="text-[36px] font-extrabold leading-[1.12] tracking-tight text-black sm:text-[40px] lg:text-[44px]">
            Everything about
            <br />
            health in one place
          </h1>

          <p className="mt-4 max-w-[410px] text-[13px] leading-[1.3] text-slate-800 sm:text-sm">
            Understand diseases, find the right care and track your
            wellbeing — trusted health information, tools and doctors,
            connected in one place.
          </p>

          {/* Search bar */}
          <div className="mt-5 w-full max-w-[500px]">
            <div className="relative flex h-[48px] items-center rounded-full bg-white p-1 shadow-sm">
              <Search className="ml-4 h-4 w-4 shrink-0 text-black" />

              <Input
                type="text"
                placeholder="Search for diseases, symptoms, medicines, foods, exercises..."
                aria-label="Search health information"
                className="h-full min-w-0 flex-1 border-0 bg-transparent px-3 text-xs text-black shadow-none placeholder:text-slate-500 focus-visible:ring-0 sm:text-[13px]"
              />

              <Button
                type="button"
                aria-label="Search"
                className="h-[40px] w-[40px] shrink-0 rounded-full bg-blue-600 p-0 text-white hover:bg-blue-700"
              >
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}