"use client";

import { motion } from 'framer-motion';

export function DirectorsMessage() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-monobold mb-4"
            >
              Director&apos;s Message
            </motion.h2>
          </div>

          <div className="bg-background rounded-lg p-8 shadow-lg">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <motion.img
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400"
                alt="Director"
                className="w-48 h-48 rounded-full object-cover"
              />
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex-1"
              >
                <p className="text-lg mb-6 text-foreground/80">
                  Welcome to Converges 2024! Our annual tech fest represents the pinnacle of innovation and creativity...
                </p>
                <div className="text-green-600 font-monosemibold">
                  <p>Dr. Jane Smith</p>
                  <p className="text-sm text-foreground/60">Director, Institute of Technology</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}