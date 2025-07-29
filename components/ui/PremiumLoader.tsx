"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CyberGlitch } from "./CyberGlitch";

interface PremiumLoaderProps {
  onLoadingComplete: () => void;
}

export const PremiumLoader: React.FC<PremiumLoaderProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("INITIALIZING...");
  const [isVisible, setIsVisible] = useState(true);

  const loadingSteps = [
    { progress: 20, text: "LOADING_ASSETS..." },
    { progress: 40, text: "ESTABLISHING_CONNECTIONS..." },
    { progress: 60, text: "OPTIMIZING_EXPERIENCE..." },
    { progress: 80, text: "FINALIZING_INTERFACE..." },
    { progress: 100, text: "MARWEN_RABAI_READY" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(onLoadingComplete, 800);
          }, 1500);
          return 100;
        }

        const nextStep = loadingSteps.find(step => step.progress > prev);
        if (nextStep && prev >= nextStep.progress - 20) {
          setLoadingText(nextStep.text);
        }

        return prev + Math.random() * 4 + 1;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black overflow-hidden"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {/* Animated background effects */}
        <div className="absolute inset-0">
          {/* Grid pattern */}
          <div 
            className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(0,255,255,0.1) 1px, transparent 1px),
                               linear-gradient(to bottom, rgba(0,255,255,0.1) 1px, transparent 1px)`
            }}
          />
          
          {/* Animated scanlines */}
          <div className="absolute inset-0">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-cyber-teal to-transparent"
                initial={{ y: "-100vh", opacity: 0 }}
                animate={{ y: "200vh", opacity: [0, 1, 0] }}
                transition={{
                  duration: 4,
                  delay: i * 1.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}
          </div>

          {/* Floating particles */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-cyber-teal rounded-full"
                initial={{
                  x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : Math.random() * 800,
                  y: typeof window !== 'undefined' ? Math.random() * window.innerHeight : Math.random() * 600,
                  opacity: 0,
                }}
                animate={{
                  y: [null, -50, 50, -30],
                  opacity: [0, 1, 0.5, 0],
                }}
                transition={{
                  duration: 4 + Math.random() * 2,
                  delay: Math.random() * 2,
                  repeat: Infinity,
                }}
              />
            ))}
          </div>
        </div>

        {/* Main content */}
        <div className="relative z-10 text-center max-w-md mx-auto px-6">
          {/* Profile image with glow effect */}
          <motion.div
            className="mb-8 relative"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <div className="absolute inset-0 bg-cyber-teal/30 rounded-full blur-xl animate-pulse" />
            <img
              src="/MY_Picture.webp"
              alt="Marwen Rabai"
              className="w-24 h-24 rounded-full mx-auto relative z-10 border-2 border-cyber-teal shadow-2xl object-cover"
            />
            
            {/* Rotating ring */}
            <motion.div
              className="absolute inset-0 w-24 h-24 border-2 border-cyber-magenta/50 rounded-full mx-auto"
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>

          {/* Name with glitch effect */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <CyberGlitch
              text="MARWEN RABAI"
              className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyber-teal via-white to-cyber-magenta"
              glitchIntensity="medium"
            />
            <p className="text-cyber-teal/80 text-sm font-mono mt-2 tracking-wider">
              DIGITAL ARCHITECT OF SUCCESS
            </p>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <div className="relative w-full h-2 bg-black border border-cyber-teal/30 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-cyber-teal via-cyber-magenta to-cyber-teal"
                style={{ width: `${progress}%` }}
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
              
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{ x: [-100, 300] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
            </div>
            
            {/* Progress percentage */}
            <div className="flex justify-between text-xs font-mono text-cyber-teal/60 mt-2">
              <span>{Math.round(progress)}%</span>
              <span>LOADING...</span>
            </div>
          </motion.div>

          {/* Loading text */}
          <motion.div
            key={loadingText}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="font-mono text-sm text-white/70 tracking-wider"
          >
            {loadingText}
          </motion.div>

          {/* Loading dots animation */}
          <div className="flex justify-center mt-4 space-x-1">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-1 h-1 bg-cyber-teal rounded-full"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{
                  duration: 1.5,
                  delay: i * 0.3,
                  repeat: Infinity,
                }}
              />
            ))}
          </div>
        </div>

        {/* Corner decorations */}
        <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-cyber-teal/40" />
        <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-cyber-teal/40" />
        <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-cyber-teal/40" />
        <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-cyber-teal/40" />
      </motion.div>
    </AnimatePresence>
  );
}; 