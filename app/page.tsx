"use client";

import { useEffect, useState } from "react";
import { Hero } from "@/components/beranda";
import { About } from "@/components/about";
import { Projects } from "@/components/project";
import { CV } from "@/components/cv";
import { Kontak } from "@/components/kontak";

export default function Home() {
  const [activeSection, setActiveSection] = useState("beranda");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["beranda", "about", "project", "cv", "kontak"];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }

      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
        setActiveSection("kontak");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClass = (id: string) =>
    `relative px-1 pb-1 transition-all after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[3px] after:bg-[#111111] after:rounded-full after:transition-all ${
      activeSection === id
        ? "text-[#111111] font-bold after:w-full"
        : "text-[#555555] hover:text-[#111111] after:w-0"
    }`;

  return (
    <div className="min-h-screen bg-[#F5F5F7] text-[#111111] font-sans selection:bg-[#111111] selection:text-[#F5F5F7] scroll-smooth relative">
      {/* Background Big Text */}
      <div className="fixed inset-0 pointer-events-none z-0 flex items-center justify-center overflow-hidden">
        <span className="font-black leading-none tracking-normal md:tracking-wider text-[#E6E6E8]/60 text-[35vw] md:text-[40vw] select-none opacity-80">
          TRY
        </span>
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#F5F5F7]/80 border-b border-[#E5E5E7]/60">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="w-8 h-8 rounded-lg bg-[#111111] text-[#F5F5F7] flex items-center justify-center font-bold text-sm tracking-tighter shadow-sm">
              T
            </span>
            <span className="font-semibold text-base tracking-tight">
              TryyY
            </span>
          </div>
            <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
              <a href="#beranda" className={navLinkClass("beranda")}>Beranda</a>
              <a href="#about" className={navLinkClass("about")}>About</a>
              <a href="#project" className={navLinkClass("project")}>Project</a>
              <a href="#cv" className={navLinkClass("cv")}>CV</a>
              <a href="#kontak" className={navLinkClass("kontak")}>Kontak</a>
            </div>
          <div>
            <a
              href="#kontak"
              className="text-xs font-medium uppercase tracking-wider px-4 py-2 rounded-full bg-[#111111] text-[#F5F5F7] hover:bg-black transition-all shadow-sm"
            >
              Let's Talk
            </a>
          </div>
        </div>
      </nav>

      {/* Content Container */}
      <div className="relative z-10">
        {/* Main Sections */}
        <Hero />
        <About />
        <Projects />
        <CV />
        <Kontak />

        {/* Footer */}
        <footer className="border-t border-[#E5E5E7] bg-white/50 backdrop-blur-sm py-12">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#777777]">
            <div className="flex items-center space-x-2">
              <span className="font-semibold text-[#111111]">TryyY</span>
              <span>© {new Date().getFullYear()} All rights reserved.</span>
            </div>
            <div className="flex items-center space-x-6">
              <a href="#beranda" className="hover:text-[#111111] transition-colors">Beranda</a>
              <a href="#about" className="hover:text-[#111111] transition-colors">About</a>
              <a href="#project" className="hover:text-[#111111] transition-colors">Project</a>
              <a href="#cv" className="hover:text-[#111111] transition-colors">CV</a>
              <a href="#kontak" className="hover:text-[#111111] transition-colors">Kontak</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
