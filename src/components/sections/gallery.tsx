"use client";

<<<<<<< HEAD
import { useState } from 'react';
import { motion } from 'framer-motion';
import Lightbox from 'yet-another-react-lightbox';
import { slides } from '@/data';
import 'yet-another-react-lightbox/styles.css';
import {
  Captions,
  Download,
  Fullscreen,
  Thumbnails,
  Zoom,
} from 'yet-another-react-lightbox/plugins';
import 'yet-another-react-lightbox/plugins/captions.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

export function Gallery() {
  const [index, setIndex] = useState<number>(-1);

=======
import { motion } from 'framer-motion';

const images = [
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800",
  // Add more images
];

export function Gallery() {
>>>>>>> 7d13e67cfd3e24ead488983ddc10774d59fce14e
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Event Gallery
        </motion.h2>

<<<<<<< HEAD
        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {slides.map((slide, index) => (
=======
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
>>>>>>> 7d13e67cfd3e24ead488983ddc10774d59fce14e
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
<<<<<<< HEAD
              className="aspect-video relative overflow-hidden rounded-lg cursor-pointer"
              onClick={() => setIndex(index)}
            >
              <img
                src={slide.src}
                alt={slide.title}
=======
              className="aspect-video relative overflow-hidden rounded-lg"
            >
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
>>>>>>> 7d13e67cfd3e24ead488983ddc10774d59fce14e
                className="object-cover w-full h-full"
              />
            </motion.div>
          ))}
        </div>
      </div>
<<<<<<< HEAD

      {/* Lightbox Component */}
      <Lightbox
        plugins={[Captions, Download, Fullscreen, Zoom, Thumbnails]}
        captions={{
          showToggle: true,
          descriptionTextAlign: 'end',
        }}
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={slides}
      />
    </section>
  );
}
=======
    </section>
  );
}
>>>>>>> 7d13e67cfd3e24ead488983ddc10774d59fce14e
