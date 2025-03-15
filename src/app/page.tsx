"use client";

import { useState, useRef } from "react";
import Hero from "@/components/Hero";
import AboutUs from "@/components/About";
import Events from "@/components/Events";
import Team from "@/components/Team";
import Footer from "@/components/Footer";
import TechLoader from "@/components/TechLoader"; // Import Loader

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);
    const aboutRef = useRef<HTMLElement>(null); // Ensure correct ref assignment

    return (
        <main className="relative">
            {isLoading ? (
                <TechLoader onComplete={() => setIsLoading(false)} />
            ) : (
                <>
                    <Hero aboutRef={aboutRef} />
                    <AboutUs ref={aboutRef} />
                    <Events />
                    <Team />
                    <Footer />
                </>
            )}
        </main>
    );
}