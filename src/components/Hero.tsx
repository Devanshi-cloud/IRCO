"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { motion } from "framer-motion";
import { useRef } from "react";
import * as THREE from "three";
import { RefObject } from "react";

interface HeroProps {
    aboutRef: RefObject<HTMLElement | null>;
}

const RotatingStars = () => {
    const starsRef = useRef<THREE.Group>(null);

    useFrame(() => {
        if (starsRef.current) {
            starsRef.current.rotation.y += 0.0007;
            starsRef.current.rotation.x += 0.0004;
        }
    });

    return (
        <group ref={starsRef}>
            <Stars radius={140} depth={80} count={7000} factor={6} fade />
        </group>
    );
};

const Hero = ({ aboutRef }: HeroProps) => {
    const scrollToAbout = () => {
        if (aboutRef.current) {
            aboutRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden bg-black">
            {/* Space Background with Rotating Stars */}
            <div className="absolute inset-0 pointer-events-none">
                <Canvas camera={{ position: [0, 0, 3.5] }}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} />
                    <RotatingStars />
                </Canvas>
            </div>

            {/* Glowing Horizon Effect */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[140vw] h-[40vh] 
                bg-gradient-to-t from-blue-500/30 to-transparent rounded-[50%] blur-[110px] opacity-90 
                md:w-[120vw] md:h-[38vh] sm:w-[100vw] sm:h-[30vh]" />

            {/* Foreground Content */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="relative z-10 text-center text-white px-4 mt-12 sm:mt-16"
            >
                {/* Title Animation */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", staggerChildren: 0.1 }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold 
                               bg-gradient-to-r from-blue-500 to-purple-500 
                               text-transparent bg-clip-text drop-shadow-lg big-shoulders-stencil"
                >
                    {Array.from("WELCOME TO ATHERTECH").map((letter, index) => (
                        <motion.span
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.05 }}
                        >
                            {letter}
                        </motion.span>
                    ))}
                </motion.h1>

                {/* Subtitle */}
                <h2 className="mt-2 text-xl sm:text-2xl md:text-3xl font-semibold text-gray-200 neon-text poppins">
                    PCU's ACM Student Chapter
                </h2>

                {/* Tagline */}
                <p className="mt-4 text-md sm:text-lg md:text-xl text-gray-300 poppins">
                    Innovating the Future, One Step at a Time.
                </p>

                {/* Animated Explore Button */}
                <motion.div className="relative mt-8 flex flex-col items-center">
                    <motion.button
                        onClick={scrollToAbout}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="relative px-6 py-3 sm:px-8 sm:py-4 text-md sm:text-lg md:text-xl font-semibold text-white 
                        rounded-full shadow-md poppins border-2 border-white 
                        bg-white/20 hover:bg-white/30 backdrop-blur-lg hover:shadow-lg transition-all"
                    >
                        Explore More
                    </motion.button>

                    {/* Scroll for More Animation */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                        className="mt-6 text-white text-sm sm:text-base md:text-lg poppins"
                    >
                        Scroll for More ↓
                    </motion.p>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
