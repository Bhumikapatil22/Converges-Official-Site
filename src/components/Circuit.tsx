import { motion } from "framer-motion";

export function Circuit() {
  return (
    <>
      {/* Left Circuit */}
      <div className="absolute left-0 top-0 bottom-0 w-1/3">
        <svg className="h-full w-full" viewBox="0 0 200 800">
          <motion.path
            d="M0,400 Q50,400 100,350 T200,300"
            stroke="#4fd1c5"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{ duration: 2 }}
            style={{ filter: "drop-shadow(0px 0px 6px #4fd1c5)" }}
          />
          <motion.path
            d="M0,300 Q50,300 100,250 T200,200"
            stroke="#81e6d9"
            strokeWidth="1.5"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.5 }}
            transition={{ duration: 2.5 }}
          />
        </svg>
      </div>

      {/* Right Circuit */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3">
        <svg className="h-full w-full" viewBox="0 0 200 800">
          <motion.path
            d="M200,400 Q150,400 100,450 T0,500"
            stroke="#4fd1c5"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{ duration: 2 }}
            style={{ filter: "drop-shadow(0px 0px 6px #4fd1c5)" }}
          />
        </svg>
      </div>

      {/* Dots Pattern */}
      <div className="absolute right-0 top-0 w-1/4 h-full opacity-30">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#4fd1c5] rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              filter: "drop-shadow(0px 0px 4px #4fd1c5)",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </>
  );
}
