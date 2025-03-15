"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHome, FaCalendarAlt, FaUsers, FaBlog, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";



const navItems = [
    { name: "Home", icon: FaHome, link: "/" },
    { name: "Events", icon: FaCalendarAlt, link: "/events" },
    { name: "Team", icon: FaUsers, link: "/team" },
    { name: "Blogs", icon: FaBlog, link: "/blogs" },
    { name: "Contact", icon: FaEnvelope, link: "/contact" },
];

const Navbar = () => {
    const [hovered, setHovered] = useState<number | null>(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const [eventLive] = useState(true);
    const [sToggled, setSToggled] = useState(false);

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-4 inset-x-0 mx-auto w-full max-w-[90%] bg-opacity-30 backdrop-blur-lg 
                       shadow-lg border border-white/10 rounded-full flex items-center justify-between 
                       px-5 py-3 z-50 bg-gray-900/50 animate-borderGlowLoop md:px-6"
        >
            {/* Left Side: Logo + ATHERTECH */}
            <div className="flex items-center gap-3">
                <Image src="/acm.png" alt="Logo" width={35} height={35} className="rounded-full" />
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-600 
                                text-transparent bg-clip-text text-lg sm:text-2xl tracking-wide font-bold 
                                font-shoulders">
                    ATHERTECH
                </span>
            </div>

            {/* Center: Desktop Navigation */}
            <div className="hidden md:flex justify-around gap-6">
                {navItems.map((item, index) => {
                    const Icon = item.icon;
                    return (
                        <motion.div
                            key={index}
                            className="relative flex flex-col items-center"
                            onMouseEnter={() => setHovered(index)}
                            onMouseLeave={() => setHovered(null)}
                        >
                            <Link
                                href={item.link}
                                className="flex items-center justify-center text-gray-300 text-lg w-10 h-10 rounded-full 
                                        transition-all duration-300 hover:bg-gradient-to-r from-blue-500 to-purple-500"
                            >
                                <Icon className="text-2xl" />
                            </Link>

                            <AnimatePresence>
                                {hovered === index && (
                                    <motion.span
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 10 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.3 }}
                                        className="absolute top-full mt-2 text-white bg-gradient-to-r from-blue-500 to-purple-500 
                                        px-3 py-1 rounded-md shadow-lg text-xs"
                                    >
                                        {item.name}
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    );
                })}
            </div>

            {/* Right Side: LIVE Indicator + S Symbol + Mobile Menu Button */}
            <div className="flex items-center gap-3 md:gap-6 flex-wrap">
                {/* Live Indicator */}
                {eventLive && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center gap-1 md:gap-2 text-white text-xs sm:text-sm"
                    >
                        <span>LIVE</span>
                        <motion.span
                            animate={{ scale: [1, 1.4, 1] }}
                            transition={{ repeat: Infinity, duration: 1 }}
                            className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full shadow-lg"
                        ></motion.span>
                    </motion.div>
                )}

                {/* S Toggle Button */}
                <button
                    onClick={() => setSToggled(!sToggled)}
                    className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full 
                    bg-gray-800 hover:bg-gray-700 transition-all shadow-md"
                >
                    <motion.span
                        animate={{ rotate: sToggled ? 360 : 0, scale: sToggled ? 1.1 : 1 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className={`text-white font-extrabold text-sm sm:text-base ${sToggled ? "tracking-wider" : "tracking-normal"}`}
                    >
                        {sToggled ? "S" : "𝓢"}  
                    </motion.span>
                </button>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white text-2xl"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Navigation Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="absolute top-16 left-0 w-full bg-gray-900/95 rounded-b-xl py-4 shadow-lg md:hidden"
                    >
                        <div className="flex flex-col items-center space-y-5">
                            {navItems.map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.05, duration: 0.3 }}
                                    >
                                        <Link
                                            href={item.link}
                                            className="flex items-center gap-3 text-gray-300 text-lg py-2 px-6 
                                                    hover:text-white transition-all duration-300"
                                            onClick={() => setMenuOpen(false)}
                                        >
                                            <Icon className="text-xl" />
                                            {item.name}
                                        </Link>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
