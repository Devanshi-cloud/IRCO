"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaInstagram, FaLinkedin, FaGithub, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

import { FaTwitter } from "react-icons/fa";

import importedImageSources from "@/app/blogs/page";



const transition = {
    type: "spring",
    damping: 10,
    stiffness: 100,
};

const events = [
    {
        year: "2025",
        title: "INAUGRATION OF ACM STUDENT CHAPTER",
        description: "On January 8, 2025, we proudly inaugurated the first-ever ACM Student Chapter at Pimpri Chinchwad University, Pune (PCU) – Athertech! 🚀",
        image: "/acmino.jpeg",
        details: [
            "1.	Historic Milestone – The inauguration of ATHERTECH marked a significant achievement for PCU, establishing a platform for students to collaborate, innovate, and explore emerging technologies under the ACM banner.",
            "2.	Grand Launch Event – The ceremony featured esteemed faculty, industry experts, and ACM representatives who shared insights on the importance of ACM and how the chapter would contribute to the tech community.",
            "3.	Networking & Collaboration – The event provided students with an opportunity to connect with professionals, engage in discussions on cutting-edge technology, and gain insights into career growth within the field of computing.",
        ],
    },
    {
        "year": "2025",
        "title": "ZSCALER TECH WORKSHOP",
        "description": "An immersive three-day workshop on Cloud Security, organized in collaboration with Zscaler and EduSkills Foundation®.",
        "image": "/zcloud.jpeg",
        "details": [
            "In-depth sessions on Cloud Security and Zero Trust Architecture led by industry experts.",
            "Hands-on practical labs exploring real-world cybersecurity challenges and solutions.",
            "Expert insights from Miss Sanskriti Sood, with guidance from esteemed faculty mentors."
        ]
    },
];

const socialLinks = [
    { href: "https://twitter.com/PCUPuneOfficial", icon: FaTwitter, label: "Twitter" },
    { href: "https://www.instagram.com/pcu_acm?igsh=MWZtYWYzMzlwOWtwMw==", icon: FaInstagram, label: "Instagram" },
    { href: "https://www.linkedin.com/school/pimpri-chinchwad-university/", icon: FaLinkedin, label: "LinkedIn" },
    { href: "https://github.com/samarth3101", icon: FaGithub, label: "GitHub" },
];

const imageSources = ["/acmino.jpeg", "/zcloud.jpeg", "/zsca.jpeg", "/acmrawan.webp", "/zssam.jpeg", "/samraw.png", "/sohraw.png"];

export default function EventsPage() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedEvent, setSelectedEvent] = useState<any>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    const handleNextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imageSources.length);
    };

    const handlePrevImage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? imageSources.length - 1 : prevIndex - 1
        );
    };

    const handleCloseModal = () => {
        setSelectedEvent(null);
    };

    return (
        // <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center p-12 relative overflow-hidden">
        <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center p-12 relative overflow-x-hidden overflow-y-auto md:overflow-hidden">


            {/* Enhanced Grid Background */}
            <motion.div
                className="absolute inset-0 grid grid-cols-10 grid-rows-7 opacity-50 md:grid-cols-10 md:grid-rows-7 sm:grid-cols-5 sm:grid-rows-4"
                animate={{
                    backgroundPosition: `${mousePos.x / 30}px ${mousePos.y / 30}px`
                }}
                transition={{ ease: "linear", duration: 0.2 }}
            >
                {[...Array(70)].map((_, index) => (
                    <div key={index} className="border border-gray-500/30 backdrop-brightness-200"></div>
                ))}
            </motion.div>


            {/* Calendar Section with Blurred Grid */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="mt-16 sm:mt-28 mx-4 sm:mx-16 flex justify-center sm:justify-start sm:absolute sm:top-5 sm:left-16 sm:w-[470px]" // Shift upward on desktop
            >
                <div className="w-full bg-black p-6 rounded-lg shadow-xl backdrop-blur-md z-10">
                    {/* Title with Higher z-index */}
                    <h1 className="relative z-20 text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text drop-shadow-lg big-shoulders-stencil whitespace-nowrap leading-tight tracking-wide text-center">
                        Explore Our Events
                    </h1>

                    {/* Animated Underline */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative z-10 w-36 h-1 bg-blue-500 mt-2 origin-left"
                    ></motion.div>

                    {/* Illustrative Video Placeholder */}
                    <div className="relative w-full h-40 mt-6 rounded-lg overflow-hidden">
                        <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover opacity-80">
                            <source src="/eventill.mp4" type="video/mp4" />
                        </video>
                    </div>

                    {/* Event List */}
                    <div className="mt-6 space-y-4">
                        {events.map((event, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="flex flex-col sm:flex-row items-start sm:items-center space-x-0 sm:space-x-6 cursor-pointer hover:bg-gray-800 p-2 rounded-lg"
                                onClick={() => setSelectedEvent(event)}
                            >
                                <span className="text-blue-400 text-lg font-bold">{event.year}</span>
                                <div className="text-lg font-medium">
                                    <h3 className="text-white">{event.title}</h3>
                                    <p className="text-gray-400 text-sm">{event.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>


            <AnimatePresence>
    {selectedEvent && (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md flex justify-center items-center z-50 px-4 sm:px-0"
            onClick={handleCloseModal}
        >
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="bg-gray-900 p-5 sm:p-6 rounded-lg shadow-xl w-[90%] sm:w-[500px] h-auto max-h-[90vh] overflow-y-auto relative"
                onClick={(e) => e.stopPropagation()} // Prevent outside click from closing
            >
                {/* Close Button */}
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        handleCloseModal();
                    }}
                    className="absolute top-2 right-2 sm:top-4 sm:right-4 text-gray-400 hover:text-white transition-all duration-200"
                >
                    <IoMdClose size={24} />
                </button>

                {/* Event Image */}
                <div className="w-full h-32 sm:h-40 rounded-lg overflow-hidden mb-4 relative">
                    <Image src={selectedEvent.image} alt={selectedEvent.title} layout="fill" objectFit="cover" />
                </div>

                {/* Event Details */}
                <h2 className="text-2xl sm:text-3xl font-bold text-white">{selectedEvent.title}</h2>
                <p className="text-blue-400 text-md sm:text-lg">{selectedEvent.year}</p>
                <p className="text-gray-300 mt-2 text-sm sm:text-base">{selectedEvent.description}</p>

                {/* Bullet Points */}
                <ul className="mt-4 space-y-2 text-gray-400 text-sm sm:text-base">
                    {selectedEvent.details.map((detail: string, index: number) => (
                        <li key={index} className="flex items-center">
                            ✅ <span className="ml-2">{detail}</span>
                        </li>
                    ))}
                </ul>
            </motion.div>
        </motion.div>
    )}
</AnimatePresence>


            {/* Stacked Images - iPhone Recent Apps Style */}
            <div className="relative w-full flex flex-col items-center justify-center sm:absolute sm:top-0 sm:right-10 sm:w-[500px] sm:h-[500px] sm:z-10 sm:flex-col sm:space-x-6 sm:space-y-6 sm:flex-wrap sm:mt-6 top-[calc(100%+20px)] z-0">

                {/* Mobile-Specific Styles (below the calendar, reduced size) */}
                <div className="relative w-full sm:w-[400px] sm:h-[400px] flex flex-col items-center justify-center mt-36">
                    {imageSources.map((src, index) => {
                        const isActive = index === currentIndex;
                        const tiltAngle = index % 2 === 0 ? 0 : -8; // Alternating tilt effect
                        const activeTilt = isActive ? tiltAngle / 2 : tiltAngle; // Reduce tilt slightly for active image

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50, rotate: tiltAngle }}
                                animate={{
                                    opacity: isActive ? 1 : 0.4, // Smooth fade-in effect
                                    y: isActive ? 0 : 15 * index, // Subtle vertical displacement
                                    rotate: activeTilt, // Retain the alternate tilt effect
                                    scale: 1, // No scale effect
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 80, // Softer movement
                                    damping: 20, // Prevents abrupt stops
                                    mass: 0.5, // Smooth weight feel
                                    duration: 0.5, // Shorter duration for smoother animation
                                }}
                                className="absolute w-[250px] h-[250px] sm:w-full sm:h-full rounded-lg overflow-hidden shadow-xl group cursor-pointer"
                                style={{ zIndex: isActive ? 10 : 5 - index }}
                            >
                                {/* Image */}
                                <Image
                                    src={src}
                                    alt="Event"
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-lg transition-all duration-300 ease-in-out"
                                />

                                {/* Gradual Extra Info Reveal */}
                                <motion.div
                                    className="absolute bottom-0 left-0 w-full p-4 text-white bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                >
                                    <h3 className="text-lg font-bold">{events[index]?.title || "Event"}</h3>
                                    <p className="text-sm">{events[index]?.description || "Description"}</p>

                                    {/* Delayed Extra Info */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, delay: 0.2 }}
                                        className="mt-2 text-gray-300 text-xs group-hover:block hidden transition-all duration-500"
                                    >
                                        📍 Location: Pimpri Chinchwad University
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Navigation Arrows */}
                <button
                    onClick={handlePrevImage}
                    className="absolute bg-black/40 backdrop-blur-md text-white p-2 sm:p-1.5 rounded-full shadow-lg 
               hover:bg-black/60 hover:shadow-blue-500/40 transition-all duration-300 ease-in-out
               active:scale-75 active:opacity-60 
               ring-1 ring-white/20 hover:ring-blue-400/50 
               top-[380px] sm:top-76 left-3 sm:left-[-60px]"
                >
                    <FaArrowLeft size={20} className="sm:size-8 transition-transform group-hover:scale-110" />
                </button>

                <button
                    onClick={handleNextImage}
                    className="absolute bg-black/40 backdrop-blur-md text-white p-2 sm:p-1.5 rounded-full shadow-lg 
               hover:bg-black/60 hover:shadow-blue-500/40 transition-all duration-300 ease-in-out
               active:scale-75 active:opacity-60 
               ring-1 ring-white/20 hover:ring-blue-400/50 
               top-[380px] sm:top-76 right-3 sm:right-[-30px]"
                >
                    <FaArrowRight size={20} className="sm:size-8 transition-transform group-hover:scale-110" />
                </button>

            </div>



            {/* Glowing Divider Above Footer */}
            <motion.div
                // className="absolute bottom-16 w-[90%] h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 opacity-90 mb-14 z-20 sm:bottom-16"
                className="absolute bottom-40 sm:bottom-16 w-[90%] h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 opacity-90 mb-14 z-20"

                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1 }}
                whileHover={{ scaleX: 1.1, opacity: 1 }} // Glow effect on hover
            />

            {/* Futuristic Footer */}
            <motion.footer
                className="w-full py-8 bg-black flex flex-col items-center justify-center text-gray-400 text-sm tracking-wider space-y-4 sm:absolute sm:bottom-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
                style={{
                    marginTop: "calc(100% + 80px)", // Push it below stacked photos and arrows
                }}
            >
                {/* Social Links */}
                <div className="flex space-x-6">
                    {socialLinks.map(({ href, icon: Icon, label }, index) => (
                        <motion.a
                            key={index}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            className="text-gray-400 hover:text-white text-2xl transition-all"
                            aria-label={label}
                        >
                            <Icon />
                        </motion.a>
                    ))}
                </div>

                {/* Footer Text */}
                <div className="text-center">
                    <p>© 2025 Immersive Events. All rights reserved.</p>
                    <p className="text-xs text-gray-500">
                        Built by <span className="text-white font-semibold hover:text-blue-400 cursor-pointer">Samarth Patil</span>
                    </p>
                </div>
            </motion.footer>
        </div>
    );
}
