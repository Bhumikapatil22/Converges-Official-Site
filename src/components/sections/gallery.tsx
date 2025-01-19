'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import ZoomedImage from './zoomedImage'

interface GalleryProps {
  images: string[]
  title: string
  subTitle: string
}

const Gallery: React.FC<GalleryProps> = ({ images, title, subTitle }) => {
  const [visibleImages, setVisibleImages] = useState(8)
  const [zoomedIndex, setZoomedIndex] = useState<number | null>(null)

  const loadMore = () => {
    setVisibleImages(prevVisible => prevVisible + 8)
  }

  const handleImageClick = (index: number) => {
    setZoomedIndex(index)
  }

  const handleCloseZoom = () => {
    setZoomedIndex(null)
  }

  const handlePrevImage = () => {
    setZoomedIndex(prev => (prev !== null ? (prev - 1 + images.length) % images.length : null))
  }

  const handleNextImage = () => {
    setZoomedIndex(prev => (prev !== null ? (prev + 1) % images.length : null))
  }

  return (
    <section id="gallery" className="container mx-auto px-4 py-16">
      <motion.h2
        className="text-4xl md:text-5xl text-sky-400 m-10 font-bold text-center mb-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}  
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
      <motion.p
        className="text-center text-sky-200 pt-1 mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {subTitle}
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.slice(0, visibleImages).map((src, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden cursor-pointer"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            onClick={() => handleImageClick(index)}
          >
            <Image
              src={src}
              alt={`Gallery image ${index + 1}`}
              width={500}
              height={500}
              className="w-full h-56 object-cover rounded-lg transition-transform duration-300 hover:scale-110"
            />
          </motion.div>
        ))}
      </div>
      {visibleImages < images.length && (
        <div className="text-center mt-8">
          <motion.button
            onClick={loadMore}
            className="border border-sky-500 bg-blue-500/10 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Load More
          </motion.button>
        </div>
      )}
      <AnimatePresence>
        {zoomedIndex !== null && (
          <ZoomedImage
            images={images}
            currentIndex={zoomedIndex}
            onClose={handleCloseZoom}
            onPrev={handlePrevImage}
            onNext={handleNextImage}
          />
        )}
      </AnimatePresence>
    </section>
  )
}

export default Gallery

