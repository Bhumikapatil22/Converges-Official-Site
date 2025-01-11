"use client";
import { HeroSection } from '../components/hero-section';
import { AboutSection } from '../components/about-section';
import { EventsSection } from '../components/sections/events';
import { DirectorsMessage } from '../components/sections/directors-message';
import Images from '@/components/sections/gallery';  // Ensure the import is correct
import { Footer } from '../components/footer';
import { ContactSection } from '../components/contact';
import { Timeline } from '@/components/eventTimeline';
import { MapSection } from '@/components/map-section';
import { slides } from '@/data'; // Ensure this file exists and is structured correctly
import { useState } from 'react';
import { events } from '@/data/timeline';

export default function Home() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleImageClick = (index: number) => {
    setSelectedIndex(index);
    console.log(Selected Image Index: ${index});
  };

  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <EventsSection />
      
      <div>
        <h1>Image Gallery</h1>
        {/* Passing props to the Images component */}
        <Images data={slides} onClick={handleImageClick} />
        {selectedIndex !== null && <p>Selected Image Index: {selectedIndex}</p>}
      </div>
      <Timeline timelineData={events} />
      <MapSection />
      <ContactSection />
      <Footer />
    </main>
  );
}