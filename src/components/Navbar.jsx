"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { name: "Home", href: "home" },
    { name: "What We Offer", href: "offers" },
    { name: "How We Help", href: "use-cases" },
    { name: "FAQ", href: "faq" },
    { name: "Contact", href: "contact" },
  ];

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMobileOpen(false); // close mobile menu
  };

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-black/70 backdrop-blur-md shadow-lg py-2"
          : "bg-black/30 backdrop-blur-md py-4"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" onClick={() => handleScroll("home")} className="flex items-center gap-2">
          <div className="w-9 h-9 flex items-center justify-center rounded-md bg-gradient-to-br from-purple-500 to-blue-400 font-bold text-black">
            RH
          </div>
          <span className="text-white font-medium drop-shadow-lg">
            RetentionHub
          </span>
        </a>
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <button
              key={link.name}
              onClick={() => handleScroll(link.href)}
              className="text-white hover:text-purple-300 transition-colors"
            >
              {link.name}
            </button>
          ))}
        </div>
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setMobileOpen((s) => !s)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <svg
              className="w-6 h-6 text-white"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M4 7H20M4 12H20M4 17H20"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ${mobileOpen ? "max-h-60" : "max-h-0"
          }`}
      >
        <div className="flex flex-col gap-2 pb-4 px-4">
          {links.map((link) => (
            <button
              key={link.name}
              onClick={() => handleScroll(link.href)}
              className="text-white px-2 py-2 rounded hover:bg-white/10 text-left"
            >
              {link.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
