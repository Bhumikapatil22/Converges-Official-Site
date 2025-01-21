"use client"

import { notFound } from 'next/navigation';
import { EventDetails } from '@/components/sections/events/event-details';
import { eventsData } from '@/lib/events-data';

export default function EventPage({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  
  const event = eventsData.find((e) => e.slug === slug);

  // If the event is not found, return a 404 page using the `notFound` function
  if (!event) {
    return notFound();
  }

  return (
    <main className="relative min-h-screen">
      {/* Fixed Video Background */}
      <video
        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/utils/video3 (1).mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Overlay for better text visibility */}
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 -z-5"></div>

      {/* Scrolling Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20 pb-12">
        <EventDetails event={event} /> {/* Assuming EventDetails expects an event prop */}
      </div>
    </main>
  );
}
