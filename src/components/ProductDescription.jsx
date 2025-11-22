"use client";

import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { Shield, BarChart3, BrainCog, Megaphone, Gamepad2, FileDown } from "lucide-react";

const features = [
  {
    title: "Retention Analytics & Player Segmentation",
    description: [
      "Behavioral segmentation (Good / Bad / Risky / VIP / Bonus Hunters)",
      "Player value scoring and retention probability",
      "Churn prediction algorithms",
      "Cohort analysis (RFM, bet patterns, frequency, margins)",
    ],
    icon: Shield,
  },
  {
    title: "Personalized Retention Strategy",
    description: [
      "Multi-layered retention funnels",
      "Player journey optimization",
      "Lifecycle automation (activation, reactivation, winback)",
      "VIP retention and high-value player management",
    ],
    icon: BarChart3,
  },
  {
    title: "Risk & Profitability Optimization",
    description: [
      "Smart limits for bets and payouts",
      "Player profiling (value vs risk)",
      "Margin optimization for Sportsbook",
      "Bonus & promo ROI analysis",
    ],
    icon: BrainCog,
  },
  {
    title: "CRM Campaigns & Automation",
    description: [
      "Email / SMS / Push / In-App flows",
      "Trigger-based campaigns (behavioral, event-driven)",
      "Bonus personalization and anti-abuse",
      "A/B testing and campaign ROI measurement",
    ],
    icon: Megaphone,
  },
  {
    title: "Gamification Solutions",
    description: [
      "Missions, quests, tournaments",
      "Achievement systems",
      "Leveling & loyalty programs",
      "Engagement dashboards",
    ],
    icon: Gamepad2,
  },
  {
    title: "DOWNLOAD BROCHURE",
    description: ["Get our full brochure to explore all our services in detail."],
    icon: FileDown,
    cta: true,
  },
];

export default function ProductDescription() {
  return (
    <section id="description" className="relative bg-[#0c0c0f] text-white py-20 px-6 overflow-visible scroll-m-24">

      {/* ===== Background blobs ===== */}
      <motion.div
        className="pointer-events-none absolute top-10 -left-16 w-40 h-40 bg-gradient-to-tr from-purple-600/30 to-indigo-400/30 rounded-full filter blur-3xl"
        animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "mirror" }}
      />
      <motion.div
        className="pointer-events-none absolute top-1/4 right-0 w-32 h-32 bg-gradient-to-tr from-pink-500/20 to-yellow-400/20 rounded-full filter blur-3xl"
        animate={{ y: [0, -15, 0], x: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-30 left-1/3 w-48 h-48 bg-gradient-to-tr from-indigo-500/20 to-purple-400/20 rounded-full filter blur-3xl"
        animate={{ y: [0, 25, 0], x: [0, -15, 0] }}
        transition={{ duration: 14, repeat: Infinity, repeatType: "mirror" }}
      />
      <motion.div
        className="pointer-events-none absolute top-1/2 right-1/4 w-36 h-36 bg-gradient-to-tr from-yellow-400/20 to-pink-400/20 rounded-full filter blur-3xl"
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 13, repeat: Infinity, repeatType: "mirror" }}
      />

      {/* ===== Floating particles ===== */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[2px] h-[2px] bg-white/20 rounded-full"
            animate={{
              x: [0, Math.random() * 20 - 10, 0],
              y: [0, Math.random() * 20 - 10, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 6 + 4,
              repeat: Infinity,
              repeatType: "mirror",
              delay: Math.random() * 3,
            }}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* ===== Section Header ===== */}
      <motion.div
        className="max-w-6xl mx-auto text-center mb-16 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold 
          text-transparent bg-clip-text bg-gradient-to-b from-[#d5d9e5] to-[#8c92a3]">
          Product Description
        </h2>
        <p className="mt-4 text-slate-300 text-lg max-w-2xl mx-auto">
          Our team has worked with operators across Europe, LATAM, Africa, and CIS, delivering measurable uplifts in ARPU, LTV, conversion, and net gaming revenue.
        </p>
      </motion.div>

      {/* ===== Features Grid ===== */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto relative z-10">
        {features.map((feature, idx) => {
          const Icon = feature.icon;
          return (
            <Tilt
              key={feature.title}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={1000}
              scale={1.05}
              transitionSpeed={400}
              className={`${feature.cta
                ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white"
                : "bg-black/20 text-white"
                } backdrop-blur-md p-6 rounded-xl flex flex-col items-center text-center shadow-2xl hover:shadow-purple-500/50 transition-transform cursor-pointer`}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="flex flex-col items-center"
              >
                <Icon className="w-12 h-12 mb-4 text-blue-300" />
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>

                <ul className="text-slate-300 text-sm space-y-2 text-left">
                  {feature.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </Tilt>
          );
        })}
      </div>

      <motion.div
        className="max-w-5xl mx-auto mt-28 text-center relative z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-3xl md:text-4xl font-extrabold mb-6 
      text-transparent bg-clip-text bg-gradient-to-b from-[#d5d9e5] to-[#8c92a3]">
          Use Retention Hub Platform & Dashboard
        </h3>

        <p className="text-slate-300 text-lg max-w-3xl mx-auto mb-14">
          A single powerful environment where your Retention, CRM, Risk and VIP teams finally see the whole picture —
          live, automated and optimized for revenue.
        </p>

        {/* Floating holographic card */}
        <Tilt
          tiltMaxAngleX={1}
          tiltMaxAngleY={1}
          scale={1.01}
          transitionSpeed={500}
          className="bg-black/30 backdrop-blur-xl border border-white/10 
               rounded-2xl p-10 shadow-2xl relative overflow-hidden"
        >
          {/* Glow effects */}
          <motion.div
            className="absolute -top-20 -left-20 w-60 h-60 
                 bg-purple-600/20 rounded-full filter blur-3xl"
            animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
          />
          <motion.div
            className="absolute -bottom-20 -right-20 w-60 h-60 
                 bg-blue-500/20 rounded-full filter blur-3xl"
            animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
            transition={{ duration: 12, repeat: Infinity, repeatType: "mirror" }}
          />

          {/* Card Content */}
          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-5 text-left max-w-3xl mx-auto"
          >
            {[
              "Real-time player activity",
              "Churn risk alerts",
              "Deposit / withdrawal ratios",
              "Profitability indicators",
              "VIP early-warning system",
              "Automated funnels",
              "Player behavioral heatmaps",
              "Designed for speed, clarity, and ROI"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-3 h-3 rounded-full mt-1 
                           bg-gradient-to-br from-blue-400 to-purple-400 shadow-lg"></span>
                <span className="text-slate-200 text-lg">{item}</span>
              </li>
            ))}
          </motion.ul>
        </Tilt>
      </motion.div>
    </section>
  );
}
