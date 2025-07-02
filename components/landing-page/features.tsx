"use client";

import { motion } from "motion/react";
import LandingTitle from "@/components/shared/landing-title";
import { FeaturesType, featuresData } from "@/types/features";

const Features = () => {
  return (
    <div className="w-full bg-primary/5 py-10 flex flex-col flex-wrap relative justify-center items-center gap-3 -z-10">
      <LandingTitle
        title="our Features"
        subtitle="Powerful Features for Effortless Streaming."
      />
      <div className="flex flex-row flex-wrap justify-center items-center md:gap-16 sm:gap-8 gap-6 w-[90%]">
        {featuresData.map((feature: FeaturesType, index: number) => (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            key={index}
            className="bg-primary p-6 aspect-square w-72 flex flex-col justify-center items-center rounded-xl shadow-lg"
          >
            <div className="flex justify-start items-start mb-4">
              <feature.icon />
            </div>
            <h3 className="text-lg font-semibold font-montserrat text-white">
              {feature.title}
            </h3>
            <p className="text-sm text-white/60 font-roboto font-light text-center">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Features;
