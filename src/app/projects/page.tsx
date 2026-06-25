"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projectsData } from "@/data/data";
import { cn } from "@/lib/utils";

const MotionCard = motion.create(Card);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
} as const;

const leftCardVariants = {
  hidden: {
    opacity: 0,
    x: 80,
    y: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 15,
    },
  },
} as const;

const rightCardVariants = {
  hidden: {
    opacity: 0,
    x: -80,
    y: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 15,
    },
  },
} as const;

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = projectsData.projects.filter((project) => {
    if (activeFilter === "All") return true;
    return project.category === activeFilter;
  });

  return (
    <section id="projects" className="relative w-full py-20 md:py-28 overflow-hidden bg-background">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-0 -translate-x-1/2 w-96 h-96 rounded-full bg-teal-500/10 dark:bg-teal-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 translate-x-1/2 w-96 h-96 rounded-full bg-indigo-500/10 dark:bg-indigo-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12"
        >
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-muted/40 backdrop-blur-sm">
              <Sparkles className="size-4 text-amber-500 animate-pulse" />
              <span className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">
                {projectsData.badge}
              </span>
            </div>
            <h2 className="font-[family-name:var(--font-playfair-display)] font-bold text-4xl md:text-5xl lg:text-6xl text-foreground tracking-tight">
              {projectsData.heading}
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-base md:text-lg">
              {projectsData.description}
            </p>
          </div>

          {/* Filtering Chips Row */}
          <div className="flex justify-center items-center w-full max-w-full overflow-hidden">
            <div className="flex flex-nowrap gap-1.5 sm:gap-2 p-1.5 rounded-full border border-border bg-card/40 backdrop-blur-md shadow-md overflow-x-auto max-w-full scrollbar-none">
              {projectsData.categories.map((cat) => {
                const isActive = activeFilter === cat;

                return (
                  <button
                    key={cat}
                    onClick={() => setActiveFilter(cat)}
                    className="relative px-4 py-1.5 sm:px-5 sm:py-2 text-xs sm:text-sm font-semibold tracking-wide rounded-full select-none cursor-pointer text-muted-foreground hover:text-foreground transition-colors duration-200 shrink-0"
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeFilterBg"
                        className="absolute inset-0 bg-primary rounded-full shadow-lg"
                        transition={{ type: "spring", stiffness: 220, damping: 20 }}
                      />
                    )}
                    <span className={`relative z-10 ${isActive ? "text-primary-foreground font-semibold" : ""}`}>
                      {cat}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Projects Card Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, idx) => {
                const isLeft = idx % 2 === 0;
                return (
                  <MotionCard
                    key={project.title}
                    layout
                    variants={isLeft ? leftCardVariants : rightCardVariants}
                    initial="hidden"
                    whileInView="visible"
                    exit="hidden"
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex flex-col p-6 md:p-8 rounded-2xl border-border bg-card/40 hover:border-indigo-500/30 hover:bg-card/60 backdrop-blur-md shadow-xl transition-colors duration-300 h-full justify-between"
                  >
                  <div className="space-y-4">
                    {/* Top Row: Category tag and Action Links */}
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <Badge
                          variant="secondary"
                          className={`text-[10px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full border ${
                            project.category === "AI/ML"
                              ? "bg-purple-500/10 text-purple-500 border-purple-500/20"
                              : project.category === "Frontend"
                              ? "bg-cyan-500/10 text-cyan-500 border-cyan-500/20"
                              : "bg-emerald-500/10 text-emerald-500 border-emerald-500/20"
                          }`}
                        >
                          {project.category}
                        </Badge>
                        {project.isClientProject && (
                          <Badge
                            variant="outline"
                            className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full border bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20"
                          >
                            Client Project
                          </Badge>
                        )}
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <a
                          href={project.githubUrl || undefined}
                          target={project.githubUrl ? "_blank" : undefined}
                          rel={project.githubUrl ? "noopener noreferrer" : undefined}
                          onClick={(e) => !project.githubUrl && e.preventDefault()}
                          className={cn(
                            "transition-colors duration-200",
                            project.githubUrl
                              ? "text-muted-foreground hover:text-foreground cursor-pointer"
                              : "text-muted-foreground/30 cursor-not-allowed pointer-events-none"
                          )}
                          aria-label={project.githubUrl ? `View ${project.title} code source on GitHub` : "GitHub repository not available"}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="size-5"
                          >
                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                            <path d="M9 18c-4.51 2-5-2-7-2" />
                          </svg>
                        </a>
                        <a
                          href={project.liveUrl || undefined}
                          target={project.liveUrl ? "_blank" : undefined}
                          rel={project.liveUrl ? "noopener noreferrer" : undefined}
                          onClick={(e) => !project.liveUrl && e.preventDefault()}
                          className={cn(
                            "transition-colors duration-200",
                            project.liveUrl
                              ? "text-muted-foreground hover:text-foreground cursor-pointer"
                              : "text-muted-foreground/30 cursor-not-allowed pointer-events-none"
                          )}
                          aria-label={project.liveUrl ? `View ${project.title} live demo` : "Live demo not available"}
                        >
                          <ExternalLink className="size-5" />
                        </a>
                      </div>
                    </div>

                    {/* Title & Description */}
                    <div className="space-y-2">
                      <h3 className="font-[family-name:var(--font-playfair-display)] font-bold text-2xl text-foreground">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Tech stack badge tags */}
                  <div className="flex flex-wrap gap-2 mt-6">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="px-2.5 py-1 text-xs rounded-md bg-muted/60 text-muted-foreground border border-border/50 hover:bg-muted transition-colors duration-200"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </MotionCard>
              );
            })}
          </AnimatePresence>
        </motion.div>
        </motion.div>
      </div>
    </section>
  );
}