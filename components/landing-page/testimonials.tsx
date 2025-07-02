import CarouselLanding from "../ui/carousel-landing";
import LandingTitle from "../shared/landing-title";

const Testimonials = () => {
  return (
    <div className="w-full flex flex-col flex-wrap relative justify-center items-center gap-3">
      <LandingTitle
        title="testimonials"
        subtitle="What Our Users Are Saying."
      />
      <div className="">
        <CarouselLanding />
      </div>
    </div>
  );
};

export default Testimonials;
