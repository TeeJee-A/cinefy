"use client";

import { testimonialsData, TestimonialsType } from "@/types/testimonials";
import { IconChevronLeft, IconChevronRight, IconStarFilled } from "@tabler/icons-react";
import { motion } from "motion/react";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

export default function CarouselLanding() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + testimonialsData.length) % testimonialsData.length
    );
  };

  const getCardStyle = (index: number) => {
    const position =
      (index - currentIndex + testimonialsData.length) %
      testimonialsData.length;

    if (position === 0) {
      return {
        transform: "translateX(0) translateY(0) rotateY(0deg) scale(1)",
        zIndex: 30,
      };
    } else if (position === 1) {
      return {
        transform:
          "translateX(200px) translateY(20px) rotateY(-25deg) scale(0.85)",
        zIndex: 20,
        rotate: "5deg",
      };
    } else if (position === testimonialsData.length - 1) {
      return {
        transform:
          "translateX(-200px) translateY(20px) rotateY(25deg) scale(0.85)",
        zIndex: 20,
        rotate: "-5deg",
      };
    } else if (position === 2) {
      return {
        transform:
          "translateX(400px) translateY(20px) rotateY(-25deg) scale(0.85)",
        zIndex: 10,
        rotate: "10deg",
      };
    } else if (position === testimonialsData.length - 2) {
      return {
        transform:
          "translateX(-400px) translateY(20px) rotateY(25deg) scale(0.85)",
        zIndex: 10,
        rotate: "-10deg",
      };
    } else {
      return {
        transform: "translateX(0) translateY(0) rotateY(0deg) scale(0.7)",
        zIndex: 10,
      };
    }
  };

  return (
    <motion.div className="flex flex-col items-center justify-center ">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative w-full flex items-center from-black via-slate-900 to-gray-800 justify-center"
      >
        <div className="relative md:w-80 sm:w-72 w-64 h-80">
          {testimonialsData.map((item: TestimonialsType, index: number) => (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full bg-gradient-to-br  rounded-3xl shadow-2xl transition-all duration-700 ease-in-out cursor-pointer overflow-hidden`}
              style={getCardStyle(index)}
              onClick={() => setCurrentIndex(index)}
            >
              <div className="relative h-full p-8 flex flex-col justify-center gap-4 bg-background">
                <div className="absolute top-4 right-4 w-24 h-24 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-xl" />
                <div className="absolute bottom-8 left-4 w-16 h-16 bg-gradient-to-tr from-white/5 to-transparent rounded-full" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-radial from-white/5 to-transparent rounded-full blur-2xl" />
                <div className="relative z-10 ">
                  <Avatar>
                    <AvatarImage src={item.image} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>
                <div className="flex flex-row">
                  {Array.from({ length: item.stars }).map((_, index) => (
                    <IconStarFilled key={index} className="text-[#F5C516]" />
                  ))}
                </div>
                <div className="relative z-10 text-foreground">
                  <h3 className="md:text-2xl sm:text-xl text-lg font-montserrat font-bold mb-2 tracking-wide">
                    {item.name}
                  </h3>
                  <p className="text-foreground/70 sm:text-sm text-xs font-roboto font-light tracking-wider">
                    {item.review}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="flex space-x-2 mt-8 justify-center items-center"
      >
        <button
          onClick={() => prevSlide()}
          className="w-10 h-10 rounded-full  flex justify-center items-center transition-all duration-500 hover:bg-primary"
        >
          <IconChevronLeft className="w-5 h-5" />
        </button>
        {testimonialsData.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-primary" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
        <button
          onClick={() => nextSlide()}
          className="w-10 h-10 rounded-full  flex justify-center items-center transition-all duration-500 hover:bg-primary"
        >
          <IconChevronRight className="w-5 h-5" />
        </button>
      </motion.div>
    </motion.div>
  );
}
