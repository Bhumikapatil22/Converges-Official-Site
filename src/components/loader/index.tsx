"use client";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({ subsets: ["latin"], weight: ["400", "600", "800"] });

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


// Constants for timing
const TOTAL_DURATION = 4000; // 10 seconds
const PROGRESS_INTERVAL = 70; // 100ms for smooth progress updates

function LoadingPage() {
  // Use a single timestamp for tracking progress
  const [startTime] = useState(() => Date.now());
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  // Calculate step duration once
  const stepDuration = useMemo(() => 
    TOTAL_DURATION / loadingStates.length, 
    []
  );

  // Efficient progress calculation
  const calculateProgress = useCallback(() => {
    const elapsed = Date.now() - startTime;
    const newProgress = Math.min((elapsed / TOTAL_DURATION) * 100, 100);
    return newProgress;
  }, [startTime]);

  // Handle progress updates
  useEffect(() => {
    const progressTimer = setInterval(() => {
      const newProgress = calculateProgress();
      setProgress(newProgress);
      
      if (newProgress >= 100) {
        clearInterval(progressTimer);
      }
    }, PROGRESS_INTERVAL);

    return () => clearInterval(progressTimer);
  }, [calculateProgress]);

  // Handle step updates
  useEffect(() => {
    const stepTimer = setInterval(() => {
      setCurrentStep(prev => {
        const nextStep = prev + 1;
        return nextStep >= loadingStates.length ? loadingStates.length - 1 : nextStep;
      });
    }, stepDuration);

    return () => clearInterval(stepTimer);
  }, [stepDuration]);


  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center overflow-hidden bg-[#050b0b]">

      {/* <video
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
        Your browser does not support the video tag.
      </video> */}
      <Image
        src="/utils/converges_white.png"
        width={400}
        height={600}
        alt="Converges Logo"
        priority
        unoptimized
        className="transition-opacity"
      />
      
      <p className={`sm:text-4xl text-xl text-center mt-3 ${orbitron.className}`}>
        <Typewriter
          words={["Unrevealing the Pulse of Next-Gen Tech..."]}
          loop={1}
          cursor
          cursorStyle
          typeSpeed={50}
          deleteSpeed={30}
          delaySpeed={1500}
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