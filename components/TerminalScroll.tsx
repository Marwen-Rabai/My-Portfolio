"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface TerminalScrollProps {
  sectionTitle?: string;
  children?: React.ReactNode;
  className?: string;
  commands?: string[];
}

export function TerminalScroll({
  sectionTitle,
  children,
  className = "",
  commands = ["ls -la", "cat data.json", "./execute_program", "exit"],
}: TerminalScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentCommand, setCurrentCommand] = useState(0);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [50, 0, 0, -50]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setCurrentCommand((prev) =>
          prev < commands.length - 1 ? prev + 1 : prev
        );
      }, 1500);

      return () => clearInterval(interval);
    }
  }, [isVisible, commands.length]);

  return (
    <motion.div
      ref={containerRef}
      style={{ opacity, y }}
      className={`linux-scroll-animation ${className}`}
    >
      {sectionTitle && (
        <div className="mb-3">
          <h3 className="linux-header terminal-text text-cyber-teal">
            {sectionTitle}
          </h3>
          <div className="h-px bg-cyber-teal/30 w-full mt-2"></div>
        </div>
      )}

      <div className="terminal-commands mb-4">
        {commands.map((cmd, i) => (
          <div
            key={i}
            className={`command-line delay-${i % 3} ${
              i <= currentCommand ? "opacity-100" : "opacity-0"
            }`}
          >
            <span className="text-cyber-magenta">user@cyberpunk</span>
            <span className="text-white/70">:</span>
            <span className="text-cyber-teal">~</span>
            <span className="text-white/70">$ </span>
            <span className="text-white">{cmd}</span>
          </div>
        ))}
      </div>

      {children}

      <div className="mt-3 scroll-prompt">continue_scrolling</div>
    </motion.div>
  );
}

// Simpler version without commands, just for visual effect
export function TerminalBox({
  children,
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [20, 0, 0, -20]);

  return (
    <motion.div
      ref={containerRef}
      style={{ opacity, y }}
      className={`linux-scroll-animation ${className}`}
    >
      {children}
    </motion.div>
  );
}
