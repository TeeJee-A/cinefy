import LandingTitle from '../shared/landing-title';
import { MarqueeDemo } from './trending-marquee';

const Trending = () => {
  return (
    <div className="w-full bg-primary/5 flex  justify-center gap-4 py-10 items-center flex-col">
      <LandingTitle
        title="popular"
        subtitle="Explore Our Top Picks."
      />
      <MarqueeDemo />
    </div>
  );
};

export default Trending;
