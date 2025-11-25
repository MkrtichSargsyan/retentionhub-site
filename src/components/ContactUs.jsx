"use client";

import { useEffect, useRef, useState } from "react";
import Tilt from "react-parallax-tilt";
import emailjs from "@emailjs/browser";

export default function ContactUs() {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  useEffect(() => {
    let isMounted = true;
    const loadScripts = async () => {
      if (!window.THREE) {
        const threeScript = document.createElement("script");
        threeScript.src = "https://cdn.jsdelivr.net/npm/three@0.150.1/build/three.min.js";
        threeScript.async = true;
        document.body.appendChild(threeScript);
        await new Promise((res) => (threeScript.onload = res));
      }

      if (!window.VANTA) {
        const vantaScript = document.createElement("script");
        vantaScript.src = "https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js";
        vantaScript.async = true;
        document.body.appendChild(vantaScript);
        await new Promise((res) => (vantaScript.onload = res));
      }

      if (isMounted && !vantaEffect.current && window.VANTA) {
        vantaEffect.current = window.VANTA.NET({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          backgroundColor: 0x050715,
          color: 0x0a1a3f,
          points: 15.0,
          maxDistance: 20.0,
          spacing: 20.0,
          showDots: false,
          showLines: true,
          lineWidth: 0.5,
          minDistance: 12,
          scale: 1.0,
          scaleMobile: 1.0,
        });
      }
    };

    loadScripts();

    return () => {
      isMounted = false;
      if (vantaEffect.current) vantaEffect.current.destroy();
    };
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .send(
        "service_3nwhhjf",
        "template_9h86ocd",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "N5_RQb05GreAWjcpE"
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error(error);
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section
      ref={vantaRef}
      id="contact"
      className="relative w-full py-24 md:py-36 flex items-center justify-center text-white scroll-mt-18 min-h-[calc(100vh-4rem)] overflow-hidden"
    >
      <div className="absolute inset-0 bg-black/70 z-1 pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl w-full px-6 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div className="flex flex-col items-start justify-center space-y-6">
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-extrabold leading-snug text-white">
            Ready to turn your players into <span className="text-blue-400">long-term profit?</span>
          </h2>
          <p className="text-gray-300 text-base md:text-lg lg:text-xl leading-relaxed max-w-lg">
            Discuss your iGaming retention goals and player engagement strategy. We'll show you how to turn casual players into loyal, high-value customers.
          </p>
        </div>

        <Tilt
          tiltEnable={true}
          tiltMaxAngleX={3}
          tiltMaxAngleY={3}
          glareEnable={true}
          glareMaxOpacity={0.05}
          className="w-full bg-gradient-to-r from-[#050715]/95 to-[#0a0f20]/95 backdrop-blur-md px-6 md:px-8 py-10 rounded-2xl shadow-2xl border border-white/10 flex flex-col"
        >
          <h3 className="text-3xl font-bold mb-4 text-white text-center">Let’s build your retention engine.</h3>

          <form className="space-y-4 flex flex-col flex-1" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full px-4 py-2 rounded-xl bg-gray-900/50 border border-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 text-white text-sm"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full px-4 py-2 rounded-xl bg-gray-900/50 border border-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 text-white text-sm"
              required
            />
            <textarea
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full px-4 py-2 rounded-xl bg-gray-900/50 border border-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 text-white text-sm resize-none flex-1"
              required
            />

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-500 hover:to-purple-600 transition font-bold shadow-lg text-white text-xl mt-auto"
            >
              Send Message
            </button>
            {status && <p className="text-sm text-center mt-2 text-green-400">{status}</p>}
          </form>
        </Tilt>
      </div>
    </section>
  );
}
