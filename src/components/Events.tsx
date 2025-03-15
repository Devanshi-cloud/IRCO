"use client";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

const RotatingStars = () => (
    <group>
        <Stars radius={200} depth={80} count={8000} factor={6} fade />
    </group>
);


// Events Data
const events = [
    {
        id: 1,
        title: "INAUGURATION OF ACM STUDENT CHAPTER",
        date: "January 8, 2025",
        description: "On January 8, 2025, we, proudly inaugurated the first-ever ACM Student Chapter at Pimpri Chinchwad University, Pune (PCU) – Athertech! 🚀",
        image: "/acmino.jpeg",
    },
    {
        id: 2,
        title: "Zscaler Cloud Security Workshop",
        date: "March 6, 2025",
        description: "🚀 Empowering the Future with Cloud Security! 🔐 The Tech Camp on Cloud Security, organized by ACM, IEEE, IIC, and PCU, was a phenomenal success!",
        image: "/zcloud.jpeg",
    },
    {
        id: 3,
        title: "Coming Soon...",
        date: "TBD",
        description: "Stay tuned for more exciting events from ATHERTECH!",
        image: "/coming.png",
    },
];

const StarryBackground = () => {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none">
            <Canvas camera={{ position: [0, 0, 3.5] }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <Stars radius={200} depth={80} count={8000} factor={6} fade />
            </Canvas>
        </div>
    );
};



export default function EventTimeline() {
    const [activeEvent, setActiveEvent] = useState<number | null>(null);

    // Parallax Scroll Effect
    const { scrollYProgress } = useScroll();
    const yParallax = useTransform(scrollYProgress, [0, 1], [-100, 100]);

    return (
        <section className="relative w-full min-h-screen flex flex-col justify-center items-center bg-black px-4 sm:px-8 overflow-hidden">
            {/* 🌌 Starry Background */}
            <StarryBackground />

            {/* Headline */}
            <motion.h1
                className="text-4xl sm:text-6xl md:text-7xl font-bold 
        bg-gradient-to-r from-blue-500 to-purple-500 
        text-transparent bg-clip-text drop-shadow-lg 
        big-shoulders-stencil mt-12 text-center z-10
        mb-10 sm:mb-6" // Adds space below on mobile
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                Event Timeline <br /> <br />
            </motion.h1>


            {/* Timeline Container with Parallax */}
            <motion.div
                style={{ y: yParallax }}
                className="relative max-w-5xl w-full mx-auto z-10"
            >
                {/* Vertical Timeline Line */}
                <div className="absolute left-1/2 w-1 bg-gradient-to-b from-blue-500 to-purple-500 h-full -translate-x-1/2 hidden sm:block"></div>

                {events.map((event, index) => {
                    const isLeft = index % 2 === 0;
                    const imageParallax = useTransform(scrollYProgress, [0, 1], [-50, 50]);

                    return (
                        <motion.div
                            key={event.id}
                            className={`relative mb-16 flex flex-col sm:flex-row items-center ${isLeft ? "sm:flex-row-reverse" : "sm:flex-row"
                                }`}
                            initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                        >
                            {/* Timeline Node */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white rounded-full border-4 border-blue-500 hidden sm:block"></div>

                            {/* Floating Image with Parallax */}
                            <motion.img
                                src={event.image}
                                alt={event.title}
                                className={`w-36 h-36 object-cover rounded-lg shadow-lg hidden sm:block absolute ${isLeft ? "left-[-180px]" : "right-[-180px]"
                                    }`}
                                style={{ y: imageParallax }}
                            />

                            {/* Event Card */}
                            <motion.div
                                className={`w-full sm:w-[45%] bg-black border border-gray-800 rounded-lg shadow-lg p-5 cursor-pointer ${isLeft ? "sm:mr-auto sm:-translate-x-[20px]" : "sm:ml-auto sm:translate-x-[20px]"
                                    }`}
                                onClick={() => setActiveEvent(event.id)}
                            >
                                {/* Mobile Image (Above Card) */}
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="w-full rounded-lg mb-4 sm:hidden"
                                />
                                <h2 className="text-xl sm:text-2xl font-semibold">{event.title}</h2>
                                <p className="text-blue-400">{event.date}</p>
                                <p className="mt-2 text-gray-400">{event.description}</p>
                            </motion.div>
                        </motion.div>
                    );
                })}
            </motion.div>

            <AnimatePresence>
                {activeEvent !== null && (
                    <motion.div
                        className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-6 z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, transition: { duration: 0.4, ease: "easeInOut" } }} // Smooth fade-out
                        onClick={() => setActiveEvent(null)} // Click outside to close
                    >
                        <motion.div
                            className="relative max-w-lg w-full bg-gray-900 rounded-lg p-6 shadow-2xl"
                            initial={{ scale: 0.8, opacity: 0, y: 20 }} // Start small & slightly below
                            animate={{ scale: 1, opacity: 1, y: 0 }} // Expand naturally
                            exit={{
                                scale: 0.8,
                                opacity: 0,
                                y: 20, // Moves down slightly while closing
                                transition: { duration: 0.4, ease: "easeInOut" }, // Smooth transition
                            }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
                        >
                            <button
                                className="absolute top-4 right-4 text-gray-400 hover:text-white"
                                onClick={() => setActiveEvent(null)}
                            >
                                <FaTimes size={20} />
                            </button>
                            <img
                                src={events[activeEvent - 1].image}
                                alt={events[activeEvent - 1].title}
                                className="w-full rounded-lg mb-4"
                            />
                            <h2 className="text-2xl sm:text-3xl font-bold text-blue-400">
                                {events[activeEvent - 1].title}
                            </h2>
                            <p className="text-gray-300 mt-2">{events[activeEvent - 1].description}</p>
                            <button className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition">
                                Keep Exploring
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </section>
    );
}