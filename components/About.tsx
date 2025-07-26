"use client";

import React from "react";
import { motion } from "framer-motion";
import { aboutMe } from "@/data";
import { CyberGlitch } from "./ui/CyberGlitch";

const About = () => {
  return (
    <section
      className="relative py-16 px-4 md:px-6 overflow-hidden"
      id="about"
    >
      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-cyber-black/90 via-black/80 to-cyber-black/90"></div>
        <div className="absolute inset-0 bg-grid-small-white/5"></div>
        <div className="parallax-bg" data-speed="0.1">
          {/* Cyberpunk accent elements */}
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-neon-blue/5 blur-[150px] rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-neon-pink/5 blur-[150px] rounded-full"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 reveal-on-scroll">
          <div className="inline-block relative mb-4">
            <div className="absolute inset-0 bg-gradient-to-r from-cyber-teal/20 via-transparent to-cyber-magenta/20 rounded-sm blur-sm"></div>
            <CyberGlitch
              text="ABOUT_ME"
              className="text-sm font-mono text-white/80 uppercase tracking-widest"
              glitchIntensity="medium"
              color="primary"
            />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyber-teal via-white/90 to-cyber-magenta pb-2">
            Professional Profile
          </h2>

          <div className="w-32 h-1 mx-auto mt-2 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyber-teal via-white/50 to-cyber-magenta"></div>
            <div
              className="absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r from-white/80 to-transparent animate-pulse"
              style={{ animationDuration: "2s" }}
            ></div>
          </div>
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Main description */}
          <motion.div
            className="reveal-on-scroll"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {aboutMe.name}
                </h3>
                <p className="text-cyber-teal font-mono text-lg mb-6">
                  {aboutMe.title}
                </p>
              </div>

              <div className="prose prose-invert max-w-none">
                <p className="text-white/80 leading-relaxed text-lg">
                  {aboutMe.description}
                </p>
              </div>

              {/* Key highlights */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-cyber-magenta/10 border border-cyber-magenta/30 p-4 rounded-sm">
                  <div className="text-cyber-magenta font-mono text-sm mb-1">
                    EXPERIENCE
                  </div>
                  <div className="text-white font-bold">{aboutMe.experience}</div>
                </div>
                <div className="bg-cyber-teal/10 border border-cyber-teal/30 p-4 rounded-sm">
                  <div className="text-cyber-teal font-mono text-sm mb-1">
                    LOCATION
                  </div>
                  <div className="text-white font-bold">{aboutMe.location}</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right column - Skills and details */}
          <motion.div
            className="reveal-on-scroll"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              {/* Languages */}
              <div className="bg-black/20 border border-white/10 p-6 rounded-sm">
                <h4 className="text-cyber-teal font-mono text-sm mb-4">
                  LANGUAGES_SPOKEN
                </h4>
                <div className="flex flex-wrap gap-2">
                  {aboutMe.languages.map((language, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-cyber-teal/20 border border-cyber-teal/40 text-white text-sm rounded-sm"
                    >
                      {language}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hobbies */}
              <div className="bg-black/20 border border-white/10 p-6 rounded-sm">
                <h4 className="text-cyber-magenta font-mono text-sm mb-4">
                  PERSONAL_INTERESTS
                </h4>
                <div className="flex flex-wrap gap-2">
                  {aboutMe.hobbies.map((hobby, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-cyber-magenta/20 border border-cyber-magenta/40 text-white text-sm rounded-sm"
                    >
                      {hobby}
                    </span>
                  ))}
                </div>
              </div>

              {/* Professional highlights */}
              <div className="bg-black/20 border border-white/10 p-6 rounded-sm">
                <h4 className="text-white font-mono text-sm mb-4">
                  PROFESSIONAL_HIGHLIGHTS
                </h4>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-start gap-2">
                    <span className="text-cyber-teal mt-1">▸</span>
                    <span>General Manager at Oasis of Artis in Tunis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyber-teal mt-1">▸</span>
                    <span>Administration Secretary at Beta Cod in El Oued</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyber-teal mt-1">▸</span>
                    <span>Founder & CEO of Uber Sand Food</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyber-teal mt-1">▸</span>
                    <span>Results-driven approach to digital solutions</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 