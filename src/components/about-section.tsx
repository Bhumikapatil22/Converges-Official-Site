"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Typewriter } from "react-simple-typewriter";

export function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      id="about"
      ref={containerRef}
      className="to-black min-h-screen relative py-20"
    >
      <div className="container mx-auto px-4">
        <motion.div ref={ref} style={{ opacity }} className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-mono mb-8 text-center"
          >
            <span>About </span>
            <span className="text-green-400" style={{ fontFamily: "Orbitron" }}>
              <Typewriter
                words={[
                  "Converges...",
                  "Innovations...",
                  "Technologies...",
                  "Creativity...",
                ]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 font-mono text-slate-300 text-lg text-foreground/80"
          >
            <p className="text-justify">
              Recent decades have seen rapid technological advancements,
              transforming the world at an unprecedented pace. Key sectors like
              Electronics, Telecommunication, Mechanical, Computer, and IT are
              driving innovation to address 21st-century challenges.
              <br />
              <br />
              While numerous institutions promote academic excellence globally,
              there is a pressing need to enhance efforts to keep pace with the
              fast-evolving tech landscape.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 grid grid-cols-1 font-mono md:grid-cols-3 gap-8 text-center"
          >
            <div className="p-6 rounded-lg bg-gradient-to-b from-green-950">
              <h3 className="text-2xl font-mono mb-2">10+</h3>
              <p className="font-mono text-foreground/60">
                Years of Excellence
              </p>
            </div>
            <div className="p-6 rounded-lg bg-gradient-to-b from-green-950">
              <h3 className="text-2xl font-mono mb-2">50+</h3>
              <p className=" font-mono text-foreground/60">
                Events & Workshops
              </p>
            </div>
            <div className="p-6 rounded-lg bg-gradient-to-b from-green-950">
              <h3 className="text-2xl font-mono mb-2">5000+</h3>
              <p className="font-mono text-foreground/60">
                Annual Participants
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}