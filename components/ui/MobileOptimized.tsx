"use client";

import React, { useEffect, useState, useCallback } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface MobileOptimizedProps {
  children: React.ReactNode;
}

export const MobileOptimized: React.FC<MobileOptimizedProps> = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Optimized mobile detection
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768 || 
                   /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      setIsMobile(mobile);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Optimized scroll handling for mobile
  const handleScroll = useCallback(() => {
    if (!isMobile) return;
    
    setIsScrolling(true);
    
    // Use passive listeners and throttle for better performance
    const scrollElements = document.querySelectorAll<HTMLElement>(".mobile-reveal");
    const windowHeight = window.innerHeight;
    
    scrollElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = windowHeight * 0.8; // 80% of viewport
      
      if (elementTop < elementVisible) {
        element.classList.add("mobile-active");
      }
    });

    // Clear scrolling state after a delay
    setTimeout(() => setIsScrolling(false), 150);
  }, [isMobile]);

  useEffect(() => {
    if (!isMobile) return;

    // Use passive listener for better performance on mobile
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll, isMobile]);

  // Mobile-specific animation variants
  const mobileVariants = {
    hidden: { 
      opacity: 0, 
      y: shouldReduceMotion ? 0 : 30,
      scale: shouldReduceMotion ? 1 : 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: shouldReduceMotion ? 0.1 : 0.6,
        ease: "easeOut"
      }
    }
  };

  const desktopVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      className={`mobile-optimized ${isMobile ? 'is-mobile' : 'is-desktop'}`}
      variants={isMobile ? mobileVariants : desktopVariants}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.div>
  );
};

// Hook for mobile-specific optimizations
export const useMobileOptimization = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [orientation, setOrientation] = useState<"portrait" | "landscape">("portrait");

  useEffect(() => {
    const checkDevice = () => {
      const mobile = window.innerWidth <= 768;
      const isPortrait = window.innerHeight > window.innerWidth;
      
      setIsMobile(mobile);
      setOrientation(isPortrait ? "portrait" : "landscape");
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);
    window.addEventListener("orientationchange", checkDevice);

    return () => {
      window.removeEventListener("resize", checkDevice);
      window.removeEventListener("orientationchange", checkDevice);
    };
  }, []);

  return { isMobile, orientation };
}; 