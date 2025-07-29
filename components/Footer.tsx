"use client";

import React from "react";
import { CyberGlitch } from "./ui/CyberGlitch";

const Footer = () => {
  const navigationLinks = [
    { name: "HOME", href: "#home" },
    { name: "PROJECTS", href: "#projects" },
    { name: "ABOUT", href: "#about" },
    { name: "SKILLS", href: "#skills" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <div className="w-full bg-cyber-black border-t border-cyber-teal/20 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-small-white/[0.02] bg-[size:50px_50px]" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8">
        {/* Navigation */}
        <div className="flex flex-wrap justify-center gap-6 mb-6">
          {navigationLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-cyber-teal/70 hover:text-cyber-teal transition-colors duration-300 font-mono text-sm tracking-wider"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-cyber-teal/30 to-transparent mb-6" />

        {/* Footer text */}
        <div className="text-center space-y-2">
          <CyberGlitch
            text="CRAFTING_DIGITAL_EXPERIENCES_WITH_PRECISION"
            className="text-xs text-cyber-teal/60 font-mono tracking-wider"
            glitchIntensity="low"
          />
          <p className="text-xs text-white/40 font-mono">
            © 2009 MARWEN RABAI. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
