"use client";
import React from "react";
import { Calendar, Clock, MapPin } from 'lucide-react';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-600, 150]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="h-[300vh] py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-20 ">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0">
      <h1 className="text-5xl md:text-7xl font-bold dark:text-white">
        About <span className="text-blue-500">Converges</span>
      </h1>
      <p className="text-justify text-base md:text-xl mt-8 dark:text-neutral-200">
        Over the last few decades we are witnessing remarkable advances and explosive growth in new technologies that are changing the world very fast.

        Electronics & Tele-communication, Mechanical, Computer and Information Technology sectors are indeed playing a significant role in facing the technological challenges of the 21st century.

        A number of Engineering colleges, Universities and Research Institutes are promoting all aspects of academics at national and international levels. Still it is felt that there is a strong need to give a new dimension to our efforts to catch up the rapid strides being made in technology.
      </p>
      <div className="flex md:text-xl my-9">
        <div className=" space-y-1">
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-green-600" />
            <span>R. C. Patel Institute of Technology, Shirpur</span>
          </div>
          <div className="flex items-center gap-3">
            <Calendar className="w-5 h-5 text-green-600" />
            <span>February 15-17, 2025</span>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-green-600" />
            <span>9:00 AM - 5:00 PM</span>
          </div>
        </div>

      </div>
      <div className="mt-12 mx-12 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        <div className="p-6 rounded-lg bg-gradient-to-b from-slate-950">
          <h3 className="text-2xl font-mono mb-2">10+</h3>
          <p className="text-foreground/60">Years of Excellence</p>
        </div>
        <div className="p-6 rounded-lg bg-gradient-to-b from-slate-950">
          <h3 className="text-2xl font-bold mb-2">50+</h3>
          <p className="text-foreground/60">Events & Workshops</p>
        </div>
        <div className="p-6 rounded-lg bg-gradient-to-b from-slate-950">
          <h3 className="text-2xl font-bold mb-2">5000+</h3>
          <p className="text-foreground/60">Annual Participants</p>
        </div>
      </div>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-72 w-[25rem] relative flex-shrink-0"
    >
      <Link
        href={product.link}
        className="block group-hover/product:shadow-2xl "
      >
        <Image
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};
