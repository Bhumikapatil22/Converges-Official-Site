"use client";

import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-background border-t">
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
              {['Home', 'About us', 'Events', 'Schedule', 'Contact'].map((link) => (
                <li key={link}>
                  <Link 
                    href={`/${link.toLowerCase().replace(' ', '-')}`}
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
                { icon: Facebook, link: 'https://facebook.com' },
                { icon: Twitter, link: 'https://twitter.com' },
                { icon: Instagram, link: 'https://instagram.com' },
                { icon: Linkedin, link: 'https://linkedin.com' }
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
        <div className="mt-12 pt-8 border-t text-center text-muted-foreground">
          <p>© Copyright Converges2k23. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}