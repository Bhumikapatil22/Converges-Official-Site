// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import { useRouter } from "next/navigation";

// interface EventCardProps {
//   id: number;
//   name: string;
//   department: string;
//   description: string;
//   registrationLink: string;
//   logo: string;
// }

// export function EventCard({
//   id,
//   name,
//   department,
//   description,
//   registrationLink,
//   logo,
// }: EventCardProps) {
//   const router = useRouter();

//   return (
//     <div className="w-full mt-10">
//       <motion.div
//         className="relative h-[290px] w-full group cursor-pointer overflow-hidden"
//         whileHover={{ scale: 1.02 }}
//         transition={{ duration: 0.2 }}
//       >
//         {/* Card Background */}
//         <div className="absolute inset-0 bg-[#020617] rounded-lg overflow-hidden">
//           <Image
//             src={logo}
//             alt="Event background"
//             fill
//             priority
//             className="object-cover transition-all duration-300 group-hover:opacity-20"
//           />
//         </div>

//         {/* Title and Department */}
//         <div className="absolute inset-0 p-4 flex flex-col justify-between">
//           <div className="bg-black bg-opacity-50 text-center">
//             <h3 className="text-xl font-monobold">{name}</h3>
//             <p className="text-sm">{department}</p>
//           </div>
//         </div>

//         {/* Description Sliding In */}
//         <div className="absolute bottom-0 left-0 w-full p-4 bg-black/50 backdrop-blur-sm rounded-b-lg transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
//           <p className="text-gray-200 text-sm text-center">{description}</p>
//         </div>
//       </motion.div>

//       {/* Buttons Below Card */}
//       <div className="mt-4 flex justify-center gap-4">
//         {/* Register Button */}
//         <button
//           onClick={(e) => {
//             e.stopPropagation(); // Prevent card click action
//             router.push(registrationLink); // Use the passed registration link
//           }}
//           className=" bg-sky-500/60 text-white px-4 py-1 rounded-sm hover:bg-sky-500/10 transition-all duration-300"
//         >
//           Register
//         </button>

//         {/* View Details Button */}
//         <button
//           onClick={(e) => {
//             e.stopPropagation(); // Prevent card click action
//             router.push(`/events/${id}`);
//           }}
//           className="border border-sky-500 px-4 py-1 rounded-sm text-white hover:bg-sky-500/10 transition-all duration-300"
//         >
//           View Details
//         </button>
//       </div>
//     </div>
//   );
// }

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface EventCardProps {
  slug: string;
  name: string;
  department: string;
  description: string;
  registrationLink: string;
  logo: string;
  showRegisterButton: boolean; // New prop to control button visibility
}

export function EventCard({
  slug,
  name,
  department,
  description,
  registrationLink,
  logo,
  showRegisterButton,
}: EventCardProps) {
  const router = useRouter();

  const handleRegisterClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    router.push(registrationLink);
  };

  const handleViewDetailsClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    router.push(`/events/${slug}`);
  };

  return (
    <div className="w-full mt-10">
      <motion.div
        className="relative h-[290px] w-full group cursor-pointer overflow-hidden"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <div className="absolute inset-0 bg-[#020617] rounded-lg overflow-hidden">
          <Image
            src={logo}
            alt="Event background"
            fill
            priority
            className="object-cover transition-all duration-300 group-hover:opacity-20"
          />
        </div>

        <div className="absolute inset-0 p-4 flex flex-col justify-between">
          <div className="bg-black bg-opacity-50 text-center">
            <h3 className="text-xl font-mono">{name}</h3>
            <p className="text-sm font-mono">{department}</p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full p-4 bg-black/50 backdrop-blur-sm rounded-b-lg transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
          <p className="text-gray-200 font-mono text-sm text-center">
            {description}
          </p>
        </div>
      </motion.div>

      <div className="mt-4 flex justify-center gap-4">
        {showRegisterButton && (
          <Button
            size="lg"
            variant="outline"
            style={{ fontFamily: "Orbitron" }}
            onClick={handleRegisterClick}
            className="border-green-800 hover:bg-sky-500/10 bg-transparent relative"
          >
            <span className="relative z-10">Register</span>
          </Button>
        )}

        <Button
          size="lg"
          variant="outline"
          style={{ fontFamily: "Orbitron" }}
          onClick={handleViewDetailsClick}
          className="border-green-800 hover:bg-sky-500/10 relative bg-transparent"
        >
          <span className="relative z-10">View Details</span>
        </Button>
      </div>
    </div>
  );
}
