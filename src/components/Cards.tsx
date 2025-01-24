"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function HeroContent() {
  return (
    <section
      className="flex flex-col items-center justify-center h-full text-center px-4 space-y-6"
      aria-label="Hero Section"
    >
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
          className="text-2xl md:text-4xl font-monobold text-white"
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

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="inset-0 z-30 mt-4 flex gap-4"
      >
        <a href="#events" aria-label="Explore Events">
          <button
            className="px-5 py-2 text-white font-monosemibold rounded-full border border-[rgb(160,30,95)] hover:scale-105 transition-transform"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            Explore Events
          </button>
        </a>
      </motion.div>
    </section>
  );
}
