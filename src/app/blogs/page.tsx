"use client";

import { imageSources, socialLinks } from "@/constants/blogData"; // ✅ Import from constants
import { FaDiscord, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import ParallaxTilt from "react-parallax-tilt";

// Sample blog data
const blogs = [
    {
        title: "Inauguration Event 🎉",
        description: "A grand launch of ATHERTECH with tech enthusiasts and innovators.",
        image: "/acmino.jpeg",
        link: "#",
    },
    {
        title: "Zscaler: The Techworkshop ⚡",
        description: "A thrilling journey through workshop. Students grasped the concept of cloud and industry use cases of cloud tech.",
        image: "/zcloud.jpeg",
        link: "#",
    },
];

export default function Blogs() {
    return (
        <div className="relative min-h-screen w-full overflow-hidden">
            {/* 🌌 Fullscreen Space Background */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black via-[#0a001f] to-[#12014d]">
                <Canvas className="absolute inset-0">
                    <Stars radius={100} depth={50} count={5000} factor={4} />
                </Canvas>
            </div>

            {/* 🌠 Blog Header */}
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="relative z-10 text-center pt-20"
            >
                <h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text drop-shadow-lg big-shoulders-stencil mt-6 ">
                    🚀 Tech Blogs & Insights
                </h1>
                <p className="text-lg text-gray-400 mt-3">
                    Stay updated with the latest tech trends & innovations!
                </p>
            </motion.div>

            {/* 🔥 Blog Grid */}
            <div className="relative z-10 grid md:grid-cols-3 gap-6 p-10">
                {blogs.map((blog, index) => (
                    <ParallaxTilt
                        key={index}
                        tiltMaxAngleX={10}
                        tiltMaxAngleY={10}
                        className="bg-gray-900 p-5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 200 }}
                            className="cursor-pointer"
                        >
                            <img
                                src={blog.image}
                                alt={blog.title}
                                className="rounded-lg w-full h-40 object-cover"
                            />
                            <h2 className="mt-4 text-xl font-semibold">{blog.title}</h2>
                            <p className="text-gray-400 mt-2">{blog.description}</p>
                            <a
                                href={blog.link}
                                className="inline-block mt-4 text-blue-500 hover:underline"
                            >
                                Read More →
                            </a>
                        </motion.div>
                    </ParallaxTilt>
                ))}
            </div>

            {/* 🔄 Infinite Scrolling News Line - Now Below Blog Cards */}
            <motion.div
                initial={{ x: "100%" }}
                animate={{ x: "-100%" }}
                transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                className="relative w-full whitespace-nowrap text-center text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mt-4"
            >
                📢 Tech Updates • Future of AI • Quantum Computing • Cybersecurity Trends • Web3 & Blockchain Innovations • AR & VR Breakthroughs • Edge Computing & IoT • Neural Networks & Deep Learning • Advancements in Robotics • Metaverse & Digital Twins • 5G & Next-Gen Connectivity • Ethical AI & Tech Regulations • Cyber Warfare & Data Privacy • Open-Source Revolution • Space Tech & Interstellar Exploration • Human-AI Collaboration • Sustainable & Green Tech • Next-Gen Programming Paradigms • Biotechnology & AI Synergy • Autonomous Vehicles & Smart Cities 🚀
            </motion.div>

            {/* 🌟 Glowing Divider Above Footer - Fixed Effect */}
            <motion.div
                className="relative w-[90%] h-[2px] mx-auto bg-gradient-to-r from-blue-500 to-purple-500 opacity-80 mt-5"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1 }}
                whileHover={{ scaleX: 1.05, opacity: 1 }}
            />

            {/* 🔻 Futuristic Transparent Footer */}
            <motion.footer
                className="relative w-full py-8 bg-transparent flex flex-col items-center justify-center text-gray-400 text-sm tracking-wider space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
            >
                {/* 🌐 Social Links */}
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

                {/* ⚡ Footer Text */}
                <div className="text-center">
                    <p>© 2025 Immersive Events. All rights reserved.</p>
                    <p className="text-xs text-gray-500">
                        Built by{" "}
                        <span className="text-white font-semibold hover:text-blue-400 cursor-pointer">
                            Samarth Patil
                        </span>
                    </p>
                </div>
            </motion.footer>
        </div>
    );
}
