"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { EventCard } from "./event-card";
import { useState } from "react";
import { eventsData } from "@/lib/events-data";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function EventsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const years = Array.from(new Set(eventsData.map((event) => event.year)))
    .sort()
    .reverse();
  const [currentYear, setCurrentYear] = useState(years[0]);
  const currentIndex = years.indexOf(currentYear);

  const filteredEvents = eventsData.filter(
    (event) => event.year === currentYear
  );

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % years.length;
    setCurrentYear(years[nextIndex]);
  };

  const handlePrevious = () => {
    const prevIndex = (currentIndex - 1 + years.length) % years.length;
    setCurrentYear(years[prevIndex]);
  };

  return (
    <>
      {/* Include Google Fonts */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

        .orbitron-font {
          font-family: "Orbitron", sans-serif;
        }
      `}</style>

      <section id="events" className="relative bg-transparent py-20">
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl orbitron-font mb-4 text-green-500">
              Events
            </h2>
            <p className="text-green-200 font-mono max-w-2xl mx-auto">
              Discover our exciting lineup of events designed to challenge and
              inspire.
            </p>
          </motion.div>

          {/* Updated Transparent Navbar for Year Navigation */}
          <div className="relative flex items-center justify-center mb-12 bg-transparent">
            <button
              onClick={handlePrevious}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-green-950 text-green-300 transition-transform duration-300 hover:bg-green-800 hover:scale-110 border-2 border-transparent hover:border-green-500"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Flex container now expands to fit all year buttons */}
            <div className="flex items-center gap-2 mx-4 p-2 rounded-lg bg-transparent shadow-inner flex-nowrap">
              {years.map((year, index) => (
                <motion.div
                  key={year}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`px-5 py-2 text-sm md:text-base rounded-full cursor-pointer transition-colors duration-300 whitespace-nowrap border-2 ${
                    currentYear === year
                      ? "bg-green-700 text-white shadow-md shadow-green-500 border-green-500"
                      : "bg-transparent text-green-300 hover:bg-green-700 hover:text-white border-green-500"
                  }`}
                  onClick={() => setCurrentYear(year)}
                >
                  {year}
                </motion.div>
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-green-950 text-green-300 transition-transform duration-300 hover:bg-green-800 hover:scale-110 border-2 border-transparent hover:border-green-500"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <EventCard {...event} showRegisterButton={Number(event.year) === 2025} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}










// "use client";

// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { EventCard } from "./event-card";
// import { useState } from "react";
// import { eventsData } from "@/lib/events-data";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { Button } from "@/components/ui/button";

// export function EventsSection() {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const years = Array.from(new Set(eventsData.map((event) => event.year)))
//     .sort()
//     .reverse();
//   const [currentYear, setCurrentYear] = useState(years[0]);
//   const currentIndex = years.indexOf(currentYear);

//   const filteredEvents = eventsData.filter(
//     (event) => event.year === currentYear
//   );

//   const handleNext = () => {
//     if (currentIndex < years.length - 1) {
//       setCurrentYear(years[currentIndex + 1]);
//     }
//   };

//   const handlePrevious = () => {
//     if (currentIndex > 0) {
//       setCurrentYear(years[currentIndex - 1]);
//     }
//   };

//   return (
//     <>
//       {/* Include Google Fonts */}
//       <style jsx global>{`
//         @import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

//         .orbitron-font {
//           font-family: "Orbitron", sans-serif;
//         }
//       `}</style>

//       <section id="events" className="relative bg-transparent py-20">
//         <div className="relative z-10 container mx-auto px-4">
//           <motion.div
//             ref={ref}
//             initial={{ opacity: 0, y: 20 }}
//             animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//             transition={{ duration: 0.6 }}
//             className="text-center mb-12"
//           >
//             <h2 className="text-4xl md:text-5xl orbitron-font mb-4 text-green-500">
//               Events
//             </h2>
//             <p className="text-green-200 font-mono max-w-2xl mx-auto">
//               Discover our exciting lineup of events designed to challenge and
//               inspire.
//             </p>
//           </motion.div>
//           <div className="relative flex items-center justify-center mb-12">
//             <button
//               onClick={handlePrevious}
//               disabled={currentIndex === 0}
//               className={`w-10 h-10 flex items-center justify-center rounded-full bg-green-950 text-green-300 ${
//                 currentIndex === 0
//                   ? "opacity-50 cursor-not-allowed"
//                   : "hover:bg-cyan-800"
//               }`}
//             >
//               <ChevronLeft size={20} />
//             </button>
//             <div className="flex items-center gap-4 mx-6 overflow-x-auto">
//               {years.map((year, index) => (
//                 <motion.div
//                   key={year}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={
//                     inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
//                   }
//                   transition={{ duration: 0.6, delay: index * 0.1 }}
//                   className={`px-4 py-2 rounded-full cursor-pointer ${
//                     currentYear === year
//                       ? "bg-green-950 text-white"
//                       : "bg-green-600 text-green-300 hover:bg-green-700 hover:text-green-100"
//                   }`}
//                   onClick={() => setCurrentYear(year)}
//                 >
//                   {year}
//                 </motion.div>
//               ))}
//             </div>
//             <Button
//               onClick={handleNext}
//               disabled={currentIndex === years.length - 1}
//               className={`w-10 h-10 flex items-center justify-center rounded-full bg-green-950 text-green-500 ${
//                 currentIndex === years.length - 1
//                   ? "opacity-50 cursor-not-allowed"
//                   : "hover:bg-green-800"
//               }`}
//             >
//               <ChevronRight size={20} />
//             </Button>
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {filteredEvents.map((event, index) => (
//               <motion.div
//                 key={event.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//               >
//                 <EventCard {...event} />
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
