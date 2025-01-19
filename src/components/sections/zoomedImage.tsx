'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { useZoom } from '@/contexts/ZoomContext'

interface ZoomedImageProps {
  images: string[]
  currentIndex: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

const ZoomedImage: React.FC<ZoomedImageProps> = ({ images, currentIndex, onClose, onPrev, onNext }) => {
  const [isLoading, setIsLoading] = useState(true)
  const { setIsZoomed } = useZoom()

  useEffect(() => {
    setIsZoomed(true)
    return () => setIsZoomed(false)
  }, [setIsZoomed])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowLeft') onPrev()
      if (event.key === 'ArrowRight') onNext()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose, onPrev, onNext])

  const handleClose = () => {
    setIsZoomed(false)
    onClose()
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center"
      style={{ zIndex: 50 }}
    >
      <button
        onClick={handleClose}
        className="fixed top-4 right-4 text-white p-3 rounded-full hover:bg-gray-700 transition-colors"
        style={{ zIndex: 51 }}
        aria-label="Close"
      >
        <X size={32} />
      </button>
      <button
        onClick={onPrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white p-3 rounded-full hover:bg-gray-700 transition-colors"
        aria-label="Previous image"
      >
        <ChevronLeft size={48} />
      </button>
      <button
        onClick={onNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white p-3 rounded-full hover:bg-gray-700 transition-colors"
        aria-label="Next image"
      >
        <ChevronRight size={48} />
      </button>
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
        className="relative w-full h-full max-w-4xl max-h-4xl"
      >
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"></div>
          </div>
        )}
        <Image
          src={images[currentIndex]}
          alt={`Zoomed image ${currentIndex + 1}`}
          fill
          className="object-contain"
          onLoadingComplete={() => setIsLoading(false)}
        />
      </motion.div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white">
        {currentIndex + 1} / {images.length}
      </div>
    </motion.div>
  )
}

export default ZoomedImage

