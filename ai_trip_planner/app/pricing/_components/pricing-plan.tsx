"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Zap, Layers, Database } from "lucide-react";
import { Variants } from "framer-motion";

interface PricingPlan {
  name: string;
  icon: React.ReactNode;
  monthlyPrice: number;
  annualPrice: number;
  description: string;
  features: string[];
  popular?: boolean;
}

const plans: PricingPlan[] = [
  {
    name: "Basic",
    icon: <Zap className="w-6 h-6" />,
    monthlyPrice: 12,
    annualPrice: 10,
    description: "Perfect for individuals and small teams",
    features: [
      "Access to all basic features",
      "Basic reporting and analytics",
      "Up to 10 individual users",
      "20 GB individual data",
      "Basic chat and email support",
    ],
  },
  {
    name: "Business",
    icon: <Layers className="w-6 h-6" />,
    monthlyPrice: 25,
    annualPrice: 20,
    description: "Best for growing businesses",
    popular: true,
    features: [
      "200+ integrations",
      "Advanced reporting and analytics",
      "Up to 20 individual users",
      "40 GB individual data",
      "Priority chat and email support",
    ],
  },
  {
    name: "Enterprise",
    icon: <Database className="w-6 h-6" />,
    monthlyPrice: 50,
    annualPrice: 40,
    description: "For large organizations",
    features: [
      "Advanced custom fields",
      "Audit log and data history",
      "Unlimited individual users",
      "Unlimited individual data",
      "Personalized + priority service",
    ],
  },
];

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

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.95,
  },
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

const headerVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-20"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-100 rounded-full opacity-20"
          animate={{
            scale: [1.1, 1, 1.1],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-primary text-sm font-medium mb-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Pricing plans
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Plans for all sizes
          </h2>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Simple, transparent pricing that grows with you. Try any plan free
            for 30 days.
          </p>

          {/* Annual/Monthly Toggle */}
          <motion.div
            className="flex items-center justify-center gap-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <span
              className={`text-sm font-medium ${!isAnnual ? "text-gray-900" : "text-gray-500"}`}
            >
              Monthly
            </span>

            <motion.button
              className="relative w-14 h-8 bg-gray-200 rounded-full p-1 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              style={{ backgroundColor: isAnnual ? "#3B82F6" : "#E5E7EB" }}
              onClick={() => setIsAnnual(!isAnnual)}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="w-6 h-6 bg-white rounded-full shadow-sm"
                animate={{ x: isAnnual ? 24 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </motion.button>

            <span
              className={`text-sm font-medium ${isAnnual ? "text-gray-900" : "text-gray-500"}`}
            >
              Annual
              <span className="text-green-600 ml-1">(save 20%)</span>
            </span>
          </motion.div>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {plans.map((plan, index) => (
            <div key={plan.name} className="relative">
              {/* Popular badge */}
              {plan.popular && (
                <motion.div
                  className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.5, type: "spring" }}
                >
                  <div className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium shadow-md">
                    Most Popular
                  </div>
                </motion.div>
              )}

              {/* Card */}
              <motion.div
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.2 },
                }}
                className={`relative bg-white rounded-2xl shadow-lg border-2 overflow-hidden ${
                  plan.popular
                    ? "border-primary ring-4 ring-blue-100"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div className="p-8">
                  {/* Icon and Title */}
                  <div className="text-center mb-8">
                    <motion.div
                      className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl text-primary mb-4"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {plan.icon}
                    </motion.div>

                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {plan.name} plan
                    </h3>

                    <div className="mb-2">
                      <motion.span
                        className="text-4xl font-bold text-gray-900"
                        key={isAnnual ? "annual" : "monthly"}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                      </motion.span>
                      <span className="text-gray-600">/month</span>
                    </div>

                    <p className="text-gray-600 text-sm">
                      {isAnnual ? "Billed annually" : "Billed monthly"}
                    </p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: featureIndex * 0.1 }}
                      >
                        <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                          <Check className="w-3 h-3 text-green-600" />
                        </div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <motion.button
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                      plan.popular
                        ? "bg-primary text-white hover:bg-primary shadow-lg"
                        : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get started
                  </motion.button>
                </div>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
