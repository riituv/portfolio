import Navbar from "@/components/navbar";
import About from "./about/page";
import Skills from "./skills/page";
import WorkExperience from "./workExperience/page";
import Projects from "./projects/page";
import Contact from "./contact/page";

export default function Home() {
  return (
    <main className="w-full relative min-h-screen bg-background">
      {/* Floating Sticky Navigation Bar */}
      <Navbar />

      {/* Portfolio Sections */}
      <div className="flex flex-col">
        <About />
        <Skills />
        <WorkExperience />
        <Projects />
        <Contact />
      </div>


    </main>
  );
}
