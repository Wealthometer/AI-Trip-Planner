"use client";

import type React from "react";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { Variants } from "framer-motion";
import Image from "next/image";
import { Send, CheckCircle, Mail, User, MessageSquare } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    console.log("Form submitted:", formData);

    // Reset form after success animation
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitted(false);
    }, 3000);
  };

  // Enhanced motion variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const fieldVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20,
      },
    },
  };

  const buttonVariants: Variants = {
    idle: { scale: 1 },
    hover: {
      scale: 1.02,
      transition: { type: "spring", stiffness: 400, damping: 10 },
    },
    tap: { scale: 0.98 },
    submitting: {
      scale: [1, 1.05, 1],
      transition: { repeat: Number.POSITIVE_INFINITY, duration: 1 },
    },
  };

  const successVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
  };

  const getFieldIcon = (field: string) => {
    switch (field) {
      case "name":
        return <User className="w-4 h-4" />;
      case "email":
        return <Mail className="w-4 h-4" />;
      case "message":
        return <MessageSquare className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 flex flex-col items-center justify-center px-6 py-16">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/5 rounded-full blur-xl"
          animate={{
            x: [0, -25, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-6xl"
      >
        {/* Heading */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <motion.h1
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-primary to-blue-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Get in Touch
          </motion.h1>
          <motion.p
            className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Have questions, feedback, or just want to say hi? Drop us a message
            and we'll get back to you as soon as possible.
          </motion.p>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          variants={itemVariants}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Form Card */}
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <Card className="relative overflow-hidden rounded-3xl shadow-2xl bg-white/80 backdrop-blur-sm border-0">
              {/* Card Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50/50 to-primary/5" />

              <CardContent className="relative p-8 lg:p-10">
                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      className="space-y-6"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                    >
                      {["name", "email", "message"].map((field, i) => (
                        <motion.div
                          key={field}
                          variants={fieldVariants}
                          initial="hidden"
                          animate="visible"
                          transition={{ delay: i * 0.1 + 0.3 }}
                          className="space-y-2"
                        >
                          <motion.label
                            className="flex items-center gap-2 text-sm font-semibold text-gray-700 capitalize"
                            whileHover={{ x: 2 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            <motion.span
                              className={`p-1 rounded-lg transition-colors ${
                                focusedField === field
                                  ? "bg-primary text-white"
                                  : "bg-gray-100 text-gray-500"
                              }`}
                              animate={{
                                scale: focusedField === field ? 1.1 : 1,
                              }}
                            >
                              {getFieldIcon(field)}
                            </motion.span>
                            {field}
                          </motion.label>

                          <motion.div
                            className="relative"
                            whileFocus={{ scale: 1.01 }}
                          >
                            {field === "message" ? (
                              <Textarea
                                name="message"
                                placeholder="Write your message here..."
                                value={formData.message}
                                onChange={handleChange}
                                onFocus={() => setFocusedField(field)}
                                onBlur={() => setFocusedField(null)}
                                required
                                rows={4}
                                className={`resize-none transition-all duration-300 border-2 rounded-xl ${
                                  focusedField === field
                                    ? "border-primary shadow-lg shadow-primary/20 bg-white"
                                    : "border-gray-200 hover:border-gray-300"
                                }`}
                              />
                            ) : (
                              <Input
                                type={field === "email" ? "email" : "text"}
                                name={field}
                                placeholder={
                                  field === "email"
                                    ? "you@example.com"
                                    : "Your full name"
                                }
                                value={formData[field as keyof typeof formData]}
                                onChange={handleChange}
                                onFocus={() => setFocusedField(field)}
                                onBlur={() => setFocusedField(null)}
                                required
                                className={`transition-all duration-300 border-2 rounded-xl h-12 ${
                                  focusedField === field
                                    ? "border-primary shadow-lg shadow-primary/20 bg-white"
                                    : "border-gray-200 hover:border-gray-300"
                                }`}
                              />
                            )}

                            {/* Focus indicator */}
                            <motion.div
                              className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-xl -z-10"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{
                                opacity: focusedField === field ? 1 : 0,
                                scale: focusedField === field ? 1 : 0.8,
                              }}
                              transition={{ duration: 0.2 }}
                            />
                          </motion.div>
                        </motion.div>
                      ))}

                      <motion.div
                        variants={fieldVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.6 }}
                        className="pt-4"
                      >
                        <motion.div
                          variants={buttonVariants}
                          initial="idle"
                          whileHover="hover"
                          whileTap="tap"
                          animate={isSubmitting ? "submitting" : "idle"}
                        >
                          <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full h-14 bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-70"
                          >
                            <AnimatePresence mode="wait">
                              {isSubmitting ? (
                                <motion.div
                                  key="submitting"
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  exit={{ opacity: 0 }}
                                  className="flex items-center gap-2"
                                >
                                  <motion.div
                                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                                    animate={{ rotate: 360 }}
                                    transition={{
                                      duration: 1,
                                      repeat: Number.POSITIVE_INFINITY,
                                      ease: "linear",
                                    }}
                                  />
                                  Sending...
                                </motion.div>
                              ) : (
                                <motion.div
                                  key="idle"
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  exit={{ opacity: 0 }}
                                  className="flex items-center gap-2"
                                >
                                  <Send className="w-5 h-5" />
                                  Send Message
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </Button>
                        </motion.div>
                      </motion.div>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="success"
                      variants={successVariants}
                      initial="hidden"
                      animate="visible"
                      className="text-center py-12"
                    >
                      <motion.div
                        className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                        animate={{
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                        }}
                      >
                        <CheckCircle className="w-10 h-10 text-green-600" />
                      </motion.div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        Message Sent!
                      </h3>
                      <p className="text-gray-600">
                        Thank you for reaching out. We'll get back to you soon!
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          </motion.div>

          {/* Image Side */}
          <motion.div
            variants={itemVariants}
            className="hidden lg:flex justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.02, rotate: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-3xl blur-xl" />
              <Image
                src="/contact.jpeg"
                alt="Contact Illustration"
                width={500}
                height={500}
                className="relative rounded-3xl shadow-2xl border border-white/20"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
