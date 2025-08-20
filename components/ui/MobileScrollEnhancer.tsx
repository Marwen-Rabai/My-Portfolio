'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const MobileScrollEnhancer: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);
  
  const { scrollYProgress } = useScroll();
  const scrollVelocity = useRef(0);
  const lastScrollY = useRef(0);
  
  // Spring animation for smooth progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  // Transform for parallax effects
  const parallaxY = useTransform(smoothProgress, [0, 1], [0, -50]);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  useEffect(() => {
    if (!isMobile) return;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      scrollVelocity.current = Math.abs(currentScrollY - lastScrollY.current);
      lastScrollY.current = currentScrollY;
      
      setIsScrolling(true);
      
      // Haptic feedback on fast scroll
      if (scrollVelocity.current > 50 && 'vibrate' in navigator) {
        navigator.vibrate(5);
      }
      
      // Clear existing timeout
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      
      // Set new timeout
      scrollTimeout.current = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };
    
    // Touch event handlers for momentum scrolling
    let touchStartY = 0;
    let touchEndY = 0;
    
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };
    
    const handleTouchEnd = (e: TouchEvent) => {
      touchEndY = e.changedTouches[0].clientY;
      const swipeDistance = touchStartY - touchEndY;
      
      // Haptic feedback for swipe gestures
      if (Math.abs(swipeDistance) > 100 && 'vibrate' in navigator) {
        navigator.vibrate([10, 5, 10]);
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, [isMobile]);
  
  if (!isMobile) return null;
  
  return (
    <>
      {/* Scroll progress indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 z-[100] bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500"
        style={{
          scaleX: smoothProgress,
          transformOrigin: 'left',
          opacity: isScrolling ? 1 : 0.3,
        }}
        transition={{ opacity: { duration: 0.3 } }}
      />
      
      {/* Pull-to-refresh indicator */}
      <motion.div
        className="fixed top-4 left-1/2 -translate-x-1/2 z-[99]"
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: scrollYProgress.get() < 0 ? 0 : -100,
          opacity: scrollYProgress.get() < 0 ? 1 : 0,
        }}
      >
        <motion.div
          animate={{ rotate: isScrolling ? 360 : 0 }}
          transition={{ duration: 1, repeat: isScrolling ? Infinity : 0 }}
          className="w-8 h-8 rounded-full border-2 border-white/50 border-t-white"
        />
      </motion.div>
      
      {/* Scroll velocity indicator */}
      {isScrolling && (
        <motion.div
          className="fixed bottom-20 right-4 z-[99]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
        >
          <div className="bg-black/50 dark:bg-white/10 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-white dark:text-white/80">
            {scrollVelocity.current > 100 ? '🚀' : scrollVelocity.current > 50 ? '⚡' : '👆'} 
            {' '}Scrolling
          </div>
        </motion.div>
      )}
    </>
  );
};

export default MobileScrollEnhancer;
