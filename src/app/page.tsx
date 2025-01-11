import { HeroSection } from '../components/hero-section';
import { AboutSection } from '../components/about-section';
import { EventsSection } from '../components/sections/events';
import { DirectorsMessage } from '../components/sections/directors-message';
import { Gallery } from '../components/sections/gallery';
import EventTimline from '../components/EventTimline';

export default function Home() {
  const events = [
    {
      time: "09:00 AM",
      title: "Opening Ceremony",
      description: "Welcome address and inauguration of Converges TecFest 2023"
    },
  
  {
    time: "10:30 AM",
    title: "Keynote Speaker",
    description: "Inspiring talk on the future of technology by industry leader"
  },
  {
    time: "12:00 PM",
    title: "Hackathon Kickoff",
    description: "Start of the 24-hour coding challenge"
  },
  {
    time: "02:00 PM",
    title: "AI Workshop",
    description: "Hands-on session on latest AI technologies and applications"
  },
  {
    time: "04:30 PM",
    title: "Tech Quiz",
    description: "Test your knowledge in this exciting tech trivia competition"
  },
  {
    time: "07:00 PM",
    title: "Networking Dinner",
    description: "Connect with fellow tech enthusiasts over a delicious meal"
  },
  {
    time: "09:00 PM",
    title: "Late Night Coding Session",
    description: "Continuation of hackathon with mentorship support"
  }
];

 
   return (
    <main className="min-h-screen bg-background">
      
      <HeroSection />
      <AboutSection />
      {/* <CardDisplay /> */}
     
      <EventsSection />
      <DirectorsMessage />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <EventTimline events={events} />
    </main>
      <Gallery />
    </main>
  );
}