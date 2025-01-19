"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";

export function HeroContent() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-4 space-y-6 ">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="  inset-0 z-30 space-y-2"
      >
        <div className="flex justify-center">
        <img className="w-3/4 md:w-1/5 m-4 box-s" src="/utils/converges_white.png" alt="RCPIT Logo" />
        </div>
        {/* Title and Subtitle */}
        <h1 className="text-2xl md:text-4xl font-bold text-white">
          R. C. Patel Institute of Technology, Shirpur
        </h1>
        <p className="text-lg md:text-2xl text-gray-500">
          An Autonomous Institute
        </p>
      </motion.div>

      {/* Buttons moved below */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className=" inset-0 z-30 mt-4 flex gap-4"
      >
        {/* <Button size="lg" className="bg-sky-700 hover:bg-sky-900">
          Explore Events
        </Button> */}
         <a href="#events">
        <Button size="lg" variant="outline" className="border-sky-500 hover:bg-sky-500/10">
          Explore Events
        </Button>
        </a>
      </motion.div>
    </div>
  );
}































// "use client";

// import { motion } from "framer-motion";
// import { Button } from "./ui/button";

// export function HeroContent() {
//   return (
//     <div className="relative min-h-screen flex flex-col items-center justify-center bg-gray-900">
//       {/* Background image */}
//       {/* <div 
//         className="absolute inset-0 bg-cover bg-center"
//         style={{
//           backgroundImage: ``,
//         }} */}
//       {/* /> */}

//       {/* Grid overlay */}
//       {/* <div 
//         className="absolute inset-0 opacity-20"
//         style={{
//           backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cpath d='M0 0h40v40H0V0zm1 1v38h38V1H1z' fill='%234299e1' fill-opacity='0.1'/%3E%3C/svg%3E")`,
//           backgroundSize: '40px 40px'
//         }}
//       /> */}

//       {/* Content */}
//       <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 space-y-12">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="space-y-8"
//         > 
//           {/* Tech Fest Title */}
//           <h1 className="text-6xl md:text-8xl font-bold tracking-wider"
//               style={{
//                 color: '#00f2fe',
//                 textShadow: `
//                   0 0 5px #00f2fe,
//                   0 0 10px #00f2fe,
//                   0 0 20px #00f2fe,
//                   0 0 40px #00f2fe
//                 `,
//                 fontFamily: 'monospace'
//               }}>
//             CONVERGES
//           </h1>
          
//           <p className="text-xl md:text-2xl text-blue-300 font-light tracking-wide">
//             Where Innovation Meets Excellence
//           </p>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.3 }}
//           className="flex gap-6"
//         >
//           <Button
//             size="lg"
//             className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105"
//           >
//             Register Now
//           </Button>
//           <Button
//             size="lg"
//             variant="outline"
//             className="border-blue-500 text-blue-400 hover:bg-blue-500/10 px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105"
//           >
//             Explore Events
//           </Button>
//         </motion.div>
//       </div>

//       {/* Floating particles */}
//       <div className="absolute inset-0 overflow-hidden">
//         {[...Array(20)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute w-2 h-2 bg-blue-500 rounded-full"
//             style={{
//               top: `${Math.random() * 100}%`,
//               left: `${Math.random() * 100}%`,
//               opacity: Math.random() * 0.5 + 0.25,
//               animation: `float ${Math.random() * 10 + 5}s linear infinite`
//             }}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }
