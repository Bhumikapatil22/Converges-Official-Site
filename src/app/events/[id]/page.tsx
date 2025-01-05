"use client";

import { motion } from 'framer-motion';
import { Button } from '@/src/components/ui/button';
import { Download } from 'lucide-react';

interface EventDetails {
  name: string;
  description: string;
  department: string;
  rounds: string[];
  coordinators: {
    faculty: string;
    student: string;
  };
  registrationLink: string;
  pdfLink?: string;
}

const eventDetails: Record<string, EventDetails> = {
  "1": {
    name: "Hackathon 2024",
    description: "24-hour coding challenge to solve real-world problems",
    department: "Computer Science",
    rounds: [
      "Round 1: Problem Statement Release and Team Formation",
      "Round 2: Initial Prototype Development",
      "Round 3: Final Presentation and Judging"
    ],
    coordinators: {
      faculty: "Dr. John Doe",
      student: "Jane Smith"
    },
    registrationLink: "https://forms.google.com/hackathon2024",
    pdfLink: "/events/hackathon2024.pdf"
  },
  // Add more events as needed
};

export default function EventPage({ params }: { params: { id: string } }) {
  const event = eventDetails[params.id];

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-card rounded-lg shadow-lg overflow-hidden"
        >
          <div className="p-8">
            <h1 className="text-3xl font-bold mb-6">{event.name}</h1>
            
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-2 text-primary">About the Event</h2>
                <p className="text-foreground/80">{event.description}</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-2 text-primary">Department</h2>
                <p className="text-foreground/80">{event.department}</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-2 text-primary">Rounds</h2>
                <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                  {event.rounds.map((round, index) => (
                    <li key={index}>{round}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-2 text-primary">Coordinators</h2>
                <div className="space-y-2 text-foreground/80">
                  <p><span className="font-medium">Faculty:</span> {event.coordinators.faculty}</p>
                  <p><span className="font-medium">Student:</span> {event.coordinators.student}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  className="flex-1"
                  onClick={() => window.open(event.registrationLink, '_blank')}
                >
                  Register Now
                </Button>
                
                {event.pdfLink && (
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => window.open(event.pdfLink, '_blank')}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download Details
                  </Button>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}