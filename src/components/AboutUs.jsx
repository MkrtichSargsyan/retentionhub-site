"use client";

import { motion } from "framer-motion";

export default function AboutUs() {
    const points = [
        {
            title: "Player Retention & Churn Reduction",
            description: "We help operators improve player retention, reduce churn, and maximize LTV through predictive analytics and behavioral insights.",
        },
        {
            title: "CRM Automation & VIP Management",
            description: "Trigger-based campaigns, loyalty flows, and VIP management systems that automate engagement and reduce bonus abuse.",
        },
        {
            title: "Sportsbook & Casino Expertise",
            description: "Deep industry knowledge across sportsbook and casino verticals, combining psychology, analytics, and data science for results.",
        },
    ];

    return (
        <section
            id="about-us"
            className="relative w-full bg-[#0c0c0f] text-white py-32 overflow-hidden scroll-m-24"
        >
            {/* ===== Floating Particles ===== */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(25)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-[2px] h-[2px] bg-white/20 rounded-full overflow-hidden"
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

            <motion.div
                className="relative z-10 max-w-6xl mx-auto px-6 text-center space-y-12"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                {/* ===== Heading ===== */}
                <motion.h2
                    className="text-5xl md:text-6xl font-extrabold tracking-tight
                     text-transparent bg-clip-text bg-gradient-to-b from-[#d5d9e5] to-[#8c92a3] drop-shadow-lg"
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.1 }}
                >
                    About Retention Hub
                </motion.h2>

                {/* ===== SEO Paragraph ===== */}
                <motion.p
                    className="text-gray-300 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    Retention Hub is an iGaming retention company specializing in player retention, churn reduction, CRM automation, and loyalty strategies.
                    Our team has helped operators in Europe, LATAM, Africa, and CIS improve LTV, reduce bonus abuse, and build sustainable long-term revenue.
                    <br /><br />
                    We combine data science, psychology, and deep industry experience to deliver retention systems that work for sportsbook retention, casino retention, and VIP management.
                </motion.p>

                {/* ===== Feature Cards ===== */}
                <div className="grid md:grid-cols-3 gap-10 mt-16">
                    {points.map((point, idx) => (
                        <motion.div
                            key={idx}
                            className="bg-white/5 backdrop-blur-xl 
                                border border-white/10 rounded-2xl p-8 text-left hover:scale-105 hover:border-purple-400 transition-transform shadow-2xl shadow-purple-500/10"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 1 }}
                            viewport={{ once: true, amount: 0.2 }}
                            animate={{
                                y: [0, 10, 0],
                                rotate: [0, 1, 0], // subtle rotation
                                scale: [1, 1.02, 1], // slight scale for life
                            }}
                        >
                            <h3 className="text-2xl font-semibold mb-3 text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-[#d5d9e5] drop-shadow-sm">
                                {point.title}
                            </h3>
                            <p className="text-gray-300 text-lg leading-relaxed">{point.description}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
