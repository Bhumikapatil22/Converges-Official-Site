"use client";
import { HeroSection } from '../components/hero-section';
import { AboutSection } from '../components/about-section';
import { EventsSection } from '../components/sections/events';
import { DirectorsMessage } from '../components/sections/directors-message';
import { Footer } from '../components/footer';
import { ContactSection } from '../components/contact';
import { Timeline } from '@/components/eventTimeline';
import { MapSection } from '@/components/map-section';
import { slides } from '@/data/data';
import { events } from '@/data/timeline';
import Gallery from '@/components/sections/gallery';
import { MarqueeDemo } from '@/components/Marquee';
import { reviews } from '@/data/marqueedata';
// import EventTimeline from '@/components/EventTimline';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      {/* Background Section */}
      <div className="relative inset-0">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed z-0"
          style={{
            backgroundImage: 'url("/utils/image.png")',
          }}
        >
          {/* Overlay for Opacity Effect */}
          <div className="absolute inset-0 bg-black opacity-80"></div>
        </div>
        {/* Foreground Content */}
        <div className="relative z-30">
          <EventsSection />
          <Timeline timelineData={events} />
          {/* <EventTimeline events={events} /> */}
          <Gallery
            images={slides}
            title="Our Gallery"
            subTitle="Explore our amazing collection of images"
          />

        </div>
      </div>
      <MapSection />
      <MarqueeDemo reviews={reviews} />
      <ContactSection />
      <div className="relative inset-0">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed z-0"
        style={{
          backgroundImage: 'url("/utils/image.png")',
        }}
      >
        {/* Overlay for Opacity Effect */}
        <div className="absolute inset-0 bg-black opacity-80"></div>
      </div>
      <div className="relative z-30">
        <Footer />
      </div>
      </div>
    </main>
  );
}
