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
    <div className="relative min-h-screen w-full overflow-hidden bg-black pt-20 md:pt-24">
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
              className="text-xs md:text-sm font-mono text-cyber-teal tracking-widest border border-cyber-teal/20 px-3 py-1 rounded-sm"
              glitchIntensity="low"
            />
          </motion.div>

          {/* Main title with enhanced cyberpunk glitch effect */}
          <div className="mb-10 relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyber-magenta/30 via-transparent to-cyber-teal/30 rounded-lg blur-md"></div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-6xl md:text-8xl lg:text-9xl font-bold leading-none tracking-tighter relative"
            >
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.6 }}
                  className="block mb-2"
                >
                  <CyberGlitch
                    text="MARWEN"
                    className="text-6xl md:text-8xl lg:text-9xl font-bold text-white"
                    glitchIntensity="medium"
                    as="span"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="block"
                >
                  <CyberGlitch
                    text="RABAI"
                    className="text-6xl md:text-8xl lg:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyber-teal via-white to-cyber-magenta"
                    glitchIntensity="high"
                    as="span"
                  />
                </motion.div>
              </div>
            </motion.h1>
            
            {/* Glowing underline */}
            <motion.div 
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-cyber-teal to-transparent blur-sm opacity-60"
              initial={{ width: 0 }}
              animate={{ width: "75%" }}
              transition={{ duration: 1.5, delay: 1.2 }}
            />
          </div>

          {/* Professional taglines */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mb-8 space-y-2"
          >
            <div className="flex flex-col items-center space-y-1">
              <motion.span 
                className="text-cyber-teal text-lg md:text-2xl font-semibold font-mono tracking-wide uppercase drop-shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                The Portfolio of a Passionate Professional
              </motion.span>
              <motion.span 
                className="text-cyber-magenta text-base md:text-lg font-mono italic opacity-80"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 0.8, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                &ldquo;The Art of Being Seen&rdquo;
              </motion.span>
            </div>
          </motion.div>

          {/* Subtitle with enhanced typing effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.6 }}
            className="mb-12"
          >
            <div className="text-xl md:text-3xl font-mono text-white/90 mb-4">
              <motion.span 
                className="text-cyber-teal"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.8 }}
              >
                DIGITAL MARKETING SPECIALIST
              </motion.span>
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="text-cyber-teal ml-1"
              >
                |
              </motion.span>
            </div>

            <motion.p 
              className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.0 }}
            >
              Crafting premium digital experiences and unforgettable events with{" "}
              <span className="text-cyber-teal font-semibold">14+ years</span> of expertise across{" "}
              <span className="text-cyber-magenta font-semibold">North Africa</span>
            </motion.p>
          </motion.div>

          {/* Enhanced CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.button
              onClick={() => scrollToSection("skills")}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 0 30px rgba(0, 255, 255, 0.5)",
                backgroundColor: "rgba(0, 255, 255, 0.1)"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-cyber-teal/20 to-cyber-magenta/20 border border-cyber-teal/50 hover:border-cyber-teal text-white rounded-sm font-mono text-sm md:text-base tracking-wider transition-all duration-300 backdrop-blur-sm relative group overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyber-teal/20 to-cyber-magenta/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
              <span className="relative z-10">VIEW_SKILLS</span>
            </motion.button>

            <motion.button
              onClick={() => scrollToSection("contact")}
              whileHover={{ 
                scale: 1.05,
                borderColor: "rgba(255,255,255,0.8)",
                backgroundColor: "rgba(255,255,255,0.1)"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border border-white/30 hover:border-white/60 text-white hover:bg-white/10 rounded-sm font-mono text-sm md:text-base tracking-wider transition-all duration-300 backdrop-blur-sm"
            >
              GET_IN_TOUCH
            </motion.button>
          </motion.div>

          {/* Enhanced scroll indicator - positioned with proper spacing */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.4 }}
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center space-y-2 text-white/60 cursor-pointer"
              onClick={() => scrollToSection("about")}
            >
              <span className="text-xs font-mono tracking-wider">SCROLL_DOWN</span>
              <div className="w-[1px] h-8 bg-gradient-to-b from-cyber-teal to-transparent"></div>
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 h-1 bg-cyber-teal rounded-full"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced ambient lighting effects */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-0 right-0 w-1/3 h-1/3 bg-cyber-teal/5 blur-[100px] rounded-full"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-cyber-magenta/5 blur-[100px] rounded-full"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.05, 0.1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
};

export default NewHero;
