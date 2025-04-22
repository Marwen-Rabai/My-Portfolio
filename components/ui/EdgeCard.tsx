"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { GlitchEffect } from "./GlitchEffect";
import Image from "next/image";

interface EdgeCardProps {
  title: string;
  description?: string;
  imageUrl?: string;
  link?: string;
  techIcons?: string[];
  className?: string;
}

export const EdgeCard = ({
  title,
  description,
  imageUrl,
  link,
  techIcons = [],
  className = "",
}: EdgeCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  // Function to open the link in a new tab
  const openProjectLink = () => {
    if (link) {
      window.open(link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <motion.div
      className={`relative overflow-hidden rounded-sm border border-white/10 bg-black/20 backdrop-blur-sm ${className} ${
        link ? "cursor-pointer" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={link ? openProjectLink : undefined}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Diagonal line decorations */}
      <div className="absolute top-0 right-0 h-20 w-20 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 h-[1px] w-20 bg-gradient-to-r from-transparent to-neon-pink/50 transform rotate-45 translate-y-4"></div>
        <div className="absolute top-0 right-0 h-[1px] w-16 bg-gradient-to-r from-transparent to-neon-blue/50 transform rotate-45 translate-y-8"></div>
      </div>

      <div className="absolute bottom-0 left-0 h-20 w-20 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-0 h-[1px] w-20 bg-gradient-to-l from-transparent to-neon-blue/50 transform -rotate-45 -translate-y-4"></div>
        <div className="absolute bottom-0 left-0 h-[1px] w-16 bg-gradient-to-l from-transparent to-neon-pink/50 transform -rotate-45 -translate-y-8"></div>
      </div>

      {/* Content container */}
      <div className="p-6 h-full flex flex-col">
        {/* Image section */}
        {imageUrl && (
          <div className="relative mb-6 overflow-hidden rounded-sm h-48">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />

            {/* Overlay effect on hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"
              initial={{ opacity: 0.3 }}
              animate={{ opacity: isHovered ? 0.7 : 0.3 }}
            />

            {/* Scanline effect */}
            {isHovered && (
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute w-full h-[1px] bg-neon-blue/30 animate-scanline"></div>
              </div>
            )}
          </div>
        )}

        {/* Title with glitch effect on hover */}
        <GlitchEffect intensity="medium" active={isHovered} className="mb-3">
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </GlitchEffect>

        {/* Description */}
        {description && (
          <p className="text-white/70 mb-4 flex-grow">{description}</p>
        )}

        {/* Tech icons */}
        {techIcons.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {techIcons.map((icon, index) => (
              <Image
                key={index}
                src={icon}
                alt="Technology"
                width={24}
                height={24}
                className="object-contain"
              />
            ))}
          </div>
        )}

        {/* Link indicator - small indicator for clickable cards */}
        {link && (
          <div className="flex items-center justify-end mt-auto">
            <motion.span
              className="text-cyber-teal/70 text-sm font-mono flex items-center gap-1"
              animate={{ x: isHovered ? 5 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <span className="opacity-70">VIEW</span>
              <span className="text-lg">→</span>
            </motion.span>
          </div>
        )}
      </div>
    </motion.div>
  );
};
