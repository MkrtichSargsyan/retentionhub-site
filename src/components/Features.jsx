"use client";

import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const features = [
    {
        title: "Risk Management",
        description: "Full 7/24 monitoring, reactive price corrections, and segmentation.",
        icon: "🛡️",
    },
    {
        title: "Retention Strategy",
        description: "Optimizing system and platform settings for maximum retention.",
        icon: "📈",
    },
    {
        title: "Business Intelligence",
        description: "AI-based tools, in-depth analysis, and competitor tracking.",
        icon: "🤖",
    },
    {
        title: "Marketing Assistance",
        description: "Support with campaigns, affiliate tracking, and user engagement.",
        icon: "📣",
    },
    {
        title: "Detailed Reporting",
        description: "Weekly/monthly reports highlighting strengths and weaknesses.",
        icon: "📊",
    },
    {
        title: "Casinos / Start-ups",
        description: "Turnkey solutions for new platforms and casino operators.",
        icon: "🎰",
    },
    {
        title: "Platform Solutions",
        description: "Customized solutions tailored to your sportsbook or casino platform.",
        icon: "⚙️",
    },
    {
        title: "DOWNLOAD BROCHURE",
        description: "Get our full brochure to explore all our services in detail.",
        icon: "📄",
        cta: true,
    },
];

export default function Features() {
    return (
        <section className="relative bg-slate-900 text-white py-20 px-6">
            <div className="max-w-6xl mx-auto text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold">
                    Why Retention Hub?
                </h2>
                <p className="mt-4 text-slate-300 text-lg max-w-2xl mx-auto">
                    We provide professional consulting for any iGaming company, no matter on which market you operate. We are open to any kind of partnership.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
                {features.map((feature, idx) => (
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
                            } backdrop-blur-md p-6 rounded-xl flex flex-col items-center text-center shadow-2xl hover:shadow-purple-500/30 transition-transform cursor-pointer`}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, delay: idx * 0.15 }}
                            className="flex flex-col items-center"
                        >
                            <div className="text-5xl mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-slate-300 text-sm">
                                {feature.description}
                            </p>
                        </motion.div>
                    </Tilt>
                ))}
            </div>
        </section>
    );
}
