import Features from "@/components/landing-page/features";
import HeroSection from "@/components/landing-page/hero-section";
import Testimonials from "@/components/landing-page/testimonials";
import Trending from "@/components/landing-page/trending";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col gap-10">
      <HeroSection />
      <Features />
      <Testimonials />
      <Trending />
    </div>
  );
}
