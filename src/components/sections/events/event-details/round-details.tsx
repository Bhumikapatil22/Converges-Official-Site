"use client";

import { motion } from "framer-motion";
import { Target } from "lucide-react";

interface RoundDetailsProps {
  rounds: {
    name: string;
    description: string;
  }[] | null; // Allow rounds to be null
}

export function RoundDetails({ rounds }: RoundDetailsProps) {
  if (!rounds || rounds.length === 0) {
    // If rounds is null or an empty array, return null (nothing is rendered)
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-monobold">Rounds</h2>
      <div className="space-y-4">
        {rounds.map((round, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="flex items-start space-x-4 card-background p-4 rounded-lg"
          >
            <Target className="w-6 h-6 text-green-600 mt-1" />
            <div>
              <h3 className="font-monosemibold text-lg text-justify">
                Round {index + 1}: {round.name}
              </h3>
              <p className="text-muted-foreground text-justify">
                {round.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
