"use client";

import { navItems } from "@/data";
import RecentProjects from "@/components/RecentProjects";
import ArtList from "@/components/ArtList";
import Footer from "@/components/Footer";
import NewHero from "@/components/NewHero";
import Contact from "@/components/Contact";
import { EdgeNav } from "@/components/ui/EdgeNav";
import { NoiseBackground } from "@/components/ui/NoiseBackground";
import { useEffect } from "react";
import { TerminalSection } from "@/components/TerminalSection";

export default function Home() {
  // Client component for scroll animations
  function ScrollReveal() {
    useEffect(() => {
      // Add parallax effect
      const handleParallax = () => {
        const parallaxElements =
          document.querySelectorAll<HTMLElement>(".parallax-bg");
        parallaxElements.forEach((el) => {
          const scrollPosition = window.scrollY;
          const parentElement = el.parentElement;
          const parentTop = parentElement?.getBoundingClientRect().top || 0;
          const speed = el.getAttribute("data-speed") || "0.2";
          const yPos = -(parentTop + scrollPosition) * parseFloat(speed);
          el.style.transform = `translate3d(0, ${yPos}px, 0)`;
        });
      };

      // Reveal elements on scroll
      const revealOnScroll = () => {
        const elements = document.querySelectorAll(".reveal-on-scroll");
        elements.forEach((element) => {
          const windowHeight = window.innerHeight;
          const elementTop = element.getBoundingClientRect().top;
          const elementVisible = 150;

          if (elementTop < windowHeight - elementVisible) {
            element.classList.add("active");
          }
        });
      };

      window.addEventListener("scroll", handleParallax);
      window.addEventListener("scroll", revealOnScroll);

      // Initial call to show elements already in view
      revealOnScroll();
      handleParallax();

      return () => {
        window.removeEventListener("scroll", handleParallax);
        window.removeEventListener("scroll", revealOnScroll);
      };
    }, []);

    return null;
  }

  const projectCommands = [
    "ls -la /projects",
    "cat README.md",
    "git log --oneline --graph",
    "node --version",
    "npm list --depth=0",
  ];

  const artCommands = [
    "ffmpeg -i input.png -vf scale=1920:-1 output.png",
    "convert image.jpg -resize 800x600 resized.jpg",
    "blender --background --python render.py",
    "gimp -i --batch-interpreter=python-fu-eval image.xcf",
  ];

  const contactCommands = [
    "ssh user@contact-server",
    "openssl genrsa -out private.pem 2048",
    "curl -X POST https://api.contact/send",
    "gpg --encrypt --recipient user@example.com message.txt",
  ];

  return (
    <>
      {/* Client-side scroll effects */}
      <ScrollReveal />

      {/* Noise overlay with enhanced cyberpunk elements */}
      <NoiseBackground />

      {/* Cyberpunk scanlines */}
      <div className="fixed inset-0 z-[5] pointer-events-none">
        <div className="absolute inset-0 bg-cyber-black/10 mix-blend-overlay"></div>
        <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]">
          <div
            className="absolute w-full h-[1px] bg-neon-blue/20 animate-cyber-scanline"
            style={{ filter: "blur(0.5px)" }}
          ></div>
          <div
            className="absolute w-full h-[1px] bg-neon-pink/20 animate-cyber-scanline"
            style={{ animationDelay: "0.8s", filter: "blur(0.5px)" }}
          ></div>
        </div>
      </div>

      {/* Cyberpunk grid lines */}
      <div className="fixed inset-0 z-[1] pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-grid-small-white/10"></div>
      </div>

      {/* Main content container */}
      <div className="relative min-h-screen">
        {/* Navigation */}
        <EdgeNav navItems={navItems} />

        {/* Main content sections */}
        <main className="flex flex-col">
          {/* Hero Section */}
          <section className="min-h-screen w-full">
            <NewHero />
          </section>

          {/* Cyberpunk Divider */}
          <div className="cyber-divider">
            <div className="cyber-divider-content bg-black">
              <div className="cyber-divider-top"></div>
              <div className="cyber-divider-glitch"></div>
              <div
                className="absolute inset-0 bg-grid-small-white/5"
                style={{
                  transform: "skewY(-2deg)",
                  transformOrigin: "top left",
                }}
              ></div>
              <div className="absolute top-0 right-0 w-1/3 h-full bg-neon-blue/5 blur-[100px] rounded-full"></div>
              <div className="absolute bottom-0 left-0 w-1/3 h-full bg-neon-pink/5 blur-[100px] rounded-full"></div>
              <div className="cyber-divider-bottom"></div>
            </div>
          </div>

          {/* Projects Section */}
          <section className="relative w-full min-h-screen pt-16">
            <div className="absolute inset-0 pointer-events-none z-0">
              <div className="absolute inset-0 bg-gradient-to-b from-cyber-black/90 to-black/90"></div>
              <div className="absolute inset-0 bg-grid-small-white/5"></div>
              <div className="parallax-bg" data-speed="0.2">
                {/* Cyberpunk accent elements */}
                <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-neon-blue/5 blur-[150px] rounded-full"></div>
                <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-neon-pink/5 blur-[150px] rounded-full"></div>

                {/* Angled lines - cyberpunk aesthetic */}
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-neon-blue/50 via-transparent to-transparent"></div>
                <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-neon-pink/50 via-transparent to-transparent"></div>
              </div>
            </div>

            <TerminalSection
              title="PROJECT_DATABASE"
              commands={projectCommands}
            >
              <RecentProjects />
            </TerminalSection>
          </section>

          {/* Cyberpunk Divider */}
          <div className="cyber-divider">
            <div
              className="cyber-divider-content"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(0,0,0,1), rgba(13,2,33,0.9))",
              }}
            >
              <div className="cyber-divider-top"></div>
              <div
                className="absolute inset-0 bg-grid-small-white/5 mix-blend-overlay"
                style={{
                  transform: "skewY(2deg) scale(1.1)",
                  transformOrigin: "bottom right",
                }}
              ></div>
              <div className="absolute -left-20 top-1/2 transform -translate-y-1/2 w-40 h-40 bg-cyber-magenta/5 blur-[60px] rounded-full"></div>
              <div className="absolute -right-20 top-1/2 transform -translate-y-1/2 w-40 h-40 bg-cyber-teal/5 blur-[60px] rounded-full"></div>
              <div className="cyber-divider-bottom"></div>
            </div>
          </div>

          {/* Art Gallery Section */}
          <section className="relative w-full min-h-screen pt-16">
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-gradient-to-b from-cyber-darkblue/90 via-cyber-black/80 to-black/80"></div>
              <div className="absolute inset-0 bg-grid-small-white/5 mix-blend-overlay"></div>
              <div className="parallax-bg" data-speed="0.1">
                {/* Cyberpunk hexagon pattern */}
                <div
                  className="absolute inset-0 opacity-5"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 17.32v34.64L30 60 0 43.32V17.32L30 0zm0 4L4 18.87v30.26L30 56l26-6.87V18.87L30 4z' fill='%23FFFFFF' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                    backgroundSize: "60px 60px",
                  }}
                ></div>

                {/* Glowing elements */}
                <div className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full bg-cyber-magenta/10 blur-[100px] mix-blend-screen"></div>
                <div className="absolute bottom-1/4 right-1/3 w-64 h-64 rounded-full bg-cyber-teal/10 blur-[100px] mix-blend-screen"></div>
              </div>
            </div>

            <TerminalSection title="VISUAL_DATABASE" commands={artCommands}>
              <ArtList />
            </TerminalSection>
          </section>

          {/* Cyberpunk Divider */}
          <div className="cyber-divider">
            <div className="cyber-divider-content bg-gradient-to-b from-black to-cyber-purple/30">
              <div className="cyber-divider-top"></div>
              <div className="cyber-divider-glitch"></div>
              <div
                className="absolute inset-0 overflow-hidden"
                style={{
                  maskImage:
                    "linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.2))",
                }}
              >
                <div
                  className="absolute w-[200%] h-full left-[-50%] bg-grid-small-white/5"
                  style={{
                    transform: "rotate(-5deg) translateY(-30%)",
                  }}
                ></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-cyber-teal/5 blur-[80px] mix-blend-overlay"></div>
              </div>
              <div className="cyber-divider-bottom"></div>
            </div>
          </div>

          {/* Contact Section */}
          <section className="relative w-full min-h-screen pt-16">
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-gradient-to-b from-cyber-purple/30 to-cyber-black"></div>
              <div className="absolute inset-0 bg-grid-small-white/5"></div>
              <div className="parallax-bg" data-speed="0.15">
                {/* Cyberpunk circuit pattern */}
                <div
                  className="absolute inset-0 opacity-5"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23FFFFFF' fill-opacity='0.5' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                    backgroundSize: "100px 100px",
                  }}
                ></div>

                {/* Glowing corner elements */}
                <div className="absolute top-0 right-0 w-1/4 h-1/4 bg-neon-pink/5 blur-[100px] rounded-full"></div>
                <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-neon-blue/5 blur-[100px] rounded-full"></div>
              </div>
            </div>

            <TerminalSection
              title="CONTACT_TERMINAL"
              commands={contactCommands}
            >
              <Contact />
            </TerminalSection>
          </section>

          {/* Cyberpunk Divider */}
          <div className="cyber-divider" style={{ height: "3rem" }}>
            <div className="cyber-divider-content bg-gradient-to-b from-cyber-black to-black">
              <div className="cyber-divider-top"></div>
              <div
                className="absolute inset-0 bg-grid-small-white/5"
                style={{
                  transform: "skewY(-1deg)",
                  transformOrigin: "top right",
                }}
              ></div>
              <div className="cyber-divider-bottom"></div>
            </div>
          </div>

          {/* Footer with cyberpunk elements */}
          <section className="relative w-full">
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-gradient-to-b from-black to-cyber-black/90"></div>
              <div className="absolute inset-0 bg-grid-small-white/5"></div>
              {/* Digital noise texture */}
              <div className="absolute inset-0 opacity-10 mix-blend-overlay">
                <div className="w-full h-full bg-digital-noise bg-repeat"></div>
              </div>

              {/* Cyberpunk lighting effects */}
              <div className="absolute bottom-0 left-0 w-1/3 h-1/2 rounded-full bg-neon-blue/5 blur-[100px]"></div>
              <div className="absolute top-0 right-0 w-1/3 h-1/2 rounded-full bg-neon-pink/5 blur-[100px]"></div>
            </div>

            <TerminalSection title="SYS_INFO" showPrompt={false}>
              <Footer />
            </TerminalSection>
          </section>
        </main>
      </div>
    </>
  );
}
