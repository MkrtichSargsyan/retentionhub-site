"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section id="home" className="relative pt-60 flex flex-col items-center justify-center bg-[#0c0c0f] overflow-visible scroll-m-24">

            {/* === Blob Layer (isolated, safe) === */}
            <div className="absolute inset-0 pointer-events-none overflow-visible z-0">

                {/* Floating Blob */}
                <motion.div
                    className="absolute top-60 right-1/3 w-96 h-96 bg-gradient-to-r from-pink-500/20 to-yellow-400/20 rounded-full blur-3xl overflow-hidden"
                    animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
                    transition={{ duration: 14, repeat: Infinity, repeatType: "mirror" }}
                />

                {/* Floating Particles */}
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-[2px] h-[2px] bg-white/20 rounded-full"
                        animate={{
                            x: [0, Math.random() * 30 - 15, 0],
                            y: [0, Math.random() * 30 - 15, 0],
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

            {/* === Content === */}
            <motion.div
                className="relative z-10 text-center max-w-5xl px-8 pt-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                {/* Title */}
                <motion.h1
                    className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight
                    text-transparent bg-clip-text bg-gradient-to-b from-[#d5d9e5] to-[#8c92a3]"
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.1 }}
                >
                    Retention Hub
                </motion.h1>

                {/* Subtitle */}
                <motion.h2
                    className="text-xl md:text-2xl text-gray-300 mt-8 max-w-3xl mx-auto leading-relaxed"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    iGaming Retention Solutions That Increase LTV and Reduce Player Churn
                </motion.h2>

                {/* Description */}
                <motion.p
                    className="text-base md:text-lg text-gray-400 mt-6 max-w-3xl mx-auto leading-relaxed"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    Retention Hub helps online casino and sportsbook operators increase player lifetime value,
                    reduce churn, and grow revenue through advanced retention analytics, segmentation, CRM automation,
                    and personalized player journeys.
                </motion.p>

                {/* CTA */}
                <motion.div
                    className="mt-14 inline-block"
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    whileHover={{ scale: 1.08 }}
                >
                    <a
                        href="#contact"
                        className="px-12 py-4 rounded-full font-semibold text-lg tracking-wide text-black
                        bg-gradient-to-r from-[#f1dd9b] via-[#d9c271] to-[#f1dd9b]
                        shadow-[0_0_25px_rgba(255,220,120,0.35)]
                        hover:shadow-[0_0_35px_rgba(255,225,140,0.55)]
                        transition-all duration-300"
                    >
                        Work With Us
                    </a>
                </motion.div>
            </motion.div>

            {/* Message Block */}
            <motion.div
                className="relative mt-24 max-w-4xl mx-auto text-center bg-white/5 backdrop-blur-xl 
                    border border-white/10 rounded-2xl px-8 py-10 shadow-[0_0_50px_rgba(255,255,255,0.05)]"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
            >
                <h3 className="text-3xl md:text-4xl font-semibold text-transparent bg-clip-text
                        bg-gradient-to-b from-[#d5d9e5] to-[#8c92a3]">
                    Turn Your Players Into Long-Term Profit
                </h3>

                <p className="text-gray-300 text-lg mt-4 leading-relaxed max-w-3xl mx-auto">
                    We help iGaming operators increase player lifetime value, prevent churn, and maximize ROI
                    through data-driven retention strategies, real-time analytics, and personalized engagement.
                </p>

                <p className="text-gray-400 mt-6 font-medium tracking-wide">
                    Boost LTV · Reduce Churn · Grow Net Revenue
                </p>

                <p className="text-gray-400 mt-4">
                    Acquisition is expensive. Retention is profitable.
                    <br />
                    <span className="text-gray-200 font-semibold">
                        Every 1% improvement in retention increases annual GGR by 4–7%.
                    </span>
                </p>

                <p className="text-gray-400 mt-8 leading-relaxed">
                    Retention Hub gives you the tools, algorithms, and expertise to keep players active,
                    deposit more, and stay loyal—across Sportsbook and Casino.
                </p>

                <p className="text-gray-400 mt-6 leading-relaxed">
                    At Retention Hub, we combine 20+ years of industry expertise, deep analytics, and behavioral science
                    to solve the #1 challenge faced by iGaming operators: player retention.
                    <br /><br />
                    We help you build a sustainable, long-term business, not a short-term spike.
                </p>
            </motion.div>
        </section>
    );
}
