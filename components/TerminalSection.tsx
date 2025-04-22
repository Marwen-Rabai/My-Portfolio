"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface TerminalSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  commands?: string[];
  showPrompt?: boolean;
}

export const TerminalSection: React.FC<TerminalSectionProps> = ({
  title,
  children,
  className = "",
  commands = [],
  showPrompt = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.3, 1, 1, 0.3]
  );
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [20, 0, 0, 20]);

  // IntersectionObserver to detect when component is in view
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(containerRef.current);
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  // Cycle through commands if visible
  useEffect(() => {
    if (!visible || commands.length === 0) return;

    const interval = setInterval(() => {
      setCurrentCommandIndex((prev) => (prev + 1) % commands.length);
    }, 1500);

    return () => clearInterval(interval);
  }, [visible, commands]);

  const defaultCommands = [
    "ls -la /sys/class/cyber",
    "cat /proc/terminal/status",
    "chmod +x ./execute.sh",
    "sudo apt install cyberpunk-enhancer",
    "ping neural.net -c 3",
    "grep -r 'pattern' /var/log/system",
    "tail -f /var/log/cyber/events.log",
  ];

  // Use default commands if none provided
  const commandsToShow = commands.length > 0 ? commands : defaultCommands;

  return (
    <motion.div
      ref={containerRef}
      style={{ opacity, y }}
      className={`linux-scroll-animation ${className}`}
    >
      <div className="linux-header text-cyber-neon mb-4">{title}</div>

      {visible && commandsToShow.length > 0 && (
        <div className="command-display bg-black/40 p-2 mb-4 rounded border border-cyber-teal/20">
          <div className="command-line delay-0">
            <span className="text-cyber-neon">user@cyberpunk:~$ </span>
            <span className="text-white">
              {commandsToShow[currentCommandIndex]}
            </span>
          </div>
        </div>
      )}

      {children}

      {showPrompt && (
        <div className="mt-4 text-center">
          <div className="scroll-prompt">
            {visible ? "scroll for more data..." : "loading..."}
          </div>
        </div>
      )}
    </motion.div>
  );
};

// Simpler version without commands for smaller UI elements
export const TerminalBox: React.FC<
  Omit<TerminalSectionProps, "commands" | "showPrompt">
> = ({ title, children, className = "" }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.3, 1, 1, 0.3]
  );
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [10, 0, 0, 10]);

  return (
    <motion.div
      ref={containerRef}
      style={{ opacity, y }}
      className={`linux-scroll-animation ${className}`}
    >
      <div className="linux-header text-cyber-neon mb-2">{title}</div>
      {children}
    </motion.div>
  );
};
