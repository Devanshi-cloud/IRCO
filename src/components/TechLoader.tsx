"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TechLoaderProps {
  onComplete: () => void;
}

export default function TechLoader({ onComplete }: TechLoaderProps) {
  const [startExit, setStartExit] = useState(false);

  useEffect(() => {
    const enterTimer = setTimeout(() => setStartExit(true), 3100);
    const exitTimer = setTimeout(() => {
      onComplete();
    }, 3900);

    return () => {
      clearTimeout(enterTimer);
      clearTimeout(exitTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center bg-black min-h-screen overflow-hidden z-[9999]"
      initial={{ y: "0%" }}
      animate={{ y: startExit ? "-100%" : "0%" }}
      exit={{ y: "-100%" }} // Ensure sliding animation on exit
      transition={{ duration: 1.1, ease: [0.4, 0.0, 0.2, 1] }}
    >
      <motion.div
        className="relative flex gap-[7vw] sm:gap-10 text-[28vw] sm:text-[12rem] font-bold big-shoulders-stencil"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.span
          className="text-transparent bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text drop-shadow-lg"
          initial={{ x: "-120vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 1.4, ease: [0.33, 1, 0.68, 1] }}
        >
          A
        </motion.span>
        <motion.span
          className="text-transparent bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text drop-shadow-lg"
          initial={{ y: "-120vh" }}
          animate={{ y: 0 }}
          transition={{ duration: 1.4, ease: [0.33, 1, 0.68, 1], delay: 0.2 }}
        >
          C
        </motion.span>
        <motion.span
          className="text-transparent bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text drop-shadow-lg"
          initial={{ x: "120vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 1.4, ease: [0.33, 1, 0.68, 1], delay: 0.4 }}
        >
          M
        </motion.span>
      </motion.div>

      <motion.p
        className="mt-4 sm:mt-6 text-[5vw] sm:text-4xl font-semibold text-gray-200 poppins text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: [0.4, 0, 0.2, 1], delay: 1.2 }}
      >
        “Empowering Minds, <br/> Accelerating Innovation.”
      </motion.p>
    </motion.div>
  );
}