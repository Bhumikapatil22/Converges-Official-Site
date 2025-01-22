"use client";

import { motion } from 'framer-motion';
import { ScrollArea } from '@/components/ui/scroll-area';
import { AlertCircle } from 'lucide-react';

interface RulesSectionProps {
  rules: string[];
}

export function RulesSection({ rules }: RulesSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="space-y-4"
    >
      <h2 className="text-2xl font-bold">Rules</h2>
      <ScrollArea className="h-[200px] card-background rounded-lg p-4">
        <ul className="space-y-3">
          {rules.map((rule, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-start space-x-3 text-justify"
            >
              <AlertCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <span>{rule}</span>
            </motion.li>
          ))}
        </ul>
      </ScrollArea>
    </motion.div>
  );
}