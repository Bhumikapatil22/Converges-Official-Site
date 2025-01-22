// import React, { useState, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";

// interface HighlightItem {
//   type: "photo" | "video";
//   src: string;
//   title: string;
// }

// interface HighlightsSectionProps {
//   items: HighlightItem[];
// }

// export const HighlightsSection: React.FC<HighlightsSectionProps> = ({
//   items,
// }) => {
//   const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
//   const [title] = useState<string>("Highlights");
//   const [batchCount, setBatchCount] = useState(1);
//   const batchSize = 8;
//   const videoRef = useRef<HTMLVideoElement | null>(null);

//   const handleItemClick = (index: number) => {
//     setSelectedIndex(index);
//   };

//   const closeModal = () => {
//     setSelectedIndex(null);
//   };

//   const handleLoadMore = () => {
//     setBatchCount((prevBatch) => prevBatch + 1);
//   };

//   const handleShowLess = () => {
//     setBatchCount((prevBatch) => Math.max(prevBatch - 1, 1));
//   };
//   const visibleCount = batchCount * batchSize;
//   const selectedItem = selectedIndex !== null ? items[selectedIndex] : null;

//   return (
//     <motion.div
//       className="p-4 text-center"
//       style={{
//         backgroundColor: "#000000",
//       }}
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <motion.h1
//         className="text-4xl font-bold mb-6 text-white"
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         exit={{ opacity: 0, y: 50 }}
//         transition={{ duration: 0.5 }}
//       >
//         {title}
//       </motion.h1>
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
//         {items.slice(0, visibleCount).map((item, index) => (
//           <motion.div
//             key={index}
//             className="relative cursor-pointer rounded-lg overflow-hidden transform transition duration-300"
//             onClick={() => handleItemClick(index)}
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{
//               opacity: { duration: 0.5 },
//               scale: { duration: 0.5 },
//             }}
//             whileHover={{
//               scale: 1.05,
//               boxShadow: "0px 15px 40px rgba(0, 0, 0, 0.8)",
//               background:
//                 "linear-gradient(45deg, rgba(255, 255, 255, 0.2), rgba(0, 0, 0, 0.4))",
//               transition: { duration: 0.3 },
//             }}
//           >
//             {item.type === "photo" ? (
//               // <Image
//               //   src={item.src}
//               //   alt={item.title}
//               //   className="w-full h-full object-cover"
//               //   loading="lazy"
//               // />
//               <Image
//                 src={item.src}
//                 alt={item.title}
//                 width={500} // Set appropriate width
//                 height={300}
//                 className="w-full h-full object-cover"
//                 loading="lazy"
//               />
//             ) : (
//               <video
//                 ref={videoRef}
//                 src={item.src}
//                 className="w-full h-full object-cover"
//                 muted
//                 loop
//                 playsInline
//               />
//             )}
//             <div
//               className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-sm font-semibold p-2"
//               style={{ textShadow: "0px 0px 4px rgba(255, 255, 255, 0.8)" }}
//             >
//               {item.title}
//             </div>
//           </motion.div>
//         ))}
//       </div>
//       <div className="flex justify-center mt-6 space-x-4">
//         {visibleCount < items.length && (
//           <button
//             onClick={handleLoadMore}
//             className="bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white shadow-md shadow-blue-500/50 hover:shadow-lg hover:shadow-blue-600/60 transition-all py-2 px-4 rounded flex items-center justify-center"
//           >
//             Load More
//           </button>
//         )}
//         {batchCount > 1 && (
//           <button
//             onClick={handleShowLess}
//             className="bg-transparent border border-red-500 text-red-500 hover:bg-red-500 hover:text-white shadow-md shadow-red-500/50 hover:shadow-lg hover:shadow-red-600/60 transition-all py-2 px-4 rounded flex items-center justify-center"
//           >
//             Show Less
//           </button>
//         )}
//       </div>
//       <AnimatePresence>
//         {selectedItem && (
//           <motion.div
//             className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={closeModal}
//           >
//             <motion.div
//               className="bg-white p-4 max-w-3xl w-full relative"
//               style={{ borderRadius: "16px" }}
//               initial={{ scale: 0.8 }}
//               animate={{ scale: 1 }}
//               exit={{ scale: 0.8 }}
//               onClick={(e) => e.stopPropagation()}
//             >
//               {selectedItem.type === "photo" ? (
//                 <Image
//                   src={selectedItem.src}
//                   alt={selectedItem.title}
//                   layout="fill"
//                   objectFit="cover"
//                   className="w-full h-auto rounded-md"
//                 />
//               ) : (
//                 <video
//                   src={selectedItem.src}
//                   controls
//                   autoPlay
//                   className="w-full h-auto rounded-md"
//                 ></video>
//               )}
//               <div
//                 className="absolute top-4 left-4 right-4 text-white text-lg font-bold bg-black bg-opacity-60 p-2 rounded-md text-center"
//                 style={{ textShadow: "0px 0px 4px rgba(255, 255, 255, 0.8)" }}
//               >
//                 {selectedItem.title}
//               </div>
//               <button
//                 className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-xl z-50"
//                 onClick={closeModal}
//               >
//                 &times;
//               </button>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.div>
//   );
// };

// export default HighlightsSection;
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "react-feather";

interface HighlightItem {
  type: "photo" | "video";
  src: string;
  title: string;
}

interface HighlightsSectionProps {
  items: HighlightItem[];
}

export const HighlightsSection: React.FC<HighlightsSectionProps> = ({
  items,
}) => {
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
      className="p-4 text-center font-mono"
      style={{
        backgroundColor: "#0A0A0A",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Main Heading */}
      <motion.h1
        className="text-4xl font-extrabold mb-6 text-[#5FB63F] text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h1>

      {/* Description */}
      <p className="text-lg text-[#5fb63f] mb-8 sm:max-w-3xl mx-auto px-4 font-light">
        Immerse in the energy of Converges, where innovation meets creativity!
      </p>

      {/* Item Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {items.slice(0, visibleCount).map((item, index) => (
          <motion.div
            key={index}
            className="relative cursor-pointer rounded-lg overflow-hidden transform transition duration-300 hover:scale-105"
            onClick={() => handleItemClick(index)}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              opacity: { duration: 0.5 },
              scale: { duration: 0.5 },
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
                ref={(el) => {
                  videoRefs.current[index] = el;
                }}
                src={item.src}
                className="w-full h-full object-cover"
                muted
                loop
                playsInline
                autoPlay
              />
            )}
            <div
              className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-sm font-semibold p-2"
              style={{ textShadow: "0px 0px 4px rgba(255, 255, 255, 0.8)" }}
            >
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
            className="bg-gradient-to-r from-green-500 to-green-700 text-white hover:from-green-600 hover:to-green-800 shadow-md shadow-green-500/50 hover:shadow-lg hover:shadow-green-600/60 transition-all py-2 px-4 rounded flex items-center justify-center"
          >
            Load More
          </button>
        )}
        {batchCount > 1 && (
          <button
            onClick={handleShowLess}
            className="bg-gradient-to-r from-green-600 to-green-800 text-white hover:from-green-700 hover:to-green-900 shadow-md shadow-green-600/50 hover:shadow-lg hover:shadow-green-700/60 transition-all py-2 px-4 rounded flex items-center justify-center"
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
                  className="w-full h-auto rounded-md relative"
                />
              ) : (
                <video
                  src={selectedItem.src}
                  controls
                  autoPlay
                  className="w-full h-auto rounded-md relative"
                ></video>
              )}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevious();
                }}
                className={`absolute top-1/2 left-2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-green-950 text-white ${
                  selectedIndex === 0
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-green-800"
                }`}
                disabled={selectedIndex === 0}
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className={`absolute top-1/2 right-2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-green-950 text-white ${
                  selectedIndex === items.length - 1
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-green-800"
                }`}
                disabled={selectedIndex === items.length - 1}
              >
                <ChevronRight size={20} />
              </button>
              <div
                className="absolute top-4 left-4 right-4 text-white text-lg font-bold bg-black bg-opacity-60 p-2 rounded-md text-center"
                style={{ textShadow: "0px 0px 4px rgba(255, 255, 255, 0.8)" }}
              >
                {selectedItem.title}
              </div>
              <button
                className="absolute top-2 right-2 bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-xl z-50"
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
