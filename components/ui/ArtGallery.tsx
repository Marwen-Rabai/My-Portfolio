"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { GlitchEffect } from "./GlitchEffect";
import { Drawings } from "@/data";

interface ArtGalleryProps {
  className?: string;
}

export const ArtGallery = ({ className }: ArtGalleryProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const [direction, setDirection] = useState<number>(0); // 1 for right, -1 for left

  const handleNextImage = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setDirection(1);
    setActiveIndex((prev) => (prev === Drawings.length - 1 ? 0 : prev + 1));

    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  const handlePrevImage = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? Drawings.length - 1 : prev - 1));

    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  const handleThumbnailClick = (index: number) => {
    if (isTransitioning || index === activeIndex) return;

    setIsTransitioning(true);
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <div className={`relative py-12 ${className}`} id="gallery">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-neon-pink/5 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-neon-blue/5 blur-[100px] rounded-full"></div>
      </div>

      {/* Section header */}
      <div className="max-w-7xl mx-auto mb-16 text-center">
        <GlitchEffect intensity="low" className="inline-block mb-2">
          <h2 className="text-sm font-mono text-white/50 uppercase tracking-widest">
            {/* Gallery */}
            Gallery
          </h2>
        </GlitchEffect>

        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/80 pb-2">
          Artwork Collection
        </h2>

        <div className="w-24 h-1 mx-auto mt-2 bg-gradient-to-r from-neon-pink/70 to-neon-blue/70"></div>
      </div>

      {/* Main gallery */}
      <div className="max-w-7xl mx-auto px-4">
        {/* Featured image */}
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] mb-8 overflow-hidden">
          {/* Track for border animation */}
          <div className="absolute inset-0 p-[1px] rounded-sm z-10 pointer-events-none">
            <div className="absolute inset-0 rounded-sm z-10 border border-white/10"></div>
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-pink/80 to-transparent"></div>
            <div className="absolute bottom-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-blue/80 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-[1px] h-8 bg-gradient-to-b from-transparent to-neon-pink/80"></div>
            <div className="absolute top-0 right-0 w-[1px] h-8 bg-gradient-to-b from-neon-blue/80 to-transparent"></div>
          </div>

          {/* Featured image container */}
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm rounded-sm overflow-hidden">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeIndex}
                className="absolute inset-0 flex items-center justify-center"
                initial={{
                  opacity: 0,
                  x: direction * 20,
                  scale: 0.95,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  x: direction * -20,
                  scale: 0.95,
                }}
                transition={{ duration: 0.4 }}
              >
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 bg-grid-small-white/5 mix-blend-overlay"></div>
                  <Image
                    src={Drawings[activeIndex].src}
                    alt={`Artwork ${activeIndex + 1}`}
                    fill
                    className="object-contain"
                  />

                  {/* Scanline effect */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute w-full h-[1px] bg-neon-blue/20 animate-scanline"></div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation arrows */}
            <button
              onClick={handlePrevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-black/30 backdrop-blur-sm border border-white/10 text-white/70 hover:text-white hover:bg-black/50 transition-colors"
              aria-label="Previous image"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <button
              onClick={handleNextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-black/30 backdrop-blur-sm border border-white/10 text-white/70 hover:text-white hover:bg-black/50 transition-colors"
              aria-label="Next image"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>

            {/* Image counter */}
            <div className="absolute bottom-4 right-4 bg-black/40 backdrop-blur-sm px-2 py-1 rounded-sm border border-white/10 text-xs font-mono text-white/70">
              {activeIndex + 1} / {Drawings.length}
            </div>
          </div>
        </div>

        {/* Thumbnail navigation */}
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 md:gap-4">
          {Drawings.map((drawing, index) => (
            <motion.button
              key={index}
              className={`relative aspect-square rounded-sm overflow-hidden border ${
                activeIndex === index
                  ? "border-neon-pink/70"
                  : "border-white/10 hover:border-white/30"
              } transition-colors`}
              onClick={() => handleThumbnailClick(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src={drawing.src}
                alt={`Thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />

              {/* Active indicator overlay */}
              {activeIndex === index && (
                <div className="absolute inset-0 bg-neon-pink/10 mix-blend-overlay">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-white/70"></div>
                  </div>
                </div>
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};
