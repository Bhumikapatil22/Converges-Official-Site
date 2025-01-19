"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Clock, MapPin } from 'lucide-react';

export function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="about" ref={containerRef} className=" to-black min-h-screen relative py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          style={{ opacity }}
          className="max-w-5xl mx-auto"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-8 text-center"
          >
            About <span className="text-sky-400">
              Converges
            </span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-slate-300 text-lg text-foreground/80"
          >
            <p className="text-justify">
              Over the last few decades we are witnessing remarkable advances and explosive growth in new technologies that are changing the world very fast.

              Electronics & Tele-communication, Mechanical, Computer and Information Technology sectors are indeed playing a significant role in facing the technological challenges of the 21st century.

              A number of Engineering colleges, Universities and Research Institutes are promoting all aspects of academics at national and international levels. Still it is felt that there is a strong need to give a new dimension to our efforts to catch up the rapid strides being made in technology.
            </p>
            <div className="flex ">
              <div className=" space-y-1">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>R. C. Patel Institute of Technology, Shirpur</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span>February 15-17, 2025</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <span>9:00 AM - 5:00 PM</span>
                </div>
              </div>
              {/* <div className=" text-justify">
              
              
            </div> */}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          >
            <div className="p-6 rounded-lg bg-gradient-to-b from-slate-950">
              <h3 className="text-2xl font-bold mb-2">10+</h3>
              <p className="text-foreground/60">Years of Excellence</p>
            </div>
            <div className="p-6 rounded-lg bg-gradient-to-b from-slate-950">
              <h3 className="text-2xl font-bold mb-2">50+</h3>
              <p className="text-foreground/60">Events & Workshops</p>
            </div>
            <div className="p-6 rounded-lg bg-gradient-to-b from-slate-950">
              <h3 className="text-2xl font-bold mb-2">5000+</h3>
              <p className="text-foreground/60">Annual Participants</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}