"use client";

import { motion } from "motion/react";
import React from "react";

const LandingTitle = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <div className="flex flex-col justify-center items-center w-[90%]">
      <motion.strong
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-primary text-center font-montserrat font-light md:text-base sm:text-sm text-xs uppercase"
      >
        {title}
      </motion.strong>
      <motion.p
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="text-foreground/60 font-inter text-center font-light md:text-base sm:text-sm text-xs"
      >
        {subtitle}
      </motion.p>
    </div>
  );
};

export default LandingTitle;
