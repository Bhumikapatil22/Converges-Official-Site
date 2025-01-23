import React from "react";

export function VideoBackground() {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Responsive Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        {/* <source src="/utils/codeplayback" type="video/mp4" /> */}
        {/* Opted for cloudinary video */}
        <source
          src="https://res.cloudinary.com/dkoxvg4cc/video/upload/v1737572135/hjr1fjwht69fwk1mrqwt.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      {/* Overlay Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center bg-black/5">
        {/* Navbar */}
      </div>
    </div>
  );
}

export default VideoBackground;
