"use client";

import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { ArrowRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-start duration-500 ${
        isScrolled ? "py-3" : "py-4"
      }`}
    >
      <div className={`${
        isScrolled 
          ? "mx-auto w-[90%] md:w-[900px] bg-white/90 backdrop-blur-md border border-gray-200 rounded-xl" 
          : "mx-0 bg-transparent"
      }`}>
        <div className={`container transition-all duration-500 ${!isScrolled ? "w-full" : "w-fit"} py-4 px-3 md:px-3`}>
          <div className="flex items-center justify-between gap-8">
            {/* Logo */}
            <motion.div
              className="flex items-center space-x-2 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => scrollToSection("hero")}
            >
              <div className="h-8 w-8 bg-black rounded-sm flex items-center justify-center">
                <span className="text-white font-light text-sm">L</span>
              </div>
              <span className="font-light text-xl text-gray-900">Letwrk</span>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {[
                { label: "Features", id: "integrations" },
                { label: "Demo", id: "demo" },
                { label: "Use Cases", id: "use-cases" },
                { label: "Pricing", id: "pricing" },
              ].map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-light"
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="ghost" className="font-light text-gray-600 hover:text-gray-900 hover:bg-gray-50">
                Sign In
              </Button>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="font-light bg-black text-white hover:bg-gray-800 border-0">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-gray-600 hover:text-gray-900"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden mt-4 pb-4 border-t border-gray-200"
              >
                <nav className="flex flex-col space-y-4 pt-4">
                  {[
                    { label: "Features", id: "integrations" },
                    { label: "Demo", id: "demo" },
                    { label: "Use Cases", id: "use-cases" },
                    { label: "Pricing", id: "pricing" },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="text-left text-gray-600 hover:text-gray-900 transition-colors duration-200 font-light py-2"
                    >
                      {item.label}
                    </button>
                  ))}
                  <div className="flex flex-col space-y-2 pt-4">
                    <Button variant="ghost" className="justify-start font-light text-gray-600 hover:text-gray-900 hover:bg-gray-50">
                      Sign In
                    </Button>
                    <Button className="justify-start font-light bg-black text-white hover:bg-gray-800 border-0">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
