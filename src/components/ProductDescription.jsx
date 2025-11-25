"use client";

import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import {
  Shield,
  BarChart3,
  BrainCog,
  Megaphone,
  Gamepad2,
  FileDown,
} from "lucide-react";

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
    description: ["Click to get our full brochure in PDF format."],
    icon: FileDown,
    cta: true,
  },
];

export default function ProductDescription() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/brochure.pdf"; // place the 5MB PDF inside /public folder
    link.download = "Retention_Hub_Brochure.pdf";
    link.click();
  };

  return (
    <section
      id="description"
      className="relative bg-[#0f1117] text-white py-24 px-6 overflow-hidden scroll-m-24"
    >
      {/* Background Orbs */}
      <motion.div
        className="pointer-events-none absolute top-20 -left-12 w-60 h-60 bg-gradient-to-br from-purple-500/30 to-indigo-400/25 rounded-full blur-3xl"
        animate={{ y: [0, 25, 0], x: [0, 20, 0] }}
        transition={{ duration: 13, repeat: Infinity, repeatType: "mirror" }}
      />
      <motion.div
        className="pointer-events-none absolute top-1/3 right-0 w-48 h-48 bg-gradient-to-br from-pink-400/25 to-yellow-300/25 rounded-full blur-3xl"
        animate={{ y: [0, -25, 0], x: [0, -10, 0] }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "mirror" }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-24 left-1/3 w-72 h-72 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl"
        animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
        transition={{ duration: 15, repeat: Infinity, repeatType: "mirror" }}
      />

      {/* Section Header */}
      <motion.div
        className="max-w-6xl mx-auto text-center mb-20 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-[#dfe3ee] to-[#8e94a6] drop-shadow-[0_10px_30px_rgba(255,255,255,0.15)]">
          Product Description
        </h2>
        <p className="mt-5 text-slate-300 text-xl max-w-2xl mx-auto">
          Our team has worked with operators across Europe, LATAM, Africa, and CIS, delivering measurable uplifts in ARPU, LTV, conversion, and net gaming revenue.
        </p>
      </motion.div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto relative z-10">
        {features.map((feature, idx) => {
          const Icon = feature.icon;

          // Brochure card style
          if (feature.cta) {
            return (
              <motion.div
                key={feature.title}
                className="bg-gradient-to-r from-purple-500/60 to-blue-500/60 text-white rounded-2xl p-8 flex flex-col items-center justify-center shadow-2xl cursor-pointer hover:scale-105 transition-transform"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                onClick={handleDownload}
              >
                <Icon className="w-12 h-12 mb-4 text-white drop-shadow-lg animate-bounce" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-white/80 text-center">{feature.description[0]}</p>
                <motion.div
                  className="mt-5 px-6 py-3 bg-white/10 rounded-full font-semibold hover:bg-white/20 transition"
                  whileHover={{ scale: 1.05 }}
                >
                  Download PDF
                </motion.div>
              </motion.div>
            );
          }

          return (
            <Tilt
              key={feature.title}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={1100}
              scale={1.06}
              transitionSpeed={500}
              className="bg-white/5 text-white backdrop-blur-xl p-7 rounded-2xl shadow-2xl border border-white/10 hover:border-white/20 hover:shadow-[0_0_25px_rgba(120,140,255,0.35)] transition-all cursor-pointer"
            >
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="flex flex-col items-center"
              >
                <Icon className="w-12 h-12 mb-4 text-blue-300 drop-shadow-[0_0_8px_rgba(150,180,255,0.5)]" />
                <h3 className="text-xl font-semibold mb-3 text-[#e5e9f2]">{feature.title}</h3>
                <ul className="text-slate-300 text-base space-y-2 text-left w-full max-w-sm">
                  {feature.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-lg">
                      <span className="text-blue-300 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </Tilt>
          );
        })}
      </div>
    </section>
  );
}
