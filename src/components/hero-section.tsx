"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
// import { Button } from '@/src/components/ui/button';
import { ChevronDown } from 'lucide-react';
// import { AnimatedBackground } from './three/animated-background';
import { HeroContent } from './hero-content';

// import MovingBackground from './VantaBackground';
import VideoBackground from './VantaBackground';


export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div ref={ref} className="h-screen relative overflow-hidden bg-gradient-to-b from-background via-background/95 to-background/90">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />

      <VideoBackground

      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 h-full"
      >
        <HeroContent />
      </motion.div>

      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex justify-center items-center"
      >
        <ChevronDown className="h-8 w-8 text-green-400/60" />
      </motion.div>
    </div >
  );
}