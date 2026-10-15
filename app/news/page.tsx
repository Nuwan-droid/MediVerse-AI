import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { NewsListing } from "@/components/news/NewsListing";
import { news } from "@/data/news";

export const metadata: Metadata = {
  title: "Health News — Good For Health",
  description:
    "Stay updated with the latest health discoveries, medical research, wellness tips and healthcare innovations.",
};

export default function NewsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f7f8fa]">
      <NewsListing items={news} />
      <Footer />
    </div>
  );
}
