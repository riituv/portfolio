"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Experience", id: "work-experience" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("about");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 1. Update active nav section based on viewport scrollSpy
      const scrollPosition = window.scrollY + 200; // Offset for navbar height and spacing
      
      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.id);
            break;
          }
        }
      }

      // 2. Change styling on scroll
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial run on mount
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      // Offset for sticky navbar
      const navbarHeight = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center w-full px-4 pointer-events-none">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 80, damping: 15 }}
        className={cn(
          "pointer-events-auto flex items-center justify-between w-full max-w-4xl px-3 md:px-6 py-2 rounded-full border bg-background/60 backdrop-blur-lg shadow-lg transition-all duration-300",
          isScrolled ? "border-border/80 shadow-indigo-500/5 bg-background/70" : "border-border/40 shadow-none bg-background/40"
        )}
      >
        {/* Brand/Logo */}
        <a
          href="#about"
          onClick={(e) => handleNavClick(e, "about")}
          className="flex items-center gap-1.5 font-[family-name:var(--font-playfair-display)] font-bold text-base md:text-lg tracking-tight hover:opacity-85 transition-opacity"
        >
          <Sparkles className="size-4 text-indigo-500 animate-pulse" />
          <span className="bg-gradient-to-r from-indigo-500 to-teal-500 bg-clip-text text-transparent">
            Ritu Vyas
          </span>
        </a>

        {/* Navigation links */}
        <div className="flex items-center gap-1 md:gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;

            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className="relative px-3 py-1.5 text-xs md:text-sm font-semibold tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavBg"
                    className="absolute inset-0 bg-primary rounded-full shadow-md"
                    transition={{ type: "spring", stiffness: 220, damping: 20 }}
                  />
                )}
                <span className={cn("relative z-10", isActive ? "text-primary-foreground font-semibold" : "")}>
                  {link.label}
                </span>
              </a>
            );
          })}
        </div>

        {/* CTA Button */}
        <a
          href="#contact"
          onClick={(e) => handleNavClick(e, "contact")}
          className="hidden sm:inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs font-semibold tracking-wide transition-colors duration-200"
        >
          Hire Me
        </a>
      </motion.nav>
    </div>
  );
}
