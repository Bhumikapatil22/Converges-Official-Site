"use client";

import { motion } from "framer-motion";
import { User, GraduationCap } from "lucide-react";

interface CoordinatorInfoProps {
  coordinators: {
    student: { name: string; contact: string }[] | null;
    faculty: { name: string; contact: string }[] | null;
  };
}

export function CoordinatorInfo({ coordinators }: CoordinatorInfoProps) {
  // Filter out invalid student coordinators (empty name or contact)
  const validStudentCoordinators = coordinators.student?.filter(
    (coordinator) => coordinator.name.trim() && coordinator.contact.trim()
  ) || [];

  // Filter out invalid faculty coordinators (empty name or contact)
  const validFacultyCoordinators = coordinators.faculty?.filter(
    (coordinator) => coordinator.name.trim() && coordinator.contact.trim()
  ) || [];

  const hasStudentCoordinators = validStudentCoordinators.length > 0;
  const hasFacultyCoordinators = validFacultyCoordinators.length > 0;

  // Return null if neither valid student nor faculty coordinators exist
  if (!hasStudentCoordinators && !hasFacultyCoordinators) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-bold">Event Coordinators</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Student Coordinators Section */}
        {hasStudentCoordinators && (
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <User className="w-5 h-5 text-primary" />
              <h3 className="font-semibold">Student Coordinators</h3>
            </div>
            {validStudentCoordinators.map((coordinator, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="card-background p-3 rounded-lg"
              >
                <p className="font-medium">{coordinator.name}</p>
                <p className="text-sm text-muted-foreground">{coordinator.contact}</p>
              </motion.div>
            ))}
          </div>
        )}

        {/* Faculty Coordinators Section */}
        {hasFacultyCoordinators && (
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <GraduationCap className="w-5 h-5 text-primary" />
              <h3 className="font-semibold">Faculty Coordinators</h3>
            </div>
            {validFacultyCoordinators.map((coordinator, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="card-background p-3 rounded-lg"
              >
                <p className="font-medium">{coordinator.name}</p>
                <p className="text-sm text-muted-foreground">{coordinator.contact}</p>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
