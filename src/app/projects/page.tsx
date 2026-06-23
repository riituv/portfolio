"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ExternalLink, Code2, Globe } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const MotionCard = motion(Card);

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

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 14,
    },
  },
} as const;

const projectsData = [
  {
    title: "OmniSearch Engine",
    category: "AI/ML",
    description: "An intelligent semantic search engine utilizing hybrid sparse-dense vector retrieval. Connects seamlessly with multiple cloud document repositories, generates embeddings on upload, and delivers real-time semantic query matching in milliseconds.",
    tags: ["Next.js", "FastAPI", "Pinecone", "OpenAI", "Tailwind CSS", "Docker"],
    githubUrl: "https://github.com",
    liveUrl: "https://demo.com",
  },
  {
    title: "Taskify Dashboard",
    category: "Frontend",
    description: "A collaborative Kanban-style team management application featuring multi-user workspaces, smooth drag-and-drop workspace columns, real-time WebSocket syncing, and comprehensive project activity dashboards.",
    tags: ["React 19", "TypeScript", "Framer Motion", "Node.js", "Socket.io", "PostgreSQL"],
    githubUrl: "https://github.com",
    liveUrl: "https://demo.com",
  },
  {
    title: "Aura UI Library",
    category: "Frontend",
    description: "A headless, minimalist React UI component library strictly compliant with WCAG accessibility guidelines. Provides seamless theme customization capabilities, screen-reader optimizations, and keyboard navigation support.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Radix UI", "Vite", "Storybook"],
    githubUrl: "https://github.com",
    liveUrl: "https://demo.com",
  },
  {
    title: "LogiRoute Engine",
    category: "Backend",
    description: "A high-efficiency route optimization service designed for urban logistics. Resolves complex vehicle routing problems with tight time window constraints using custom heuristics, returning optimal coordinate paths.",
    tags: ["Python", "Go", "PostgreSQL", "Google OR-Tools", "Redis", "Fastify"],
    githubUrl: "https://github.com",
    liveUrl: "https://demo.com",
  },
];

const categories = ["All", "Frontend", "Backend", "AI/ML"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = projectsData.filter((project) => {
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
                My Creations
              </span>
            </div>
            <h2 className="font-[family-name:var(--font-playfair-display)] font-bold text-4xl md:text-5xl lg:text-6xl text-foreground tracking-tight">
              Featured Projects
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-base md:text-lg">
              A detailed catalog of full-stack engineering, interactive frontend applications, and machine learning utilities.
            </p>
          </div>

          {/* Filtering Chips Row */}
          <div className="flex justify-center items-center">
            <div className="flex flex-wrap gap-2 p-1.5 rounded-full border border-border bg-card/40 backdrop-blur-md shadow-md">
              {categories.map((cat) => {
                const isActive = activeFilter === cat;

                return (
                  <button
                    key={cat}
                    onClick={() => setActiveFilter(cat)}
                    className="relative px-5 py-2 text-sm font-semibold tracking-wide rounded-full select-none cursor-pointer text-muted-foreground hover:text-foreground transition-colors duration-200"
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
              {filteredProjects.map((project, idx) => (
                <MotionCard
                  key={project.title}
                  layout
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  viewport={{ once: true }}
                  className="flex flex-col p-6 md:p-8 rounded-2xl border-border bg-card/40 hover:border-indigo-500/30 hover:bg-card/60 backdrop-blur-md shadow-xl transition-all duration-300 h-full justify-between"
                >
                  <div className="space-y-4">
                    {/* Top Row: Category tag and Action Links */}
                    <div className="flex justify-between items-center">
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
                      
                      <div className="flex items-center gap-3">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                          aria-label={`View ${project.title} code source on GitHub`}
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
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                          aria-label={`View ${project.title} live demo`}
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
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}