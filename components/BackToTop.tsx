"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 group"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.3 }}
        >
          {/* Background glow effect */}
          <div className="absolute inset-0 bg-cyber-teal/20 blur-md rounded-full"></div>
          
          {/* Main button */}
          <div className="relative bg-black/80 backdrop-blur-md border border-cyber-teal/40 hover:border-cyber-teal/80 rounded-full p-3 transition-all duration-300 group-hover:bg-black/90">
            {/* Corner accents */}
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-cyber-teal/60"></div>
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-cyber-teal/60"></div>
            
            {/* Icon */}
            <div className="relative w-6 h-6 flex items-center justify-center">
              <motion.div
                className="w-3 h-3 border-t-2 border-l-2 border-cyber-teal transform rotate-45"
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              ></motion.div>
            </div>
            
            {/* Hover effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyber-teal/0 to-cyber-teal/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
          </div>
          
          {/* Tooltip */}
          <motion.div
            className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-black/90 border border-cyber-teal/40 rounded-sm text-xs text-white font-mono whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ opacity: 0, y: 10 }}
            whileHover={{ opacity: 1, y: 0 }}
          >
            <span className="text-cyber-teal">BACK_TO_TOP</span>
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90"></div>
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop; 