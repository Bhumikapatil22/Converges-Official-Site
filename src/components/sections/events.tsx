"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { EventCard } from '../eventsCards';

const events = [
  {
    name: "Hackathon 2024",
    department: "Computer Science",
    description: "24-hour coding challenge to solve real-world problems",
    date: "March 15, 2024",
    year:2023,
    logo:""

  },
  {
    name: "Robotics Workshop",
    department: "Mechanical Engineering",
    description: "Hands-on workshop on building and programming robots",
    date: "March 16, 2024",
    year:2023,
     logo:""
  },
  {
    name: "AI Summit",
    department: "Data Science Club",
    description: "Exploring the latest trends in artificial intelligence",
    date: "March 17, 2024",
    year:2023,
    logo:""
  }
];

export function EventsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-background/50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Events</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our exciting lineup of events designed to challenge and inspire.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <motion.div
              key={event.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <EventCard {...event} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}