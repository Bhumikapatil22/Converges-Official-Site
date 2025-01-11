"use client";
import { motion } from "framer-motion";
import { Clock, Coffee, Trophy, AlertCircle, Download } from "lucide-react";
import { JSX } from "react";

interface TimelineItem {
  time: string;
  title: string;
  description?: string;
  icon?: JSX.Element;
}

interface TimelineProps {
  timelineData: TimelineItem[];
}

export function Timeline({ timelineData }: TimelineProps) {
  return (
    <div className="max-w-4xl mx-auto py-8 md:px-4">
      <div className="flex text-4xl font-semibold justify-center my-20">
        <h1>Event Schedule</h1>
      </div>

      <div className="relative">
        <div className="absolute left-1/2 h-full w-0.5 bg-border -translate-x-1/2" />

        <div className="space-y-8">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 z-10">
                <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping" />
              </div>

              <div
                className={`flex justify-center items-center gap-8 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div
                  className={`w-[calc(50%-2rem)] ${
                    index % 2 === 0 ? "text-right md:pr-8" : "text-left md:pl-8"
                  }`}
                >
                  <div className="bg-card p-4 rounded-lg shadow-lg border border-border hover:shadow-xl hover:shadow-blue-400/50 transition-all">
                    <div
                      className={`flex items-center gap-2 mb-2 ${
                        index % 2 === 0 ? "justify-end" : "justify-start"
                      }`}
                    >
                      {index % 2 === 1 && item.icon}
                      <span className="text-sm font-medium text-primary">
                        {item.time}
                      </span>
                      {index % 2 === 0 && item.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                    {item.description && (
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>

                <div className="w-[calc(50%-2rem)]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* for schedule download button 
       <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex justify-center mt-8"
      >
        <a
          href="/event-schedule.pdf"
          download="event-schedule.pdf"
          className="bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white shadow-md shadow-blue-500/50 hover:shadow-lg hover:shadow-blue-600/60 transition-all w-full max-w-xs flex items-center justify-center"
        >
          <Download className="w-4 h-4 mr-2" />
          Download Schedule
        </a>
      </motion.div> */}
    </div>
  );
}
