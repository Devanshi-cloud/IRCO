"use client";

import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { motion } from "framer-motion";
import { forwardRef, Ref, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { World } from "./globe";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const sampleArcs = [
    {
        order: 1,
        startLat: 34.0522,
        startLng: -118.2437,
        endLat: 40.7128,
        endLng: -74.006,
        arcAlt: 0.5,
        color: "rgba(255, 255, 255, 0.5)",
    },
    {
        order: 2,
        startLat: 51.5074,
        startLng: -0.1278,
        endLat: 35.6895,
        endLng: 139.6917,
        arcAlt: 0.7,
        color: "rgba(255, 255, 255, 0.5)",
    },
];

const globeConfig = {
    pointSize: 4,
    globeColor: "#062056",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#062056",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
};

// Rotating Stars Background
const RotatingStars = () => (
    <group>
        <Stars radius={200} depth={80} count={8000} factor={6} fade />
    </group>
);

// About Us Component with Forwarded Ref
const AboutUs = forwardRef((_, ref: Ref<HTMLElement>) => {
    const router = useRouter();
    const globeContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (globeContainerRef.current) {
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: globeContainerRef.current,
                    start: "top bottom",
                    end: "top top",
                    scrub: true,
                },
            });

            timeline.fromTo(
                globeContainerRef.current,
                { scale: 0.5, opacity: 0 },
                { scale: 1, opacity: 1, ease: "power2.out" }
            );
        }
    }, []);

    return (
        <section
            ref={ref}
            id="about"
            className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden bg-black px-4 sm:px-8"
        >
            {/* Space Background with Rotating Stars */}
            <div className="absolute inset-0 z-0">
                <Canvas camera={{ position: [0, 0, 3.5] }}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} />
                    <RotatingStars />
                </Canvas>
            </div>

            {/* Glowing Horizon Effect */}
            <div className="absolute top-[-15vh] left-1/2 -translate-x-1/2 w-[140vw] h-[50vh] 
                bg-gradient-to-b from-blue-500/40 to-transparent rounded-[50%] 
                blur-[150px] opacity-80 
                md:w-[120vw] md:h-[45vh] sm:w-[110vw] sm:h-[40vh]"
            />

            {/* Foreground Content */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="relative z-10 w-full max-w-7xl px-6 flex flex-col lg:flex-row items-center gap-12"
            >
                {/* Left Column - Text with Parallax Effect */}
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start"
                >
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold 
    bg-gradient-to-r from-blue-500 to-purple-500 
    text-transparent bg-clip-text drop-shadow-lg big-shoulders-stencil
    mt-32 sm:mt-0" // Adds space on mobile screens
                    >
                        Who We Are
                    </h2>

                    <div className="w-20 sm:w-24 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 my-4"></div>
                    <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-300 poppins">
                        IRCO is a hub of innovation, where technology and creativity merge
                        to build the future. Our mission is to empower students with cutting-edge
                        knowledge, foster collaboration, and drive technological advancements.
                    </p>

                    {/* CTA Button - Navigates to Contact Page */}
                    <motion.button
                        whileHover={{ scale: 1.08 }}
                        className="mt-6 px-6 sm:px-8 py-3 sm:py-4 text-lg sm:text-xl font-semibold 
                        text-white border-2 border-white rounded-full 
                        shadow-md hover:shadow-lg transition-all poppins 
                        bg-transparent hover:bg-white/20 backdrop-blur-lg"
                        onClick={() => router.push("/contact")}
                    >
                        Join Us
                    </motion.button>
                </motion.div>

                {/* Right Column - Looping Video with Parallax Effect */}
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="lg:w-1/2 flex justify-center"
                >
                    <div ref={globeContainerRef} className="relative w-full max-w-[600px] h-[500px] flex justify-center">
                        <World globeConfig={globeConfig} data={sampleArcs} />
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
});

// Set display name for debugging
AboutUs.displayName = "AboutUs";

export default AboutUs;