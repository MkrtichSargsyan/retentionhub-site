"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative pt-60 flex flex-col items-center justify-center bg-[#0f1117] overflow-hidden scroll-m-24"
        >

            {/* === Blob Layer === */}
            <div className="absolute inset-0 pointer-events-none overflow-visible z-0">

                {/* Floating Blob */}
                <motion.div
                    className="absolute top-60 right-1/3 w-96 h-96 
                    bg-gradient-to-r from-pink-400/30 to-yellow-300/30 
                    rounded-full blur-3xl overflow-hidden"
                    animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
                    transition={{ duration: 14, repeat: Infinity, repeatType: "mirror" }}
                />

                {/* Floating Particles */}
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-[2px] h-[2px] bg-white/40 rounded-full"
                        animate={{
                            x: [0, Math.random() * 30 - 15, 0],
                            y: [0, Math.random() * 30 - 15, 0],
                            opacity: [0.3, 1, 0.3],
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
                className="relative z-10 text-center max-w-5xl px-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                {/* Title */}
                <motion.h1
                    className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight
                    text-transparent bg-clip-text bg-gradient-to-b from-[#e4e7f0] to-[#aab0c0]"
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.1 }}
                >
                    Retention Hub
                </motion.h1>

                {/* Subtitle */}
                <motion.h2
                    className="text-xl md:text-2xl text-gray-200 mt-8 max-w-3xl mx-auto leading-relaxed"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    iGaming Retention Solutions <br /> Increase LTV <br /> Reduce Player Churn
                </motion.h2>

                {/* Description */}
                <motion.p
                    className="text-base md:text-2xl text-gray-300 mt-6 max-w-3xl mx-auto leading-relaxed"
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
                        bg-gradient-to-r from-[#ffe8ac] via-[#e4c983] to-[#ffe8ac]
                        shadow-[0_0_35px_rgba(255,230,160,0.5)]
                        hover:shadow-[0_0_45px_rgba(255,235,170,0.7)]
                        transition-all duration-300"
                    >
                        CONTACT US
                    </a>
                </motion.div>
            </motion.div>

            {/* === Message Block === */}
            <motion.div
                className="relative mt-24 max-w-4xl mx-auto text-center bg-white/10 backdrop-blur-xl 
                    border border-white/20 rounded-2xl px-8 py-10 shadow-[0_0_60px_rgba(255,255,255,0.08)]"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
            >
                <h3 className="text-3xl md:text-5xl font-semibold text-transparent bg-clip-text
                        bg-gradient-to-b from-[#e4e7f0] to-[#aab0c0]">
                    Turn Your Players Into Long-Term Profit
                </h3>

                <p className="text-gray-200 text-xl mt-4 leading-relaxed max-w-3xl mx-auto">
                    We help iGaming operators increase player lifetime value, prevent churn, and maximize ROI
                    through data-driven retention strategies, real-time analytics, and personalized engagement.
                </p>

                <p className="text-gray-300 mt-6 font-medium text-xl tracking-wide">
                    Boost LTV · Reduce Churn · Grow Net Revenue
                </p>

                <p className="text-gray-300 mt-4 text-xl">
                    Acquisition is expensive. Retention is profitable.
                    <br /><br />
                    <span className="text-gray-200 font-semibold text-xl">
                        Every 1% improvement in retention increases annual GGR by 4–7%.
                    </span>
                </p>

                <p className="text-gray-300 mt-8 leading-relaxed text-xl">
                    Retention Hub gives you the tools, algorithms, and expertise to keep players active,
                    deposit more, and stay loyal—across Sportsbook and Casino.
                </p>

                <p className="text-gray-300 mt-6 leading-relaxed text-xl">
                    At Retention Hub, we combine 20+ years of industry expertise, deep analytics, and behavioral science
                    to solve the #1 challenge faced by iGaming operators: player retention.
                    <br /><br />
                    We help you build a sustainable, long-term business, not a short-term spike.
                </p>
            </motion.div>
        </section>
    );
}
