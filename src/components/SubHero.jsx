"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function SubHero() {
    return (
        <section className="relative bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 py-20 px-6 overflow-hidden">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Text Column */}
                <div className="space-y-6">
                    <motion.h2
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-5xl font-bold text-white"
                    >
                        RETENTION HUB
                    </motion.h2>

                    <motion.h2
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-slate-300 text-lg md:text-xl leading-relaxed"
                    >
                        Dedicated Retention Services for iGaming Operators Worldwide
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-slate-400 text-base md:text-lg leading-relaxed"
                    >
                        Whatever kind of Sportsbook or Casino operator you are, we are here to help you fine-tune your
                        settings to achieve the most important goals. Naturally, it’s a profitable business, but the
                        question is — how much more profitable could it be? That depends on many factors, and Retention
                        is the key one. Improving your profitability and increasing your turnovers significantly gives a
                        huge GGR boost without too many extra costs. In an extremely competitive market, your customers’
                        average lifetime should be the number one parameter — and it may rise by 90–120%. We have the
                        experience and expertise, and have done the job for literally all of our partners. Let’s try it
                        for you.
                    </motion.p>
                </div>

                {/* Image Column */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                    className="relative w-full h-96 md:h-[28rem] rounded-xl overflow-hidden shadow-2xl"
                >
                    <Image
                        src="/images/night-stadium.jpg"
                        alt="Description of the image"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-4xl shadow-lg"
                    />
                </motion.div>
            </div>

            {/* Optional subtle floating glow animation */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <motion.div
                    animate={{ rotate: [0, 2, -2, 0] }}
                    transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
                    className="absolute top-10 left-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
                />
            </div>
        </section>
    );
}
