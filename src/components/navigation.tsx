"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useScroll } from "framer-motion";
import { cn } from "../lib/utils";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { useZoom } from "../contexts/ZoomContext";
import Image from "next/image";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const { isZoomed } = useZoom();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    return scrollY.onChange(() => setIsScrolled(scrollY.get() > 0));
  }, [scrollY]);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#events", label: "Events" },
    { href: "#schedule", label: "Schedule" },
    { href: "#gallery", label: "Gallery" },
    { href: "#contact", label: "Contact" },
  ];

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement> | React.TouchEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  if (isZoomed) {
    return null; // Hide navigation when image is zoomed
  }

  return (
    <>
      {/* Include Google Fonts */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900&family=Tiro+Devanagari+Marathi:ital@0;1&display=swap');

        .navbar {
          font-family: 'Orbitron', sans-serif;
        }

        .typewriter {
          display: inline-block;
          white-space: nowrap;
          overflow: hidden;
          border-right: 2px solid currentColor;
          animation: typing 1.5s steps(30) forwards, blink 0.75s step-end infinite;
        }

        @keyframes typing {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        @keyframes blink {
          50% {
            border-color: transparent;
          }
        }
      `}</style>

      <motion.header
        className={cn(
          "fixed lg:px-10 top-0 w-full transition-colors duration-300 navbar",
          isScrolled
            ? "bg-background/80 backdrop-blur-md border-b"
            : "bg-transparent"
        )}
        style={{ zIndex: 40 }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <nav className="container mx-auto px-4 py-4" ref={navRef}>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="text-2xl font-mono">
              <Image
                src="/utils/logo.png"
                width={70}
                height={50}
                alt="Logo"
                priority
              />
            </Link>

            {/* Navigation Links for Desktop and Mobile */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                  onTouchStart={() => setActiveIndex(index)} // Handle touch events
                  onTouchEnd={() => setActiveIndex(null)}
                  className="text-foreground/80 hover:text-foreground transition-colors"
                >
                  <span
                    className={cn(
                      activeIndex === index ? "typewriter" : ""
                    )}
                  >
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
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

          {/* Mobile Menu */}
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
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  onTouchStart={() => setActiveIndex(index)}
                  onTouchEnd={() => setActiveIndex(null)}
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                  className="block px-3 py-2 text-foreground/80 hover:text-foreground transition-colors"
                >
                  <span
                    className={cn(
                      activeIndex === index ? "typewriter" : ""
                    )}
                  >
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>
          </motion.div>
        </nav>
      </motion.header>
    </>
  );
}
