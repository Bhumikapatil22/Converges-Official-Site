import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleItemClick = (index: number) => {
    setSelectedIndex(index);
  };

  const closeModal = () => {
    setSelectedIndex(null);
  };

  const selectedItem = selectedIndex !== null ? items[selectedIndex] : null;

  return (
    <motion.div
      className="p-4 text-center"
      style={{
        backgroundColor: "#000000",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }} // Reduced duration for quicker fade-in
    >
      {/* Main Heading */}
      <motion.h1
        className="text-4xl font-bold mb-6 text-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }} // Reduced duration for quicker fade-in
      >
        {title}
      </motion.h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="relative cursor-pointer rounded-lg overflow-hidden transform transition duration-300"
            onClick={() => handleItemClick(index)}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              opacity: { duration: 0.5 },
              scale: { duration: 0.5 },
            }} // Animate grid items when they appear
            whileHover={{
              scale: 1.05, // Hover scaling effect (restored)
              boxShadow: "0px 15px 40px rgba(0, 0, 0, 0.8)", // Enhanced shadow effect
              background:
                "linear-gradient(45deg, rgba(255, 255, 255, 0.2), rgba(0, 0, 0, 0.4))", // Background gradient on hover
              transition: { duration: 0.3 }, // Smooth transition
            }}
          >
            {item.type === "photo" ? (
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            ) : (
              <video
                ref={videoRef}
                src={item.src}
                className="w-full h-full object-cover"
                muted
                loop
                playsInline
              />
            )}
            {/* Title Overlay */}
            {selectedIndex !== index ? (
              <div
                className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-sm font-semibold p-2"
                style={{ textShadow: "0px 0px 4px rgba(255, 255, 255, 0.8)" }}
              >
                {item.title}
              </div>
            ) : (
              <div
                className="absolute top-0 left-0 right-0 bg-black bg-opacity-60 text-white text-sm font-semibold p-2"
                style={{ textShadow: "0px 0px 4px rgba(255, 255, 255, 0.8)" }}
              >
                {item.title}
              </div>
            )}
          </motion.div>
        ))}
      </div>

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
              className="bg-white p-4 max-w-3xl w-full relative"
              style={{ borderRadius: "16px" }}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              {selectedItem.type === "photo" ? (
                <img
                  src={selectedItem.src}
                  alt={selectedItem.title}
                  className="w-full h-auto rounded-md"
                />
              ) : (
                <video
                  src={selectedItem.src}
                  controls
                  autoPlay // Add autoPlay for modal video
                  className="w-full h-auto rounded-md"
                ></video>
              )}
              {/* Title at Top in Modal */}
              <div
                className="absolute top-4 left-4 right-4 text-white text-lg font-bold bg-black bg-opacity-60 p-2 rounded-md text-center"
                style={{ textShadow: "0px 0px 4px rgba(255, 255, 255, 0.8)" }}
              >
                {selectedItem.title}
              </div>

              {/* Close Button */}
              <button
                className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-xl z-50"
                onClick={closeModal}
              >
                &times;
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default HighlightsSection;
