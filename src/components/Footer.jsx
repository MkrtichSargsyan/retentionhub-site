"use client";

import { Linkedin, Facebook, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer id="contact" className="bg-slate-950 text-white py-16 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
                {/* Brand */}
                <div>
                    <h2 className="text-2xl font-bold mb-3">RETENTION_Hub</h2>
                    <p className="text-slate-400">
                        Dedicated Retention Services for iGaming Operators Worldwide
                    </p>
                </div>

                {/* Permalinks */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Permalinks</h3>
                    <ul className="space-y-2 text-slate-300">
                        <li>
                            <a href="#what-we-offer" className="hover:text-purple-400 transition">
                                What We Offer
                            </a>
                        </li>
                        <li>
                            <a href="#platforms" className="hover:text-purple-400 transition">
                                For Platforms
                            </a>
                        </li>
                        <li>
                            <a href="#casinos" className="hover:text-purple-400 transition">
                                For Casinos
                            </a>
                        </li>
                        <li>
                            <a href="#start-business" className="hover:text-purple-400 transition">
                                Start a Business
                            </a>
                        </li>
                        <li>
                            <a href="#about" className="hover:text-purple-400 transition">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="hover:text-purple-400 transition">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Privacy / Policies */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Privacy & Policies</h3>
                    <ul className="space-y-2 text-slate-300">
                        <li>
                            <a href="#privacy" className="hover:text-purple-400 transition">
                                Privacy
                            </a>
                        </li>
                        <li>
                            <a href="#privacy-policy" className="hover:text-purple-400 transition">
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a href="#terms" className="hover:text-purple-400 transition">
                                Terms and Conditions
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                    <p className="text-slate-300 mb-2">+374 99452772</p>
                    <p className="text-slate-300 mb-4">Contact@igtrm.com</p>
                    <div className="flex gap-4">
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-purple-400 transition">
                            <Linkedin size={24} />
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-purple-400 transition">
                            <Facebook size={24} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-purple-400 transition">
                            <Twitter size={24} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="mt-12 border-t border-slate-700 pt-6 text-center text-slate-500 text-sm">
                Copyright © RETENTION_Hub 2025
            </div>
        </footer>
    );
}
