"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface AnimatedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export default function AnimatedButton({
  children,
  onClick,
  onMouseEnter,
  onMouseLeave,
}: AnimatedButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.button
      className="px-6 py-3 text-white bg-green-600 bg-opacity-30 backdrop-blur-md rounded-full border border-white/30 hover:bg-opacity-40 transition-all duration-500 ease-in-out"
      onHoverStart={() => {
        setIsHovered(true);
        if (onMouseEnter) onMouseEnter();
      }}
      onHoverEnd={() => {
        setIsHovered(false);
        if (onMouseLeave) onMouseLeave();
      }}
      onClick={onClick}
      style={{
        width: isHovered ? "250px" : "150px", // Button expands width only
      }}
    >
      <motion.span className="flex items-center justify-center gap-2">
        {children}
        <motion.span
          initial={{ opacity: 0, width: 0 }}
          animate={{
            opacity: isHovered ? 1 : 0, // Arrow fades in when hovered
            width: isHovered ? "auto" : 0, // Arrow expands on hover
          }}
          transition={{ duration: 0.3 }} // Arrow transition speed
          className="overflow-hidden"
        >
          <ArrowRight className="w-5 h-5" />
        </motion.span>
      </motion.span>
    </motion.button>
  );
}
