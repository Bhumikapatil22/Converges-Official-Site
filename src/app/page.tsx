"use client";

import { HeroSection } from "../components/hero-section";
import { AboutSection } from "../components/about-section";
import { EventsSection } from "../components/sections/events";
import { Footer } from "../components/footer";
import { ContactSection } from "../components/contact";
// import { Timeline } from "@/components/eventTimeline";
import { MapSection } from "@/components/map-section";
// import { events } from "@/data/timeline";
import { MarqueeDemo } from "@/components/Marquee";
import { reviews } from "@/data/marqueedata";
// import EventTimeline from '@/components/EventTimline';

import HighlightsSection from "@/components/HighlightsSection";
import PrizeSection from "@/components/PrizeSection";

// import { events } from "@/data/timeline";
// import HighlightsSection from "@/components/HighlightsSection";

export default function Home() {
  const highlights: { type: "photo" | "video"; src: string; title: string }[] =
    [
      {
        type: "video",
        src: "/images/convergesvideo24.mp4",
        title: "Converges'24",
      },
      { type: "photo", src: "/images/6.jpg", title: "Converges'17" },
      { type: "photo", src: "/images/converges13.jpg", title: "Converges'13" },
      { type: "photo", src: "/images/22.jpg", title: "Detective Returns" },
      { type: "photo", src: "/images/20.jpg", title: "Amazing Akatsuki" },
      { type: "photo", src: "/images/codecraze2.jpg", title: "GDG RCPIT" },
      { type: "photo", src: "/images/codecraze1.jpg", title: "GDG Codecraze Hackathon" },
      { type: "photo", src: "/images/strangercode1.jpg", title: "Data Polaris" },
      { type: "photo", src: "/images/strangercode2.jpg", title: "Stranger Code" },
      { type: "photo", src: "/images/civista.jpg", title: "Civista" },
      { type: "photo", src: "/images/13.jpg", title: "Winners'24" },
      { type: "photo", src: "/images/14.jpg", title: "Team'24" },
      { type: "photo", src: "/images/3.jpg", title: "Robo Race" },
      { type: "photo", src: "/images/roborace.jpg", title: "Robo Race" },
      { type: "photo", src: "/images/17.jpg", title: "Inauguration'24" },
      { type: "photo", src: "/images/chromatic.jpg", title: "Detectives" },
      { type: "photo", src: "/images/1.jpg", title: "Inauguration" },
      { type: "photo", src: "/images/11.jpg", title: "Flashmob" },
      { type: "photo", src: "/images/12.jpg", title: "Winner Team" },
      { type: "photo", src: "/images/15.jpg", title: "Guest" },
      { type: "photo", src: "/images/16.jpg", title: "Inaugration" },
    ];

  return (
    <main className="min-h-screen w-[calc(100vw-3%)]">
      <HeroSection />
      <AboutSection />
      
      {/* Background Section */}
      <div className="relative inset-0">
        {/* Background Image with Overlay */}
        <div
          className=" font-mono absolute inset-0 bg-cover bg-center bg-fixed z-0"
          style={{
            backgroundImage: 'url("/utils/bg.png")',
          }}
        >
          {/* Overlay for Opacity Effect */}
          <div className="absolute inset-0 bg-black opacity-45"></div>
        </div>
        {/* Foreground Content */}
        <div className="relative z-30">
        <PrizeSection />
          <EventsSection />
          {/* <Timeline timelineData={events} /> */}
          <HighlightsSection items={highlights} />
          <MapSection />
          <MarqueeDemo reviews={reviews} />
          <ContactSection />
        </div>
      </div>

      {/* <EventsSection /> */}
      {/* <Timeline timelineData={events} /> */}

      <Footer />
      {/* <div className="relative inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed z-0"
          style={{
            backgroundImage: 'url("/utils/image.png")',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-80"></div>
        </div>
        <div className="relative z-30"></div>
      </div> */}
    </main>
  );
}
