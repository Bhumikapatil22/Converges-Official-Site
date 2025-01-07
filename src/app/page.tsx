import { HeroSection } from '../components/hero-section';
import { AboutSection } from '../components/about-section';
import { EventsSection } from '../components/sections/events';
import { DirectorsMessage } from '../components/sections/directors-message';
import { Gallery } from '../components/sections/gallery';
import CardDisplay from '@/src/components/Cards';


export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      
      <HeroSection />
      <AboutSection />
      {/* <CardDisplay /> */}
     
      <EventsSection />
      <DirectorsMessage />
      <Gallery />
    </main>
  );
}