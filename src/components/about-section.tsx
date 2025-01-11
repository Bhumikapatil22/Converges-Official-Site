"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Rocket, Users, Calendar, Trophy, Target, Lightbulb } from "lucide-react";

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

  const features = [
    {
      icon: <Target className="w-8 h-8 text-red-600" />,
      title: "Our Mission",
      description:
        "To foster innovation and technological advancement through collaborative learning and knowledge sharing.",
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-red-600" />,
      title: "Our Vision",
      description:
        "To become a leading platform for technological discourse and innovation in engineering education.",
    },
    {
      icon: <Trophy className="w-8 h-8 text-red-600" />,
      title: "Our Goal",
      description:
        "To bridge the gap between academic learning and industry requirements through practical exposure.",
    },
  ];

  return (
    <section
      ref={containerRef}
      className="min-h-screen relative py-20 overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url('\ai-generated-8498119_1280.jpg\')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(3px)",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div ref={ref} style={{ opacity }} className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-8 text-center text-white"
          >
            About Converges
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-black/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl mb-12 border border-red-600/30"
          >
            <div className="space-y-6 text-lg text-white">
              <p className="text-justify leading-relaxed">
                Over the last few decades, we are witnessing remarkable advances
                and explosive growth in new technologies that are revolutionizing
                our world at an unprecedented pace.
              </p>
              <p className="text-justify leading-relaxed">
                Electronics & Telecommunication, Mechanical, Computer, and
                Information Technology sectors are indeed playing a pivotal role
                in addressing the technological challenges of the 21st century.
              </p>
              <p className="text-justify leading-relaxed">
                While numerous Engineering colleges, Universities, and Research
                Institutes are promoting academic excellence at national and
                international levels, we recognize the pressing need to give a
                new dimension to our efforts in keeping pace with rapid
                technological advancements.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.05,
                  rotateX: 10,
                  rotateY: 10,
                  transition: { duration: 0.2 },
                }}
                className="bg-black/90 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-red-600/30 
                           hover:border-red-600 transition-all duration-300 transform-gpu
                           hover:shadow-red-600/20 hover:shadow-2xl
                           perspective-1000"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <motion.div
                  className="flex items-center justify-center mb-4"
                  style={{ transform: "translateZ(20px)" }}
                >
                  {feature.icon}
                </motion.div>
                <motion.h3
                  className="text-xl font-bold text-white mb-2 text-center"
                  style={{ transform: "translateZ(15px)" }}
                >
                  {feature.title}
                </motion.h3>
                <motion.p
                  className="text-gray-300 text-center"
                  style={{ transform: "translateZ(10px)" }}
                >
                  {feature.description}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          >
            {[
              { icon: <Rocket />, number: "10+", text: "Years of Excellence" },
              { icon: <Calendar />, number: "50+", text: "Events & Workshops" },
              { icon: <Users />, number: "5000+", text: "Annual Participants" },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.05,
                  rotateX: 15,
                  rotateY: 15,
                  transition: { duration: 0.2 },
                }}
                className="bg-black/90 backdrop-blur-sm p-8 rounded-xl shadow-lg border-2 border-red-600/30 
                           hover:border-red-600 transition-all duration-300 transform-gpu
                           hover:shadow-red-600/20 hover:shadow-2xl
                           perspective-1000"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <motion.div
                  className="w-10 h-10 mx-auto mb-4 text-red-600"
                  style={{ transform: "translateZ(30px)" }}
                >
                  {item.icon}
                </motion.div>
                <motion.h3
                  className="text-3xl font-bold mb-2 text-white"
                  style={{ transform: "translateZ(20px)" }}
                >
                  {item.number}
                </motion.h3>
                <motion.p
                  className="text-gray-300"
                  style={{ transform: "translateZ(10px)" }}
                >
                  {item.text}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
