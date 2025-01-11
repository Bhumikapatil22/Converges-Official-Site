"use client";

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import {events} from '../../data/events'

export default function EventsPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen pt-20 bg-background">
      <div className="container mx-auto px-4 pb-12">
        <h1 className="text-4xl font-bold text-center mb-12">Upcoming Events</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <motion.div
              key={event.id}
              whileHover={{ scale: 1.02 }}
              className="bg-card p-6 rounded-lg cursor-pointer"
            >
              <h2 className="text-2xl font-bold mb-2">{event.name}</h2>
              <p className="text-muted-foreground mb-4">{event.department}</p>
              <p className="line-clamp-3">{event.description}</p>
              <button 
                className="mt-4 inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                onClick={() => router.push(`/events/${event.id}`)}
              >
                View Details
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}