"use client";

import React, { useEffect, useState, useCallback } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface MobileOptimizedProps {
  children: React.ReactNode;
}

export const MobileOptimized: React.FC<MobileOptimizedProps> = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const mobileKeywords = ['mobile', 'android', 'iphone', 'ipad', 'tablet'];
      const isMobileDevice = mobileKeywords.some(keyword => userAgent.includes(keyword));
      const isSmallScreen = window.innerWidth < 768;
      setIsMobile(isMobileDevice || isSmallScreen);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Optimized scroll handling for mobile
  const handleScroll = useCallback(() => {
    if (isMobile) {
      // Light scroll handling for mobile
      const elements = document.querySelectorAll('.mobile-reveal');
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8;
        
        if (isVisible) {
          element.classList.add('mobile-visible');
        }
      });
    }
  }, [isMobile]);

  // Add optimized scroll listener
  useEffect(() => {
    if (isMobile) {
      const throttledScroll = () => {
        requestAnimationFrame(handleScroll);
      };
      
      window.addEventListener('scroll', throttledScroll, { passive: true });
      return () => window.removeEventListener('scroll', throttledScroll);
    }
  }, [handleScroll, isMobile]);

  // Mobile-optimized animation variants
  const mobileVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  const desktopVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      className={`mobile-optimized ${isMobile ? 'is-mobile' : 'is-desktop'}`}
      variants={isMobile || shouldReduceMotion ? mobileVariants : desktopVariants}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.div>
  );
};

// Custom hook for mobile optimization
export const useMobileOptimization = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const mobileKeywords = ['mobile', 'android', 'iphone', 'ipad', 'tablet'];
      const isMobileDevice = mobileKeywords.some(keyword => userAgent.includes(keyword));
      const isSmallScreen = window.innerWidth < 768;
      setIsMobile(isMobileDevice || isSmallScreen);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return { isMobile };
}; 