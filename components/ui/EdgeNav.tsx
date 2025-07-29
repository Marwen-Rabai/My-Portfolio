"use client";

import React, { useState } from "react";
import { CyberGlitch } from "./CyberGlitch";
import { FloatingNav } from "./FloatingNav";
import Image from "next/image";

export function EdgeNav({ navItems }: { navItems: Array<{ name: string; link: string; icon?: React.JSX.Element }> }) {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden lg:flex fixed top-4 left-1/2 transform -translate-x-1/2 z-50 group">
        <div className="flex items-center justify-between bg-black/80 backdrop-blur-md border border-cyber-teal/30 rounded-sm px-6 py-3 min-w-[800px]">
          {/* Premium logo with profile picture */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Image
                src="/MY_Picture.webp"
                alt="Marwen Rabai"
                width={40}
                height={40}
                className="w-10 h-10 rounded-full border-2 border-cyber-teal/60 shadow-lg object-cover hover:border-cyber-teal transition-all duration-300 hover:shadow-cyber-teal/20 hover:shadow-lg"
                priority
              />
              <div className="absolute inset-0 rounded-full bg-cyber-teal/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </div>
            <CyberGlitch
              text="MARWEN_RABAI"
              className="font-bold text-lg text-white tracking-tight"
              glitchIntensity="low"
            />
          </div>

          {/* Navigation items */}
          <div className="flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="font-mono text-sm text-white/70 hover:text-cyber-teal transition-colors tracking-wider relative group"
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
                onClick={(e) => {
                  e.preventDefault();
                  const sectionId = item.link.replace('#', '');
                  scrollToSection(sectionId);
                }}
              >
                <span className="relative z-10">{item.name}</span>
                
                {/* Hover effect */}
                <div 
                  className={`absolute bottom-0 left-0 h-[1px] bg-cyber-teal transition-all duration-300 ${
                    hoverIndex === index ? 'w-full' : 'w-0'
                  }`} 
                />
                
                {/* Glow effect */}
                {hoverIndex === index && (
                  <div className="absolute inset-0 bg-cyber-teal/5 blur-sm rounded-sm -z-10" />
                )}
              </a>
            ))}
          </div>

          {/* Action button */}
          <div className="flex items-center">
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-4 py-2 bg-cyber-teal/20 border border-cyber-teal/40 hover:border-cyber-teal/80 text-white rounded-sm font-mono text-sm transition-all hover:bg-cyber-teal/30"
            >
              CONNECT
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-sm px-4">
        <div className="flex items-center justify-between bg-black/90 backdrop-blur-md border border-cyber-teal/30 rounded-sm px-4 py-3 w-full">
          {/* Mobile logo */}
          <div className="flex items-center space-x-2">
            <Image
              src="/MY_Picture.webp"
              alt="Marwen Rabai"
              width={32}
              height={32}
              className="w-8 h-8 rounded-full border-2 border-cyber-teal/60 shadow-lg object-cover"
              priority
            />
            <CyberGlitch
              text="MARWEN"
              className="font-bold text-sm text-white tracking-tight"
              glitchIntensity="low"
            />
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="px-3 py-1 bg-cyber-teal/20 border border-cyber-teal/40 text-white rounded-sm font-mono text-xs transition-all hover:bg-cyber-teal/30"
          >
            {isMobileMenuOpen ? 'CLOSE' : 'MENU'}
          </button>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="mt-2 bg-black/95 backdrop-blur-md border border-cyber-teal/30 rounded-sm p-4 w-full">
            <div className="space-y-3">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    const sectionId = item.link.replace('#', '');
                    scrollToSection(sectionId);
                  }}
                  className="block w-full text-left font-mono text-sm text-white/70 hover:text-cyber-teal transition-colors tracking-wider py-2 px-3 rounded-sm hover:bg-cyber-teal/10"
                >
                  {item.name}
                </button>
              ))}
              <div className="border-t border-cyber-teal/20 pt-3 mt-3">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full px-4 py-2 bg-cyber-teal/20 border border-cyber-teal/40 hover:border-cyber-teal/80 text-white rounded-sm font-mono text-sm transition-all hover:bg-cyber-teal/30"
                >
                  CONNECT
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
