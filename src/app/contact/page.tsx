"use client";
import { motion } from "framer-motion";
import { FaDiscord, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useState, useEffect, useRef } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [submitted, setSubmitted] = useState(false); // Track form submission state
    const cardRef = useRef<HTMLFormElement>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch("https://formspree.io/f/xzzezprz", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitted(true); // Hide form and show thank-you message
                setTimeout(() => {
                    window.location.reload(); // Reload after 2 seconds
                }, 2000);
            } else {
                alert("Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("An error occurred. Please try again later.");
        }
    };

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            if (cardRef.current) {
                const { clientX, clientY } = event;
                const centerX = window.innerWidth / 2;
                const centerY = window.innerHeight / 2;

                const deltaX = (clientX - centerX) / 50;
                const deltaY = (clientY - centerY) / 50;

                cardRef.current.style.transform = `perspective(1000px) rotateY(${deltaX}deg) rotateX(${deltaY}deg)`;
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <main className="relative w-full h-screen bg-black text-white flex items-center justify-center overflow-hidden">
            <Canvas className="absolute inset-0">
                <Stars radius={100} depth={100} count={10000} factor={4} />
            </Canvas>

            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center sm:overflow-visible overflow-y-auto sm:h-screen sm:flex-row flex-col py-10">
                {/* Conditional Rendering: Show Form or Thank You Message */}
                {!submitted ? (
                    <motion.form
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        ref={cardRef}
                        className="w-[90%] bg-opacity-10 backdrop-blur-lg p-6 md:p-10 rounded-xl border border-gray-700 shadow-xl max-w-md relative transition-all duration-300 ease-out py-1 sm:py-32 sm:mt-0 mt-96"
                        style={{
                            transformStyle: 'preserve-3d',
                            boxShadow: '0px 15px 50px rgba(0, 0, 0, 0.5)',
                            perspective: '1000px',
                        }}
                    >
                        <h2 className="text-3xl font-semibold text-white mb-4">Get in Touch</h2>
                        <p className="text-gray-400 text-sm mb-6">
                            Have questions or want to collaborate? Fill out the form and we will get back to you.
                        </p>

                        <div className="flex flex-col gap-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="bg-transparent border-b border-gray-500 p-2 text-white focus:outline-none focus:border-blue-400 transition-all"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="bg-transparent border-b border-gray-500 p-2 text-white focus:outline-none focus:border-blue-400 transition-all"
                            />
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="bg-transparent border-b border-gray-500 p-2 text-white focus:outline-none focus:border-blue-400 transition-all resize-none h-24"
                            ></textarea>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                type="submit"
                                className="bg-gradient-to-r from-blue-500 to-purple-600 py-2 rounded-lg font-semibold hover:shadow-lg transition-all"
                            >
                                Send Message 🚀
                            </motion.button>
                        </div>
                    </motion.form>
                ) : (
                    // Thank You Message
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="w-[90%] bg-opacity-10 backdrop-blur-lg p-10 rounded-xl border border-gray-700 shadow-xl max-w-md text-center"
                    >
                        <h2 className="text-3xl font-semibold text-white mb-4">Thank You for Reaching Out! 🎉</h2>
                        <p className="text-gray-400 text-lg">Your message has been successfully received. Our team will get back to you shortly.</p>
                    </motion.div>
                )}

                {/* Right Side Section */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="w-full max-w-md flex flex-col gap-6 px-4 sm:px-6 text-center sm:text-left py-10 sm:py-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-600 text-transparent bg-clip-text">
                        We at ACM are Here to Assist <br className="hidden sm:block" /> you 24/7*
                    </h2>
                    <p className="text-base sm:text-lg text-gray-300">
                        At ATHERTECH, we value every inquiry. Whether you need assistance, want to collaborate, or
                        simply have a question, we are always ready to help.
                    </p>

                    {/* Social Media Links */}
                    <motion.div className="mt-4 flex justify-center gap-6 text-gray-400">
                        <a href="#" className="text-3xl hover:text-blue-500 transition-all">
                            <FaDiscord />
                        </a>
                        <a href="https://github.com/samarth3101" className="text-3xl hover:text-indigo-500 transition-all">
                            <FaGithub />
                        </a>
                        <a href="https://www.instagram.com/pcu_acm?igsh=MWZtYWYzMzlwOWtwMw==" className="text-3xl hover:text-purple-500 transition-all">
                            <FaInstagram />
                        </a>
                        <a href="https://www.linkedin.com/school/pimpri-chinchwad-university/" className="text-3xl hover:text-blue-400 transition-all">
                            <FaLinkedin />
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </main>
    );
}
