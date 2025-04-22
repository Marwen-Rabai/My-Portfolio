"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { useAnimationControls } from "framer-motion";

const glitchVariants = cva("relative inline-block", {
  variants: {
    color: {
      default: "text-white",
      primary: "text-cyan-400",
      secondary: "text-fuchsia-400",
      accent: "text-yellow-400",
      success: "text-emerald-400",
      warning: "text-amber-400",
      danger: "text-rose-400",
    },
    size: {
      xs: "text-xs",
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
      "4xl": "text-4xl",
      "5xl": "text-5xl",
    },
  },
  defaultVariants: {
    color: "default",
    size: "base",
  },
});

const GLITCH_CHARS = "!<>-_\\/[]{}—=+*^?#________";

export interface CyberGlitchProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof glitchVariants> {
  text: string;
  as?: React.ElementType;
  glitchIntensity?: "low" | "medium" | "high" | "extreme";
}

export function CyberGlitch({
  text,
  className,
  color,
  as: Component = "span",
  size,
  glitchIntensity = "medium",
  ...props
}: CyberGlitchProps) {
  const [glitching, setGlitching] = useState(false);
  const [displayText, setDisplayText] = useState(text);
  const controls = useAnimationControls();

  // Configure glitch parameters based on intensity
  const getGlitchParams = () => {
    switch (glitchIntensity) {
      case "low":
        return {
          probability: 0.1,
          duration: [1000, 2000],
          delay: [3000, 7000],
          charChanges: 1,
        };
      case "medium":
        return {
          probability: 0.2,
          duration: [800, 1500],
          delay: [2000, 5000],
          charChanges: 2,
        };
      case "high":
        return {
          probability: 0.3,
          duration: [600, 1200],
          delay: [1000, 3000],
          charChanges: 3,
        };
      case "extreme":
        return {
          probability: 0.5,
          duration: [400, 800],
          delay: [500, 1500],
          charChanges: 5,
        };
    }
  };

  const params = getGlitchParams();

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (Math.random() < params.probability) {
        startGlitch();
      }
    }, params.delay[0] + Math.random() * (params.delay[1] - params.delay[0]));

    return () => clearInterval(intervalId);
  }, [glitchIntensity]);

  const startGlitch = async () => {
    if (glitching) return;

    setGlitching(true);
    await controls.start({ opacity: 1 });

    // Create glitched text
    let iterations = params.charChanges;
    const originalText = text;

    const glitchInterval = setInterval(() => {
      const glitchedText = originalText
        .split("")
        .map((char) => {
          if (Math.random() < params.probability && char.trim() !== "") {
            return GLITCH_CHARS[
              Math.floor(Math.random() * GLITCH_CHARS.length)
            ];
          }
          return char;
        })
        .join("");

      setDisplayText(glitchedText);

      iterations--;
      if (iterations <= 0) {
        clearInterval(glitchInterval);
        setDisplayText(originalText);
        setGlitching(false);
      }
    }, 100);
  };

  return (
    <Component
      className={cn(
        glitchVariants({ color, size }),
        glitching && "cyber-text-glitch",
        className
      )}
      {...props}
      onMouseEnter={startGlitch}
    >
      <span
        className={`${glitching ? "relative" : ""}`}
        style={{
          display: "inline-block",
          ...(glitching && {
            animation: `cyber-glitch1 750ms infinite alternate-reverse`,
          }),
        }}
      >
        {displayText}
      </span>

      {glitching && (
        <>
          <span
            className="absolute left-0 top-0"
            style={{
              animation: "cyber-glitch2 750ms infinite alternate-reverse",
              opacity: 0.5,
              color: "inherit",
              textShadow: "0 0 5px currentColor",
            }}
          >
            {displayText}
          </span>
          <span
            className="absolute left-0 top-0 w-full overflow-hidden pointer-events-none"
            style={{
              height: "5px",
              animation: "cyber-scanline 3s linear infinite",
              background: "rgba(255, 255, 255, 0.1)",
            }}
          />
        </>
      )}
    </Component>
  );
}
