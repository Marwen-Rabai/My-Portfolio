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

const NewHero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);
  const [particles, setParticles] = useState<
    Array<{ x: number[]; y: number[]; duration: number }>
  >([]);

  // Initialize particles with deterministic values for first render
  useEffect(() => {
    setIsMounted(true);

    // Generate random animations once on client
    const newParticles = MESH_POINTS.map((_, i) => ({
      x: [
        Math.random() * 50 - 25,
        Math.random() * 50 - 25,
        Math.random() * 50 - 25,
      ],
      y: [
        Math.random() * 50 - 25,
        Math.random() * 50 - 25,
        Math.random() * 50 - 25,
      ],
      duration: 20 + i * 5,
    }));

    setParticles(newParticles);
  }, []);

  useEffect(() => {
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
  }, []);

  // Smooth scroll function
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative min-h-screen w-full flex flex-col items-center justify-center pt-24 pb-12"
      id="top"
    >
      {/* Enhanced cyberpunk background effect */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-cyber-black via-black/90 to-cyber-darkblue/80 z-0"
        style={{
          backgroundImage: isMounted
            ? `radial-gradient(
            circle at ${mousePosition.x}px ${mousePosition.y}px,
            rgba(251, 37, 118, 0.15) 0%,
            transparent 35%
          )`
            : `radial-gradient(
            circle at 50% 50%,
            rgba(251, 37, 118, 0.15) 0%,
            transparent 35%
          )`,
        }}
      >
        {/* Cyberpunk grid overlay */}
        <div className="absolute inset-0 bg-grid-small-white/10 z-10 opacity-30"></div>

        {/* Digital noise texture */}
        <div
          className="absolute inset-0 z-5 opacity-5 mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        ></div>

        {/* Enhanced animated glow points */}
        <div className="absolute h-full w-full">
          {MESH_POINTS.map((point, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: i % 2 ? "200px" : "150px",
                height: i % 2 ? "200px" : "150px",
                background:
                  i % 2
                    ? `radial-gradient(circle, rgba(251, 37, 118, 0.15) 0%, transparent 70%)`
                    : `radial-gradient(circle, rgba(10, 255, 237, 0.15) 0%, transparent 70%)`,
                left: point.left,
                top: point.top,
                filter: "blur(30px)",
              }}
              animate={
                isMounted && particles.length > 0
                  ? {
                      x: particles[i]?.x || [0, 0, 0],
                      y: particles[i]?.y || [0, 0, 0],
                      scale: [0.8, 1.2, 0.9],
                    }
                  : {}
              }
              transition={{
                duration: particles[i]?.duration || 20,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>
      </div>

      {/* Horizontal scan line effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]">
          <div
            className="absolute w-full h-[1px] bg-neon-blue/30 animate-scanline"
            style={{ top: "30%", filter: "blur(0.5px)" }}
          ></div>
          <div
            className="absolute w-full h-[1px] bg-cyber-magenta/30 animate-scanline"
            style={{ top: "70%", filter: "blur(0.5px)", animationDelay: "2s" }}
          ></div>
        </div>
      </div>

      {/* Content */}
      <div className="container relative z-20 px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          {/* Small glitching cyberpunk tag */}
          <div className="mb-6 relative">
            <div
              className="absolute inset-0 bg-gradient-to-r from-cyber-magenta/20 via-transparent to-cyber-teal/20 
                        rounded-sm blur-sm animate-pulse"
            ></div>
            <CyberGlitch
              text="CYBERPUNK PORTFOLIO"
              className="text-xs tracking-widest uppercase text-white/90 border border-white/20 py-1 px-3 rounded-sm font-mono"
              color="primary"
              glitchIntensity="medium"
            />
          </div>

          {/* Main title with enhanced cyberpunk glitch effect */}
          <div className="mb-10 relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyber-magenta/30 via-transparent to-cyber-teal/30 rounded-lg blur-md"></div>
            <CyberGlitch
              text="BOWEI ZHANG"
              as="h1"
              className="text-7xl md:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyber-magenta via-white/90 to-cyber-teal leading-none tracking-tighter"
              glitchIntensity="high"
            />
          </div>

          {/* Subtitle with animated typing effect */}
          <motion.div
            className="h-8 mb-10 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <motion.p
              className="font-mono text-lg font-medium"
              animate={{ y: [0, -30, -60, -90, -120, 0] }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                times: [0, 0.2, 0.4, 0.6, 0.8, 1],
              }}
            >
              <span className="block h-8 text-cyber-teal">HACKER</span>
              <span className="block h-8 text-neon-pink">NETRUNNER</span>
              <span className="block h-8 text-cyber-yellow">
                DIGITAL ARTIST
              </span>
              <span className="block h-8 text-cyber-teal">SYSTEM BREAKER</span>
              <span className="block h-8 text-neon-pink">CODE JUNKIE</span>
            </motion.p>
          </motion.div>

          {/* Enhanced CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <motion.button
              className="px-6 py-3 bg-cyber-magenta/20 border border-cyber-magenta/40 hover:border-cyber-magenta/80 text-white backdrop-blur-sm rounded-sm font-medium transition-all flex items-center gap-2 relative group overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("projects")}
            >
              <span className="absolute inset-0 w-0 bg-gradient-to-r from-cyber-magenta/20 to-cyber-teal/20 transition-all duration-300 ease-out group-hover:w-full"></span>
              <span className="relative z-10">EXPLORE_PROJECTS</span>
              <span className="relative z-10 font-mono">→</span>
            </motion.button>

            <motion.button
              className="px-6 py-3 border border-cyber-teal/40 hover:border-cyber-teal/80 text-white rounded-sm font-medium transition-all flex items-center gap-2 relative group overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("gallery")}
            >
              <span className="absolute inset-0 w-0 bg-gradient-to-r from-cyber-teal/20 to-transparent transition-all duration-300 ease-out group-hover:w-full"></span>
              <span className="relative z-10">VIEW_GALLERY</span>
              <span className="relative z-10 font-mono">→</span>
            </motion.button>
          </div>

          {/* Enhanced scroll indicator - moved from absolute position to within flow */}
          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1.5,
              duration: 0.5,
              y: {
                duration: 0.8,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              },
            }}
          >
            <div
              className="flex flex-col items-center gap-2 cursor-pointer"
              onClick={() => scrollToSection("projects")}
            >
              <div className="text-xs uppercase tracking-wider text-white/50 font-mono">
                SCROLL_DOWN
              </div>
              <div className="w-5 h-9 rounded-full border border-cyber-teal/30 flex justify-center overflow-hidden">
                <motion.div
                  className="w-1 h-1 rounded-full bg-cyber-teal mt-2"
                  animate={{ y: [0, 15, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NewHero;
