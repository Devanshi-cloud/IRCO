import { useState } from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import ParallaxTilt from "react-parallax-tilt";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

// Background Stars
const RotatingStars = () => (
  <group>
    <Stars radius={150} depth={50} count={5000} factor={5} fade />
  </group>
);

// Team Members Data with respective links
const teamMembers = [
  { id: 1, name: "SOHAM SUPEKAR", role: "President", image: "/soham.jpg", linkedin: "https://www.linkedin.com/in/sohamsupekar24/", github: "https://github.com/SOHAMSUPEKAR24", instagram: "https://www.instagram.com/sohamsupekar_24?igsh=Nm9idWtkMjVmbDRt&utm_source=qr" },
  { id: 2, name: "SAMARTH PATIL", role: "Vice President", image: "/samarth.jpg", linkedin: "https://www.linkedin.com/in/samarth-patil-3101spp/", github: "https://github.com/samarth3101", instagram: "https://www.instagram.com/samarthpatil0131?igsh=bWN6OHJ5dHVpc2Js" },
  { id: 3, name: "TANAYA PHATANGE", role: "Vice President", image: "/profdum.png", linkedin: "#", github: "#", instagram: "#" },
  { id: 4, name: "SHREYAS BARAVKAR", role: "TREASURER", image: "/shreyas.jpg", linkedin: "https://www.linkedin.com/in/shreyas-baravkar-891447289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", github: "https://github.com/Shreyas2511", instagram: "#" },
  { id: 5, name: "NEHAL GUPTA", role: "VOLUNTEER HEAD", image: "/nehal.jpg", linkedin: "https://www.linkedin.com/in/nehal-nilesh-gupta", github: "https://github.com/Nehal072", instagram: "#" },
  { id: 6, name: "JANHAVEE SINGH", role: "EVENT HEAD", image: "/jahnvi.jpg", linkedin: "https://www.linkedin.com/in/janhavee-singh-94658b292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", github: "https://github.com/janhavee1409", instagram: "https://www.instagram.com/janv.e?igsh=MXhkaGVrMTNkaWFuZw==" },
  { id: 7, name: "NAMRATA SHINDE", role: "PROMOTION HEAD", image: "/namrata.jpg", linkedin: "linkedin.com/in/namratapshinde/", github: "#", instagram: "#" },
  { id: 8, name: "KARTHIK NAMBIAR", role: "TECHNICAL HEAD", image: "/profdum.png", linkedin: "https://www.linkedin.com/in/karthik-nambiar-739957289/", github: "https://github.com/KarthikNambiar135", instagram: "https://www.instagram.com/karrthikk._.1/" },
  { id: 9, name: "TANMAY SHINDE", role: "DESIGN HEAD", image: "/profdum.png", linkedin: "#", github: "#", instagram: "#" }, 
  { id: 10, name: "VAISHNAVI SALUKE", role: "DOCUMENTATION HEAD", image: "/profdum.png", linkedin: "#", github: "#", instagram: "#" },
];

export default function Team() {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden bg-black px-6 pt-32">
      {/* Space Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 3.5] }}>
          <ambientLight intensity={0.5} />
          <RotatingStars />
        </Canvas>
      </div>

      {/* Headline */}
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-12 text-transparent bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text drop-shadow-lg big-shoulders-stencil z-10"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Meet Our Team
      </motion.h1>

      {/* Team Cards Container */}
      <div className="relative flex flex-col gap-12 z-10 w-full max-w-6xl">
        {/* Top Row (3 Cards) */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
          {teamMembers.slice(0, 3).map((member, index) => {
            const animations = [
              { x: -100, y: 0 }, // Left
              { x: 0, y: -100 }, // Top Center
              { x: 100, y: 0 },  // Right
            ];
            return <TeamCard key={member.id} member={member} animation={animations[index] || { x: 0, y: 0 }} />;
          })}
        </div>

        {/* Second Row (4 Cards) */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
          {teamMembers.slice(3, 7).map((member, index) => {
            const animations = [
              { x: -150, y: 0 }, // Leftmost
              { x: -50, y: 0 },  // Left
              { x: 0, y: 100 },  // Center (from bottom)
              { x: 50, y: 0 },   // Right
            ];
            return <TeamCard key={member.id} member={member} animation={animations[index] || { x: 0, y: 0 }} />;
          })}
        </div>

        {/* Third Row (3 Cards) */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
          {teamMembers.slice(7).map((member, index) => {
            const animations = [
              { x: -100, y: 0 }, // Left
              { x: 0, y: -100 }, // Top Center
              { x: 100, y: 0 },  // Right
            ];
            return <TeamCard key={member.id} member={member} animation={animations[index] || { x: 0, y: 0 }} />;
          })}
        </div>
      </div>
    </section>
  );
}

const TeamCard = ({ member, animation }: { member: any; animation: any }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: animation.x, y: animation.y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative z-10 scale-95 sm:scale-100"
    >
      <ParallaxTilt
        glareEnable={true}
        glareMaxOpacity={0.45}
        glareColor="#000000FF"
        glarePosition="bottom"
        tiltMaxAngleX={15}
        tiltMaxAngleY={15}
        className="relative w-56 h-72 sm:w-64 sm:h-80 cursor-pointer"
      >
        <div
          className={`relative w-full h-full transition-transform duration-700`}
          style={{
            transformStyle: "preserve-3d",
            transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
          onClick={() => setIsFlipped(!isFlipped)}
        >
          {/* Front Side */}
          <div className="absolute w-full h-full bg-gray-900 border border-gray-700 p-6 rounded-xl shadow-lg flex flex-col items-center justify-center"
            style={{ backfaceVisibility: "hidden" }}
          >
            {/* Holographic Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 rounded-xl blur-lg z-0"></div>

            {/* Square Profile Image */}
            <img
              src={member.image}
              alt={member.name}
              className="w-36 h-36 sm:w-44 sm:h-44 rounded-lg border-4 border-blue-500 shadow-md object-cover relative z-10"
            />

            {/* Member Info */}
            <div className="text-center mt-4 relative z-10">
              <h2 className="text-lg font-bold text-white">{member.name}</h2>
              <p className="text-blue-400">{member.role}</p>

              {/* Social Media Icons */}
              <div className="flex justify-center gap-4 mt-3 relative z-20">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 bg-blue-600 rounded-full hover:bg-blue-700 transition shadow-md">
                  <FaLinkedin className="text-white w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a href={member.github} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 bg-gray-800 rounded-full hover:bg-gray-900 transition shadow-md">
                  <FaGithub className="text-white w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a href={member.instagram} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 bg-pink-500 rounded-full hover:bg-pink-600 transition shadow-md">
                  <FaInstagram className="text-white w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Back Side */}
          <div className="absolute w-full h-full bg-gray-800 border border-gray-700 p-6 rounded-xl shadow-lg flex flex-col items-center justify-center"
            style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}
          >
            <p className="text-white text-center">More details about {member.name}.</p>
          </div>
        </div>
      </ParallaxTilt>
    </motion.div>
  );
};
