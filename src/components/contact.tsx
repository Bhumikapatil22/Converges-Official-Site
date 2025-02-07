"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

export function ContactSection() {
  const studentCoordinators = [
    {
      name: "Chinmay Khainar",
      phone: "+91 84466 33294",
      email: "chinmay.khairnar.756@gmail.com",
    },
    {
      name: "Ninad Patil",
      phone: "+91 95797 76916",
      email: "pninad1203@gmail.com",
    },
    {
      name: "Dikshita Patil",
      phone: "+91 94212 32971",
      email: "dikshiita22@gmail.com",
    },
  ];

  return (
    <section id="contact" className="font-mono py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto space-y-12"
        >
          <h2 className="text-4xl md:text-5xl font-mono text-green-400 p-1 text-center mb-12">
            Contact Us
          </h2>

          <div className="border border-green-500 bg-card p-6 rounded-lg flex items-start space-x-4">
            <MapPin className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-mono mb-2">Address</h3>
              <p className="text-muted-foreground font-mono">
                Near Nimzari Naka, Shahada Road,
                <br />
                Shirpur Dist. Dhule (M.S.) Maharashtra, India - 425405
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-mono mb-4">Student Co-ordinators</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {studentCoordinators.map((coordinator, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="border border-green-500 bg-card p-4 rounded-lg space-y-3"
                >
                  <h4 className="font-monosemibold">{coordinator.name}</h4>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Phone className="w-4 h-4 text-green-500 " />
                    <a
                      href={`callto:${coordinator.phone}`}
                      className="hover:text-green-600 transition-colors"
                    >
                      {coordinator.phone}
                    </a>
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Mail className="w-4 h-4 text-green-500 " />
                    <a
                      href={`mailto:${coordinator.email}`}
                      className="hover:text-green-600 transition-colors"
                    >
                      {coordinator.email}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
