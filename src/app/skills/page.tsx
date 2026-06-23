"use client";

import { motion } from "framer-motion";
import { Code2, Terminal, Cpu, Layers, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const MotionCard = motion(Card);

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
      type: "spring",
      stiffness: 70,
      damping: 14,
    },
  },
} as const;

const skillCategories = [
  {
    title: "Languages",
    icon: <Code2 className="size-5 text-indigo-500 dark:text-indigo-400" />,
    skills: ["TypeScript", "JavaScript", "Python", "Go", "HTML5 & CSS3", "SQL"],
  },
  {
    title: "Frontend Development",
    icon: <Layers className="size-5 text-cyan-500 dark:text-cyan-400" />,
    skills: ["React 19", "Next.js 16", "Tailwind CSS v4", "Framer Motion", "Redux Toolkit", "Base UI"],
  },
  {
    title: "Backend & Systems",
    icon: <Cpu className="size-5 text-emerald-500 dark:text-emerald-400" />,
    skills: ["Node.js", "Express", "Fastify", "PostgreSQL", "MongoDB", "REST APIs", "GraphQL"],
  },
  {
    title: "Tools & DevOps",
    icon: <Terminal className="size-5 text-amber-500 dark:text-amber-400" />,
    skills: ["Git & GitHub", "Docker", "AWS", "CI/CD Pipelines", "Vercel", "Figma"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative w-full py-20 md:py-28 overflow-hidden bg-background">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-96 h-96 rounded-full bg-indigo-500/10 dark:bg-indigo-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 w-96 h-96 rounded-full bg-teal-500/10 dark:bg-teal-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-16"
        >
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-muted/40 backdrop-blur-sm">
              <Sparkles className="size-4 text-amber-500 animate-pulse" />
              <span className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">
                My Arsenal
              </span>
            </div>
            <h2 className="font-[family-name:var(--font-playfair-display)] font-bold text-4xl md:text-5xl lg:text-6xl text-foreground tracking-tight">
              Technical Expertise
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-base md:text-lg">
              Here are the core languages, frameworks, and workflows I use to bring ideas to life.
            </p>
          </div>

          {/* Grid of Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((cat) => (
              <MotionCard
                key={cat.title}
                variants={itemVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-card/30 backdrop-blur-sm hover:border-indigo-500/30 hover:bg-card/50 transition-all duration-300 flex flex-col h-full border-border/80"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-muted border border-border/40">
                    {cat.icon}
                  </div>
                  <h4 className="font-semibold text-foreground text-sm tracking-wide uppercase">
                    {cat.title}
                  </h4>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {cat.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-muted/60 text-muted-foreground border border-border/50 hover:border-indigo-500/20 hover:text-foreground hover:bg-muted transition-colors duration-200 cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </MotionCard>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
