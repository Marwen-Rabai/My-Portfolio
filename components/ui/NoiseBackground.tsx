"use client";

import React, { useEffect, useRef, useState } from "react";

export const NoiseBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Only run on client
    setIsMounted(true);

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    // Create noise texture with consistent performance
    let lastFrame = Date.now();
    const targetFps = 15; // Lower FPS for better performance
    const frameDelay = 1000 / targetFps;

    const createNoise = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - lastFrame;

      if (elapsed < frameDelay) return;

      lastFrame = currentTime;

      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const data = imageData.data;

      // Optimization: Create noise at a lower resolution, then upscale
      const pixelSize = 4; // Process fewer pixels for better performance

      for (let y = 0; y < canvas.height; y += pixelSize) {
        for (let x = 0; x < canvas.width; x += pixelSize) {
          const value = Math.random() * 255;
          
          // Fill a square of pixels with the same value
          for (let py = 0; py < pixelSize && y + py < canvas.height; py++) {
            for (let px = 0; px < pixelSize && x + px < canvas.width; px++) {
              const index = ((y + py) * canvas.width + (x + px)) * 4;
              data[index] = value;     // red
              data[index + 1] = value; // green
              data[index + 2] = value; // blue
              data[index + 3] = 10; // alpha (reduced for subtlety)
            }
          }
        }
      }

      ctx.putImageData(imageData, 0, 0);
    };

    // Animation loop
    let animationFrameId: number;

    const render = () => {
      createNoise();
      animationFrameId = window.requestAnimationFrame(render);
    };

    render();

    // Cleanup
    return () => {
      window.removeEventListener("resize", resize);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Don't render anything on the server
  if (!isMounted) {
    return null;
  }

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-40 opacity-[0.03]"
      style={{ mixBlendMode: "overlay" }}
    />
  );
};
