'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import { createNoise3D } from 'simplex-noise';

interface CursorState {
  isHovering: boolean;
  isScrolling: boolean;
  isPressed: boolean;
  velocity: number;
}

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLCanvasElement>(null);
  const [mounted, setMounted] = useState(false);
  const [cursorState, setCursorState] = useState<CursorState>({
    isHovering: false,
    isScrolling: false,
    isPressed: false,
    velocity: 0
  });
  
  const { theme } = useTheme();
  const noise3D = createNoise3D();
  
  // Motion values for smooth cursor movement
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Spring animation for elastic movement
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);
  
  // Touch and scroll state
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const lastScrollY = useRef(0);
  const scrollVelocity = useRef(0);
  const animationFrame = useRef<number | null>(null);
  
  // Trail effect variables
  const trailPoints = useRef<Array<{x: number, y: number, age: number}>>([]);
  const maxTrailLength = 20;

  useEffect(() => {
    setMounted(true);
    setIsTouchDevice('ontouchstart' in window);
    
    // Hide default cursor on desktop
    if (!('ontouchstart' in window)) {
      document.body.style.cursor = 'none';
    }
    
    return () => {
      document.body.style.cursor = 'auto';
    };
  }, []);

  // Mouse movement handler
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (isTouchDevice) return;
    
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
    
    // Add trail point
    trailPoints.current.push({
      x: e.clientX,
      y: e.clientY,
      age: 0
    });
    
    // Limit trail length
    if (trailPoints.current.length > maxTrailLength) {
      trailPoints.current.shift();
    }
    
    // Calculate velocity
    const velocity = Math.sqrt(
      Math.pow(e.movementX, 2) + Math.pow(e.movementY, 2)
    );
    setCursorState(prev => ({ ...prev, velocity }));
  }, [mouseX, mouseY, isTouchDevice]);

  // Interactive element detection
  const handleMouseOver = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const isInteractive = 
      target.tagName === 'A' ||
      target.tagName === 'BUTTON' ||
      target.tagName === 'INPUT' ||
      target.tagName === 'TEXTAREA' ||
      target.closest('a') !== null ||
      target.closest('button') !== null ||
      target.getAttribute('role') === 'button';
    
    setCursorState(prev => ({ ...prev, isHovering: isInteractive }));
  }, []);

  // Mouse click handlers
  const handleMouseDown = useCallback(() => {
    setCursorState(prev => ({ ...prev, isPressed: true }));
    
    // Haptic feedback for mobile
    if (isTouchDevice && 'vibrate' in navigator) {
      navigator.vibrate(10);
    }
  }, [isTouchDevice]);

  const handleMouseUp = useCallback(() => {
    setCursorState(prev => ({ ...prev, isPressed: false }));
  }, []);

  // Scroll handler with velocity calculation
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const progress = currentScrollY / maxScroll;
    
    setScrollProgress(progress);
    scrollVelocity.current = Math.abs(currentScrollY - lastScrollY.current);
    lastScrollY.current = currentScrollY;
    
    setCursorState(prev => ({ ...prev, isScrolling: true }));
    
    // Clear existing timeout
    if (animationFrame.current) {
      cancelAnimationFrame(animationFrame.current);
    }
    
    // Reset scroll state after delay
    animationFrame.current = requestAnimationFrame(() => {
      setTimeout(() => {
        setCursorState(prev => ({ ...prev, isScrolling: false }));
        scrollVelocity.current = 0;
      }, 150);
    });
  }, []);

  // Touch handlers for mobile
  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isTouchDevice) return;
    
    const touch = e.touches[0];
    mouseX.set(touch.clientX);
    mouseY.set(touch.clientY);
  }, [mouseX, mouseY, isTouchDevice]);

  // Trail rendering effect
  useEffect(() => {
    if (!trailRef.current || isTouchDevice) return;
    
    const canvas = trailRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    let animationId: number;
    const renderTrail = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and render trail points
      trailPoints.current = trailPoints.current.filter(point => {
        point.age += 1;
        const opacity = Math.max(0, 1 - point.age / maxTrailLength);
        
        if (opacity <= 0) return false;
        
        // Add noise for organic movement
        const noiseX = noise3D(point.x * 0.01, point.y * 0.01, Date.now() * 0.001) * 2;
        const noiseY = noise3D(point.x * 0.01, point.y * 0.01, Date.now() * 0.001 + 100) * 2;
        
        ctx.beginPath();
        ctx.arc(
          point.x + noiseX,
          point.y + noiseY,
          (3 + scrollVelocity.current * 0.1) * opacity,
          0,
          Math.PI * 2
        );
        
        const color = theme === 'dark' ? '255, 255, 255' : '0, 0, 0';
        ctx.fillStyle = `rgba(${color}, ${opacity * 0.3})`;
        ctx.fill();
        
        return true;
      });
      
      animationId = requestAnimationFrame(renderTrail);
    };
    
    renderTrail();
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [theme, isTouchDevice, noise3D]);

  // Event listeners
  useEffect(() => {
    if (!mounted) return;
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('touchmove', handleTouchMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [mounted, handleMouseMove, handleMouseOver, handleMouseDown, handleMouseUp, handleScroll, handleTouchMove]);

  // Window resize handler
  useEffect(() => {
    const handleResize = () => {
      if (trailRef.current) {
        trailRef.current.width = window.innerWidth;
        trailRef.current.height = window.innerHeight;
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!mounted || isTouchDevice) return null;

  return (
    <>
      {/* Trail canvas */}
      <canvas
        ref={trailRef}
        className="pointer-events-none fixed inset-0 z-[999]"
        style={{ mixBlendMode: theme === 'dark' ? 'screen' : 'multiply' }}
      />
      
      {/* Main cursor */}
      <motion.div
        ref={cursorRef}
        className="pointer-events-none fixed z-[1000]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={`${cursorState.isHovering}-${cursorState.isPressed}-${cursorState.isScrolling}`}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: cursorState.isPressed ? 0.8 : cursorState.isHovering ? 1.5 : 1,
              opacity: 1 
            }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="relative"
          >
            {/* Outer ring */}
            <motion.div
              animate={{
                width: cursorState.isHovering ? 40 : 30,
                height: cursorState.isHovering ? 40 : 30,
                rotate: cursorState.isScrolling ? scrollProgress * 360 : 0,
              }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className={`
                rounded-full border-2 
                ${theme === 'dark' ? 'border-white/50' : 'border-black/50'}
                ${cursorState.isScrolling ? 'border-dashed' : 'border-solid'}
              `}
            />
            
            {/* Inner dot */}
            <motion.div
              animate={{
                scale: cursorState.isHovering ? 0.5 : 1,
                backgroundColor: cursorState.isHovering 
                  ? theme === 'dark' ? '#ffffff' : '#000000'
                  : theme === 'dark' ? '#ffffff80' : '#00000080',
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 rounded-full"
            />
            
            {/* Scroll indicator */}
            {cursorState.isScrolling && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-12 h-12 rounded-full border-t-2 border-transparent"
                  style={{
                    borderTopColor: theme === 'dark' ? '#ffffff40' : '#00000040',
                  }}
                />
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </motion.div>
      
      {/* Scroll progress indicator (mobile) */}
      {isTouchDevice && (
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500 z-[1001]"
          style={{ scaleX: scrollProgress, transformOrigin: 'left' }}
        />
      )}
    </>
  );
};

export default CustomCursor;
