import React from "react";
import { Clock } from "lucide-react";

interface TimelineItemProps {
  time: string;
  title: string;
  description: string;
  isLeft: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  time,
  title,
  description,
  isLeft,
}) => (
  <div
    className={`mb-8 flex justify-between items-center w-full ${
      isLeft ? "flex-row-reverse" : "flex-row"
    }`}
  >
    <div className="order-1 w-5/12"></div>
    <div className="z-20 flex items-center order-1 bg-grey-800 shadow-xl w-8 h-8 rounded-full">
      <h1 className="mx-auto font-mono text-lg text-white">
        <Clock className="w-5 h-5" />
      </h1>
    </div>
    <div className="order-1 bg-gray-100 rounded-lg shadow-xl w-5/12 px-6 py-4">
      <h3 className="mb-3 font-bold text-gray-800 text-xl">{title}</h3>
      <time className="mb-3 font-normal leading-none text-gray-500 text-sm">
        {time}
      </time>
      <p className="text-sm font-medium leading-snug tracking-wide text-gray-600 text-opacity-100">
        {description}
      </p>
    </div>
  </div>
);

interface TimelineProps {
  events: TimelineItemProps[];
}

const EventTimeline: React.FC<TimelineProps> = ({ events }) => {
  return (
    <div className="container mx-auto w-full h-full">
      <h2 className="text-3xl font-bold text-center mb-8">Event Timeline</h2>
      <div className="relative wrap overflow-hidden p-10 h-full">
        <div
          className="absolute border-2 border-opacity-20 border-gray-700 h-full"
          style={{ left: "50%" }}
        ></div>
        {events.map((event, index) => (
          <TimelineItem key={index} {...event} isLeft={index % 2 === 0} />
        ))}
      </div>
    </div>
  );
};

export default EventTimeline;
