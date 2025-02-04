import React, { useState } from "react";
import { delay, motion } from "framer-motion";

const PrizeSection = () => {
  const [showCelebration, setShowCelebration] = useState(false);

  const handleTrophyClick = () => {
    setShowCelebration(true);
    setTimeout(() => setShowCelebration(false), 2500);
  };

  return (
    <div className="p-4 flex flex-col items-center justify-start relative overflow-hidden h-auto">
      <motion.h2
        className="text-4xl md:text-5xl orbitron-font mb-4 text-green-500"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        Prize Pool
      </motion.h2>
      <p className="text-green-200 font-mono max-w-2xl mx-auto text-center text-lg md:text-xl mb-6 sm:mb-8">
        Get Ready to Shine Bright and Win Big!
      </p>
      <motion.div
        className="bg-transparent rounded-2xl p-6 sm:p-8 border-2 border-green-800 shadow-xl max-w-sm w-full relative"
        whileHover={{
          scale: 1.05,
          transition: { type: "spring", stiffness: 300, damping: 20 },
        }}
        style={{
          boxShadow: "0 0 10px rgba(0, 255, 0, 0.4), 0 0 20px rgba(0, 255, 0, 0.6), 0 0 30px rgba(0, 255, 0, 0.8)",
          animation: "glow 3s infinite alternate",
        }}
      >
        <motion.div
          className="flex justify-center mb-4 sm:mb-6"
          onClick={handleTrophyClick}
          whileTap={{ scale: 0.95 }}
        >
          <motion.img
            src="/images/—Pngtree—trophy cup champion trophy_14866270.png"
            alt="Trophy"
            className="w-50 h-50 sm:w-48 sm:h-48"
            style={{
              filter: "drop-shadow(0px 0px 10px rgba(255, 215, 0, 0.8))",
            }}
            animate={{
              rotateY: [0, 360],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>
        <motion.div
          className="text-center text-2xl sm:text-3xl font-bold font-mono text-yellow-400 mb-2 sm:mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          ₹2,00,000
        </motion.div>
        <p className="text-white text-center text-sm sm:text-lg font-mono leading-snug sm:leading-normal">
          Celebrating your creativity and innovation in technology!
        </p>
      </motion.div>
      {showCelebration && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(20)].map((_, i) => (
            <motion.img
              key={i}
              src="/images/—Pngtree—trophy cup champion trophy_14866270.png"
              alt="Trophy"
              className="w-8 h-8 sm:w-10 sm:h-10"
              initial={{
                opacity: 0,
                scale: 0,
                x: window.innerWidth / 2,
                y: window.innerHeight / 2,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1.2, 0],
                x: [
                  window.innerWidth / 2,
                  window.innerWidth * (Math.random() - 0.5),
                  window.innerWidth * (Math.random() - 0.5),
                ],
                y: [
                  window.innerHeight / 2,
                  window.innerHeight * (Math.random() - 0.5),
                  window.innerHeight * (Math.random() - 0.5),
                ],
                rotate: [0, Math.random() * 360, Math.random() * 720],
              }}
              transition={{
                duration: 2.5,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default PrizeSection;
