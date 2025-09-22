"use client";

import { motion } from "framer-motion";

const useCases = [
    {
        title: "Boost Player Retention",
        description:
            "Monitor player activity and optimize engagement to keep users returning.",
        icon: "🎯",
    },
    {
        title: "Increase Revenue",
        description:
            "Implement data-driven strategies to maximize your profits effectively.",
        icon: "💰",
    },
    {
        title: "Smart Automation",
        description:
            "Automate risk management and operational workflows with AI support.",
        icon: "🤖",
    },
];

export default function UseCases() {
    return (
        <section id="use-cases" className="relative bg-slate-950 text-white py-20 px-6 overflow-hidden">
            {/* Background accent */}
            <motion.div
                className="absolute top-0 left-1/2 w-[600px] h-[600px] -translate-x-1/2 rounded-full bg-purple-500/10 blur-3xl"
                animate={{ y: [0, 40, 0] }}
                transition={{ duration: 12, repeat: Infinity }}
            />

            <div className="relative z-10 max-w-6xl mx-auto text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold">
                    How Retention Hub Helps
                </h2>
                <p className="mt-4 text-slate-300 text-lg max-w-2xl mx-auto">
                    Practical solutions to increase engagement, retention, and revenue.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                {useCases.map((item, idx) => (
                    <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, delay: idx * 0.2 }}
                        className="bg-black/20 backdrop-blur-md p-8 rounded-xl flex flex-col items-center text-center hover:scale-105 transition-transform"
                    >
                        <div className="text-5xl mb-4">{item.icon}</div>
                        <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-slate-300">{item.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
