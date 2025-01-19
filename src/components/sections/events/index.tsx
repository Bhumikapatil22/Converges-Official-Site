"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { EventCard } from "./event-card";
import { useState } from "react";
import { eventsData } from "@/lib/events-data";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function EventsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const years = Array.from(new Set(eventsData.map((event) => event.year)))
    .sort()
    .reverse();
  const [currentYear, setCurrentYear] = useState(years[0]);
  const currentIndex = years.indexOf(currentYear);

  const filteredEvents = eventsData.filter(
    (event) => event.year === currentYear
  );
  const handleNext = () => {
    if (currentIndex < years.length - 1) {
      setCurrentYear(years[currentIndex + 1]);
    }
  };
  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentYear(years[currentIndex - 1]);
    }
  };

  return (
    <section id="events" className="relative bg-transparent py-20">
      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-sky-400">
            Events
          </h2>
          <p className="text-sky-200 max-w-2xl mx-auto">
            Discover our exciting lineup of events designed to challenge and
            inspire.
          </p>
        </motion.div>
        <div className="relative flex items-center justify-center mb-12">
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className={`w-10 h-10 flex items-center justify-center rounded-full bg-cyan-950 text-sky-300 ${
              currentIndex === 0
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-cyan-800"
            }`}
          >
            <ChevronLeft size={20} />
          </button>
          <div className="flex items-center gap-4 mx-6 overflow-x-auto">
            {years.map((year, index) => (
              <motion.div
                key={year}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`px-4 py-2 rounded-full cursor-pointer ${
                  currentYear === year
                    ? "bg-cyan-950 text-white"
                    : "bg-sky-800 text-sky-300 hover:bg-sky-700 hover:text-white"
                }`}
                onClick={() => setCurrentYear(year)}
              >
                {year}
              </motion.div>
            ))}
          </div>
          <button
            onClick={handleNext}
            disabled={currentIndex === years.length - 1}
            className={`w-10 h-10 flex items-center justify-center rounded-full bg-cyan-950 text-sky-300 ${
              currentIndex === years.length - 1
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-cyan-800"
            }`}
          >
            <ChevronRight size={20} />
          </button>
        </div>
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
