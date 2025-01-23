"use client";
import Image from "next/image";
import { MultiStepLoader } from "@/components/ui/multi-step-loader";
import { TypewriterEffect } from "../ui/typewriter-effect";
import { text } from "stream/consumers";
import { Typewriter } from "react-simple-typewriter";
import { useEffect, useState } from "react";
const loadingStates = [
  {
    text: "Bringing Ideas to Life",
  },
  {
    text: "Engineering Creativity",
  },
  {
    text: "Building Connections",
  },
  {
    text: "Innovating for Tomorrow",
  },
  {
    text: "Exploring New Horizons",
  },
  {
    text: "Ready to Converge!",
  },
];

const LoadingPage = ({ loading }: { loading: boolean }) => {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = 100;
    const progressIncrement = 100 / ((10 * 1000) / interval);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const nextProgress = prev + progressIncrement;
        if (nextProgress >= 100) {
          clearInterval(timer);
          return 100;
        }
        return nextProgress;
      });
    }, interval);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const stepInterval = 10000 / loadingStates.length;
    const stepTimer = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % loadingStates.length);
    }, stepInterval);

    return () => clearInterval(stepTimer);
  }, []);
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900&family=Tiro+Devanagari+Marathi:ital@0;1&display=swap");
      `}</style>
      
      <video
        className="absolute -z-10 top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          //src="https://res.cloudinary.com/dkoxvg4cc/video/upload/v1737572135/hjr1fjwht69fwk1mrqwt.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <Image
        src="/utils/converges_white.png"
        width={400}
        height={600}
        alt="Converges Logo"
        priority
        className="transition-opacity"
      />
      <p
        className="  sm:text-4xl text-2xl mt-3 font-bold"
        style={{ fontFamily: "Orbitron" }}
      >
        <Typewriter
          words={["Unrevealing the Pulse of Next-Gen Tech..."]}
          loop={1}
          cursor
          cursorStyle
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={2000}
        />
      </p>
      <div className="w-[50vw] mt-7 h-1 bg-transparent overflow-hidden">
        <div
          className="h-full bg-green-600 transition-all duration-100 ease-linear"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default LoadingPage;
