"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
// import { useInView } from "react-intersection-observer";
import {
  Facebook,
  X,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Youtube,
} from "lucide-react";

export function Footer() {
  const logoRef = useRef<HTMLImageElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const currentLogoRef = logoRef.current; // Save the current value of the ref

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    if (currentLogoRef) {
      observer.observe(currentLogoRef);
    }

    return () => {
      if (currentLogoRef) {
        observer.unobserve(currentLogoRef); // Use the saved value in cleanup
      }
    };
  }, []);

  return (
    <footer className=" px-8 md:px-14">
      <div className="container mx-auto pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pb-4">
          {/* Logo and Institute Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Image
                src="/utils/converges_white.png"
                alt="Converges Logo"
                width={180}
                height={120}
                className="object-contain h-auto w-auto"
                ref={logoRef}
                priority
              />
            </div>
            <p className="font-mono text-muted-foreground">
              R. C. Patel Institute of Technology, Shirpur
              <br />
              (An Autonomous Institute)
            </p>
          </div>
          {/* Useful Links */}
          <div className="md:space-y-4 mt-4 md:mt-0 ">
            <h3 className="text-xl font-mono">Useful Links</h3>
            <ul className="font-mono space-y-2">
              {["Home", "About", "Events", "Highlights", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <Link
                      href={`#${link.toLowerCase().replace(" ", "-")}`}
                      className="text-muted-foreground hover:text-green-400 font-mono transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:space-y-4 mt-4 md:mt-0 ">
            <h3 className="text-xl font-mono">Contact Us</h3>
            <div className="font-mono space-y-3 text-muted-foreground">
              <p className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>
                  Near Nimzari Naka, Shahada Road, Shirpur Dist. Dhule (M.S.)
                  Maharashtra, India - 425405
                </span>
              </p>
              <p className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <a href="callto:02563259600">(02563) 259600, 801, 802</a>
              </p>
              <p className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <a
                  href="mailto:converges@rcpit.ac.in"
                  className="hover:text-green-400 transition-colors"
                >
                  converges@rcpit.ac.in
                </a>
              </p>
            </div>
          </div>

          {/* Social Links and Visit Counter */}
          <div className="md:space-y-4 mt-4 md:mt-0 ">
            <h3 className="text-xl font-mono mb-2 md:mb-0">Follow Us</h3>
            <div className="flex space-x-4">
              {[
                {
                  icon: Facebook,
                  link: "https://www.facebook.com/shirpurrcpit",
                },
                { icon: X, link: "https://x.com/shirpurrcpit" },
                {
                  icon: Instagram,
                  link: "https://www.instagram.com/rcpitshirpur/",
                },
                {
                  icon: Linkedin,
                  link: "https://www.linkedin.com/school/ses's-r.c.patel-institute-of-technology-shirpur/",
                },
                {
                  icon: Youtube,
                  link: "https://www.youtube.com/channel/UCbM3lCvA3VXS0rfQie0SjPw",
                },
              ].map(({ icon: Icon, link }, index) => (
                <a
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-muted p-2 rounded-full hover:text-green-400 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <hr className="mt-3 h-[3px] bg-gradient-to-r from-transparent via-green-600 to-transparent animate-pulse" />

        {/* Copyright */}
        <div className="pt-6 pb-4 text-center text-muted-foreground font-mono space-y-2">
          <p className="text-lg font-bold">&copy; 2025 RCPIT Converges</p>
          <p className="text-base font-medium">Designed & Developed by</p>
          <div className="flex justify-center items-center text-gray-500 gap-3 mt-2 transition-all animate-pulse">
            <a
              href="https://akatsuki.rcpit.ac.in//"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 text-muted-foreground font-mono transition-all ${
                isInView ? "animate-pulse" : ""
              }`}
            >
              <Image
                src="/images/akatsukilogo.png"
                alt="Akatsuki Logo"
                width={40}
                height={40}
                className={`transition-all ${isInView ? "animate-pulse" : ""}`}
                priority
              />
              Akatsuki Coding Club
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

{
  /* <div className="pt-2 font-monobold text-center text-muted-foreground"> 
          <p className="font-mono">
            © RCPIT Converges2K25. All Rights Reserved{" "}
            {new Date().getFullYear()}
          </p>
          <p className="flex justify-center items-center gap-2 font-mono">
            Designed & Developed By{" "}
            <a
              href="https://akatsukicodingclub.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className={inline-flex items-center gap-2 text-muted-foreground font-monoextrabold transition-all ${
                isInView ? "animate-pulse" : ""
              }}
            >
              <Image
                src="/images/akatsukilogo.png"
                alt="Akatsuki Logo"
                width={28}
                height={28}
                className={transition-all ${isInView ? "animate-blink" : ""}}
                priority
              />
            </a>
          </p>
        </div> */
}
