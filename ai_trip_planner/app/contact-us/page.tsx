"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Hook this into API route or email service (Resend/SendGrid/etc)
  };

  // Motion variants for staggered animation
  const fieldVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15 },
    }),
  };

  return (
    <div className="flex flex-col items-center justify-center px-6 py-16">
      {/* Heading */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Get in <span className="text-primary">Touch</span>
      </motion.h1>
      <p className="mt-4 text-muted-foreground text-center max-w-xl">
        Have questions, feedback, or just want to say hi? Drop us a message and
        we&apos;ll get back to you.
      </p>

      {/* Contact Section */}
      <motion.div
        className="w-full max-w-6xl mt-12 grid md:grid-cols-2 gap-10 items-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {/* Form Card */}
        <Card className="rounded-2xl shadow-lg bg-gradient-to-br from-white via-background to-gray-50 hover:shadow-xl transition-all">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {["name", "email", "message"].map((field, i) => (
                <motion.div
                  key={field}
                  variants={fieldVariant}
                  initial="hidden"
                  animate="visible"
                  custom={i}
                >
                  <label className="text-sm font-medium capitalize">
                    {field}
                  </label>
                  {field === "message" ? (
                    <Textarea
                      name="message"
                      placeholder="Write your message here..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="mt-1 resize-none"
                    />
                  ) : (
                    <Input
                      type={field === "email" ? "email" : "text"}
                      name={field}
                      placeholder={
                        field === "email" ? "you@example.com" : "Your full name"
                      }
                      value={formData[field as keyof typeof formData]}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  )}
                </motion.div>
              ))}
              <motion.div
                variants={fieldVariant}
                initial="hidden"
                animate="visible"
                custom={3}
              >
                <Button
                  type="submit"
                  size="lg"
                  className="mt-2 w-full bg-primary text-white hover:opacity-90 transition-transform hover:scale-[1.02]"
                >
                  Send Message
                </Button>
              </motion.div>
            </form>
          </CardContent>
        </Card>

        {/* Image Side */}
        <motion.div
          className="hidden md:flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Image
            src="/contact.jpeg"
            alt="Contact Illustration"
            width={500}
            height={500}
            className="rounded-2xl shadow-lg border border-gray-200"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
