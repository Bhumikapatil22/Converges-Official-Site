"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "./ui/button";
import { Typewriter } from "react-simple-typewriter";

export function HeroContent() {
  return (
    <section
      className="flex flex-col items-center justify-center h-full text-center px-4 space-y-6 relative"
      aria-label="Hero Section"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="inset-0 z-30 space-y-4 flex flex-col items-center"
      >
        <Image
          src="/utils/PHGS Logo White 1.jpg"
          alt="PHGS Logo"
          width={200}
          height={100}
          className="w-[120px] md:w-[180px] lg:w-[220px] h-auto mb-4"
        />
    

        <div className="flex flex-col items-center">
          <Image
            src="/utils/new_unstoplogo.png"
            width={350}
            height={350}
            alt="Converges Logo"
            priority
            unoptimized
            className="w-[250px] md:w-[300px] lg:w-[350px] h-auto"
          />
        </div>

        <h2 className="text-sm md:text-xl text-green-400" style={{ fontFamily: "Orbitron, sans-serif" }}>
          A National Level Technical Symposium
        </h2>
        <h1 className="text-2xl md:text-4xl text-white" style={{ fontFamily: "Orbitron, sans-serif" }}>
          R. C. Patel Institute of Technology, Shirpur
        </h1>
        <p className="text-lg md:text-2xl text-gray-500" style={{ fontFamily: "Orbitron, sans-serif" }}>
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
            className="border-green-800 hover:bg-sky-500/10 relative"
            style={{ fontFamily: "Orbitron, sans-serif" }}
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
