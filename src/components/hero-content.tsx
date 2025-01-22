"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import AnimatedButton from "./ui/animated-button"; // Default import

export function HeroContent() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <section
      className="flex flex-col items-center justify-center h-full text-center px-4 space-y-6"
      aria-label="Hero Section"
    >
      {/* Include Google Fonts */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900&family=Tiro+Devanagari+Marathi:ital@0;1&display=swap');
      `}</style>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="inset-0 z-30 space-y-2"
      >
        {/* Logo */}
        <div className="flex justify-center">
          <Image
            src="/utils/converges_white.png"
            width={200}
            height={300}
            alt="Converges Logo"
            priority
          />
        </div>

        {/* Title and Subtitle */}
        <h1
          className="text-2xl md:text-4xl font-bold text-white"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          R. C. Patel Institute of Technology, Shirpur
        </h1>
        <p
          className="text-lg md:text-2xl text-gray-500"
          style={{ fontFamily: "Orbitron" }}
        >
          An Autonomous Institute
        </p>
      </motion.div>

      {/* Replace Button with AnimatedButton */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="inset-0 z-30 mt-4"
      >
        <AnimatedButton
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          EXPLORE
        </AnimatedButton>
      </motion.div>
    </section>
  );
}
