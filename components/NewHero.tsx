"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CyberGlitch } from "./ui/CyberGlitch";

// Pre-calculated positions for server rendering consistency
const MESH_POINTS = [
  { left: "20%", top: "30%" },
  { left: "70%", top: "15%" },
  { left: "15%", top: "70%" },
  { left: "65%", top: "60%" },
  { left: "40%", top: "25%" },
];

// Pre-calculated particle animations to avoid hydration mismatch
const PARTICLE_ANIMATIONS = [
  { x: [-20, 15, -10], y: [-15, 20, -25], duration: 20 },
  { x: [25, -15, 30], y: [10, -30, 15], duration: 25 },
  { x: [-10, 25, -20], y: [-25, 10, -15], duration: 30 },
  { x: [15, -20, 25], y: [20, -15, 30], duration: 35 },
  { x: [-25, 10, -15], y: [-10, 25, -20], duration: 40 },
];

const NewHero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);

  // Initialize on client side only
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const handleMouseMove = (e: MouseEvent) => {
      // Throttle mouse movement updates
      const throttle = () => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      };

      window.requestAnimationFrame(throttle);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isMounted]);

  // Smooth scroll function
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Enhanced cyberpunk grid background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-small-white/[0.02] bg-[size:50px_50px]" />
        <div className="absolute inset-0 bg-gradient-to-br from-cyber-black via-black to-cyber-darkblue" />
      </div>

      {/* Floating mesh particles - only render on client */}
      {isMounted && (
        <div className="absolute inset-0 z-10">
          {MESH_POINTS.map((point, index) => (
            <motion.div
              key={index}
              className="absolute w-2 h-2 bg-cyber-teal/30 rounded-full blur-sm"
              style={{
                left: point.left,
                top: point.top,
              }}
              animate={{
                x: PARTICLE_ANIMATIONS[index].x,
                y: PARTICLE_ANIMATIONS[index].y,
              }}
              transition={{
                duration: PARTICLE_ANIMATIONS[index].duration,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      )}

      {/* Interactive mouse follower - only on client */}
      {isMounted && (
        <motion.div
          className="absolute w-96 h-96 rounded-full pointer-events-none z-10"
          style={{
            background:
              "radial-gradient(circle, rgba(0,255,255,0.1) 0%, rgba(255,0,128,0.05) 50%, transparent 70%)",
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      )}

      {/* Main content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4 py-16">
        <div className="max-w-6xl mx-auto text-center">
          {/* Small tag with glitch effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <CyberGlitch
              text="DIGITAL_ARCHITECT_OF_SUCCESS"
              className="text-xs md:text-sm font-mono text-cyber-teal tracking-widest"
              glitchIntensity="low"
            />
          </motion.div>

          {/* Main title with enhanced effects */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-4xl md:text-7xl lg:text-8xl font-bold mb-8 relative"
          >
            <div className="relative">
              <span className="text-white">MARWEN</span>
              <br />
              <CyberGlitch
                text="RABAI"
                className="text-4xl md:text-7xl lg:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyber-teal via-white to-cyber-magenta"
                glitchIntensity="medium"
              />
            </div>

            {/* Glowing underline */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-cyber-teal to-transparent blur-sm opacity-60"></div>
          </motion.h1>

          {/* Professional taglines */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-8 space-y-2"
          >
            <div className="flex flex-col items-center space-y-1">
              <span className="text-cyber-teal text-lg md:text-2xl font-semibold font-mono tracking-wide uppercase drop-shadow-lg">
                The Portfolio of a Passionate Professional
              </span>
              <span className="text-cyber-magenta text-base md:text-lg font-mono italic opacity-80">
                &ldquo;The Art of Being Seen&rdquo;
              </span>
            </div>
          </motion.div>

          {/* Subtitle with animated typing effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mb-12"
          >
            <div className="text-xl md:text-3xl font-mono text-white/90 mb-4">
              <span className="text-cyber-teal">
                DIGITAL MARKETING SPECIALIST
              </span>
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="text-cyber-teal ml-1"
              >
                |
              </motion.span>
            </div>

            <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Crafting premium digital experiences and unforgettable events with{" "}
              <span className="text-cyber-teal font-semibold">14+ years</span> of expertise across{" "}
              <span className="text-cyber-magenta font-semibold">North Africa</span>
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              onClick={() => scrollToSection("skills")}
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 255, 255, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-cyber-teal/20 to-cyber-magenta/20 border border-cyber-teal/50 hover:border-cyber-teal text-white rounded-sm font-mono text-sm md:text-base tracking-wider transition-all duration-300 backdrop-blur-sm"
            >
              <span className="relative z-10">VIEW_SKILLS</span>
            </motion.button>

            <motion.button
              onClick={() => scrollToSection("contact")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border border-white/30 hover:border-white/60 text-white hover:bg-white/10 rounded-sm font-mono text-sm md:text-base tracking-wider transition-all duration-300 backdrop-blur-sm"
            >
              GET_IN_TOUCH
            </motion.button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center space-y-2 text-white/60"
            >
              <span className="text-xs font-mono tracking-wider">SCROLL</span>
              <div className="w-[1px] h-8 bg-gradient-to-b from-cyber-teal to-transparent"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Ambient lighting effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-cyber-teal/5 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-cyber-magenta/5 blur-[100px] rounded-full"></div>
      </div>
    </div>
  );
};

export default NewHero;
