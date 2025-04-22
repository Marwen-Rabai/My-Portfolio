"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface GlitchEffectProps {
  children: React.ReactNode;
  className?: string;
  intensity?: "low" | "medium" | "high";
  active?: boolean;
}

export const GlitchEffect = ({
  children,
  className,
  intensity = "medium",
  active = true,
}: GlitchEffectProps) => {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    if (!active) return;

    // Random glitch timing
    const intensityMap = {
      low: { interval: [5000, 10000], duration: [50, 200] },
      medium: { interval: [3000, 7000], duration: [100, 400] },
      high: { interval: [1000, 4000], duration: [200, 800] },
    };

    const { interval, duration } = intensityMap[intensity];

    const triggerGlitch = () => {
      // Random timing between intervals
      const randomInterval = Math.floor(
        Math.random() * (interval[1] - interval[0]) + interval[0]
      );

      setTimeout(() => {
        setIsGlitching(true);

        // Random glitch duration
        const randomDuration = Math.floor(
          Math.random() * (duration[1] - duration[0]) + duration[0]
        );

        setTimeout(() => {
          setIsGlitching(false);
          triggerGlitch();
        }, randomDuration);
      }, randomInterval);
    };

    triggerGlitch();

    return () => {
      setIsGlitching(false);
    };
  }, [active, intensity]);

  return (
    <div className={cn("relative", className)}>
      <div
        className={cn(
          "relative z-10",
          isGlitching &&
            "before:content-[''] before:absolute before:inset-0 before:bg-[#ff00dc33] before:translate-x-[2px] before:translate-y-[-2px] before:mix-blend-exclusion",
          isGlitching &&
            "after:content-[''] after:absolute after:inset-0 after:bg-[#00ffe533] after:translate-x-[-2px] after:translate-y-[2px] after:mix-blend-exclusion"
        )}
      >
        {children}
      </div>
      {isGlitching && (
        <>
          <div
            className="absolute inset-0 opacity-20 animate-glitch-1 z-0"
            style={{
              backgroundImage:
                "linear-gradient(transparent 0%, rgba(255, 255, 255, 0.2) 50%, transparent 100%)",
              backgroundSize: "100% 3px",
              backgroundRepeat: "repeat",
            }}
          ></div>
          <div
            className="absolute inset-0 opacity-20 animate-glitch-2 z-0"
            style={{
              backgroundImage:
                "linear-gradient(90deg, transparent 0, rgba(255, 255, 255, 0.2) 50%, transparent 100%)",
              backgroundSize: "5px 100%",
              backgroundRepeat: "repeat",
            }}
          ></div>
        </>
      )}
    </div>
  );
};
