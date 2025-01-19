"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { motion, useScroll } from "framer-motion"
import { cn } from "../lib/utils"
import { Button } from "./ui/button"
import { Menu } from 'lucide-react'
import { useZoom } from "../contexts/ZoomContext"
import Image from "next/image"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)
  const { isZoomed } = useZoom()

  useEffect(() => {
    return scrollY.onChange(() => setIsScrolled(scrollY.get() > 0))
  }, [scrollY])

  const navItems = [
    { href: "/", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#events", label: "Events" },
    { href: "#schedule", label: "Schedule" },
    { href: "#gallery", label: "Gallery" },
    { href: "#contact", label: "Contact" },
  ]

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault()
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
    setIsOpen(false)
  }

  if (isZoomed) {
    return null // Hide navigation when image is zoomed
  }

  return (
    <motion.header
      className={cn(
        "fixed top-0 w-full transition-colors duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-md border-b" : "bg-transparent"
      )}
      style={{ zIndex: 40 }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="container mx-auto px-4 py-4" ref={navRef}>
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            <Image className="h-12" src="/utils/logo.png" alt="Logo" />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className="text-foreground/80 hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        <motion.div
          className={cn(
            "md:hidden bg-background/90 rounded-lg shadow-md mt-2",
            isOpen ? "block" : "hidden"
          )}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <div className="pt-4 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className="block px-3 py-2 text-foreground/80 hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </motion.div>
      </nav>
    </motion.header>
  )
}

