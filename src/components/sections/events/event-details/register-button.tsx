"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

interface RegisterButtonProps {
  link: string;
}

export function RegisterButton({ link }: RegisterButtonProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="flex justify-center"
    >
      <Button
        size="lg"
        className="text-lg group"
        onClick={() => window.open(link, '_blank')}
      >
        Register Now
        <ExternalLink className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
      </Button>
    </motion.div>
  );
}