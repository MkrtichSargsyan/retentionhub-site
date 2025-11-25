"use client";

import { Linkedin, MessageCircle, Mail, PhoneCall, ArrowRight } from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative w-full bg-[#0f1117] pt-24 pb-16 overflow-hidden">

            {/* === Neon background grid === */}
            <div className="absolute inset-0 opacity-[0.2]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(80,80,120,0.25),transparent_70%)]"></div>
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
            </div>

            {/* === Soft glowing accents === */}
            <div className="absolute -top-40 -left-20 w-[500px] h-[500px] bg-purple-600/20 blur-[160px] rounded-full"></div>
            <div className="absolute -bottom-40 right-0 w-[450px] h-[450px] bg-blue-500/20 blur-[160px] rounded-full"></div>

            {/* === Main container === */}
            <div className="relative z-20 max-w-7xl mx-auto px-6">

                {/* === CTA block (centered) === */}
                <div className="mb-24 text-center">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text
                        bg-gradient-to-b from-[#e4e7ef] to-[#9aa3b4]
                        drop-shadow-[0_8px_30px_rgba(255,255,255,0.2)] pb-3.5">
                        Ready to Transform Your Player Retention?
                    </h2>

                    <p className="mt-4 text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                        We help operators increase loyalty, engagement, and profits using data-driven retention systems engineered specifically for iGaming.
                    </p>

                    <a
                        href="#contact"
                        className="inline-flex items-center gap-3 mt-8 px-8 py-4 rounded-2xl
                            bg-gradient-to-r from-purple-600 to-indigo-500
                            shadow-[0_0_25px_rgba(130,80,255,0.4)]
                            hover:shadow-[0_0_40px_rgba(130,80,255,0.6)]
                            transition-all duration-300 text-xl font-semibold"
                    >
                        Contact Our Team
                        <ArrowRight className="w-6 h-6" />
                    </a>
                </div>

                {/* === Footer grid === */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16">

                    {/* ===== Brand block ===== */}
                    <div>
                        <h3 className="text-3xl font-extrabold mb-4 text-transparent bg-clip-text 
                            bg-gradient-to-b from-[#e4e7ef] to-[#9aa3b4]">
                            RETENTION HUB
                        </h3>

                        <p className="text-slate-300 text-xl leading-relaxed">
                            Elite Retention Services for Sportsbook & Casino Operators Worldwide.
                        </p>

                        {/* Social Icons */}
                        <div className="flex gap-4 mt-6">
                            {/* LinkedIn */}
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                className="p-3 rounded-xl bg-white/5 backdrop-blur-sm
                                    hover:bg-white/10 transition shadow-sm
                                    hover:shadow-[0_0_25px_rgba(255,255,255,0.3)]"
                            >
                                <Linkedin className="w-6 h-6 text-white" />
                            </a>

                            {/* WhatsApp */}
                            <a
                                href="https://wa.me/37499452772"
                                target="_blank"
                                className="p-3 rounded-xl bg-white/5 backdrop-blur-sm
                                    hover:bg-white/10 transition shadow-sm
                                    hover:shadow-[0_0_25px_rgba(38,255,71,0.4)]"
                            >
                                <MessageCircle className="w-6 h-6 text-green-400" />
                            </a>
                        </div>
                    </div>

                    {/* ===== Navigation ===== */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-6 text-transparent bg-clip-text 
                            bg-gradient-to-b from-[#e4e7ef] to-[#9aa3b4]">
                            Navigation
                        </h3>

                        <ul className="space-y-3 text-lg text-slate-300">
                            {[
                                ["Description", "#description"],
                                ["What We Offer", "#what-we-offer"],
                                ["For Clients", "#results-for-clients"],
                                ["About Us", "#about-us"],
                                ["FAQ", "#faq"],
                                ["Contact", "#contact"]
                            ].map(([label, link], i) => (
                                <li key={i}>
                                    <a
                                        href={link}
                                        className="group relative inline-block"
                                    >
                                        <span className="group-hover:text-purple-300 transition">
                                            {label}
                                        </span>
                                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r 
                                            from-purple-400 to-indigo-400 group-hover:w-full 
                                            transition-all duration-300"></span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* ===== Contact block ===== */} 
                    <div>
                        <h3 className="text-2xl font-semibold mb-6 text-transparent bg-clip-text 
                            bg-gradient-to-b from-[#e4e7ef] to-[#9aa3b4]">
                            Contact Us
                        </h3>

                        <div className="space-y-4 text-lg text-slate-300">
                            <div className="flex gap-3 items-center">
                                <PhoneCall className="w-6 h-6 text-purple-300" />
                                <span className="text-2xl">+374 99452772</span>
                            </div>

                            <div className="flex gap-3 items-center">
                                <Mail className="w-6 h-6 text-purple-300" />
                                <span className="text-2xl">areg@igtrm.com</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* === Bottom bar === */}
                <div className="mt-20 border-t border-white/10 pt-6 text-center text-slate-500 text-sm">
                    © 2025 RETENTION_Hub — All Rights Reserved
                </div>
            </div>
        </footer>
    );
}
