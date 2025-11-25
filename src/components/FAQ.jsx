"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How does RETENTION HUB improve player retention?",
    answer: `We analyze your platform and player behavior to identify churn risks and optimize engagement. By adjusting game settings, bonuses, and communication strategies, we significantly extend player lifetime and boost revenue.`,
  },
  {
    question: "Do you support both sportsbooks and casinos?",
    answer: `Yes. Our expertise spans sportsbooks, online casinos, and hybrid platforms. We help you optimize retention, risk management, and overall performance regardless of your vertical.`,
  },
  {
    question: "Can you help us migrate to a better platform?",
    answer: `Absolutely. Platform migration is complex, but we’ve done it for many partners. We ensure a smooth transition with zero downtime and minimal disruption to your operations.`,
  },
  {
    question: "What kind of team will we have access to?",
    answer: `You get a dedicated team of traders and developers assigned specifically to your business. No one works for multiple partners simultaneously, ensuring focus and accountability.`,
  },
  {
    question: "How quickly can we see results?",
    answer: `While results vary depending on your platform and market, most partners notice measurable improvements in retention, engagement, and revenue within the first few weeks.`,
  },
  {
    question: "Is our data safe with RETENTION_Hub?",
    answer: `100% secure. All operations comply with strict NDA protocols. We only access essential data needed to optimize your platform, and no sensitive information is ever shared.`,
  },
  {
    question: "Do you work with new operators or only established ones?",
    answer: `We work with both. Whether you’re launching a new iGaming business or improving an existing one, we provide end-to-end guidance and optimization services.`,
  },
  {
    question: "Can we choose only specific services?",
    answer: `Yes. You can select individual services, such as risk management, retention strategy, or platform optimization. Many partners start small and expand as needed.`,
  },
  {
    question: "Do you adapt your strategies based on different markets?",
    answer: `Absolutely. We analyze player behavior and market trends for each region—Asia, Europe, Latin America, Africa, and Australia—to maximize retention and revenue.`,
  },
  {
    question: "What sets RETENTION_Hub apart from other service providers?",
    answer: `Unlike generic providers, we specialize in retention-driven strategies tailored for the iGaming industry. Our data-driven approach guarantees measurable improvements and long-term growth for your business.`,
  },
];



export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);
    const toggle = (idx) => setOpenIndex(openIndex === idx ? null : idx);

    return (
        <section id="faq" className="relative  bg-[#0f1117] text-white py-28 px-6 overflow-hidden scroll-m-24">
            {/* ===== Background blobs ===== */}
            <motion.div
                className="absolute top-80 left-10 w-64 h-64 rounded-full bg-purple-600/20 filter blur-3xl pointer-events-none"
                animate={{ y: [0, 30, 0], x: [0, 15, 0] }}
                transition={{ duration: 12, repeat: Infinity, repeatType: "mirror" }}
            />
            <motion.div
                className="absolute bottom-10 right-1/3 w-80 h-80 rounded-full bg-blue-500/20 filter blur-3xl pointer-events-none"
                animate={{ y: [0, -25, 0], x: [0, -15, 0] }}
                transition={{ duration: 14, repeat: Infinity, repeatType: "mirror" }}
            />
            <motion.div
                className="absolute top-1/2 right-0 w-40 h-40 rounded-full bg-pink-500/20 filter blur-3xl pointer-events-none"
                animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
                transition={{ duration: 16, repeat: Infinity, repeatType: "mirror" }}
            />

            {/* ===== Floating particles ===== */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-[2px] h-[2px] bg-white/20 rounded-full"
                        animate={{
                            x: [0, Math.random() * 15 - 7, 0],
                            y: [0, Math.random() * 15 - 7, 0],
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
                className="relative z-10 max-w-4xl mx-auto text-center mb-20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight text-center
                        text-transparent bg-clip-text bg-gradient-to-b from-[#d5d9e5] to-[#8c92a3]
                        drop-shadow-[0_10px_30px_rgba(255,255,255,0.15)]">
                    Frequently Asked Questions
                </h2>
                <p className="mt-4 text-slate-300 text-lg md:text-xl max-w-2xl mx-auto">
                    Everything you need to know about RetentionHub.
                </p>
            </motion.div>

            {/* ===== FAQ Items ===== */}
            <div className="relative z-10 max-w-4xl mx-auto space-y-4">
                {faqs.map((faq, idx) => (
                    <motion.div
                        key={faq.question}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="bg-black/20 backdrop-blur-md rounded-xl overflow-hidden shadow-lg hover:shadow-purple-500/30 transition-transform hover:-translate-y-1"
                    >
                        <button
                            onClick={() => toggle(idx)}
                            className="w-full px-6 py-4 flex justify-between items-center text-left focus:outline-none"
                        >
                            <span className="text-lg md:text-xl font-semibold">{faq.question}</span>
                            <motion.span
                                animate={{ rotate: openIndex === idx ? 45 : 0 }}
                                transition={{ duration: 0.3 }}
                                className="text-2xl"
                            >
                                +
                            </motion.span>
                        </button>

                        <AnimatePresence>
                            {openIndex === idx && (
                                <motion.div
                                    key="content"
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.4 }}
                                    className="px-6 pb-4 text-slate-300 text-sm md:text-base"
                                >
                                    {faq.answer}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}