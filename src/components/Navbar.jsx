"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import LogoDark from "../../public/images/logodark.jpg";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);

  const links = [
    { name: "Home", href: "home" },
    { name: "Description", href: "description" },
    { name: "About Us", href: "about-us" },
    { name: "FAQ", href: "faq" },
    { name: "Contact", href: "contact" },
  ];

  const elegantGradient = "bg-gradient-to-r from-purple-800 via-indigo-700 to-fuchsia-600";

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Update background scrolled state
      setScrolled(currentScrollY > 24);

      // Show/hide header on scroll
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        // scrolling down
        setShowHeader(false);
      } else {
        // scrolling up
        setShowHeader(true);
      }
      lastScrollY.current = currentScrollY;

      // Update active section
      let current = "home";
      links.forEach((link) => {
        const section = document.getElementById(link.href);
        if (section) {
          const top = section.offsetTop - 100;
          if (currentScrollY >= top) current = link.href;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = element.getBoundingClientRect().top + window.scrollY - 100;
      setMobileOpen(false);
      setTimeout(() => {
        window.scrollTo({ top: offset, behavior: "smooth" });
      }, 50);
    }
  };

  return (
    <AnimatePresence>
      {showHeader && (
        <motion.nav
          initial={{ y: -120, opacity: 0 }}
          animate={{ y: 0, opacity: 0.95 }}
          exit={{ y: -120, opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl"
        >
          <div
            className={`relative max-w-7xl mx-auto px-6 flex items-center justify-between transition-all duration-300 rounded-b-3xl
              ${scrolled ? "bg-black/70 shadow-2xl border-b border-purple-600/30" : "bg-black/60"}`}
          >
            {/* Logo */}
            <motion.div
              className="relative w-20 h-20 md:w-24 md:h-24 flex-shrink-0 overflow-hidden rounded-xl"
              whileHover={{ scale: 1.01 }}
            >
              <Image
                src={LogoDark}
                alt="RetentionHub Logo"
                className="object-contain w-full h-full drop-shadow-[0_0_25px_rgba(120,140,255,0.6)]"
              />
            </motion.div>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-6 relative">
              {links.map((link) => (
                <motion.button
                  key={link.name}
                  onClick={() => handleScrollTo(link.href)}
                  className="relative text-white font-semibold px-3 py-2 rounded-lg transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  {link.name}
                  {activeSection === link.href && (
                    <motion.span
                      layoutId="underline"
                      className={`absolute left-0 bottom-0 w-full h-1 rounded-lg ${elegantGradient} shadow-md`}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={() => setMobileOpen((s) => !s)}
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
                aria-label="Toggle menu"
                className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <svg
                  className="w-6 h-6 text-white drop-shadow-lg"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M4 7H20M4 12H20M4 17H20"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                id="mobile-menu"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.35 }}
                className="md:hidden overflow-hidden relative z-50"
              >
                <div className="flex flex-col gap-3 pb-4 px-4 bg-black/70 backdrop-blur-xl border-t border-purple-500/40 rounded-b-2xl">
                  {links.map((link) => (
                    <motion.button
                      key={link.name}
                      onClick={() => handleScrollTo(link.href)}
                      className={`text-white px-4 py-3 rounded-lg transition-colors font-semibold text-left
                        ${activeSection === link.href ? "text-purple-400" : "hover:text-purple-300"}`}
                      whileHover={{ scale: 1.03 }}
                    >
                      {link.name}
                      {activeSection === link.href && (
                        <span className={`block mt-1 h-1 w-full rounded-lg ${elegantGradient}`} />
                      )}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
