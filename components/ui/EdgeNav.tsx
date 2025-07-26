"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlitchEffect } from "./GlitchEffect";

interface NavItem {
  name: string;
  link: string;
  icon?: React.ReactNode;
}

interface EdgeNavProps {
  navItems: NavItem[];
}

export const EdgeNav = ({ navItems }: EdgeNavProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("");

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  // Smooth scroll function
  const scrollToSection = (id: string) => {
    // Close the menu
    setIsOpen(false);

    // Extract the ID from href like "#projects"
    const sectionId = id.replace("#", "");
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveItem(id);
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-40">
      {/* Background blur effect */}
      <div className="absolute inset-0 backdrop-blur-md bg-black/20 border-b border-white/10"></div>

      {/* Desktop nav */}
      <div className="container mx-auto flex items-center justify-between py-3 px-4 relative">
        {/* Logo */}
        <GlitchEffect intensity="low" className="text-white">
          <span className="inline-flex items-center">
            <img
              src="/MY_Picture.webp"
              alt="Marwen Rabai Logo - The Art of Being Seen"
              className="w-10 h-10 rounded-full border-2 border-cyber-teal shadow-lg object-cover bg-black/60 hover:scale-105 transition-transform duration-300"
              style={{ boxShadow: '0 4px 24px 0 rgba(0,255,255,0.15)' }}
            />
          </span>
        </GlitchEffect>

        {/* Desktop nav items */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <motion.div
              key={item.name}
              className="relative"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              <button
                onClick={() => scrollToSection(item.link)}
                className={`text-sm text-white/70 hover:text-white transition-colors ${
                  activeItem === item.link ? "text-white" : ""
                }`}
              >
                {item.name}
                {activeItem === item.link && (
                  <motion.div
                    layoutId="active-indicator"
                    className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-white/0 via-neon-blue/70 to-white/0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Mobile menu button */}
        <motion.button
          className="md:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            className="w-6 h-[1px] bg-white rounded-full"
            animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 3 : 0 }}
          />
          <motion.div
            className="w-6 h-[1px] bg-white rounded-full"
            animate={{ opacity: isOpen ? 0 : 1 }}
          />
          <motion.div
            className="w-6 h-[1px] bg-white rounded-full"
            animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -3 : 0 }}
          />
        </motion.button>
      </div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-30 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col items-center space-y-6">
              {navItems.map((item) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button
                    onClick={() => scrollToSection(item.link)}
                    className="text-xl font-medium text-white/80 hover:text-white transition-colors relative group"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-neon-blue/70 group-hover:w-full transition-all duration-300" />
                  </button>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
