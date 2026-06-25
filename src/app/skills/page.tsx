"use client";

import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { Sparkles } from "lucide-react";
import { Card } from '@/components/ui/card'
import { skillsData } from "@/data/data";
import { TechLogo } from "@/components/TechLogo";

const MotionCard = motion.create(Card);

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

const categoryThemes: Record<
  string,
  {
    borderClass: string
    checkClass: string
  }
> = {
  Languages: {
    borderClass: 'border-t-[3px] border-t-indigo-500',
    checkClass: 'text-indigo-500 dark:text-indigo-400',
  },
  'Frontend Development': {
    borderClass: 'border-t-[3px] border-t-cyan-500',
    checkClass: 'text-cyan-500 dark:text-cyan-400',
  },
  'Backend & Systems': {
    borderClass: 'border-t-[3px] border-t-emerald-500',
    checkClass: 'text-emerald-500 dark:text-emerald-400',
  },
  'Tools & DevOps': {
    borderClass: 'border-t-[3px] border-t-amber-500',
    checkClass: 'text-amber-500 dark:text-amber-400',
  },
}

const defaultTheme = {
  borderClass: 'border-t-[3px] border-t-indigo-500',
  checkClass: 'text-indigo-500 dark:text-indigo-400',
}

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
                {skillsData.badge}
              </span>
            </div>
            <h2 className="font-[family-name:var(--font-playfair-display)] font-bold text-4xl md:text-5xl lg:text-6xl text-foreground tracking-tight">
              {skillsData.heading}
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-base md:text-lg">
              {skillsData.description}
            </p>
          </div>

          {/* Grid of Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillsData.categories.map((cat) => {
              const IconComponent = (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[cat.iconName] || LucideIcons.HelpCircle;
              const theme = categoryThemes[cat.title] || defaultTheme

              return (
                <MotionCard
                  key={cat.title}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className={`bg-card/30 backdrop-blur-sm border border-border/80 hover:border-indigo-500/30 hover:bg-card/50 transition-all duration-300 flex flex-col h-full rounded-2xl p-6 shadow-lg ${theme.borderClass}`}
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-muted border border-border/40 flex-shrink-0">
                      <IconComponent className={`size-5 ${cat.iconColorClass}`} />
                    </div>
                    <h4 className="font-bold text-foreground text-xs uppercase tracking-wider">
                      {cat.title}
                    </h4>
                  </div>

                  {/* Divider */}
                  <div className="h-[1px] w-full bg-border/45 my-4" />

                  {/* Skills List (Perfectly Aligned) */}
                  <ul className="space-y-3.5 flex-grow flex flex-col justify-start">
                    {cat.skills.map((skill) => (
                      <li
                        key={skill}
                        className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 cursor-default"
                      >
                        <TechLogo name={skill} className="size-4 flex-shrink-0" />
                        <span className="font-medium">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </MotionCard>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
