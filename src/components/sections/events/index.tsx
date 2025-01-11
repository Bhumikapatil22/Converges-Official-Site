"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { EventCard } from './event-card';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { eventsData } from '@/lib/events-data';

export function EventsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const years = Array.from(new Set(eventsData.map(event => event.year))).sort().reverse();
  const [currentYear, setCurrentYear] = useState(years[0]);

  const filteredEvents = eventsData.filter(event => event.year === currentYear);

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

        <Tabs defaultValue={currentYear} className="w-full mb-8">
          <TabsList className="flex justify-center">
            {years.map((year) => (
              <TabsTrigger
                key={year}
                value={year}
                onClick={() => setCurrentYear(year)}
                className="px-8"
              >
                {year}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {years.map((year) => (
            <TabsContent key={year} value={year}>
              <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredEvents.map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ }}
                  >
                    <EventCard {...event} />
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}