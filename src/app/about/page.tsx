"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  ExternalLink
} from "lucide-react";
import { Button } from "@/components/ui/button";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 70,
      damping: 14,
    },
  },
} as const;

export default function About() {
  return (
    <section id="about" className="relative w-full py-20 md:py-28 overflow-hidden bg-background">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 left-0 -translate-x-1/2 w-96 h-96 rounded-full bg-indigo-500/10 dark:bg-indigo-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 translate-x-1/2 w-96 h-96 rounded-full bg-teal-500/10 dark:bg-teal-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-20"
        >
          {/* Main Grid: Info and Photo */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left side: Text Details */}
            <motion.div variants={itemVariants} className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-muted/40 backdrop-blur-sm">
                <Sparkles className="size-4 text-amber-500 animate-pulse" />
                <span className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">
                  About Me
                </span>
              </div>

              <h2 className="font-[family-name:var(--font-playfair-display)] font-bold text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight tracking-tight">
                Crafting digital experiences with <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-teal-500 bg-clip-text text-transparent">code & care</span>.
              </h2>

              <p className="text-lg text-primary/80 font-medium">
                Hello there! I&apos;m Ritu Vyas, a Software Engineer.
              </p>

              <div className="space-y-4 text-muted-foreground leading-relaxed text-base md:text-lg">
                <p>
                  I specialize in designing and engineering high-performance web applications that merge robust backends with pixel-perfect, highly responsive user experiences. My development philosophy values clean architecture, performance optimization, and accessible design systems.
                </p>
                <p>
                  I enjoy solving complex programmatic problems and translating them into simple, intuitive user interfaces. I look at coding as a craft, where the quality of the codebase under the hood is just as critical as the polish on the final visual layer.
                </p>
                <p>
                  When I&apos;m not building, you can find me experimenting with new frameworks (like Tailwind v4 and React 19), reading tech blogs, contributing to open source, or refining UI micro-interactions.
                </p>
              </div>

              {/* Action Buttons and Socials */}
              <div className="pt-4 flex flex-wrap items-center gap-4 md:gap-6">
                <Button size="lg" className="rounded-full shadow-lg hover:shadow-indigo-500/10 transition-all duration-300 gap-2 cursor-pointer">
                  <span>Get In Touch</span>
                  <ArrowRight className="size-4 group-hover/button:translate-x-1 transition-transform" />
                </Button>
                
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full border border-border bg-card hover:bg-muted text-muted-foreground hover:text-foreground transition-colors duration-300"
                    aria-label="GitHub Profile"
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
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full border border-border bg-card hover:bg-muted text-muted-foreground hover:text-foreground transition-colors duration-300"
                    aria-label="LinkedIn Profile"
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
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full border border-border bg-card hover:bg-muted text-muted-foreground hover:text-foreground transition-colors duration-300"
                    aria-label="Twitter Profile"
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
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right side: Modern Avatar Frame */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-5 flex justify-center lg:justify-end"
            >
              <div className="relative group w-full max-w-[400px] aspect-square">
                {/* Decorative glowing gradient card behind the avatar */}
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-teal-500 opacity-30 blur-xl group-hover:opacity-45 transition duration-500" />
                
                {/* The main container */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden border border-border bg-card/40 p-3 backdrop-blur-md shadow-2xl flex items-center justify-center">
                  <div className="relative w-full h-full rounded-xl overflow-hidden bg-muted/30">
                    <Image
                      src="/developer_avatar.png"
                      alt="Ritu Vyas - Tech Developer Avatar"
                      fill
                      sizes="(max-w-7xl) 100vw, 400px"
                      priority
                      className="object-cover transition duration-500 scale-100 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>


        </motion.div>
      </div>
    </section>
  );
}