"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { CyberGlitch } from "./ui/CyberGlitch";
import { Drawings } from "@/data";
import { useState, useEffect, useRef } from "react";

const ArtList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState("all");
  const containerRef = useRef<HTMLDivElement>(null);

  const openModal = (img: string, index: number) => {
    setSelectedImage(img);
    setSelectedIndex(index);
    setIsOpen(true);
    // Prevent scrolling when modal is open
    if (typeof window !== "undefined") {
      document.body.style.overflow = "hidden";
    }
  };

  const closeModal = () => {
    setIsOpen(false);
    // Restore scrolling when modal is closed
    if (typeof window !== "undefined") {
      document.body.style.overflow = "auto";
    }
  };

  const navigateImage = (direction: number) => {
    const newIndex =
      (selectedIndex + direction + Drawings.length) % Drawings.length;
    setSelectedIndex(newIndex);
    setSelectedImage(Drawings[newIndex].src);
  };

  // Close modal with escape key and navigate with arrow keys
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      } else if (isOpen) {
        if (event.key === "ArrowRight") {
          navigateImage(1);
        } else if (event.key === "ArrowLeft") {
          navigateImage(-1);
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      // Clean up in case component unmounts while modal is open
      document.body.style.overflow = "auto";
    };
  }, [isOpen, selectedIndex]);

  return (
    <section className="relative py-16 px-4 md:px-6" id="gallery">
      {/* Enhanced cyberpunk background elements */}
      <div className="absolute inset-0 pointer-events-none z-[-1] opacity-40">
        <div className="absolute w-full h-full bg-grid-small-white/5"></div>
        <div
          className="absolute bottom-0 right-0 w-1/3 h-1/2 rounded-full bg-cyber-magenta/10 blur-[120px]"
          style={{
            animation: "pulse 8s ease-in-out infinite alternate",
            transformOrigin: "center",
          }}
        ></div>
        <div
          className="absolute top-0 left-0 w-1/3 h-1/2 rounded-full bg-cyber-teal/10 blur-[120px]"
          style={{
            animation: "pulse 10s ease-in-out infinite alternate-reverse",
            transformOrigin: "center",
          }}
        ></div>

        {/* Circuit pattern */}
        <div
          className="absolute inset-0 opacity-5 mix-blend-screen"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z' fill='%2300FFFF' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      {/* Section header with cyberpunk glitch effect */}
      <div className="max-w-7xl mx-auto mb-16 text-center reveal-on-scroll">
        <div className="inline-block relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyber-magenta/20 via-transparent to-cyber-teal/20 rounded-sm blur-sm"></div>
          <CyberGlitch
            text="CYBERNET GALLERY"
            className="text-sm font-mono text-white/80 uppercase tracking-widest"
            glitchIntensity="medium"
            color="primary"
          />
        </div>

        <h2 className="text-4xl md:text-5xl mt-2 font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyber-magenta via-white/90 to-cyber-teal pb-2">
          Digital Archives
        </h2>

        <div className="w-40 h-1 mx-auto mt-2 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyber-magenta via-white/50 to-cyber-teal"></div>
          <div
            className="absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r from-white/80 to-transparent animate-pulse"
            style={{ animationDuration: "2s" }}
          ></div>
        </div>
      </div>

      {/* Cyberpunk category filter */}
      <div className="flex justify-center gap-4 mb-12 reveal-on-scroll">
        {["all", "digital", "concept", "3d"].map((category) => (
          <motion.button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`relative px-6 py-2 text-sm font-mono uppercase tracking-wider ${
              activeFilter === category
                ? "text-white"
                : "text-white/50 hover:text-white/80"
            } transition-colors`}
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
          >
            {category}
            {activeFilter === category && (
              <motion.div
                layoutId="active-filter"
                className="absolute -bottom-1 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyber-teal to-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </motion.button>
        ))}
      </div>

      <div className="max-w-7xl mx-auto" ref={containerRef}>
        {/* Featured image - larger format */}
        <div
          className="mb-12 reveal-on-scroll"
          style={{ transitionDelay: "50ms" }}
        >
          <motion.div
            className="relative rounded-sm overflow-hidden border border-white/10 bg-black/40 backdrop-blur-sm h-[50vh] cursor-pointer group"
            whileHover={{ scale: 1.005 }}
            whileTap={{ scale: 0.995 }}
            onClick={() => openModal(Drawings[0].src, 0)}
          >
            {/* Cyberpunk border effect */}
            <div className="absolute inset-0 z-10 pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-cyber-magenta/60 via-white/10 to-cyber-teal/60"></div>
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-cyber-teal/60 via-white/10 to-cyber-magenta/60"></div>
              <div className="absolute left-0 top-0 h-full w-[1px] bg-gradient-to-b from-cyber-magenta/60 via-white/10 to-cyber-teal/60"></div>
              <div className="absolute right-0 top-0 h-full w-[1px] bg-gradient-to-b from-cyber-teal/60 via-white/10 to-cyber-magenta/60"></div>
            </div>

            {/* Scanline effect */}
            <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
              <div
                className="absolute w-full h-[2px] bg-white/10 animate-scanline"
                style={{ opacity: 0.3 }}
              ></div>
              <div
                className="absolute w-full h-[2px] bg-white/10 animate-scanline"
                style={{ animationDelay: "1.5s", opacity: 0.2 }}
              ></div>
            </div>

            {/* Featured image */}
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src={Drawings[0].src}
                alt="Featured Artwork"
                fill
                className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                sizes="100vw"
                priority
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60"></div>

              {/* Title overlay with cyberpunk style */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <div className="max-w-4xl">
                  <CyberGlitch
                    text="FEATURE_SHOWCASE"
                    className="text-sm font-mono text-cyber-teal mb-2"
                    glitchIntensity="low"
                  />
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    Digital Reality{" "}
                    <span className="text-cyber-magenta">&#47;&#47;</span>{" "}
                    Fusion
                  </h3>
                  <p className="text-white/70 md:w-2/3 font-mono text-sm">
                    Exploring the boundaries between virtual worlds and reality
                    through digital artistry.
                    <span className="ml-2 text-cyber-teal">[2024]</span>
                  </p>
                </div>
              </div>

              {/* Cyberpunk view indicator */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-black/70 backdrop-blur-md border border-cyber-teal/40 p-3 rounded-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-10 h-10 text-cyber-teal"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Gallery grid with asymmetric layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          {/* Create asymmetric layout - some images span more columns */}
          {Drawings.slice(1).map((art, index) => {
            const realIndex = index + 1;

            const spanClasses =
              realIndex % 5 === 1
                ? "md:col-span-8"
                : realIndex % 5 === 2
                ? "md:col-span-4"
                : realIndex % 5 === 3
                ? "md:col-span-5"
                : realIndex % 5 === 4
                ? "md:col-span-7"
                : "md:col-span-6";

            return (
              <motion.div
                key={realIndex}
                className={`cursor-pointer group reveal-on-scroll ${spanClasses}`}
                onClick={() => openModal(art.src, realIndex)}
                style={{ transitionDelay: `${index * 50}ms` }}
                whileHover={{ y: -5 }}
                whileTap={{ y: 0 }}
              >
                <div className="relative rounded-sm overflow-hidden border border-white/10 bg-black/40 backdrop-blur-sm h-64 sm:h-72">
                  {/* Cyberpunk border effect */}
                  <div className="absolute inset-0 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-cyber-magenta/80 via-white/40 to-cyber-teal/80"></div>
                    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-cyber-teal/80 via-white/40 to-cyber-magenta/80"></div>
                    <div className="absolute left-0 top-0 h-full w-[1px] bg-gradient-to-b from-cyber-magenta/80 via-white/40 to-cyber-teal/80"></div>
                    <div className="absolute right-0 top-0 h-full w-[1px] bg-gradient-to-b from-cyber-teal/80 via-white/40 to-cyber-magenta/80"></div>
                  </div>

                  {/* Scanline effect on hover */}
                  <div className="absolute inset-0 z-10 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="absolute w-full h-[2px] bg-white/10 animate-scanline"></div>
                    <div
                      className="absolute w-full h-[2px] bg-white/10 animate-scanline"
                      style={{ animationDelay: "1.5s" }}
                    ></div>
                  </div>

                  {/* Image */}
                  <div className="relative w-full h-full overflow-hidden">
                    <Image
                      src={art.src}
                      alt={`Artwork ${realIndex}`}
                      fill
                      className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300"></div>

                    {/* Title overlay with cyberpunk style */}
                    <div className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-sm p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-white text-lg font-bold mb-1">
                        Digital Vision {realIndex}
                      </h3>
                      <p className="text-cyber-teal/80 text-sm font-mono">
                        2024_0{realIndex}
                      </p>
                    </div>

                    {/* Image number */}
                    <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-sm border border-white/20 font-mono text-xs text-white/70">
                      {realIndex.toString().padStart(2, "0")}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Enhanced Modal for enlarged view with navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop with blur effect */}
            <div
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
              onClick={closeModal}
            ></div>

            {/* Modal content */}
            <motion.div
              className="relative bg-black/90 border border-cyber-teal/30 p-1 max-w-5xl w-[95vw] h-auto z-10"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <div className="relative w-full h-[85vh] overflow-hidden flex items-center justify-center">
                {selectedImage && (
                  <Image
                    src={selectedImage}
                    alt="Art Preview"
                    fill
                    className="object-contain"
                  />
                )}

                {/* Cyberpunk elements */}
                <div className="absolute inset-0 pointer-events-none">
                  {/* Scanline effect */}
                  <div className="absolute inset-0 overflow-hidden mix-blend-overlay opacity-10">
                    <div className="absolute w-full h-[1px] bg-white animate-scanline"></div>
                    <div
                      className="absolute w-full h-[1px] bg-white animate-scanline"
                      style={{ animationDelay: "2.5s" }}
                    ></div>
                  </div>

                  {/* Corner decorations */}
                  <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-cyber-magenta/50 opacity-70"></div>
                  <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-cyber-teal/50 opacity-70"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-cyber-teal/50 opacity-70"></div>
                  <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-cyber-magenta/50 opacity-70"></div>
                </div>

                {/* Image number */}
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm p-2 font-mono text-cyber-teal/90 border border-cyber-teal/30 text-sm">
                  <span className="text-white/50 mr-1">[ID:</span>
                  {selectedIndex.toString().padStart(2, "0")}
                  <span className="text-white/50 ml-1">]</span>
                </div>

                {/* Close button */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm border border-cyber-teal/40 p-2 rounded-sm text-white/80 hover:text-white transition-colors z-20"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                {/* Navigation buttons */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateImage(-1);
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/70 backdrop-blur-sm border border-white/20 w-12 h-12 flex items-center justify-center rounded-sm text-white/70 hover:text-white hover:border-cyber-teal/50 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                  </svg>
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateImage(1);
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/70 backdrop-blur-sm border border-white/20 w-12 h-12 flex items-center justify-center rounded-sm text-white/70 hover:text-white hover:border-cyber-teal/50 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ArtList;
