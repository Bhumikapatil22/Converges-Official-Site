"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { EventCard } from "./event-card";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { eventsData } from "@/lib/events-data";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function EventsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const years = Array.from(new Set(eventsData.map((event) => event.year))).sort().reverse();
  const [currentYear, setCurrentYear] = useState(years[0]);
  const currentIndex = years.indexOf(currentYear);

  const filteredEvents = eventsData.filter((event) => event.year === currentYear);

  // Navigate to the next year
  const handleNext = () => {
    if (currentIndex < years.length - 1) {
      setCurrentYear(years[currentIndex + 1]);
    }
  };

  // Navigate to the previous year
  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentYear(years[currentIndex - 1]);
    }
  };

  return (
    <section id="events" className="relative bg-transparent py-20">
      {/* Content */}
      <div className="relative  z-10 container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-sky-400">Events</h2>
          <p className="text-sky-200 max-w-2xl mx-auto">
            Discover our exciting lineup of events designed to challenge and inspire.
          </p>
        </motion.div>

        {/* Navigation and Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          {/* Previous Button */}
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className={`flex items-center gap-2 px-4 py-2 bg-cyan-950 text-sky-300 rounded-md ${
              currentIndex === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-cyan-800"
            }`}
          >
            <ChevronLeft />
          </button>

          {/* Tabs Navigation */}
          <Tabs value={currentYear} onValueChange={setCurrentYear} className="flex-1">
            <TabsList className="flex flex-wrap justify-center  bg-sky-500/10 rounded-md">
              {years.map((year) => (
                <TabsTrigger
                  key={year}
                  value={year}
                  className={`px-4 text-sm  ${
                    currentYear === year
                      ? "bg-cyan-950 text-white"
                      : "text-sky-400 hover:bg-sky-800 hover:text-white"
                  }`}
                >
                  {year}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          {/* Next Button */}
          <button
            onClick={handleNext}
            disabled={currentIndex === years.length - 1}
            className={`flex items-center gap-2 px-4 py-2 bg-cyan-950 text-sky-300 rounded-md ${
              currentIndex === years.length - 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-cyan-800"
            }`}
          >
            <ChevronRight />
          </button>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <EventCard {...event} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
