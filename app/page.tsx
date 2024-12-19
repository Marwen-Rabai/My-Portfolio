import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/data";
import ArtList from "@/components/ArtList";
import Footer from "@/components/Footer";
import { TracingBeam } from "@/components/ui/TracingBeam";
import { BackgroundBeams } from "@/components/ui/BGBeams";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 z-0">
        <BackgroundBeams />
      </div>
      
      {/* Main content */}
      <TracingBeam className="relative z-10 w-full border border-white-100 border-opacity-40">
        <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
          <FloatingNav navItems={navItems} />
          <Hero />
          <RecentProjects />
          <ArtList />
          {/* <Experience /> */}
          <Footer />
        </main>
      </TracingBeam>
    </div>
  );
}