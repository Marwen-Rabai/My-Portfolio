"use client";

import React from "react";
import { motion } from "framer-motion";
import { skills } from "@/data";
import { CyberGlitch } from "./ui/CyberGlitch";

const Skills = () => {
  return (
    <section
      className="relative py-16 px-4 md:px-6 overflow-hidden"
      id="skills"
    >
      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-cyber-black/90 via-black/80 to-cyber-black/90"></div>
        <div className="absolute inset-0 bg-grid-small-white/5"></div>
        <div className="parallax-bg" data-speed="0.1">
          {/* Cyberpunk accent elements */}
          <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-neon-pink/5 blur-[150px] rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-neon-blue/5 blur-[150px] rounded-full"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 reveal-on-scroll">
          <div className="inline-block relative mb-4">
            <div className="absolute inset-0 bg-gradient-to-r from-cyber-teal/20 via-transparent to-cyber-magenta/20 rounded-sm blur-sm"></div>
            <CyberGlitch
              text="SKILLS_DATABASE"
              className="text-sm font-mono text-white/80 uppercase tracking-widest"
              glitchIntensity="medium"
              color="primary"
            />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyber-teal via-white/90 to-cyber-magenta pb-2">
            Professional Skills
          </h2>

          <div className="w-32 h-1 mx-auto mt-2 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyber-teal via-white/50 to-cyber-magenta"></div>
            <div
              className="absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r from-white/80 to-transparent animate-pulse"
              style={{ animationDuration: "2s" }}
            ></div>
          </div>
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillCategory, index) => (
            <motion.div
              key={skillCategory.category}
              className="reveal-on-scroll"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-black/20 border border-white/10 p-6 rounded-sm h-full hover:border-cyber-teal/40 transition-all duration-300 group">
                {/* Category header */}
                <div className="mb-4">
                  <h3 className="text-cyber-teal font-mono text-sm mb-2">
                    {skillCategory.category.toUpperCase()}
                  </h3>
                  <div className="h-[1px] w-full bg-gradient-to-r from-cyber-teal/50 to-transparent"></div>
                </div>

                {/* Skills list */}
                <div className="space-y-2">
                  {skillCategory.items.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-cyber-magenta text-xs">▸</span>
                      <span className="text-sm">{skill}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyber-teal/5 to-cyber-magenta/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-sm pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional info */}
        <motion.div
          className="mt-16 text-center reveal-on-scroll"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-black/20 border border-white/10 p-8 rounded-sm max-w-4xl mx-auto">
            <h3 className="text-cyber-teal font-mono text-sm mb-4">
              EXPERTISE_SUMMARY
            </h3>
            <p className="text-white/80 leading-relaxed">
              With over 14 years of experience in digital marketing and event organization, 
              I specialize in creating transformative solutions that drive results. My expertise 
              spans from advanced SEO techniques to comprehensive event management, ensuring 
              client success through innovative, user-centric strategies.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 