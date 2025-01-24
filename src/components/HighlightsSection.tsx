import React, { useState, useRef, useEffect } from "react"; 
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "react-feather";
import Image from "next/image";  // Import Image from next/image

interface HighlightItem {
  type: "photo" | "video";
  src: string;
  title: string;
}

interface HighlightsSectionProps {
  items: HighlightItem[];
}

export const HighlightsSection: React.FC<HighlightsSectionProps> = ({ items }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [title] = useState<string>("Highlights");
  const [batchCount, setBatchCount] = useState(1);
  const batchSize = 8;
  const visibleCount = batchCount * batchSize;
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const handleItemClick = (index: number) => {
    setSelectedIndex(index);
  };

  const closeModal = () => {
    setSelectedIndex(null);
  };

  const handleNext = () => {
    if (selectedIndex !== null && selectedIndex < items.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (selectedIndex !== null && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  const handleLoadMore = () => {
    setBatchCount((prevBatch) => prevBatch + 1);
  };

  const handleShowLess = () => {
    setBatchCount((prevBatch) => Math.max(prevBatch - 1, 1));
  };

  const selectedItem = selectedIndex !== null ? items[selectedIndex] : null;

  // Play videos automatically when batchCount or items change
  useEffect(() => {
    videoRefs.current.forEach((video) => {
      if (video) {
        video
          .play()
          .catch((err) => console.error("Video playback error:", err));
      }
    });
  }, [items, batchCount]);

  return (
    <motion.div
      className="p-4 text-center font-mono bg-transparent"
     
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Main Heading */}
      <motion.h1
        className="text-5xl font-extrabold mb-6 text-green-500 py-5"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        style={{ fontFamily: "'Orbitron', sans-serif" }}
      >
        {title}
      </motion.h1>

      {/* Description */}
      <p className="text-lg text-red-300 mb-8 sm:max-w-3xl mx-auto px-4">
        Immerse in the energy of Converges, where innovation meets creativity!
      </p>

      {/* Item Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {items.slice(0, visibleCount).map((item, index) => (
          <motion.div
            key={index}
            className="relative cursor-pointer rounded-lg overflow-hidden transition duration-300"
            onClick={() => handleItemClick(index)}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 15px 40px rgba(0, 0, 0, 0.8)",
              background:
                "linear-gradient(45deg, rgba(255, 255, 255, 0.2), rgba(0, 0, 0, 0.4))",
            }}
          >
            {item.type === "photo" ? (
              <Image
                src={item.src}
                alt={item.title}
                layout="responsive"
                width={500} // Specify width and height for better optimization
                height={500}
                className="w-full h-full object-cover"
                priority
              />
            ) : (
              <video
                ref={(el) => {
                  videoRefs.current[index] = el; // Assign video refs dynamically
                }}
                className="w-full h-full object-cover"
                muted
                loop
                playsInline
                src={item.src} // Ensure video source is set
              />
            )}
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-sm font-bold p-2">
              {item.title}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Load More / Show Less Buttons */}
      <div className="flex justify-center mt-6 space-x-4">
        {visibleCount < items.length && (
          <button
            onClick={handleLoadMore}
            className="bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-all py-2 px-4 rounded"
          >
            Load More
          </button>
        )}
        {batchCount > 1 && (
          <button
            onClick={handleShowLess}
            className="bg-transparent border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all py-2 px-4 rounded"
          >
            Show Less
          </button>
        )}
      </div>

      {/* Modal for Selected Item */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="bg-white p-4 max-w-3xl w-full relative rounded-lg"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              {selectedItem.type === "photo" ? (
                <Image
                  src={selectedItem.src}
                  alt={selectedItem.title}
                  layout="responsive"
                  width={500} // Specify width and height for better optimization
                  height={500}
                  className="w-full h-auto rounded-md"
                  priority
                />
              ) : (
                <video
                  src={selectedItem.src}
                  controls
                  autoPlay
                  className="w-full h-auto rounded-md"
                />
              )}
              <div className="absolute top-4 left-4 right-4 text-white text-lg bg-black bg-opacity-60 p-2 rounded-md text-center">
                {selectedItem.title}
              </div>
              <button
                className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-xl"
                onClick={closeModal}
              >
                &times;
              </button>
              <div className="absolute bottom-2 left-2 flex space-x-4">
                <button
                  className="bg-blue-500 text-white p-2 rounded-full"
                  onClick={handlePrevious}
                  disabled={selectedIndex === 0}
                >
                  <ChevronLeft />
                </button>
                <button
                  className="bg-blue-500 text-white p-2 rounded-full"
                  onClick={handleNext}
                  disabled={selectedIndex === items.length - 1}
                >
                  <ChevronRight />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default HighlightsSection;
