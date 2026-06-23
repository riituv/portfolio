"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, Sparkles, Building2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const MotionCard = motion(Card);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
} as const;

const cardVariants = (index: number) => ({
  hidden: {
    opacity: 0,
    x: index % 2 === 0 ? -50 : 50,
    y: 20,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 15,
    },
  },
} as const);


const experiences = [
  {
    role: "Senior Software Engineer",
    company: "TechFlow Solutions",
    location: "San Francisco, CA (Hybrid)",
    duration: "2024 - Present",
    description: [
      "Led the transition of a legacy React dashboard to a modern Next.js App Router setup, improving initial page load speed by 35%.",
      "Designed and deployed a Redis-backed caching layer for GraphQL query endpoints, reducing API response times by up to 50%.",
      "Mentored a team of 4 junior developers and established standardized linting, styling guidelines, and Git branch workflows.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Innovate Labs",
    location: "New York, NY (Remote)",
    duration: "2022 - 2024",
    description: [
      "Developed high-volume PostgreSQL database schemas and optimized slow SQL queries, saving over $12k/year in cloud database costs.",
      "Collaborated closely with UX designers to implement a shared component library built on top of Radix UI and Tailwind CSS.",
      "Integrated third-party payment processing gateways (Stripe) and implemented robust user subscription workflows.",
    ],
  },
  {
    role: "Frontend Developer Intern",
    company: "PixelCraft Media",
    location: "Boston, MA (On-site)",
    duration: "2021 - 2022",
    description: [
      "Assisted in rebuilding the corporate website using React, contributing to a 20% increase in inbound sales leads.",
      "Wrote comprehensive unit and integration tests using Jest and React Testing Library, boosting code coverage to 85%.",
      "Optimized assets, code-splitting modules, and lazy-loading components to bring Lighthouse performance scores from 70 to 95+.",
    ],
  },
];

export default function WorkExperience() {
  return (
    <section id="work-experience" className="relative w-full py-20 md:py-28 overflow-hidden bg-background">
      {/* Decorative ambient glow background */}
      <div className="absolute top-1/3 right-0 translate-x-1/2 w-96 h-96 rounded-full bg-purple-500/10 dark:bg-purple-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 -translate-x-1/2 w-96 h-96 rounded-full bg-indigo-500/10 dark:bg-indigo-500/5 blur-3xl pointer-events-none" />

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
                My Journey
              </span>
            </div>
            <h2 className="font-[family-name:var(--font-playfair-display)] font-bold text-4xl md:text-5xl lg:text-6xl text-foreground tracking-tight">
              Work Experience
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-base md:text-lg">
              A timeline of my professional career, technical growth, and contributions in software engineering.
            </p>
          </div>

          {/* Timeline Container */}
          <div className="relative mt-20">
            {/* The Vertical Line */}
            {/* On desktop: centered (left-1/2). On mobile: left-4 */}
            <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-indigo-500 via-purple-500 to-teal-500 lg:-translate-x-1/2" />

            {/* Experiences list */}
            <div className="space-y-12 lg:space-y-8">
              {experiences.map((exp, idx) => {
                const isLeft = idx % 2 === 0;

                return (
                  <div
                    key={`${exp.company}-${idx}`}
                    className="relative flex flex-col lg:flex-row items-stretch w-full"
                  >
                    {/* Centered Timeline Dot */}
                    {/* On desktop: centers relative to line. On mobile: left-4 */}
                    <div className="absolute left-4 lg:left-1/2 top-6 -translate-x-1/2 size-4 rounded-full border-4 border-indigo-500 bg-background z-20 shadow-md shadow-indigo-500/20" />

                    {/* Timeline Left side slot (empty or contains card depending on layout) */}
                    {/* On desktop: 50% width. On mobile: hidden or padding slot */}
                    <div className="w-full lg:w-1/2 pl-12 lg:pl-0 lg:pr-12 flex flex-col justify-center order-2 lg:order-1">
                      {isLeft ? (
                         <MotionCard
                          variants={cardVariants(idx)}
                          viewport={{ once: true }}
                          whileHover={{ y: -4, transition: { duration: 0.2 } }}
                          className="w-full p-6 rounded-2xl border-border bg-card/40 hover:border-indigo-500/30 hover:bg-card/60 backdrop-blur-md shadow-xl transition-all duration-300 text-left lg:text-right"
                        >
                          <Badge
                            variant="secondary"
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary mb-3 uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/20"
                          >
                            <Calendar className="size-3" />
                            {exp.duration}
                          </Badge>

                          <h3 className="text-xl font-bold text-foreground tracking-tight">
                            {exp.role}
                          </h3>
                          
                          <div className="flex items-center gap-2 mt-1 mb-4 text-muted-foreground text-sm lg:justify-end">
                            <span className="flex items-center gap-1">
                              <Building2 className="size-3.5" />
                              {exp.company}
                            </span>
                            <span>•</span>
                            <span className="flex items-center gap-1">
                              <MapPin className="size-3.5" />
                              {exp.location}
                            </span>
                          </div>

                          <ul className="space-y-2 text-muted-foreground text-sm lg:text-right leading-relaxed list-none">
                            {exp.description.map((bullet, bulletIdx) => (
                              <li key={bulletIdx} className="flex gap-2 items-start lg:justify-end">
                                <span className="order-2 lg:order-1 lg:ml-2 text-indigo-500 dark:text-indigo-400 font-bold select-none">•</span>
                                <span className="order-1 lg:order-2">{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        </MotionCard>
                      ) : (
                        // Placeholder slot for alternating side on desktop
                        <div className="hidden lg:block w-full" />
                      )}
                    </div>

                    {/* Timeline Right side slot (empty or contains card depending on layout) */}
                    <div className="w-full lg:w-1/2 pl-12 lg:pl-12 flex flex-col justify-center order-3 lg:order-2">
                      {!isLeft ? (
                         <MotionCard
                          variants={cardVariants(idx)}
                          viewport={{ once: true }}
                          whileHover={{ y: -4, transition: { duration: 0.2 } }}
                          className="w-full p-6 rounded-2xl border-border bg-card/40 hover:border-teal-500/30 hover:bg-card/60 backdrop-blur-md shadow-xl transition-all duration-300 text-left"
                        >
                          <Badge
                            variant="secondary"
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary mb-3 uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-teal-500/10 border border-teal-500/20"
                          >
                            <Calendar className="size-3" />
                            {exp.duration}
                          </Badge>

                          <h3 className="text-xl font-bold text-foreground tracking-tight">
                            {exp.role}
                          </h3>
                          
                          <div className="flex items-center gap-2 mt-1 mb-4 text-muted-foreground text-sm">
                            <span className="flex items-center gap-1">
                              <Building2 className="size-3.5" />
                              {exp.company}
                            </span>
                            <span>•</span>
                            <span className="flex items-center gap-1">
                              <MapPin className="size-3.5" />
                              {exp.location}
                            </span>
                          </div>

                          <ul className="space-y-2 text-muted-foreground text-sm leading-relaxed list-none">
                            {exp.description.map((bullet, bulletIdx) => (
                              <li key={bulletIdx} className="flex gap-2 items-start">
                                <span className="text-teal-500 dark:text-teal-400 font-bold select-none">•</span>
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        </MotionCard>
                      ) : (
                        // Placeholder slot for alternating side on desktop
                        <div className="hidden lg:block w-full" />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}