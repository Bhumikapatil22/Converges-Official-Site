"use client";

import { motion } from 'framer-motion';
import { Users, CreditCard } from 'lucide-react';

interface EventInfoProps {
  description: string;
  teamSize: string;
  entryFee: string;
}

export function EventInfo({ description, teamSize, entryFee }: EventInfoProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="space-y-6 card-background p-6 rounded-lg"
    >
      <p className="text-lg text-justify">{description}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-center space-x-3">
          <Users className="w-5 h-5 text-green-600" />
          <div>
            <p className="font-medium">Team Size</p>
            <p className="cootext-muted-foreground">{teamSize}</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <CreditCard className="w-5 h-5 text-green-600" />
          <div>
            <p className="font-medium">Entry Fee</p>
            <p className="text-muted-foreground">{entryFee}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}