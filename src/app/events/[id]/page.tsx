import { notFound } from 'next/navigation'; // For handling not found pages
import { EventDetails } from '@/components/sections/events/event-details'; // Assuming EventDetails is a separate component
import { eventsData } from '@/lib/events-data'; // Your events data source

// Define the structure of the route parameters
interface EventPageParams {
  params: {
    id: string; // Route parameters are always strings in Next.js
  };
}

// Define the props for your EventPage component
interface EventPageProps {
  params: EventPageParams['params']; // Extracts the params from EventPageParams
}

// Generate static paths for all events based on `id`
// Converts `id` to string for proper route generation
export function generateStaticParams() {
  return eventsData.map((event) => ({
    id: event.id.toString(), // Converts the numeric `id` to string for routing
  }));
}

// Main EventPage component
export default function EventPage({ params }: EventPageProps) {
  const eventId = Number(params.id); // Convert the `id` parameter (string) to a number
  const event = eventsData.find((e) => e.id === eventId); // Find the event by its `id`

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
