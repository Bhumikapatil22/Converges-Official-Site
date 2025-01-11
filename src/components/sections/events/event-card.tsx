"use client";

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Users, Info } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface EventCardProps {
  id: number;
  name: string;
  department: string;
  description: string;
  year: string;
}

export function EventCard({ id, name, department, description, year }: EventCardProps) {
  const router = useRouter();

  const handleViewDetails = () => {
    router.push(`/events/${id}`);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.09, rotateY: 5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="p-6 h-80 flex flex-col">
        <h3 className="text-2xl font-bold mb-2">{name}</h3>
        <div className="flex items-center text-muted-foreground mb-2">
          <Users className="w-4 h-4 mr-2" />
          <span>{department}</span>
        </div>
        
        <p className="text-muted-foreground flex-grow">{description}</p>
        <Button 
          className="mt-4 w-full" 
          variant="secondary"
          onClick={handleViewDetails}
        >
          <Info className="w-4 h-4 mr-2" />
          View Details
        </Button>
      </Card>
    </motion.div>
  );
}