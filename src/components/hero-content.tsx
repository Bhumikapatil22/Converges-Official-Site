"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";

export function HeroContent() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-4 space-y-6 ">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="  inset-0 z-30 space-y-2"
      >
        <div className="flex justify-center">
        <img className="w-3/4 md:w-1/5 m-4" src="/utils/converges_white.png" alt="RCPIT Logo" />
        </div>
        {/* Title and Subtitle */}
        <h1 className="text-2xl md:text-4xl font-bold text-white">
          R. C. Patel Institute of Technology, Shirpur
        </h1>
        <p className="text-lg md:text-2xl text-gray-500">
          An Autonomous Institute
        </p>
      </motion.div>

      {/* Buttons moved below */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className=" inset-0 z-30 mt-4 flex gap-4"
      >
        {/* <Button size="lg" className="bg-sky-700 hover:bg-sky-900">
          Explore Events
        </Button> */}
        <Button size="lg" variant="outline" className="border-sky-500 hover:bg-sky-500/10">
          Explore Events
        </Button>
      </motion.div>
    </div>
  );
}
