"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { FaDiscord, FaInstagram, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import * as THREE from "three";

// Rotating Stars Component for 3D Space Effect
const RotatingStars = () => {
  const starsRef = useRef<THREE.Group>(null);
  return (
    <group ref={starsRef}>
      <Stars radius={150} depth={50} count={7000} factor={5} fade />
    </group>
  );
};

const Footer = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setShowPopup(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <footer className="relative w-full flex flex-col items-center bg-black text-gray-300 overflow-hidden py-12">
      {/* 3D Space Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 3.5] }}>
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} />
          <RotatingStars />
        </Canvas>
      </div>

      {/* Footer Content */}
      <div className="relative z-10 w-full max-w-7xl flex flex-wrap justify-center md:justify-between gap-12 px-6">
        {/* Left & Middle Sections - Address & Social Links */}
        <div className="flex flex-col w-full md:w-[60%] min-w-[300px]">
          {/* Headline */}
          <div className="text-center md:text-left">
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text drop-shadow-lg big-shoulders-stencil mt-24 sm:mt-48">
              Get in Touch
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto md:mx-0 mt-2 rounded-full"></div>
          </div>

          <div className="flex flex-wrap justify-between gap-12 mt-8">
            {/* Left Section - Address & Map */}
            <div className="flex flex-col w-full sm:w-auto min-w-[280px] max-w-sm">
              <h3 className="text-xl font-semibold text-white poppins">University Address</h3>
              <p className="text-gray-400 mt-2 poppins">
                PCET's PIMPRI CHINCHWAD UNIVERSITY<br />
                Gut No. 44, 46, 48, 49 and 50, Sate, Maval, <br />
                Pune - 412016, Maharashtra
              </p>
              <div className="mt-4 w-full sm:w-[280px] h-[180px] rounded-lg overflow-hidden shadow-lg border border-blue-500">
                <iframe
                  className="w-full h-full border-0 rounded-lg shadow-lg"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7556.217985322926!2d73.60742!3d18.748668!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ad005ff8e799%3A0x198e3cd214f8a72e!2sPCU%20Campus!5e0!3m2!1sen!2sin!4v1741944296241!5m2!1sen!2sin"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Middle Section - Social & Quick Links */}
            <div className="flex flex-col items-center w-full sm:w-auto min-w-[250px] max-w-sm">
              <h3 className="text-xl font-semibold text-white poppins">Connect With Us</h3>
              <div className="flex gap-6 mt-4">
                {[
                  { href: "https://twitter.com/PCUPuneOfficial", icon: FaTwitter, label: "Twitter" },
                  { href: "https://www.instagram.com/pcu_acm?igsh=MWZtYWYzMzlwOWtwMw==", icon: FaInstagram, label: "Instagram" },
                  { href: "https://www.linkedin.com/school/pimpri-chinchwad-university/", icon: FaLinkedin, label: "LinkedIn" },
                  { href: "https://github.com/samarth3101", icon: FaGithub, label: "GitHub" }
                ].map(({ href, icon: Icon, label }, index) => (
                  <motion.a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="relative text-gray-400 hover:text-white transition-all text-2xl group"
                    aria-label={label}
                  >
                    <Icon />
                    <span className="absolute left-0 bottom-[-3px] w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                  </motion.a>
                ))}
              </div>

              <h3 className="text-xl font-semibold text-white poppins mt-8">Quick Links</h3>
              <ul className="text-gray-400 mt-2 space-y-2 poppins text-center">
                {["Events", "Team", "Blogs"].map((link, index) => (
                  <li key={index} className="group">
                    <a
                      href={`/${link.toLowerCase().replace(/\s+/g, "")}`}
                      className="relative text-gray-400 hover:text-white transition-all"
                    >
                      {link}
                      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right Section - Illustration Video */}
        <div className="flex flex-col items-center min-w-[250px] max-w-sm w-full sm:w-auto px-4 sm:px-0">
          <video
            src="/illus.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full max-w-[300px] h-auto object-contain rounded-lg shadow-lg mt-20 sm:mt-40"
          />
          <h3 className="text-lg sm:text-xl font-semibold text-white poppins mt-4 text-center">
            Join ATHERTECH
          </h3>
          <p className="text-gray-400 text-center mt-2 poppins max-w-xs text-sm sm:text-base">
            Empowering students to innovate, collaborate, and lead the future of technology.
          </p>

          {/* Tech Support Section */}
          <div className="flex flex-col sm:flex-row items-center gap-2 mt-4 text-gray-300 text-sm sm:text-base">
            <svg className="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm1.07-7.75l-.9.92C12.45 12.9 12 13.5 12 15h-2v-.5c0-.8.45-1.5 1.07-1.92l1.2-1.2C12.8 10.72 13 10.34 13 10c0-.55-.45-1-1-1s-1 .45-1 1H9c0-1.66 1.34-3 3-3s3 1.34 3 3c0 .64-.24 1.26-.63 1.75z" />
            </svg>
            <span className="text-sm poppins text-gray-400 text-center sm:text-left">
              Tech Support:
              <a href="mailto:samarth.patil3101@gmail.com" className="text-blue-400 hover:underline">
                {" "}samarth.patil3101@gmail.com
              </a>
            </span>
          </div>
        </div>

      </div>

      {/* Tagline & Credits */}
      <div className="relative z-10 w-full text-center mt-8 sm:mt-12 border-t border-gray-700 sm:border-gray-800 pt-4 sm:pt-6 px-4">
        <p className="text-gray-400 poppins text-sm sm:text-base">"Designed, Developed, and Engineered for the Future."</p>
        <p className="text-gray-500 text-xs sm:text-sm mt-2 poppins">
          Built by{" "}
          <span
            onClick={() => setShowPopup(true)}
            className="text-white font-bold cursor-pointer hover:text-blue-500 transition-all"
          >
            Samarth Patil
          </span>
        </p>
      </div>

      {/* Copyright Notice */}
      <div className="text-gray-500 text-xs text-center mt-2 poppins">
        © {new Date().getFullYear()} ATHERTECH. All rights reserved.
      </div>

      {/* Popup About Developer */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowPopup(false)}
          >
            {/* 3D Tilt Effect */}
            <motion.div
              className="bg-gray-900 text-white p-4 sm:p-6 rounded-lg shadow-xl border border-blue-500 
                   relative w-[90%] max-w-xs sm:max-w-md h-[550px] sm:h-[650px] flex flex-col items-center text-center"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              style={{ perspective: "1000px" }}
              onMouseMove={(e) => {
                const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
                const x = ((e.clientX - left) / width - 0.5) * 20;
                const y = ((e.clientY - top) / height - 0.5) * 20;
                e.currentTarget.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "rotateY(0deg) rotateX(0deg)";
              }}
              onClick={(e) => e.stopPropagation()} // Prevent closing on inner div click
            >
              {/* Profile Image */}
              <img
                src="/samarthprof.jpeg"
                alt="Samarth Patil"
                className="w-24 h-32 sm:w-32 sm:h-42 rounded-full border-4 border-blue-500 shadow-lg"
              />

              {/* Title */}
              <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text mt-4">
                Samarth Patil 🚀
              </h2>

              {/* Short Intro */}
              <p className="text-gray-300 text-sm sm:text-base mt-2 px-2 sm:px-4">
                Passionate Developer | AI & ML Enthusiast | Web & Software Engineer
              </p>

              {/* Highlighted Skills */}
              <div className="mt-3 sm:mt-4 space-y-1 sm:space-y-2 w-full px-2 sm:px-4">
                <p className="text-md sm:text-lg text-white font-semibold">Key Skills:</p>
                <ul className="text-gray-400 text-xs sm:text-sm space-y-1">
                  <li>🔥 AI & Machine Learning</li>
                  <li>🖥️ Full-Stack Development (React, Node.js, Django)</li>
                  <li>📊 Data Science & Visualization (PowerBI, Tableau)</li>
                  <li>⚡ Problem Solver & Quick Learner</li>
                </ul>
              </div>

              {/* Portfolio & LinkedIn Links */}
              <div className="mt-4 sm:mt-6 flex flex-col space-y-2 sm:space-y-3 w-full px-4">
                <a
                  href="https://www.linkedin.com/in/samarth-patil-abb745289/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 sm:px-4 sm:py-2.5 w-full bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all text-sm sm:text-base"
                >
                  View LinkedIn Profile
                </a>
                <a
                  href="https://samarth3101.github.io/samarthpatil.github.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 sm:px-4 sm:py-2.5 w-full bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-all text-sm sm:text-base"
                >
                  Visit My Portfolio
                </a>
              </div>

              {/* Close Button */}
              <button
                className="absolute top-2 right-2 text-gray-400 hover:text-white text-lg"
                onClick={() => setShowPopup(false)}
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </footer>
  );
};

export default Footer;
