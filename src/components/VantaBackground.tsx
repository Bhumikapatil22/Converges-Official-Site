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
        {/* <source
          src={mobileVideoSrc}
          type="video/mp4"
          media="(max-width: 768px)"
        /> */}
        <source src="/utils/video3 (1).mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center bg-black/60">
        {/* Navbar */}

        
        

      </div>
    </div>
  );
};

export default VideoBackground;
