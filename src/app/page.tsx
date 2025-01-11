"use client";
import { HeroSection } from "../components/hero-section";
import { AboutSection } from "../components/about-section";
import { EventsSection } from "../components/sections/events";
import Images from "@/components/sections/gallery"; // Ensure the import is correct
import { Footer } from "../components/footer";
import { ContactSection } from "../components/contact";
import { Timeline } from "@/components/eventTimeline";
import { MapSection } from "@/components/map-section";
import { slides } from "@/data"; // Ensure this file exists and is structured correctly
import { useState } from "react";
import { events } from "@/data/timeline";
import HighlightsSection from "@/components/HighlightsSection";

export default function Home() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const highlights: { type: "photo" | "photo"; src: string; title: string }[] =
    [
      { type: "photo", src: "/images/6.jpg", title: "Converges'17" },
      { type: "photo", src: "/images/22.jpg", title: "Amazing Akatsuki" },
      { type: "photo", src: "/images/20.jpeg", title: "Converges'24" },
      { type: "photo", src: "/images/13.jpg", title: "Winners'24" },
      { type: "photo", src: "/images/14.jpg", title: "Team'24" },
      { type: "photo", src: "/images/3.jpg", title: "Robo Race" },
      { type: "photo", src: "/images/17.jpg", title: "Inauguration'24" },
      { type: "photo", src: "/images/1.jpg", title: "Inauguration" },
    ];

  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <EventsSection />
      <HighlightsSection items={highlights} />
      <Timeline timelineData={events} />
      <MapSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
