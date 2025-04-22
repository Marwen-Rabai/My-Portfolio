"use client";

import React from "react";
import { motion } from "framer-motion";
import { projects } from "@/data";
import { EdgeCard } from "./ui/EdgeCard";
import { CyberGlitch } from "./ui/CyberGlitch";

const RecentProjects = () => {
  return (
    <section
      className="relative py-16 px-4 md:px-6 overflow-hidden"
      id="projects"
    >
      {/* Section header with cyberpunk glitch effect */}
      <div className="max-w-7xl mx-auto mb-16 text-center reveal-on-scroll">
        <div className="inline-block relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyber-teal/20 via-transparent to-cyber-magenta/20 rounded-sm blur-sm"></div>
          <CyberGlitch
            text="PROJECTS"
            className="text-sm font-mono text-white/80 uppercase tracking-widest"
            glitchIntensity="medium"
            color="primary"
          />
        </div>

        <h2 className="text-4xl md:text-5xl mt-2 font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyber-teal via-white/90 to-cyber-magenta pb-2">
          Recent Work
        </h2>

        <div className="w-32 h-1 mx-auto mt-2 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyber-teal via-white/50 to-cyber-magenta"></div>
          <div
            className="absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r from-white/80 to-transparent animate-pulse"
            style={{ animationDuration: "2s" }}
          ></div>
        </div>
      </div>

      {/* Projects grid with cyberpunk card design */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="reveal-on-scroll"
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <EdgeCard
              title={project.title}
              description={project.des}
              imageUrl={project.src}
              link={project.link}
              techIcons={project.iconLists}
              className="h-full"
            />
          </motion.div>
        ))}

        {/* "More projects coming soon" card with cyberpunk styling */}
        <motion.div
          className="relative overflow-hidden rounded-sm border border-cyber-teal/20 bg-black/30 backdrop-blur-sm flex flex-col items-center justify-center p-6 min-h-[300px] reveal-on-scroll"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true, margin: "-100px" }}
          style={{ transitionDelay: "300ms" }}
        >
          {/* Cyberpunk background elements */}
          <div className="absolute inset-0 bg-grid-small-white/5"></div>
          <div className="absolute inset-0 overflow-hidden">
            <div
              className="absolute -inset-[2px] z-0 opacity-50"
              style={{
                background: `repeating-linear-gradient(
                  90deg,
                  transparent,
                  transparent 15px,
                  rgba(10, 255, 237, 0.1) 15px,
                  rgba(10, 255, 237, 0.1) 16px
                )`,
              }}
            ></div>

            {/* Corner accents */}
            <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden pointer-events-none">
              <div className="absolute top-0 right-0 h-[1px] w-16 bg-gradient-to-l from-cyber-teal/50 to-transparent"></div>
              <div className="absolute top-0 right-0 w-[1px] h-16 bg-gradient-to-b from-cyber-teal/50 to-transparent"></div>
            </div>
            <div className="absolute bottom-0 left-0 w-16 h-16 overflow-hidden pointer-events-none">
              <div className="absolute bottom-0 left-0 h-[1px] w-16 bg-gradient-to-r from-cyber-magenta/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-[1px] h-16 bg-gradient-to-t from-cyber-magenta/50 to-transparent"></div>
            </div>
          </div>

          <div className="text-center relative z-10">
            <div className="mb-4 mx-auto w-16 h-16 rounded-full flex items-center justify-center border border-cyber-teal/20 bg-black/40 relative overflow-hidden">
              {/* Glowing effect */}
              <div className="absolute inset-0 bg-cyber-teal/5 animate-pulse"></div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 text-cyber-teal"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </div>

            <CyberGlitch
              text="MORE PROJECTS"
              className="text-xl font-bold text-white mb-2"
              glitchIntensity="low"
            />
            <p className="text-cyber-teal/60 font-mono text-sm">LOADING...</p>
          </div>

          {/* Cyberpunk decorative elements */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-cyber-magenta/10 blur-2xl"></div>
          <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-cyber-teal/10 blur-2xl"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default RecentProjects;
