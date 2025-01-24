"use client";

import { motion } from 'framer-motion';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Calendar, Users, Info } from 'lucide-react';

interface EventCardProps {
  name: string;
  department: string;
  description: string;
  date: string;
  year:number;
  logo:string;
}

export function EventCard({ name, department, description, date }: EventCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, rotateY: 5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="p-6 h-full flex flex-col">
       
        <h3 className="text-2xl font-mono mb-2">{name}</h3>
        <div className="flex items-center text-muted-foreground mb-2">
          <Users className="w-4 h-4 mr-2" />
          <span>{department}</span>
        </div>
        <div className="flex items-center text-muted-foreground mb-4">
          <Calendar className="w-4 h-4 mr-2" />
          <span>{date}</span>
        </div>
        <p className="text-muted-foreground flex-grow">{description}</p>
        <Button className="mt-4 w-full" variant="secondary">
          <Info className="w-4 h-4 mr-2" />
          View Details
        </Button>
      </Card>
    </motion.div>
  );
}