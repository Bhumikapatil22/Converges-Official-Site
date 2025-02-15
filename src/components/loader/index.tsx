"use client";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import { useEffect, useState } from "react";
import { Orbitron } from "next/font/google";

// Preload font for better performance
const orbitron = Orbitron({ subsets: ["latin"], weight: ["400", "600", "800"] });

const loadingStates = [
  "Bringing Ideas to Life",
  "Engineering Creativity",
  "Building Connections",
  "Innovating for Tomorrow",
  "Exploring New Horizons",
  "Ready to Converge!",
];

const LoadingPage = () => {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const totalTime = 5000; // Faster loading (4s instead of 10s)
    const interval = 50; // Smoother updates
    const increment = 100 / (totalTime / interval);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev + increment >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + increment;
      });
    }, interval);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const stepTimer = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % loadingStates.length);
    }, 800); // Faster text transitions

    return () => clearInterval(stepTimer);
  }, []);

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center overflow-hidden">
      <video
        className="absolute -z-10 top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="https://res.cloudinary.com/dkoxvg4cc/video/upload/v1737572135/hjr1fjwht69fwk1mrqwt.mp4"
          type="video/mp4"
        />
      </video>

      <Image
        src="/utils/converges_white.png"
        width={400}
        height={600}
        alt="Converges Logo"
        priority
        className="transition-opacity"
      />

      <p className={`sm:text-4xl text-xl text-center mt-3 ${orbitron.className}`}>
        <Typewriter
          words={["Unrevealing the Pulse of Next-Gen Tech..."]}
          loop={1}
          cursor
          typeSpeed={50}
          deleteSpeed={30}
          delaySpeed={1500}
        />
      </p>

      <div className="w-[50vw] mt-7 h-1 bg-transparent overflow-hidden">
        <div
          className="h-full bg-green-600 transition-all duration-75 ease-linear"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <p className="mt-2 text-sm text-gray-300">{loadingStates[currentStep]}</p>
    </div>
  );
};

export default LoadingPage;
