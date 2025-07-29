"use client";

import { navItems } from "@/data";
import RecentProjects from "@/components/RecentProjects";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import NewHero from "@/components/NewHero";
import Contact from "@/components/Contact";
import BackToTop from "@/components/BackToTop";
import { EdgeNav } from "@/components/ui/EdgeNav";
import { NoiseBackground } from "@/components/ui/NoiseBackground";
import { PremiumLoader } from "@/components/ui/PremiumLoader";
import { MobileOptimized, useMobileOptimization } from "@/components/ui/MobileOptimized";
import { useEffect, useState } from "react";
import { TerminalSection } from "@/components/TerminalSection";
import ErrorBoundary from "@/components/ui/ErrorBoundary";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const { isMobile } = useMobileOptimization();

  // Enhanced scroll animations with mobile optimization
  function ScrollReveal() {
    useEffect(() => {
      // Optimized parallax for mobile
      const handleParallax = () => {
        if (isMobile) return; // Disable parallax on mobile for better performance
        
        const parallaxElements = document.querySelectorAll<HTMLElement>(".parallax-bg");
        parallaxElements.forEach((el) => {
          const scrollPosition = window.scrollY;
          const parentElement = el.parentElement;
          const parentTop = parentElement?.getBoundingClientRect().top || 0;
          const speed = el.getAttribute("data-speed") || "0.2";
          const yPos = -(parentTop + scrollPosition) * parseFloat(speed);
          el.style.transform = `translate3d(0, ${yPos}px, 0)`;
        });
      };

      // Enhanced mobile-friendly scroll reveal
      const revealOnScroll = () => {
        const elements = document.querySelectorAll(".reveal-on-scroll, .mobile-reveal");
        elements.forEach((element) => {
          const windowHeight = window.innerHeight;
          const elementTop = element.getBoundingClientRect().top;
          const elementVisible = isMobile ? windowHeight * 0.8 : 150;

          if (elementTop < windowHeight - elementVisible) {
            element.classList.add("active", "mobile-active");
          }
        });
      };

      // Use passive listeners for better mobile performance
      const scrollOptions = { passive: true };
      window.addEventListener("scroll", handleParallax, scrollOptions);
      window.addEventListener("scroll", revealOnScroll, scrollOptions);

      // Initial call
      revealOnScroll();
      if (!isMobile) handleParallax();

      return () => {
        window.removeEventListener("scroll", handleParallax);
        window.removeEventListener("scroll", revealOnScroll);
      };
    }, [isMobile]);

    return null;
  }

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <PremiumLoader onLoadingComplete={handleLoadingComplete} />;
  }

  const projectCommands = [
    "ls -la /projects",
    "cat README.md",
    "git log --oneline --graph",
    "node --version",
    "npm list --depth=0",
  ];

  const artCommands = [
    "analyze --portfolio marwen-rabai",
    "optimize --mobile-experience",
    "deploy --premium-mode",
    "status --digital-architect",
  ];

  const contactCommands = [
    "ssh user@contact-server",
    "connect --marwen-rabai",
    "send --message premium-inquiry",
    "encrypt --secure-channel",
  ];

  return (
    <ErrorBoundary>
      <MobileOptimized>
        {/* Client-side scroll effects */}
        <ScrollReveal />

        {/* Enhanced noise overlay with mobile optimization */}
        <NoiseBackground />

        {/* Optimized cyberpunk scanlines */}
        <div className="fixed inset-0 z-[5] pointer-events-none">
          <div className="absolute inset-0 bg-cyber-black/10 mix-blend-overlay"></div>
          <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]">
            {!isMobile && (
              <>
                <div
                  className="absolute w-full h-[1px] bg-neon-blue/20 animate-cyber-scanline"
                  style={{ filter: "blur(0.5px)" }}
                ></div>
                <div
                  className="absolute w-full h-[1px] bg-neon-pink/15 animate-cyber-scanline"
                  style={{ 
                    filter: "blur(0.5px)",
                    animationDelay: "5s",
                    animationDuration: "12s"
                  }}
                ></div>
              </>
            )}
          </div>
        </div>

        {/* Enhanced floating nav with mobile optimization */}
        <div className="relative z-30">
          <EdgeNav navItems={navItems} />
        </div>

        {/* Main content */}
        <div className="relative z-10">
          <main className="min-h-screen">
            {/* Hero Section */}
            <section className="min-h-screen w-full mobile-reveal">
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
            <section className="relative w-full min-h-screen pt-16 mobile-reveal">
              <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-cyber-black/90 to-black/90"></div>
                <div className="absolute inset-0 bg-grid-small-white/5"></div>
                {!isMobile && (
                  <div className="parallax-bg" data-speed="0.2">
                    <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-neon-blue/5 blur-[150px] rounded-full"></div>
                    <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-neon-pink/5 blur-[150px] rounded-full"></div>
                    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-neon-blue/50 via-transparent to-transparent"></div>
                    <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-neon-pink/50 via-transparent to-transparent"></div>
                  </div>
                )}
              </div>

              <TerminalSection
                title="PROJECT_DATABASE"
                commands={projectCommands}
              >
                <RecentProjects />
              </TerminalSection>
            </section>

            {/* About Section */}
            <section className="relative w-full min-h-screen pt-16 mobile-reveal">
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-cyber-darkblue/90 via-cyber-black/80 to-black/80"></div>
                <div className="absolute inset-0 bg-grid-small-white/5 mix-blend-overlay"></div>
                {!isMobile && (
                  <div className="parallax-bg" data-speed="0.1">
                    <div className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full bg-cyber-magenta/10 blur-[100px] mix-blend-screen"></div>
                    <div className="absolute bottom-1/4 right-1/3 w-64 h-64 rounded-full bg-cyber-teal/10 blur-[100px] mix-blend-screen"></div>
                  </div>
                )}
              </div>

              <TerminalSection title="ABOUT_DATABASE" commands={artCommands}>
                <About />
              </TerminalSection>
            </section>

            {/* Skills Section */}
            <section className="relative w-full min-h-screen pt-16 mobile-reveal">
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-cyber-darkblue/90 via-cyber-black/80 to-black/80"></div>
                <div className="absolute inset-0 bg-grid-small-white/5 mix-blend-overlay"></div>
                {!isMobile && (
                  <div className="parallax-bg" data-speed="0.1">
                    <div className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full bg-cyber-magenta/10 blur-[100px] mix-blend-screen"></div>
                    <div className="absolute bottom-1/4 right-1/3 w-64 h-64 rounded-full bg-cyber-teal/10 blur-[100px] mix-blend-screen"></div>
                  </div>
                )}
              </div>

              <TerminalSection title="SKILLS_DATABASE" commands={artCommands}>
                <Skills />
              </TerminalSection>
            </section>

            {/* Contact Section */}
            <section className="relative w-full min-h-screen pt-16 mobile-reveal">
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-cyber-purple/30 to-cyber-black"></div>
                <div className="absolute inset-0 bg-grid-small-white/5"></div>
                {!isMobile && (
                  <div className="parallax-bg" data-speed="0.15">
                    <div className="absolute top-0 right-0 w-1/4 h-1/4 bg-neon-pink/5 blur-[100px] rounded-full"></div>
                    <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-neon-blue/5 blur-[100px] rounded-full"></div>
                  </div>
                )}
              </div>

              <TerminalSection
                title="CONTACT_TERMINAL"
                commands={contactCommands}
              >
                <Contact />
              </TerminalSection>
            </section>

            {/* Footer */}
            <section className="relative w-full">
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-black to-cyber-black/90"></div>
                <div className="absolute inset-0 bg-grid-small-white/5"></div>
                {!isMobile && (
                  <>
                    <div className="absolute bottom-0 left-0 w-1/3 h-1/2 rounded-full bg-neon-blue/5 blur-[100px]"></div>
                    <div className="absolute top-0 right-0 w-1/3 h-1/2 rounded-full bg-neon-pink/5 blur-[100px]"></div>
                  </>
                )}
              </div>

              <TerminalSection title="SYS_INFO" showPrompt={false}>
                <Footer />
              </TerminalSection>
            </section>
          </main>
          
          {/* Back to Top Button */}
          <BackToTop />
        </div>
      </MobileOptimized>
    </ErrorBoundary>
  );
}
