"use client";

import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const results = [
  "10–25% increase in retention",
  "15–40% increase in LTV",
  "10–20% reduction in churn",
  "Smart limit optimization → higher net margin",
  "Boost in active players (DAU/MAU)",
  "ROI of 5–12× per month",
];

export default function ResultsForClients() {
  return (
    <section className="relative bg-[#0c0c0f] text-white py-28 px-6">
      {/* Halo Gradient */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-purple-600/20 via-indigo-700/20 to-blue-800/10 blur-3xl"></div>
      </div>

      {/* Header */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-[#d5d9e5] to-[#8c92a3]">
          TYPICAL RESULTS FOR CLIENTS
        </h2>
        <p className="mt-6 text-slate-300 text-lg md:text-xl max-w-2xl mx-auto">
          Our clients usually achieve:
        </p>
      </motion.div>

      {/* Results Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        {results.map((item, idx) => (
          <Tilt
            key={idx}
            tiltMaxAngleX={0}
            tiltMaxAngleY={0}
            scale={1.00}
            transitionSpeed={100}
            className="backdrop-blur-md bg-black/30 rounded-xl shadow-xl p-6 cursor-pointer hover:shadow-purple-500/20 transition-transform"
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-4"
            >
              <motion.div
                className="text-3xl md:text-4xl"
                // animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 1.02, repeat: Infinity, repeatType: "mirror", delay: idx * 0.01 }}
              >
                ✅
              </motion.div>
              <p className="text-lg md:text-xl text-slate-100">{item}</p>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </section>
  );
}
