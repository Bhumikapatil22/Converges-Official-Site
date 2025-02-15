"use client";

import { notFound } from "next/navigation";
import { EventDetails } from "@/components/sections/events/event-details";
import { eventsData } from "@/lib/events-data";

// Define the type for the event object
type EventType = {
  name: string;
  logo: string;
  department: string;
  year: string;
  description: string;
  teamSize: string;
  entryFee: string;
  rounds: { name: string; description: string }[];
  rules: string[];
  coordinators: {
    student: { name: string; contact: string }[];
    faculty: { name: string; contact: string }[];
  };
  registrationLink: string;
  slug: string;
};

export default function EventPage({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const event = eventsData.find((e) => e.slug === slug) as
    | EventType
    | undefined;
  if (!event) {
    return notFound();
  }

  return (
    <main className="relative min-h-screen">
      <video
        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/utils/codeplayback.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 -z-5"></div>
      <div className="relative z-10 container mx-auto px-4 pt-20 pb-12">
        <EventDetails event={event} />
      </div>
    </main>
  );
}
