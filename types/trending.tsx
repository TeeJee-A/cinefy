import LandingTitle from "@/components/shared/landing-title";
import { MarqueeDemo } from "./trending-marquee";

const Trending = () => {
  return (
    <div className="w-full bg-gradient-to-b from-[#12172505]  via-secondary to-transparent flex  justify-center xl:gap-10 lg:gap-8 md:gap-6 gap-4 items-center flex-col">
      <LandingTitle
        title="Explore Our Top Picks"
        subtitle="Hand-picked movies and shows you’ll love—updated daily."
      />
      <MarqueeDemo />
    </div>
  );
};

export default Trending;
