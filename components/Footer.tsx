"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CyberGlitch } from "./ui/CyberGlitch";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 md:py-16 overflow-hidden bg-black/60 backdrop-blur-md border-t border-cyber-teal/20">
      {/* Digital noise texture */}
      <div
        className="absolute inset-0 z-0 opacity-5 mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      ></div>

      {/* Glowing elements */}
      <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-cyber-teal/5 blur-[100px] rounded-full"></div>
      <div className="absolute top-0 left-0 w-1/4 h-1/4 bg-cyber-magenta/5 blur-[100px] rounded-full"></div>

      {/* Angled lines */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyber-teal/30 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center justify-between space-y-6">
            {/* Logo */}
            <div className="flex flex-col items-center space-y-2">
              <CyberGlitch
                text="MARWEN_RABAI"
                className="text-lg md:text-xl font-bold text-white tracking-wide"
                glitchIntensity="low"
              />
              <div className="h-[1px] w-24 bg-gradient-to-r from-cyber-teal/70 to-cyber-magenta/70"></div>
            </div>

            {/* Quick links */}
            <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm">
              <motion.div whileHover={{ y: -2 }} className="group">
                <Link
                  href="#top"
                  className="font-mono text-white/70 hover:text-cyber-teal transition-colors"
                >
                  <span className="text-cyber-teal/80">&gt;</span> HOME
                </Link>
              </motion.div>
              <motion.div whileHover={{ y: -2 }} className="group">
                <Link
                  href="#projects"
                  className="font-mono text-white/70 hover:text-cyber-teal transition-colors"
                >
                  <span className="text-cyber-teal/80">&gt;</span> PROJECTS
                </Link>
              </motion.div>
              <motion.div whileHover={{ y: -2 }} className="group">
                <Link
                  href="#about"
                  className="font-mono text-white/70 hover:text-cyber-teal transition-colors"
                >
                  <span className="text-cyber-teal/80">&gt;</span> ABOUT
                </Link>
              </motion.div>
              <motion.div whileHover={{ y: -2 }} className="group">
                <Link
                  href="#skills"
                  className="font-mono text-white/70 hover:text-cyber-teal transition-colors"
                >
                  <span className="text-cyber-teal/80">&gt;</span> SKILLS
                </Link>
              </motion.div>
              <motion.div whileHover={{ y: -2 }} className="group">
                <Link
                  href="#contact"
                  className="font-mono text-white/70 hover:text-cyber-teal transition-colors"
                >
                  <span className="text-cyber-teal/80">&gt;</span> CONTACT
                </Link>
              </motion.div>
            </nav>

            {/* Copyright */}
            <div className="text-sm text-cyber-teal/60 text-center font-mono">
              <div>
                <span className="text-cyber-teal/80">&#47;&#47;</span> ©{" "}
                2009 MARWEN_RABAI{" "}
                <span className="text-cyber-teal/80">|</span>{" "}
                ALL_RIGHTS_RESERVED
              </div>
              <div className="mt-1 text-xs">
                <span className="text-cyber-magenta/70">&#60;&#47;&#62;</span>{" "}
                CRAFTING_DIGITAL_EXPERIENCES_WITH_PRECISION
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
