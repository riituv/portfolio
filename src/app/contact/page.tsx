"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  MapPin,
  Clock,
  Sparkles,
  Send,
  CheckCircle,
  AlertCircle,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactData } from "@/data/data";

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

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionError, setSubmissionError] = useState("");

  const validate = () => {
    const newErrors = { name: "", email: "", message: "" };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email.";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter your message.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on type
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmissionError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        setSubmissionError(data.error || "Failed to send message. Please try again.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      setSubmissionError("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", message: "" });
    setErrors({ name: "", email: "", message: "" });
    setIsSubmitted(false);
    setSubmissionError("");
  };

  return (
    <section id="contact" className="relative w-full py-20 md:py-28 overflow-hidden bg-background">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-96 h-96 rounded-full bg-teal-500/10 dark:bg-teal-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 w-96 h-96 rounded-full bg-indigo-500/10 dark:bg-indigo-500/5 blur-3xl pointer-events-none" />

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
                {contactData.badge}
              </span>
            </div>
            <h2 className="font-[family-name:var(--font-playfair-display)] font-bold text-4xl md:text-5xl lg:text-6xl text-foreground tracking-tight">
              {contactData.heading}
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-base md:text-lg">
              {contactData.description}
            </p>
          </div>

          {/* Contact Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 lg:items-stretch items-start">
            {/* Left: Contact Info Info-blocks */}
            <motion.div variants={itemVariants} className="lg:col-span-5 flex flex-col justify-between h-full gap-8">
              <div className="space-y-4">
                <h3 className="font-[family-name:var(--font-playfair-display)] font-bold text-2xl md:text-3xl text-foreground">
                  {contactData.infoTitle}
                </h3>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  {contactData.infoDescription}
                </p>
              </div>

              {/* Info Blocks */}
              <div className="flex flex-col justify-between gap-4 flex-grow">
                {/* Email card */}
                <div className="p-5 rounded-2xl border border-border bg-card/30 backdrop-blur-sm flex items-start gap-4 hover:border-indigo-500/20 hover:bg-card/50 transition-all duration-300">
                  <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-500">
                    <Mail className="size-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm uppercase tracking-wider text-muted-foreground">
                      Email Me Directly
                    </h4>
                    <a
                      href={`mailto:${contactData.details.email}`}
                      className="text-foreground font-semibold hover:text-indigo-500 transition-colors duration-200 block mt-1"
                    >
                      {contactData.details.email}
                    </a>
                  </div>
                </div>

                {/* Location card */}
                <div className="p-5 rounded-2xl border border-border bg-card/30 backdrop-blur-sm flex items-start gap-4 hover:border-indigo-500/20 hover:bg-card/50 transition-all duration-300">
                  <div className="p-3 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-500">
                    <MapPin className="size-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm uppercase tracking-wider text-muted-foreground">
                      Location
                    </h4>
                    <p className="text-foreground font-semibold mt-1">
                      {contactData.details.location}
                    </p>
                  </div>
                </div>

                {/* Response time card */}
                {contactData.details.responseTime && (
                  <div className="p-5 rounded-2xl border border-border bg-card/30 backdrop-blur-sm flex items-start gap-4 hover:border-indigo-500/20 hover:bg-card/50 transition-all duration-300">
                    <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-500">
                      <Clock className="size-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm uppercase tracking-wider text-muted-foreground">
                        Response Time
                      </h4>
                      <p className="text-foreground font-semibold mt-1">
                        {contactData.details.responseTime}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Right: The Glassmorphic Contact Form */}
            <motion.div variants={itemVariants} className="lg:col-span-7 h-full">
              <div className="relative p-6 md:p-8 rounded-2xl border border-border bg-card/40 backdrop-blur-md shadow-2xl overflow-hidden h-full flex flex-col">
                {/* Decorative border glows */}
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-48 h-48 rounded-full bg-indigo-500/10 blur-2xl pointer-events-none" />

                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.form
                      key="contact-form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-6 relative z-10 flex-grow flex flex-col h-full"
                      noValidate
                    >
                      {/* Name input */}
                      <div className="space-y-2">
                        <label
                          htmlFor="name"
                          className="block text-sm font-semibold text-foreground"
                        >
                          Name
                        </label>
                        <Input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Ritu Vyas"
                          aria-invalid={!!errors.name}
                          className="h-11 px-4 py-3 rounded-xl bg-background/50"
                        />
                        {errors.name && (
                          <div className="flex items-center gap-1.5 text-xs text-destructive mt-1.5 font-medium animate-fadeIn">
                            <AlertCircle className="size-3.5" />
                            <span>{errors.name}</span>
                          </div>
                        )}
                      </div>

                      {/* Email input */}
                      <div className="space-y-2">
                        <label
                          htmlFor="email"
                          className="block text-sm font-semibold text-foreground"
                        >
                          Email
                        </label>
                        <Input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder={contactData.details.email}
                          aria-invalid={!!errors.email}
                          className="h-11 px-4 py-3 rounded-xl bg-background/50"
                        />
                        {errors.email && (
                          <div className="flex items-center gap-1.5 text-xs text-destructive mt-1.5 font-medium animate-fadeIn">
                            <AlertCircle className="size-3.5" />
                            <span>{errors.email}</span>
                          </div>
                        )}
                      </div>

                      {/* Message Input */}
                      <div className="space-y-2 flex-grow flex flex-col">
                        <label
                          htmlFor="message"
                          className="block text-sm font-semibold text-foreground"
                        >
                          Message
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Tell me about your project, role opportunities, or just say hi..."
                          aria-invalid={!!errors.message}
                          rows={5}
                          className="px-4 py-3 rounded-xl bg-background/50 resize-none flex-grow"
                        />
                        {errors.message && (
                          <div className="flex items-center gap-1.5 text-xs text-destructive mt-1.5 font-medium animate-fadeIn">
                            <AlertCircle className="size-3.5" />
                            <span>{errors.message}</span>
                          </div>
                        )}
                      </div>

                      {submissionError && (
                        <div className="flex items-center gap-1.5 text-xs text-destructive font-medium animate-fadeIn mb-2">
                          <AlertCircle className="size-3.5" />
                          <span>{submissionError}</span>
                        </div>
                      )}

                      {/* Submit Button */}
                      <Button
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full rounded-xl shadow-lg bg-indigo-600 hover:bg-indigo-700 text-white dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-all duration-300 gap-2 cursor-pointer relative h-11 border-none shadow-indigo-500/20 hover:shadow-indigo-500/35"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center gap-2">
                            <div className="size-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                            <span>Sending message...</span>
                          </div>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <Send className="size-4" />
                          </>
                        )}
                      </Button>
                    </motion.form>
                  ) : (
                    /* Success state screen */
                    <motion.div
                      key="success-card"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 80, damping: 14 }}
                      className="text-center py-10 space-y-6 relative z-10 flex-grow flex flex-col items-center justify-center h-full"
                    >
                      <div className="p-4 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 animate-bounce">
                        <CheckCircle className="size-12" />
                      </div>
                      
                      <div className="space-y-2">
                        <h3 className="font-[family-name:var(--font-playfair-display)] font-bold text-3xl text-foreground">
                          Thank you, {formData.name}!
                        </h3>
                        <p className="text-muted-foreground max-w-sm mx-auto text-sm md:text-base leading-relaxed">
                          Your message has been sent successfully. I have received it and will get back to you at <span className="text-foreground font-semibold">{formData.email}</span> shortly.
                        </p>
                      </div>

                      <Button
                        onClick={handleReset}
                        variant="outline"
                        className="rounded-xl mt-4 gap-2 cursor-pointer"
                      >
                        <span>Send Another Message</span>
                        <ArrowRight className="size-4" />
                      </Button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}