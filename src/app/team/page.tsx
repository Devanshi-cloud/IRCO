"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import ParallaxTilt from "react-parallax-tilt";

// Background Stars Animation
const SpaceBackground = () => (
    <Canvas camera={{ position: [0, 0, 3.5] }}>
        <ambientLight intensity={0.5} />
        <Stars radius={150} depth={50} count={7000} factor={4} fade />
    </Canvas>
);

const teamMembers = [
    { id: 1, name: "Soham Supekar", role: "President", image: "/soham.jpg" },
    { id: 2, name: "Samarth Patil", role: "Vice President", image: "/samarth.jpg" },
    { id: 3, name: "Tanaya Phatangare", role: "Vice President", image: "/profdum.png" },
    { id: 4, name: "Shreyas Baravkar", role: "Treasurer", image: "/shreyas.jpg" },
    { id: 5, name: "Karthik Nambiar", role: "Technical Head", image: "/profdum.png" },
    { id: 6, name: "Tanmay Shinde", role: "Design Lead", image: "/profdum.png" },
    { id: 7, name: "Janhavee Singh", role: "Event Head", image: "/jahnvi.jpg" },
    { id: 8, name: "Namrata Shinde", role: "Promotion Head", image: "/namrata.jpg" },
    { id: 9, name: "Vaishnavi Salunke", role: "Documentation Head", image: "/profdum.png" },
    { id: 10, name: "Nehal Gupta", role: "Volunter Head", image: "/nehal.jpg" },
    { id: 11, name: "Mitali Dahiphale", role: "Member - Treasurer", image: "/profdum.png" },
    { id: 12, name: "Somesh Jape", role: "Member - Treasurer", image: "/profdum.png" },
    { id: 13, name: "Shivank Wadke", role: "Member - Technical", image: "/profdum.png" },
    { id: 14, name: "Arohi Kedhe", role: "Member - Event", image: "/profdum.png" },
    { id: 15, name: "Aditya Kumar", role: "Member Event", image: "/profdum.png" },
    { id: 16, name: "Shehjad Sayyad", role: "Member - Design", image: "/profdum.png" },
    { id: 17, name: "Pearly Gaikwad", role: "Member - Promotion", image: "/profdum.png" },
    { id: 18, name: "Dushyant Dhote", role: "Member - Documentation", image: "/profdum.png" },
    { id: 19, name: "Anuj Varma", role: "Member - Volunteer", image: "/profdum.png" },
    { id: 20, name: "Trisha Shetty", role: "Member - Volunteer", image: "/profdum.png" },
    { id: 21, name: "Ashish Dhakane", role: "Memeber - Technical", image: "/profdum.png" },
    { id: 22, name: "Neel Khairnar", role: "Member - Technical", image: "/profdum.png" },
    { id: 23, name: "Bhuvan Jadhav", role: "Memeber - Event", image: "/profdum.png" },
    { id: 24, name: "Sanjana Karande", role: "Member - Event", image: "/profdum.png" },
    { id: 25, name: "Kriti Kashyap", role: "Member - Design", image: "/profdum.png" },
    { id: 26, name: "Sanika Gaykwad", role: "Member - Promotion", image: "/profdum.png" },
    { id: 27, name: "Deeya Gunai", role: "Member - Documentation", image: "/profdum.png" },
    { id: 28, name: "Sakshi Mane", role: "Member - Volunteer", image: "/profdum.png" },
    { id: 29, name: "Tejas Murkute", role: "Member - Volunteer", image: "/profdum.png" },
    { id: 30, name: "Sanya Agarwal", role: "Outreach Lead", image: "/profdum.png" },
];

export default function Team() {
    return (
        <section className="relative w-full min-h-screen flex flex-col justify-center items-center bg-black overflow-hidden px-4 md:px-6 pt-32">
            {/* Space Background */}
            <div className="absolute inset-0 z-0">
                <SpaceBackground />
            </div>

            {/* Title */}
            <motion.h1
                className="text-4xl md:text-6xl font-bold text-center mb-8 md:mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 drop-shadow-lg z-10"
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                Meet Our Team
            </motion.h1>

            {/* Team Cards Layout */}
            <div className="relative z-10 flex flex-wrap justify-center gap-6 md:gap-10 w-full max-w-7xl">
                {teamMembers.map((member, index) => (
                    <TeamCard key={member.id} member={member} />
                ))}
            </div>

            {/* Footer Component */}
            <Footer />
        </section>
    );
}

// Team Card Component with Parallax and Flip Effect
const TeamCard = ({ member }: { member: any }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative z-10"
        >
            <ParallaxTilt
                glareEnable={true}
                glareMaxOpacity={0.5}
                glareColor="#00ccff"
                glarePosition="bottom"
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                className="relative w-40 h-56 md:w-48 md:h-64 cursor-pointer"
            >
                <div
                    className="relative w-full h-full transition-transform duration-700"
                    style={{
                        transformStyle: "preserve-3d",
                        transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                    }}
                    onClick={() => setIsFlipped(!isFlipped)}
                >
                    {/* Front Side */}
                    <div
                        className="absolute w-full h-full bg-gray-900 border border-gray-700 p-4 rounded-xl shadow-lg flex flex-col items-center justify-center"
                        style={{ backfaceVisibility: "hidden" }}
                    >
                        <img
                            src={member.image}
                            alt={member.name}
                            className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-blue-500 shadow-md object-cover"
                        />
                        <div className="text-center mt-3">
                            <h2 className="text-base md:text-lg font-bold text-white">{member.name}</h2>
                            <p className="text-blue-400 text-sm md:text-base">{member.role}</p>
                        </div>
                    </div>

                    {/* Back Side */}
                    <div
                        className="absolute w-full h-full bg-gray-800 border border-gray-700 p-4 rounded-xl shadow-lg flex flex-col items-center justify-center"
                        style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}
                    >
                        <p className="text-white text-center text-sm md:text-base">
                            Hey, I am {member.name}. <br /> Happy to connect.
                        </p>
                    </div>
                </div>
            </ParallaxTilt>
        </motion.div>
    );
};

// Footer Component
const Footer = () => {
    return (
        <div className="relative w-full flex flex-col items-center mt-12 md:mt-20">
            <motion.div
                className="absolute bottom-24 w-[90%] h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 opacity-90 mb-8 z-50"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1 }}
                whileHover={{ scaleX: 1.1, opacity: 1 }} 
            />

            <motion.footer
                className="w-full py-6 bg-black flex flex-col items-center justify-center text-gray-400 text-xs md:text-sm tracking-wider space-y-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }} 
            >
                <div className="flex space-x-5"> 
                    {[
                        { Icon: FaLinkedin, href: "https://www.linkedin.com/school/pimpri-chinchwad-university/" },
                        { Icon: FaGithub, href: "https://github.com/samarth3101" },
                        { Icon: FaInstagram, href: "https://www.instagram.com/pcu_acm?igsh=MWZtYWYzMzlwOWtwMw==" }
                    ].map(({ Icon, href }, index) => (
                        <motion.a
                            key={index}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            className="text-gray-400 hover:text-white text-lg md:text-2xl transition-all"
                        >
                            <Icon />
                        </motion.a>
                    ))}
                </div>

                <p>© 2025 Immersive Events. All rights reserved.</p>
                <p className="text-gray-500">
                    Built by <span className="text-white font-semibold hover:text-blue-400 cursor-pointer">Samarth Patil</span>
                </p>
            </motion.footer>
        </div>
    );
};
