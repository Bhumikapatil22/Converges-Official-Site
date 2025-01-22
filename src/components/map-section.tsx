"use client";

import { motion } from "framer-motion";
import { MapPin, GraduationCap, Building } from "lucide-react";

export function MapSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          {/* Apply Orbitron font here */}
          <h2
            className="text-4xl md:text-5xl text-green-400 mb-4"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            Our Campus
          </h2>
          <p className="text-red-200 font-mono">
            Visit us at our state-of-the-art campus
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full h-[390px] rounded-lg overflow-hidden shadow-lg border border-border"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.2971588321266!2d74.8766551836205!3d21.361721927395976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdf3203969b41c7%3A0xb4050432d04ef5b8!2sR.%20C.%20Patel%20Institute%20of%20Technology%2C%20Shirpur!5e0!3m2!1sen!2sin!4v1676179406119!5m2!1sen!2sin"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="border-0"
              allowFullScreen
            />
          </motion.div>

          {/* College Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="relative p-6 text-justify rounded-lg shadow-lg border border-border overflow-hidden z-0">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url("https://www.rcpit.ac.in/images/slider/slider1.jpg")`,
                  backgroundColor: "rgba(0, 0, 0, 0.8)",
                  backgroundBlendMode: "darken",
                  zIndex: -1,
                }}
              ></div>

              {/* Content */}
              <div className="relative flex items-start gap-4">
                <Building className="md:w-5 md:h-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl md:text-2xl font-mono mb-2">
                    R. C. Patel Institute of Technology, Shirpur
                  </h3>
                  <p className="text-gray- font-mono text-lg mb-4">
                    An Autonomous Institute
                  </p>
                  <p className="text-gray-200 font-mono leading-relaxed">
                    Institute was set up as a part of the self-powered plans of
                    Shirpur Education Society in 2001 with the objective to
                    erect a truly world-class institute in the rural part where
                    students from the vicinity would be benefited from the
                    services that matched global standards.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative bg-card p-4 rounded-lg shadow-lg border border-border overflow-hidden"
                style={{
                  backgroundImage: `url("/utils/map.avif")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundColor: "rgba(0, 0, 0, 0.8)",
                  backgroundBlendMode: "darken",
                }}
              >
                {/* Dark Overlay */}
                <div
                  className="absolute inset-0 bg-black bg-opacity-50"
                  style={{ zIndex: -10 }}
                ></div>

                {/* Content */}
                <div className="relative flex text-justify items-start gap-3">
                  <MapPin className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl md:text-2xl font-mono mb-2">
                      Location
                    </h4>
                    <p className="text-sm font-mono text-gray-200">
                      Near Nimzari Naka, Shahada Road, Shirpur, Dist. Dhule
                      (M.S.) Maharashtra, India - 425405
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative bg-card p-4 rounded-lg shadow-lg border border-border overflow-hidden"
                style={{
                  backgroundImage: `url("/utils/cap.jpg")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundColor: "rgba(0, 0, 0, 0.8)",
                  backgroundBlendMode: "darken",
                }}
              >
                {/* Dark Overlay */}
                <div
                  className="absolute inset-0 bg-black bg-opacity-50"
                  style={{ zIndex: -10 }}
                ></div>

                {/* Content */}
                <div className="relative flex text-justify items-start gap-3">
                  <GraduationCap className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl md:text-2xl font-mono mb-2">
                      Recognition
                    </h4>
                    <p className="text-sm font-mono text-gray-200">
                      AICTE Approved | NBA Accredited | Autonomous Institute
                      under UGC Act
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
