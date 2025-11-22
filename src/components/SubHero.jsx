"use client";

import { motion } from "framer-motion";

export default function SubHero() {
    const features = [
        "Increase player retention by 10–30%",
        "Real-time churn alerts and predictive analytics",
        "Optimized margins and smarter risk management",
        "Player journeys tailored to sportsbook and casino behavior",
        "Automated CRM flows that improve engagement and reduce bonus abuse",
        "Expert team with 20+ years in global iGaming markets"
    ];

    const services = [
        {
            title: "Sportsbook Retention Optimization",
            description:
                "We optimize bet-limits, win-limits, risk categories, and player-level KPI thresholds to increase margin and reduce exposure — all aligned with real player value."
        },
        {
            title: "Casino Retention Services",
            description:
                "Activation, reactivation, and anti-churn flows tailored for casino behavior: spins, sessions, volatility preference, RTP sensitivity, and time-between-sessions."
        },
        {
            title: "CRM Automation for iGaming",
            description:
                "Trigger-based Email, SMS, Push, In-App messages, multichannel funnels, onboarding flows, VIP systems, and A/B testing — fully aligned to iGaming patterns."
        },
        {
            title: "Gamification & Loyalty Systems",
            description:
                "Quests, missions, tournaments, leveling, loyalty points, streaks, and personalized bonus mechanics designed to increase engagement and session frequency."
        }
    ];

    return (
        <section className="relative w-full overflow-visible bg-[#0c0c0f]">
            {/* ===== Floating animated blobs ===== */}
            <motion.div
                className="absolute top-80 left-10 w-72 h-72 bg-gradient-to-r from-purple-600/30 to-indigo-400/30 rounded-full filter blur-3xl animate-blob overflow-hidden"
                animate={{ y: [0, 20, 0], x: [0, 40, 0] }}
                transition={{ duration: 12, repeat: Infinity, repeatType: "mirror" }}
            />

            <motion.div
                className="absolute bottom-20 right-1/3 w-96 h-96 bg-gradient-to-r from-pink-500/20 to-yellow-400/20 rounded-full filter blur-3xl animate-blob overflow-hidden"
                animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
                transition={{ duration: 14, repeat: Infinity, repeatType: "mirror" }}
            />

            {/* ===== Floating particles ===== */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-[2px] h-[2px] bg-white/20 rounded-full"
                        animate={{
                            x: [0, Math.random() * 30 - 15, 0],
                            y: [0, Math.random() * 30 - 15, 0],
                            opacity: [0.2, 0.8, 0.2]
                        }}
                        transition={{
                            duration: Math.random() * 6 + 4,
                            repeat: Infinity,
                            repeatType: "mirror",
                            delay: Math.random() * 3
                        }}
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`
                        }}
                    />
                ))}
            </div>

            <motion.div
                className="relative z-10 max-w-5xl mx-auto px-6 py-32 space-y-24 overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                {/* ===== Main Title ===== */}
                <motion.h2
                    className="text-5xl md:text-6xl font-extrabold tracking-tight text-center
                        text-transparent bg-clip-text bg-gradient-to-b from-[#d5d9e5] to-[#8c92a3]
                        drop-shadow-[0_10px_30px_rgba(255,255,255,0.15)]"
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.1 }}
                >
                    Data-Driven Player Retention for Sportsbook & Casino Operators
                </motion.h2>

                <motion.p
                    className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed text-center drop-shadow-[0_0_12px_rgba(255,255,255,0.1)]"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    iGaming retention is no longer optional. With acquisition costs rising globally, operators rely on retention strategies that keep players active, engaged, and profitable.
                    <br />
                    We use behavioral segmentation, churn prediction, smart limits, and AI-driven player profiling to increase LTV and maximize ROI.
                </motion.p>

                {/* ===== Features ===== */}
                <motion.div
                    className="grid md:grid-cols-2 gap-8 mt-16"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.15 } }
                    }}
                >
                    {features.map((item, idx) => (
                        <motion.p
                            key={idx}
                            className="flex items-center gap-3 text-gray-400 text-lg"
                            variants={{
                                hidden: { opacity: 0, x: -20 },
                                visible: { opacity: 1, x: 0 }
                            }}
                        >
                            <span className="w-2 h-2 bg-gradient-to-r from-[#f1dd9b] via-[#d9c271] to-[#f1dd9b] rounded-full inline-block"></span>
                            {item}
                        </motion.p>
                    ))}
                </motion.div>

                {/* ===== Services ===== */}
                <motion.div
                    className="space-y-12 mt-16"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.2 } }
                    }}
                >
                    {services.map((service, idx) => (
                        <motion.div key={idx} variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 }
                        }}>
                            <h3 className="text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-[#d5d9e5] to-[#8c92a3] drop-shadow-[0_5px_20px_rgba(255,255,255,0.1)]">
                                {service.title}
                            </h3>
                            <p className="text-gray-300 text-lg leading-relaxed">{service.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
}
