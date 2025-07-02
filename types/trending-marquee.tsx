import { Marquee } from "@/components/magicui/marquee";
import {
  Movie,
  MOVIE_POSTER_BASE_URL,
  useGetMovieTopRatedQuery,
  useGetTvTopRatedQuery,
} from "@/features/api/api-slice";
import { cn } from "@/lib/utils";
import { IconStarFilled } from "@tabler/icons-react";
import { motion } from "motion/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const ReviewCard = ({
  backdrop_path,
  name,
  vote_average,
}: {
  backdrop_path: string;
  name: string;
  vote_average: number;
}) => {
  const [hovered, setHovered] = useState(false);
  const router = useRouter();
  return (
    <motion.figure
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.6 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => router.push("/login")}
      className={cn(
        "relative h-[130px] cursor-pointer w-[260px] rounded-lg overflow-hidden "
      )}
    >
      <Image
        className="w-full h-full absolute"
        src={`${MOVIE_POSTER_BASE_URL}${backdrop_path}`}
        alt="image"
        fill
      />
      <div
        className={`w-full h-full absolute transition-all duration-700 bottom-0 px-2 flex flex-col justify-end ${
          hovered ? "bg-black/70" : "bg-black/0"
        }`}
      >
        <div
          className={`opacity-1 transition-all duration-700 p-2 font-oswald ${
            hovered ? "translate-y-0" : "translate-y-20"
          }`}
        >
          <h1 className="">{name}</h1>
          <p className="sm:text-xs text-[9px] text-white font-medium flex gap-0.5">
            <IconStarFilled className="text-[#F5C516] sm:w-4 w-3 sm:h-4 h-3" />
            {vote_average.toFixed(2)}/
            <span className="font-light text-white/70">10</span>
          </p>
        </div>
      </div>
    </motion.figure>
  );
};

export function MarqueeDemo() {
  const {
    data: movies,
    error: movieError,
    isLoading: movieLoading,
    isFetching: movieFetching,
  } = useGetMovieTopRatedQuery({});
  const {
    data: tvs,
    error: tvError,
    isLoading: tvLoading,
    isFetching: tvFetching,
  } = useGetTvTopRatedQuery({});
  const topRatedMovie: Movie[] = movies?.results ?? [];
  const topRatedTv: Movie[] = tvs?.results ?? [];
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:50s]">
        {topRatedMovie.map((movie: Movie, index: number) => (
          <ReviewCard
            key={index}
            backdrop_path={movie.backdrop_path}
            name={movie.title}
            vote_average={movie.vote_average}
          />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:50s] ">
        {topRatedTv.map((movie: Movie, index: number) => (
          <ReviewCard
            key={index}
            backdrop_path={movie.backdrop_path}
            name={movie.name}
            vote_average={movie.vote_average}
          />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
