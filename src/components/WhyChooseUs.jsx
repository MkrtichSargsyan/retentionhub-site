"use client";

import { motion } from "framer-motion";

const features = [
    {
        title: "Data-Driven Approach",
        description:
            "We don’t guess. We calculate. Every strategy is backed by real behavioral data",
        icon: "📊",
    },
    {
        title: "Fast Results",
        description: "Most clients see uplift in 7–14 days",
        icon: "⚡",
    },
    {
        title: "Transparent Pricing",
        description: "Clear, fixed monthly packages without hidden fees",
        icon: "💎",
    },
    {
        title: "Global Expertise",
        description:
            "We work with operators in 40+ countries",
        icon: "🌍",
    },
    {
        title: "Customized Solutions",
        description:
            "No generic templates. Your product, your audience, your strategy",
        icon: "🛠️",
    },
];

export default function WhyChooseUs() {
    return (
        <section
            id="why-choose-us"
            className="relative  bg-[#0f1117] text-white py-28 px-6 overflow-visible scroll-m-24 overflow-hidden"
        >
            {/* ===== Background blobs ===== */}
            <motion.div
                className="absolute top-1/4 left-0 w-64 h-64 bg-purple-600/20 rounded-full filter blur-3xl pointer-events-none overflow-hidden"
                animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
                transition={{ duration: 12, repeat: Infinity, repeatType: "mirror" }}
            />
            <motion.div
                className="absolute bottom-10 right-1/4 w-80 h-80 bg-blue-500/20 rounded-full filter blur-3xl pointer-events-none overflow-hidden"
                animate={{ y: [0, -25, 0], x: [0, -15, 0] }}
                transition={{ duration: 14, repeat: Infinity, repeatType: "mirror" }}
            />
            <motion.div
                className="absolute top-1/2 right-0 w-40 h-40 bg-pink-500/20 rounded-full filter blur-3xl pointer-events-none overflow-hidden"
                animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
                transition={{ duration: 16, repeat: Infinity, repeatType: "mirror" }}
            />

            {/* ===== Floating particles ===== */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-[2px] h-[2px] bg-white/20 rounded-full overflow-hidden"
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
                    WHY CHOOSE US
                </h2>
                <p className="mt-6 text-slate-300 text-lg md:text-xl max-w-2xl mx-auto">
                    Our approach is designed to deliver measurable results fast, transparently, and customized for your product.
                </p>
            </motion.div>

            {/* ===== Features Grid ===== */}
            <div className="relative z-10 max-w-4xl mx-auto space-y-16 overflow-hidden">
                {features.map((item, idx) => {
                    const isLeft = idx % 2 === 0;
                    return (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.8, delay: idx * 0.2 }}
                            className={`flex flex-col md:flex-row items-center ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
                        >
                            {/* Icon */}
                            <motion.div
                                className="text-6xl md:text-7xl mb-4 md:mb-0 md:mx-8"
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ duration: 6, repeat: Infinity }}
                            >
                                {item.icon}
                            </motion.div>

                            {/* Text */}
                            <div className="max-w-md">
                                <h3
                                    className="text-3xl md:text-4xl font-bold mb-2 bg-clip-text text-transparent"
                                    style={{
                                        backgroundImage:
                                            "linear-gradient(90deg, #7c3aed, #3b82f6, #f9a8d4)",
                                    }}
                                >
                                    {item.title}
                                </h3>
                                <p className="text-slate-300 text-xl">{item.description}</p>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
