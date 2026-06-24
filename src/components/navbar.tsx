"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles, Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";
import { aboutData } from "@/data/data";

const navLinks = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Experience", id: "work-experience" },
  { label: "Projects", id: "projects" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("about");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const handle = requestAnimationFrame(() => {
      setMounted(true);
      const localTheme = localStorage.getItem("theme") as "light" | "dark" | null;
      const initialTheme = localTheme === "light" ? "light" : "dark";
      setTheme(initialTheme);
    });
    return () => cancelAnimationFrame(handle);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

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
          className="flex items-center gap-1 sm:gap-1.5 font-[family-name:var(--font-playfair-display)] font-bold text-sm sm:text-base md:text-lg tracking-tight hover:opacity-85 transition-opacity shrink-0"
        >
          <Sparkles className="size-3.5 sm:size-4 text-indigo-500 animate-pulse" />
          <span className="bg-gradient-to-r from-indigo-500 to-teal-500 bg-clip-text text-transparent">
            {aboutData.name}
          </span>
        </a>

        {/* Navigation links */}
        <div className="flex items-center gap-0.5 sm:gap-2 overflow-x-auto scrollbar-none flex-nowrap max-w-[48%] xs:max-w-[55%] sm:max-w-none">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;

            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className="relative px-2 py-1 sm:px-3 sm:py-1.5 text-[11px] sm:text-xs md:text-sm font-semibold tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-200 shrink-0"
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

        {/* Theme Toggle & CTA Button */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex items-center justify-center p-2 rounded-full border border-border bg-card/40 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors duration-200 cursor-pointer shadow-sm"
            aria-label="Toggle theme"
          >
            {!mounted ? (
              <div className="size-4" />
            ) : theme === "dark" ? (
              <Sun className="size-4 text-amber-500" />
            ) : (
              <Moon className="size-4 text-indigo-500" />
            )}
          </button>

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "contact")}
            className="hidden sm:inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs font-semibold tracking-wide transition-colors duration-200"
          >
            Hire Me
          </a>
        </div>
      </motion.nav>
    </div>
  );
}
