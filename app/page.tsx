import { HeroSection } from "@/components/HeroSection";
import { FeaturesBottom } from "@/components/FeaturesBottom";
import { LatestArticles } from "@/components/LatestArticles";
import { LatestHealthNews } from "@/components/LatestHealthNews";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <HeroSection />
      <FeaturesBottom />
      <LatestArticles />
      <LatestHealthNews />
      <FAQSection />
      <Footer />
    </div>
  );
}