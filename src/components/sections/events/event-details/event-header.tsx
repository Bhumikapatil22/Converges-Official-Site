"use client";
import { motion } from 'framer-motion';

interface EventHeaderProps {
  name: string;
  department: string;
  
}

export function EventHeader({ name, department }: EventHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center space-y-4"
    >
      {/* <div className="flex justify-center">
        <motion.img 
          src={logo}
          alt={`${name} logo`} // Use alt text for accessibility
          className="w-20"
          onError={(e) => (e.currentTarget.src = "/utils/default-logo.png")} // Set a default logo if the image doesn't load
        />
      </div> */}
      <h1 className="text-4xl font-monosemibold">{name}</h1>
      <p className="text-xl text-muted-foreground">{department}</p>
    </motion.div>
  );
}

