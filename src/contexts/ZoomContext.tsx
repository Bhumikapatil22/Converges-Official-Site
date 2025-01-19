'use client'

import { createContext, useContext, useState } from 'react'

interface ZoomContextType {
  isZoomed: boolean
  setIsZoomed: (zoomed: boolean) => void
}

const ZoomContext = createContext<ZoomContextType | undefined>(undefined)

export function ZoomProvider({ children }: { children: React.ReactNode }) {
  const [isZoomed, setIsZoomed] = useState(false)

  return (
    <ZoomContext.Provider value={{ isZoomed, setIsZoomed }}>
      {children}
    </ZoomContext.Provider>
  )
}

export function useZoom() {
  const context = useContext(ZoomContext)
  if (context === undefined) {
    throw new Error('useZoom must be used within a ZoomProvider')
  }
  return context
}

