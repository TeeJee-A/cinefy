"use client";
import breakingBad from "@/assets/images/breaking-bad.jpg";
import gameOfThrones from "@/assets/images/game-of-thrones.jpg";
import godfatherOfHarlem from "@/assets/images/godfather-of-harlem.jpg";
import vikings from "@/assets/images/vikings.jpg";
import { motion } from "motion/react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center pt-5">
      <div className=" flex md:gap-5 sm:gap-3 gap-2 justify-center items-center flex-col w-full  z-20 ">
        <motion.h1
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-montserrat text-foreground font-semibold text-center"
        >
          Stream Unlimited Movies<br></br>& TV Shows, Anytime
        </motion.h1>
        <motion.h2
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center lg:text-lg md:text-base sm:text-sm text-xs font-roboto font-light text-foreground mb-1"
        >
          Thousands of movies and series. One<br></br>subscription. Zero ads.
        </motion.h2>
        <motion.button
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          //   onClick={() => router.push("/login")}
          className="py-2 md:px-10 sm:px-8 px-6 font-montserrat text-white cursor-pointer  rounded-lg bg-primary md:text-base sm:text-sm text-xs"
        >
          Start Watching
        </motion.button>
      </div>
      <div className=" w-full flex flex-row justify-center items-end px-1 md:gap-5 sm:gap-3 gap-1">
        <div className="md:w-60 sm:w-48 w-40 aspect-[3/5] rounded-xl relative overflow-hidden">
          <motion.div
            initial={{ height: "100%" }}
            whileInView={{ height: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full h-full z-10 bg-background absolute top-0 right-0"
          ></motion.div>
          <motion.div
            initial={{ height: "100%" }}
            whileInView={{ height: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="w-full h-full bg-background/70 absolute z-0 top-0 right-0"
          ></motion.div>
          <Image
            alt="godfather of harlem"
            src={godfatherOfHarlem}
            className="w-full h-full absolute top-0 right-0 -z-10 object-cover"
          />
        </div>
        <div className="md:w-60 sm:w-48 w-40 rounded-xl relative aspect-square overflow-hidden	">
          <motion.div
            initial={{ height: "100%" }}
            whileInView={{ height: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full h-full z-10 bg-background absolute top-0 right-0"
          ></motion.div>
          <motion.div
            initial={{ height: "100%" }}
            whileInView={{ height: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="w-full h-full bg-background/70 absolute z-0 top-0 right-0"
          ></motion.div>
          <Image
            alt="game of thrones"
            src={gameOfThrones}
            className="w-full h-full absolute top-0 right-0 -z-10 object-cover"
          />
        </div>
        <div className="md:w-60 sm:w-48 w-40 rounded-xl relative aspect-square overflow-hidden	">
          <motion.div
            initial={{ height: "100%" }}
            whileInView={{ height: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full h-full z-10 bg-background absolute top-0 right-0"
          ></motion.div>
          <motion.div
            initial={{ height: "100%" }}
            whileInView={{ height: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="w-full h-full bg-background/70 absolute z-0 top-0 right-0"
          ></motion.div>
          <Image
            alt="vikings"
            src={vikings}
            className="w-full h-full absolute top-0 right-0 -z-10 object-cover"
          />
        </div>
        <div className="md:w-60 sm:w-48 w-40 aspect-[3/5] rounded-xl  relative overflow-hidden">
          <motion.div
            initial={{ height: "100%" }}
            whileInView={{ height: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full h-full z-10 bg-background absolute top-0 right-0"
          ></motion.div>
          <motion.div
            initial={{ height: "100%" }}
            whileInView={{ height: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="w-full h-full bg-background/70 absolute z-0 top-0 right-0"
          ></motion.div>
          <Image
            alt="breaking bad"
            src={breakingBad}
            className="w-full h-full absolute top-0 right-0 -z-10 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
