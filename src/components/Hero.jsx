"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Hero() {
    const vantaRef = useRef(null);
    const vantaEffect = useRef(null);

    useEffect(() => {
        let isMounted = true;

        const loadScripts = async () => {
            // Load THREE.js
            if (!window.THREE) {
                const threeScript = document.createElement("script");
                threeScript.src =
                    "https://cdn.jsdelivr.net/npm/three@0.150.1/build/three.min.js";
                threeScript.async = true;
                document.body.appendChild(threeScript);
                await new Promise((res) => (threeScript.onload = res));
            }

            // Load VANTA.GLOBE
            if (!window.VANTA) {
                const vantaScript = document.createElement("script");
                vantaScript.src =
                    "https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.globe.min.js";
                vantaScript.async = true;
                document.body.appendChild(vantaScript);
                await new Promise((res) => (vantaScript.onload = res));
            }

            if (isMounted && !vantaEffect.current && window.VANTA) {
                vantaEffect.current = window.VANTA.GLOBE({
                    el: vantaRef.current,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: true,
                    backgroundColor: 0x050505, // very dark background
                    color: 0x5b21b6,            // neon purple
                    size: 1.0,
                    scale: 1.4,
                    scaleMobile: 1.0,
                    points: 10.0,
                    spacing: 18.0,
                    amplitude: 1.8,
                    shine: 0.2,
                    waveSpeed: 1.0,
                });
            }
        };

        loadScripts();

        return () => {
            isMounted = false;
            if (vantaEffect.current) vantaEffect.current.destroy();
        };
    }, []);

    return (
        <section
            ref={vantaRef}
            className="relative min-h-screen flex items-center justify-center text-center overflow-hidden bg-black"
        >
            {/* Overlay to dim the globe */}
            <div className="absolute inset-0 bg-black/70 z-0 pointer-events-none" />

            <motion.div
                className="relative z-10 max-w-3xl px-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <motion.h1
                    className="text-5xl md:text-7xl font-bold text-white leading-tight bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    Retain More.
                    <br />
                    Grow Faster.
                </motion.h1>

                <motion.p
                    className="mt-6 text-lg md:text-xl text-slate-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                >
                    The all-in-one platform to boost retention, engagement, and revenue.
                </motion.p>

                <motion.div
                    className="mt-8 flex justify-center"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    whileHover={{ scale: 1.07, rotate: 1 }}
                >
                    <a
                        href="#get-started"
                        className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold shadow-lg hover:shadow-purple-500/50 transition-transform"
                    >
                        Get Started
                    </a>
                </motion.div>
            </motion.div>

            <style>
                {`
          .animate-gradient-x {
            background-size: 200% 200%;
            animation: gradient-x 6s ease infinite;
          }
          @keyframes gradient-x {
            0% {background-position:0% 50%}
            50% {background-position:100% 50%}
            100% {background-position:0% 50%}
          }
        `}
            </style>
        </section>
    );
}
