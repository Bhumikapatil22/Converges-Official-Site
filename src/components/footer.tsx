"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, X, Instagram, Linkedin, Mail, Phone, MapPin, Youtube } from "lucide-react";

export function Footer() {
  const logoRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    if (logoRef.current) {
      observer.observe(logoRef.current);
    }

    return () => {
      if (logoRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(logoRef.current);
      }
    };
  }, []);

  return (
    <footer ref={logoRef} className="bg-transparent">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Institute Info */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">TheEvent</h2>
            <p className="text-muted-foreground">
              R. C. Patel Institute of Technology, Shirpur
              <br />
              (An Autonomous Institute)
            </p>
          </div>

          {/* Useful Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Useful Links</h3>
            <ul className="space-y-2">
              {["Home", "About us", "Events", "Schedule", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    href={`/${link.toLowerCase().replace(" ", "-")}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Contact Us</h3>
            <div className="space-y-3 text-muted-foreground">
              <p className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>Near Nimzari Naka, Shahada Road, Shirpur Dist. Dhule (M.S.) Maharashtra, India - 425405</span>
              </p>
              <p className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>(02563) 259600, 801, 802</span>
              </p>
              <p className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <a href="mailto:director@rcpit.ac.in" className="hover:text-primary transition-colors">
                  director@rcpit.ac.in
                </a>
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Follow Us</h3>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, link: "https://www.facebook.com/shirpurrcpit" },
                { icon: X, link: "https://x.com/shirpurrcpit" },
                { icon: Instagram, link: "https://www.instagram.com/rcpitshirpur/" },
                { icon: Linkedin, link: "https://www.linkedin.com/school/ses's-r.c.patel-institute-of-technology-shirpur/" },
                { icon: Youtube, link: "https://www.youtube.com/channel/UCbM3lCvA3VXS0rfQie0SjPw" }
              ].map(({ icon: Icon, link }, index) => (
                <a
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-muted p-2 rounded-full hover:text-primary transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t font-bold text-center text-muted-foreground">
          <p>© RCPIT Converges2k25</p>
          <p>All Rights Reserved</p>

          <p>
            <p>Designed & Developed By </p>
            <a
              href="https://akatsukicodingclub.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 text-muted-foreground font-extrabold transition-all ${
                isInView
                
              }`}
            >
              <Image
                src="/images/akatsukilogo.png"
                alt="Akatsuki Logo"
                width={38}
                height={40}
                className={`transition-all ${isInView ? "animate-blink" : ""}`}
                priority
              />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
