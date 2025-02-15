"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "./ui/button";
import { Typewriter } from "react-simple-typewriter";

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
        className="inset-0 z-30 space-y-1"
      >
        <div className="flex flex-col items-center">
          <Image
            src="/utils/new_unstoplogo.png"
            width={400}
            height={400}
            alt="Converges Logo"
            priority
            unoptimized
          />
        </div>

        <h2
          className="text-sm md:text-xl font-mono text-green-400"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          A National Level Technical Symposium
        </h2>
        <h1
          className="text-2xl md:text-4xl text-white"
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
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="inset-0 z-30 mt-4"
      >
        <a href="#events" aria-label="Explore Events">
          <Button
            size="lg"
            variant="outline"
            style={{ fontFamily: "Orbitron" }}
            className="border-green-800 hover:bg-sky-500/10 relative"
          >
            <Typewriter
              words={["Explore Events"]}
              loop={0}
              cursor
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={3000}
            />
          </Button>
        </a>
      </motion.div>
    </section>
  );
}
