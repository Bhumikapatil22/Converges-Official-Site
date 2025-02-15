"use client";

import { motion } from 'framer-motion';
import { EventHeader } from './event-header';
import { EventInfo } from './event-info';
import { RoundDetails } from './round-details';
import { RulesSection } from './rules-section';
import { CoordinatorInfo } from './coordinator-info';
import { RegisterButton } from './register-button';
import Image from 'next/image';

export interface EventDetailsProps {
  event: {
    name: string;
    logo:string;
    year: string;
    department: string;
    description: string;
    teamSize: string;
    entryFee: string;
    rounds: {
      name: string;
      description: string;
    }[];
    rules: string[];
    coordinators: {
      student: { name: string; contact: string; }[];
      faculty: { name: string; contact: string; }[];
    };
    registrationLink: string;
  }
}

export function EventDetails({ event }: EventDetailsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto p-6  font-mono space-y-8 bg-transparent"
    >
       <div className="flex justify-center">
        <Image className="w-3/4 md:w-1/4 box-s" width={200} height={200} src="/utils/converges_white.png" alt="RCPIT Logo" />
        </div>
        
      <EventHeader name={event.name} department={event.department} />
      <EventInfo description={event.description} teamSize={event.teamSize} entryFee={event.entryFee} />
      <RoundDetails rounds={event.rounds} />
      <RulesSection rules={event.rules} />
      <CoordinatorInfo coordinators={event.coordinators} />
      {(Number(event.year) === 2025) && <RegisterButton link={event.registrationLink} />}
    </motion.div>
  );
}